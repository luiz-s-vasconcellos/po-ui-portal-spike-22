import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,co as rS,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,aI as dc,aQ as px,aR as hx,aS as gx,a3 as pNe,bk as u_,cq as d_,am as Ot,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-badge");},dependencies:[rS],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Badge Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-badge></po-badge>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-badge-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=Ex();Sl(0,"div",1),Wl(1,"po-badge",2),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-number",3),Ew("ngModelChange",function(r){return Xy(g),tN(i.value,r)||(i.value=r),Qy(r)}),sg(),JA(),Sl(7,"po-input",4),Ew("ngModelChange",function(r){return Xy(g),tN(i.color,r)||(i.color=r),Qy(r)}),sg(),JA(),sg(),Sl(8,"div",1)(9,"po-checkbox-group",5),Ew("ngModelChange",function(r){return Xy(g),tN(i.properties,r)||(i.properties=r),Qy(r)}),ht("p-change",function(r){return i.propertiesChange(r)}),sg(),JA(),Sl(10,"po-radio-group",6),Ew("ngModelChange",function(r){return Xy(g),tN(i.status,r)||(i.status=r),Qy(r)}),ht("p-change",function(r){return i.statusChange(r)}),sg(),JA(),Sl(11,"po-radio-group",7),Ew("ngModelChange",function(r){return Xy(g),tN(i.size,r)||(i.size=r),Qy(r)}),sg(),JA(),Sl(12,"po-radio-group",8),Ew("ngModelChange",function(r){return Xy(g),tN(i.icon,r)||(i.icon=r),Qy(r)}),ht("p-change",function(r){return i.iconsChange(r)}),sg(),JA(),sg(),Sl(13,"div",1)(14,"po-button",9),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Vp(),tw("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Vp(5),Dw("ngModel",i.value),tw("p-min",0),t0(),Vp(),Dw("ngModel",i.color),t0(),Vp(2),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.status),tw("p-options",i.statusOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizesOptions),t0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconsOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Pde,rS],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Badge Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-badge-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return a})();function Pe(a,Se){if(a&1&&(Sl(0,"div",1)(1,"po-container")(2,"div",2),u_(),Sl(3,"svg",3),Wl(4,"circle",4)(5,"path",5),sg(),d_(),Sl(6,"p",6),Jx(7),Wl(8,"po-badge",7),sg()()()()),a&2){let p=Se.$implicit;Vp(3),Ot("kind",p.status),Vp(4),fg(" ",p.nome," "),Vp(),tw("p-status",p.status==="online"?"positive":"negative");}}var me=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"div"),px(2,Pe,9,3,"div",1,hx),sg()()),l&2&&(Vp(2),gx(i.users));},dependencies:[dc,rS],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Badge Message"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-badge-message/sample-po-badge-message.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row po-mt-3">
  <div>
    @for (user of users; track user) {
      <div class="po-mb-1">
        <po-container>
          <div class="card">
            <svg class="po-mr-2" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p class="po-mr-2 card-name-user po-text-color-neutral-dark-40">
              { { user.nome }}
              <po-badge
                class="po-badge-wrap"
                [p-status]="user.status === 'online' ? 'positive' : 'negative'"
              ></po-badge>
            </p>
          </div>
        </po-container>
      </div>
    }
  </div>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-badge-message/sample-po-badge-message.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.po-badge-wrap {
  position: absolute;
  top: -5px;
  right: -5px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-badge-message"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-badge."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoBadgeComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),sg()(),Sl(15,"div",6)(16,"h4",7),Jx(17,"Seletor"),sg(),Sl(18,"pre",8),Jx(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),sg()(),Sl(20,"h4",9),Jx(21,"Propriedades"),sg(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),Jx(25,"Nome"),sg(),Sl(26,"th",12),Jx(27,"Tipo"),sg(),Sl(28,"th",12),Jx(29,"Padr\xE3o"),sg(),Sl(30,"th",12),Jx(31,"Descri\xE7\xE3o"),sg()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Jx(36," p-aria-label"),Wl(37,"br"),sg()()(),Sl(38,"td",17)(39,"code",18),Jx(40,"string"),sg()(),Sl(41,"td",19),Jx(42,"-"),sg(),Sl(43,"td",20)(44,"p"),Jx(45,"Define um "),Sl(46,"code"),Jx(47,"aria-label"),sg(),Jx(48," para o "),Sl(49,"code"),Jx(50,"po-badge"),sg()()()(),Sl(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),Jx(55," p-color"),Wl(56,"br"),sg()()(),Sl(57,"td",17)(58,"code",18),Jx(59,"string"),sg()(),Sl(60,"td",19)(61,"p")(62,"code"),Jx(63,"color-07"),sg()()(),Sl(64,"td",20)(65,"em")(66,"strong"),Jx(67,"(opcional)"),sg()(),Sl(68,"p"),Jx(69,"Determina a cor do "),Sl(70,"code"),Jx(71,"po-badge"),sg(),Jx(72,". As maneiras de customizar as cores s\xE3o:"),sg(),Sl(73,"ul")(74,"li"),Jx(75,"Hexadeximal, por exemplo "),Sl(76,"code"),Jx(77,"#c64840"),sg(),Jx(78,";"),sg(),Sl(79,"li"),Jx(80,"RGB, como "),Sl(81,"code"),Jx(82,"rgb(0, 0, 165)"),sg(),Jx(83,";"),sg(),Sl(84,"li"),Jx(85,"O nome da cor, por exemplo "),Sl(86,"code"),Jx(87,"blue"),sg(),Jx(88,";"),sg(),Sl(89,"li"),Jx(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Sl(91,"ul")(92,"li"),Wl(93,"span",21),Sl(94,"code"),Jx(95,"color-01"),sg()(),Sl(96,"li"),Wl(97,"span",22),Sl(98,"code"),Jx(99,"color-02"),sg()(),Sl(100,"li"),Wl(101,"span",23),Sl(102,"code"),Jx(103,"color-03"),sg()(),Sl(104,"li"),Wl(105,"span",24),Sl(106,"code"),Jx(107,"color-04"),sg()(),Sl(108,"li"),Wl(109,"span",25),Sl(110,"code"),Jx(111,"color-05"),sg()(),Sl(112,"li"),Wl(113,"span",26),Sl(114,"code"),Jx(115,"color-06"),sg()(),Sl(116,"li"),Wl(117,"span",27),Sl(118,"code"),Jx(119,"color-07"),sg()(),Sl(120,"li"),Wl(121,"span",28),Sl(122,"code"),Jx(123,"color-08"),sg()(),Sl(124,"li"),Wl(125,"span",29),Sl(126,"code"),Jx(127,"color-09"),sg()(),Sl(128,"li"),Wl(129,"span",30),Sl(130,"code"),Jx(131,"color-10"),sg()(),Sl(132,"li"),Wl(133,"span",31),Sl(134,"code"),Jx(135,"color-11"),sg()(),Sl(136,"li"),Wl(137,"span",32),Sl(138,"code"),Jx(139,"color-12"),sg()()()()(),Sl(140,"blockquote")(141,"p"),Jx(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(143,"strong"),Jx(144,"Caption Tag Colors"),sg(),Jx(145,":"),sg()(),Sl(146,"ul")(147,"li"),Wl(148,"span",33),Sl(149,"code"),Jx(150,"caption-tag-01"),sg(),Wl(151,"span",34),Sl(152,"code"),Jx(153,"caption-tag-02"),sg(),Wl(154,"span",35),Sl(155,"code"),Jx(156,"caption-tag-03"),sg(),Wl(157,"span",36),Sl(158,"code"),Jx(159,"caption-tag-04"),sg(),Wl(160,"span",37),Sl(161,"code"),Jx(162,"caption-tag-05"),sg()(),Sl(163,"li"),Wl(164,"span",38),Sl(165,"code"),Jx(166,"caption-tag-06"),sg(),Wl(167,"span",39),Sl(168,"code"),Jx(169,"caption-tag-07"),sg(),Wl(170,"span",40),Sl(171,"code"),Jx(172,"caption-tag-08"),sg(),Wl(173,"span",41),Sl(174,"code"),Jx(175,"caption-tag-09"),sg(),Wl(176,"span",42),Sl(177,"code"),Jx(178,"caption-tag-10"),sg()(),Sl(179,"li"),Wl(180,"span",43),Sl(181,"code"),Jx(182,"caption-tag-11"),sg(),Wl(183,"span",44),Sl(184,"code"),Jx(185,"caption-tag-12"),sg(),Wl(186,"span",45),Sl(187,"code"),Jx(188,"caption-tag-13"),sg(),Wl(189,"span",46),Sl(190,"code"),Jx(191,"caption-tag-14"),sg(),Wl(192,"span",47),Sl(193,"code"),Jx(194,"caption-tag-15"),sg()(),Sl(195,"li"),Wl(196,"span",48),Sl(197,"code"),Jx(198,"caption-tag-16"),sg(),Wl(199,"span",49),Sl(200,"code"),Jx(201,"caption-tag-17"),sg(),Wl(202,"span",50),Sl(203,"code"),Jx(204,"caption-tag-18"),sg(),Wl(205,"span",51),Sl(206,"code"),Jx(207,"caption-tag-19"),sg(),Wl(208,"span",52),Sl(209,"code"),Jx(210,"caption-tag-20"),sg()(),Sl(211,"li"),Wl(212,"span",53),Sl(213,"code"),Jx(214,"caption-tag-21"),sg(),Wl(215,"span",54),Sl(216,"code"),Jx(217,"caption-tag-22"),sg(),Wl(218,"span",55),Sl(219,"code"),Jx(220,"caption-tag-23"),sg(),Wl(221,"span",56),Sl(222,"code"),Jx(223,"caption-tag-24"),sg(),Wl(224,"span",57),Sl(225,"code"),Jx(226,"caption-tag-25"),sg()(),Sl(227,"li"),Wl(228,"span",58),Sl(229,"code"),Jx(230,"caption-tag-26"),sg(),Wl(231,"span",59),Sl(232,"code"),Jx(233,"caption-tag-27"),sg(),Wl(234,"span",60),Sl(235,"code"),Jx(236,"caption-tag-28"),sg(),Wl(237,"span",61),Sl(238,"code"),Jx(239,"caption-tag-29"),sg(),Wl(240,"span",62),Sl(241,"code"),Jx(242,"caption-tag-30"),sg()(),Sl(243,"li"),Wl(244,"span",63),Sl(245,"code"),Jx(246,"caption-tag-31"),sg(),Wl(247,"span",64),Sl(248,"code"),Jx(249,"caption-tag-32"),sg(),Wl(250,"span",65),Sl(251,"code"),Jx(252,"caption-tag-33"),sg(),Wl(253,"span",66),Sl(254,"code"),Jx(255,"caption-tag-34"),sg(),Wl(256,"span",67),Sl(257,"code"),Jx(258,"caption-tag-35"),sg()()(),Sl(259,"p"),Jx(260,"Exemplo de uso:"),sg(),Sl(261,"pre")(262,"code"),Jx(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),sg()()()(),Sl(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),Jx(268," p-icon"),Wl(269,"br"),sg()()(),Sl(270,"td",17)(271,"code",68),Jx(272,"PoBadgeIcon"),sg()(),Sl(273,"td",19),Jx(274,"-"),sg(),Sl(275,"td",20)(276,"em")(277,"strong"),Jx(278,"(opcional)"),sg()(),Sl(279,"p"),Jx(280,"\xCDcone exibido no "),Sl(281,"code"),Jx(282,"po-badge"),sg(),Jx(283,"."),sg(),Sl(284,"p"),Jx(285,"Para exibir icone do status atual declare a propriedade "),Sl(286,"code"),Jx(287,"p-icon"),sg(),Jx(288,". conforme exemplo abaixo:"),sg(),Sl(289,"pre")(290,"code"),Jx(291,`<po-badge [p-icon]="true"></po-badge>
`),sg()(),Sl(292,"p"),Jx(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(294,"a",69),Jx(295,"Biblioteca de \xEDcones"),sg(),Jx(296,". conforme exemplo abaixo:"),sg(),Sl(297,"pre")(298,"code"),Jx(299,`<po-badge p-icon="an an-user"></po-badge>
`),sg()(),Sl(300,"p"),Jx(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(302,"em"),Jx(303,"Font Awesome"),sg(),Jx(304,", da seguinte forma:"),sg(),Sl(305,"pre")(306,"code"),Jx(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),sg()(),Sl(308,"p"),Jx(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(310,"code"),Jx(311,"TemplateRef"),sg(),Jx(312,", conforme exemplo abaixo:"),sg(),Sl(313,"pre")(314,"code"),Jx(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()()()(),Sl(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),Jx(320," p-show-border"),Wl(321,"br"),sg()()(),Sl(322,"td",17)(323,"code",70),Jx(324,"boolean"),sg()(),Sl(325,"td",19),Jx(326,"-"),sg(),Sl(327,"td",20)(328,"p"),Jx(329,"Exibe uma borda para o "),Sl(330,"code"),Jx(331,"po-badge"),sg()(),Sl(332,"blockquote")(333,"p"),Jx(334,"Pode personalizar cor da bordar com a propriedade "),Sl(335,"code"),Jx(336,"p-color-border"),sg()()()()(),Sl(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),Jx(341," p-size"),Wl(342,"br"),sg()()(),Sl(343,"td",17)(344,"code",71),Jx(345,"PoBadgeSize"),sg()(),Sl(346,"td",19)(347,"p")(348,"code"),Jx(349,"medium"),sg()()(),Sl(350,"td",20)(351,"p"),Jx(352,"Define o tamanho do "),Sl(353,"code"),Jx(354,"po-badge"),sg()(),Sl(355,"p"),Jx(356,"Valores v\xE1lidos:"),sg(),Sl(357,"ul")(358,"li")(359,"code"),Jx(360,"small"),sg(),Jx(361,": o "),Sl(362,"code"),Jx(363,"po-badge"),sg(),Jx(364," fica do tamanho padr\xE3o, com 8px de altura.;"),sg(),Sl(365,"li")(366,"code"),Jx(367,"medium"),sg(),Jx(368,": o "),Sl(369,"code"),Jx(370,"po-badge"),sg(),Jx(371," fica do tamanho padr\xE3o, com 16px de altura.;"),sg(),Sl(372,"li")(373,"code"),Jx(374,"large"),sg(),Jx(375,": o "),Sl(376,"code"),Jx(377,"po-badge"),sg(),Jx(378," fica do tamanho padr\xE3o, com 24px de altura.;"),sg()()()(),Sl(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),Jx(383," p-status"),Wl(384,"br"),sg()()(),Sl(385,"td",17)(386,"code",72),Jx(387,"PoBadgeStatus"),sg()(),Sl(388,"td",19),Jx(389,"-"),sg(),Sl(390,"td",20)(391,"p"),Jx(392,"Define o estado do "),Sl(393,"code"),Jx(394,"po-badge"),sg()(),Sl(395,"p"),Jx(396,"Valores v\xE1lidos:"),sg(),Sl(397,"ul")(398,"li")(399,"code"),Jx(400,"positive"),sg(),Jx(401,": Define a cor do "),Sl(402,"code"),Jx(403,"po-badge"),sg(),Jx(404," com a cor de feedback positivo.;"),sg(),Sl(405,"li")(406,"code"),Jx(407,"negative"),sg(),Jx(408,": Define a cor do "),Sl(409,"code"),Jx(410,"po-badge"),sg(),Jx(411," com a cor de feedback negative.;"),sg(),Sl(412,"li")(413,"code"),Jx(414,"warning"),sg(),Jx(415,": Define a cor do "),Sl(416,"code"),Jx(417,"po-badge"),sg(),Jx(418," com a cor de feedback warning.;"),sg(),Sl(419,"li")(420,"code"),Jx(421,"disabled"),sg(),Jx(422,": Define a cor do "),Sl(423,"code"),Jx(424,"po-badge"),sg(),Jx(425," com a cor de feedback disabled;"),sg()()()(),Sl(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),Jx(430," p-value"),Wl(431,"br"),sg()()(),Sl(432,"td",17)(433,"code",73),Jx(434,"number"),sg()(),Sl(435,"td",19),Jx(436,"-"),sg(),Sl(437,"td",20)(438,"p"),Jx(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-badge-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,re,de,ce,ge],encapsulation:2})}return a})();var Me=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[pL.forChild(Me),pL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,be]})}return a})();export{$e as DocPoBadgeModule};