import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,bS as uo,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,ah as uo$1,av as nx,aw as tx,ay as rx,a3 as D3,bU as d_,bV as f_,br as Nt,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Ul(0,"po-badge");},dependencies:[uo],encapsulation:2,changeDetection:1})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Badge Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-badge></po-badge>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-badge-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return a})();var de=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=lx();wl(0,"div",1),Ul(1,"po-badge",2),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",1)(6,"po-number",3),pw("ngModelChange",function(r){return Qy(g),$x(i.value,r)||(i.value=r),Jy(r)}),ng(),$0(),wl(7,"po-input",4),pw("ngModelChange",function(r){return Qy(g),$x(i.color,r)||(i.color=r),Jy(r)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-checkbox-group",5),pw("ngModelChange",function(r){return Qy(g),$x(i.properties,r)||(i.properties=r),Jy(r)}),ut("p-change",function(r){return i.propertiesChange(r)}),ng(),$0(),wl(10,"po-radio-group",6),pw("ngModelChange",function(r){return Qy(g),$x(i.status,r)||(i.status=r),Jy(r)}),ut("p-change",function(r){return i.statusChange(r)}),ng(),$0(),wl(11,"po-radio-group",7),pw("ngModelChange",function(r){return Qy(g),$x(i.size,r)||(i.size=r),Jy(r)}),ng(),$0(),wl(12,"po-radio-group",8),pw("ngModelChange",function(r){return Qy(g),$x(i.icon,r)||(i.icon=r),Jy(r)}),ut("p-change",function(r){return i.iconsChange(r)}),ng(),$0(),ng(),wl(13,"div",1)(14,"po-button",9),ut("p-click",function(){return i.restore()}),ng()()();}l&2&&(Pp(),YE("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Pp(5),hw("ngModel",i.value),YE("p-min",0),G0(),Pp(),hw("ngModel",i.color),G0(),Pp(2),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.status),YE("p-options",i.statusOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizesOptions),G0(),Pp(),hw("ngModel",i.icon),YE("p-options",i.iconsOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ha,ga,uo],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Badge Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-badge-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,de],encapsulation:2})}return a})();function Be(a,fe){if(a&1&&(wl(0,"div",1)(1,"po-container")(2,"div",2),d_(),wl(3,"svg",3),Ul(4,"circle",4)(5,"path",5),ng(),f_(),wl(6,"p",6),Ux(7),Ul(8,"po-badge",7),ng()()()()),a&2){let p=fe.$implicit;Pp(3),Nt("kind",p.status),Pp(4),cg(" ",p.nome," "),Pp(),YE("p-status",p.status==="online"?"positive":"negative");}}var ge=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"div"),nx(2,Be,9,3,"div",1,tx),ng()()),l&2&&(Pp(2),rx(i.users));},dependencies:[uo$1,uo],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Badge Message"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-badge-message/sample-po-badge-message.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row po-mt-3">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-badge-message/sample-po-badge-message.component.css"),ng(),wl(25,"pre",11),Ux(26,`.po-badge-wrap {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-badge-message"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_e,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-badge."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoBadgeComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),ng()(),wl(15,"div",6)(16,"h4",7),Ux(17,"Seletor"),ng(),wl(18,"pre",8),Ux(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),ng()(),wl(20,"h4",9),Ux(21,"Propriedades"),ng(),wl(22,"table",10)(23,"tr",11)(24,"th",12),Ux(25,"Nome"),ng(),wl(26,"th",12),Ux(27,"Tipo"),ng(),wl(28,"th",12),Ux(29,"Padr\xE3o"),ng(),wl(30,"th",12),Ux(31,"Descri\xE7\xE3o"),ng()(),wl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Ux(36," p-aria-label"),Ul(37,"br"),ng()()(),wl(38,"td",17)(39,"code",18),Ux(40,"string"),ng()(),wl(41,"td",19),Ux(42,"-"),ng(),wl(43,"td",20)(44,"p"),Ux(45,"Define um "),wl(46,"code"),Ux(47,"aria-label"),ng(),Ux(48," para o "),wl(49,"code"),Ux(50,"po-badge"),ng()()()(),wl(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),Ux(55," p-color"),Ul(56,"br"),ng()()(),wl(57,"td",17)(58,"code",18),Ux(59,"string"),ng()(),wl(60,"td",19)(61,"p")(62,"code"),Ux(63,"color-07"),ng()()(),wl(64,"td",20)(65,"em")(66,"strong"),Ux(67,"(opcional)"),ng()(),wl(68,"p"),Ux(69,"Determina a cor do "),wl(70,"code"),Ux(71,"po-badge"),ng(),Ux(72,". As maneiras de customizar as cores s\xE3o:"),ng(),wl(73,"ul")(74,"li"),Ux(75,"Hexadeximal, por exemplo "),wl(76,"code"),Ux(77,"#c64840"),ng(),Ux(78,";"),ng(),wl(79,"li"),Ux(80,"RGB, como "),wl(81,"code"),Ux(82,"rgb(0, 0, 165)"),ng(),Ux(83,";"),ng(),wl(84,"li"),Ux(85,"O nome da cor, por exemplo "),wl(86,"code"),Ux(87,"blue"),ng(),Ux(88,";"),ng(),wl(89,"li"),Ux(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),wl(91,"ul")(92,"li"),Ul(93,"span",21),wl(94,"code"),Ux(95,"color-01"),ng()(),wl(96,"li"),Ul(97,"span",22),wl(98,"code"),Ux(99,"color-02"),ng()(),wl(100,"li"),Ul(101,"span",23),wl(102,"code"),Ux(103,"color-03"),ng()(),wl(104,"li"),Ul(105,"span",24),wl(106,"code"),Ux(107,"color-04"),ng()(),wl(108,"li"),Ul(109,"span",25),wl(110,"code"),Ux(111,"color-05"),ng()(),wl(112,"li"),Ul(113,"span",26),wl(114,"code"),Ux(115,"color-06"),ng()(),wl(116,"li"),Ul(117,"span",27),wl(118,"code"),Ux(119,"color-07"),ng()(),wl(120,"li"),Ul(121,"span",28),wl(122,"code"),Ux(123,"color-08"),ng()(),wl(124,"li"),Ul(125,"span",29),wl(126,"code"),Ux(127,"color-09"),ng()(),wl(128,"li"),Ul(129,"span",30),wl(130,"code"),Ux(131,"color-10"),ng()(),wl(132,"li"),Ul(133,"span",31),wl(134,"code"),Ux(135,"color-11"),ng()(),wl(136,"li"),Ul(137,"span",32),wl(138,"code"),Ux(139,"color-12"),ng()()()()(),wl(140,"blockquote")(141,"p"),Ux(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),wl(143,"strong"),Ux(144,"Caption Tag Colors"),ng(),Ux(145,":"),ng()(),wl(146,"ul")(147,"li"),Ul(148,"span",33),wl(149,"code"),Ux(150,"caption-tag-01"),ng(),Ul(151,"span",34),wl(152,"code"),Ux(153,"caption-tag-02"),ng(),Ul(154,"span",35),wl(155,"code"),Ux(156,"caption-tag-03"),ng(),Ul(157,"span",36),wl(158,"code"),Ux(159,"caption-tag-04"),ng(),Ul(160,"span",37),wl(161,"code"),Ux(162,"caption-tag-05"),ng()(),wl(163,"li"),Ul(164,"span",38),wl(165,"code"),Ux(166,"caption-tag-06"),ng(),Ul(167,"span",39),wl(168,"code"),Ux(169,"caption-tag-07"),ng(),Ul(170,"span",40),wl(171,"code"),Ux(172,"caption-tag-08"),ng(),Ul(173,"span",41),wl(174,"code"),Ux(175,"caption-tag-09"),ng(),Ul(176,"span",42),wl(177,"code"),Ux(178,"caption-tag-10"),ng()(),wl(179,"li"),Ul(180,"span",43),wl(181,"code"),Ux(182,"caption-tag-11"),ng(),Ul(183,"span",44),wl(184,"code"),Ux(185,"caption-tag-12"),ng(),Ul(186,"span",45),wl(187,"code"),Ux(188,"caption-tag-13"),ng(),Ul(189,"span",46),wl(190,"code"),Ux(191,"caption-tag-14"),ng(),Ul(192,"span",47),wl(193,"code"),Ux(194,"caption-tag-15"),ng()(),wl(195,"li"),Ul(196,"span",48),wl(197,"code"),Ux(198,"caption-tag-16"),ng(),Ul(199,"span",49),wl(200,"code"),Ux(201,"caption-tag-17"),ng(),Ul(202,"span",50),wl(203,"code"),Ux(204,"caption-tag-18"),ng(),Ul(205,"span",51),wl(206,"code"),Ux(207,"caption-tag-19"),ng(),Ul(208,"span",52),wl(209,"code"),Ux(210,"caption-tag-20"),ng()(),wl(211,"li"),Ul(212,"span",53),wl(213,"code"),Ux(214,"caption-tag-21"),ng(),Ul(215,"span",54),wl(216,"code"),Ux(217,"caption-tag-22"),ng(),Ul(218,"span",55),wl(219,"code"),Ux(220,"caption-tag-23"),ng(),Ul(221,"span",56),wl(222,"code"),Ux(223,"caption-tag-24"),ng(),Ul(224,"span",57),wl(225,"code"),Ux(226,"caption-tag-25"),ng()(),wl(227,"li"),Ul(228,"span",58),wl(229,"code"),Ux(230,"caption-tag-26"),ng(),Ul(231,"span",59),wl(232,"code"),Ux(233,"caption-tag-27"),ng(),Ul(234,"span",60),wl(235,"code"),Ux(236,"caption-tag-28"),ng(),Ul(237,"span",61),wl(238,"code"),Ux(239,"caption-tag-29"),ng(),Ul(240,"span",62),wl(241,"code"),Ux(242,"caption-tag-30"),ng()(),wl(243,"li"),Ul(244,"span",63),wl(245,"code"),Ux(246,"caption-tag-31"),ng(),Ul(247,"span",64),wl(248,"code"),Ux(249,"caption-tag-32"),ng(),Ul(250,"span",65),wl(251,"code"),Ux(252,"caption-tag-33"),ng(),Ul(253,"span",66),wl(254,"code"),Ux(255,"caption-tag-34"),ng(),Ul(256,"span",67),wl(257,"code"),Ux(258,"caption-tag-35"),ng()()(),wl(259,"p"),Ux(260,"Exemplo de uso:"),ng(),wl(261,"pre")(262,"code"),Ux(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),ng()()()(),wl(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),Ux(268," p-icon"),Ul(269,"br"),ng()()(),wl(270,"td",17)(271,"code",68),Ux(272,"PoBadgeIcon"),ng()(),wl(273,"td",19),Ux(274,"-"),ng(),wl(275,"td",20)(276,"em")(277,"strong"),Ux(278,"(opcional)"),ng()(),wl(279,"p"),Ux(280,"\xCDcone exibido no "),wl(281,"code"),Ux(282,"po-badge"),ng(),Ux(283,"."),ng(),wl(284,"p"),Ux(285,"Para exibir icone do status atual declare a propriedade "),wl(286,"code"),Ux(287,"p-icon"),ng(),Ux(288,". conforme exemplo abaixo:"),ng(),wl(289,"pre")(290,"code"),Ux(291,`<po-badge [p-icon]="true"></po-badge>
`),ng()(),wl(292,"p"),Ux(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(294,"a",69),Ux(295,"Biblioteca de \xEDcones"),ng(),Ux(296,". conforme exemplo abaixo:"),ng(),wl(297,"pre")(298,"code"),Ux(299,`<po-badge p-icon="an an-user"></po-badge>
`),ng()(),wl(300,"p"),Ux(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(302,"em"),Ux(303,"Font Awesome"),ng(),Ux(304,", da seguinte forma:"),ng(),wl(305,"pre")(306,"code"),Ux(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),ng()(),wl(308,"p"),Ux(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(310,"code"),Ux(311,"TemplateRef"),ng(),Ux(312,", conforme exemplo abaixo:"),ng(),wl(313,"pre")(314,"code"),Ux(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()()()(),wl(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),Ux(320," p-show-border"),Ul(321,"br"),ng()()(),wl(322,"td",17)(323,"code",70),Ux(324,"boolean"),ng()(),wl(325,"td",19),Ux(326,"-"),ng(),wl(327,"td",20)(328,"p"),Ux(329,"Exibe uma borda para o "),wl(330,"code"),Ux(331,"po-badge"),ng()(),wl(332,"blockquote")(333,"p"),Ux(334,"Pode personalizar cor da bordar com a propriedade "),wl(335,"code"),Ux(336,"p-color-border"),ng()()()()(),wl(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),Ux(341," p-size"),Ul(342,"br"),ng()()(),wl(343,"td",17)(344,"code",71),Ux(345,"PoBadgeSize"),ng()(),wl(346,"td",19)(347,"p")(348,"code"),Ux(349,"medium"),ng()()(),wl(350,"td",20)(351,"p"),Ux(352,"Define o tamanho do "),wl(353,"code"),Ux(354,"po-badge"),ng()(),wl(355,"p"),Ux(356,"Valores v\xE1lidos:"),ng(),wl(357,"ul")(358,"li")(359,"code"),Ux(360,"small"),ng(),Ux(361,": o "),wl(362,"code"),Ux(363,"po-badge"),ng(),Ux(364," fica do tamanho padr\xE3o, com 8px de altura.;"),ng(),wl(365,"li")(366,"code"),Ux(367,"medium"),ng(),Ux(368,": o "),wl(369,"code"),Ux(370,"po-badge"),ng(),Ux(371," fica do tamanho padr\xE3o, com 16px de altura.;"),ng(),wl(372,"li")(373,"code"),Ux(374,"large"),ng(),Ux(375,": o "),wl(376,"code"),Ux(377,"po-badge"),ng(),Ux(378," fica do tamanho padr\xE3o, com 24px de altura.;"),ng()()()(),wl(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),Ux(383," p-status"),Ul(384,"br"),ng()()(),wl(385,"td",17)(386,"code",72),Ux(387,"PoBadgeStatus"),ng()(),wl(388,"td",19),Ux(389,"-"),ng(),wl(390,"td",20)(391,"p"),Ux(392,"Define o estado do "),wl(393,"code"),Ux(394,"po-badge"),ng()(),wl(395,"p"),Ux(396,"Valores v\xE1lidos:"),ng(),wl(397,"ul")(398,"li")(399,"code"),Ux(400,"positive"),ng(),Ux(401,": Define a cor do "),wl(402,"code"),Ux(403,"po-badge"),ng(),Ux(404," com a cor de feedback positivo.;"),ng(),wl(405,"li")(406,"code"),Ux(407,"negative"),ng(),Ux(408,": Define a cor do "),wl(409,"code"),Ux(410,"po-badge"),ng(),Ux(411," com a cor de feedback negative.;"),ng(),wl(412,"li")(413,"code"),Ux(414,"warning"),ng(),Ux(415,": Define a cor do "),wl(416,"code"),Ux(417,"po-badge"),ng(),Ux(418," com a cor de feedback warning.;"),ng(),wl(419,"li")(420,"code"),Ux(421,"disabled"),ng(),Ux(422,": Define a cor do "),wl(423,"code"),Ux(424,"po-badge"),ng(),Ux(425," com a cor de feedback disabled;"),ng()()()(),wl(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),Ux(430," p-value"),Ul(431,"br"),ng()()(),wl(432,"td",17)(433,"code",73),Ux(434,"number"),ng()(),wl(435,"td",19),Ux(436,"-"),ng(),wl(437,"td",20)(438,"p"),Ux(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-badge-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,me,ce,ue,be],encapsulation:2})}return a})();var Te=[{path:"",component:Se}],he=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[vL.forChild(Te),vL]})}return a})();var st=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[u5,he]})}return a})();export{st as DocPoBadgeModule};