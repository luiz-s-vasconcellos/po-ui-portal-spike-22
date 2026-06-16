import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aZ as wk,aE as Bp,cD as Ra,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut$1,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,ck as vk,cl as gk,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,ai as ya,bd as na,bC as Vp,aU as IR,aW as IO,al as lx,am as pw,an as $0,a4 as oN,ao as QA,ap as hw,aq as G0,a5 as aN,ar as JA,aP as Da,cr as tr,aX as _x,a7 as Qx,as as $l,at as uo,au as fo,ab as J,aQ as dt,cE as Md,cF as DV,O as Ot,a3 as D3,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&Ul(0,"po-upload",0);},dependencies:[Ra],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Upload Basic"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-upload-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ke,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Te],encapsulation:2})}return a})();function $e(a,Ge){if(a&1&&(wl(0,"div")(1,"po-widget",22)(2,"form",23),Ul(3,"po-input",24),$0(),Ul(4,"po-select",25),$0(),Ul(5,"po-select",26),$0(),Ul(6,"po-switch",27),$0(),Ul(7,"po-switch",28),$0(),ng()()()),a&2){let d=gx();Pp(2),YE("formGroup",d.actionForm),Pp(),G0(),Pp(),YE("p-options",d.iconOptions),G0(),Pp(),YE("p-options",d.typeOptions),G0(),Pp(),G0(),Pp(),G0();}}var Ae=(()=>{class a{fb=f(wk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=lx();wl(0,"po-upload",1),pw("ngModelChange",function(l){return Qy(m),$x(i.upload,l)||(i.upload=l),Jy(l)}),ut$1("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3),oN(4,"json"),Ul(5,"po-info",4),ng(),Ul(6,"po-divider"),wl(7,"div",2)(8,"form",null,0)(10,"po-input",5),pw("ngModelChange",function(l){return Qy(m),$x(i.allowedExtensions,l)||(i.allowedExtensions=l),Jy(l)}),ut$1("p-change",function(){return i.onChangeExtension()}),ng(),$0(),wl(11,"po-number",6),pw("ngModelChange",function(l){return Qy(m),$x(i.maxFiles,l)||(i.maxFiles=l),Jy(l)}),ut$1("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),ng(),$0(),wl(12,"po-number",7),pw("ngModelChange",function(l){return Qy(m),$x(i.dragDropHeight,l)||(i.dragDropHeight=l),Jy(l)}),ng(),$0(),wl(13,"po-number",8),pw("ngModelChange",function(l){return Qy(m),$x(i.minSize,l)||(i.minSize=l),Jy(l)}),ut$1("p-change",function(){return i.onChangeMinSize(i.minSize)}),ng(),$0(),wl(14,"po-number",9),pw("ngModelChange",function(l){return Qy(m),$x(i.maxSize,l)||(i.maxSize=l),Jy(l)}),ut$1("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),ng(),$0(),Ul(15,"po-divider"),wl(16,"po-input",10),pw("ngModelChange",function(l){return Qy(m),$x(i.label,l)||(i.label=l),Jy(l)}),ng(),$0(),wl(17,"po-input",11),pw("ngModelChange",function(l){return Qy(m),$x(i.help,l)||(i.help=l),Jy(l)}),ng(),$0(),wl(18,"po-input",12),pw("ngModelChange",function(l){return Qy(m),$x(i.helperText,l)||(i.helperText=l),Jy(l)}),ng(),$0(),wl(19,"po-input",13),pw("ngModelChange",function(l){return Qy(m),$x(i.formField,l)||(i.formField=l),Jy(l)}),ng(),$0(),wl(20,"po-input",14),pw("ngModelChange",function(l){return Qy(m),$x(i.url,l)||(i.url=l),Jy(l)}),ng(),$0(),wl(21,"po-input",15),pw("ngModelChange",function(l){return Qy(m),$x(i.headersLabs,l)||(i.headersLabs=l),Jy(l)}),ut$1("p-change",function(l){return i.onChangeHeaders(l)}),ng(),$0(),wl(22,"po-input",16),pw("ngModelChange",function(l){return Qy(m),$x(i.literals,l)||(i.literals=l),Jy(l)}),ut$1("p-change",function(){return i.changeLiterals()}),ng(),$0(),wl(23,"po-input",17),pw("ngModelChange",function(l){return Qy(m),$x(i.modalActions,l)||(i.modalActions=l),Jy(l)}),ut$1("p-change",function(){return i.changeModalActions()}),ng(),$0(),wl(24,"po-checkbox-group",18),pw("ngModelChange",function(l){return Qy(m),$x(i.properties,l)||(i.properties=l),Jy(l)}),ng(),$0(),QA(25,$e,8,3,"div"),wl(26,"po-radio-group",19),pw("ngModelChange",function(l){return Qy(m),$x(i.size,l)||(i.size=l),Jy(l)}),ng(),$0(),wl(27,"div",20)(28,"po-button",21),ut$1("p-click",function(){return i.restore()}),ng()()()();}r&2&&(hw("ngModel",i.upload),YE("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),G0(),Pp(3),YE("p-value",aN(4,51,i.upload)),Pp(2),YE("p-value",i.event),Pp(5),hw("ngModel",i.allowedExtensions),G0(),Pp(),hw("ngModel",i.maxFiles),G0(),Pp(),hw("ngModel",i.dragDropHeight),G0(),Pp(),hw("ngModel",i.minSize),G0(),Pp(),hw("ngModel",i.maxSize),G0(),Pp(2),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.formField),G0(),Pp(),hw("ngModel",i.url),G0(),Pp(),hw("ngModel",i.headersLabs),G0(),Pp(),hw("ngModel",i.literals),G0(),Pp(),hw("ngModel",i.modalActions),YE("p-disabled",!i.properties.includes("showThumbnail")),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),JA(i.properties.includes("showCustomAction")?25:-1),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,vk,gk,Pe,di,ia,Yo,ha,ga,ya,na,Ra,Vp,IR,IO],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Upload Labs"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-upload
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-upload-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,tt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ae],encapsulation:2})}return a})();var ot=["formOpportunity"],at=()=>({maxFileSize:"204800"}),ze=(()=>{class a{poNotification=f(Bp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&$l(ot,7),r&2){let m;uo(m=fo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=lx();wl(0,"form",null,0)(2,"div",1)(3,"po-input",2),pw("ngModelChange",function(l){return Qy(m),$x(i.name,l)||(i.name=l),Jy(l)}),ng(),$0(),ng(),wl(4,"div",1)(5,"po-textarea",3),pw("ngModelChange",function(l){return Qy(m),$x(i.biograph,l)||(i.biograph=l),Jy(l)}),ng(),$0(),ng(),wl(6,"div",1)(7,"po-url",4),pw("ngModelChange",function(l){return Qy(m),$x(i.linkedin,l)||(i.linkedin=l),Jy(l)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-upload",5),pw("ngModelChange",function(l){return Qy(m),$x(i.resume,l)||(i.resume=l),Jy(l)}),ut$1("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),ng(),$0(),ng(),wl(10,"div",1)(11,"po-button",6),ut$1("p-click",function(){return i.apply()}),ng()()();}if(r&2){let m=_x(1);Pp(3),hw("ngModel",i.name),G0(),Pp(2),hw("ngModel",i.biograph),G0(),Pp(2),hw("ngModel",i.linkedin),G0(),Pp(2),hw("ngModel",i.resume),YE("p-restrictions",Qx(6,at)),G0(),Pp(2),YE("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[aY,iY,oY,ck,ok,Pe,Yo,Da,Ra,tr],encapsulation:2,changeDetection:1})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Upload - Resume"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #formOpportunity="ngForm">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-upload-resume"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,rt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ze],encapsulation:2})}return a})();var pt=["upload"],mt=["stepper"],st=["submitForm"],ct=["sucessData"],ut=a=>({"po-invisible":a});function Et(a,Ge){if(a&1){let d=lx();wl(0,"div",8)(1,"div",9)(2,"p",11),Ux(3,"Confirm informations"),ng()(),Ul(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),wl(7,"po-button",31),ut$1("p-click",function(){Qy(d);let i=gx();return Jy(i.confirmSubmit())}),ng()();}if(a&2){let d=gx();Pp(4),YE("p-value",d.project[0].name||"N/D"),Pp(),YE("p-value",d.title||"N/D"),Pp(),YE("p-value",d.description||"N/D");}}var Ve=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&$l(pt,7)(mt,7)(st,7)(ct,7),r&2){let m;uo(m=fo())&&(i.upload=m.first),uo(m=fo())&&(i.stepper=m.first),uo(m=fo())&&(i.submitForm=m.first),uo(m=fo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=lx();wl(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),Ux(8,"Welcome, TOTVS!"),ng(),wl(9,"p",11),Ux(10,"Let's submit your project?"),ng()()(),wl(11,"div",8)(12,"po-button",12),ut$1("p-click",function(){Qy(m);let l=_x(2);return Jy(l.next())}),ng()()()(),wl(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),Ux(21,"Please, select your project:"),ng()(),wl(22,"div",4)(23,"p",16),Ux(24,"*Upload a zip file containing your project."),ng()()(),wl(25,"div",17)(26,"po-icon",18),ut$1("click",function(){Qy(m);let l=_x(32);return Jy(l.selectFiles())}),ng(),wl(27,"po-icon",19),ut$1("click",function(){Qy(m);let l=_x(32);return Jy(l.clear())}),ng()()(),wl(28,"div",4)(29,"label",20),Ux(30,"Attached"),ng(),wl(31,"po-upload",21,2),pw("ngModelChange",function(l){return Qy(m),$x(i.project,l)||(i.project=l),Jy(l)}),ng(),$0(),ng(),wl(33,"div",4)(34,"po-input",22),pw("ngModelChange",function(l){return Qy(m),$x(i.title,l)||(i.title=l),Jy(l)}),ng(),$0(),ng(),wl(35,"div",4)(36,"po-textarea",23),pw("ngModelChange",function(l){return Qy(m),$x(i.description,l)||(i.description=l),Jy(l)}),ng(),$0(),ng(),wl(37,"div",8)(38,"po-button",24),ut$1("p-click",function(){return i.submitProject()}),ng()()()()(),wl(39,"po-step",25)(40,"po-widget",7),QA(41,Et,8,3,"div",8),ng()()()(),wl(42,"po-modal",26,3)(44,"div",4)(45,"p",27),Ux(46,"Project successfully submited!"),ng()()();}r&2&&(Pp(13),YE("p-can-active-next-step",i.canSubmitProject.bind(i)),Pp(14),YE("ngClass",Jx(13,ut,i.project.length<1)),Pp(2),Ot("po-invisible",i.project.length<1),Pp(2),hw("ngModel",i.project),YE("p-restrictions",i.restrictions),G0(),Pp(3),hw("ngModel",i.title),YE("p-disabled",i.project.length<1),G0(),Pp(2),hw("ngModel",i.description),YE("p-disabled",i.project.length<1),G0(),Pp(2),YE("p-disabled",i.canSubmitProject()),Pp(3),JA(i.canSubmitProject()?41:-1),Pp(),YE("p-primary-action",i.confirm));},dependencies:[fO,aY,iY,oY,ck,ok,Pe,Yo,Da,Ra,J,Vp,dt,Md,DV,IR],encapsulation:2,changeDetection:1})}return a})();var bt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Upload - Realize & Show"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-upload-rs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,bt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ve],encapsulation:2})}return a})();var je=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(wl(0,"po-upload",0),ut$1("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),ng()),r&2&&YE("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[Ra],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Upload - with Download Button"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-upload-download/sample-po-upload-download.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-upload-download"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ht,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,je],encapsulation:2})}return a})();var ft=()=>[".png",".jpg",".jpeg",".gif"],Ct=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&Ul(0,"po-upload",0),r&2&&YE("p-restrictions",Jx(4,Ct,Qx(3,ft)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[Ra],encapsulation:2,changeDetection:1})}return a})();var yt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Upload - with Preview"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-upload-preview"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,yt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ne],encapsulation:2})}return a})();var We=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoUploadComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O componente "),wl(24,"code"),Ux(25,"po-upload"),ng(),Ux(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),ng(),wl(27,"ul")(28,"li"),Ux(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),ng(),wl(30,"li"),Ux(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),ng(),wl(32,"li"),Ux(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),ng(),wl(34,"li"),Ux(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),ng(),wl(36,"li"),Ux(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),ng(),wl(38,"li"),Ux(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),ng()(),wl(40,"h4"),Ux(41,"Tokens customiz\xE1veis"),ng(),wl(42,"p"),Ux(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(44,"blockquote")(45,"p"),Ux(46,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(47,"a",6),Ux(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(49,"."),ng()(),wl(50,"table")(51,"thead")(52,"tr")(53,"th"),Ux(54,"Propriedade"),ng(),wl(55,"th"),Ux(56,"Descri\xE7\xE3o"),ng(),wl(57,"th"),Ux(58,"Valor Padr\xE3o"),ng()()(),wl(59,"tbody")(60,"tr")(61,"td")(62,"strong"),Ux(63,"FIELD CONTAINER"),ng()(),Ul(64,"td")(65,"td"),ng(),wl(66,"tr")(67,"td")(68,"code"),Ux(69,"--field-container-title-justify"),ng()(),wl(70,"td"),Ux(71,"Alinhamento horizontal do t\xEDtulo ("),wl(72,"code"),Ux(73,"justify-content"),ng(),Ux(74,")"),ng(),wl(75,"td")(76,"code"),Ux(77,"space-between"),ng()()(),wl(78,"tr")(79,"td")(80,"code"),Ux(81,"--field-container-title-flex"),ng()(),wl(82,"td"),Ux(83,"Flex do t\xEDtulo ("),wl(84,"code"),Ux(85,"flex"),ng(),Ux(86,")"),ng(),wl(87,"td")(88,"code"),Ux(89,"1 auto"),ng()()(),wl(90,"tr")(91,"td")(92,"strong"),Ux(93,"TEXT SUPPORT"),ng()(),Ul(94,"td")(95,"td"),ng(),wl(96,"tr")(97,"td")(98,"code"),Ux(99,"--font-family-text-support"),ng()(),wl(100,"td"),Ux(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),ng(),wl(102,"td")(103,"code"),Ux(104,"var(--font-family-theme)"),ng()()(),wl(105,"tr")(106,"td")(107,"code"),Ux(108,"--text-color-text-support"),ng()(),wl(109,"td"),Ux(110,"Cor da fonte no texto de suporte"),ng(),wl(111,"td")(112,"code"),Ux(113,"var(--color-neutral-dark-90)"),ng()()(),wl(114,"tr")(115,"td")(116,"strong"),Ux(117,"UPLOAD CONTENT"),ng()(),Ul(118,"td")(119,"td"),ng(),wl(120,"tr")(121,"td")(122,"code"),Ux(123,"--background-color-content"),ng(),Ux(124," \xA0"),ng(),wl(125,"td"),Ux(126,"Cor de fundo"),ng(),wl(127,"td")(128,"code"),Ux(129,"var(--color-neutral-light-10)"),ng()()(),wl(130,"tr")(131,"td")(132,"code"),Ux(133,"--border-color-content"),ng()(),wl(134,"td"),Ux(135,"Cor da borda"),ng(),wl(136,"td")(137,"code"),Ux(138,"var(--color-neutral-light-20)"),ng()()(),wl(139,"tr")(140,"td")(141,"code"),Ux(142,"--border-radius-content"),ng()(),wl(143,"td"),Ux(144,"Cont\xE9m o valor do raio dos cantos do elemento"),ng(),wl(145,"td")(146,"code"),Ux(147,"var(--border-radius-md)"),ng()()(),wl(148,"tr")(149,"td")(150,"code"),Ux(151,"--text-color-file-name"),ng()(),wl(152,"td"),Ux(153,"Cor do texto do nome do arquivo"),ng(),wl(154,"td")(155,"code"),Ux(156,"var(--color-neutral-dark-90)"),ng()()(),wl(157,"tr")(158,"td")(159,"code"),Ux(160,"--font-family-file-name"),ng()(),wl(161,"td"),Ux(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),ng(),wl(163,"td")(164,"code"),Ux(165,"var(--font-family-theme)"),ng()()(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--text-color-info-bar"),ng()(),wl(170,"td"),Ux(171,"Cor do texto de informa\xE7\xE3o"),ng(),wl(172,"td")(173,"code"),Ux(174,"var(--color-neutral-mid-60)"),ng()()(),wl(175,"tr")(176,"td")(177,"code"),Ux(178,"--font-family-info-bar"),ng()(),wl(179,"td"),Ux(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),ng(),wl(181,"td")(182,"code"),Ux(183,"var(--font-family-theme)"),ng()()(),wl(184,"tr")(185,"td")(186,"strong"),Ux(187,"ERROR STATE"),ng()(),Ul(188,"td")(189,"td"),ng(),wl(190,"tr")(191,"td")(192,"code"),Ux(193,"--background-color-content-error"),ng()(),wl(194,"td"),Ux(195,"Cor de fundo do container de erro"),ng(),wl(196,"td")(197,"code"),Ux(198,"var(--color-neutral-light-00)"),ng()()(),wl(199,"tr")(200,"td")(201,"code"),Ux(202,"--border-color-content-error"),ng()(),wl(203,"td"),Ux(204,"Cor da borda do container de erro"),ng(),wl(205,"td")(206,"code"),Ux(207,"var(--color-feedback-negative-base)"),ng()()(),wl(208,"tr")(209,"td")(210,"code"),Ux(211,"--text-color-error"),ng()(),wl(212,"td"),Ux(213,"Cor do texto do container de erro"),ng(),wl(214,"td")(215,"code"),Ux(216,"var(--color-feedback-negative-dark)"),ng()()(),wl(217,"tr")(218,"td")(219,"code"),Ux(220,"--color-icon-error"),ng()(),wl(221,"td"),Ux(222,"Cor do \xEDcone no estado de erro"),ng(),wl(223,"td")(224,"code"),Ux(225,"var(--color-feedback-negative-base)"),ng()()(),wl(226,"tr")(227,"td")(228,"code"),Ux(229,"--font-family-error"),ng()(),wl(230,"td"),Ux(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),ng(),wl(232,"td")(233,"code"),Ux(234,"var(--font-family-theme)"),ng()()(),wl(235,"tr")(236,"td")(237,"strong"),Ux(238,"UPLOADED STATE"),ng()(),Ul(239,"td")(240,"td"),ng(),wl(241,"tr")(242,"td")(243,"code"),Ux(244,"--background-color-content-uploaded"),ng()(),wl(245,"td"),Ux(246,"Cor de fundo do container com status de enviado"),ng(),wl(247,"td")(248,"code"),Ux(249,"var(--color-neutral-light-00)"),ng()()(),wl(250,"tr")(251,"td")(252,"code"),Ux(253,"--border-color-content-uploaded"),ng()(),wl(254,"td"),Ux(255,"Cor da borda do container com status de enviado"),ng(),wl(256,"td")(257,"code"),Ux(258,"var(--color-neutral-light-20)"),ng()()(),wl(259,"tr")(260,"td")(261,"strong"),Ux(262,"INTERACTIVE STATE"),ng()(),Ul(263,"td")(264,"td"),ng(),wl(265,"tr")(266,"td")(267,"code"),Ux(268,"--text-color-file-name-interactive"),ng()(),wl(269,"td"),Ux(270,"Cor do texto do nome do arquivo quando interativo"),ng(),wl(271,"td")(272,"code"),Ux(273,"var(--color-action-default)"),ng()()(),wl(274,"tr")(275,"td")(276,"strong"),Ux(277,"THUMBNAIL"),ng()(),Ul(278,"td")(279,"td"),ng(),wl(280,"tr")(281,"td")(282,"code"),Ux(283,"--color-icon-thumbnail"),ng()(),wl(284,"td"),Ux(285,"Cor do \xEDcone na thumbnail"),ng(),wl(286,"td")(287,"code"),Ux(288,"var(--color-action-default)"),ng()()(),wl(289,"tr")(290,"td")(291,"code"),Ux(292,"--border-width-thumbnail"),ng()(),wl(293,"td"),Ux(294,"Tamanho da fonte na thumbnail"),ng(),wl(295,"td")(296,"code"),Ux(297,"var(--border-width-sm)"),ng()()(),wl(298,"tr")(299,"td")(300,"code"),Ux(301,"--border-radius-thumbnail"),ng()(),wl(302,"td"),Ux(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),ng(),wl(304,"td")(305,"code"),Ux(306,"var(--border-radius-md)"),ng()()(),wl(307,"tr")(308,"td")(309,"code"),Ux(310,"--background-color-thumbnail"),ng()(),wl(311,"td"),Ux(312,"Cor de fundo na thumbnail"),ng(),wl(313,"td")(314,"code"),Ux(315,"var(--color-neutral-light-05)"),ng()()(),wl(316,"tr")(317,"td")(318,"strong"),Ux(319,"Focused"),ng()(),Ul(320,"td")(321,"td"),ng(),wl(322,"tr")(323,"td")(324,"code"),Ux(325,"--outline-color-focused"),ng()(),wl(326,"td"),Ux(327,"Cor do outline do estado de focus"),ng(),wl(328,"td")(329,"code"),Ux(330,"var(--color-action-focus)"),ng()()()()()(),wl(331,"div",7)(332,"h4",8),Ux(333,"Seletor"),ng(),wl(334,"pre",9),Ux(335,`<po-upload
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
`),ng()(),wl(336,"h4",10),Ux(337,"Propriedades"),ng(),wl(338,"table",11)(339,"tr",12)(340,"th",13),Ux(341,"Nome"),ng(),wl(342,"th",13),Ux(343,"Tipo"),ng(),wl(344,"th",13),Ux(345,"Padr\xE3o"),ng(),wl(346,"th",13),Ux(347,"Descri\xE7\xE3o"),ng()(),wl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),Ux(352," (p-additional-help)"),Ul(353,"br"),ng()(),wl(354,"div",18),Ux(355,"Deprecated"),ng()(),wl(356,"td",19)(357,"code",20),Ux(358,"EventEmitter"),ng()(),wl(359,"td",21),Ux(360,"-"),ng(),wl(361,"td",22)(362,"em")(363,"strong"),Ux(364,"(opcional)"),ng()(),wl(365,"p"),Ux(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(367,"blockquote")(368,"p"),Ux(369,"Essa propriedade est\xE1 "),wl(370,"strong"),Ux(371,"depreciada"),ng(),Ux(372," e ser\xE1 removida na vers\xE3o "),wl(373,"code"),Ux(374,"23.x.x"),ng(),Ux(375,". Recomendamos utilizar a propriedade "),wl(376,"code"),Ux(377,"p-helper"),ng(),Ux(378," que oferece mais recursos e flexibilidade."),ng()()()(),wl(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),Ux(383," p-additional-help-tooltip"),Ul(384,"br"),ng()(),wl(385,"div",18),Ux(386,"Deprecated"),ng()(),wl(387,"td",19)(388,"code",25),Ux(389,"string"),ng()(),wl(390,"td",21),Ux(391,"-"),ng(),wl(392,"td",22)(393,"em")(394,"strong"),Ux(395,"(opcional)"),ng()(),wl(396,"p"),Ux(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(398,"code"),Ux(399,"po-helper"),ng(),Ux(400,`.
`),wl(401,"strong"),Ux(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(403,"blockquote")(404,"p"),Ux(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(406,"blockquote")(407,"p"),Ux(408,"Essa propriedade est\xE1 "),wl(409,"strong"),Ux(410,"depreciada"),ng(),Ux(411," e ser\xE1 removida na vers\xE3o "),wl(412,"code"),Ux(413,"23.x.x"),ng(),Ux(414,". Recomendamos utilizar a propriedade "),wl(415,"code"),Ux(416,"p-helper"),ng(),Ux(417," que oferece mais recursos e flexibilidade."),ng()()()(),wl(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),Ux(422," p-append-in-body"),Ul(423,"br"),ng()()(),wl(424,"td",19)(425,"code",26),Ux(426,"boolean"),ng()(),wl(427,"td",21)(428,"p")(429,"code"),Ux(430,"false"),ng()()(),wl(431,"td",22)(432,"em")(433,"strong"),Ux(434,"(opcional)"),ng()(),wl(435,"p"),Ux(436,"Define que o popover ("),wl(437,"code"),Ux(438,"p-helper"),ng(),Ux(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(440,"blockquote")(441,"p"),Ux(442,"Quando utilizado com "),wl(443,"code"),Ux(444,"p-helper"),ng(),Ux(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),Ux(450," p-auto-focus"),Ul(451,"br"),ng()()(),wl(452,"td",19)(453,"code",26),Ux(454,"boolean"),ng()(),wl(455,"td",21)(456,"p")(457,"code"),Ux(458,"false"),ng()()(),wl(459,"td",22)(460,"em")(461,"strong"),Ux(462,"(opcional)"),ng()(),wl(463,"p"),Ux(464,"Aplica foco no elemento ao ser iniciado."),ng(),wl(465,"blockquote")(466,"p"),Ux(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),Ux(472," p-auto-upload"),Ul(473,"br"),ng()()(),wl(474,"td",19)(475,"code",26),Ux(476,"boolean"),ng()(),wl(477,"td",21)(478,"p")(479,"code"),Ux(480,"false"),ng()()(),wl(481,"td",22)(482,"em")(483,"strong"),Ux(484,"(opcional)"),ng()(),wl(485,"p"),Ux(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),ng(),wl(487,"blockquote")(488,"p"),Ux(489,"Esta propriedade funciona somente se a propriedade "),wl(490,"code"),Ux(491,"p-url"),ng(),Ux(492," tiver um valor atribu\xEDdo."),ng()()()(),wl(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),Ux(497," p-compact-label"),Ul(498,"br"),ng()()(),wl(499,"td",19)(500,"code",26),Ux(501,"boolean"),ng()(),wl(502,"td",21)(503,"p")(504,"code"),Ux(505,"false"),ng()()(),wl(506,"td",22)(507,"em")(508,"strong"),Ux(509,"(opcional)"),ng()(),wl(510,"p"),Ux(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(512,"p"),Ux(513,"Quando habilitado ("),wl(514,"code"),Ux(515,"true"),ng(),Ux(516,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(517,"ul")(518,"li")(519,"code"),Ux(520,"po-label"),ng()(),wl(521,"li")(522,"code"),Ux(523,"p-requirement (showRequired)"),ng()(),wl(524,"li")(525,"code"),Ux(526,"po-helper"),ng()()(),wl(527,"p"),Ux(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(529,"p"),Ux(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(531,"ul")(532,"li")(533,"code"),Ux(534,"--field-container-title-justify"),ng()(),wl(535,"li")(536,"code"),Ux(537,"--field-container-title-flex"),ng()()(),wl(538,"p"),Ux(539,"Exemplo:"),ng(),wl(540,"pre")(541,"code"),Ux(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(543,"p"),Ux(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),Ux(549," p-custom-action"),Ul(550,"br"),ng()()(),wl(551,"td",19)(552,"code",27),Ux(553,"PoProgressAction"),ng()(),wl(554,"td",21),Ux(555,"-"),ng(),wl(556,"td",22)(557,"em")(558,"strong"),Ux(559,"(opcional)"),ng()(),wl(560,"p"),Ux(561,"Define uma a\xE7\xE3o personalizada no componente "),wl(562,"code"),Ux(563,"po-upload"),ng(),Ux(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ng(),wl(565,"p"),Ux(566,"A a\xE7\xE3o deve implementar a interface "),wl(567,"strong"),Ux(568,"PoProgressAction"),ng(),Ux(569,", permitindo configurar propriedades como:"),ng(),wl(570,"ul")(571,"li")(572,"code"),Ux(573,"label"),ng(),Ux(574,": Texto do bot\xE3o."),ng(),wl(575,"li")(576,"code"),Ux(577,"icon"),ng(),Ux(578,": \xCDcone a ser exibido no bot\xE3o."),ng(),wl(579,"li")(580,"code"),Ux(581,"type"),ng(),Ux(582,": Tipo de bot\xE3o (ex.: "),wl(583,"code"),Ux(584,"danger"),ng(),Ux(585," ou "),wl(586,"code"),Ux(587,"default"),ng(),Ux(588,")."),ng(),wl(589,"li")(590,"code"),Ux(591,"disabled"),ng(),Ux(592,": Indica se o bot\xE3o deve estar desabilitado."),ng(),wl(593,"li")(594,"code"),Ux(595,"visible"),ng(),Ux(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),ng()(),wl(597,"p")(598,"strong"),Ux(599,"Exemplo de uso:"),ng()(),wl(600,"pre")(601,"code",28),Ux(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),ng()(),wl(603,"pre")(604,"code",29),Ux(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),ng()()()(),wl(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),Ux(610," (p-custom-action-click)"),Ul(611,"br"),ng()()(),wl(612,"td",19)(613,"code",20),Ux(614,"EventEmitter"),ng()(),wl(615,"td",21),Ux(616,"-"),ng(),wl(617,"td",22)(618,"em")(619,"strong"),Ux(620,"(opcional)"),ng()(),wl(621,"p"),Ux(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),wl(623,"code"),Ux(624,"p-custom-action"),ng(),Ux(625,"."),ng(),wl(626,"p"),Ux(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ng(),wl(628,"p")(629,"strong"),Ux(630,"Exemplo de uso:"),ng()(),wl(631,"pre")(632,"code",28),Ux(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),ng()(),wl(634,"pre")(635,"code",29),Ux(636,`customAction: PoProgressAction = {
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
`),ng()()()(),wl(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),Ux(641," p-custom-modal-actions"),Ul(642,"br"),ng()()(),wl(643,"td",19)(644,"code",30),Ux(645,"Array<PoModalAction>"),ng()(),wl(646,"td",21),Ux(647,"-"),ng(),wl(648,"td",22)(649,"em")(650,"strong"),Ux(651,"(opcional)"),ng()(),wl(652,"p"),Ux(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),ng(),wl(654,"p"),Ux(655,"A a\xE7\xE3o deve implementar a interface "),wl(656,"strong"),Ux(657,"PoModalAction"),ng(),Ux(658,", permitindo configurar propriedades como:"),ng(),wl(659,"ul")(660,"li")(661,"code"),Ux(662,"label"),ng(),Ux(663,": Texto do bot\xE3o."),ng(),wl(664,"li")(665,"code"),Ux(666,"action"),ng(),Ux(667,": \xCDcone a ser exibido no bot\xE3o."),ng(),wl(668,"li")(669,"code"),Ux(670,"danger"),ng(),Ux(671,": Define a propriedade "),wl(672,"code"),Ux(673,"p-danger"),ng(),Ux(674," do bot\xE3o."),ng(),wl(675,"li")(676,"code"),Ux(677,"disabled"),ng(),Ux(678,": Indica se o bot\xE3o deve estar desabilitado."),ng(),wl(679,"li")(680,"code"),Ux(681,"visible"),ng(),Ux(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),ng()(),wl(683,"p")(684,"strong"),Ux(685,"Exemplo de uso:"),ng()(),wl(686,"pre")(687,"code",28),Ux(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),ng()(),wl(689,"pre")(690,"code",29),Ux(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),ng()()()(),wl(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),Ux(696," p-directory"),Ul(697,"br"),ng()()(),wl(698,"td",19)(699,"code",26),Ux(700,"boolean"),ng()(),wl(701,"td",21)(702,"p")(703,"code"),Ux(704,"false"),ng()()(),wl(705,"td",22)(706,"em")(707,"strong"),Ux(708,"(opcional)"),ng()(),wl(709,"p"),Ux(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),ng(),wl(711,"blockquote")(712,"p"),Ux(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),ng()(),wl(714,"blockquote")(715,"p"),Ux(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),wl(717,"strong"),Ux(718,"Internet Explorer"),ng(),Ux(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),ng()()()(),wl(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),Ux(724," p-disabled"),Ul(725,"br"),ng()()(),wl(726,"td",19)(727,"code",26),Ux(728,"boolean"),ng()(),wl(729,"td",21),Ux(730,"-"),ng(),wl(731,"td",22)(732,"em")(733,"strong"),Ux(734,"(opcional)"),ng()(),wl(735,"p"),Ux(736,"Indica que o campo ser\xE1 desabilitado."),ng()()(),wl(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),Ux(741," p-disabled-remove-file"),Ul(742,"br"),ng()()(),wl(743,"td",19)(744,"code",26),Ux(745,"boolean"),ng()(),wl(746,"td",21)(747,"p")(748,"code"),Ux(749,"false"),ng()()(),wl(750,"td",22)(751,"em")(752,"strong"),Ux(753,"(opcional)"),ng()(),wl(754,"p"),Ux(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),ng()()(),wl(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),Ux(760," p-drag-drop"),Ul(761,"br"),ng()()(),wl(762,"td",19)(763,"code",26),Ux(764,"boolean"),ng()(),wl(765,"td",21)(766,"p")(767,"code"),Ux(768,"false"),ng()()(),wl(769,"td",22)(770,"em")(771,"strong"),Ux(772,"(opcional)"),ng()(),wl(773,"p"),Ux(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ng(),wl(775,"blockquote")(776,"p"),Ux(777,"Recomendamos utilizar apenas um "),wl(778,"code"),Ux(779,"po-upload"),ng(),Ux(780," com esta funcionalidade por tela."),ng()()()(),wl(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),Ux(785," p-drag-drop-height"),Ul(786,"br"),ng()()(),wl(787,"td",19)(788,"code",31),Ux(789,"number"),ng()(),wl(790,"td",21)(791,"p")(792,"code"),Ux(793,"320"),ng()()(),wl(794,"td",22)(795,"em")(796,"strong"),Ux(797,"(opcional)"),ng()(),wl(798,"p"),Ux(799,"Define em "),wl(800,"em"),Ux(801,"pixels"),ng(),Ux(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),wl(803,"code"),Ux(804,"160px"),ng(),Ux(805,"."),ng(),wl(806,"blockquote")(807,"p"),Ux(808,"Esta propriedade funciona somente se a propriedade "),wl(809,"code"),Ux(810,"p-drag-drop"),ng(),Ux(811," estiver habilitada."),ng()()()(),wl(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),Ux(816," p-restrictions"),Ul(817,"br"),ng()()(),wl(818,"td",19)(819,"code",32),Ux(820,"PoUploadFileRestrictions"),ng()(),wl(821,"td",21),Ux(822,"-"),ng(),wl(823,"td",22)(824,"em")(825,"strong"),Ux(826,"(opcional)"),ng()(),wl(827,"p"),Ux(828,"Objeto que segue a defini\xE7\xE3o da interface "),wl(829,"code"),Ux(830,"PoUploadFileRestrictions"),ng(),Ux(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ng()()(),wl(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),Ux(836," p-form-field"),Ul(837,"br"),ng()()(),wl(838,"td",19)(839,"code",25),Ux(840,"string"),ng()(),wl(841,"td",21)(842,"p")(843,"code"),Ux(844,"files"),ng()()(),wl(845,"td",22)(846,"em")(847,"strong"),Ux(848,"(opcional)"),ng()(),wl(849,"p"),Ux(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),wl(851,"code"),Ux(852,"p-url"),ng(),Ux(853,"."),ng()()(),wl(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),Ux(858," p-headers"),Ul(859,"br"),ng()()(),wl(860,"td",19)(861,"code",33),Ux(862,"{ [name: string]: string "),ng(),wl(863,"code",34),Ux(864,` Array<string>;
}`),ng()(),wl(865,"td",21),Ux(866,"-"),ng(),wl(867,"td",22)(868,"p"),Ux(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),ng()()(),wl(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),Ux(874," p-help"),Ul(875,"br"),ng()()(),wl(876,"td",19)(877,"code",25),Ux(878,"string"),ng()(),wl(879,"td",21),Ux(880,"-"),ng(),wl(881,"td",22)(882,"em")(883,"strong"),Ux(884,"(opcional)"),ng()(),wl(885,"p"),Ux(886,"Texto de apoio para o campo."),ng()()(),wl(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),Ux(891," p-hide-restrictions-info"),Ul(892,"br"),ng()()(),wl(893,"td",19)(894,"code",26),Ux(895,"boolean"),ng()(),wl(896,"td",21)(897,"p")(898,"code"),Ux(899,"false"),ng()()(),wl(900,"td",22)(901,"em")(902,"strong"),Ux(903,"(opcional)"),ng()(),wl(904,"p"),Ux(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),ng()()(),wl(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),Ux(910," p-hide-select-button"),Ul(911,"br"),ng()()(),wl(912,"td",19)(913,"code",26),Ux(914,"boolean"),ng()(),wl(915,"td",21)(916,"p")(917,"code"),Ux(918,"false"),ng()()(),wl(919,"td",22)(920,"em")(921,"strong"),Ux(922,"(opcional)"),ng()(),wl(923,"p"),Ux(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),ng(),wl(925,"blockquote")(926,"p"),Ux(927,"Caso o valor definido seja "),wl(928,"code"),Ux(929,"true"),ng(),Ux(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),wl(931,"code"),Ux(932,"selectFiles()"),ng(),Ux(933," para sele\xE7\xE3o de arquivos."),ng()()()(),wl(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),Ux(938," p-hide-send-button"),Ul(939,"br"),ng()()(),wl(940,"td",19)(941,"code",26),Ux(942,"boolean"),ng()(),wl(943,"td",21)(944,"p")(945,"code"),Ux(946,"false"),ng()()(),wl(947,"td",22)(948,"em")(949,"strong"),Ux(950,"(opcional)"),ng()(),wl(951,"p"),Ux(952,"Omite o bot\xE3o de envio de arquivos."),ng(),wl(953,"blockquote")(954,"p"),Ux(955,"Caso o valor definido seja "),wl(956,"code"),Ux(957,"true"),ng(),Ux(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),wl(959,"code"),Ux(960,"sendFiles()"),ng(),Ux(961," para envio do(s) arquivo(s) selecionado(s)."),ng()()()(),wl(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),Ux(966," p-multiple"),Ul(967,"br"),ng()()(),wl(968,"td",19)(969,"code",26),Ux(970,"boolean"),ng()(),wl(971,"td",21),Ux(972,"-"),ng(),wl(973,"td",22)(974,"em")(975,"strong"),Ux(976,"(opcional)"),ng()(),wl(977,"p"),Ux(978,"Define se pode selecionar mais de um arquivo."),ng(),wl(979,"blockquote")(980,"p"),Ux(981,"Se utilizada a "),wl(982,"code"),Ux(983,"p-directory"),ng(),Ux(984,", habilita-se automaticamente esta propriedade."),ng()()()(),wl(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),Ux(989," (p-keydown)"),Ul(990,"br"),ng()()(),wl(991,"td",19)(992,"code",20),Ux(993,"EventEmitter"),ng()(),wl(994,"td",21),Ux(995,"-"),ng(),wl(996,"td",22)(997,"em")(998,"strong"),Ux(999,"(opcional)"),ng()(),wl(1e3,"p"),Ux(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(1002,"code"),Ux(1003,"KeyboardEvent"),ng(),Ux(1004," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),Ux(1009," p-label"),Ul(1010,"br"),ng()()(),wl(1011,"td",19)(1012,"code",25),Ux(1013,"string"),ng()(),wl(1014,"td",21),Ux(1015,"-"),ng(),wl(1016,"td",22)(1017,"em")(1018,"strong"),Ux(1019,"(opcional)"),ng()(),wl(1020,"p"),Ux(1021,"R\xF3tulo do campo."),ng()()(),wl(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),Ux(1026," p-label-text-wrap"),Ul(1027,"br"),ng()()(),wl(1028,"td",19)(1029,"code",26),Ux(1030,"boolean"),ng()(),wl(1031,"td",21)(1032,"p")(1033,"code"),Ux(1034,"false"),ng()()(),wl(1035,"td",22)(1036,"em")(1037,"strong"),Ux(1038,"(opcional)"),ng()(),wl(1039,"p"),Ux(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(1041,"code"),Ux(1042,"p-label"),ng(),Ux(1043,". Quando "),wl(1044,"code"),Ux(1045,"p-label-text-wrap"),ng(),Ux(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),Ux(1051," p-literals"),Ul(1052,"br"),ng()()(),wl(1053,"td",19)(1054,"code",35),Ux(1055,"PoUploadLiterals"),ng()(),wl(1056,"td",21),Ux(1057,"-"),ng(),wl(1058,"td",22)(1059,"em")(1060,"strong"),Ux(1061,"(opcional)"),ng()(),wl(1062,"p"),Ux(1063,"Objeto com as literais usadas no "),wl(1064,"code"),Ux(1065,"po-upload"),ng(),Ux(1066,"."),ng(),wl(1067,"p"),Ux(1068,"Existem duas maneiras de customizar o componente:"),ng(),wl(1069,"ul")(1070,"li"),Ux(1071,"passando um objeto implementando a interface "),wl(1072,"code"),Ux(1073,"PoUploadLiterals"),ng(),Ux(1074," com todas as literais dispon\xEDveis;"),ng(),wl(1075,"li"),Ux(1076,"passando apenas as literais que deseja customizar:"),wl(1077,"pre")(1078,"code"),Ux(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),ng()()()(),wl(1080,"p"),Ux(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),ng(),wl(1082,"pre")(1083,"code"),Ux(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),ng()(),wl(1085,"blockquote")(1086,"p"),Ux(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),wl(1088,"em"),Ux(1089,"browser"),ng(),Ux(1090," (pt, en, es, ru)."),ng()()()(),wl(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),Ux(1095," p-loading"),Ul(1096,"br"),ng()()(),wl(1097,"td",19)(1098,"code",26),Ux(1099,"boolean"),ng()(),wl(1100,"td",21)(1101,"p")(1102,"code"),Ux(1103,"false"),ng()()(),wl(1104,"td",22)(1105,"em")(1106,"strong"),Ux(1107,"(opcional)"),ng()(),wl(1108,"p"),Ux(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),wl(1110,"code"),Ux(1111,"Selecionar arquivo"),ng(),Ux(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),ng(),wl(1113,"blockquote")(1114,"p"),Ux(1115,"Incompat\xEDvel com "),wl(1116,"code"),Ux(1117,"p-drag-drop"),ng(),Ux(1118," e "),wl(1119,"code"),Ux(1120,"p-hide-select-button"),ng(),Ux(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),wl(1122,"code"),Ux(1123,"Selecionar arquivo"),ng(),Ux(1124,"."),ng()()()(),wl(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),Ux(1129," name"),Ul(1130,"br"),ng()()(),wl(1131,"td",19)(1132,"code",25),Ux(1133,"string"),ng()(),wl(1134,"td",21),Ux(1135,"-"),ng(),wl(1136,"td",22)(1137,"p"),Ux(1138,"Define o valor do atributo "),wl(1139,"code"),Ux(1140,"name"),ng(),Ux(1141," do componente."),ng()()(),wl(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),Ux(1146," (ngModelChange)"),Ul(1147,"br"),ng()()(),wl(1148,"td",19)(1149,"code",20),Ux(1150,"EventEmitter"),ng()(),wl(1151,"td",21),Ux(1152,"-"),ng(),wl(1153,"td",22)(1154,"em")(1155,"strong"),Ux(1156,"(opcional)"),ng()(),wl(1157,"p"),Ux(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),wl(1159,"em"),Ux(1160,"tag"),ng(),wl(1161,"code"),Ux(1162,"form"),ng(),Ux(1163,"."),ng(),wl(1164,"p"),Ux(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),wl(1166,"code"),Ux(1167,"strictTemplates"),ng(),Ux(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ng(),wl(1169,"pre")(1170,"code"),Ux(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),ng()()()(),wl(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),Ux(1176," (p-cancel)"),Ul(1177,"br"),ng()()(),wl(1178,"td",19)(1179,"code",20),Ux(1180,"EventEmitter"),ng()(),wl(1181,"td",21),Ux(1182,"-"),ng(),wl(1183,"td",22)(1184,"em")(1185,"strong"),Ux(1186,"(opcional)"),ng()(),wl(1187,"p"),Ux(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),ng(),wl(1189,"blockquote")(1190,"p"),Ux(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),ng()()()(),wl(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),Ux(1196," (p-error)"),Ul(1197,"br"),ng()()(),wl(1198,"td",19)(1199,"code",20),Ux(1200,"EventEmitter"),ng()(),wl(1201,"td",21),Ux(1202,"-"),ng(),wl(1203,"td",22)(1204,"em")(1205,"strong"),Ux(1206,"(opcional)"),ng()(),wl(1207,"p"),Ux(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),ng(),wl(1209,"blockquote")(1210,"p"),Ux(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),wl(1212,"code"),Ux(1213,"HttpErrorResponse"),ng(),Ux(1214,"."),ng()()()(),wl(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),Ux(1219," (p-open-modal-preview)"),Ul(1220,"br"),ng()()(),wl(1221,"td",19)(1222,"code",20),Ux(1223,"EventEmitter"),ng()(),wl(1224,"td",21),Ux(1225,"-"),ng(),wl(1226,"td",22)(1227,"em")(1228,"strong"),Ux(1229,"(opcional)"),ng()(),wl(1230,"p"),Ux(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),ng(),wl(1232,"blockquote")(1233,"p"),Ux(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),ng()()()(),wl(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),Ux(1239," (p-remove)"),Ul(1240,"br"),ng()()(),wl(1241,"td",19)(1242,"code",20),Ux(1243,"EventEmitter"),ng()(),wl(1244,"td",21),Ux(1245,"-"),ng(),wl(1246,"td",22)(1247,"em")(1248,"strong"),Ux(1249,"(opcional)"),ng()(),wl(1250,"p"),Ux(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),ng(),wl(1252,"blockquote")(1253,"p"),Ux(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),ng()()()(),wl(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),Ux(1259," (p-success)"),Ul(1260,"br"),ng()()(),wl(1261,"td",19)(1262,"code",20),Ux(1263,"EventEmitter"),ng()(),wl(1264,"td",21),Ux(1265,"-"),ng(),wl(1266,"td",22)(1267,"em")(1268,"strong"),Ux(1269,"(opcional)"),ng()(),wl(1270,"p"),Ux(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),ng(),wl(1272,"blockquote")(1273,"p"),Ux(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),wl(1275,"code"),Ux(1276,"HttpResponse"),ng(),Ux(1277,"."),ng()()()(),wl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),Ux(1282," (p-upload)"),Ul(1283,"br"),ng()()(),wl(1284,"td",19)(1285,"code",20),Ux(1286,"EventEmitter"),ng()(),wl(1287,"td",21),Ux(1288,"-"),ng(),wl(1289,"td",22)(1290,"em")(1291,"strong"),Ux(1292,"(opcional)"),ng()(),wl(1293,"p"),Ux(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ng(),wl(1295,"blockquote")(1296,"p"),Ux(1297,"data, nesta propriedade pode ser informado algum dado"),ng()(),wl(1298,"pre")(1299,"code"),Ux(1300,`event.data = {id: 'id do usu\xE1rio'};
`),ng()(),wl(1301,"blockquote")(1302,"p"),Ux(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),wl(1304,"code"),Ux(1305,"data"),ng(),Ux(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),ng()(),wl(1307,"pre")(1308,"code"),Ux(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),ng()()()(),wl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),Ux(1314," p-optional"),Ul(1315,"br"),ng()()(),wl(1316,"td",19)(1317,"code",26),Ux(1318,"boolean"),ng()(),wl(1319,"td",21)(1320,"p")(1321,"code"),Ux(1322,"false"),ng()()(),wl(1323,"td",22)(1324,"em")(1325,"strong"),Ux(1326,"(opcional)"),ng()(),wl(1327,"p"),Ux(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(1329,"blockquote")(1330,"p"),Ux(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1332,"ul")(1333,"li"),Ux(1334,"O campo conter "),wl(1335,"code"),Ux(1336,"p-required"),ng(),Ux(1337,";"),ng(),wl(1338,"li"),Ux(1339,"N\xE3o possuir "),wl(1340,"code"),Ux(1341,"p-help"),ng(),Ux(1342," e/ou "),wl(1343,"code"),Ux(1344,"p-label"),ng(),Ux(1345,"."),ng()()()(),wl(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),Ux(1350," p-helper"),Ul(1351,"br"),ng()()(),wl(1352,"td",19)(1353,"code",36),Ux(1354,"PoHelperOptions "),ng(),wl(1355,"code",25),Ux(1356," string"),ng()(),wl(1357,"td",21),Ux(1358,"-"),ng(),wl(1359,"td",22)(1360,"em")(1361,"strong"),Ux(1362,"(opcional)"),ng()(),wl(1363,"p"),Ux(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1365,"code"),Ux(1366,"p-label"),ng(),Ux(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1368,"code"),Ux(1369,"p-label"),ng(),Ux(1370,"."),ng(),wl(1371,"blockquote")(1372,"p"),Ux(1373,"Para mais informa\xE7\xF5es acesse: "),wl(1374,"a",37),Ux(1375,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1376,"."),ng()(),wl(1377,"blockquote")(1378,"p"),Ux(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1380,"code"),Ux(1381,"p-additional-help-tooltip"),ng(),Ux(1382," e "),wl(1383,"code"),Ux(1384,"p-additional-help"),ng(),Ux(1385,") ser\xE1 ignorado."),ng()()()(),wl(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),Ux(1390," p-required"),Ul(1391,"br"),ng()()(),wl(1392,"td",19)(1393,"code",26),Ux(1394,"boolean"),ng()(),wl(1395,"td",21)(1396,"p")(1397,"code"),Ux(1398,"false"),ng()()(),wl(1399,"td",22)(1400,"em")(1401,"strong"),Ux(1402,"(opcional)"),ng()(),wl(1403,"p"),Ux(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),Ux(1409," p-required-url"),Ul(1410,"br"),ng()()(),wl(1411,"td",19)(1412,"code",26),Ux(1413,"boolean"),ng()(),wl(1414,"td",21)(1415,"p")(1416,"code"),Ux(1417,"true"),ng()()(),wl(1418,"td",22)(1419,"em")(1420,"strong"),Ux(1421,"(opcional)"),ng()(),wl(1422,"p"),Ux(1423,"Define se a propriedade "),wl(1424,"code"),Ux(1425,"p-url"),ng(),Ux(1426," \xE9 obrigat\xF3ria."),ng(),wl(1427,"p"),Ux(1428,"Caso a propriedade seja definida como "),wl(1429,"code"),Ux(1430,"false"),ng(),Ux(1431,":"),ng(),wl(1432,"ul")(1433,"li"),Ux(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),wl(1435,"code"),Ux(1436,"p-url"),ng(),Ux(1437," definida."),ng(),wl(1438,"li"),Ux(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),wl(1440,"code"),Ux(1441,"p-url"),ng(),Ux(1442," seja definida."),ng()(),wl(1443,"blockquote")(1444,"p"),Ux(1445,"Se utilizada com a propriedade "),wl(1446,"code"),Ux(1447,"p-auto-upload"),ng(),Ux(1448," definida como "),wl(1449,"code"),Ux(1450,"true"),ng(),Ux(1451," ser\xE1 necess\xE1rio definir a propriedade "),wl(1452,"code"),Ux(1453,"p-url"),ng(),Ux(1454,"."),ng()()()(),wl(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),Ux(1459," p-show-required"),Ul(1460,"br"),ng()()(),wl(1461,"td",19)(1462,"code",26),Ux(1463,"boolean"),ng()(),wl(1464,"td",21),Ux(1465,"-"),ng(),wl(1466,"td",22)(1467,"p"),Ux(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1469,"blockquote")(1470,"p"),Ux(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1472,"ul")(1473,"li"),Ux(1474,"N\xE3o possuir "),wl(1475,"code"),Ux(1476,"p-help"),ng(),Ux(1477," e/ou "),wl(1478,"code"),Ux(1479,"p-label"),ng(),Ux(1480,"."),ng()()()(),wl(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),Ux(1485," p-show-thumbnail"),Ul(1486,"br"),ng()()(),wl(1487,"td",19)(1488,"code",26),Ux(1489,"boolean"),ng()(),wl(1490,"td",21)(1491,"p")(1492,"code"),Ux(1493,"true"),ng()()(),wl(1494,"td",22)(1495,"em")(1496,"strong"),Ux(1497,"(opcional)"),ng()(),wl(1498,"p"),Ux(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),ng(),wl(1500,"blockquote")(1501,"p"),Ux(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),wl(1503,"code"),Ux(1504,".png"),ng(),Ux(1505,", "),wl(1506,"code"),Ux(1507,".jpg"),ng(),Ux(1508,", "),wl(1509,"code"),Ux(1510,".jpeg"),ng(),Ux(1511," e "),wl(1512,"code"),Ux(1513,".gif"),ng(),Ux(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),ng()()()(),wl(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),Ux(1519," p-size"),Ul(1520,"br"),ng()()(),wl(1521,"td",19)(1522,"code",25),Ux(1523,"string"),ng()(),wl(1524,"td",21)(1525,"p")(1526,"code"),Ux(1527,"medium"),ng()()(),wl(1528,"td",22)(1529,"em")(1530,"strong"),Ux(1531,"(opcional)"),ng()(),wl(1532,"p"),Ux(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),ng(),wl(1534,"ul")(1535,"li")(1536,"code"),Ux(1537,"small"),ng(),Ux(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1539,"li")(1540,"code"),Ux(1541,"medium"),ng(),Ux(1542,": altura do button como 44px."),ng()(),wl(1543,"blockquote")(1544,"p"),Ux(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1546,"code"),Ux(1547,"medium"),ng(),Ux(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1549,"a",38),Ux(1550,"po-theme"),ng(),Ux(1551,"."),ng()()()(),wl(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),Ux(1556," p-url"),Ul(1557,"br"),ng()()(),wl(1558,"td",19)(1559,"code",25),Ux(1560,"string"),ng()(),wl(1561,"td",21),Ux(1562,"-"),ng(),wl(1563,"td",22)(1564,"p"),Ux(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),ng()()()(),wl(1566,"h3",10),Ux(1567,"M\xE9todos"),ng(),wl(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),Ux(1574," clear "),ng()()()()(),wl(1575,"tr",22)(1576,"td",22)(1577,"p"),Ux(1578,"M\xE9todo respons\xE1vel por "),wl(1579,"strong"),Ux(1580,"limpar"),ng(),Ux(1581," o(s) arquivo(s) selecionado(s)."),ng()()()(),Ul(1582,"br"),wl(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),Ux(1589," focus "),ng()()()()(),wl(1590,"tr",22)(1591,"td",22)(1592,"p"),Ux(1593,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1594,"p"),Ux(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1596,"pre")(1597,"code"),Ux(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),ng()()()()(),Ul(1599,"br"),wl(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),Ux(1606," closeModal "),ng()()()()(),wl(1607,"tr",22)(1608,"td",22)(1609,"p"),Ux(1610,"M\xE9todo respons\xE1vel por fechar o modal."),ng()()()(),Ul(1611,"br"),wl(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),Ux(1618," selectFiles "),ng()()()()(),wl(1619,"tr",22)(1620,"td",22)(1621,"p"),Ux(1622,"M\xE9todo respons\xE1vel por "),wl(1623,"strong"),Ux(1624,"abrir"),ng(),Ux(1625," a janela para sele\xE7\xE3o de arquivo(s)."),ng()()()(),Ul(1626,"br"),wl(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),Ux(1633," sendFiles "),ng()()()()(),wl(1634,"tr",22)(1635,"td",22)(1636,"p"),Ux(1637,"M\xE9todo respons\xE1vel por "),wl(1638,"strong"),Ux(1639,"enviar"),ng(),Ux(1640," o(s) arquivo(s) selecionado(s)."),ng()()()(),Ul(1641,"br"),wl(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),Ux(1648," showAdditionalHelp "),ng()()()()(),wl(1649,"tr",22)(1650,"td",22)(1651,"p"),Ux(1652,"M\xE9todo que exibe "),wl(1653,"code"),Ux(1654,"p-helper"),ng(),Ux(1655," ou executa a a\xE7\xE3o definida em "),wl(1656,"code"),Ux(1657,"p-helper{eventOnClick}"),ng(),Ux(1658," ou em "),wl(1659,"code"),Ux(1660,"p-additionalHelp"),ng(),Ux(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1662,"code"),Ux(1663,"p-keydown"),ng(),Ux(1664,"."),ng(),wl(1665,"blockquote")(1666,"p"),Ux(1667,"Exibe ou oculta o conte\xFAdo do componente "),wl(1668,"code"),Ux(1669,"po-helper"),ng(),Ux(1670," quando o componente estiver com foco."),ng()(),wl(1671,"pre")(1672,"code"),Ux(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),ng()(),wl(1674,"pre")(1675,"code"),Ux(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1677,"br"),wl(1678,"h3"),Ux(1679,"Interfaces"),ng(),wl(1680,"h4",41)(1681,"code",5),Ux(1682,"PoUploadFileRestrictions"),ng()(),wl(1683,"div",2)(1684,"p"),Ux(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),ng()(),wl(1686,"h4",10),Ux(1687,"Propriedades"),ng(),wl(1688,"table",11)(1689,"tr",12)(1690,"th",13),Ux(1691,"Nome"),ng(),wl(1692,"th",13),Ux(1693,"Tipo"),ng(),wl(1694,"th",13),Ux(1695,"Descri\xE7\xE3o"),ng()(),wl(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),Ux(1700," allowedExtensions"),Ul(1701,"br"),ng()()(),wl(1702,"td",19)(1703,"code",42),Ux(1704,"Array<string>"),ng()(),wl(1705,"td",22)(1706,"em")(1707,"strong"),Ux(1708,"(opcional)"),ng()(),wl(1709,"p"),Ux(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),ng(),wl(1711,"pre")(1712,"code"),Ux(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),ng()()()(),wl(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),Ux(1718," maxFileSize"),Ul(1719,"br"),ng()()(),wl(1720,"td",19)(1721,"code",31),Ux(1722,"number"),ng()(),wl(1723,"td",22)(1724,"em")(1725,"strong"),Ux(1726,"(opcional)"),ng()(),wl(1727,"p"),Ux(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),ng(),wl(1729,"p"),Ux(1730,"Deve ser informado um valor em "),wl(1731,"em"),Ux(1732,"bytes"),ng(),Ux(1733,", por exemplo: "),wl(1734,"code"),Ux(1735,"31457280"),ng(),Ux(1736," (30MB)."),ng(),wl(1737,"blockquote")(1738,"p"),Ux(1739,"Por padr\xE3o o valor \xE9 "),wl(1740,"code"),Ux(1741,"30 MB"),ng(),Ux(1742,"."),ng()()()(),wl(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),Ux(1747," maxFiles"),Ul(1748,"br"),ng()()(),wl(1749,"td",19)(1750,"code",31),Ux(1751,"number"),ng()(),wl(1752,"td",22)(1753,"em")(1754,"strong"),Ux(1755,"(opcional)"),ng()(),wl(1756,"p"),Ux(1757,"Quantidade m\xE1xima de arquivos para o "),wl(1758,"em"),Ux(1759,"upload"),ng(),Ux(1760,"."),ng(),wl(1761,"blockquote")(1762,"p"),Ux(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),wl(1764,"code"),Ux(1765,"p-multiple"),ng(),Ux(1766," estiver habilitada e seu valor for maior do que zero."),ng()()()(),wl(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),Ux(1771," minFileSize"),Ul(1772,"br"),ng()()(),wl(1773,"td",19)(1774,"code",31),Ux(1775,"number"),ng()(),wl(1776,"td",22)(1777,"em")(1778,"strong"),Ux(1779,"(opcional)"),ng()(),wl(1780,"p"),Ux(1781,"Tamanho m\xEDnimo em "),wl(1782,"em"),Ux(1783,"bytes"),ng(),Ux(1784," do arquivo que ser\xE1 enviado ao servidor."),ng(),wl(1785,"blockquote")(1786,"p"),Ux(1787,"Por padr\xE3o o valor \xE9 "),wl(1788,"code"),Ux(1789,"0"),ng(),Ux(1790,"."),ng()()()()(),wl(1791,"h4",41)(1792,"code",5),Ux(1793,"PoUploadLiterals"),ng()(),wl(1794,"div",2)(1795,"p"),Ux(1796,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1797,"code"),Ux(1798,"po-upload"),ng(),Ux(1799,"."),ng()(),wl(1800,"h4",10),Ux(1801,"Propriedades"),ng(),wl(1802,"table",11)(1803,"tr",12)(1804,"th",13),Ux(1805,"Nome"),ng(),wl(1806,"th",13),Ux(1807,"Tipo"),ng(),wl(1808,"th",13),Ux(1809,"Descri\xE7\xE3o"),ng()(),wl(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),Ux(1814," close"),Ul(1815,"br"),ng()()(),wl(1816,"td",19)(1817,"code",25),Ux(1818,"string"),ng()(),wl(1819,"td",22)(1820,"em")(1821,"strong"),Ux(1822,"(opcional)"),ng()(),wl(1823,"p"),Ux(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),ng()()(),wl(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),Ux(1829," continue"),Ul(1830,"br"),ng()()(),wl(1831,"td",19)(1832,"code",25),Ux(1833,"string"),ng()(),wl(1834,"td",22)(1835,"em")(1836,"strong"),Ux(1837,"(opcional)"),ng()(),wl(1838,"p"),Ux(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),ng()()(),wl(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),Ux(1844," doneText"),Ul(1845,"br"),ng()()(),wl(1846,"td",19)(1847,"code",25),Ux(1848,"string"),ng()(),wl(1849,"td",22)(1850,"em")(1851,"strong"),Ux(1852,"(opcional)"),ng()(),wl(1853,"p"),Ux(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),ng()()(),wl(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),Ux(1859," dragFilesHere"),Ul(1860,"br"),ng()()(),wl(1861,"td",19)(1862,"code",25),Ux(1863,"string"),ng()(),wl(1864,"td",22)(1865,"em")(1866,"strong"),Ux(1867,"(opcional)"),ng()(),wl(1868,"p"),Ux(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),wl(1870,"code"),Ux(1871,"p-drag-drop"),ng(),Ux(1872,"."),ng()()(),wl(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),Ux(1877," dragFoldersHere"),Ul(1878,"br"),ng()()(),wl(1879,"td",19)(1880,"code",25),Ux(1881,"string"),ng()(),wl(1882,"td",22)(1883,"em")(1884,"strong"),Ux(1885,"(opcional)"),ng()(),wl(1886,"p"),Ux(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),wl(1888,"code"),Ux(1889,"p-drag-drop"),ng(),Ux(1890,"."),ng()()(),wl(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),Ux(1895," dropFilesHere"),Ul(1896,"br"),ng()()(),wl(1897,"td",19)(1898,"code",25),Ux(1899,"string"),ng()(),wl(1900,"td",22)(1901,"em")(1902,"strong"),Ux(1903,"(opcional)"),ng()(),wl(1904,"p"),Ux(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),wl(1906,"code"),Ux(1907,"p-drag-drop"),ng()()()(),wl(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),Ux(1912," dropFoldersHere"),Ul(1913,"br"),ng()()(),wl(1914,"td",19)(1915,"code",25),Ux(1916,"string"),ng()(),wl(1917,"td",22)(1918,"em")(1919,"strong"),Ux(1920,"(opcional)"),ng()(),wl(1921,"p"),Ux(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),wl(1923,"code"),Ux(1924,"p-drag-drop"),ng(),Ux(1925,"."),ng()()(),wl(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),Ux(1930," errorOccurred"),Ul(1931,"br"),ng()()(),wl(1932,"td",19)(1933,"code",25),Ux(1934,"string"),ng()(),wl(1935,"td",22)(1936,"em")(1937,"strong"),Ux(1938,"(opcional)"),ng()(),wl(1939,"p"),Ux(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),ng()()(),wl(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),Ux(1945," files"),Ul(1946,"br"),ng()()(),wl(1947,"td",19)(1948,"code",25),Ux(1949,"string"),ng()(),wl(1950,"td",22)(1951,"em")(1952,"strong"),Ux(1953,"(opcional)"),ng()(),wl(1954,"p"),Ux(1955,"Par\xE2metro "),wl(1956,"em"),Ux(1957,"files"),ng(),Ux(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),wl(1959,"em"),Ux(1960,"dragDrop"),ng(),Ux(1961,"."),ng()()(),wl(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),Ux(1966," folders"),Ul(1967,"br"),ng()()(),wl(1968,"td",19)(1969,"code",25),Ux(1970,"string"),ng()(),wl(1971,"td",22)(1972,"em")(1973,"strong"),Ux(1974,"(opcional)"),ng()(),wl(1975,"p"),Ux(1976,"Par\xE2metro "),wl(1977,"em"),Ux(1978,"folders"),ng(),Ux(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),wl(1980,"em"),Ux(1981,"dragDrop"),ng(),Ux(1982,"."),ng()()(),wl(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),Ux(1987," invalidDropArea"),Ul(1988,"br"),ng()()(),wl(1989,"td",19)(1990,"code",25),Ux(1991,"string"),ng()(),wl(1992,"td",22)(1993,"em")(1994,"strong"),Ux(1995,"(opcional)"),ng()(),wl(1996,"p"),Ux(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),wl(1998,"em"),Ux(1999,"dragDrop"),ng(),Ux(2e3,"."),ng()()(),wl(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),Ux(2005," preview"),Ul(2006,"br"),ng()()(),wl(2007,"td",19)(2008,"code",25),Ux(2009,"string"),ng()(),wl(2010,"td",22)(2011,"em")(2012,"strong"),Ux(2013,"(opcional)"),ng()(),wl(2014,"p"),Ux(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),ng()()(),wl(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),Ux(2020," selectFile"),Ul(2021,"br"),ng()()(),wl(2022,"td",19)(2023,"code",25),Ux(2024,"string"),ng()(),wl(2025,"td",22)(2026,"em")(2027,"strong"),Ux(2028,"(opcional)"),ng()(),wl(2029,"p"),Ux(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),ng()()(),wl(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),Ux(2035," selectFiles"),Ul(2036,"br"),ng()()(),wl(2037,"td",19)(2038,"code",25),Ux(2039,"string"),ng()(),wl(2040,"td",22)(2041,"em")(2042,"strong"),Ux(2043,"(opcional)"),ng()(),wl(2044,"p"),Ux(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),wl(2046,"code"),Ux(2047,"p-multiple"),ng(),Ux(2048,"."),ng()()(),wl(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),Ux(2053," selectFilesOnComputer"),Ul(2054,"br"),ng()()(),wl(2055,"td",19)(2056,"code",25),Ux(2057,"string"),ng()(),wl(2058,"td",22)(2059,"em")(2060,"strong"),Ux(2061,"(opcional)"),ng()(),wl(2062,"p"),Ux(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),wl(2064,"em"),Ux(2065,"dragDrop"),ng(),Ux(2066,"."),ng()()(),wl(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),Ux(2071," selectFolder"),Ul(2072,"br"),ng()()(),wl(2073,"td",19)(2074,"code",25),Ux(2075,"string"),ng()(),wl(2076,"td",22)(2077,"em")(2078,"strong"),Ux(2079,"(opcional)"),ng()(),wl(2080,"p"),Ux(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),wl(2082,"code"),Ux(2083,"p-directory"),ng(),Ux(2084,"."),ng()()(),wl(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),Ux(2089," selectFolderOnComputer"),Ul(2090,"br"),ng()()(),wl(2091,"td",19)(2092,"code",25),Ux(2093,"string"),ng()(),wl(2094,"td",22)(2095,"em")(2096,"strong"),Ux(2097,"(opcional)"),ng()(),wl(2098,"p"),Ux(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),wl(2100,"em"),Ux(2101,"dragDrop"),ng(),Ux(2102,"."),ng()()(),wl(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),Ux(2107," sentWithSuccess"),Ul(2108,"br"),ng()()(),wl(2109,"td",19)(2110,"code",25),Ux(2111,"string"),ng()(),wl(2112,"td",22)(2113,"em")(2114,"strong"),Ux(2115,"(opcional)"),ng()(),wl(2116,"p"),Ux(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),ng()()(),wl(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),Ux(2122," startSending"),Ul(2123,"br"),ng()()(),wl(2124,"td",19)(2125,"code",25),Ux(2126,"string"),ng()(),wl(2127,"td",22)(2128,"em")(2129,"strong"),Ux(2130,"(opcional)"),ng()(),wl(2131,"p"),Ux(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),ng()()(),wl(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),Ux(2137," thumbnail"),Ul(2138,"br"),ng()()(),wl(2139,"td",19)(2140,"code",25),Ux(2141,"string"),ng()(),wl(2142,"td",22)(2143,"em")(2144,"strong"),Ux(2145,"(opcional)"),ng()(),wl(2146,"p"),Ux(2147,"Texto do leitor da miniatura da imagem."),ng()()(),wl(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),Ux(2152," tryAgain"),Ul(2153,"br"),ng()()(),wl(2154,"td",19)(2155,"code",25),Ux(2156,"string"),ng()(),wl(2157,"td",22)(2158,"em")(2159,"strong"),Ux(2160,"(opcional)"),ng()(),wl(2161,"p"),Ux(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),ng()()(),wl(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),Ux(2167," uploadingText"),Ul(2168,"br"),ng()()(),wl(2169,"td",19)(2170,"code",25),Ux(2171,"string"),ng()(),wl(2172,"td",22)(2173,"em")(2174,"strong"),Ux(2175,"(opcional)"),ng()(),wl(2176,"p"),Ux(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),ng()()()(),wl(2178,"h4",41)(2179,"code",5),Ux(2180,"PoProgressAction"),ng()(),wl(2181,"div",2)(2182,"p"),Ux(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),ng()(),wl(2184,"h4",10),Ux(2185,"Propriedades"),ng(),wl(2186,"table",11)(2187,"tr",12)(2188,"th",13),Ux(2189,"Nome"),ng(),wl(2190,"th",13),Ux(2191,"Tipo"),ng(),wl(2192,"th",13),Ux(2193,"Descri\xE7\xE3o"),ng()(),wl(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),Ux(2198," disabled"),Ul(2199,"br"),ng()()(),wl(2200,"td",19)(2201,"code",26),Ux(2202,"boolean "),ng(),wl(2203,"code",43),Ux(2204," Function"),ng()(),wl(2205,"td",22)(2206,"em")(2207,"strong"),Ux(2208,"(opcional)"),ng()(),wl(2209,"p"),Ux(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),ng(),wl(2211,"p"),Ux(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),ng()()(),wl(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),Ux(2217," icon"),Ul(2218,"br"),ng()()(),wl(2219,"td",19)(2220,"code",25),Ux(2221,"string "),ng(),wl(2222,"code",44),Ux(2223," TemplateRef<void>"),ng()(),wl(2224,"td",22)(2225,"em")(2226,"strong"),Ux(2227,"(opcional)"),ng()(),wl(2228,"p"),Ux(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(2230,"p"),Ux(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(2232,"a",45),Ux(2233,"Biblioteca de \xEDcones"),ng(),Ux(2234,". conforme exemplo abaixo:"),ng(),wl(2235,"pre")(2236,"code"),Ux(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),ng()(),wl(2238,"p"),Ux(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),ng(),wl(2240,"pre")(2241,"code"),Ux(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),ng()(),wl(2243,"p"),Ux(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(2245,"code"),Ux(2246,"TemplateRef"),ng(),Ux(2247,`, conforme exemplo abaixo:
component.html:`),ng(),wl(2248,"pre")(2249,"code"),Ux(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),ng()(),wl(2251,"p"),Ux(2252,"component.ts:"),ng(),wl(2253,"pre")(2254,"code"),Ux(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),ng()()()(),wl(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),Ux(2260," label"),Ul(2261,"br"),ng()()(),wl(2262,"td",19)(2263,"code",25),Ux(2264,"string"),ng()(),wl(2265,"td",22)(2266,"em")(2267,"strong"),Ux(2268,"(opcional)"),ng()(),wl(2269,"p"),Ux(2270,"R\xF3tulo da a\xE7\xE3o."),ng()()(),wl(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),Ux(2275," type"),Ul(2276,"br"),ng()()(),wl(2277,"td",19)(2278,"code",25),Ux(2279,"string"),ng()(),wl(2280,"td",22)(2281,"em")(2282,"strong"),Ux(2283,"(opcional)"),ng()(),wl(2284,"p"),Ux(2285,"Define a cor do item, sendo "),wl(2286,"code"),Ux(2287,"default"),ng(),Ux(2288," o padr\xE3o."),ng(),wl(2289,"p"),Ux(2290,"Valores v\xE1lidos:"),ng(),wl(2291,"ul")(2292,"li")(2293,"code"),Ux(2294,"default"),ng()(),wl(2295,"li")(2296,"code"),Ux(2297,"danger"),ng(),Ux(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),ng()()()(),wl(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),Ux(2303," visible"),Ul(2304,"br"),ng()()(),wl(2305,"td",19)(2306,"code",26),Ux(2307,"boolean "),ng(),wl(2308,"code",43),Ux(2309," Function"),ng()(),wl(2310,"td",22)(2311,"em")(2312,"strong"),Ux(2313,"(opcional)"),ng()(),wl(2314,"p"),Ux(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),ng(),wl(2316,"blockquote")(2317,"p"),Ux(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),ng()(),wl(2319,"p"),Ux(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),ng(),wl(2321,"ul")(2322,"li")(2323,"p"),Ux(2324,"Fun\xE7\xE3o que deve retornar um booleano."),ng()(),wl(2325,"li")(2326,"p"),Ux(2327,"Informar diretamente um valor booleano."),ng()()()()()()());},dependencies:[fP],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut$1("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-upload-doc"),ng(),wl(4,"po-tab",3),ut$1("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,De,Le,Re,Oe,Be,Ie,We],encapsulation:2})}return a})();var Ft=[{path:"",component:He}],Qe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Ft),vL]})}return a})();var qn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,Qe]})}return a})();export{qn as DocPoUploadModule};