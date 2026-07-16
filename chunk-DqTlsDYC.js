import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,bt as Bk,aW as Yp,d7 as I3,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,cQ as kk,cR as Ok,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,bH as M3,c9 as Yhe,ba as _Ne,bc as $O,aB as Sx,aM as ww,aN as r0,a4 as wN,aq as gx,aO as Ew,aP as o0,a5 as bN,at as mx,b5 as $he,cX as L3,bd as Fx,a7 as gN,av as Yl,aw as uo,ax as fo,ab as lt$1,b6 as Yo,d8 as Ome,d9 as mNe,P as Pt,a3 as lNe,aA as Nx,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var De=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&Gl(0,"po-upload",0);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Upload Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,He,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,De],encapsulation:2,changeDetection:1})}return a})();function Ge(a,Ie){if(a&1&&(Tl(0,"div")(1,"po-widget",22)(2,"form",23),Gl(3,"po-input",24),r0(),Gl(4,"po-select",25),r0(),Gl(5,"po-select",26),r0(),Gl(6,"po-switch",27),r0(),Gl(7,"po-switch",28),r0(),sg()()()),a&2){let d=Nx();Vp(2),nw("formGroup",d.actionForm),Vp(),o0(),Vp(),nw("p-options",d.iconOptions),o0(),Vp(),nw("p-options",d.typeOptions),o0(),Vp(),o0(),Vp(),o0();}}var Te=(()=>{class a{fb=f(Bk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=Sx();Tl(0,"po-upload",1),ww("ngModelChange",function(l){return Ky(m),sN(i.upload,l)||(i.upload=l),Xy(l)}),ht("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),wN(4,"json"),Gl(5,"po-info",4),sg(),Gl(6,"po-divider"),Tl(7,"div",2)(8,"form",null,0)(10,"po-input",5),ww("ngModelChange",function(l){return Ky(m),sN(i.allowedExtensions,l)||(i.allowedExtensions=l),Xy(l)}),ht("p-change",function(){return i.onChangeExtension()}),sg(),r0(),Tl(11,"po-number",6),ww("ngModelChange",function(l){return Ky(m),sN(i.maxFiles,l)||(i.maxFiles=l),Xy(l)}),ht("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),sg(),r0(),Tl(12,"po-number",7),ww("ngModelChange",function(l){return Ky(m),sN(i.dragDropHeight,l)||(i.dragDropHeight=l),Xy(l)}),sg(),r0(),Tl(13,"po-number",8),ww("ngModelChange",function(l){return Ky(m),sN(i.minSize,l)||(i.minSize=l),Xy(l)}),ht("p-change",function(){return i.onChangeMinSize(i.minSize)}),sg(),r0(),Tl(14,"po-number",9),ww("ngModelChange",function(l){return Ky(m),sN(i.maxSize,l)||(i.maxSize=l),Xy(l)}),ht("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),sg(),r0(),Gl(15,"po-divider"),Tl(16,"po-input",10),ww("ngModelChange",function(l){return Ky(m),sN(i.label,l)||(i.label=l),Xy(l)}),sg(),r0(),Tl(17,"po-input",11),ww("ngModelChange",function(l){return Ky(m),sN(i.help,l)||(i.help=l),Xy(l)}),sg(),r0(),Tl(18,"po-input",12),ww("ngModelChange",function(l){return Ky(m),sN(i.helperText,l)||(i.helperText=l),Xy(l)}),sg(),r0(),Tl(19,"po-input",13),ww("ngModelChange",function(l){return Ky(m),sN(i.formField,l)||(i.formField=l),Xy(l)}),sg(),r0(),Tl(20,"po-input",14),ww("ngModelChange",function(l){return Ky(m),sN(i.url,l)||(i.url=l),Xy(l)}),sg(),r0(),Tl(21,"po-input",15),ww("ngModelChange",function(l){return Ky(m),sN(i.headersLabs,l)||(i.headersLabs=l),Xy(l)}),ht("p-change",function(l){return i.onChangeHeaders(l)}),sg(),r0(),Tl(22,"po-input",16),ww("ngModelChange",function(l){return Ky(m),sN(i.literals,l)||(i.literals=l),Xy(l)}),ht("p-change",function(){return i.changeLiterals()}),sg(),r0(),Tl(23,"po-input",17),ww("ngModelChange",function(l){return Ky(m),sN(i.modalActions,l)||(i.modalActions=l),Xy(l)}),ht("p-change",function(){return i.changeModalActions()}),sg(),r0(),Tl(24,"po-checkbox-group",18),ww("ngModelChange",function(l){return Ky(m),sN(i.properties,l)||(i.properties=l),Xy(l)}),sg(),r0(),gx(25,Ge,8,3,"div"),Tl(26,"po-radio-group",19),ww("ngModelChange",function(l){return Ky(m),sN(i.size,l)||(i.size=l),Xy(l)}),sg(),r0(),Tl(27,"div",20)(28,"po-button",21),ht("p-click",function(){return i.restore()}),sg()()()();}r&2&&(Ew("ngModel",i.upload),nw("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),o0(),Vp(3),nw("p-value",bN(4,51,i.upload)),Vp(2),nw("p-value",i.event),Vp(5),Ew("ngModel",i.allowedExtensions),o0(),Vp(),Ew("ngModel",i.maxFiles),o0(),Vp(),Ew("ngModel",i.dragDropHeight),o0(),Vp(),Ew("ngModel",i.minSize),o0(),Vp(),Ew("ngModel",i.maxSize),o0(),Vp(2),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helperText),o0(),Vp(),Ew("ngModel",i.formField),o0(),Vp(),Ew("ngModel",i.url),o0(),Vp(),Ew("ngModel",i.headersLabs),o0(),Vp(),Ew("ngModel",i.literals),o0(),Vp(),Ew("ngModel",i.modalActions),nw("p-disabled",!i.properties.includes("showThumbnail")),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),mx(i.properties.includes("showCustomAction")?25:-1),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,kk,Ok,Qt,mv,C3,O3,Hhe,Dde,qhe,M3,I3,Yhe,_Ne,$O],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Upload Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-upload
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Te],encapsulation:2,changeDetection:1})}return a})();var Xe=["formOpportunity"],Ze=()=>({maxFileSize:"204800"}),Ue=(()=>{class a{poNotification=f(Yp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&Yl(Xe,7),r&2){let m;uo(m=fo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=Sx();Tl(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(l){return Ky(m),sN(i.name,l)||(i.name=l),Xy(l)}),sg(),r0(),sg(),Tl(4,"div",1)(5,"po-textarea",3),ww("ngModelChange",function(l){return Ky(m),sN(i.biograph,l)||(i.biograph=l),Xy(l)}),sg(),r0(),sg(),Tl(6,"div",1)(7,"po-url",4),ww("ngModelChange",function(l){return Ky(m),sN(i.linkedin,l)||(i.linkedin=l),Xy(l)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-upload",5),ww("ngModelChange",function(l){return Ky(m),sN(i.resume,l)||(i.resume=l),Xy(l)}),ht("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),sg(),r0(),sg(),Tl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return i.apply()}),sg()()();}if(r&2){let m=Fx(1);Vp(3),Ew("ngModel",i.name),o0(),Vp(2),Ew("ngModel",i.biograph),o0(),Vp(2),Ew("ngModel",i.linkedin),o0(),Vp(2),Ew("ngModel",i.resume),nw("p-restrictions",gN(6,Ze)),o0(),Vp(2),nw("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,O3,$he,I3,L3],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Upload - Resume"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #formOpportunity="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-resume"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,et,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ue],encapsulation:2,changeDetection:1})}return a})();var nt=["upload"],it=["stepper"],ot=["submitForm"],at=["sucessData"],lt=a=>({"po-invisible":a});function rt(a,Ie){if(a&1){let d=Sx();Tl(0,"div",8)(1,"div",9)(2,"p",11),iN(3,"Confirm informations"),sg()(),Gl(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),Tl(7,"po-button",31),ht("p-click",function(){Ky(d);let i=Nx();return Xy(i.confirmSubmit())}),sg()();}if(a&2){let d=Nx();Vp(4),nw("p-value",d.project[0].name||"N/D"),Vp(),nw("p-value",d.title||"N/D"),Vp(),nw("p-value",d.description||"N/D");}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&Yl(nt,7)(it,7)(ot,7)(at,7),r&2){let m;uo(m=fo())&&(i.upload=m.first),uo(m=fo())&&(i.stepper=m.first),uo(m=fo())&&(i.submitForm=m.first),uo(m=fo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=Sx();Tl(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),iN(8,"Welcome, TOTVS!"),sg(),Tl(9,"p",11),iN(10,"Let's submit your project?"),sg()()(),Tl(11,"div",8)(12,"po-button",12),ht("p-click",function(){Ky(m);let l=Fx(2);return Xy(l.next())}),sg()()()(),Tl(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),iN(21,"Please, select your project:"),sg()(),Tl(22,"div",4)(23,"p",16),iN(24,"*Upload a zip file containing your project."),sg()()(),Tl(25,"div",17)(26,"po-icon",18),ht("click",function(){Ky(m);let l=Fx(32);return Xy(l.selectFiles())}),sg(),Tl(27,"po-icon",19),ht("click",function(){Ky(m);let l=Fx(32);return Xy(l.clear())}),sg()()(),Tl(28,"div",4)(29,"label",20),iN(30,"Attached"),sg(),Tl(31,"po-upload",21,2),ww("ngModelChange",function(l){return Ky(m),sN(i.project,l)||(i.project=l),Xy(l)}),sg(),r0(),sg(),Tl(33,"div",4)(34,"po-input",22),ww("ngModelChange",function(l){return Ky(m),sN(i.title,l)||(i.title=l),Xy(l)}),sg(),r0(),sg(),Tl(35,"div",4)(36,"po-textarea",23),ww("ngModelChange",function(l){return Ky(m),sN(i.description,l)||(i.description=l),Xy(l)}),sg(),r0(),sg(),Tl(37,"div",8)(38,"po-button",24),ht("p-click",function(){return i.submitProject()}),sg()()()()(),Tl(39,"po-step",25)(40,"po-widget",7),gx(41,rt,8,3,"div",8),sg()()()(),Tl(42,"po-modal",26,3)(44,"div",4)(45,"p",27),iN(46,"Project successfully submited!"),sg()()();}r&2&&(Vp(13),nw("p-can-active-next-step",i.canSubmitProject.bind(i)),Vp(14),nw("ngClass",mN(13,lt,i.project.length<1)),Vp(2),Pt("po-invisible",i.project.length<1),Vp(2),Ew("ngModel",i.project),nw("p-restrictions",i.restrictions),o0(),Vp(3),Ew("ngModel",i.title),nw("p-disabled",i.project.length<1),o0(),Vp(2),Ew("ngModel",i.description),nw("p-disabled",i.project.length<1),o0(),Vp(2),nw("p-disabled",i.canSubmitProject()),Vp(3),mx(i.canSubmitProject()?41:-1),Vp(),nw("p-primary-action",i.confirm));},dependencies:[AO,oY,nY,rY,Sk,Ck,Qt,O3,$he,I3,lt$1,Yhe,Yo,Ome,mNe,_Ne],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Upload - Realize & Show"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-rs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,pt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ae],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(Tl(0,"po-upload",0),ht("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),sg()),r&2&&nw("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Upload - with Download Button"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-upload-download/sample-po-upload-download.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-download"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ct,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ze],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[".png",".jpg",".jpeg",".gif"],St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&Gl(0,"po-upload",0),r&2&&nw("p-restrictions",mN(4,St,gN(3,Et)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Upload - with Preview"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-upload-preview"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,gt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ve],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoUploadComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O componente "),Tl(24,"code"),iN(25,"po-upload"),sg(),iN(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),sg(),Tl(27,"ul")(28,"li"),iN(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),sg(),Tl(30,"li"),iN(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),sg(),Tl(32,"li"),iN(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),sg(),Tl(34,"li"),iN(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),sg(),Tl(36,"li"),iN(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),sg(),Tl(38,"li"),iN(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),sg()(),Tl(40,"h4"),iN(41,"Tokens customiz\xE1veis"),sg(),Tl(42,"p"),iN(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(44,"blockquote")(45,"p"),iN(46,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(47,"a",6),iN(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(49,"."),sg()(),Tl(50,"table")(51,"thead")(52,"tr")(53,"th"),iN(54,"Propriedade"),sg(),Tl(55,"th"),iN(56,"Descri\xE7\xE3o"),sg(),Tl(57,"th"),iN(58,"Valor Padr\xE3o"),sg()()(),Tl(59,"tbody")(60,"tr")(61,"td")(62,"strong"),iN(63,"FIELD CONTAINER"),sg()(),Gl(64,"td")(65,"td"),sg(),Tl(66,"tr")(67,"td")(68,"code"),iN(69,"--field-container-title-justify"),sg()(),Tl(70,"td"),iN(71,"Alinhamento horizontal do t\xEDtulo ("),Tl(72,"code"),iN(73,"justify-content"),sg(),iN(74,")"),sg(),Tl(75,"td")(76,"code"),iN(77,"space-between"),sg()()(),Tl(78,"tr")(79,"td")(80,"code"),iN(81,"--field-container-title-flex"),sg()(),Tl(82,"td"),iN(83,"Flex do t\xEDtulo ("),Tl(84,"code"),iN(85,"flex"),sg(),iN(86,")"),sg(),Tl(87,"td")(88,"code"),iN(89,"1 auto"),sg()()(),Tl(90,"tr")(91,"td")(92,"strong"),iN(93,"TEXT SUPPORT"),sg()(),Gl(94,"td")(95,"td"),sg(),Tl(96,"tr")(97,"td")(98,"code"),iN(99,"--font-family-text-support"),sg()(),Tl(100,"td"),iN(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),sg(),Tl(102,"td")(103,"code"),iN(104,"var(--font-family-theme)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),iN(108,"--text-color-text-support"),sg()(),Tl(109,"td"),iN(110,"Cor da fonte no texto de suporte"),sg(),Tl(111,"td")(112,"code"),iN(113,"var(--color-neutral-dark-90)"),sg()()(),Tl(114,"tr")(115,"td")(116,"strong"),iN(117,"UPLOAD CONTENT"),sg()(),Gl(118,"td")(119,"td"),sg(),Tl(120,"tr")(121,"td")(122,"code"),iN(123,"--background-color-content"),sg(),iN(124," \xA0"),sg(),Tl(125,"td"),iN(126,"Cor de fundo"),sg(),Tl(127,"td")(128,"code"),iN(129,"var(--color-neutral-light-10)"),sg()()(),Tl(130,"tr")(131,"td")(132,"code"),iN(133,"--border-color-content"),sg()(),Tl(134,"td"),iN(135,"Cor da borda"),sg(),Tl(136,"td")(137,"code"),iN(138,"var(--color-neutral-light-20)"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),iN(142,"--border-radius-content"),sg()(),Tl(143,"td"),iN(144,"Cont\xE9m o valor do raio dos cantos do elemento"),sg(),Tl(145,"td")(146,"code"),iN(147,"var(--border-radius-md)"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),iN(151,"--text-color-file-name"),sg()(),Tl(152,"td"),iN(153,"Cor do texto do nome do arquivo"),sg(),Tl(154,"td")(155,"code"),iN(156,"var(--color-neutral-dark-90)"),sg()()(),Tl(157,"tr")(158,"td")(159,"code"),iN(160,"--font-family-file-name"),sg()(),Tl(161,"td"),iN(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),sg(),Tl(163,"td")(164,"code"),iN(165,"var(--font-family-theme)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),iN(169,"--text-color-info-bar"),sg()(),Tl(170,"td"),iN(171,"Cor do texto de informa\xE7\xE3o"),sg(),Tl(172,"td")(173,"code"),iN(174,"var(--color-neutral-mid-60)"),sg()()(),Tl(175,"tr")(176,"td")(177,"code"),iN(178,"--font-family-info-bar"),sg()(),Tl(179,"td"),iN(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),sg(),Tl(181,"td")(182,"code"),iN(183,"var(--font-family-theme)"),sg()()(),Tl(184,"tr")(185,"td")(186,"strong"),iN(187,"ERROR STATE"),sg()(),Gl(188,"td")(189,"td"),sg(),Tl(190,"tr")(191,"td")(192,"code"),iN(193,"--background-color-content-error"),sg()(),Tl(194,"td"),iN(195,"Cor de fundo do container de erro"),sg(),Tl(196,"td")(197,"code"),iN(198,"var(--color-neutral-light-00)"),sg()()(),Tl(199,"tr")(200,"td")(201,"code"),iN(202,"--border-color-content-error"),sg()(),Tl(203,"td"),iN(204,"Cor da borda do container de erro"),sg(),Tl(205,"td")(206,"code"),iN(207,"var(--color-feedback-negative-base)"),sg()()(),Tl(208,"tr")(209,"td")(210,"code"),iN(211,"--text-color-error"),sg()(),Tl(212,"td"),iN(213,"Cor do texto do container de erro"),sg(),Tl(214,"td")(215,"code"),iN(216,"var(--color-feedback-negative-dark)"),sg()()(),Tl(217,"tr")(218,"td")(219,"code"),iN(220,"--color-icon-error"),sg()(),Tl(221,"td"),iN(222,"Cor do \xEDcone no estado de erro"),sg(),Tl(223,"td")(224,"code"),iN(225,"var(--color-feedback-negative-base)"),sg()()(),Tl(226,"tr")(227,"td")(228,"code"),iN(229,"--font-family-error"),sg()(),Tl(230,"td"),iN(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),sg(),Tl(232,"td")(233,"code"),iN(234,"var(--font-family-theme)"),sg()()(),Tl(235,"tr")(236,"td")(237,"strong"),iN(238,"UPLOADED STATE"),sg()(),Gl(239,"td")(240,"td"),sg(),Tl(241,"tr")(242,"td")(243,"code"),iN(244,"--background-color-content-uploaded"),sg()(),Tl(245,"td"),iN(246,"Cor de fundo do container com status de enviado"),sg(),Tl(247,"td")(248,"code"),iN(249,"var(--color-neutral-light-00)"),sg()()(),Tl(250,"tr")(251,"td")(252,"code"),iN(253,"--border-color-content-uploaded"),sg()(),Tl(254,"td"),iN(255,"Cor da borda do container com status de enviado"),sg(),Tl(256,"td")(257,"code"),iN(258,"var(--color-neutral-light-20)"),sg()()(),Tl(259,"tr")(260,"td")(261,"strong"),iN(262,"INTERACTIVE STATE"),sg()(),Gl(263,"td")(264,"td"),sg(),Tl(265,"tr")(266,"td")(267,"code"),iN(268,"--text-color-file-name-interactive"),sg()(),Tl(269,"td"),iN(270,"Cor do texto do nome do arquivo quando interativo"),sg(),Tl(271,"td")(272,"code"),iN(273,"var(--color-action-default)"),sg()()(),Tl(274,"tr")(275,"td")(276,"strong"),iN(277,"THUMBNAIL"),sg()(),Gl(278,"td")(279,"td"),sg(),Tl(280,"tr")(281,"td")(282,"code"),iN(283,"--color-icon-thumbnail"),sg()(),Tl(284,"td"),iN(285,"Cor do \xEDcone na thumbnail"),sg(),Tl(286,"td")(287,"code"),iN(288,"var(--color-action-default)"),sg()()(),Tl(289,"tr")(290,"td")(291,"code"),iN(292,"--border-width-thumbnail"),sg()(),Tl(293,"td"),iN(294,"Tamanho da fonte na thumbnail"),sg(),Tl(295,"td")(296,"code"),iN(297,"var(--border-width-sm)"),sg()()(),Tl(298,"tr")(299,"td")(300,"code"),iN(301,"--border-radius-thumbnail"),sg()(),Tl(302,"td"),iN(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),sg(),Tl(304,"td")(305,"code"),iN(306,"var(--border-radius-md)"),sg()()(),Tl(307,"tr")(308,"td")(309,"code"),iN(310,"--background-color-thumbnail"),sg()(),Tl(311,"td"),iN(312,"Cor de fundo na thumbnail"),sg(),Tl(313,"td")(314,"code"),iN(315,"var(--color-neutral-light-05)"),sg()()(),Tl(316,"tr")(317,"td")(318,"strong"),iN(319,"Focused"),sg()(),Gl(320,"td")(321,"td"),sg(),Tl(322,"tr")(323,"td")(324,"code"),iN(325,"--outline-color-focused"),sg()(),Tl(326,"td"),iN(327,"Cor do outline do estado de focus"),sg(),Tl(328,"td")(329,"code"),iN(330,"var(--color-action-focus)"),sg()()()()()(),Tl(331,"div",7)(332,"h4",8),iN(333,"Seletor"),sg(),Tl(334,"pre",9),iN(335,`<po-upload
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
`),sg()(),Tl(336,"h4",10),iN(337,"Propriedades"),sg(),Tl(338,"table",11)(339,"tr",12)(340,"th",13),iN(341,"Nome"),sg(),Tl(342,"th",13),iN(343,"Tipo"),sg(),Tl(344,"th",13),iN(345,"Padr\xE3o"),sg(),Tl(346,"th",13),iN(347,"Descri\xE7\xE3o"),sg()(),Tl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),iN(352," (p-additional-help)"),Gl(353,"br"),sg()(),Tl(354,"div",18),iN(355,"Deprecated"),sg()(),Tl(356,"td",19)(357,"code",20),iN(358,"EventEmitter"),sg()(),Tl(359,"td",21),iN(360,"-"),sg(),Tl(361,"td",22)(362,"em")(363,"strong"),iN(364,"(opcional)"),sg()(),Tl(365,"p"),iN(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(367,"blockquote")(368,"p"),iN(369,"Essa propriedade est\xE1 "),Tl(370,"strong"),iN(371,"depreciada"),sg(),iN(372," e ser\xE1 removida na vers\xE3o "),Tl(373,"code"),iN(374,"23.x.x"),sg(),iN(375,". Recomendamos utilizar a propriedade "),Tl(376,"code"),iN(377,"p-helper"),sg(),iN(378," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),iN(383," p-additional-help-tooltip"),Gl(384,"br"),sg()(),Tl(385,"div",18),iN(386,"Deprecated"),sg()(),Tl(387,"td",19)(388,"code",25),iN(389,"string"),sg()(),Tl(390,"td",21),iN(391,"-"),sg(),Tl(392,"td",22)(393,"em")(394,"strong"),iN(395,"(opcional)"),sg()(),Tl(396,"p"),iN(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(398,"code"),iN(399,"po-helper"),sg(),iN(400,`.
`),Tl(401,"strong"),iN(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(403,"blockquote")(404,"p"),iN(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(406,"blockquote")(407,"p"),iN(408,"Essa propriedade est\xE1 "),Tl(409,"strong"),iN(410,"depreciada"),sg(),iN(411," e ser\xE1 removida na vers\xE3o "),Tl(412,"code"),iN(413,"23.x.x"),sg(),iN(414,". Recomendamos utilizar a propriedade "),Tl(415,"code"),iN(416,"p-helper"),sg(),iN(417," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),iN(422," p-append-in-body"),Gl(423,"br"),sg()()(),Tl(424,"td",19)(425,"code",26),iN(426,"boolean"),sg()(),Tl(427,"td",21)(428,"p")(429,"code"),iN(430,"false"),sg()()(),Tl(431,"td",22)(432,"em")(433,"strong"),iN(434,"(opcional)"),sg()(),Tl(435,"p"),iN(436,"Define que o popover ("),Tl(437,"code"),iN(438,"p-helper"),sg(),iN(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(440,"blockquote")(441,"p"),iN(442,"Quando utilizado com "),Tl(443,"code"),iN(444,"p-helper"),sg(),iN(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),iN(450," p-auto-focus"),Gl(451,"br"),sg()()(),Tl(452,"td",19)(453,"code",26),iN(454,"boolean"),sg()(),Tl(455,"td",21)(456,"p")(457,"code"),iN(458,"false"),sg()()(),Tl(459,"td",22)(460,"em")(461,"strong"),iN(462,"(opcional)"),sg()(),Tl(463,"p"),iN(464,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(465,"blockquote")(466,"p"),iN(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),iN(472," p-auto-upload"),Gl(473,"br"),sg()()(),Tl(474,"td",19)(475,"code",26),iN(476,"boolean"),sg()(),Tl(477,"td",21)(478,"p")(479,"code"),iN(480,"false"),sg()()(),Tl(481,"td",22)(482,"em")(483,"strong"),iN(484,"(opcional)"),sg()(),Tl(485,"p"),iN(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Tl(487,"blockquote")(488,"p"),iN(489,"Esta propriedade funciona somente se a propriedade "),Tl(490,"code"),iN(491,"p-url"),sg(),iN(492," tiver um valor atribu\xEDdo."),sg()()()(),Tl(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),iN(497," p-compact-label"),Gl(498,"br"),sg()()(),Tl(499,"td",19)(500,"code",26),iN(501,"boolean"),sg()(),Tl(502,"td",21)(503,"p")(504,"code"),iN(505,"false"),sg()()(),Tl(506,"td",22)(507,"em")(508,"strong"),iN(509,"(opcional)"),sg()(),Tl(510,"p"),iN(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(512,"p"),iN(513,"Quando habilitado ("),Tl(514,"code"),iN(515,"true"),sg(),iN(516,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(517,"ul")(518,"li")(519,"code"),iN(520,"po-label"),sg()(),Tl(521,"li")(522,"code"),iN(523,"p-requirement (showRequired)"),sg()(),Tl(524,"li")(525,"code"),iN(526,"po-helper"),sg()()(),Tl(527,"p"),iN(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(529,"p"),iN(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(531,"ul")(532,"li")(533,"code"),iN(534,"--field-container-title-justify"),sg()(),Tl(535,"li")(536,"code"),iN(537,"--field-container-title-flex"),sg()()(),Tl(538,"p"),iN(539,"Exemplo:"),sg(),Tl(540,"pre")(541,"code"),iN(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(543,"p"),iN(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),iN(549," p-custom-action"),Gl(550,"br"),sg()()(),Tl(551,"td",19)(552,"code",27),iN(553,"PoProgressAction"),sg()(),Tl(554,"td",21),iN(555,"-"),sg(),Tl(556,"td",22)(557,"em")(558,"strong"),iN(559,"(opcional)"),sg()(),Tl(560,"p"),iN(561,"Define uma a\xE7\xE3o personalizada no componente "),Tl(562,"code"),iN(563,"po-upload"),sg(),iN(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Tl(565,"p"),iN(566,"A a\xE7\xE3o deve implementar a interface "),Tl(567,"strong"),iN(568,"PoProgressAction"),sg(),iN(569,", permitindo configurar propriedades como:"),sg(),Tl(570,"ul")(571,"li")(572,"code"),iN(573,"label"),sg(),iN(574,": Texto do bot\xE3o."),sg(),Tl(575,"li")(576,"code"),iN(577,"icon"),sg(),iN(578,": \xCDcone a ser exibido no bot\xE3o."),sg(),Tl(579,"li")(580,"code"),iN(581,"type"),sg(),iN(582,": Tipo de bot\xE3o (ex.: "),Tl(583,"code"),iN(584,"danger"),sg(),iN(585," ou "),Tl(586,"code"),iN(587,"default"),sg(),iN(588,")."),sg(),Tl(589,"li")(590,"code"),iN(591,"disabled"),sg(),iN(592,": Indica se o bot\xE3o deve estar desabilitado."),sg(),Tl(593,"li")(594,"code"),iN(595,"visible"),sg(),iN(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),sg()(),Tl(597,"p")(598,"strong"),iN(599,"Exemplo de uso:"),sg()(),Tl(600,"pre")(601,"code",28),iN(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),sg()(),Tl(603,"pre")(604,"code",29),iN(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),sg()()()(),Tl(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),iN(610," (p-custom-action-click)"),Gl(611,"br"),sg()()(),Tl(612,"td",19)(613,"code",20),iN(614,"EventEmitter"),sg()(),Tl(615,"td",21),iN(616,"-"),sg(),Tl(617,"td",22)(618,"em")(619,"strong"),iN(620,"(opcional)"),sg()(),Tl(621,"p"),iN(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Tl(623,"code"),iN(624,"p-custom-action"),sg(),iN(625,"."),sg(),Tl(626,"p"),iN(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Tl(628,"p")(629,"strong"),iN(630,"Exemplo de uso:"),sg()(),Tl(631,"pre")(632,"code",28),iN(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),sg()(),Tl(634,"pre")(635,"code",29),iN(636,`customAction: PoProgressAction = {
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
`),sg()()()(),Tl(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),iN(641," p-custom-modal-actions"),Gl(642,"br"),sg()()(),Tl(643,"td",19)(644,"code",30),iN(645,"Array<PoModalAction>"),sg()(),Tl(646,"td",21),iN(647,"-"),sg(),Tl(648,"td",22)(649,"em")(650,"strong"),iN(651,"(opcional)"),sg()(),Tl(652,"p"),iN(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),sg(),Tl(654,"p"),iN(655,"A a\xE7\xE3o deve implementar a interface "),Tl(656,"strong"),iN(657,"PoModalAction"),sg(),iN(658,", permitindo configurar propriedades como:"),sg(),Tl(659,"ul")(660,"li")(661,"code"),iN(662,"label"),sg(),iN(663,": Texto do bot\xE3o."),sg(),Tl(664,"li")(665,"code"),iN(666,"action"),sg(),iN(667,": \xCDcone a ser exibido no bot\xE3o."),sg(),Tl(668,"li")(669,"code"),iN(670,"danger"),sg(),iN(671,": Define a propriedade "),Tl(672,"code"),iN(673,"p-danger"),sg(),iN(674," do bot\xE3o."),sg(),Tl(675,"li")(676,"code"),iN(677,"disabled"),sg(),iN(678,": Indica se o bot\xE3o deve estar desabilitado."),sg(),Tl(679,"li")(680,"code"),iN(681,"visible"),sg(),iN(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),sg()(),Tl(683,"p")(684,"strong"),iN(685,"Exemplo de uso:"),sg()(),Tl(686,"pre")(687,"code",28),iN(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),sg()(),Tl(689,"pre")(690,"code",29),iN(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),sg()()()(),Tl(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),iN(696," p-directory"),Gl(697,"br"),sg()()(),Tl(698,"td",19)(699,"code",26),iN(700,"boolean"),sg()(),Tl(701,"td",21)(702,"p")(703,"code"),iN(704,"false"),sg()()(),Tl(705,"td",22)(706,"em")(707,"strong"),iN(708,"(opcional)"),sg()(),Tl(709,"p"),iN(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Tl(711,"blockquote")(712,"p"),iN(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Tl(714,"blockquote")(715,"p"),iN(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Tl(717,"strong"),iN(718,"Internet Explorer"),sg(),iN(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()()()(),Tl(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),iN(724," p-disabled"),Gl(725,"br"),sg()()(),Tl(726,"td",19)(727,"code",26),iN(728,"boolean"),sg()(),Tl(729,"td",21),iN(730,"-"),sg(),Tl(731,"td",22)(732,"em")(733,"strong"),iN(734,"(opcional)"),sg()(),Tl(735,"p"),iN(736,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),iN(741," p-disabled-remove-file"),Gl(742,"br"),sg()()(),Tl(743,"td",19)(744,"code",26),iN(745,"boolean"),sg()(),Tl(746,"td",21)(747,"p")(748,"code"),iN(749,"false"),sg()()(),Tl(750,"td",22)(751,"em")(752,"strong"),iN(753,"(opcional)"),sg()(),Tl(754,"p"),iN(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),sg()()(),Tl(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),iN(760," p-drag-drop"),Gl(761,"br"),sg()()(),Tl(762,"td",19)(763,"code",26),iN(764,"boolean"),sg()(),Tl(765,"td",21)(766,"p")(767,"code"),iN(768,"false"),sg()()(),Tl(769,"td",22)(770,"em")(771,"strong"),iN(772,"(opcional)"),sg()(),Tl(773,"p"),iN(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Tl(775,"blockquote")(776,"p"),iN(777,"Recomendamos utilizar apenas um "),Tl(778,"code"),iN(779,"po-upload"),sg(),iN(780," com esta funcionalidade por tela."),sg()()()(),Tl(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),iN(785," p-drag-drop-height"),Gl(786,"br"),sg()()(),Tl(787,"td",19)(788,"code",31),iN(789,"number"),sg()(),Tl(790,"td",21)(791,"p")(792,"code"),iN(793,"320"),sg()()(),Tl(794,"td",22)(795,"em")(796,"strong"),iN(797,"(opcional)"),sg()(),Tl(798,"p"),iN(799,"Define em "),Tl(800,"em"),iN(801,"pixels"),sg(),iN(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Tl(803,"code"),iN(804,"160px"),sg(),iN(805,"."),sg(),Tl(806,"blockquote")(807,"p"),iN(808,"Esta propriedade funciona somente se a propriedade "),Tl(809,"code"),iN(810,"p-drag-drop"),sg(),iN(811," estiver habilitada."),sg()()()(),Tl(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),iN(816," p-restrictions"),Gl(817,"br"),sg()()(),Tl(818,"td",19)(819,"code",32),iN(820,"PoUploadFileRestrictions"),sg()(),Tl(821,"td",21),iN(822,"-"),sg(),Tl(823,"td",22)(824,"em")(825,"strong"),iN(826,"(opcional)"),sg()(),Tl(827,"p"),iN(828,"Objeto que segue a defini\xE7\xE3o da interface "),Tl(829,"code"),iN(830,"PoUploadFileRestrictions"),sg(),iN(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg()()(),Tl(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),iN(836," p-form-field"),Gl(837,"br"),sg()()(),Tl(838,"td",19)(839,"code",25),iN(840,"string"),sg()(),Tl(841,"td",21)(842,"p")(843,"code"),iN(844,"files"),sg()()(),Tl(845,"td",22)(846,"em")(847,"strong"),iN(848,"(opcional)"),sg()(),Tl(849,"p"),iN(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Tl(851,"code"),iN(852,"p-url"),sg(),iN(853,"."),sg()()(),Tl(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),iN(858," p-headers"),Gl(859,"br"),sg()()(),Tl(860,"td",19)(861,"code",33),iN(862,"{ [name: string]: string "),sg(),Tl(863,"code",34),iN(864,` Array<string>;
}`),sg()(),Tl(865,"td",21),iN(866,"-"),sg(),Tl(867,"td",22)(868,"p"),iN(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg()()(),Tl(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),iN(874," p-help"),Gl(875,"br"),sg()()(),Tl(876,"td",19)(877,"code",25),iN(878,"string"),sg()(),Tl(879,"td",21),iN(880,"-"),sg(),Tl(881,"td",22)(882,"em")(883,"strong"),iN(884,"(opcional)"),sg()(),Tl(885,"p"),iN(886,"Texto de apoio para o campo."),sg()()(),Tl(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),iN(891," p-hide-restrictions-info"),Gl(892,"br"),sg()()(),Tl(893,"td",19)(894,"code",26),iN(895,"boolean"),sg()(),Tl(896,"td",21)(897,"p")(898,"code"),iN(899,"false"),sg()()(),Tl(900,"td",22)(901,"em")(902,"strong"),iN(903,"(opcional)"),sg()(),Tl(904,"p"),iN(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg()()(),Tl(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),iN(910," p-hide-select-button"),Gl(911,"br"),sg()()(),Tl(912,"td",19)(913,"code",26),iN(914,"boolean"),sg()(),Tl(915,"td",21)(916,"p")(917,"code"),iN(918,"false"),sg()()(),Tl(919,"td",22)(920,"em")(921,"strong"),iN(922,"(opcional)"),sg()(),Tl(923,"p"),iN(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Tl(925,"blockquote")(926,"p"),iN(927,"Caso o valor definido seja "),Tl(928,"code"),iN(929,"true"),sg(),iN(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(931,"code"),iN(932,"selectFiles()"),sg(),iN(933," para sele\xE7\xE3o de arquivos."),sg()()()(),Tl(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),iN(938," p-hide-send-button"),Gl(939,"br"),sg()()(),Tl(940,"td",19)(941,"code",26),iN(942,"boolean"),sg()(),Tl(943,"td",21)(944,"p")(945,"code"),iN(946,"false"),sg()()(),Tl(947,"td",22)(948,"em")(949,"strong"),iN(950,"(opcional)"),sg()(),Tl(951,"p"),iN(952,"Omite o bot\xE3o de envio de arquivos."),sg(),Tl(953,"blockquote")(954,"p"),iN(955,"Caso o valor definido seja "),Tl(956,"code"),iN(957,"true"),sg(),iN(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(959,"code"),iN(960,"sendFiles()"),sg(),iN(961," para envio do(s) arquivo(s) selecionado(s)."),sg()()()(),Tl(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),iN(966," p-multiple"),Gl(967,"br"),sg()()(),Tl(968,"td",19)(969,"code",26),iN(970,"boolean"),sg()(),Tl(971,"td",21),iN(972,"-"),sg(),Tl(973,"td",22)(974,"em")(975,"strong"),iN(976,"(opcional)"),sg()(),Tl(977,"p"),iN(978,"Define se pode selecionar mais de um arquivo."),sg(),Tl(979,"blockquote")(980,"p"),iN(981,"Se utilizada a "),Tl(982,"code"),iN(983,"p-directory"),sg(),iN(984,", habilita-se automaticamente esta propriedade."),sg()()()(),Tl(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),iN(989," (p-keydown)"),Gl(990,"br"),sg()()(),Tl(991,"td",19)(992,"code",20),iN(993,"EventEmitter"),sg()(),Tl(994,"td",21),iN(995,"-"),sg(),Tl(996,"td",22)(997,"em")(998,"strong"),iN(999,"(opcional)"),sg()(),Tl(1e3,"p"),iN(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(1002,"code"),iN(1003,"KeyboardEvent"),sg(),iN(1004," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),iN(1009," p-label"),Gl(1010,"br"),sg()()(),Tl(1011,"td",19)(1012,"code",25),iN(1013,"string"),sg()(),Tl(1014,"td",21),iN(1015,"-"),sg(),Tl(1016,"td",22)(1017,"em")(1018,"strong"),iN(1019,"(opcional)"),sg()(),Tl(1020,"p"),iN(1021,"R\xF3tulo do campo."),sg()()(),Tl(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),iN(1026," p-label-text-wrap"),Gl(1027,"br"),sg()()(),Tl(1028,"td",19)(1029,"code",26),iN(1030,"boolean"),sg()(),Tl(1031,"td",21)(1032,"p")(1033,"code"),iN(1034,"false"),sg()()(),Tl(1035,"td",22)(1036,"em")(1037,"strong"),iN(1038,"(opcional)"),sg()(),Tl(1039,"p"),iN(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(1041,"code"),iN(1042,"p-label"),sg(),iN(1043,". Quando "),Tl(1044,"code"),iN(1045,"p-label-text-wrap"),sg(),iN(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),iN(1051," p-literals"),Gl(1052,"br"),sg()()(),Tl(1053,"td",19)(1054,"code",35),iN(1055,"PoUploadLiterals"),sg()(),Tl(1056,"td",21),iN(1057,"-"),sg(),Tl(1058,"td",22)(1059,"em")(1060,"strong"),iN(1061,"(opcional)"),sg()(),Tl(1062,"p"),iN(1063,"Objeto com as literais usadas no "),Tl(1064,"code"),iN(1065,"po-upload"),sg(),iN(1066,"."),sg(),Tl(1067,"p"),iN(1068,"Existem duas maneiras de customizar o componente:"),sg(),Tl(1069,"ul")(1070,"li"),iN(1071,"passando um objeto implementando a interface "),Tl(1072,"code"),iN(1073,"PoUploadLiterals"),sg(),iN(1074," com todas as literais dispon\xEDveis;"),sg(),Tl(1075,"li"),iN(1076,"passando apenas as literais que deseja customizar:"),Tl(1077,"pre")(1078,"code"),iN(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),sg()()()(),Tl(1080,"p"),iN(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),sg(),Tl(1082,"pre")(1083,"code"),iN(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),sg()(),Tl(1085,"blockquote")(1086,"p"),iN(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Tl(1088,"em"),iN(1089,"browser"),sg(),iN(1090," (pt, en, es, ru)."),sg()()()(),Tl(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),iN(1095," p-loading"),Gl(1096,"br"),sg()()(),Tl(1097,"td",19)(1098,"code",26),iN(1099,"boolean"),sg()(),Tl(1100,"td",21)(1101,"p")(1102,"code"),iN(1103,"false"),sg()()(),Tl(1104,"td",22)(1105,"em")(1106,"strong"),iN(1107,"(opcional)"),sg()(),Tl(1108,"p"),iN(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),Tl(1110,"code"),iN(1111,"Selecionar arquivo"),sg(),iN(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),sg(),Tl(1113,"blockquote")(1114,"p"),iN(1115,"Incompat\xEDvel com "),Tl(1116,"code"),iN(1117,"p-drag-drop"),sg(),iN(1118," e "),Tl(1119,"code"),iN(1120,"p-hide-select-button"),sg(),iN(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),Tl(1122,"code"),iN(1123,"Selecionar arquivo"),sg(),iN(1124,"."),sg()()()(),Tl(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),iN(1129," name"),Gl(1130,"br"),sg()()(),Tl(1131,"td",19)(1132,"code",25),iN(1133,"string"),sg()(),Tl(1134,"td",21),iN(1135,"-"),sg(),Tl(1136,"td",22)(1137,"p"),iN(1138,"Define o valor do atributo "),Tl(1139,"code"),iN(1140,"name"),sg(),iN(1141," do componente."),sg()()(),Tl(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),iN(1146," (ngModelChange)"),Gl(1147,"br"),sg()()(),Tl(1148,"td",19)(1149,"code",20),iN(1150,"EventEmitter"),sg()(),Tl(1151,"td",21),iN(1152,"-"),sg(),Tl(1153,"td",22)(1154,"em")(1155,"strong"),iN(1156,"(opcional)"),sg()(),Tl(1157,"p"),iN(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),Tl(1159,"em"),iN(1160,"tag"),sg(),Tl(1161,"code"),iN(1162,"form"),sg(),iN(1163,"."),sg(),Tl(1164,"p"),iN(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Tl(1166,"code"),iN(1167,"strictTemplates"),sg(),iN(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Tl(1169,"pre")(1170,"code"),iN(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),sg()()()(),Tl(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),iN(1176," (p-cancel)"),Gl(1177,"br"),sg()()(),Tl(1178,"td",19)(1179,"code",20),iN(1180,"EventEmitter"),sg()(),Tl(1181,"td",21),iN(1182,"-"),sg(),Tl(1183,"td",22)(1184,"em")(1185,"strong"),iN(1186,"(opcional)"),sg()(),Tl(1187,"p"),iN(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),sg(),Tl(1189,"blockquote")(1190,"p"),iN(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Tl(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),iN(1196," (p-error)"),Gl(1197,"br"),sg()()(),Tl(1198,"td",19)(1199,"code",20),iN(1200,"EventEmitter"),sg()(),Tl(1201,"td",21),iN(1202,"-"),sg(),Tl(1203,"td",22)(1204,"em")(1205,"strong"),iN(1206,"(opcional)"),sg()(),Tl(1207,"p"),iN(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Tl(1209,"blockquote")(1210,"p"),iN(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(1212,"code"),iN(1213,"HttpErrorResponse"),sg(),iN(1214,"."),sg()()()(),Tl(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),iN(1219," (p-open-modal-preview)"),Gl(1220,"br"),sg()()(),Tl(1221,"td",19)(1222,"code",20),iN(1223,"EventEmitter"),sg()(),Tl(1224,"td",21),iN(1225,"-"),sg(),Tl(1226,"td",22)(1227,"em")(1228,"strong"),iN(1229,"(opcional)"),sg()(),Tl(1230,"p"),iN(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),sg(),Tl(1232,"blockquote")(1233,"p"),iN(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Tl(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),iN(1239," (p-remove)"),Gl(1240,"br"),sg()()(),Tl(1241,"td",19)(1242,"code",20),iN(1243,"EventEmitter"),sg()(),Tl(1244,"td",21),iN(1245,"-"),sg(),Tl(1246,"td",22)(1247,"em")(1248,"strong"),iN(1249,"(opcional)"),sg()(),Tl(1250,"p"),iN(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),sg(),Tl(1252,"blockquote")(1253,"p"),iN(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Tl(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),iN(1259," (p-success)"),Gl(1260,"br"),sg()()(),Tl(1261,"td",19)(1262,"code",20),iN(1263,"EventEmitter"),sg()(),Tl(1264,"td",21),iN(1265,"-"),sg(),Tl(1266,"td",22)(1267,"em")(1268,"strong"),iN(1269,"(opcional)"),sg()(),Tl(1270,"p"),iN(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Tl(1272,"blockquote")(1273,"p"),iN(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(1275,"code"),iN(1276,"HttpResponse"),sg(),iN(1277,"."),sg()()()(),Tl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),iN(1282," (p-upload)"),Gl(1283,"br"),sg()()(),Tl(1284,"td",19)(1285,"code",20),iN(1286,"EventEmitter"),sg()(),Tl(1287,"td",21),iN(1288,"-"),sg(),Tl(1289,"td",22)(1290,"em")(1291,"strong"),iN(1292,"(opcional)"),sg()(),Tl(1293,"p"),iN(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Tl(1295,"blockquote")(1296,"p"),iN(1297,"data, nesta propriedade pode ser informado algum dado"),sg()(),Tl(1298,"pre")(1299,"code"),iN(1300,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Tl(1301,"blockquote")(1302,"p"),iN(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Tl(1304,"code"),iN(1305,"data"),sg(),iN(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),sg()(),Tl(1307,"pre")(1308,"code"),iN(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),sg()()()(),Tl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),iN(1314," p-optional"),Gl(1315,"br"),sg()()(),Tl(1316,"td",19)(1317,"code",26),iN(1318,"boolean"),sg()(),Tl(1319,"td",21)(1320,"p")(1321,"code"),iN(1322,"false"),sg()()(),Tl(1323,"td",22)(1324,"em")(1325,"strong"),iN(1326,"(opcional)"),sg()(),Tl(1327,"p"),iN(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1329,"blockquote")(1330,"p"),iN(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1332,"ul")(1333,"li"),iN(1334,"O campo conter "),Tl(1335,"code"),iN(1336,"p-required"),sg(),iN(1337,";"),sg(),Tl(1338,"li"),iN(1339,"N\xE3o possuir "),Tl(1340,"code"),iN(1341,"p-help"),sg(),iN(1342," e/ou "),Tl(1343,"code"),iN(1344,"p-label"),sg(),iN(1345,"."),sg()()()(),Tl(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),iN(1350," p-helper"),Gl(1351,"br"),sg()()(),Tl(1352,"td",19)(1353,"code",36),iN(1354,"PoHelperOptions "),sg(),Tl(1355,"code",25),iN(1356," string"),sg()(),Tl(1357,"td",21),iN(1358,"-"),sg(),Tl(1359,"td",22)(1360,"em")(1361,"strong"),iN(1362,"(opcional)"),sg()(),Tl(1363,"p"),iN(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1365,"code"),iN(1366,"p-label"),sg(),iN(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1368,"code"),iN(1369,"p-label"),sg(),iN(1370,"."),sg(),Tl(1371,"blockquote")(1372,"p"),iN(1373,"Para mais informa\xE7\xF5es acesse: "),Tl(1374,"a",37),iN(1375,"https://po-ui.io/documentation/po-helper"),sg(),iN(1376,"."),sg()(),Tl(1377,"blockquote")(1378,"p"),iN(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1380,"code"),iN(1381,"p-additional-help-tooltip"),sg(),iN(1382," e "),Tl(1383,"code"),iN(1384,"p-additional-help"),sg(),iN(1385,") ser\xE1 ignorado."),sg()()()(),Tl(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),iN(1390," p-required"),Gl(1391,"br"),sg()()(),Tl(1392,"td",19)(1393,"code",26),iN(1394,"boolean"),sg()(),Tl(1395,"td",21)(1396,"p")(1397,"code"),iN(1398,"false"),sg()()(),Tl(1399,"td",22)(1400,"em")(1401,"strong"),iN(1402,"(opcional)"),sg()(),Tl(1403,"p"),iN(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),iN(1409," p-required-url"),Gl(1410,"br"),sg()()(),Tl(1411,"td",19)(1412,"code",26),iN(1413,"boolean"),sg()(),Tl(1414,"td",21)(1415,"p")(1416,"code"),iN(1417,"true"),sg()()(),Tl(1418,"td",22)(1419,"em")(1420,"strong"),iN(1421,"(opcional)"),sg()(),Tl(1422,"p"),iN(1423,"Define se a propriedade "),Tl(1424,"code"),iN(1425,"p-url"),sg(),iN(1426," \xE9 obrigat\xF3ria."),sg(),Tl(1427,"p"),iN(1428,"Caso a propriedade seja definida como "),Tl(1429,"code"),iN(1430,"false"),sg(),iN(1431,":"),sg(),Tl(1432,"ul")(1433,"li"),iN(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),Tl(1435,"code"),iN(1436,"p-url"),sg(),iN(1437," definida."),sg(),Tl(1438,"li"),iN(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),Tl(1440,"code"),iN(1441,"p-url"),sg(),iN(1442," seja definida."),sg()(),Tl(1443,"blockquote")(1444,"p"),iN(1445,"Se utilizada com a propriedade "),Tl(1446,"code"),iN(1447,"p-auto-upload"),sg(),iN(1448," definida como "),Tl(1449,"code"),iN(1450,"true"),sg(),iN(1451," ser\xE1 necess\xE1rio definir a propriedade "),Tl(1452,"code"),iN(1453,"p-url"),sg(),iN(1454,"."),sg()()()(),Tl(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),iN(1459," p-show-required"),Gl(1460,"br"),sg()()(),Tl(1461,"td",19)(1462,"code",26),iN(1463,"boolean"),sg()(),Tl(1464,"td",21),iN(1465,"-"),sg(),Tl(1466,"td",22)(1467,"p"),iN(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1469,"blockquote")(1470,"p"),iN(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1472,"ul")(1473,"li"),iN(1474,"N\xE3o possuir "),Tl(1475,"code"),iN(1476,"p-help"),sg(),iN(1477," e/ou "),Tl(1478,"code"),iN(1479,"p-label"),sg(),iN(1480,"."),sg()()()(),Tl(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),iN(1485," p-show-thumbnail"),Gl(1486,"br"),sg()()(),Tl(1487,"td",19)(1488,"code",26),iN(1489,"boolean"),sg()(),Tl(1490,"td",21)(1491,"p")(1492,"code"),iN(1493,"true"),sg()()(),Tl(1494,"td",22)(1495,"em")(1496,"strong"),iN(1497,"(opcional)"),sg()(),Tl(1498,"p"),iN(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Tl(1500,"blockquote")(1501,"p"),iN(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),Tl(1503,"code"),iN(1504,".png"),sg(),iN(1505,", "),Tl(1506,"code"),iN(1507,".jpg"),sg(),iN(1508,", "),Tl(1509,"code"),iN(1510,".jpeg"),sg(),iN(1511," e "),Tl(1512,"code"),iN(1513,".gif"),sg(),iN(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),sg()()()(),Tl(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),iN(1519," p-size"),Gl(1520,"br"),sg()()(),Tl(1521,"td",19)(1522,"code",25),iN(1523,"string"),sg()(),Tl(1524,"td",21)(1525,"p")(1526,"code"),iN(1527,"medium"),sg()()(),Tl(1528,"td",22)(1529,"em")(1530,"strong"),iN(1531,"(opcional)"),sg()(),Tl(1532,"p"),iN(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),sg(),Tl(1534,"ul")(1535,"li")(1536,"code"),iN(1537,"small"),sg(),iN(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1539,"li")(1540,"code"),iN(1541,"medium"),sg(),iN(1542,": altura do button como 44px."),sg()(),Tl(1543,"blockquote")(1544,"p"),iN(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1546,"code"),iN(1547,"medium"),sg(),iN(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1549,"a",38),iN(1550,"po-theme"),sg(),iN(1551,"."),sg()()()(),Tl(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),iN(1556," p-url"),Gl(1557,"br"),sg()()(),Tl(1558,"td",19)(1559,"code",25),iN(1560,"string"),sg()(),Tl(1561,"td",21),iN(1562,"-"),sg(),Tl(1563,"td",22)(1564,"p"),iN(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg()()()(),Tl(1566,"h3",10),iN(1567,"M\xE9todos"),sg(),Tl(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),iN(1574," clear "),sg()()()()(),Tl(1575,"tr",22)(1576,"td",22)(1577,"p"),iN(1578,"M\xE9todo respons\xE1vel por "),Tl(1579,"strong"),iN(1580,"limpar"),sg(),iN(1581," o(s) arquivo(s) selecionado(s)."),sg()()()(),Gl(1582,"br"),Tl(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),iN(1589," focus "),sg()()()()(),Tl(1590,"tr",22)(1591,"td",22)(1592,"p"),iN(1593,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1594,"p"),iN(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1596,"pre")(1597,"code"),iN(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),sg()()()()(),Gl(1599,"br"),Tl(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),iN(1606," closeModal "),sg()()()()(),Tl(1607,"tr",22)(1608,"td",22)(1609,"p"),iN(1610,"M\xE9todo respons\xE1vel por fechar o modal."),sg()()()(),Gl(1611,"br"),Tl(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),iN(1618," selectFiles "),sg()()()()(),Tl(1619,"tr",22)(1620,"td",22)(1621,"p"),iN(1622,"M\xE9todo respons\xE1vel por "),Tl(1623,"strong"),iN(1624,"abrir"),sg(),iN(1625," a janela para sele\xE7\xE3o de arquivo(s)."),sg()()()(),Gl(1626,"br"),Tl(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),iN(1633," sendFiles "),sg()()()()(),Tl(1634,"tr",22)(1635,"td",22)(1636,"p"),iN(1637,"M\xE9todo respons\xE1vel por "),Tl(1638,"strong"),iN(1639,"enviar"),sg(),iN(1640," o(s) arquivo(s) selecionado(s)."),sg()()()(),Gl(1641,"br"),Tl(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),iN(1648," showAdditionalHelp "),sg()()()()(),Tl(1649,"tr",22)(1650,"td",22)(1651,"p"),iN(1652,"M\xE9todo que exibe "),Tl(1653,"code"),iN(1654,"p-helper"),sg(),iN(1655," ou executa a a\xE7\xE3o definida em "),Tl(1656,"code"),iN(1657,"p-helper{eventOnClick}"),sg(),iN(1658," ou em "),Tl(1659,"code"),iN(1660,"p-additionalHelp"),sg(),iN(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1662,"code"),iN(1663,"p-keydown"),sg(),iN(1664,"."),sg(),Tl(1665,"blockquote")(1666,"p"),iN(1667,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1668,"code"),iN(1669,"po-helper"),sg(),iN(1670," quando o componente estiver com foco."),sg()(),Tl(1671,"pre")(1672,"code"),iN(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),sg()(),Tl(1674,"pre")(1675,"code"),iN(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1677,"br"),Tl(1678,"h3"),iN(1679,"Interfaces"),sg(),Tl(1680,"h4",41)(1681,"code",5),iN(1682,"PoUploadFileRestrictions"),sg()(),Tl(1683,"div",2)(1684,"p"),iN(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),sg()(),Tl(1686,"h4",10),iN(1687,"Propriedades"),sg(),Tl(1688,"table",11)(1689,"tr",12)(1690,"th",13),iN(1691,"Nome"),sg(),Tl(1692,"th",13),iN(1693,"Tipo"),sg(),Tl(1694,"th",13),iN(1695,"Descri\xE7\xE3o"),sg()(),Tl(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),iN(1700," allowedExtensions"),Gl(1701,"br"),sg()()(),Tl(1702,"td",19)(1703,"code",42),iN(1704,"Array<string>"),sg()(),Tl(1705,"td",22)(1706,"em")(1707,"strong"),iN(1708,"(opcional)"),sg()(),Tl(1709,"p"),iN(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),sg(),Tl(1711,"pre")(1712,"code"),iN(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),sg()()()(),Tl(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),iN(1718," maxFileSize"),Gl(1719,"br"),sg()()(),Tl(1720,"td",19)(1721,"code",31),iN(1722,"number"),sg()(),Tl(1723,"td",22)(1724,"em")(1725,"strong"),iN(1726,"(opcional)"),sg()(),Tl(1727,"p"),iN(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),sg(),Tl(1729,"p"),iN(1730,"Deve ser informado um valor em "),Tl(1731,"em"),iN(1732,"bytes"),sg(),iN(1733,", por exemplo: "),Tl(1734,"code"),iN(1735,"31457280"),sg(),iN(1736," (30MB)."),sg(),Tl(1737,"blockquote")(1738,"p"),iN(1739,"Por padr\xE3o o valor \xE9 "),Tl(1740,"code"),iN(1741,"30 MB"),sg(),iN(1742,"."),sg()()()(),Tl(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),iN(1747," maxFiles"),Gl(1748,"br"),sg()()(),Tl(1749,"td",19)(1750,"code",31),iN(1751,"number"),sg()(),Tl(1752,"td",22)(1753,"em")(1754,"strong"),iN(1755,"(opcional)"),sg()(),Tl(1756,"p"),iN(1757,"Quantidade m\xE1xima de arquivos para o "),Tl(1758,"em"),iN(1759,"upload"),sg(),iN(1760,"."),sg(),Tl(1761,"blockquote")(1762,"p"),iN(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),Tl(1764,"code"),iN(1765,"p-multiple"),sg(),iN(1766," estiver habilitada e seu valor for maior do que zero."),sg()()()(),Tl(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),iN(1771," minFileSize"),Gl(1772,"br"),sg()()(),Tl(1773,"td",19)(1774,"code",31),iN(1775,"number"),sg()(),Tl(1776,"td",22)(1777,"em")(1778,"strong"),iN(1779,"(opcional)"),sg()(),Tl(1780,"p"),iN(1781,"Tamanho m\xEDnimo em "),Tl(1782,"em"),iN(1783,"bytes"),sg(),iN(1784," do arquivo que ser\xE1 enviado ao servidor."),sg(),Tl(1785,"blockquote")(1786,"p"),iN(1787,"Por padr\xE3o o valor \xE9 "),Tl(1788,"code"),iN(1789,"0"),sg(),iN(1790,"."),sg()()()()(),Tl(1791,"h4",41)(1792,"code",5),iN(1793,"PoUploadLiterals"),sg()(),Tl(1794,"div",2)(1795,"p"),iN(1796,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1797,"code"),iN(1798,"po-upload"),sg(),iN(1799,"."),sg()(),Tl(1800,"h4",10),iN(1801,"Propriedades"),sg(),Tl(1802,"table",11)(1803,"tr",12)(1804,"th",13),iN(1805,"Nome"),sg(),Tl(1806,"th",13),iN(1807,"Tipo"),sg(),Tl(1808,"th",13),iN(1809,"Descri\xE7\xE3o"),sg()(),Tl(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),iN(1814," close"),Gl(1815,"br"),sg()()(),Tl(1816,"td",19)(1817,"code",25),iN(1818,"string"),sg()(),Tl(1819,"td",22)(1820,"em")(1821,"strong"),iN(1822,"(opcional)"),sg()(),Tl(1823,"p"),iN(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),sg()()(),Tl(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),iN(1829," continue"),Gl(1830,"br"),sg()()(),Tl(1831,"td",19)(1832,"code",25),iN(1833,"string"),sg()(),Tl(1834,"td",22)(1835,"em")(1836,"strong"),iN(1837,"(opcional)"),sg()(),Tl(1838,"p"),iN(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),sg()()(),Tl(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),iN(1844," doneText"),Gl(1845,"br"),sg()()(),Tl(1846,"td",19)(1847,"code",25),iN(1848,"string"),sg()(),Tl(1849,"td",22)(1850,"em")(1851,"strong"),iN(1852,"(opcional)"),sg()(),Tl(1853,"p"),iN(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),sg()()(),Tl(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),iN(1859," dragFilesHere"),Gl(1860,"br"),sg()()(),Tl(1861,"td",19)(1862,"code",25),iN(1863,"string"),sg()(),Tl(1864,"td",22)(1865,"em")(1866,"strong"),iN(1867,"(opcional)"),sg()(),Tl(1868,"p"),iN(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),Tl(1870,"code"),iN(1871,"p-drag-drop"),sg(),iN(1872,"."),sg()()(),Tl(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),iN(1877," dragFoldersHere"),Gl(1878,"br"),sg()()(),Tl(1879,"td",19)(1880,"code",25),iN(1881,"string"),sg()(),Tl(1882,"td",22)(1883,"em")(1884,"strong"),iN(1885,"(opcional)"),sg()(),Tl(1886,"p"),iN(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),Tl(1888,"code"),iN(1889,"p-drag-drop"),sg(),iN(1890,"."),sg()()(),Tl(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),iN(1895," dropFilesHere"),Gl(1896,"br"),sg()()(),Tl(1897,"td",19)(1898,"code",25),iN(1899,"string"),sg()(),Tl(1900,"td",22)(1901,"em")(1902,"strong"),iN(1903,"(opcional)"),sg()(),Tl(1904,"p"),iN(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),Tl(1906,"code"),iN(1907,"p-drag-drop"),sg()()()(),Tl(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),iN(1912," dropFoldersHere"),Gl(1913,"br"),sg()()(),Tl(1914,"td",19)(1915,"code",25),iN(1916,"string"),sg()(),Tl(1917,"td",22)(1918,"em")(1919,"strong"),iN(1920,"(opcional)"),sg()(),Tl(1921,"p"),iN(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),Tl(1923,"code"),iN(1924,"p-drag-drop"),sg(),iN(1925,"."),sg()()(),Tl(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),iN(1930," errorOccurred"),Gl(1931,"br"),sg()()(),Tl(1932,"td",19)(1933,"code",25),iN(1934,"string"),sg()(),Tl(1935,"td",22)(1936,"em")(1937,"strong"),iN(1938,"(opcional)"),sg()(),Tl(1939,"p"),iN(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),sg()()(),Tl(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),iN(1945," files"),Gl(1946,"br"),sg()()(),Tl(1947,"td",19)(1948,"code",25),iN(1949,"string"),sg()(),Tl(1950,"td",22)(1951,"em")(1952,"strong"),iN(1953,"(opcional)"),sg()(),Tl(1954,"p"),iN(1955,"Par\xE2metro "),Tl(1956,"em"),iN(1957,"files"),sg(),iN(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Tl(1959,"em"),iN(1960,"dragDrop"),sg(),iN(1961,"."),sg()()(),Tl(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),iN(1966," folders"),Gl(1967,"br"),sg()()(),Tl(1968,"td",19)(1969,"code",25),iN(1970,"string"),sg()(),Tl(1971,"td",22)(1972,"em")(1973,"strong"),iN(1974,"(opcional)"),sg()(),Tl(1975,"p"),iN(1976,"Par\xE2metro "),Tl(1977,"em"),iN(1978,"folders"),sg(),iN(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Tl(1980,"em"),iN(1981,"dragDrop"),sg(),iN(1982,"."),sg()()(),Tl(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),iN(1987," invalidDropArea"),Gl(1988,"br"),sg()()(),Tl(1989,"td",19)(1990,"code",25),iN(1991,"string"),sg()(),Tl(1992,"td",22)(1993,"em")(1994,"strong"),iN(1995,"(opcional)"),sg()(),Tl(1996,"p"),iN(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),Tl(1998,"em"),iN(1999,"dragDrop"),sg(),iN(2e3,"."),sg()()(),Tl(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),iN(2005," preview"),Gl(2006,"br"),sg()()(),Tl(2007,"td",19)(2008,"code",25),iN(2009,"string"),sg()(),Tl(2010,"td",22)(2011,"em")(2012,"strong"),iN(2013,"(opcional)"),sg()(),Tl(2014,"p"),iN(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),sg()()(),Tl(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),iN(2020," selectFile"),Gl(2021,"br"),sg()()(),Tl(2022,"td",19)(2023,"code",25),iN(2024,"string"),sg()(),Tl(2025,"td",22)(2026,"em")(2027,"strong"),iN(2028,"(opcional)"),sg()(),Tl(2029,"p"),iN(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),sg()()(),Tl(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),iN(2035," selectFiles"),Gl(2036,"br"),sg()()(),Tl(2037,"td",19)(2038,"code",25),iN(2039,"string"),sg()(),Tl(2040,"td",22)(2041,"em")(2042,"strong"),iN(2043,"(opcional)"),sg()(),Tl(2044,"p"),iN(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Tl(2046,"code"),iN(2047,"p-multiple"),sg(),iN(2048,"."),sg()()(),Tl(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),iN(2053," selectFilesOnComputer"),Gl(2054,"br"),sg()()(),Tl(2055,"td",19)(2056,"code",25),iN(2057,"string"),sg()(),Tl(2058,"td",22)(2059,"em")(2060,"strong"),iN(2061,"(opcional)"),sg()(),Tl(2062,"p"),iN(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Tl(2064,"em"),iN(2065,"dragDrop"),sg(),iN(2066,"."),sg()()(),Tl(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),iN(2071," selectFolder"),Gl(2072,"br"),sg()()(),Tl(2073,"td",19)(2074,"code",25),iN(2075,"string"),sg()(),Tl(2076,"td",22)(2077,"em")(2078,"strong"),iN(2079,"(opcional)"),sg()(),Tl(2080,"p"),iN(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Tl(2082,"code"),iN(2083,"p-directory"),sg(),iN(2084,"."),sg()()(),Tl(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),iN(2089," selectFolderOnComputer"),Gl(2090,"br"),sg()()(),Tl(2091,"td",19)(2092,"code",25),iN(2093,"string"),sg()(),Tl(2094,"td",22)(2095,"em")(2096,"strong"),iN(2097,"(opcional)"),sg()(),Tl(2098,"p"),iN(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Tl(2100,"em"),iN(2101,"dragDrop"),sg(),iN(2102,"."),sg()()(),Tl(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),iN(2107," sentWithSuccess"),Gl(2108,"br"),sg()()(),Tl(2109,"td",19)(2110,"code",25),iN(2111,"string"),sg()(),Tl(2112,"td",22)(2113,"em")(2114,"strong"),iN(2115,"(opcional)"),sg()(),Tl(2116,"p"),iN(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),sg()()(),Tl(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),iN(2122," startSending"),Gl(2123,"br"),sg()()(),Tl(2124,"td",19)(2125,"code",25),iN(2126,"string"),sg()(),Tl(2127,"td",22)(2128,"em")(2129,"strong"),iN(2130,"(opcional)"),sg()(),Tl(2131,"p"),iN(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),sg()()(),Tl(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),iN(2137," thumbnail"),Gl(2138,"br"),sg()()(),Tl(2139,"td",19)(2140,"code",25),iN(2141,"string"),sg()(),Tl(2142,"td",22)(2143,"em")(2144,"strong"),iN(2145,"(opcional)"),sg()(),Tl(2146,"p"),iN(2147,"Texto do leitor da miniatura da imagem."),sg()()(),Tl(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),iN(2152," tryAgain"),Gl(2153,"br"),sg()()(),Tl(2154,"td",19)(2155,"code",25),iN(2156,"string"),sg()(),Tl(2157,"td",22)(2158,"em")(2159,"strong"),iN(2160,"(opcional)"),sg()(),Tl(2161,"p"),iN(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),sg()()(),Tl(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),iN(2167," uploadingText"),Gl(2168,"br"),sg()()(),Tl(2169,"td",19)(2170,"code",25),iN(2171,"string"),sg()(),Tl(2172,"td",22)(2173,"em")(2174,"strong"),iN(2175,"(opcional)"),sg()(),Tl(2176,"p"),iN(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),sg()()()(),Tl(2178,"h4",41)(2179,"code",5),iN(2180,"PoProgressAction"),sg()(),Tl(2181,"div",2)(2182,"p"),iN(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),sg()(),Tl(2184,"h4",10),iN(2185,"Propriedades"),sg(),Tl(2186,"table",11)(2187,"tr",12)(2188,"th",13),iN(2189,"Nome"),sg(),Tl(2190,"th",13),iN(2191,"Tipo"),sg(),Tl(2192,"th",13),iN(2193,"Descri\xE7\xE3o"),sg()(),Tl(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),iN(2198," disabled"),Gl(2199,"br"),sg()()(),Tl(2200,"td",19)(2201,"code",26),iN(2202,"boolean "),sg(),Tl(2203,"code",43),iN(2204," Function"),sg()(),Tl(2205,"td",22)(2206,"em")(2207,"strong"),iN(2208,"(opcional)"),sg()(),Tl(2209,"p"),iN(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),sg(),Tl(2211,"p"),iN(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),sg()()(),Tl(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),iN(2217," icon"),Gl(2218,"br"),sg()()(),Tl(2219,"td",19)(2220,"code",25),iN(2221,"string "),sg(),Tl(2222,"code",44),iN(2223," TemplateRef<void>"),sg()(),Tl(2224,"td",22)(2225,"em")(2226,"strong"),iN(2227,"(opcional)"),sg()(),Tl(2228,"p"),iN(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(2230,"p"),iN(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(2232,"a",45),iN(2233,"Biblioteca de \xEDcones"),sg(),iN(2234,". conforme exemplo abaixo:"),sg(),Tl(2235,"pre")(2236,"code"),iN(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),sg()(),Tl(2238,"p"),iN(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(2240,"pre")(2241,"code"),iN(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),sg()(),Tl(2243,"p"),iN(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(2245,"code"),iN(2246,"TemplateRef"),sg(),iN(2247,`, conforme exemplo abaixo:
component.html:`),sg(),Tl(2248,"pre")(2249,"code"),iN(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),sg()(),Tl(2251,"p"),iN(2252,"component.ts:"),sg(),Tl(2253,"pre")(2254,"code"),iN(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),sg()()()(),Tl(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),iN(2260," label"),Gl(2261,"br"),sg()()(),Tl(2262,"td",19)(2263,"code",25),iN(2264,"string"),sg()(),Tl(2265,"td",22)(2266,"em")(2267,"strong"),iN(2268,"(opcional)"),sg()(),Tl(2269,"p"),iN(2270,"R\xF3tulo da a\xE7\xE3o."),sg()()(),Tl(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),iN(2275," type"),Gl(2276,"br"),sg()()(),Tl(2277,"td",19)(2278,"code",25),iN(2279,"string"),sg()(),Tl(2280,"td",22)(2281,"em")(2282,"strong"),iN(2283,"(opcional)"),sg()(),Tl(2284,"p"),iN(2285,"Define a cor do item, sendo "),Tl(2286,"code"),iN(2287,"default"),sg(),iN(2288," o padr\xE3o."),sg(),Tl(2289,"p"),iN(2290,"Valores v\xE1lidos:"),sg(),Tl(2291,"ul")(2292,"li")(2293,"code"),iN(2294,"default"),sg()(),Tl(2295,"li")(2296,"code"),iN(2297,"danger"),sg(),iN(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),sg()()()(),Tl(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),iN(2303," visible"),Gl(2304,"br"),sg()()(),Tl(2305,"td",19)(2306,"code",26),iN(2307,"boolean "),sg(),Tl(2308,"code",43),iN(2309," Function"),sg()(),Tl(2310,"td",22)(2311,"em")(2312,"strong"),iN(2313,"(opcional)"),sg()(),Tl(2314,"p"),iN(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg(),Tl(2316,"blockquote")(2317,"p"),iN(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg()(),Tl(2319,"p"),iN(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),sg(),Tl(2321,"ul")(2322,"li")(2323,"p"),iN(2324,"Fun\xE7\xE3o que deve retornar um booleano."),sg()(),Tl(2325,"li")(2326,"p"),iN(2327,"Informar diretamente um valor booleano."),sg()()()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-upload-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),sg()()()),r&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,Fe,qe,ke,Le,Re,Oe,je],encapsulation:2,changeDetection:1})}return a})();var vt=[{path:"",component:Be}],Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[DL.forChild(vt),DL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ne]})}return a})();export{cn as DocPoUploadModule};