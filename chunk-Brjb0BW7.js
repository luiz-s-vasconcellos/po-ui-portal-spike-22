import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,bx as Rk,aV as Xp,dc as G3,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,cV as bk,cW as wk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,bL as H3,cd as sme,b9 as ONe,bb as OO,aB as gx,aM as gw,aN as Z0,a4 as dN,aq as ix,aO as pw,aP as X0,a5 as hN,at as ox,b4 as rme,d0 as $3,bc as Sx,a7 as iN,av as zl,aw as uo,ax as fo,ab as lt$1,b5 as Ko,dd as Qme,de as ENe,G as Ot,a3 as SNe,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&Hl(0,"po-upload",0);},dependencies:[G3],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Upload Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-upload-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,He,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Fe],encapsulation:2})}return a})();function Ge(a,Ie){if(a&1&&(Cl(0,"div")(1,"po-widget",22)(2,"form",23),Hl(3,"po-input",24),Z0(),Hl(4,"po-select",25),Z0(),Hl(5,"po-select",26),Z0(),Hl(6,"po-switch",27),Z0(),Hl(7,"po-switch",28),Z0(),og()()()),a&2){let d=Ex();Lp(2),ZE("formGroup",d.actionForm),Lp(),X0(),Lp(),ZE("p-options",d.iconOptions),X0(),Lp(),ZE("p-options",d.typeOptions),X0(),Lp(),X0(),Lp(),X0();}}var De=(()=>{class a{fb=f(Rk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=gx();Cl(0,"po-upload",1),gw("ngModelChange",function(l){return Jy(m),Zx(i.upload,l)||(i.upload=l),e_(l)}),dt("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3),dN(4,"json"),Hl(5,"po-info",4),og(),Hl(6,"po-divider"),Cl(7,"div",2)(8,"form",null,0)(10,"po-input",5),gw("ngModelChange",function(l){return Jy(m),Zx(i.allowedExtensions,l)||(i.allowedExtensions=l),e_(l)}),dt("p-change",function(){return i.onChangeExtension()}),og(),Z0(),Cl(11,"po-number",6),gw("ngModelChange",function(l){return Jy(m),Zx(i.maxFiles,l)||(i.maxFiles=l),e_(l)}),dt("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),og(),Z0(),Cl(12,"po-number",7),gw("ngModelChange",function(l){return Jy(m),Zx(i.dragDropHeight,l)||(i.dragDropHeight=l),e_(l)}),og(),Z0(),Cl(13,"po-number",8),gw("ngModelChange",function(l){return Jy(m),Zx(i.minSize,l)||(i.minSize=l),e_(l)}),dt("p-change",function(){return i.onChangeMinSize(i.minSize)}),og(),Z0(),Cl(14,"po-number",9),gw("ngModelChange",function(l){return Jy(m),Zx(i.maxSize,l)||(i.maxSize=l),e_(l)}),dt("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),og(),Z0(),Hl(15,"po-divider"),Cl(16,"po-input",10),gw("ngModelChange",function(l){return Jy(m),Zx(i.label,l)||(i.label=l),e_(l)}),og(),Z0(),Cl(17,"po-input",11),gw("ngModelChange",function(l){return Jy(m),Zx(i.help,l)||(i.help=l),e_(l)}),og(),Z0(),Cl(18,"po-input",12),gw("ngModelChange",function(l){return Jy(m),Zx(i.helperText,l)||(i.helperText=l),e_(l)}),og(),Z0(),Cl(19,"po-input",13),gw("ngModelChange",function(l){return Jy(m),Zx(i.formField,l)||(i.formField=l),e_(l)}),og(),Z0(),Cl(20,"po-input",14),gw("ngModelChange",function(l){return Jy(m),Zx(i.url,l)||(i.url=l),e_(l)}),og(),Z0(),Cl(21,"po-input",15),gw("ngModelChange",function(l){return Jy(m),Zx(i.headersLabs,l)||(i.headersLabs=l),e_(l)}),dt("p-change",function(l){return i.onChangeHeaders(l)}),og(),Z0(),Cl(22,"po-input",16),gw("ngModelChange",function(l){return Jy(m),Zx(i.literals,l)||(i.literals=l),e_(l)}),dt("p-change",function(){return i.changeLiterals()}),og(),Z0(),Cl(23,"po-input",17),gw("ngModelChange",function(l){return Jy(m),Zx(i.modalActions,l)||(i.modalActions=l),e_(l)}),dt("p-change",function(){return i.changeModalActions()}),og(),Z0(),Cl(24,"po-checkbox-group",18),gw("ngModelChange",function(l){return Jy(m),Zx(i.properties,l)||(i.properties=l),e_(l)}),og(),Z0(),ix(25,Ge,8,3,"div"),Cl(26,"po-radio-group",19),gw("ngModelChange",function(l){return Jy(m),Zx(i.size,l)||(i.size=l),e_(l)}),og(),Z0(),Cl(27,"div",20)(28,"po-button",21),dt("p-click",function(){return i.restore()}),og()()()();}r&2&&(pw("ngModel",i.upload),ZE("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),X0(),Lp(3),ZE("p-value",hN(4,51,i.upload)),Lp(2),ZE("p-value",i.event),Lp(5),pw("ngModel",i.allowedExtensions),X0(),Lp(),pw("ngModel",i.maxFiles),X0(),Lp(),pw("ngModel",i.dragDropHeight),X0(),Lp(),pw("ngModel",i.minSize),X0(),Lp(),pw("ngModel",i.maxSize),X0(),Lp(2),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.formField),X0(),Lp(),pw("ngModel",i.url),X0(),Lp(),pw("ngModel",i.headersLabs),X0(),Lp(),pw("ngModel",i.literals),X0(),Lp(),pw("ngModel",i.modalActions),ZE("p-disabled",!i.properties.includes("showThumbnail")),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),ox(i.properties.includes("showCustomAction")?25:-1),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,bk,wk,Qt,_v,L3,q3,Hhe,Nde,nme,H3,G3,sme,ONe,OO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Upload Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-upload
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-upload-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,De],encapsulation:2})}return a})();var Xe=["formOpportunity"],Ze=()=>({maxFileSize:"204800"}),Ue=(()=>{class a{poNotification=f(Xp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&zl(Xe,7),r&2){let m;uo(m=fo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=gx();Cl(0,"form",null,0)(2,"div",1)(3,"po-input",2),gw("ngModelChange",function(l){return Jy(m),Zx(i.name,l)||(i.name=l),e_(l)}),og(),Z0(),og(),Cl(4,"div",1)(5,"po-textarea",3),gw("ngModelChange",function(l){return Jy(m),Zx(i.biograph,l)||(i.biograph=l),e_(l)}),og(),Z0(),og(),Cl(6,"div",1)(7,"po-url",4),gw("ngModelChange",function(l){return Jy(m),Zx(i.linkedin,l)||(i.linkedin=l),e_(l)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-upload",5),gw("ngModelChange",function(l){return Jy(m),Zx(i.resume,l)||(i.resume=l),e_(l)}),dt("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),og(),Z0(),og(),Cl(10,"div",1)(11,"po-button",6),dt("p-click",function(){return i.apply()}),og()()();}if(r&2){let m=Sx(1);Lp(3),pw("ngModel",i.name),X0(),Lp(2),pw("ngModel",i.biograph),X0(),Lp(2),pw("ngModel",i.linkedin),X0(),Lp(2),pw("ngModel",i.resume),ZE("p-restrictions",iN(6,Ze)),X0(),Lp(2),ZE("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[lY,sY,aY,gk,fk,Qt,q3,rme,G3,$3],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Upload - Resume"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #formOpportunity="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-upload-resume"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,et,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ue],encapsulation:2})}return a})();var nt=["upload"],it=["stepper"],ot=["submitForm"],at=["sucessData"],lt=a=>({"po-invisible":a});function rt(a,Ie){if(a&1){let d=gx();Cl(0,"div",8)(1,"div",9)(2,"p",11),qx(3,"Confirm informations"),og()(),Hl(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),Cl(7,"po-button",31),dt("p-click",function(){Jy(d);let i=Ex();return e_(i.confirmSubmit())}),og()();}if(a&2){let d=Ex();Lp(4),ZE("p-value",d.project[0].name||"N/D"),Lp(),ZE("p-value",d.title||"N/D"),Lp(),ZE("p-value",d.description||"N/D");}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&zl(nt,7)(it,7)(ot,7)(at,7),r&2){let m;uo(m=fo())&&(i.upload=m.first),uo(m=fo())&&(i.stepper=m.first),uo(m=fo())&&(i.submitForm=m.first),uo(m=fo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=gx();Cl(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),qx(8,"Welcome, TOTVS!"),og(),Cl(9,"p",11),qx(10,"Let's submit your project?"),og()()(),Cl(11,"div",8)(12,"po-button",12),dt("p-click",function(){Jy(m);let l=Sx(2);return e_(l.next())}),og()()()(),Cl(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),qx(21,"Please, select your project:"),og()(),Cl(22,"div",4)(23,"p",16),qx(24,"*Upload a zip file containing your project."),og()()(),Cl(25,"div",17)(26,"po-icon",18),dt("click",function(){Jy(m);let l=Sx(32);return e_(l.selectFiles())}),og(),Cl(27,"po-icon",19),dt("click",function(){Jy(m);let l=Sx(32);return e_(l.clear())}),og()()(),Cl(28,"div",4)(29,"label",20),qx(30,"Attached"),og(),Cl(31,"po-upload",21,2),gw("ngModelChange",function(l){return Jy(m),Zx(i.project,l)||(i.project=l),e_(l)}),og(),Z0(),og(),Cl(33,"div",4)(34,"po-input",22),gw("ngModelChange",function(l){return Jy(m),Zx(i.title,l)||(i.title=l),e_(l)}),og(),Z0(),og(),Cl(35,"div",4)(36,"po-textarea",23),gw("ngModelChange",function(l){return Jy(m),Zx(i.description,l)||(i.description=l),e_(l)}),og(),Z0(),og(),Cl(37,"div",8)(38,"po-button",24),dt("p-click",function(){return i.submitProject()}),og()()()()(),Cl(39,"po-step",25)(40,"po-widget",7),ix(41,rt,8,3,"div",8),og()()()(),Cl(42,"po-modal",26,3)(44,"div",4)(45,"p",27),qx(46,"Project successfully submited!"),og()()();}r&2&&(Lp(13),ZE("p-can-active-next-step",i.canSubmitProject.bind(i)),Lp(14),ZE("ngClass",oN(13,lt,i.project.length<1)),Lp(2),Ot("po-invisible",i.project.length<1),Lp(2),pw("ngModel",i.project),ZE("p-restrictions",i.restrictions),X0(),Lp(3),pw("ngModel",i.title),ZE("p-disabled",i.project.length<1),X0(),Lp(2),pw("ngModel",i.description),ZE("p-disabled",i.project.length<1),X0(),Lp(2),ZE("p-disabled",i.canSubmitProject()),Lp(3),ox(i.canSubmitProject()?41:-1),Lp(),ZE("p-primary-action",i.confirm));},dependencies:[yO,lY,sY,aY,gk,fk,Qt,q3,rme,G3,lt$1,sme,Ko,Qme,ENe,ONe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Upload - Realize & Show"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-upload-rs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,pt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ae],encapsulation:2})}return a})();var ze=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(Cl(0,"po-upload",0),dt("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),og()),r&2&&ZE("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[G3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Upload - with Download Button"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-upload-download/sample-po-upload-download.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-upload-download"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ct,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ze],encapsulation:2})}return a})();var Et=()=>[".png",".jpg",".jpeg",".gif"],St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&Hl(0,"po-upload",0),r&2&&ZE("p-restrictions",oN(4,St,iN(3,Et)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[G3],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Upload - with Preview"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-upload-preview"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,gt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ve],encapsulation:2})}return a})();var je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoUploadComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O componente "),Cl(24,"code"),qx(25,"po-upload"),og(),qx(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),og(),Cl(27,"ul")(28,"li"),qx(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),og(),Cl(30,"li"),qx(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),og(),Cl(32,"li"),qx(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),og(),Cl(34,"li"),qx(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),og(),Cl(36,"li"),qx(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),og(),Cl(38,"li"),qx(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),og()(),Cl(40,"h4"),qx(41,"Tokens customiz\xE1veis"),og(),Cl(42,"p"),qx(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(44,"blockquote")(45,"p"),qx(46,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(47,"a",6),qx(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(49,"."),og()(),Cl(50,"table")(51,"thead")(52,"tr")(53,"th"),qx(54,"Propriedade"),og(),Cl(55,"th"),qx(56,"Descri\xE7\xE3o"),og(),Cl(57,"th"),qx(58,"Valor Padr\xE3o"),og()()(),Cl(59,"tbody")(60,"tr")(61,"td")(62,"strong"),qx(63,"FIELD CONTAINER"),og()(),Hl(64,"td")(65,"td"),og(),Cl(66,"tr")(67,"td")(68,"code"),qx(69,"--field-container-title-justify"),og()(),Cl(70,"td"),qx(71,"Alinhamento horizontal do t\xEDtulo ("),Cl(72,"code"),qx(73,"justify-content"),og(),qx(74,")"),og(),Cl(75,"td")(76,"code"),qx(77,"space-between"),og()()(),Cl(78,"tr")(79,"td")(80,"code"),qx(81,"--field-container-title-flex"),og()(),Cl(82,"td"),qx(83,"Flex do t\xEDtulo ("),Cl(84,"code"),qx(85,"flex"),og(),qx(86,")"),og(),Cl(87,"td")(88,"code"),qx(89,"1 auto"),og()()(),Cl(90,"tr")(91,"td")(92,"strong"),qx(93,"TEXT SUPPORT"),og()(),Hl(94,"td")(95,"td"),og(),Cl(96,"tr")(97,"td")(98,"code"),qx(99,"--font-family-text-support"),og()(),Cl(100,"td"),qx(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),og(),Cl(102,"td")(103,"code"),qx(104,"var(--font-family-theme)"),og()()(),Cl(105,"tr")(106,"td")(107,"code"),qx(108,"--text-color-text-support"),og()(),Cl(109,"td"),qx(110,"Cor da fonte no texto de suporte"),og(),Cl(111,"td")(112,"code"),qx(113,"var(--color-neutral-dark-90)"),og()()(),Cl(114,"tr")(115,"td")(116,"strong"),qx(117,"UPLOAD CONTENT"),og()(),Hl(118,"td")(119,"td"),og(),Cl(120,"tr")(121,"td")(122,"code"),qx(123,"--background-color-content"),og(),qx(124," \xA0"),og(),Cl(125,"td"),qx(126,"Cor de fundo"),og(),Cl(127,"td")(128,"code"),qx(129,"var(--color-neutral-light-10)"),og()()(),Cl(130,"tr")(131,"td")(132,"code"),qx(133,"--border-color-content"),og()(),Cl(134,"td"),qx(135,"Cor da borda"),og(),Cl(136,"td")(137,"code"),qx(138,"var(--color-neutral-light-20)"),og()()(),Cl(139,"tr")(140,"td")(141,"code"),qx(142,"--border-radius-content"),og()(),Cl(143,"td"),qx(144,"Cont\xE9m o valor do raio dos cantos do elemento"),og(),Cl(145,"td")(146,"code"),qx(147,"var(--border-radius-md)"),og()()(),Cl(148,"tr")(149,"td")(150,"code"),qx(151,"--text-color-file-name"),og()(),Cl(152,"td"),qx(153,"Cor do texto do nome do arquivo"),og(),Cl(154,"td")(155,"code"),qx(156,"var(--color-neutral-dark-90)"),og()()(),Cl(157,"tr")(158,"td")(159,"code"),qx(160,"--font-family-file-name"),og()(),Cl(161,"td"),qx(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),og(),Cl(163,"td")(164,"code"),qx(165,"var(--font-family-theme)"),og()()(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--text-color-info-bar"),og()(),Cl(170,"td"),qx(171,"Cor do texto de informa\xE7\xE3o"),og(),Cl(172,"td")(173,"code"),qx(174,"var(--color-neutral-mid-60)"),og()()(),Cl(175,"tr")(176,"td")(177,"code"),qx(178,"--font-family-info-bar"),og()(),Cl(179,"td"),qx(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),og(),Cl(181,"td")(182,"code"),qx(183,"var(--font-family-theme)"),og()()(),Cl(184,"tr")(185,"td")(186,"strong"),qx(187,"ERROR STATE"),og()(),Hl(188,"td")(189,"td"),og(),Cl(190,"tr")(191,"td")(192,"code"),qx(193,"--background-color-content-error"),og()(),Cl(194,"td"),qx(195,"Cor de fundo do container de erro"),og(),Cl(196,"td")(197,"code"),qx(198,"var(--color-neutral-light-00)"),og()()(),Cl(199,"tr")(200,"td")(201,"code"),qx(202,"--border-color-content-error"),og()(),Cl(203,"td"),qx(204,"Cor da borda do container de erro"),og(),Cl(205,"td")(206,"code"),qx(207,"var(--color-feedback-negative-base)"),og()()(),Cl(208,"tr")(209,"td")(210,"code"),qx(211,"--text-color-error"),og()(),Cl(212,"td"),qx(213,"Cor do texto do container de erro"),og(),Cl(214,"td")(215,"code"),qx(216,"var(--color-feedback-negative-dark)"),og()()(),Cl(217,"tr")(218,"td")(219,"code"),qx(220,"--color-icon-error"),og()(),Cl(221,"td"),qx(222,"Cor do \xEDcone no estado de erro"),og(),Cl(223,"td")(224,"code"),qx(225,"var(--color-feedback-negative-base)"),og()()(),Cl(226,"tr")(227,"td")(228,"code"),qx(229,"--font-family-error"),og()(),Cl(230,"td"),qx(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),og(),Cl(232,"td")(233,"code"),qx(234,"var(--font-family-theme)"),og()()(),Cl(235,"tr")(236,"td")(237,"strong"),qx(238,"UPLOADED STATE"),og()(),Hl(239,"td")(240,"td"),og(),Cl(241,"tr")(242,"td")(243,"code"),qx(244,"--background-color-content-uploaded"),og()(),Cl(245,"td"),qx(246,"Cor de fundo do container com status de enviado"),og(),Cl(247,"td")(248,"code"),qx(249,"var(--color-neutral-light-00)"),og()()(),Cl(250,"tr")(251,"td")(252,"code"),qx(253,"--border-color-content-uploaded"),og()(),Cl(254,"td"),qx(255,"Cor da borda do container com status de enviado"),og(),Cl(256,"td")(257,"code"),qx(258,"var(--color-neutral-light-20)"),og()()(),Cl(259,"tr")(260,"td")(261,"strong"),qx(262,"INTERACTIVE STATE"),og()(),Hl(263,"td")(264,"td"),og(),Cl(265,"tr")(266,"td")(267,"code"),qx(268,"--text-color-file-name-interactive"),og()(),Cl(269,"td"),qx(270,"Cor do texto do nome do arquivo quando interativo"),og(),Cl(271,"td")(272,"code"),qx(273,"var(--color-action-default)"),og()()(),Cl(274,"tr")(275,"td")(276,"strong"),qx(277,"THUMBNAIL"),og()(),Hl(278,"td")(279,"td"),og(),Cl(280,"tr")(281,"td")(282,"code"),qx(283,"--color-icon-thumbnail"),og()(),Cl(284,"td"),qx(285,"Cor do \xEDcone na thumbnail"),og(),Cl(286,"td")(287,"code"),qx(288,"var(--color-action-default)"),og()()(),Cl(289,"tr")(290,"td")(291,"code"),qx(292,"--border-width-thumbnail"),og()(),Cl(293,"td"),qx(294,"Tamanho da fonte na thumbnail"),og(),Cl(295,"td")(296,"code"),qx(297,"var(--border-width-sm)"),og()()(),Cl(298,"tr")(299,"td")(300,"code"),qx(301,"--border-radius-thumbnail"),og()(),Cl(302,"td"),qx(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),og(),Cl(304,"td")(305,"code"),qx(306,"var(--border-radius-md)"),og()()(),Cl(307,"tr")(308,"td")(309,"code"),qx(310,"--background-color-thumbnail"),og()(),Cl(311,"td"),qx(312,"Cor de fundo na thumbnail"),og(),Cl(313,"td")(314,"code"),qx(315,"var(--color-neutral-light-05)"),og()()(),Cl(316,"tr")(317,"td")(318,"strong"),qx(319,"Focused"),og()(),Hl(320,"td")(321,"td"),og(),Cl(322,"tr")(323,"td")(324,"code"),qx(325,"--outline-color-focused"),og()(),Cl(326,"td"),qx(327,"Cor do outline do estado de focus"),og(),Cl(328,"td")(329,"code"),qx(330,"var(--color-action-focus)"),og()()()()()(),Cl(331,"div",7)(332,"h4",8),qx(333,"Seletor"),og(),Cl(334,"pre",9),qx(335,`<po-upload
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
`),og()(),Cl(336,"h4",10),qx(337,"Propriedades"),og(),Cl(338,"table",11)(339,"tr",12)(340,"th",13),qx(341,"Nome"),og(),Cl(342,"th",13),qx(343,"Tipo"),og(),Cl(344,"th",13),qx(345,"Padr\xE3o"),og(),Cl(346,"th",13),qx(347,"Descri\xE7\xE3o"),og()(),Cl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),qx(352," (p-additional-help)"),Hl(353,"br"),og()(),Cl(354,"div",18),qx(355,"Deprecated"),og()(),Cl(356,"td",19)(357,"code",20),qx(358,"EventEmitter"),og()(),Cl(359,"td",21),qx(360,"-"),og(),Cl(361,"td",22)(362,"em")(363,"strong"),qx(364,"(opcional)"),og()(),Cl(365,"p"),qx(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(367,"blockquote")(368,"p"),qx(369,"Essa propriedade est\xE1 "),Cl(370,"strong"),qx(371,"depreciada"),og(),qx(372," e ser\xE1 removida na vers\xE3o "),Cl(373,"code"),qx(374,"23.x.x"),og(),qx(375,". Recomendamos utilizar a propriedade "),Cl(376,"code"),qx(377,"p-helper"),og(),qx(378," que oferece mais recursos e flexibilidade."),og()()()(),Cl(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),qx(383," p-additional-help-tooltip"),Hl(384,"br"),og()(),Cl(385,"div",18),qx(386,"Deprecated"),og()(),Cl(387,"td",19)(388,"code",25),qx(389,"string"),og()(),Cl(390,"td",21),qx(391,"-"),og(),Cl(392,"td",22)(393,"em")(394,"strong"),qx(395,"(opcional)"),og()(),Cl(396,"p"),qx(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(398,"code"),qx(399,"po-helper"),og(),qx(400,`.
`),Cl(401,"strong"),qx(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(403,"blockquote")(404,"p"),qx(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(406,"blockquote")(407,"p"),qx(408,"Essa propriedade est\xE1 "),Cl(409,"strong"),qx(410,"depreciada"),og(),qx(411," e ser\xE1 removida na vers\xE3o "),Cl(412,"code"),qx(413,"23.x.x"),og(),qx(414,". Recomendamos utilizar a propriedade "),Cl(415,"code"),qx(416,"p-helper"),og(),qx(417," que oferece mais recursos e flexibilidade."),og()()()(),Cl(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),qx(422," p-append-in-body"),Hl(423,"br"),og()()(),Cl(424,"td",19)(425,"code",26),qx(426,"boolean"),og()(),Cl(427,"td",21)(428,"p")(429,"code"),qx(430,"false"),og()()(),Cl(431,"td",22)(432,"em")(433,"strong"),qx(434,"(opcional)"),og()(),Cl(435,"p"),qx(436,"Define que o popover ("),Cl(437,"code"),qx(438,"p-helper"),og(),qx(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(440,"blockquote")(441,"p"),qx(442,"Quando utilizado com "),Cl(443,"code"),qx(444,"p-helper"),og(),qx(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),qx(450," p-auto-focus"),Hl(451,"br"),og()()(),Cl(452,"td",19)(453,"code",26),qx(454,"boolean"),og()(),Cl(455,"td",21)(456,"p")(457,"code"),qx(458,"false"),og()()(),Cl(459,"td",22)(460,"em")(461,"strong"),qx(462,"(opcional)"),og()(),Cl(463,"p"),qx(464,"Aplica foco no elemento ao ser iniciado."),og(),Cl(465,"blockquote")(466,"p"),qx(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),qx(472," p-auto-upload"),Hl(473,"br"),og()()(),Cl(474,"td",19)(475,"code",26),qx(476,"boolean"),og()(),Cl(477,"td",21)(478,"p")(479,"code"),qx(480,"false"),og()()(),Cl(481,"td",22)(482,"em")(483,"strong"),qx(484,"(opcional)"),og()(),Cl(485,"p"),qx(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Cl(487,"blockquote")(488,"p"),qx(489,"Esta propriedade funciona somente se a propriedade "),Cl(490,"code"),qx(491,"p-url"),og(),qx(492," tiver um valor atribu\xEDdo."),og()()()(),Cl(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),qx(497," p-compact-label"),Hl(498,"br"),og()()(),Cl(499,"td",19)(500,"code",26),qx(501,"boolean"),og()(),Cl(502,"td",21)(503,"p")(504,"code"),qx(505,"false"),og()()(),Cl(506,"td",22)(507,"em")(508,"strong"),qx(509,"(opcional)"),og()(),Cl(510,"p"),qx(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(512,"p"),qx(513,"Quando habilitado ("),Cl(514,"code"),qx(515,"true"),og(),qx(516,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(517,"ul")(518,"li")(519,"code"),qx(520,"po-label"),og()(),Cl(521,"li")(522,"code"),qx(523,"p-requirement (showRequired)"),og()(),Cl(524,"li")(525,"code"),qx(526,"po-helper"),og()()(),Cl(527,"p"),qx(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(529,"p"),qx(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(531,"ul")(532,"li")(533,"code"),qx(534,"--field-container-title-justify"),og()(),Cl(535,"li")(536,"code"),qx(537,"--field-container-title-flex"),og()()(),Cl(538,"p"),qx(539,"Exemplo:"),og(),Cl(540,"pre")(541,"code"),qx(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(543,"p"),qx(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),qx(549," p-custom-action"),Hl(550,"br"),og()()(),Cl(551,"td",19)(552,"code",27),qx(553,"PoProgressAction"),og()(),Cl(554,"td",21),qx(555,"-"),og(),Cl(556,"td",22)(557,"em")(558,"strong"),qx(559,"(opcional)"),og()(),Cl(560,"p"),qx(561,"Define uma a\xE7\xE3o personalizada no componente "),Cl(562,"code"),qx(563,"po-upload"),og(),qx(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Cl(565,"p"),qx(566,"A a\xE7\xE3o deve implementar a interface "),Cl(567,"strong"),qx(568,"PoProgressAction"),og(),qx(569,", permitindo configurar propriedades como:"),og(),Cl(570,"ul")(571,"li")(572,"code"),qx(573,"label"),og(),qx(574,": Texto do bot\xE3o."),og(),Cl(575,"li")(576,"code"),qx(577,"icon"),og(),qx(578,": \xCDcone a ser exibido no bot\xE3o."),og(),Cl(579,"li")(580,"code"),qx(581,"type"),og(),qx(582,": Tipo de bot\xE3o (ex.: "),Cl(583,"code"),qx(584,"danger"),og(),qx(585," ou "),Cl(586,"code"),qx(587,"default"),og(),qx(588,")."),og(),Cl(589,"li")(590,"code"),qx(591,"disabled"),og(),qx(592,": Indica se o bot\xE3o deve estar desabilitado."),og(),Cl(593,"li")(594,"code"),qx(595,"visible"),og(),qx(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),og()(),Cl(597,"p")(598,"strong"),qx(599,"Exemplo de uso:"),og()(),Cl(600,"pre")(601,"code",28),qx(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),og()(),Cl(603,"pre")(604,"code",29),qx(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),og()()()(),Cl(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),qx(610," (p-custom-action-click)"),Hl(611,"br"),og()()(),Cl(612,"td",19)(613,"code",20),qx(614,"EventEmitter"),og()(),Cl(615,"td",21),qx(616,"-"),og(),Cl(617,"td",22)(618,"em")(619,"strong"),qx(620,"(opcional)"),og()(),Cl(621,"p"),qx(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Cl(623,"code"),qx(624,"p-custom-action"),og(),qx(625,"."),og(),Cl(626,"p"),qx(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Cl(628,"p")(629,"strong"),qx(630,"Exemplo de uso:"),og()(),Cl(631,"pre")(632,"code",28),qx(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),og()(),Cl(634,"pre")(635,"code",29),qx(636,`customAction: PoProgressAction = {
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
`),og()()()(),Cl(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),qx(641," p-custom-modal-actions"),Hl(642,"br"),og()()(),Cl(643,"td",19)(644,"code",30),qx(645,"Array<PoModalAction>"),og()(),Cl(646,"td",21),qx(647,"-"),og(),Cl(648,"td",22)(649,"em")(650,"strong"),qx(651,"(opcional)"),og()(),Cl(652,"p"),qx(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),og(),Cl(654,"p"),qx(655,"A a\xE7\xE3o deve implementar a interface "),Cl(656,"strong"),qx(657,"PoModalAction"),og(),qx(658,", permitindo configurar propriedades como:"),og(),Cl(659,"ul")(660,"li")(661,"code"),qx(662,"label"),og(),qx(663,": Texto do bot\xE3o."),og(),Cl(664,"li")(665,"code"),qx(666,"action"),og(),qx(667,": \xCDcone a ser exibido no bot\xE3o."),og(),Cl(668,"li")(669,"code"),qx(670,"danger"),og(),qx(671,": Define a propriedade "),Cl(672,"code"),qx(673,"p-danger"),og(),qx(674," do bot\xE3o."),og(),Cl(675,"li")(676,"code"),qx(677,"disabled"),og(),qx(678,": Indica se o bot\xE3o deve estar desabilitado."),og(),Cl(679,"li")(680,"code"),qx(681,"visible"),og(),qx(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),og()(),Cl(683,"p")(684,"strong"),qx(685,"Exemplo de uso:"),og()(),Cl(686,"pre")(687,"code",28),qx(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),og()(),Cl(689,"pre")(690,"code",29),qx(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),og()()()(),Cl(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),qx(696," p-directory"),Hl(697,"br"),og()()(),Cl(698,"td",19)(699,"code",26),qx(700,"boolean"),og()(),Cl(701,"td",21)(702,"p")(703,"code"),qx(704,"false"),og()()(),Cl(705,"td",22)(706,"em")(707,"strong"),qx(708,"(opcional)"),og()(),Cl(709,"p"),qx(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Cl(711,"blockquote")(712,"p"),qx(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Cl(714,"blockquote")(715,"p"),qx(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Cl(717,"strong"),qx(718,"Internet Explorer"),og(),qx(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()()()(),Cl(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),qx(724," p-disabled"),Hl(725,"br"),og()()(),Cl(726,"td",19)(727,"code",26),qx(728,"boolean"),og()(),Cl(729,"td",21),qx(730,"-"),og(),Cl(731,"td",22)(732,"em")(733,"strong"),qx(734,"(opcional)"),og()(),Cl(735,"p"),qx(736,"Indica que o campo ser\xE1 desabilitado."),og()()(),Cl(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),qx(741," p-disabled-remove-file"),Hl(742,"br"),og()()(),Cl(743,"td",19)(744,"code",26),qx(745,"boolean"),og()(),Cl(746,"td",21)(747,"p")(748,"code"),qx(749,"false"),og()()(),Cl(750,"td",22)(751,"em")(752,"strong"),qx(753,"(opcional)"),og()(),Cl(754,"p"),qx(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),og()()(),Cl(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),qx(760," p-drag-drop"),Hl(761,"br"),og()()(),Cl(762,"td",19)(763,"code",26),qx(764,"boolean"),og()(),Cl(765,"td",21)(766,"p")(767,"code"),qx(768,"false"),og()()(),Cl(769,"td",22)(770,"em")(771,"strong"),qx(772,"(opcional)"),og()(),Cl(773,"p"),qx(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Cl(775,"blockquote")(776,"p"),qx(777,"Recomendamos utilizar apenas um "),Cl(778,"code"),qx(779,"po-upload"),og(),qx(780," com esta funcionalidade por tela."),og()()()(),Cl(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),qx(785," p-drag-drop-height"),Hl(786,"br"),og()()(),Cl(787,"td",19)(788,"code",31),qx(789,"number"),og()(),Cl(790,"td",21)(791,"p")(792,"code"),qx(793,"320"),og()()(),Cl(794,"td",22)(795,"em")(796,"strong"),qx(797,"(opcional)"),og()(),Cl(798,"p"),qx(799,"Define em "),Cl(800,"em"),qx(801,"pixels"),og(),qx(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Cl(803,"code"),qx(804,"160px"),og(),qx(805,"."),og(),Cl(806,"blockquote")(807,"p"),qx(808,"Esta propriedade funciona somente se a propriedade "),Cl(809,"code"),qx(810,"p-drag-drop"),og(),qx(811," estiver habilitada."),og()()()(),Cl(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),qx(816," p-restrictions"),Hl(817,"br"),og()()(),Cl(818,"td",19)(819,"code",32),qx(820,"PoUploadFileRestrictions"),og()(),Cl(821,"td",21),qx(822,"-"),og(),Cl(823,"td",22)(824,"em")(825,"strong"),qx(826,"(opcional)"),og()(),Cl(827,"p"),qx(828,"Objeto que segue a defini\xE7\xE3o da interface "),Cl(829,"code"),qx(830,"PoUploadFileRestrictions"),og(),qx(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og()()(),Cl(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),qx(836," p-form-field"),Hl(837,"br"),og()()(),Cl(838,"td",19)(839,"code",25),qx(840,"string"),og()(),Cl(841,"td",21)(842,"p")(843,"code"),qx(844,"files"),og()()(),Cl(845,"td",22)(846,"em")(847,"strong"),qx(848,"(opcional)"),og()(),Cl(849,"p"),qx(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Cl(851,"code"),qx(852,"p-url"),og(),qx(853,"."),og()()(),Cl(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),qx(858," p-headers"),Hl(859,"br"),og()()(),Cl(860,"td",19)(861,"code",33),qx(862,"{ [name: string]: string "),og(),Cl(863,"code",34),qx(864,` Array<string>;
}`),og()(),Cl(865,"td",21),qx(866,"-"),og(),Cl(867,"td",22)(868,"p"),qx(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og()()(),Cl(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),qx(874," p-help"),Hl(875,"br"),og()()(),Cl(876,"td",19)(877,"code",25),qx(878,"string"),og()(),Cl(879,"td",21),qx(880,"-"),og(),Cl(881,"td",22)(882,"em")(883,"strong"),qx(884,"(opcional)"),og()(),Cl(885,"p"),qx(886,"Texto de apoio para o campo."),og()()(),Cl(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),qx(891," p-hide-restrictions-info"),Hl(892,"br"),og()()(),Cl(893,"td",19)(894,"code",26),qx(895,"boolean"),og()(),Cl(896,"td",21)(897,"p")(898,"code"),qx(899,"false"),og()()(),Cl(900,"td",22)(901,"em")(902,"strong"),qx(903,"(opcional)"),og()(),Cl(904,"p"),qx(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og()()(),Cl(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),qx(910," p-hide-select-button"),Hl(911,"br"),og()()(),Cl(912,"td",19)(913,"code",26),qx(914,"boolean"),og()(),Cl(915,"td",21)(916,"p")(917,"code"),qx(918,"false"),og()()(),Cl(919,"td",22)(920,"em")(921,"strong"),qx(922,"(opcional)"),og()(),Cl(923,"p"),qx(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Cl(925,"blockquote")(926,"p"),qx(927,"Caso o valor definido seja "),Cl(928,"code"),qx(929,"true"),og(),qx(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Cl(931,"code"),qx(932,"selectFiles()"),og(),qx(933," para sele\xE7\xE3o de arquivos."),og()()()(),Cl(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),qx(938," p-hide-send-button"),Hl(939,"br"),og()()(),Cl(940,"td",19)(941,"code",26),qx(942,"boolean"),og()(),Cl(943,"td",21)(944,"p")(945,"code"),qx(946,"false"),og()()(),Cl(947,"td",22)(948,"em")(949,"strong"),qx(950,"(opcional)"),og()(),Cl(951,"p"),qx(952,"Omite o bot\xE3o de envio de arquivos."),og(),Cl(953,"blockquote")(954,"p"),qx(955,"Caso o valor definido seja "),Cl(956,"code"),qx(957,"true"),og(),qx(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Cl(959,"code"),qx(960,"sendFiles()"),og(),qx(961," para envio do(s) arquivo(s) selecionado(s)."),og()()()(),Cl(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),qx(966," p-multiple"),Hl(967,"br"),og()()(),Cl(968,"td",19)(969,"code",26),qx(970,"boolean"),og()(),Cl(971,"td",21),qx(972,"-"),og(),Cl(973,"td",22)(974,"em")(975,"strong"),qx(976,"(opcional)"),og()(),Cl(977,"p"),qx(978,"Define se pode selecionar mais de um arquivo."),og(),Cl(979,"blockquote")(980,"p"),qx(981,"Se utilizada a "),Cl(982,"code"),qx(983,"p-directory"),og(),qx(984,", habilita-se automaticamente esta propriedade."),og()()()(),Cl(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),qx(989," (p-keydown)"),Hl(990,"br"),og()()(),Cl(991,"td",19)(992,"code",20),qx(993,"EventEmitter"),og()(),Cl(994,"td",21),qx(995,"-"),og(),Cl(996,"td",22)(997,"em")(998,"strong"),qx(999,"(opcional)"),og()(),Cl(1e3,"p"),qx(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(1002,"code"),qx(1003,"KeyboardEvent"),og(),qx(1004," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),qx(1009," p-label"),Hl(1010,"br"),og()()(),Cl(1011,"td",19)(1012,"code",25),qx(1013,"string"),og()(),Cl(1014,"td",21),qx(1015,"-"),og(),Cl(1016,"td",22)(1017,"em")(1018,"strong"),qx(1019,"(opcional)"),og()(),Cl(1020,"p"),qx(1021,"R\xF3tulo do campo."),og()()(),Cl(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),qx(1026," p-label-text-wrap"),Hl(1027,"br"),og()()(),Cl(1028,"td",19)(1029,"code",26),qx(1030,"boolean"),og()(),Cl(1031,"td",21)(1032,"p")(1033,"code"),qx(1034,"false"),og()()(),Cl(1035,"td",22)(1036,"em")(1037,"strong"),qx(1038,"(opcional)"),og()(),Cl(1039,"p"),qx(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(1041,"code"),qx(1042,"p-label"),og(),qx(1043,". Quando "),Cl(1044,"code"),qx(1045,"p-label-text-wrap"),og(),qx(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),qx(1051," p-literals"),Hl(1052,"br"),og()()(),Cl(1053,"td",19)(1054,"code",35),qx(1055,"PoUploadLiterals"),og()(),Cl(1056,"td",21),qx(1057,"-"),og(),Cl(1058,"td",22)(1059,"em")(1060,"strong"),qx(1061,"(opcional)"),og()(),Cl(1062,"p"),qx(1063,"Objeto com as literais usadas no "),Cl(1064,"code"),qx(1065,"po-upload"),og(),qx(1066,"."),og(),Cl(1067,"p"),qx(1068,"Existem duas maneiras de customizar o componente:"),og(),Cl(1069,"ul")(1070,"li"),qx(1071,"passando um objeto implementando a interface "),Cl(1072,"code"),qx(1073,"PoUploadLiterals"),og(),qx(1074," com todas as literais dispon\xEDveis;"),og(),Cl(1075,"li"),qx(1076,"passando apenas as literais que deseja customizar:"),Cl(1077,"pre")(1078,"code"),qx(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),og()()()(),Cl(1080,"p"),qx(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Cl(1082,"pre")(1083,"code"),qx(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),og()(),Cl(1085,"blockquote")(1086,"p"),qx(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Cl(1088,"em"),qx(1089,"browser"),og(),qx(1090," (pt, en, es, ru)."),og()()()(),Cl(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),qx(1095," p-loading"),Hl(1096,"br"),og()()(),Cl(1097,"td",19)(1098,"code",26),qx(1099,"boolean"),og()(),Cl(1100,"td",21)(1101,"p")(1102,"code"),qx(1103,"false"),og()()(),Cl(1104,"td",22)(1105,"em")(1106,"strong"),qx(1107,"(opcional)"),og()(),Cl(1108,"p"),qx(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),Cl(1110,"code"),qx(1111,"Selecionar arquivo"),og(),qx(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),og(),Cl(1113,"blockquote")(1114,"p"),qx(1115,"Incompat\xEDvel com "),Cl(1116,"code"),qx(1117,"p-drag-drop"),og(),qx(1118," e "),Cl(1119,"code"),qx(1120,"p-hide-select-button"),og(),qx(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),Cl(1122,"code"),qx(1123,"Selecionar arquivo"),og(),qx(1124,"."),og()()()(),Cl(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),qx(1129," name"),Hl(1130,"br"),og()()(),Cl(1131,"td",19)(1132,"code",25),qx(1133,"string"),og()(),Cl(1134,"td",21),qx(1135,"-"),og(),Cl(1136,"td",22)(1137,"p"),qx(1138,"Define o valor do atributo "),Cl(1139,"code"),qx(1140,"name"),og(),qx(1141," do componente."),og()()(),Cl(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),qx(1146," (ngModelChange)"),Hl(1147,"br"),og()()(),Cl(1148,"td",19)(1149,"code",20),qx(1150,"EventEmitter"),og()(),Cl(1151,"td",21),qx(1152,"-"),og(),Cl(1153,"td",22)(1154,"em")(1155,"strong"),qx(1156,"(opcional)"),og()(),Cl(1157,"p"),qx(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),Cl(1159,"em"),qx(1160,"tag"),og(),Cl(1161,"code"),qx(1162,"form"),og(),qx(1163,"."),og(),Cl(1164,"p"),qx(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Cl(1166,"code"),qx(1167,"strictTemplates"),og(),qx(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Cl(1169,"pre")(1170,"code"),qx(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),og()()()(),Cl(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),qx(1176," (p-cancel)"),Hl(1177,"br"),og()()(),Cl(1178,"td",19)(1179,"code",20),qx(1180,"EventEmitter"),og()(),Cl(1181,"td",21),qx(1182,"-"),og(),Cl(1183,"td",22)(1184,"em")(1185,"strong"),qx(1186,"(opcional)"),og()(),Cl(1187,"p"),qx(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),og(),Cl(1189,"blockquote")(1190,"p"),qx(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Cl(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),qx(1196," (p-error)"),Hl(1197,"br"),og()()(),Cl(1198,"td",19)(1199,"code",20),qx(1200,"EventEmitter"),og()(),Cl(1201,"td",21),qx(1202,"-"),og(),Cl(1203,"td",22)(1204,"em")(1205,"strong"),qx(1206,"(opcional)"),og()(),Cl(1207,"p"),qx(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Cl(1209,"blockquote")(1210,"p"),qx(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Cl(1212,"code"),qx(1213,"HttpErrorResponse"),og(),qx(1214,"."),og()()()(),Cl(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),qx(1219," (p-open-modal-preview)"),Hl(1220,"br"),og()()(),Cl(1221,"td",19)(1222,"code",20),qx(1223,"EventEmitter"),og()(),Cl(1224,"td",21),qx(1225,"-"),og(),Cl(1226,"td",22)(1227,"em")(1228,"strong"),qx(1229,"(opcional)"),og()(),Cl(1230,"p"),qx(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),og(),Cl(1232,"blockquote")(1233,"p"),qx(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Cl(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),qx(1239," (p-remove)"),Hl(1240,"br"),og()()(),Cl(1241,"td",19)(1242,"code",20),qx(1243,"EventEmitter"),og()(),Cl(1244,"td",21),qx(1245,"-"),og(),Cl(1246,"td",22)(1247,"em")(1248,"strong"),qx(1249,"(opcional)"),og()(),Cl(1250,"p"),qx(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),og(),Cl(1252,"blockquote")(1253,"p"),qx(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Cl(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),qx(1259," (p-success)"),Hl(1260,"br"),og()()(),Cl(1261,"td",19)(1262,"code",20),qx(1263,"EventEmitter"),og()(),Cl(1264,"td",21),qx(1265,"-"),og(),Cl(1266,"td",22)(1267,"em")(1268,"strong"),qx(1269,"(opcional)"),og()(),Cl(1270,"p"),qx(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Cl(1272,"blockquote")(1273,"p"),qx(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Cl(1275,"code"),qx(1276,"HttpResponse"),og(),qx(1277,"."),og()()()(),Cl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),qx(1282," (p-upload)"),Hl(1283,"br"),og()()(),Cl(1284,"td",19)(1285,"code",20),qx(1286,"EventEmitter"),og()(),Cl(1287,"td",21),qx(1288,"-"),og(),Cl(1289,"td",22)(1290,"em")(1291,"strong"),qx(1292,"(opcional)"),og()(),Cl(1293,"p"),qx(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Cl(1295,"blockquote")(1296,"p"),qx(1297,"data, nesta propriedade pode ser informado algum dado"),og()(),Cl(1298,"pre")(1299,"code"),qx(1300,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Cl(1301,"blockquote")(1302,"p"),qx(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Cl(1304,"code"),qx(1305,"data"),og(),qx(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),og()(),Cl(1307,"pre")(1308,"code"),qx(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),og()()()(),Cl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),qx(1314," p-optional"),Hl(1315,"br"),og()()(),Cl(1316,"td",19)(1317,"code",26),qx(1318,"boolean"),og()(),Cl(1319,"td",21)(1320,"p")(1321,"code"),qx(1322,"false"),og()()(),Cl(1323,"td",22)(1324,"em")(1325,"strong"),qx(1326,"(opcional)"),og()(),Cl(1327,"p"),qx(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(1329,"blockquote")(1330,"p"),qx(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1332,"ul")(1333,"li"),qx(1334,"O campo conter "),Cl(1335,"code"),qx(1336,"p-required"),og(),qx(1337,";"),og(),Cl(1338,"li"),qx(1339,"N\xE3o possuir "),Cl(1340,"code"),qx(1341,"p-help"),og(),qx(1342," e/ou "),Cl(1343,"code"),qx(1344,"p-label"),og(),qx(1345,"."),og()()()(),Cl(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),qx(1350," p-helper"),Hl(1351,"br"),og()()(),Cl(1352,"td",19)(1353,"code",36),qx(1354,"PoHelperOptions "),og(),Cl(1355,"code",25),qx(1356," string"),og()(),Cl(1357,"td",21),qx(1358,"-"),og(),Cl(1359,"td",22)(1360,"em")(1361,"strong"),qx(1362,"(opcional)"),og()(),Cl(1363,"p"),qx(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1365,"code"),qx(1366,"p-label"),og(),qx(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1368,"code"),qx(1369,"p-label"),og(),qx(1370,"."),og(),Cl(1371,"blockquote")(1372,"p"),qx(1373,"Para mais informa\xE7\xF5es acesse: "),Cl(1374,"a",37),qx(1375,"https://po-ui.io/documentation/po-helper"),og(),qx(1376,"."),og()(),Cl(1377,"blockquote")(1378,"p"),qx(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1380,"code"),qx(1381,"p-additional-help-tooltip"),og(),qx(1382," e "),Cl(1383,"code"),qx(1384,"p-additional-help"),og(),qx(1385,") ser\xE1 ignorado."),og()()()(),Cl(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),qx(1390," p-required"),Hl(1391,"br"),og()()(),Cl(1392,"td",19)(1393,"code",26),qx(1394,"boolean"),og()(),Cl(1395,"td",21)(1396,"p")(1397,"code"),qx(1398,"false"),og()()(),Cl(1399,"td",22)(1400,"em")(1401,"strong"),qx(1402,"(opcional)"),og()(),Cl(1403,"p"),qx(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),qx(1409," p-required-url"),Hl(1410,"br"),og()()(),Cl(1411,"td",19)(1412,"code",26),qx(1413,"boolean"),og()(),Cl(1414,"td",21)(1415,"p")(1416,"code"),qx(1417,"true"),og()()(),Cl(1418,"td",22)(1419,"em")(1420,"strong"),qx(1421,"(opcional)"),og()(),Cl(1422,"p"),qx(1423,"Define se a propriedade "),Cl(1424,"code"),qx(1425,"p-url"),og(),qx(1426," \xE9 obrigat\xF3ria."),og(),Cl(1427,"p"),qx(1428,"Caso a propriedade seja definida como "),Cl(1429,"code"),qx(1430,"false"),og(),qx(1431,":"),og(),Cl(1432,"ul")(1433,"li"),qx(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),Cl(1435,"code"),qx(1436,"p-url"),og(),qx(1437," definida."),og(),Cl(1438,"li"),qx(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),Cl(1440,"code"),qx(1441,"p-url"),og(),qx(1442," seja definida."),og()(),Cl(1443,"blockquote")(1444,"p"),qx(1445,"Se utilizada com a propriedade "),Cl(1446,"code"),qx(1447,"p-auto-upload"),og(),qx(1448," definida como "),Cl(1449,"code"),qx(1450,"true"),og(),qx(1451," ser\xE1 necess\xE1rio definir a propriedade "),Cl(1452,"code"),qx(1453,"p-url"),og(),qx(1454,"."),og()()()(),Cl(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),qx(1459," p-show-required"),Hl(1460,"br"),og()()(),Cl(1461,"td",19)(1462,"code",26),qx(1463,"boolean"),og()(),Cl(1464,"td",21),qx(1465,"-"),og(),Cl(1466,"td",22)(1467,"p"),qx(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1469,"blockquote")(1470,"p"),qx(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1472,"ul")(1473,"li"),qx(1474,"N\xE3o possuir "),Cl(1475,"code"),qx(1476,"p-help"),og(),qx(1477," e/ou "),Cl(1478,"code"),qx(1479,"p-label"),og(),qx(1480,"."),og()()()(),Cl(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),qx(1485," p-show-thumbnail"),Hl(1486,"br"),og()()(),Cl(1487,"td",19)(1488,"code",26),qx(1489,"boolean"),og()(),Cl(1490,"td",21)(1491,"p")(1492,"code"),qx(1493,"true"),og()()(),Cl(1494,"td",22)(1495,"em")(1496,"strong"),qx(1497,"(opcional)"),og()(),Cl(1498,"p"),qx(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Cl(1500,"blockquote")(1501,"p"),qx(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),Cl(1503,"code"),qx(1504,".png"),og(),qx(1505,", "),Cl(1506,"code"),qx(1507,".jpg"),og(),qx(1508,", "),Cl(1509,"code"),qx(1510,".jpeg"),og(),qx(1511," e "),Cl(1512,"code"),qx(1513,".gif"),og(),qx(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),og()()()(),Cl(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),qx(1519," p-size"),Hl(1520,"br"),og()()(),Cl(1521,"td",19)(1522,"code",25),qx(1523,"string"),og()(),Cl(1524,"td",21)(1525,"p")(1526,"code"),qx(1527,"medium"),og()()(),Cl(1528,"td",22)(1529,"em")(1530,"strong"),qx(1531,"(opcional)"),og()(),Cl(1532,"p"),qx(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),og(),Cl(1534,"ul")(1535,"li")(1536,"code"),qx(1537,"small"),og(),qx(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1539,"li")(1540,"code"),qx(1541,"medium"),og(),qx(1542,": altura do button como 44px."),og()(),Cl(1543,"blockquote")(1544,"p"),qx(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1546,"code"),qx(1547,"medium"),og(),qx(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1549,"a",38),qx(1550,"po-theme"),og(),qx(1551,"."),og()()()(),Cl(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),qx(1556," p-url"),Hl(1557,"br"),og()()(),Cl(1558,"td",19)(1559,"code",25),qx(1560,"string"),og()(),Cl(1561,"td",21),qx(1562,"-"),og(),Cl(1563,"td",22)(1564,"p"),qx(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og()()()(),Cl(1566,"h3",10),qx(1567,"M\xE9todos"),og(),Cl(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),qx(1574," clear "),og()()()()(),Cl(1575,"tr",22)(1576,"td",22)(1577,"p"),qx(1578,"M\xE9todo respons\xE1vel por "),Cl(1579,"strong"),qx(1580,"limpar"),og(),qx(1581," o(s) arquivo(s) selecionado(s)."),og()()()(),Hl(1582,"br"),Cl(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),qx(1589," focus "),og()()()()(),Cl(1590,"tr",22)(1591,"td",22)(1592,"p"),qx(1593,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1594,"p"),qx(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1596,"pre")(1597,"code"),qx(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),og()()()()(),Hl(1599,"br"),Cl(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),qx(1606," closeModal "),og()()()()(),Cl(1607,"tr",22)(1608,"td",22)(1609,"p"),qx(1610,"M\xE9todo respons\xE1vel por fechar o modal."),og()()()(),Hl(1611,"br"),Cl(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),qx(1618," selectFiles "),og()()()()(),Cl(1619,"tr",22)(1620,"td",22)(1621,"p"),qx(1622,"M\xE9todo respons\xE1vel por "),Cl(1623,"strong"),qx(1624,"abrir"),og(),qx(1625," a janela para sele\xE7\xE3o de arquivo(s)."),og()()()(),Hl(1626,"br"),Cl(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),qx(1633," sendFiles "),og()()()()(),Cl(1634,"tr",22)(1635,"td",22)(1636,"p"),qx(1637,"M\xE9todo respons\xE1vel por "),Cl(1638,"strong"),qx(1639,"enviar"),og(),qx(1640," o(s) arquivo(s) selecionado(s)."),og()()()(),Hl(1641,"br"),Cl(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),qx(1648," showAdditionalHelp "),og()()()()(),Cl(1649,"tr",22)(1650,"td",22)(1651,"p"),qx(1652,"M\xE9todo que exibe "),Cl(1653,"code"),qx(1654,"p-helper"),og(),qx(1655," ou executa a a\xE7\xE3o definida em "),Cl(1656,"code"),qx(1657,"p-helper{eventOnClick}"),og(),qx(1658," ou em "),Cl(1659,"code"),qx(1660,"p-additionalHelp"),og(),qx(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1662,"code"),qx(1663,"p-keydown"),og(),qx(1664,"."),og(),Cl(1665,"blockquote")(1666,"p"),qx(1667,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1668,"code"),qx(1669,"po-helper"),og(),qx(1670," quando o componente estiver com foco."),og()(),Cl(1671,"pre")(1672,"code"),qx(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),og()(),Cl(1674,"pre")(1675,"code"),qx(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1677,"br"),Cl(1678,"h3"),qx(1679,"Interfaces"),og(),Cl(1680,"h4",41)(1681,"code",5),qx(1682,"PoUploadFileRestrictions"),og()(),Cl(1683,"div",2)(1684,"p"),qx(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),og()(),Cl(1686,"h4",10),qx(1687,"Propriedades"),og(),Cl(1688,"table",11)(1689,"tr",12)(1690,"th",13),qx(1691,"Nome"),og(),Cl(1692,"th",13),qx(1693,"Tipo"),og(),Cl(1694,"th",13),qx(1695,"Descri\xE7\xE3o"),og()(),Cl(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),qx(1700," allowedExtensions"),Hl(1701,"br"),og()()(),Cl(1702,"td",19)(1703,"code",42),qx(1704,"Array<string>"),og()(),Cl(1705,"td",22)(1706,"em")(1707,"strong"),qx(1708,"(opcional)"),og()(),Cl(1709,"p"),qx(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),og(),Cl(1711,"pre")(1712,"code"),qx(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),og()()()(),Cl(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),qx(1718," maxFileSize"),Hl(1719,"br"),og()()(),Cl(1720,"td",19)(1721,"code",31),qx(1722,"number"),og()(),Cl(1723,"td",22)(1724,"em")(1725,"strong"),qx(1726,"(opcional)"),og()(),Cl(1727,"p"),qx(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),og(),Cl(1729,"p"),qx(1730,"Deve ser informado um valor em "),Cl(1731,"em"),qx(1732,"bytes"),og(),qx(1733,", por exemplo: "),Cl(1734,"code"),qx(1735,"31457280"),og(),qx(1736," (30MB)."),og(),Cl(1737,"blockquote")(1738,"p"),qx(1739,"Por padr\xE3o o valor \xE9 "),Cl(1740,"code"),qx(1741,"30 MB"),og(),qx(1742,"."),og()()()(),Cl(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),qx(1747," maxFiles"),Hl(1748,"br"),og()()(),Cl(1749,"td",19)(1750,"code",31),qx(1751,"number"),og()(),Cl(1752,"td",22)(1753,"em")(1754,"strong"),qx(1755,"(opcional)"),og()(),Cl(1756,"p"),qx(1757,"Quantidade m\xE1xima de arquivos para o "),Cl(1758,"em"),qx(1759,"upload"),og(),qx(1760,"."),og(),Cl(1761,"blockquote")(1762,"p"),qx(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),Cl(1764,"code"),qx(1765,"p-multiple"),og(),qx(1766," estiver habilitada e seu valor for maior do que zero."),og()()()(),Cl(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),qx(1771," minFileSize"),Hl(1772,"br"),og()()(),Cl(1773,"td",19)(1774,"code",31),qx(1775,"number"),og()(),Cl(1776,"td",22)(1777,"em")(1778,"strong"),qx(1779,"(opcional)"),og()(),Cl(1780,"p"),qx(1781,"Tamanho m\xEDnimo em "),Cl(1782,"em"),qx(1783,"bytes"),og(),qx(1784," do arquivo que ser\xE1 enviado ao servidor."),og(),Cl(1785,"blockquote")(1786,"p"),qx(1787,"Por padr\xE3o o valor \xE9 "),Cl(1788,"code"),qx(1789,"0"),og(),qx(1790,"."),og()()()()(),Cl(1791,"h4",41)(1792,"code",5),qx(1793,"PoUploadLiterals"),og()(),Cl(1794,"div",2)(1795,"p"),qx(1796,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1797,"code"),qx(1798,"po-upload"),og(),qx(1799,"."),og()(),Cl(1800,"h4",10),qx(1801,"Propriedades"),og(),Cl(1802,"table",11)(1803,"tr",12)(1804,"th",13),qx(1805,"Nome"),og(),Cl(1806,"th",13),qx(1807,"Tipo"),og(),Cl(1808,"th",13),qx(1809,"Descri\xE7\xE3o"),og()(),Cl(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),qx(1814," close"),Hl(1815,"br"),og()()(),Cl(1816,"td",19)(1817,"code",25),qx(1818,"string"),og()(),Cl(1819,"td",22)(1820,"em")(1821,"strong"),qx(1822,"(opcional)"),og()(),Cl(1823,"p"),qx(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),og()()(),Cl(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),qx(1829," continue"),Hl(1830,"br"),og()()(),Cl(1831,"td",19)(1832,"code",25),qx(1833,"string"),og()(),Cl(1834,"td",22)(1835,"em")(1836,"strong"),qx(1837,"(opcional)"),og()(),Cl(1838,"p"),qx(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),og()()(),Cl(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),qx(1844," doneText"),Hl(1845,"br"),og()()(),Cl(1846,"td",19)(1847,"code",25),qx(1848,"string"),og()(),Cl(1849,"td",22)(1850,"em")(1851,"strong"),qx(1852,"(opcional)"),og()(),Cl(1853,"p"),qx(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),og()()(),Cl(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),qx(1859," dragFilesHere"),Hl(1860,"br"),og()()(),Cl(1861,"td",19)(1862,"code",25),qx(1863,"string"),og()(),Cl(1864,"td",22)(1865,"em")(1866,"strong"),qx(1867,"(opcional)"),og()(),Cl(1868,"p"),qx(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),Cl(1870,"code"),qx(1871,"p-drag-drop"),og(),qx(1872,"."),og()()(),Cl(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),qx(1877," dragFoldersHere"),Hl(1878,"br"),og()()(),Cl(1879,"td",19)(1880,"code",25),qx(1881,"string"),og()(),Cl(1882,"td",22)(1883,"em")(1884,"strong"),qx(1885,"(opcional)"),og()(),Cl(1886,"p"),qx(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),Cl(1888,"code"),qx(1889,"p-drag-drop"),og(),qx(1890,"."),og()()(),Cl(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),qx(1895," dropFilesHere"),Hl(1896,"br"),og()()(),Cl(1897,"td",19)(1898,"code",25),qx(1899,"string"),og()(),Cl(1900,"td",22)(1901,"em")(1902,"strong"),qx(1903,"(opcional)"),og()(),Cl(1904,"p"),qx(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),Cl(1906,"code"),qx(1907,"p-drag-drop"),og()()()(),Cl(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),qx(1912," dropFoldersHere"),Hl(1913,"br"),og()()(),Cl(1914,"td",19)(1915,"code",25),qx(1916,"string"),og()(),Cl(1917,"td",22)(1918,"em")(1919,"strong"),qx(1920,"(opcional)"),og()(),Cl(1921,"p"),qx(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),Cl(1923,"code"),qx(1924,"p-drag-drop"),og(),qx(1925,"."),og()()(),Cl(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),qx(1930," errorOccurred"),Hl(1931,"br"),og()()(),Cl(1932,"td",19)(1933,"code",25),qx(1934,"string"),og()(),Cl(1935,"td",22)(1936,"em")(1937,"strong"),qx(1938,"(opcional)"),og()(),Cl(1939,"p"),qx(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),og()()(),Cl(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),qx(1945," files"),Hl(1946,"br"),og()()(),Cl(1947,"td",19)(1948,"code",25),qx(1949,"string"),og()(),Cl(1950,"td",22)(1951,"em")(1952,"strong"),qx(1953,"(opcional)"),og()(),Cl(1954,"p"),qx(1955,"Par\xE2metro "),Cl(1956,"em"),qx(1957,"files"),og(),qx(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Cl(1959,"em"),qx(1960,"dragDrop"),og(),qx(1961,"."),og()()(),Cl(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),qx(1966," folders"),Hl(1967,"br"),og()()(),Cl(1968,"td",19)(1969,"code",25),qx(1970,"string"),og()(),Cl(1971,"td",22)(1972,"em")(1973,"strong"),qx(1974,"(opcional)"),og()(),Cl(1975,"p"),qx(1976,"Par\xE2metro "),Cl(1977,"em"),qx(1978,"folders"),og(),qx(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Cl(1980,"em"),qx(1981,"dragDrop"),og(),qx(1982,"."),og()()(),Cl(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),qx(1987," invalidDropArea"),Hl(1988,"br"),og()()(),Cl(1989,"td",19)(1990,"code",25),qx(1991,"string"),og()(),Cl(1992,"td",22)(1993,"em")(1994,"strong"),qx(1995,"(opcional)"),og()(),Cl(1996,"p"),qx(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),Cl(1998,"em"),qx(1999,"dragDrop"),og(),qx(2e3,"."),og()()(),Cl(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),qx(2005," preview"),Hl(2006,"br"),og()()(),Cl(2007,"td",19)(2008,"code",25),qx(2009,"string"),og()(),Cl(2010,"td",22)(2011,"em")(2012,"strong"),qx(2013,"(opcional)"),og()(),Cl(2014,"p"),qx(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),og()()(),Cl(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),qx(2020," selectFile"),Hl(2021,"br"),og()()(),Cl(2022,"td",19)(2023,"code",25),qx(2024,"string"),og()(),Cl(2025,"td",22)(2026,"em")(2027,"strong"),qx(2028,"(opcional)"),og()(),Cl(2029,"p"),qx(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),og()()(),Cl(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),qx(2035," selectFiles"),Hl(2036,"br"),og()()(),Cl(2037,"td",19)(2038,"code",25),qx(2039,"string"),og()(),Cl(2040,"td",22)(2041,"em")(2042,"strong"),qx(2043,"(opcional)"),og()(),Cl(2044,"p"),qx(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Cl(2046,"code"),qx(2047,"p-multiple"),og(),qx(2048,"."),og()()(),Cl(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),qx(2053," selectFilesOnComputer"),Hl(2054,"br"),og()()(),Cl(2055,"td",19)(2056,"code",25),qx(2057,"string"),og()(),Cl(2058,"td",22)(2059,"em")(2060,"strong"),qx(2061,"(opcional)"),og()(),Cl(2062,"p"),qx(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Cl(2064,"em"),qx(2065,"dragDrop"),og(),qx(2066,"."),og()()(),Cl(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),qx(2071," selectFolder"),Hl(2072,"br"),og()()(),Cl(2073,"td",19)(2074,"code",25),qx(2075,"string"),og()(),Cl(2076,"td",22)(2077,"em")(2078,"strong"),qx(2079,"(opcional)"),og()(),Cl(2080,"p"),qx(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Cl(2082,"code"),qx(2083,"p-directory"),og(),qx(2084,"."),og()()(),Cl(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),qx(2089," selectFolderOnComputer"),Hl(2090,"br"),og()()(),Cl(2091,"td",19)(2092,"code",25),qx(2093,"string"),og()(),Cl(2094,"td",22)(2095,"em")(2096,"strong"),qx(2097,"(opcional)"),og()(),Cl(2098,"p"),qx(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Cl(2100,"em"),qx(2101,"dragDrop"),og(),qx(2102,"."),og()()(),Cl(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),qx(2107," sentWithSuccess"),Hl(2108,"br"),og()()(),Cl(2109,"td",19)(2110,"code",25),qx(2111,"string"),og()(),Cl(2112,"td",22)(2113,"em")(2114,"strong"),qx(2115,"(opcional)"),og()(),Cl(2116,"p"),qx(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),og()()(),Cl(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),qx(2122," startSending"),Hl(2123,"br"),og()()(),Cl(2124,"td",19)(2125,"code",25),qx(2126,"string"),og()(),Cl(2127,"td",22)(2128,"em")(2129,"strong"),qx(2130,"(opcional)"),og()(),Cl(2131,"p"),qx(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),og()()(),Cl(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),qx(2137," thumbnail"),Hl(2138,"br"),og()()(),Cl(2139,"td",19)(2140,"code",25),qx(2141,"string"),og()(),Cl(2142,"td",22)(2143,"em")(2144,"strong"),qx(2145,"(opcional)"),og()(),Cl(2146,"p"),qx(2147,"Texto do leitor da miniatura da imagem."),og()()(),Cl(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),qx(2152," tryAgain"),Hl(2153,"br"),og()()(),Cl(2154,"td",19)(2155,"code",25),qx(2156,"string"),og()(),Cl(2157,"td",22)(2158,"em")(2159,"strong"),qx(2160,"(opcional)"),og()(),Cl(2161,"p"),qx(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),og()()(),Cl(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),qx(2167," uploadingText"),Hl(2168,"br"),og()()(),Cl(2169,"td",19)(2170,"code",25),qx(2171,"string"),og()(),Cl(2172,"td",22)(2173,"em")(2174,"strong"),qx(2175,"(opcional)"),og()(),Cl(2176,"p"),qx(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),og()()()(),Cl(2178,"h4",41)(2179,"code",5),qx(2180,"PoProgressAction"),og()(),Cl(2181,"div",2)(2182,"p"),qx(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),og()(),Cl(2184,"h4",10),qx(2185,"Propriedades"),og(),Cl(2186,"table",11)(2187,"tr",12)(2188,"th",13),qx(2189,"Nome"),og(),Cl(2190,"th",13),qx(2191,"Tipo"),og(),Cl(2192,"th",13),qx(2193,"Descri\xE7\xE3o"),og()(),Cl(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),qx(2198," disabled"),Hl(2199,"br"),og()()(),Cl(2200,"td",19)(2201,"code",26),qx(2202,"boolean "),og(),Cl(2203,"code",43),qx(2204," Function"),og()(),Cl(2205,"td",22)(2206,"em")(2207,"strong"),qx(2208,"(opcional)"),og()(),Cl(2209,"p"),qx(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),og(),Cl(2211,"p"),qx(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),og()()(),Cl(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),qx(2217," icon"),Hl(2218,"br"),og()()(),Cl(2219,"td",19)(2220,"code",25),qx(2221,"string "),og(),Cl(2222,"code",44),qx(2223," TemplateRef<void>"),og()(),Cl(2224,"td",22)(2225,"em")(2226,"strong"),qx(2227,"(opcional)"),og()(),Cl(2228,"p"),qx(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(2230,"p"),qx(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(2232,"a",45),qx(2233,"Biblioteca de \xEDcones"),og(),qx(2234,". conforme exemplo abaixo:"),og(),Cl(2235,"pre")(2236,"code"),qx(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),og()(),Cl(2238,"p"),qx(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Cl(2240,"pre")(2241,"code"),qx(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),og()(),Cl(2243,"p"),qx(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(2245,"code"),qx(2246,"TemplateRef"),og(),qx(2247,`, conforme exemplo abaixo:
component.html:`),og(),Cl(2248,"pre")(2249,"code"),qx(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),og()(),Cl(2251,"p"),qx(2252,"component.ts:"),og(),Cl(2253,"pre")(2254,"code"),qx(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),og()()()(),Cl(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),qx(2260," label"),Hl(2261,"br"),og()()(),Cl(2262,"td",19)(2263,"code",25),qx(2264,"string"),og()(),Cl(2265,"td",22)(2266,"em")(2267,"strong"),qx(2268,"(opcional)"),og()(),Cl(2269,"p"),qx(2270,"R\xF3tulo da a\xE7\xE3o."),og()()(),Cl(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),qx(2275," type"),Hl(2276,"br"),og()()(),Cl(2277,"td",19)(2278,"code",25),qx(2279,"string"),og()(),Cl(2280,"td",22)(2281,"em")(2282,"strong"),qx(2283,"(opcional)"),og()(),Cl(2284,"p"),qx(2285,"Define a cor do item, sendo "),Cl(2286,"code"),qx(2287,"default"),og(),qx(2288," o padr\xE3o."),og(),Cl(2289,"p"),qx(2290,"Valores v\xE1lidos:"),og(),Cl(2291,"ul")(2292,"li")(2293,"code"),qx(2294,"default"),og()(),Cl(2295,"li")(2296,"code"),qx(2297,"danger"),og(),qx(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),og()()()(),Cl(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),qx(2303," visible"),Hl(2304,"br"),og()()(),Cl(2305,"td",19)(2306,"code",26),qx(2307,"boolean "),og(),Cl(2308,"code",43),qx(2309," Function"),og()(),Cl(2310,"td",22)(2311,"em")(2312,"strong"),qx(2313,"(opcional)"),og()(),Cl(2314,"p"),qx(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),og(),Cl(2316,"blockquote")(2317,"p"),qx(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),og()(),Cl(2319,"p"),qx(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),og(),Cl(2321,"ul")(2322,"li")(2323,"p"),qx(2324,"Fun\xE7\xE3o que deve retornar um booleano."),og()(),Cl(2325,"li")(2326,"p"),qx(2327,"Informar diretamente um valor booleano."),og()()()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-upload-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Me,qe,ke,Le,Re,Oe,je],encapsulation:2})}return a})();var vt=[{path:"",component:Be}],Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(vt),bL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,Ne]})}return a})();export{cn as DocPoUploadModule};