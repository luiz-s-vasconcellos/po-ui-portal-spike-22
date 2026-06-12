import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,cs as hS,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,aI as gc,aQ as cx,aR as ax,aS as lx,a3 as SNe,bq as f_,cu as h_,am as Nt,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Hl(0,"po-badge");},dependencies:[hS],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Badge Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-badge></po-badge>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-badge-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=gx();Cl(0,"div",1),Hl(1,"po-badge",2),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",1)(6,"po-number",3),gw("ngModelChange",function(r){return Jy(g),Zx(i.value,r)||(i.value=r),e_(r)}),og(),Z0(),Cl(7,"po-input",4),gw("ngModelChange",function(r){return Jy(g),Zx(i.color,r)||(i.color=r),e_(r)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-checkbox-group",5),gw("ngModelChange",function(r){return Jy(g),Zx(i.properties,r)||(i.properties=r),e_(r)}),dt("p-change",function(r){return i.propertiesChange(r)}),og(),Z0(),Cl(10,"po-radio-group",6),gw("ngModelChange",function(r){return Jy(g),Zx(i.status,r)||(i.status=r),e_(r)}),dt("p-change",function(r){return i.statusChange(r)}),og(),Z0(),Cl(11,"po-radio-group",7),gw("ngModelChange",function(r){return Jy(g),Zx(i.size,r)||(i.size=r),e_(r)}),og(),Z0(),Cl(12,"po-radio-group",8),gw("ngModelChange",function(r){return Jy(g),Zx(i.icon,r)||(i.icon=r),e_(r)}),dt("p-change",function(r){return i.iconsChange(r)}),og(),Z0(),og(),Cl(13,"div",1)(14,"po-button",9),dt("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),ZE("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Lp(5),pw("ngModel",i.value),ZE("p-min",0),X0(),Lp(),pw("ngModel",i.color),X0(),Lp(2),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.status),ZE("p-options",i.statusOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizesOptions),X0(),Lp(),pw("ngModel",i.icon),ZE("p-options",i.iconsOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,hS],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Badge Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-badge-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return a})();function Pe(a,Se){if(a&1&&(Cl(0,"div",1)(1,"po-container")(2,"div",2),f_(),Cl(3,"svg",3),Hl(4,"circle",4)(5,"path",5),og(),h_(),Cl(6,"p",6),qx(7),Hl(8,"po-badge",7),og()()()()),a&2){let p=Se.$implicit;Lp(3),Nt("kind",p.status),Lp(4),dg(" ",p.nome," "),Lp(),ZE("p-status",p.status==="online"?"positive":"negative");}}var me=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"div"),cx(2,Pe,9,3,"div",1,ax),og()()),l&2&&(Lp(2),lx(i.users));},dependencies:[gc,hS],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Badge Message"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-badge-message/sample-po-badge-message.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row po-mt-3">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-badge-message/sample-po-badge-message.component.css"),og(),Cl(25,"pre",11),qx(26,`.po-badge-wrap {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-badge-message"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-badge."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoBadgeComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),og()(),Cl(15,"div",6)(16,"h4",7),qx(17,"Seletor"),og(),Cl(18,"pre",8),qx(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),og()(),Cl(20,"h4",9),qx(21,"Propriedades"),og(),Cl(22,"table",10)(23,"tr",11)(24,"th",12),qx(25,"Nome"),og(),Cl(26,"th",12),qx(27,"Tipo"),og(),Cl(28,"th",12),qx(29,"Padr\xE3o"),og(),Cl(30,"th",12),qx(31,"Descri\xE7\xE3o"),og()(),Cl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),qx(36," p-aria-label"),Hl(37,"br"),og()()(),Cl(38,"td",17)(39,"code",18),qx(40,"string"),og()(),Cl(41,"td",19),qx(42,"-"),og(),Cl(43,"td",20)(44,"p"),qx(45,"Define um "),Cl(46,"code"),qx(47,"aria-label"),og(),qx(48," para o "),Cl(49,"code"),qx(50,"po-badge"),og()()()(),Cl(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),qx(55," p-color"),Hl(56,"br"),og()()(),Cl(57,"td",17)(58,"code",18),qx(59,"string"),og()(),Cl(60,"td",19)(61,"p")(62,"code"),qx(63,"color-07"),og()()(),Cl(64,"td",20)(65,"em")(66,"strong"),qx(67,"(opcional)"),og()(),Cl(68,"p"),qx(69,"Determina a cor do "),Cl(70,"code"),qx(71,"po-badge"),og(),qx(72,". As maneiras de customizar as cores s\xE3o:"),og(),Cl(73,"ul")(74,"li"),qx(75,"Hexadeximal, por exemplo "),Cl(76,"code"),qx(77,"#c64840"),og(),qx(78,";"),og(),Cl(79,"li"),qx(80,"RGB, como "),Cl(81,"code"),qx(82,"rgb(0, 0, 165)"),og(),qx(83,";"),og(),Cl(84,"li"),qx(85,"O nome da cor, por exemplo "),Cl(86,"code"),qx(87,"blue"),og(),qx(88,";"),og(),Cl(89,"li"),qx(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Cl(91,"ul")(92,"li"),Hl(93,"span",21),Cl(94,"code"),qx(95,"color-01"),og()(),Cl(96,"li"),Hl(97,"span",22),Cl(98,"code"),qx(99,"color-02"),og()(),Cl(100,"li"),Hl(101,"span",23),Cl(102,"code"),qx(103,"color-03"),og()(),Cl(104,"li"),Hl(105,"span",24),Cl(106,"code"),qx(107,"color-04"),og()(),Cl(108,"li"),Hl(109,"span",25),Cl(110,"code"),qx(111,"color-05"),og()(),Cl(112,"li"),Hl(113,"span",26),Cl(114,"code"),qx(115,"color-06"),og()(),Cl(116,"li"),Hl(117,"span",27),Cl(118,"code"),qx(119,"color-07"),og()(),Cl(120,"li"),Hl(121,"span",28),Cl(122,"code"),qx(123,"color-08"),og()(),Cl(124,"li"),Hl(125,"span",29),Cl(126,"code"),qx(127,"color-09"),og()(),Cl(128,"li"),Hl(129,"span",30),Cl(130,"code"),qx(131,"color-10"),og()(),Cl(132,"li"),Hl(133,"span",31),Cl(134,"code"),qx(135,"color-11"),og()(),Cl(136,"li"),Hl(137,"span",32),Cl(138,"code"),qx(139,"color-12"),og()()()()(),Cl(140,"blockquote")(141,"p"),qx(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Cl(143,"strong"),qx(144,"Caption Tag Colors"),og(),qx(145,":"),og()(),Cl(146,"ul")(147,"li"),Hl(148,"span",33),Cl(149,"code"),qx(150,"caption-tag-01"),og(),Hl(151,"span",34),Cl(152,"code"),qx(153,"caption-tag-02"),og(),Hl(154,"span",35),Cl(155,"code"),qx(156,"caption-tag-03"),og(),Hl(157,"span",36),Cl(158,"code"),qx(159,"caption-tag-04"),og(),Hl(160,"span",37),Cl(161,"code"),qx(162,"caption-tag-05"),og()(),Cl(163,"li"),Hl(164,"span",38),Cl(165,"code"),qx(166,"caption-tag-06"),og(),Hl(167,"span",39),Cl(168,"code"),qx(169,"caption-tag-07"),og(),Hl(170,"span",40),Cl(171,"code"),qx(172,"caption-tag-08"),og(),Hl(173,"span",41),Cl(174,"code"),qx(175,"caption-tag-09"),og(),Hl(176,"span",42),Cl(177,"code"),qx(178,"caption-tag-10"),og()(),Cl(179,"li"),Hl(180,"span",43),Cl(181,"code"),qx(182,"caption-tag-11"),og(),Hl(183,"span",44),Cl(184,"code"),qx(185,"caption-tag-12"),og(),Hl(186,"span",45),Cl(187,"code"),qx(188,"caption-tag-13"),og(),Hl(189,"span",46),Cl(190,"code"),qx(191,"caption-tag-14"),og(),Hl(192,"span",47),Cl(193,"code"),qx(194,"caption-tag-15"),og()(),Cl(195,"li"),Hl(196,"span",48),Cl(197,"code"),qx(198,"caption-tag-16"),og(),Hl(199,"span",49),Cl(200,"code"),qx(201,"caption-tag-17"),og(),Hl(202,"span",50),Cl(203,"code"),qx(204,"caption-tag-18"),og(),Hl(205,"span",51),Cl(206,"code"),qx(207,"caption-tag-19"),og(),Hl(208,"span",52),Cl(209,"code"),qx(210,"caption-tag-20"),og()(),Cl(211,"li"),Hl(212,"span",53),Cl(213,"code"),qx(214,"caption-tag-21"),og(),Hl(215,"span",54),Cl(216,"code"),qx(217,"caption-tag-22"),og(),Hl(218,"span",55),Cl(219,"code"),qx(220,"caption-tag-23"),og(),Hl(221,"span",56),Cl(222,"code"),qx(223,"caption-tag-24"),og(),Hl(224,"span",57),Cl(225,"code"),qx(226,"caption-tag-25"),og()(),Cl(227,"li"),Hl(228,"span",58),Cl(229,"code"),qx(230,"caption-tag-26"),og(),Hl(231,"span",59),Cl(232,"code"),qx(233,"caption-tag-27"),og(),Hl(234,"span",60),Cl(235,"code"),qx(236,"caption-tag-28"),og(),Hl(237,"span",61),Cl(238,"code"),qx(239,"caption-tag-29"),og(),Hl(240,"span",62),Cl(241,"code"),qx(242,"caption-tag-30"),og()(),Cl(243,"li"),Hl(244,"span",63),Cl(245,"code"),qx(246,"caption-tag-31"),og(),Hl(247,"span",64),Cl(248,"code"),qx(249,"caption-tag-32"),og(),Hl(250,"span",65),Cl(251,"code"),qx(252,"caption-tag-33"),og(),Hl(253,"span",66),Cl(254,"code"),qx(255,"caption-tag-34"),og(),Hl(256,"span",67),Cl(257,"code"),qx(258,"caption-tag-35"),og()()(),Cl(259,"p"),qx(260,"Exemplo de uso:"),og(),Cl(261,"pre")(262,"code"),qx(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),og()()()(),Cl(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),qx(268," p-icon"),Hl(269,"br"),og()()(),Cl(270,"td",17)(271,"code",68),qx(272,"PoBadgeIcon"),og()(),Cl(273,"td",19),qx(274,"-"),og(),Cl(275,"td",20)(276,"em")(277,"strong"),qx(278,"(opcional)"),og()(),Cl(279,"p"),qx(280,"\xCDcone exibido no "),Cl(281,"code"),qx(282,"po-badge"),og(),qx(283,"."),og(),Cl(284,"p"),qx(285,"Para exibir icone do status atual declare a propriedade "),Cl(286,"code"),qx(287,"p-icon"),og(),qx(288,". conforme exemplo abaixo:"),og(),Cl(289,"pre")(290,"code"),qx(291,`<po-badge [p-icon]="true"></po-badge>
`),og()(),Cl(292,"p"),qx(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(294,"a",69),qx(295,"Biblioteca de \xEDcones"),og(),qx(296,". conforme exemplo abaixo:"),og(),Cl(297,"pre")(298,"code"),qx(299,`<po-badge p-icon="an an-user"></po-badge>
`),og()(),Cl(300,"p"),qx(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(302,"em"),qx(303,"Font Awesome"),og(),qx(304,", da seguinte forma:"),og(),Cl(305,"pre")(306,"code"),qx(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),og()(),Cl(308,"p"),qx(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(310,"code"),qx(311,"TemplateRef"),og(),qx(312,", conforme exemplo abaixo:"),og(),Cl(313,"pre")(314,"code"),qx(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Cl(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),qx(320," p-show-border"),Hl(321,"br"),og()()(),Cl(322,"td",17)(323,"code",70),qx(324,"boolean"),og()(),Cl(325,"td",19),qx(326,"-"),og(),Cl(327,"td",20)(328,"p"),qx(329,"Exibe uma borda para o "),Cl(330,"code"),qx(331,"po-badge"),og()(),Cl(332,"blockquote")(333,"p"),qx(334,"Pode personalizar cor da bordar com a propriedade "),Cl(335,"code"),qx(336,"p-color-border"),og()()()()(),Cl(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),qx(341," p-size"),Hl(342,"br"),og()()(),Cl(343,"td",17)(344,"code",71),qx(345,"PoBadgeSize"),og()(),Cl(346,"td",19)(347,"p")(348,"code"),qx(349,"medium"),og()()(),Cl(350,"td",20)(351,"p"),qx(352,"Define o tamanho do "),Cl(353,"code"),qx(354,"po-badge"),og()(),Cl(355,"p"),qx(356,"Valores v\xE1lidos:"),og(),Cl(357,"ul")(358,"li")(359,"code"),qx(360,"small"),og(),qx(361,": o "),Cl(362,"code"),qx(363,"po-badge"),og(),qx(364," fica do tamanho padr\xE3o, com 8px de altura.;"),og(),Cl(365,"li")(366,"code"),qx(367,"medium"),og(),qx(368,": o "),Cl(369,"code"),qx(370,"po-badge"),og(),qx(371," fica do tamanho padr\xE3o, com 16px de altura.;"),og(),Cl(372,"li")(373,"code"),qx(374,"large"),og(),qx(375,": o "),Cl(376,"code"),qx(377,"po-badge"),og(),qx(378," fica do tamanho padr\xE3o, com 24px de altura.;"),og()()()(),Cl(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),qx(383," p-status"),Hl(384,"br"),og()()(),Cl(385,"td",17)(386,"code",72),qx(387,"PoBadgeStatus"),og()(),Cl(388,"td",19),qx(389,"-"),og(),Cl(390,"td",20)(391,"p"),qx(392,"Define o estado do "),Cl(393,"code"),qx(394,"po-badge"),og()(),Cl(395,"p"),qx(396,"Valores v\xE1lidos:"),og(),Cl(397,"ul")(398,"li")(399,"code"),qx(400,"positive"),og(),qx(401,": Define a cor do "),Cl(402,"code"),qx(403,"po-badge"),og(),qx(404," com a cor de feedback positivo.;"),og(),Cl(405,"li")(406,"code"),qx(407,"negative"),og(),qx(408,": Define a cor do "),Cl(409,"code"),qx(410,"po-badge"),og(),qx(411," com a cor de feedback negative.;"),og(),Cl(412,"li")(413,"code"),qx(414,"warning"),og(),qx(415,": Define a cor do "),Cl(416,"code"),qx(417,"po-badge"),og(),qx(418," com a cor de feedback warning.;"),og(),Cl(419,"li")(420,"code"),qx(421,"disabled"),og(),qx(422,": Define a cor do "),Cl(423,"code"),qx(424,"po-badge"),og(),qx(425," com a cor de feedback disabled;"),og()()()(),Cl(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),qx(430," p-value"),Hl(431,"br"),og()()(),Cl(432,"td",17)(433,"code",73),qx(434,"number"),og()(),Cl(435,"td",19),qx(436,"-"),og(),Cl(437,"td",20)(438,"p"),qx(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-badge-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,re,de,ce,ge],encapsulation:2})}return a})();var Me=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[bL.forChild(Me),bL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ca,be]})}return a})();export{$e as DocPoBadgeModule};