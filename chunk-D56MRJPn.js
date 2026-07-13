import {f as fe$1,u as ue$1,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,co as oS,L as Gl,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,aI as dc,aQ as _x,aR as yx,aS as Dx,a3 as sNe,bk as l_,cq as u_,am as Ot,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Gl(0,"po-badge");},dependencies:[oS],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Badge Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-badge></po-badge>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-badge-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,fe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=Sx();Tl(0,"div",1),Gl(1,"po-badge",2),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",1)(6,"po-number",3),ww("ngModelChange",function(r){return Ky(g),sN(i.value,r)||(i.value=r),Xy(r)}),sg(),r0(),Tl(7,"po-input",4),ww("ngModelChange",function(r){return Ky(g),sN(i.color,r)||(i.color=r),Xy(r)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-checkbox-group",5),ww("ngModelChange",function(r){return Ky(g),sN(i.properties,r)||(i.properties=r),Xy(r)}),ht("p-change",function(r){return i.propertiesChange(r)}),sg(),r0(),Tl(10,"po-radio-group",6),ww("ngModelChange",function(r){return Ky(g),sN(i.status,r)||(i.status=r),Xy(r)}),ht("p-change",function(r){return i.statusChange(r)}),sg(),r0(),Tl(11,"po-radio-group",7),ww("ngModelChange",function(r){return Ky(g),sN(i.size,r)||(i.size=r),Xy(r)}),sg(),r0(),Tl(12,"po-radio-group",8),ww("ngModelChange",function(r){return Ky(g),sN(i.icon,r)||(i.icon=r),Xy(r)}),ht("p-change",function(r){return i.iconsChange(r)}),sg(),r0(),sg(),Tl(13,"div",1)(14,"po-button",9),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Vp(),nw("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Vp(5),Ew("ngModel",i.value),nw("p-min",0),o0(),Vp(),Ew("ngModel",i.color),o0(),Vp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.status),nw("p-options",i.statusOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizesOptions),o0(),Vp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,b3,L3,Bhe,Tde,oS],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Badge Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-badge-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return a})();function Pe(a,he){if(a&1&&(Tl(0,"div",1)(1,"po-container")(2,"div",2),l_(),Tl(3,"svg",3),Gl(4,"circle",4)(5,"path",5),sg(),u_(),Tl(6,"p",6),iN(7),Gl(8,"po-badge",7),sg()()()()),a&2){let p=he.$implicit;Vp(3),Ot("kind",p.status),Vp(4),fg(" ",p.nome," "),Vp(),nw("p-status",p.status==="online"?"positive":"negative");}}var me=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"div"),_x(2,Pe,9,3,"div",1,yx),sg()()),l&2&&(Vp(2),Dx(i.users));},dependencies:[dc,oS],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Badge Message"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-badge-message/sample-po-badge-message.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row po-mt-3">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-badge-message/sample-po-badge-message.component.css"),sg(),Tl(25,"pre",11),iN(26,`.po-badge-wrap {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-badge-message"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ye,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-badge."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoBadgeComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),sg()(),Tl(15,"div",6)(16,"h4",7),iN(17,"Seletor"),sg(),Tl(18,"pre",8),iN(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),sg()(),Tl(20,"h4",9),iN(21,"Propriedades"),sg(),Tl(22,"table",10)(23,"tr",11)(24,"th",12),iN(25,"Nome"),sg(),Tl(26,"th",12),iN(27,"Tipo"),sg(),Tl(28,"th",12),iN(29,"Padr\xE3o"),sg(),Tl(30,"th",12),iN(31,"Descri\xE7\xE3o"),sg()(),Tl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),iN(36," p-aria-label"),Gl(37,"br"),sg()()(),Tl(38,"td",17)(39,"code",18),iN(40,"string"),sg()(),Tl(41,"td",19),iN(42,"-"),sg(),Tl(43,"td",20)(44,"p"),iN(45,"Define um "),Tl(46,"code"),iN(47,"aria-label"),sg(),iN(48," para o "),Tl(49,"code"),iN(50,"po-badge"),sg()()()(),Tl(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),iN(55," p-color"),Gl(56,"br"),sg()()(),Tl(57,"td",17)(58,"code",18),iN(59,"string"),sg()(),Tl(60,"td",19)(61,"p")(62,"code"),iN(63,"color-07"),sg()()(),Tl(64,"td",20)(65,"em")(66,"strong"),iN(67,"(opcional)"),sg()(),Tl(68,"p"),iN(69,"Determina a cor do "),Tl(70,"code"),iN(71,"po-badge"),sg(),iN(72,". As maneiras de customizar as cores s\xE3o:"),sg(),Tl(73,"ul")(74,"li"),iN(75,"Hexadeximal, por exemplo "),Tl(76,"code"),iN(77,"#c64840"),sg(),iN(78,";"),sg(),Tl(79,"li"),iN(80,"RGB, como "),Tl(81,"code"),iN(82,"rgb(0, 0, 165)"),sg(),iN(83,";"),sg(),Tl(84,"li"),iN(85,"O nome da cor, por exemplo "),Tl(86,"code"),iN(87,"blue"),sg(),iN(88,";"),sg(),Tl(89,"li"),iN(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Tl(91,"ul")(92,"li"),Gl(93,"span",21),Tl(94,"code"),iN(95,"color-01"),sg()(),Tl(96,"li"),Gl(97,"span",22),Tl(98,"code"),iN(99,"color-02"),sg()(),Tl(100,"li"),Gl(101,"span",23),Tl(102,"code"),iN(103,"color-03"),sg()(),Tl(104,"li"),Gl(105,"span",24),Tl(106,"code"),iN(107,"color-04"),sg()(),Tl(108,"li"),Gl(109,"span",25),Tl(110,"code"),iN(111,"color-05"),sg()(),Tl(112,"li"),Gl(113,"span",26),Tl(114,"code"),iN(115,"color-06"),sg()(),Tl(116,"li"),Gl(117,"span",27),Tl(118,"code"),iN(119,"color-07"),sg()(),Tl(120,"li"),Gl(121,"span",28),Tl(122,"code"),iN(123,"color-08"),sg()(),Tl(124,"li"),Gl(125,"span",29),Tl(126,"code"),iN(127,"color-09"),sg()(),Tl(128,"li"),Gl(129,"span",30),Tl(130,"code"),iN(131,"color-10"),sg()(),Tl(132,"li"),Gl(133,"span",31),Tl(134,"code"),iN(135,"color-11"),sg()(),Tl(136,"li"),Gl(137,"span",32),Tl(138,"code"),iN(139,"color-12"),sg()()()()(),Tl(140,"blockquote")(141,"p"),iN(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(143,"strong"),iN(144,"Caption Tag Colors"),sg(),iN(145,":"),sg()(),Tl(146,"ul")(147,"li"),Gl(148,"span",33),Tl(149,"code"),iN(150,"caption-tag-01"),sg(),Gl(151,"span",34),Tl(152,"code"),iN(153,"caption-tag-02"),sg(),Gl(154,"span",35),Tl(155,"code"),iN(156,"caption-tag-03"),sg(),Gl(157,"span",36),Tl(158,"code"),iN(159,"caption-tag-04"),sg(),Gl(160,"span",37),Tl(161,"code"),iN(162,"caption-tag-05"),sg()(),Tl(163,"li"),Gl(164,"span",38),Tl(165,"code"),iN(166,"caption-tag-06"),sg(),Gl(167,"span",39),Tl(168,"code"),iN(169,"caption-tag-07"),sg(),Gl(170,"span",40),Tl(171,"code"),iN(172,"caption-tag-08"),sg(),Gl(173,"span",41),Tl(174,"code"),iN(175,"caption-tag-09"),sg(),Gl(176,"span",42),Tl(177,"code"),iN(178,"caption-tag-10"),sg()(),Tl(179,"li"),Gl(180,"span",43),Tl(181,"code"),iN(182,"caption-tag-11"),sg(),Gl(183,"span",44),Tl(184,"code"),iN(185,"caption-tag-12"),sg(),Gl(186,"span",45),Tl(187,"code"),iN(188,"caption-tag-13"),sg(),Gl(189,"span",46),Tl(190,"code"),iN(191,"caption-tag-14"),sg(),Gl(192,"span",47),Tl(193,"code"),iN(194,"caption-tag-15"),sg()(),Tl(195,"li"),Gl(196,"span",48),Tl(197,"code"),iN(198,"caption-tag-16"),sg(),Gl(199,"span",49),Tl(200,"code"),iN(201,"caption-tag-17"),sg(),Gl(202,"span",50),Tl(203,"code"),iN(204,"caption-tag-18"),sg(),Gl(205,"span",51),Tl(206,"code"),iN(207,"caption-tag-19"),sg(),Gl(208,"span",52),Tl(209,"code"),iN(210,"caption-tag-20"),sg()(),Tl(211,"li"),Gl(212,"span",53),Tl(213,"code"),iN(214,"caption-tag-21"),sg(),Gl(215,"span",54),Tl(216,"code"),iN(217,"caption-tag-22"),sg(),Gl(218,"span",55),Tl(219,"code"),iN(220,"caption-tag-23"),sg(),Gl(221,"span",56),Tl(222,"code"),iN(223,"caption-tag-24"),sg(),Gl(224,"span",57),Tl(225,"code"),iN(226,"caption-tag-25"),sg()(),Tl(227,"li"),Gl(228,"span",58),Tl(229,"code"),iN(230,"caption-tag-26"),sg(),Gl(231,"span",59),Tl(232,"code"),iN(233,"caption-tag-27"),sg(),Gl(234,"span",60),Tl(235,"code"),iN(236,"caption-tag-28"),sg(),Gl(237,"span",61),Tl(238,"code"),iN(239,"caption-tag-29"),sg(),Gl(240,"span",62),Tl(241,"code"),iN(242,"caption-tag-30"),sg()(),Tl(243,"li"),Gl(244,"span",63),Tl(245,"code"),iN(246,"caption-tag-31"),sg(),Gl(247,"span",64),Tl(248,"code"),iN(249,"caption-tag-32"),sg(),Gl(250,"span",65),Tl(251,"code"),iN(252,"caption-tag-33"),sg(),Gl(253,"span",66),Tl(254,"code"),iN(255,"caption-tag-34"),sg(),Gl(256,"span",67),Tl(257,"code"),iN(258,"caption-tag-35"),sg()()(),Tl(259,"p"),iN(260,"Exemplo de uso:"),sg(),Tl(261,"pre")(262,"code"),iN(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),sg()()()(),Tl(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),iN(268," p-icon"),Gl(269,"br"),sg()()(),Tl(270,"td",17)(271,"code",68),iN(272,"PoBadgeIcon"),sg()(),Tl(273,"td",19),iN(274,"-"),sg(),Tl(275,"td",20)(276,"em")(277,"strong"),iN(278,"(opcional)"),sg()(),Tl(279,"p"),iN(280,"\xCDcone exibido no "),Tl(281,"code"),iN(282,"po-badge"),sg(),iN(283,"."),sg(),Tl(284,"p"),iN(285,"Para exibir icone do status atual declare a propriedade "),Tl(286,"code"),iN(287,"p-icon"),sg(),iN(288,". conforme exemplo abaixo:"),sg(),Tl(289,"pre")(290,"code"),iN(291,`<po-badge [p-icon]="true"></po-badge>
`),sg()(),Tl(292,"p"),iN(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(294,"a",69),iN(295,"Biblioteca de \xEDcones"),sg(),iN(296,". conforme exemplo abaixo:"),sg(),Tl(297,"pre")(298,"code"),iN(299,`<po-badge p-icon="an an-user"></po-badge>
`),sg()(),Tl(300,"p"),iN(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(302,"em"),iN(303,"Font Awesome"),sg(),iN(304,", da seguinte forma:"),sg(),Tl(305,"pre")(306,"code"),iN(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),sg()(),Tl(308,"p"),iN(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(310,"code"),iN(311,"TemplateRef"),sg(),iN(312,", conforme exemplo abaixo:"),sg(),Tl(313,"pre")(314,"code"),iN(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()()()(),Tl(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),iN(320," p-show-border"),Gl(321,"br"),sg()()(),Tl(322,"td",17)(323,"code",70),iN(324,"boolean"),sg()(),Tl(325,"td",19),iN(326,"-"),sg(),Tl(327,"td",20)(328,"p"),iN(329,"Exibe uma borda para o "),Tl(330,"code"),iN(331,"po-badge"),sg()(),Tl(332,"blockquote")(333,"p"),iN(334,"Pode personalizar cor da bordar com a propriedade "),Tl(335,"code"),iN(336,"p-color-border"),sg()()()()(),Tl(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),iN(341," p-size"),Gl(342,"br"),sg()()(),Tl(343,"td",17)(344,"code",71),iN(345,"PoBadgeSize"),sg()(),Tl(346,"td",19)(347,"p")(348,"code"),iN(349,"medium"),sg()()(),Tl(350,"td",20)(351,"p"),iN(352,"Define o tamanho do "),Tl(353,"code"),iN(354,"po-badge"),sg()(),Tl(355,"p"),iN(356,"Valores v\xE1lidos:"),sg(),Tl(357,"ul")(358,"li")(359,"code"),iN(360,"small"),sg(),iN(361,": o "),Tl(362,"code"),iN(363,"po-badge"),sg(),iN(364," fica do tamanho padr\xE3o, com 8px de altura.;"),sg(),Tl(365,"li")(366,"code"),iN(367,"medium"),sg(),iN(368,": o "),Tl(369,"code"),iN(370,"po-badge"),sg(),iN(371," fica do tamanho padr\xE3o, com 16px de altura.;"),sg(),Tl(372,"li")(373,"code"),iN(374,"large"),sg(),iN(375,": o "),Tl(376,"code"),iN(377,"po-badge"),sg(),iN(378," fica do tamanho padr\xE3o, com 24px de altura.;"),sg()()()(),Tl(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),iN(383," p-status"),Gl(384,"br"),sg()()(),Tl(385,"td",17)(386,"code",72),iN(387,"PoBadgeStatus"),sg()(),Tl(388,"td",19),iN(389,"-"),sg(),Tl(390,"td",20)(391,"p"),iN(392,"Define o estado do "),Tl(393,"code"),iN(394,"po-badge"),sg()(),Tl(395,"p"),iN(396,"Valores v\xE1lidos:"),sg(),Tl(397,"ul")(398,"li")(399,"code"),iN(400,"positive"),sg(),iN(401,": Define a cor do "),Tl(402,"code"),iN(403,"po-badge"),sg(),iN(404," com a cor de feedback positivo.;"),sg(),Tl(405,"li")(406,"code"),iN(407,"negative"),sg(),iN(408,": Define a cor do "),Tl(409,"code"),iN(410,"po-badge"),sg(),iN(411," com a cor de feedback negative.;"),sg(),Tl(412,"li")(413,"code"),iN(414,"warning"),sg(),iN(415,": Define a cor do "),Tl(416,"code"),iN(417,"po-badge"),sg(),iN(418," com a cor de feedback warning.;"),sg(),Tl(419,"li")(420,"code"),iN(421,"disabled"),sg(),iN(422,": Define a cor do "),Tl(423,"code"),iN(424,"po-badge"),sg(),iN(425," com a cor de feedback disabled;"),sg()()()(),Tl(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),iN(430," p-value"),Gl(431,"br"),sg()()(),Tl(432,"td",17)(433,"code",73),iN(434,"number"),sg()(),Tl(435,"td",19),iN(436,"-"),sg(),Tl(437,"td",20)(438,"p"),iN(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-badge-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),sg()()()),l&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,re,de,ce,ge],encapsulation:2,changeDetection:1})}return a})();var Me=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[DL.forChild(Me),DL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,be]})}return a})();export{$e as DocPoBadgeModule};