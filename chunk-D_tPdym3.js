import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,bt as Lk,aW as Yp,d7 as I3,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,cQ as Nk,cR as Ak,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Nhe,c8 as Sde,aJ as Uhe,bH as k3,c9 as $he,ba as gNe,bc as BO,aB as Cx,aM as Ew,aN as t0,a4 as _N,aq as fx,aO as Dw,aP as r0,a5 as EN,at as hx,b5 as qhe,cX as L3,bd as Ox,a7 as fN,av as Yl,aw as uo,ax as fo,ab as lt$1,b6 as Yo,d8 as Ime,d9 as uNe,C as Pt,a3 as aNe,aA as Rx,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&Gl(0,"po-upload",0);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Upload Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,He,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Fe],encapsulation:2})}return a})();function Ge(a,Ie){if(a&1&&(Tl(0,"div")(1,"po-widget",22)(2,"form",23),Gl(3,"po-input",24),t0(),Gl(4,"po-select",25),t0(),Gl(5,"po-select",26),t0(),Gl(6,"po-switch",27),t0(),Gl(7,"po-switch",28),t0(),sg()()()),a&2){let d=Rx();Vp(2),tw("formGroup",d.actionForm),Vp(),r0(),Vp(),tw("p-options",d.iconOptions),r0(),Vp(),tw("p-options",d.typeOptions),r0(),Vp(),r0(),Vp(),r0();}}var De=(()=>{class a{fb=f(Lk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=Cx();Tl(0,"po-upload",1),Ew("ngModelChange",function(l){return Ky(m),rN(i.upload,l)||(i.upload=l),Xy(l)}),ht("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),_N(4,"json"),Gl(5,"po-info",4),sg(),Gl(6,"po-divider"),Tl(7,"div",2)(8,"form",null,0)(10,"po-input",5),Ew("ngModelChange",function(l){return Ky(m),rN(i.allowedExtensions,l)||(i.allowedExtensions=l),Xy(l)}),ht("p-change",function(){return i.onChangeExtension()}),sg(),t0(),Tl(11,"po-number",6),Ew("ngModelChange",function(l){return Ky(m),rN(i.maxFiles,l)||(i.maxFiles=l),Xy(l)}),ht("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),sg(),t0(),Tl(12,"po-number",7),Ew("ngModelChange",function(l){return Ky(m),rN(i.dragDropHeight,l)||(i.dragDropHeight=l),Xy(l)}),sg(),t0(),Tl(13,"po-number",8),Ew("ngModelChange",function(l){return Ky(m),rN(i.minSize,l)||(i.minSize=l),Xy(l)}),ht("p-change",function(){return i.onChangeMinSize(i.minSize)}),sg(),t0(),Tl(14,"po-number",9),Ew("ngModelChange",function(l){return Ky(m),rN(i.maxSize,l)||(i.maxSize=l),Xy(l)}),ht("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),sg(),t0(),Gl(15,"po-divider"),Tl(16,"po-input",10),Ew("ngModelChange",function(l){return Ky(m),rN(i.label,l)||(i.label=l),Xy(l)}),sg(),t0(),Tl(17,"po-input",11),Ew("ngModelChange",function(l){return Ky(m),rN(i.help,l)||(i.help=l),Xy(l)}),sg(),t0(),Tl(18,"po-input",12),Ew("ngModelChange",function(l){return Ky(m),rN(i.helperText,l)||(i.helperText=l),Xy(l)}),sg(),t0(),Tl(19,"po-input",13),Ew("ngModelChange",function(l){return Ky(m),rN(i.formField,l)||(i.formField=l),Xy(l)}),sg(),t0(),Tl(20,"po-input",14),Ew("ngModelChange",function(l){return Ky(m),rN(i.url,l)||(i.url=l),Xy(l)}),sg(),t0(),Tl(21,"po-input",15),Ew("ngModelChange",function(l){return Ky(m),rN(i.headersLabs,l)||(i.headersLabs=l),Xy(l)}),ht("p-change",function(l){return i.onChangeHeaders(l)}),sg(),t0(),Tl(22,"po-input",16),Ew("ngModelChange",function(l){return Ky(m),rN(i.literals,l)||(i.literals=l),Xy(l)}),ht("p-change",function(){return i.changeLiterals()}),sg(),t0(),Tl(23,"po-input",17),Ew("ngModelChange",function(l){return Ky(m),rN(i.modalActions,l)||(i.modalActions=l),Xy(l)}),ht("p-change",function(){return i.changeModalActions()}),sg(),t0(),Tl(24,"po-checkbox-group",18),Ew("ngModelChange",function(l){return Ky(m),rN(i.properties,l)||(i.properties=l),Xy(l)}),sg(),t0(),fx(25,Ge,8,3,"div"),Tl(26,"po-radio-group",19),Ew("ngModelChange",function(l){return Ky(m),rN(i.size,l)||(i.size=l),Xy(l)}),sg(),t0(),Tl(27,"div",20)(28,"po-button",21),ht("p-click",function(){return i.restore()}),sg()()()();}r&2&&(Dw("ngModel",i.upload),tw("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),r0(),Vp(3),tw("p-value",EN(4,51,i.upload)),Vp(2),tw("p-value",i.event),Vp(5),Dw("ngModel",i.allowedExtensions),r0(),Vp(),Dw("ngModel",i.maxFiles),r0(),Vp(),Dw("ngModel",i.dragDropHeight),r0(),Vp(),Dw("ngModel",i.minSize),r0(),Vp(),Dw("ngModel",i.maxSize),r0(),Vp(2),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.formField),r0(),Vp(),Dw("ngModel",i.url),r0(),Vp(),Dw("ngModel",i.headersLabs),r0(),Vp(),Dw("ngModel",i.literals),r0(),Vp(),Dw("ngModel",i.modalActions),tw("p-disabled",!i.properties.includes("showThumbnail")),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),hx(i.properties.includes("showCustomAction")?25:-1),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Nk,Ak,Qt,mv,C3,O3,Nhe,Sde,Uhe,k3,I3,$he,gNe,BO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Upload Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-upload
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,De],encapsulation:2})}return a})();var Xe=["formOpportunity"],Ze=()=>({maxFileSize:"204800"}),Ue=(()=>{class a{poNotification=f(Yp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&Yl(Xe,7),r&2){let m;uo(m=fo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=Cx();Tl(0,"form",null,0)(2,"div",1)(3,"po-input",2),Ew("ngModelChange",function(l){return Ky(m),rN(i.name,l)||(i.name=l),Xy(l)}),sg(),t0(),sg(),Tl(4,"div",1)(5,"po-textarea",3),Ew("ngModelChange",function(l){return Ky(m),rN(i.biograph,l)||(i.biograph=l),Xy(l)}),sg(),t0(),sg(),Tl(6,"div",1)(7,"po-url",4),Ew("ngModelChange",function(l){return Ky(m),rN(i.linkedin,l)||(i.linkedin=l),Xy(l)}),sg(),t0(),sg(),Tl(8,"div",1)(9,"po-upload",5),Ew("ngModelChange",function(l){return Ky(m),rN(i.resume,l)||(i.resume=l),Xy(l)}),ht("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),sg(),t0(),sg(),Tl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return i.apply()}),sg()()();}if(r&2){let m=Ox(1);Vp(3),Dw("ngModel",i.name),r0(),Vp(2),Dw("ngModel",i.biograph),r0(),Vp(2),Dw("ngModel",i.linkedin),r0(),Vp(2),Dw("ngModel",i.resume),tw("p-restrictions",fN(6,Ze)),r0(),Vp(2),tw("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,O3,qhe,I3,L3],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Upload - Resume"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form #formOpportunity="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-resume"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,et,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ue],encapsulation:2})}return a})();var nt=["upload"],it=["stepper"],ot=["submitForm"],at=["sucessData"],lt=a=>({"po-invisible":a});function rt(a,Ie){if(a&1){let d=Cx();Tl(0,"div",8)(1,"div",9)(2,"p",11),tN(3,"Confirm informations"),sg()(),Gl(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),Tl(7,"po-button",31),ht("p-click",function(){Ky(d);let i=Rx();return Xy(i.confirmSubmit())}),sg()();}if(a&2){let d=Rx();Vp(4),tw("p-value",d.project[0].name||"N/D"),Vp(),tw("p-value",d.title||"N/D"),Vp(),tw("p-value",d.description||"N/D");}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&Yl(nt,7)(it,7)(ot,7)(at,7),r&2){let m;uo(m=fo())&&(i.upload=m.first),uo(m=fo())&&(i.stepper=m.first),uo(m=fo())&&(i.submitForm=m.first),uo(m=fo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=Cx();Tl(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),tN(8,"Welcome, TOTVS!"),sg(),Tl(9,"p",11),tN(10,"Let's submit your project?"),sg()()(),Tl(11,"div",8)(12,"po-button",12),ht("p-click",function(){Ky(m);let l=Ox(2);return Xy(l.next())}),sg()()()(),Tl(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),tN(21,"Please, select your project:"),sg()(),Tl(22,"div",4)(23,"p",16),tN(24,"*Upload a zip file containing your project."),sg()()(),Tl(25,"div",17)(26,"po-icon",18),ht("click",function(){Ky(m);let l=Ox(32);return Xy(l.selectFiles())}),sg(),Tl(27,"po-icon",19),ht("click",function(){Ky(m);let l=Ox(32);return Xy(l.clear())}),sg()()(),Tl(28,"div",4)(29,"label",20),tN(30,"Attached"),sg(),Tl(31,"po-upload",21,2),Ew("ngModelChange",function(l){return Ky(m),rN(i.project,l)||(i.project=l),Xy(l)}),sg(),t0(),sg(),Tl(33,"div",4)(34,"po-input",22),Ew("ngModelChange",function(l){return Ky(m),rN(i.title,l)||(i.title=l),Xy(l)}),sg(),t0(),sg(),Tl(35,"div",4)(36,"po-textarea",23),Ew("ngModelChange",function(l){return Ky(m),rN(i.description,l)||(i.description=l),Xy(l)}),sg(),t0(),sg(),Tl(37,"div",8)(38,"po-button",24),ht("p-click",function(){return i.submitProject()}),sg()()()()(),Tl(39,"po-step",25)(40,"po-widget",7),fx(41,rt,8,3,"div",8),sg()()()(),Tl(42,"po-modal",26,3)(44,"div",4)(45,"p",27),tN(46,"Project successfully submited!"),sg()()();}r&2&&(Vp(13),tw("p-can-active-next-step",i.canSubmitProject.bind(i)),Vp(14),tw("ngClass",hN(13,lt,i.project.length<1)),Vp(2),Pt("po-invisible",i.project.length<1),Vp(2),Dw("ngModel",i.project),tw("p-restrictions",i.restrictions),r0(),Vp(3),Dw("ngModel",i.title),tw("p-disabled",i.project.length<1),r0(),Vp(2),Dw("ngModel",i.description),tw("p-disabled",i.project.length<1),r0(),Vp(2),tw("p-disabled",i.canSubmitProject()),Vp(3),hx(i.canSubmitProject()?41:-1),Vp(),tw("p-primary-action",i.confirm));},dependencies:[TO,nY,J9,eY,Ck,Dk,Qt,O3,qhe,I3,lt$1,$he,Yo,Ime,uNe,gNe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Upload - Realize & Show"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-rs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,pt,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ae],encapsulation:2})}return a})();var ze=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(Tl(0,"po-upload",0),ht("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),sg()),r&2&&tw("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Upload - with Download Button"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-upload-download/sample-po-upload-download.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-download"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ct,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ze],encapsulation:2})}return a})();var Et=()=>[".png",".jpg",".jpeg",".gif"],St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&Gl(0,"po-upload",0),r&2&&tw("p-restrictions",hN(4,St,fN(3,Et)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Upload - with Preview"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-preview"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,gt,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ve],encapsulation:2})}return a})();var je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoUploadComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,"O componente "),Tl(24,"code"),tN(25,"po-upload"),sg(),tN(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),sg(),Tl(27,"ul")(28,"li"),tN(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),sg(),Tl(30,"li"),tN(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),sg(),Tl(32,"li"),tN(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),sg(),Tl(34,"li"),tN(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),sg(),Tl(36,"li"),tN(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),sg(),Tl(38,"li"),tN(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),sg()(),Tl(40,"h4"),tN(41,"Tokens customiz\xE1veis"),sg(),Tl(42,"p"),tN(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(44,"blockquote")(45,"p"),tN(46,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(47,"a",6),tN(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(49,"."),sg()(),Tl(50,"table")(51,"thead")(52,"tr")(53,"th"),tN(54,"Propriedade"),sg(),Tl(55,"th"),tN(56,"Descri\xE7\xE3o"),sg(),Tl(57,"th"),tN(58,"Valor Padr\xE3o"),sg()()(),Tl(59,"tbody")(60,"tr")(61,"td")(62,"strong"),tN(63,"FIELD CONTAINER"),sg()(),Gl(64,"td")(65,"td"),sg(),Tl(66,"tr")(67,"td")(68,"code"),tN(69,"--field-container-title-justify"),sg()(),Tl(70,"td"),tN(71,"Alinhamento horizontal do t\xEDtulo ("),Tl(72,"code"),tN(73,"justify-content"),sg(),tN(74,")"),sg(),Tl(75,"td")(76,"code"),tN(77,"space-between"),sg()()(),Tl(78,"tr")(79,"td")(80,"code"),tN(81,"--field-container-title-flex"),sg()(),Tl(82,"td"),tN(83,"Flex do t\xEDtulo ("),Tl(84,"code"),tN(85,"flex"),sg(),tN(86,")"),sg(),Tl(87,"td")(88,"code"),tN(89,"1 auto"),sg()()(),Tl(90,"tr")(91,"td")(92,"strong"),tN(93,"TEXT SUPPORT"),sg()(),Gl(94,"td")(95,"td"),sg(),Tl(96,"tr")(97,"td")(98,"code"),tN(99,"--font-family-text-support"),sg()(),Tl(100,"td"),tN(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),sg(),Tl(102,"td")(103,"code"),tN(104,"var(--font-family-theme)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),tN(108,"--text-color-text-support"),sg()(),Tl(109,"td"),tN(110,"Cor da fonte no texto de suporte"),sg(),Tl(111,"td")(112,"code"),tN(113,"var(--color-neutral-dark-90)"),sg()()(),Tl(114,"tr")(115,"td")(116,"strong"),tN(117,"UPLOAD CONTENT"),sg()(),Gl(118,"td")(119,"td"),sg(),Tl(120,"tr")(121,"td")(122,"code"),tN(123,"--background-color-content"),sg(),tN(124," \xA0"),sg(),Tl(125,"td"),tN(126,"Cor de fundo"),sg(),Tl(127,"td")(128,"code"),tN(129,"var(--color-neutral-light-10)"),sg()()(),Tl(130,"tr")(131,"td")(132,"code"),tN(133,"--border-color-content"),sg()(),Tl(134,"td"),tN(135,"Cor da borda"),sg(),Tl(136,"td")(137,"code"),tN(138,"var(--color-neutral-light-20)"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),tN(142,"--border-radius-content"),sg()(),Tl(143,"td"),tN(144,"Cont\xE9m o valor do raio dos cantos do elemento"),sg(),Tl(145,"td")(146,"code"),tN(147,"var(--border-radius-md)"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),tN(151,"--text-color-file-name"),sg()(),Tl(152,"td"),tN(153,"Cor do texto do nome do arquivo"),sg(),Tl(154,"td")(155,"code"),tN(156,"var(--color-neutral-dark-90)"),sg()()(),Tl(157,"tr")(158,"td")(159,"code"),tN(160,"--font-family-file-name"),sg()(),Tl(161,"td"),tN(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),sg(),Tl(163,"td")(164,"code"),tN(165,"var(--font-family-theme)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),tN(169,"--text-color-info-bar"),sg()(),Tl(170,"td"),tN(171,"Cor do texto de informa\xE7\xE3o"),sg(),Tl(172,"td")(173,"code"),tN(174,"var(--color-neutral-mid-60)"),sg()()(),Tl(175,"tr")(176,"td")(177,"code"),tN(178,"--font-family-info-bar"),sg()(),Tl(179,"td"),tN(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),sg(),Tl(181,"td")(182,"code"),tN(183,"var(--font-family-theme)"),sg()()(),Tl(184,"tr")(185,"td")(186,"strong"),tN(187,"ERROR STATE"),sg()(),Gl(188,"td")(189,"td"),sg(),Tl(190,"tr")(191,"td")(192,"code"),tN(193,"--background-color-content-error"),sg()(),Tl(194,"td"),tN(195,"Cor de fundo do container de erro"),sg(),Tl(196,"td")(197,"code"),tN(198,"var(--color-neutral-light-00)"),sg()()(),Tl(199,"tr")(200,"td")(201,"code"),tN(202,"--border-color-content-error"),sg()(),Tl(203,"td"),tN(204,"Cor da borda do container de erro"),sg(),Tl(205,"td")(206,"code"),tN(207,"var(--color-feedback-negative-base)"),sg()()(),Tl(208,"tr")(209,"td")(210,"code"),tN(211,"--text-color-error"),sg()(),Tl(212,"td"),tN(213,"Cor do texto do container de erro"),sg(),Tl(214,"td")(215,"code"),tN(216,"var(--color-feedback-negative-dark)"),sg()()(),Tl(217,"tr")(218,"td")(219,"code"),tN(220,"--color-icon-error"),sg()(),Tl(221,"td"),tN(222,"Cor do \xEDcone no estado de erro"),sg(),Tl(223,"td")(224,"code"),tN(225,"var(--color-feedback-negative-base)"),sg()()(),Tl(226,"tr")(227,"td")(228,"code"),tN(229,"--font-family-error"),sg()(),Tl(230,"td"),tN(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),sg(),Tl(232,"td")(233,"code"),tN(234,"var(--font-family-theme)"),sg()()(),Tl(235,"tr")(236,"td")(237,"strong"),tN(238,"UPLOADED STATE"),sg()(),Gl(239,"td")(240,"td"),sg(),Tl(241,"tr")(242,"td")(243,"code"),tN(244,"--background-color-content-uploaded"),sg()(),Tl(245,"td"),tN(246,"Cor de fundo do container com status de enviado"),sg(),Tl(247,"td")(248,"code"),tN(249,"var(--color-neutral-light-00)"),sg()()(),Tl(250,"tr")(251,"td")(252,"code"),tN(253,"--border-color-content-uploaded"),sg()(),Tl(254,"td"),tN(255,"Cor da borda do container com status de enviado"),sg(),Tl(256,"td")(257,"code"),tN(258,"var(--color-neutral-light-20)"),sg()()(),Tl(259,"tr")(260,"td")(261,"strong"),tN(262,"INTERACTIVE STATE"),sg()(),Gl(263,"td")(264,"td"),sg(),Tl(265,"tr")(266,"td")(267,"code"),tN(268,"--text-color-file-name-interactive"),sg()(),Tl(269,"td"),tN(270,"Cor do texto do nome do arquivo quando interativo"),sg(),Tl(271,"td")(272,"code"),tN(273,"var(--color-action-default)"),sg()()(),Tl(274,"tr")(275,"td")(276,"strong"),tN(277,"THUMBNAIL"),sg()(),Gl(278,"td")(279,"td"),sg(),Tl(280,"tr")(281,"td")(282,"code"),tN(283,"--color-icon-thumbnail"),sg()(),Tl(284,"td"),tN(285,"Cor do \xEDcone na thumbnail"),sg(),Tl(286,"td")(287,"code"),tN(288,"var(--color-action-default)"),sg()()(),Tl(289,"tr")(290,"td")(291,"code"),tN(292,"--border-width-thumbnail"),sg()(),Tl(293,"td"),tN(294,"Tamanho da fonte na thumbnail"),sg(),Tl(295,"td")(296,"code"),tN(297,"var(--border-width-sm)"),sg()()(),Tl(298,"tr")(299,"td")(300,"code"),tN(301,"--border-radius-thumbnail"),sg()(),Tl(302,"td"),tN(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),sg(),Tl(304,"td")(305,"code"),tN(306,"var(--border-radius-md)"),sg()()(),Tl(307,"tr")(308,"td")(309,"code"),tN(310,"--background-color-thumbnail"),sg()(),Tl(311,"td"),tN(312,"Cor de fundo na thumbnail"),sg(),Tl(313,"td")(314,"code"),tN(315,"var(--color-neutral-light-05)"),sg()()(),Tl(316,"tr")(317,"td")(318,"strong"),tN(319,"Focused"),sg()(),Gl(320,"td")(321,"td"),sg(),Tl(322,"tr")(323,"td")(324,"code"),tN(325,"--outline-color-focused"),sg()(),Tl(326,"td"),tN(327,"Cor do outline do estado de focus"),sg(),Tl(328,"td")(329,"code"),tN(330,"var(--color-action-focus)"),sg()()()()()(),Tl(331,"div",7)(332,"h4",8),tN(333,"Seletor"),sg(),Tl(334,"pre",9),tN(335,`<po-upload
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
`),sg()(),Tl(336,"h4",10),tN(337,"Propriedades"),sg(),Tl(338,"table",11)(339,"tr",12)(340,"th",13),tN(341,"Nome"),sg(),Tl(342,"th",13),tN(343,"Tipo"),sg(),Tl(344,"th",13),tN(345,"Padr\xE3o"),sg(),Tl(346,"th",13),tN(347,"Descri\xE7\xE3o"),sg()(),Tl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),tN(352," (p-additional-help)"),Gl(353,"br"),sg()(),Tl(354,"div",18),tN(355,"Deprecated"),sg()(),Tl(356,"td",19)(357,"code",20),tN(358,"EventEmitter"),sg()(),Tl(359,"td",21),tN(360,"-"),sg(),Tl(361,"td",22)(362,"em")(363,"strong"),tN(364,"(opcional)"),sg()(),Tl(365,"p"),tN(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(367,"blockquote")(368,"p"),tN(369,"Essa propriedade est\xE1 "),Tl(370,"strong"),tN(371,"depreciada"),sg(),tN(372," e ser\xE1 removida na vers\xE3o "),Tl(373,"code"),tN(374,"23.x.x"),sg(),tN(375,". Recomendamos utilizar a propriedade "),Tl(376,"code"),tN(377,"p-helper"),sg(),tN(378," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),tN(383," p-additional-help-tooltip"),Gl(384,"br"),sg()(),Tl(385,"div",18),tN(386,"Deprecated"),sg()(),Tl(387,"td",19)(388,"code",25),tN(389,"string"),sg()(),Tl(390,"td",21),tN(391,"-"),sg(),Tl(392,"td",22)(393,"em")(394,"strong"),tN(395,"(opcional)"),sg()(),Tl(396,"p"),tN(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(398,"code"),tN(399,"po-helper"),sg(),tN(400,`.
`),Tl(401,"strong"),tN(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(403,"blockquote")(404,"p"),tN(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(406,"blockquote")(407,"p"),tN(408,"Essa propriedade est\xE1 "),Tl(409,"strong"),tN(410,"depreciada"),sg(),tN(411," e ser\xE1 removida na vers\xE3o "),Tl(412,"code"),tN(413,"23.x.x"),sg(),tN(414,". Recomendamos utilizar a propriedade "),Tl(415,"code"),tN(416,"p-helper"),sg(),tN(417," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),tN(422," p-append-in-body"),Gl(423,"br"),sg()()(),Tl(424,"td",19)(425,"code",26),tN(426,"boolean"),sg()(),Tl(427,"td",21)(428,"p")(429,"code"),tN(430,"false"),sg()()(),Tl(431,"td",22)(432,"em")(433,"strong"),tN(434,"(opcional)"),sg()(),Tl(435,"p"),tN(436,"Define que o popover ("),Tl(437,"code"),tN(438,"p-helper"),sg(),tN(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(440,"blockquote")(441,"p"),tN(442,"Quando utilizado com "),Tl(443,"code"),tN(444,"p-helper"),sg(),tN(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),tN(450," p-auto-focus"),Gl(451,"br"),sg()()(),Tl(452,"td",19)(453,"code",26),tN(454,"boolean"),sg()(),Tl(455,"td",21)(456,"p")(457,"code"),tN(458,"false"),sg()()(),Tl(459,"td",22)(460,"em")(461,"strong"),tN(462,"(opcional)"),sg()(),Tl(463,"p"),tN(464,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(465,"blockquote")(466,"p"),tN(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),tN(472," p-auto-upload"),Gl(473,"br"),sg()()(),Tl(474,"td",19)(475,"code",26),tN(476,"boolean"),sg()(),Tl(477,"td",21)(478,"p")(479,"code"),tN(480,"false"),sg()()(),Tl(481,"td",22)(482,"em")(483,"strong"),tN(484,"(opcional)"),sg()(),Tl(485,"p"),tN(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Tl(487,"blockquote")(488,"p"),tN(489,"Esta propriedade funciona somente se a propriedade "),Tl(490,"code"),tN(491,"p-url"),sg(),tN(492," tiver um valor atribu\xEDdo."),sg()()()(),Tl(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),tN(497," p-compact-label"),Gl(498,"br"),sg()()(),Tl(499,"td",19)(500,"code",26),tN(501,"boolean"),sg()(),Tl(502,"td",21)(503,"p")(504,"code"),tN(505,"false"),sg()()(),Tl(506,"td",22)(507,"em")(508,"strong"),tN(509,"(opcional)"),sg()(),Tl(510,"p"),tN(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(512,"p"),tN(513,"Quando habilitado ("),Tl(514,"code"),tN(515,"true"),sg(),tN(516,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(517,"ul")(518,"li")(519,"code"),tN(520,"po-label"),sg()(),Tl(521,"li")(522,"code"),tN(523,"p-requirement (showRequired)"),sg()(),Tl(524,"li")(525,"code"),tN(526,"po-helper"),sg()()(),Tl(527,"p"),tN(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(529,"p"),tN(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(531,"ul")(532,"li")(533,"code"),tN(534,"--field-container-title-justify"),sg()(),Tl(535,"li")(536,"code"),tN(537,"--field-container-title-flex"),sg()()(),Tl(538,"p"),tN(539,"Exemplo:"),sg(),Tl(540,"pre")(541,"code"),tN(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(543,"p"),tN(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),tN(549," p-custom-action"),Gl(550,"br"),sg()()(),Tl(551,"td",19)(552,"code",27),tN(553,"PoProgressAction"),sg()(),Tl(554,"td",21),tN(555,"-"),sg(),Tl(556,"td",22)(557,"em")(558,"strong"),tN(559,"(opcional)"),sg()(),Tl(560,"p"),tN(561,"Define uma a\xE7\xE3o personalizada no componente "),Tl(562,"code"),tN(563,"po-upload"),sg(),tN(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Tl(565,"p"),tN(566,"A a\xE7\xE3o deve implementar a interface "),Tl(567,"strong"),tN(568,"PoProgressAction"),sg(),tN(569,", permitindo configurar propriedades como:"),sg(),Tl(570,"ul")(571,"li")(572,"code"),tN(573,"label"),sg(),tN(574,": Texto do bot\xE3o."),sg(),Tl(575,"li")(576,"code"),tN(577,"icon"),sg(),tN(578,": \xCDcone a ser exibido no bot\xE3o."),sg(),Tl(579,"li")(580,"code"),tN(581,"type"),sg(),tN(582,": Tipo de bot\xE3o (ex.: "),Tl(583,"code"),tN(584,"danger"),sg(),tN(585," ou "),Tl(586,"code"),tN(587,"default"),sg(),tN(588,")."),sg(),Tl(589,"li")(590,"code"),tN(591,"disabled"),sg(),tN(592,": Indica se o bot\xE3o deve estar desabilitado."),sg(),Tl(593,"li")(594,"code"),tN(595,"visible"),sg(),tN(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),sg()(),Tl(597,"p")(598,"strong"),tN(599,"Exemplo de uso:"),sg()(),Tl(600,"pre")(601,"code",28),tN(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),sg()(),Tl(603,"pre")(604,"code",29),tN(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),sg()()()(),Tl(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),tN(610," (p-custom-action-click)"),Gl(611,"br"),sg()()(),Tl(612,"td",19)(613,"code",20),tN(614,"EventEmitter"),sg()(),Tl(615,"td",21),tN(616,"-"),sg(),Tl(617,"td",22)(618,"em")(619,"strong"),tN(620,"(opcional)"),sg()(),Tl(621,"p"),tN(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Tl(623,"code"),tN(624,"p-custom-action"),sg(),tN(625,"."),sg(),Tl(626,"p"),tN(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Tl(628,"p")(629,"strong"),tN(630,"Exemplo de uso:"),sg()(),Tl(631,"pre")(632,"code",28),tN(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),sg()(),Tl(634,"pre")(635,"code",29),tN(636,`customAction: PoProgressAction = {
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
`),sg()()()(),Tl(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),tN(641," p-custom-modal-actions"),Gl(642,"br"),sg()()(),Tl(643,"td",19)(644,"code",30),tN(645,"Array<PoModalAction>"),sg()(),Tl(646,"td",21),tN(647,"-"),sg(),Tl(648,"td",22)(649,"em")(650,"strong"),tN(651,"(opcional)"),sg()(),Tl(652,"p"),tN(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),sg(),Tl(654,"p"),tN(655,"A a\xE7\xE3o deve implementar a interface "),Tl(656,"strong"),tN(657,"PoModalAction"),sg(),tN(658,", permitindo configurar propriedades como:"),sg(),Tl(659,"ul")(660,"li")(661,"code"),tN(662,"label"),sg(),tN(663,": Texto do bot\xE3o."),sg(),Tl(664,"li")(665,"code"),tN(666,"action"),sg(),tN(667,": \xCDcone a ser exibido no bot\xE3o."),sg(),Tl(668,"li")(669,"code"),tN(670,"danger"),sg(),tN(671,": Define a propriedade "),Tl(672,"code"),tN(673,"p-danger"),sg(),tN(674," do bot\xE3o."),sg(),Tl(675,"li")(676,"code"),tN(677,"disabled"),sg(),tN(678,": Indica se o bot\xE3o deve estar desabilitado."),sg(),Tl(679,"li")(680,"code"),tN(681,"visible"),sg(),tN(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),sg()(),Tl(683,"p")(684,"strong"),tN(685,"Exemplo de uso:"),sg()(),Tl(686,"pre")(687,"code",28),tN(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),sg()(),Tl(689,"pre")(690,"code",29),tN(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),sg()()()(),Tl(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),tN(696," p-directory"),Gl(697,"br"),sg()()(),Tl(698,"td",19)(699,"code",26),tN(700,"boolean"),sg()(),Tl(701,"td",21)(702,"p")(703,"code"),tN(704,"false"),sg()()(),Tl(705,"td",22)(706,"em")(707,"strong"),tN(708,"(opcional)"),sg()(),Tl(709,"p"),tN(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Tl(711,"blockquote")(712,"p"),tN(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Tl(714,"blockquote")(715,"p"),tN(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Tl(717,"strong"),tN(718,"Internet Explorer"),sg(),tN(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()()()(),Tl(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),tN(724," p-disabled"),Gl(725,"br"),sg()()(),Tl(726,"td",19)(727,"code",26),tN(728,"boolean"),sg()(),Tl(729,"td",21),tN(730,"-"),sg(),Tl(731,"td",22)(732,"em")(733,"strong"),tN(734,"(opcional)"),sg()(),Tl(735,"p"),tN(736,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),tN(741," p-disabled-remove-file"),Gl(742,"br"),sg()()(),Tl(743,"td",19)(744,"code",26),tN(745,"boolean"),sg()(),Tl(746,"td",21)(747,"p")(748,"code"),tN(749,"false"),sg()()(),Tl(750,"td",22)(751,"em")(752,"strong"),tN(753,"(opcional)"),sg()(),Tl(754,"p"),tN(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),sg()()(),Tl(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),tN(760," p-drag-drop"),Gl(761,"br"),sg()()(),Tl(762,"td",19)(763,"code",26),tN(764,"boolean"),sg()(),Tl(765,"td",21)(766,"p")(767,"code"),tN(768,"false"),sg()()(),Tl(769,"td",22)(770,"em")(771,"strong"),tN(772,"(opcional)"),sg()(),Tl(773,"p"),tN(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Tl(775,"blockquote")(776,"p"),tN(777,"Recomendamos utilizar apenas um "),Tl(778,"code"),tN(779,"po-upload"),sg(),tN(780," com esta funcionalidade por tela."),sg()()()(),Tl(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),tN(785," p-drag-drop-height"),Gl(786,"br"),sg()()(),Tl(787,"td",19)(788,"code",31),tN(789,"number"),sg()(),Tl(790,"td",21)(791,"p")(792,"code"),tN(793,"320"),sg()()(),Tl(794,"td",22)(795,"em")(796,"strong"),tN(797,"(opcional)"),sg()(),Tl(798,"p"),tN(799,"Define em "),Tl(800,"em"),tN(801,"pixels"),sg(),tN(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Tl(803,"code"),tN(804,"160px"),sg(),tN(805,"."),sg(),Tl(806,"blockquote")(807,"p"),tN(808,"Esta propriedade funciona somente se a propriedade "),Tl(809,"code"),tN(810,"p-drag-drop"),sg(),tN(811," estiver habilitada."),sg()()()(),Tl(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),tN(816," p-restrictions"),Gl(817,"br"),sg()()(),Tl(818,"td",19)(819,"code",32),tN(820,"PoUploadFileRestrictions"),sg()(),Tl(821,"td",21),tN(822,"-"),sg(),Tl(823,"td",22)(824,"em")(825,"strong"),tN(826,"(opcional)"),sg()(),Tl(827,"p"),tN(828,"Objeto que segue a defini\xE7\xE3o da interface "),Tl(829,"code"),tN(830,"PoUploadFileRestrictions"),sg(),tN(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg()()(),Tl(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),tN(836," p-form-field"),Gl(837,"br"),sg()()(),Tl(838,"td",19)(839,"code",25),tN(840,"string"),sg()(),Tl(841,"td",21)(842,"p")(843,"code"),tN(844,"files"),sg()()(),Tl(845,"td",22)(846,"em")(847,"strong"),tN(848,"(opcional)"),sg()(),Tl(849,"p"),tN(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Tl(851,"code"),tN(852,"p-url"),sg(),tN(853,"."),sg()()(),Tl(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),tN(858," p-headers"),Gl(859,"br"),sg()()(),Tl(860,"td",19)(861,"code",33),tN(862,"{ [name: string]: string "),sg(),Tl(863,"code",34),tN(864,` Array<string>;
}`),sg()(),Tl(865,"td",21),tN(866,"-"),sg(),Tl(867,"td",22)(868,"p"),tN(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg()()(),Tl(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),tN(874," p-help"),Gl(875,"br"),sg()()(),Tl(876,"td",19)(877,"code",25),tN(878,"string"),sg()(),Tl(879,"td",21),tN(880,"-"),sg(),Tl(881,"td",22)(882,"em")(883,"strong"),tN(884,"(opcional)"),sg()(),Tl(885,"p"),tN(886,"Texto de apoio para o campo."),sg()()(),Tl(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),tN(891," p-hide-restrictions-info"),Gl(892,"br"),sg()()(),Tl(893,"td",19)(894,"code",26),tN(895,"boolean"),sg()(),Tl(896,"td",21)(897,"p")(898,"code"),tN(899,"false"),sg()()(),Tl(900,"td",22)(901,"em")(902,"strong"),tN(903,"(opcional)"),sg()(),Tl(904,"p"),tN(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg()()(),Tl(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),tN(910," p-hide-select-button"),Gl(911,"br"),sg()()(),Tl(912,"td",19)(913,"code",26),tN(914,"boolean"),sg()(),Tl(915,"td",21)(916,"p")(917,"code"),tN(918,"false"),sg()()(),Tl(919,"td",22)(920,"em")(921,"strong"),tN(922,"(opcional)"),sg()(),Tl(923,"p"),tN(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Tl(925,"blockquote")(926,"p"),tN(927,"Caso o valor definido seja "),Tl(928,"code"),tN(929,"true"),sg(),tN(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(931,"code"),tN(932,"selectFiles()"),sg(),tN(933," para sele\xE7\xE3o de arquivos."),sg()()()(),Tl(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),tN(938," p-hide-send-button"),Gl(939,"br"),sg()()(),Tl(940,"td",19)(941,"code",26),tN(942,"boolean"),sg()(),Tl(943,"td",21)(944,"p")(945,"code"),tN(946,"false"),sg()()(),Tl(947,"td",22)(948,"em")(949,"strong"),tN(950,"(opcional)"),sg()(),Tl(951,"p"),tN(952,"Omite o bot\xE3o de envio de arquivos."),sg(),Tl(953,"blockquote")(954,"p"),tN(955,"Caso o valor definido seja "),Tl(956,"code"),tN(957,"true"),sg(),tN(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(959,"code"),tN(960,"sendFiles()"),sg(),tN(961," para envio do(s) arquivo(s) selecionado(s)."),sg()()()(),Tl(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),tN(966," p-multiple"),Gl(967,"br"),sg()()(),Tl(968,"td",19)(969,"code",26),tN(970,"boolean"),sg()(),Tl(971,"td",21),tN(972,"-"),sg(),Tl(973,"td",22)(974,"em")(975,"strong"),tN(976,"(opcional)"),sg()(),Tl(977,"p"),tN(978,"Define se pode selecionar mais de um arquivo."),sg(),Tl(979,"blockquote")(980,"p"),tN(981,"Se utilizada a "),Tl(982,"code"),tN(983,"p-directory"),sg(),tN(984,", habilita-se automaticamente esta propriedade."),sg()()()(),Tl(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),tN(989," (p-keydown)"),Gl(990,"br"),sg()()(),Tl(991,"td",19)(992,"code",20),tN(993,"EventEmitter"),sg()(),Tl(994,"td",21),tN(995,"-"),sg(),Tl(996,"td",22)(997,"em")(998,"strong"),tN(999,"(opcional)"),sg()(),Tl(1e3,"p"),tN(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(1002,"code"),tN(1003,"KeyboardEvent"),sg(),tN(1004," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),tN(1009," p-label"),Gl(1010,"br"),sg()()(),Tl(1011,"td",19)(1012,"code",25),tN(1013,"string"),sg()(),Tl(1014,"td",21),tN(1015,"-"),sg(),Tl(1016,"td",22)(1017,"em")(1018,"strong"),tN(1019,"(opcional)"),sg()(),Tl(1020,"p"),tN(1021,"R\xF3tulo do campo."),sg()()(),Tl(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),tN(1026," p-label-text-wrap"),Gl(1027,"br"),sg()()(),Tl(1028,"td",19)(1029,"code",26),tN(1030,"boolean"),sg()(),Tl(1031,"td",21)(1032,"p")(1033,"code"),tN(1034,"false"),sg()()(),Tl(1035,"td",22)(1036,"em")(1037,"strong"),tN(1038,"(opcional)"),sg()(),Tl(1039,"p"),tN(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(1041,"code"),tN(1042,"p-label"),sg(),tN(1043,". Quando "),Tl(1044,"code"),tN(1045,"p-label-text-wrap"),sg(),tN(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),tN(1051," p-literals"),Gl(1052,"br"),sg()()(),Tl(1053,"td",19)(1054,"code",35),tN(1055,"PoUploadLiterals"),sg()(),Tl(1056,"td",21),tN(1057,"-"),sg(),Tl(1058,"td",22)(1059,"em")(1060,"strong"),tN(1061,"(opcional)"),sg()(),Tl(1062,"p"),tN(1063,"Objeto com as literais usadas no "),Tl(1064,"code"),tN(1065,"po-upload"),sg(),tN(1066,"."),sg(),Tl(1067,"p"),tN(1068,"Existem duas maneiras de customizar o componente:"),sg(),Tl(1069,"ul")(1070,"li"),tN(1071,"passando um objeto implementando a interface "),Tl(1072,"code"),tN(1073,"PoUploadLiterals"),sg(),tN(1074," com todas as literais dispon\xEDveis;"),sg(),Tl(1075,"li"),tN(1076,"passando apenas as literais que deseja customizar:"),Tl(1077,"pre")(1078,"code"),tN(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),sg()()()(),Tl(1080,"p"),tN(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),sg(),Tl(1082,"pre")(1083,"code"),tN(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),sg()(),Tl(1085,"blockquote")(1086,"p"),tN(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Tl(1088,"em"),tN(1089,"browser"),sg(),tN(1090," (pt, en, es, ru)."),sg()()()(),Tl(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),tN(1095," p-loading"),Gl(1096,"br"),sg()()(),Tl(1097,"td",19)(1098,"code",26),tN(1099,"boolean"),sg()(),Tl(1100,"td",21)(1101,"p")(1102,"code"),tN(1103,"false"),sg()()(),Tl(1104,"td",22)(1105,"em")(1106,"strong"),tN(1107,"(opcional)"),sg()(),Tl(1108,"p"),tN(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),Tl(1110,"code"),tN(1111,"Selecionar arquivo"),sg(),tN(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),sg(),Tl(1113,"blockquote")(1114,"p"),tN(1115,"Incompat\xEDvel com "),Tl(1116,"code"),tN(1117,"p-drag-drop"),sg(),tN(1118," e "),Tl(1119,"code"),tN(1120,"p-hide-select-button"),sg(),tN(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),Tl(1122,"code"),tN(1123,"Selecionar arquivo"),sg(),tN(1124,"."),sg()()()(),Tl(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),tN(1129," name"),Gl(1130,"br"),sg()()(),Tl(1131,"td",19)(1132,"code",25),tN(1133,"string"),sg()(),Tl(1134,"td",21),tN(1135,"-"),sg(),Tl(1136,"td",22)(1137,"p"),tN(1138,"Define o valor do atributo "),Tl(1139,"code"),tN(1140,"name"),sg(),tN(1141," do componente."),sg()()(),Tl(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),tN(1146," (ngModelChange)"),Gl(1147,"br"),sg()()(),Tl(1148,"td",19)(1149,"code",20),tN(1150,"EventEmitter"),sg()(),Tl(1151,"td",21),tN(1152,"-"),sg(),Tl(1153,"td",22)(1154,"em")(1155,"strong"),tN(1156,"(opcional)"),sg()(),Tl(1157,"p"),tN(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),Tl(1159,"em"),tN(1160,"tag"),sg(),Tl(1161,"code"),tN(1162,"form"),sg(),tN(1163,"."),sg(),Tl(1164,"p"),tN(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Tl(1166,"code"),tN(1167,"strictTemplates"),sg(),tN(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Tl(1169,"pre")(1170,"code"),tN(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),sg()()()(),Tl(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),tN(1176," (p-cancel)"),Gl(1177,"br"),sg()()(),Tl(1178,"td",19)(1179,"code",20),tN(1180,"EventEmitter"),sg()(),Tl(1181,"td",21),tN(1182,"-"),sg(),Tl(1183,"td",22)(1184,"em")(1185,"strong"),tN(1186,"(opcional)"),sg()(),Tl(1187,"p"),tN(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),sg(),Tl(1189,"blockquote")(1190,"p"),tN(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Tl(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),tN(1196," (p-error)"),Gl(1197,"br"),sg()()(),Tl(1198,"td",19)(1199,"code",20),tN(1200,"EventEmitter"),sg()(),Tl(1201,"td",21),tN(1202,"-"),sg(),Tl(1203,"td",22)(1204,"em")(1205,"strong"),tN(1206,"(opcional)"),sg()(),Tl(1207,"p"),tN(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Tl(1209,"blockquote")(1210,"p"),tN(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(1212,"code"),tN(1213,"HttpErrorResponse"),sg(),tN(1214,"."),sg()()()(),Tl(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),tN(1219," (p-open-modal-preview)"),Gl(1220,"br"),sg()()(),Tl(1221,"td",19)(1222,"code",20),tN(1223,"EventEmitter"),sg()(),Tl(1224,"td",21),tN(1225,"-"),sg(),Tl(1226,"td",22)(1227,"em")(1228,"strong"),tN(1229,"(opcional)"),sg()(),Tl(1230,"p"),tN(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),sg(),Tl(1232,"blockquote")(1233,"p"),tN(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Tl(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),tN(1239," (p-remove)"),Gl(1240,"br"),sg()()(),Tl(1241,"td",19)(1242,"code",20),tN(1243,"EventEmitter"),sg()(),Tl(1244,"td",21),tN(1245,"-"),sg(),Tl(1246,"td",22)(1247,"em")(1248,"strong"),tN(1249,"(opcional)"),sg()(),Tl(1250,"p"),tN(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),sg(),Tl(1252,"blockquote")(1253,"p"),tN(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Tl(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),tN(1259," (p-success)"),Gl(1260,"br"),sg()()(),Tl(1261,"td",19)(1262,"code",20),tN(1263,"EventEmitter"),sg()(),Tl(1264,"td",21),tN(1265,"-"),sg(),Tl(1266,"td",22)(1267,"em")(1268,"strong"),tN(1269,"(opcional)"),sg()(),Tl(1270,"p"),tN(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Tl(1272,"blockquote")(1273,"p"),tN(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(1275,"code"),tN(1276,"HttpResponse"),sg(),tN(1277,"."),sg()()()(),Tl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),tN(1282," (p-upload)"),Gl(1283,"br"),sg()()(),Tl(1284,"td",19)(1285,"code",20),tN(1286,"EventEmitter"),sg()(),Tl(1287,"td",21),tN(1288,"-"),sg(),Tl(1289,"td",22)(1290,"em")(1291,"strong"),tN(1292,"(opcional)"),sg()(),Tl(1293,"p"),tN(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Tl(1295,"blockquote")(1296,"p"),tN(1297,"data, nesta propriedade pode ser informado algum dado"),sg()(),Tl(1298,"pre")(1299,"code"),tN(1300,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Tl(1301,"blockquote")(1302,"p"),tN(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Tl(1304,"code"),tN(1305,"data"),sg(),tN(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),sg()(),Tl(1307,"pre")(1308,"code"),tN(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),sg()()()(),Tl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),tN(1314," p-optional"),Gl(1315,"br"),sg()()(),Tl(1316,"td",19)(1317,"code",26),tN(1318,"boolean"),sg()(),Tl(1319,"td",21)(1320,"p")(1321,"code"),tN(1322,"false"),sg()()(),Tl(1323,"td",22)(1324,"em")(1325,"strong"),tN(1326,"(opcional)"),sg()(),Tl(1327,"p"),tN(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1329,"blockquote")(1330,"p"),tN(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1332,"ul")(1333,"li"),tN(1334,"O campo conter "),Tl(1335,"code"),tN(1336,"p-required"),sg(),tN(1337,";"),sg(),Tl(1338,"li"),tN(1339,"N\xE3o possuir "),Tl(1340,"code"),tN(1341,"p-help"),sg(),tN(1342," e/ou "),Tl(1343,"code"),tN(1344,"p-label"),sg(),tN(1345,"."),sg()()()(),Tl(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),tN(1350," p-helper"),Gl(1351,"br"),sg()()(),Tl(1352,"td",19)(1353,"code",36),tN(1354,"PoHelperOptions "),sg(),Tl(1355,"code",25),tN(1356," string"),sg()(),Tl(1357,"td",21),tN(1358,"-"),sg(),Tl(1359,"td",22)(1360,"em")(1361,"strong"),tN(1362,"(opcional)"),sg()(),Tl(1363,"p"),tN(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1365,"code"),tN(1366,"p-label"),sg(),tN(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1368,"code"),tN(1369,"p-label"),sg(),tN(1370,"."),sg(),Tl(1371,"blockquote")(1372,"p"),tN(1373,"Para mais informa\xE7\xF5es acesse: "),Tl(1374,"a",37),tN(1375,"https://po-ui.io/documentation/po-helper"),sg(),tN(1376,"."),sg()(),Tl(1377,"blockquote")(1378,"p"),tN(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1380,"code"),tN(1381,"p-additional-help-tooltip"),sg(),tN(1382," e "),Tl(1383,"code"),tN(1384,"p-additional-help"),sg(),tN(1385,") ser\xE1 ignorado."),sg()()()(),Tl(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),tN(1390," p-required"),Gl(1391,"br"),sg()()(),Tl(1392,"td",19)(1393,"code",26),tN(1394,"boolean"),sg()(),Tl(1395,"td",21)(1396,"p")(1397,"code"),tN(1398,"false"),sg()()(),Tl(1399,"td",22)(1400,"em")(1401,"strong"),tN(1402,"(opcional)"),sg()(),Tl(1403,"p"),tN(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),tN(1409," p-required-url"),Gl(1410,"br"),sg()()(),Tl(1411,"td",19)(1412,"code",26),tN(1413,"boolean"),sg()(),Tl(1414,"td",21)(1415,"p")(1416,"code"),tN(1417,"true"),sg()()(),Tl(1418,"td",22)(1419,"em")(1420,"strong"),tN(1421,"(opcional)"),sg()(),Tl(1422,"p"),tN(1423,"Define se a propriedade "),Tl(1424,"code"),tN(1425,"p-url"),sg(),tN(1426," \xE9 obrigat\xF3ria."),sg(),Tl(1427,"p"),tN(1428,"Caso a propriedade seja definida como "),Tl(1429,"code"),tN(1430,"false"),sg(),tN(1431,":"),sg(),Tl(1432,"ul")(1433,"li"),tN(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),Tl(1435,"code"),tN(1436,"p-url"),sg(),tN(1437," definida."),sg(),Tl(1438,"li"),tN(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),Tl(1440,"code"),tN(1441,"p-url"),sg(),tN(1442," seja definida."),sg()(),Tl(1443,"blockquote")(1444,"p"),tN(1445,"Se utilizada com a propriedade "),Tl(1446,"code"),tN(1447,"p-auto-upload"),sg(),tN(1448," definida como "),Tl(1449,"code"),tN(1450,"true"),sg(),tN(1451," ser\xE1 necess\xE1rio definir a propriedade "),Tl(1452,"code"),tN(1453,"p-url"),sg(),tN(1454,"."),sg()()()(),Tl(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),tN(1459," p-show-required"),Gl(1460,"br"),sg()()(),Tl(1461,"td",19)(1462,"code",26),tN(1463,"boolean"),sg()(),Tl(1464,"td",21),tN(1465,"-"),sg(),Tl(1466,"td",22)(1467,"p"),tN(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1469,"blockquote")(1470,"p"),tN(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1472,"ul")(1473,"li"),tN(1474,"N\xE3o possuir "),Tl(1475,"code"),tN(1476,"p-help"),sg(),tN(1477," e/ou "),Tl(1478,"code"),tN(1479,"p-label"),sg(),tN(1480,"."),sg()()()(),Tl(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),tN(1485," p-show-thumbnail"),Gl(1486,"br"),sg()()(),Tl(1487,"td",19)(1488,"code",26),tN(1489,"boolean"),sg()(),Tl(1490,"td",21)(1491,"p")(1492,"code"),tN(1493,"true"),sg()()(),Tl(1494,"td",22)(1495,"em")(1496,"strong"),tN(1497,"(opcional)"),sg()(),Tl(1498,"p"),tN(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Tl(1500,"blockquote")(1501,"p"),tN(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),Tl(1503,"code"),tN(1504,".png"),sg(),tN(1505,", "),Tl(1506,"code"),tN(1507,".jpg"),sg(),tN(1508,", "),Tl(1509,"code"),tN(1510,".jpeg"),sg(),tN(1511," e "),Tl(1512,"code"),tN(1513,".gif"),sg(),tN(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),sg()()()(),Tl(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),tN(1519," p-size"),Gl(1520,"br"),sg()()(),Tl(1521,"td",19)(1522,"code",25),tN(1523,"string"),sg()(),Tl(1524,"td",21)(1525,"p")(1526,"code"),tN(1527,"medium"),sg()()(),Tl(1528,"td",22)(1529,"em")(1530,"strong"),tN(1531,"(opcional)"),sg()(),Tl(1532,"p"),tN(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),sg(),Tl(1534,"ul")(1535,"li")(1536,"code"),tN(1537,"small"),sg(),tN(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1539,"li")(1540,"code"),tN(1541,"medium"),sg(),tN(1542,": altura do button como 44px."),sg()(),Tl(1543,"blockquote")(1544,"p"),tN(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1546,"code"),tN(1547,"medium"),sg(),tN(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1549,"a",38),tN(1550,"po-theme"),sg(),tN(1551,"."),sg()()()(),Tl(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),tN(1556," p-url"),Gl(1557,"br"),sg()()(),Tl(1558,"td",19)(1559,"code",25),tN(1560,"string"),sg()(),Tl(1561,"td",21),tN(1562,"-"),sg(),Tl(1563,"td",22)(1564,"p"),tN(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg()()()(),Tl(1566,"h3",10),tN(1567,"M\xE9todos"),sg(),Tl(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),tN(1574," clear "),sg()()()()(),Tl(1575,"tr",22)(1576,"td",22)(1577,"p"),tN(1578,"M\xE9todo respons\xE1vel por "),Tl(1579,"strong"),tN(1580,"limpar"),sg(),tN(1581," o(s) arquivo(s) selecionado(s)."),sg()()()(),Gl(1582,"br"),Tl(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),tN(1589," focus "),sg()()()()(),Tl(1590,"tr",22)(1591,"td",22)(1592,"p"),tN(1593,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1594,"p"),tN(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1596,"pre")(1597,"code"),tN(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),sg()()()()(),Gl(1599,"br"),Tl(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),tN(1606," closeModal "),sg()()()()(),Tl(1607,"tr",22)(1608,"td",22)(1609,"p"),tN(1610,"M\xE9todo respons\xE1vel por fechar o modal."),sg()()()(),Gl(1611,"br"),Tl(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),tN(1618," selectFiles "),sg()()()()(),Tl(1619,"tr",22)(1620,"td",22)(1621,"p"),tN(1622,"M\xE9todo respons\xE1vel por "),Tl(1623,"strong"),tN(1624,"abrir"),sg(),tN(1625," a janela para sele\xE7\xE3o de arquivo(s)."),sg()()()(),Gl(1626,"br"),Tl(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),tN(1633," sendFiles "),sg()()()()(),Tl(1634,"tr",22)(1635,"td",22)(1636,"p"),tN(1637,"M\xE9todo respons\xE1vel por "),Tl(1638,"strong"),tN(1639,"enviar"),sg(),tN(1640," o(s) arquivo(s) selecionado(s)."),sg()()()(),Gl(1641,"br"),Tl(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),tN(1648," showAdditionalHelp "),sg()()()()(),Tl(1649,"tr",22)(1650,"td",22)(1651,"p"),tN(1652,"M\xE9todo que exibe "),Tl(1653,"code"),tN(1654,"p-helper"),sg(),tN(1655," ou executa a a\xE7\xE3o definida em "),Tl(1656,"code"),tN(1657,"p-helper{eventOnClick}"),sg(),tN(1658," ou em "),Tl(1659,"code"),tN(1660,"p-additionalHelp"),sg(),tN(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1662,"code"),tN(1663,"p-keydown"),sg(),tN(1664,"."),sg(),Tl(1665,"blockquote")(1666,"p"),tN(1667,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1668,"code"),tN(1669,"po-helper"),sg(),tN(1670," quando o componente estiver com foco."),sg()(),Tl(1671,"pre")(1672,"code"),tN(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),sg()(),Tl(1674,"pre")(1675,"code"),tN(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1677,"br"),Tl(1678,"h3"),tN(1679,"Interfaces"),sg(),Tl(1680,"h4",41)(1681,"code",5),tN(1682,"PoUploadFileRestrictions"),sg()(),Tl(1683,"div",2)(1684,"p"),tN(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),sg()(),Tl(1686,"h4",10),tN(1687,"Propriedades"),sg(),Tl(1688,"table",11)(1689,"tr",12)(1690,"th",13),tN(1691,"Nome"),sg(),Tl(1692,"th",13),tN(1693,"Tipo"),sg(),Tl(1694,"th",13),tN(1695,"Descri\xE7\xE3o"),sg()(),Tl(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),tN(1700," allowedExtensions"),Gl(1701,"br"),sg()()(),Tl(1702,"td",19)(1703,"code",42),tN(1704,"Array<string>"),sg()(),Tl(1705,"td",22)(1706,"em")(1707,"strong"),tN(1708,"(opcional)"),sg()(),Tl(1709,"p"),tN(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),sg(),Tl(1711,"pre")(1712,"code"),tN(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),sg()()()(),Tl(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),tN(1718," maxFileSize"),Gl(1719,"br"),sg()()(),Tl(1720,"td",19)(1721,"code",31),tN(1722,"number"),sg()(),Tl(1723,"td",22)(1724,"em")(1725,"strong"),tN(1726,"(opcional)"),sg()(),Tl(1727,"p"),tN(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),sg(),Tl(1729,"p"),tN(1730,"Deve ser informado um valor em "),Tl(1731,"em"),tN(1732,"bytes"),sg(),tN(1733,", por exemplo: "),Tl(1734,"code"),tN(1735,"31457280"),sg(),tN(1736," (30MB)."),sg(),Tl(1737,"blockquote")(1738,"p"),tN(1739,"Por padr\xE3o o valor \xE9 "),Tl(1740,"code"),tN(1741,"30 MB"),sg(),tN(1742,"."),sg()()()(),Tl(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),tN(1747," maxFiles"),Gl(1748,"br"),sg()()(),Tl(1749,"td",19)(1750,"code",31),tN(1751,"number"),sg()(),Tl(1752,"td",22)(1753,"em")(1754,"strong"),tN(1755,"(opcional)"),sg()(),Tl(1756,"p"),tN(1757,"Quantidade m\xE1xima de arquivos para o "),Tl(1758,"em"),tN(1759,"upload"),sg(),tN(1760,"."),sg(),Tl(1761,"blockquote")(1762,"p"),tN(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),Tl(1764,"code"),tN(1765,"p-multiple"),sg(),tN(1766," estiver habilitada e seu valor for maior do que zero."),sg()()()(),Tl(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),tN(1771," minFileSize"),Gl(1772,"br"),sg()()(),Tl(1773,"td",19)(1774,"code",31),tN(1775,"number"),sg()(),Tl(1776,"td",22)(1777,"em")(1778,"strong"),tN(1779,"(opcional)"),sg()(),Tl(1780,"p"),tN(1781,"Tamanho m\xEDnimo em "),Tl(1782,"em"),tN(1783,"bytes"),sg(),tN(1784," do arquivo que ser\xE1 enviado ao servidor."),sg(),Tl(1785,"blockquote")(1786,"p"),tN(1787,"Por padr\xE3o o valor \xE9 "),Tl(1788,"code"),tN(1789,"0"),sg(),tN(1790,"."),sg()()()()(),Tl(1791,"h4",41)(1792,"code",5),tN(1793,"PoUploadLiterals"),sg()(),Tl(1794,"div",2)(1795,"p"),tN(1796,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1797,"code"),tN(1798,"po-upload"),sg(),tN(1799,"."),sg()(),Tl(1800,"h4",10),tN(1801,"Propriedades"),sg(),Tl(1802,"table",11)(1803,"tr",12)(1804,"th",13),tN(1805,"Nome"),sg(),Tl(1806,"th",13),tN(1807,"Tipo"),sg(),Tl(1808,"th",13),tN(1809,"Descri\xE7\xE3o"),sg()(),Tl(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),tN(1814," close"),Gl(1815,"br"),sg()()(),Tl(1816,"td",19)(1817,"code",25),tN(1818,"string"),sg()(),Tl(1819,"td",22)(1820,"em")(1821,"strong"),tN(1822,"(opcional)"),sg()(),Tl(1823,"p"),tN(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),sg()()(),Tl(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),tN(1829," continue"),Gl(1830,"br"),sg()()(),Tl(1831,"td",19)(1832,"code",25),tN(1833,"string"),sg()(),Tl(1834,"td",22)(1835,"em")(1836,"strong"),tN(1837,"(opcional)"),sg()(),Tl(1838,"p"),tN(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),sg()()(),Tl(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),tN(1844," doneText"),Gl(1845,"br"),sg()()(),Tl(1846,"td",19)(1847,"code",25),tN(1848,"string"),sg()(),Tl(1849,"td",22)(1850,"em")(1851,"strong"),tN(1852,"(opcional)"),sg()(),Tl(1853,"p"),tN(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),sg()()(),Tl(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),tN(1859," dragFilesHere"),Gl(1860,"br"),sg()()(),Tl(1861,"td",19)(1862,"code",25),tN(1863,"string"),sg()(),Tl(1864,"td",22)(1865,"em")(1866,"strong"),tN(1867,"(opcional)"),sg()(),Tl(1868,"p"),tN(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),Tl(1870,"code"),tN(1871,"p-drag-drop"),sg(),tN(1872,"."),sg()()(),Tl(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),tN(1877," dragFoldersHere"),Gl(1878,"br"),sg()()(),Tl(1879,"td",19)(1880,"code",25),tN(1881,"string"),sg()(),Tl(1882,"td",22)(1883,"em")(1884,"strong"),tN(1885,"(opcional)"),sg()(),Tl(1886,"p"),tN(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),Tl(1888,"code"),tN(1889,"p-drag-drop"),sg(),tN(1890,"."),sg()()(),Tl(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),tN(1895," dropFilesHere"),Gl(1896,"br"),sg()()(),Tl(1897,"td",19)(1898,"code",25),tN(1899,"string"),sg()(),Tl(1900,"td",22)(1901,"em")(1902,"strong"),tN(1903,"(opcional)"),sg()(),Tl(1904,"p"),tN(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),Tl(1906,"code"),tN(1907,"p-drag-drop"),sg()()()(),Tl(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),tN(1912," dropFoldersHere"),Gl(1913,"br"),sg()()(),Tl(1914,"td",19)(1915,"code",25),tN(1916,"string"),sg()(),Tl(1917,"td",22)(1918,"em")(1919,"strong"),tN(1920,"(opcional)"),sg()(),Tl(1921,"p"),tN(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),Tl(1923,"code"),tN(1924,"p-drag-drop"),sg(),tN(1925,"."),sg()()(),Tl(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),tN(1930," errorOccurred"),Gl(1931,"br"),sg()()(),Tl(1932,"td",19)(1933,"code",25),tN(1934,"string"),sg()(),Tl(1935,"td",22)(1936,"em")(1937,"strong"),tN(1938,"(opcional)"),sg()(),Tl(1939,"p"),tN(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),sg()()(),Tl(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),tN(1945," files"),Gl(1946,"br"),sg()()(),Tl(1947,"td",19)(1948,"code",25),tN(1949,"string"),sg()(),Tl(1950,"td",22)(1951,"em")(1952,"strong"),tN(1953,"(opcional)"),sg()(),Tl(1954,"p"),tN(1955,"Par\xE2metro "),Tl(1956,"em"),tN(1957,"files"),sg(),tN(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Tl(1959,"em"),tN(1960,"dragDrop"),sg(),tN(1961,"."),sg()()(),Tl(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),tN(1966," folders"),Gl(1967,"br"),sg()()(),Tl(1968,"td",19)(1969,"code",25),tN(1970,"string"),sg()(),Tl(1971,"td",22)(1972,"em")(1973,"strong"),tN(1974,"(opcional)"),sg()(),Tl(1975,"p"),tN(1976,"Par\xE2metro "),Tl(1977,"em"),tN(1978,"folders"),sg(),tN(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Tl(1980,"em"),tN(1981,"dragDrop"),sg(),tN(1982,"."),sg()()(),Tl(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),tN(1987," invalidDropArea"),Gl(1988,"br"),sg()()(),Tl(1989,"td",19)(1990,"code",25),tN(1991,"string"),sg()(),Tl(1992,"td",22)(1993,"em")(1994,"strong"),tN(1995,"(opcional)"),sg()(),Tl(1996,"p"),tN(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),Tl(1998,"em"),tN(1999,"dragDrop"),sg(),tN(2e3,"."),sg()()(),Tl(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),tN(2005," preview"),Gl(2006,"br"),sg()()(),Tl(2007,"td",19)(2008,"code",25),tN(2009,"string"),sg()(),Tl(2010,"td",22)(2011,"em")(2012,"strong"),tN(2013,"(opcional)"),sg()(),Tl(2014,"p"),tN(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),sg()()(),Tl(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),tN(2020," selectFile"),Gl(2021,"br"),sg()()(),Tl(2022,"td",19)(2023,"code",25),tN(2024,"string"),sg()(),Tl(2025,"td",22)(2026,"em")(2027,"strong"),tN(2028,"(opcional)"),sg()(),Tl(2029,"p"),tN(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),sg()()(),Tl(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),tN(2035," selectFiles"),Gl(2036,"br"),sg()()(),Tl(2037,"td",19)(2038,"code",25),tN(2039,"string"),sg()(),Tl(2040,"td",22)(2041,"em")(2042,"strong"),tN(2043,"(opcional)"),sg()(),Tl(2044,"p"),tN(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Tl(2046,"code"),tN(2047,"p-multiple"),sg(),tN(2048,"."),sg()()(),Tl(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),tN(2053," selectFilesOnComputer"),Gl(2054,"br"),sg()()(),Tl(2055,"td",19)(2056,"code",25),tN(2057,"string"),sg()(),Tl(2058,"td",22)(2059,"em")(2060,"strong"),tN(2061,"(opcional)"),sg()(),Tl(2062,"p"),tN(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Tl(2064,"em"),tN(2065,"dragDrop"),sg(),tN(2066,"."),sg()()(),Tl(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),tN(2071," selectFolder"),Gl(2072,"br"),sg()()(),Tl(2073,"td",19)(2074,"code",25),tN(2075,"string"),sg()(),Tl(2076,"td",22)(2077,"em")(2078,"strong"),tN(2079,"(opcional)"),sg()(),Tl(2080,"p"),tN(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Tl(2082,"code"),tN(2083,"p-directory"),sg(),tN(2084,"."),sg()()(),Tl(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),tN(2089," selectFolderOnComputer"),Gl(2090,"br"),sg()()(),Tl(2091,"td",19)(2092,"code",25),tN(2093,"string"),sg()(),Tl(2094,"td",22)(2095,"em")(2096,"strong"),tN(2097,"(opcional)"),sg()(),Tl(2098,"p"),tN(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Tl(2100,"em"),tN(2101,"dragDrop"),sg(),tN(2102,"."),sg()()(),Tl(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),tN(2107," sentWithSuccess"),Gl(2108,"br"),sg()()(),Tl(2109,"td",19)(2110,"code",25),tN(2111,"string"),sg()(),Tl(2112,"td",22)(2113,"em")(2114,"strong"),tN(2115,"(opcional)"),sg()(),Tl(2116,"p"),tN(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),sg()()(),Tl(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),tN(2122," startSending"),Gl(2123,"br"),sg()()(),Tl(2124,"td",19)(2125,"code",25),tN(2126,"string"),sg()(),Tl(2127,"td",22)(2128,"em")(2129,"strong"),tN(2130,"(opcional)"),sg()(),Tl(2131,"p"),tN(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),sg()()(),Tl(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),tN(2137," thumbnail"),Gl(2138,"br"),sg()()(),Tl(2139,"td",19)(2140,"code",25),tN(2141,"string"),sg()(),Tl(2142,"td",22)(2143,"em")(2144,"strong"),tN(2145,"(opcional)"),sg()(),Tl(2146,"p"),tN(2147,"Texto do leitor da miniatura da imagem."),sg()()(),Tl(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),tN(2152," tryAgain"),Gl(2153,"br"),sg()()(),Tl(2154,"td",19)(2155,"code",25),tN(2156,"string"),sg()(),Tl(2157,"td",22)(2158,"em")(2159,"strong"),tN(2160,"(opcional)"),sg()(),Tl(2161,"p"),tN(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),sg()()(),Tl(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),tN(2167," uploadingText"),Gl(2168,"br"),sg()()(),Tl(2169,"td",19)(2170,"code",25),tN(2171,"string"),sg()(),Tl(2172,"td",22)(2173,"em")(2174,"strong"),tN(2175,"(opcional)"),sg()(),Tl(2176,"p"),tN(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),sg()()()(),Tl(2178,"h4",41)(2179,"code",5),tN(2180,"PoProgressAction"),sg()(),Tl(2181,"div",2)(2182,"p"),tN(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),sg()(),Tl(2184,"h4",10),tN(2185,"Propriedades"),sg(),Tl(2186,"table",11)(2187,"tr",12)(2188,"th",13),tN(2189,"Nome"),sg(),Tl(2190,"th",13),tN(2191,"Tipo"),sg(),Tl(2192,"th",13),tN(2193,"Descri\xE7\xE3o"),sg()(),Tl(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),tN(2198," disabled"),Gl(2199,"br"),sg()()(),Tl(2200,"td",19)(2201,"code",26),tN(2202,"boolean "),sg(),Tl(2203,"code",43),tN(2204," Function"),sg()(),Tl(2205,"td",22)(2206,"em")(2207,"strong"),tN(2208,"(opcional)"),sg()(),Tl(2209,"p"),tN(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),sg(),Tl(2211,"p"),tN(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),sg()()(),Tl(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),tN(2217," icon"),Gl(2218,"br"),sg()()(),Tl(2219,"td",19)(2220,"code",25),tN(2221,"string "),sg(),Tl(2222,"code",44),tN(2223," TemplateRef<void>"),sg()(),Tl(2224,"td",22)(2225,"em")(2226,"strong"),tN(2227,"(opcional)"),sg()(),Tl(2228,"p"),tN(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(2230,"p"),tN(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(2232,"a",45),tN(2233,"Biblioteca de \xEDcones"),sg(),tN(2234,". conforme exemplo abaixo:"),sg(),Tl(2235,"pre")(2236,"code"),tN(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),sg()(),Tl(2238,"p"),tN(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(2240,"pre")(2241,"code"),tN(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),sg()(),Tl(2243,"p"),tN(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(2245,"code"),tN(2246,"TemplateRef"),sg(),tN(2247,`, conforme exemplo abaixo:
component.html:`),sg(),Tl(2248,"pre")(2249,"code"),tN(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),sg()(),Tl(2251,"p"),tN(2252,"component.ts:"),sg(),Tl(2253,"pre")(2254,"code"),tN(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),sg()()()(),Tl(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),tN(2260," label"),Gl(2261,"br"),sg()()(),Tl(2262,"td",19)(2263,"code",25),tN(2264,"string"),sg()(),Tl(2265,"td",22)(2266,"em")(2267,"strong"),tN(2268,"(opcional)"),sg()(),Tl(2269,"p"),tN(2270,"R\xF3tulo da a\xE7\xE3o."),sg()()(),Tl(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),tN(2275," type"),Gl(2276,"br"),sg()()(),Tl(2277,"td",19)(2278,"code",25),tN(2279,"string"),sg()(),Tl(2280,"td",22)(2281,"em")(2282,"strong"),tN(2283,"(opcional)"),sg()(),Tl(2284,"p"),tN(2285,"Define a cor do item, sendo "),Tl(2286,"code"),tN(2287,"default"),sg(),tN(2288," o padr\xE3o."),sg(),Tl(2289,"p"),tN(2290,"Valores v\xE1lidos:"),sg(),Tl(2291,"ul")(2292,"li")(2293,"code"),tN(2294,"default"),sg()(),Tl(2295,"li")(2296,"code"),tN(2297,"danger"),sg(),tN(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),sg()()()(),Tl(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),tN(2303," visible"),Gl(2304,"br"),sg()()(),Tl(2305,"td",19)(2306,"code",26),tN(2307,"boolean "),sg(),Tl(2308,"code",43),tN(2309," Function"),sg()(),Tl(2310,"td",22)(2311,"em")(2312,"strong"),tN(2313,"(opcional)"),sg()(),Tl(2314,"p"),tN(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg(),Tl(2316,"blockquote")(2317,"p"),tN(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg()(),Tl(2319,"p"),tN(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),sg(),Tl(2321,"ul")(2322,"li")(2323,"p"),tN(2324,"Fun\xE7\xE3o que deve retornar um booleano."),sg()(),Tl(2325,"li")(2326,"p"),tN(2327,"Informar diretamente um valor booleano."),sg()()()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-upload-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Me,qe,ke,Le,Re,Oe,je],encapsulation:2})}return a})();var vt=[{path:"",component:Be}],Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(vt),vL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ne]})}return a})();export{cn as DocPoUploadModule};