import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,dp as co,r as r$1,dq as U0,s,dr as Ele,ds as Mle,dt as H0,du as wle,dv as Sle,dw as xle,dx as Zt,ch as om,a_ as Ue,cg as uY,dy as PR,aF as aY,ae as iY,aG as oY,af as ck,ck as vk,cl as gk,aK as Pe,c2 as Ap,aO as Yo,bT as ha,bB as ga,cr as tr,bC as Vp,aQ as dt,aU as IR,al as lx,J as wl,N as Ul,an as $0,a1 as ut,R as ng,am as pw,P as Pp,S as YE,aq as G0,ap as hw,X as we,as as $l,at as uo,au as fo,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,bw as Ax,aY as cg,bi as Jx,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ye=["reactiveFormData"],ge=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},xle),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Sle),{info:s(r$1({},Sle.info),{base:"#0079b8"})}),neutral:r$1({},wle)},onRoot:s(r$1({},H0.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},H0.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Mle),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Ele),{info:s(r$1({},Ele.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},U0.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},U0.perComponent)}},active:co.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?Zt.AAA:Zt.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(Zt.AAA,false),this.a11yLevel=Zt.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(Zt.AA,false),this.a11yLevel=Zt.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===Zt.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",om.compose([om.required,om.minLength(5),om.maxLength(30)])],address:["",om.compose([om.required,om.minLength(5),om.maxLength(50)])],number:["",om.compose([om.required,om.min(1),om.max(99999)])],email:["",om.required],website:["",om.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(C(Ue),C(uY),C(PR))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&$l(ye,7),a&2){let c;uo(c=fo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we([PR])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=lx();wl(0,"po-widget",1)(1,"form",2),Ul(2,"po-input",3),$0(),Ul(3,"po-email",4),$0(),Ul(4,"po-input",5),$0(),Ul(5,"po-number",6),$0(),Ul(6,"po-url",7),$0(),wl(7,"div",8)(8,"po-button",9),ut("p-click",function(){return o.saveForm()}),ng()()(),wl(9,"po-modal",10,0)(11,"div",8),Ul(12,"po-info",11),ng(),wl(13,"div",8),Ul(14,"po-info",12)(15,"po-info",13),ng(),wl(16,"div",8),Ul(17,"po-info",14)(18,"po-info",15),ng()()(),wl(19,"div",16)(20,"po-radio-group",17),pw("ngModelChange",function(h){return Qy(c),$x(o.theme,h)||(o.theme=h),Jy(h)}),ut("p-change",function(h){return o.changeTheme(h)}),ng(),$0(),wl(21,"po-radio-group",18),pw("ngModelChange",function(h){return Qy(c),$x(o.a11yLevel,h)||(o.a11yLevel=h),Jy(h)}),ut("p-change",function(h){return o.changeA11yLevel(h)}),ng(),$0(),ng();}a&2&&(Pp(),YE("formGroup",o.reactiveForm),Pp(),G0(),Pp(),G0(),Pp(),G0(),Pp(),G0(),Pp(),G0(),Pp(2),YE("p-disabled",!o.reactiveForm.valid),Pp(),YE("p-primary-action",o.modalPrimaryAction),Pp(3),YE("p-value",o.reactiveForm.controls.name.value),Pp(2),YE("p-value",o.reactiveForm.controls.address.value),Pp(),YE("p-value",o.reactiveForm.controls.number.value),Pp(2),YE("p-value",o.reactiveForm.controls.email.value),Pp(),YE("p-value",o.reactiveForm.controls.website.value),Pp(2),hw("ngModel",o.theme),YE("p-options",o.themeOptions),G0(),Pp(),hw("ngModel",o.a11yLevel),YE("p-options",o.a11yLevelOptions),G0());},dependencies:[aY,iY,oY,ck,vk,gk,Pe,Ap,Yo,ha,ga,tr,Vp,dt,IR],encapsulation:2,changeDetection:1})}return m})();var Le=m=>({"docs-sample-code-tabs":m}),be=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Theme Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-widget p-title="Example">
  <form [formGroup]="reactiveForm">
    <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
    </div>
  </form>

  <po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
    <div class="po-row">
      <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
    </div>

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

    <div class="po-row">
      <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

      <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
    </div>
  </po-modal>
</po-widget>

<div class="po-row po-mt-3">
  <po-radio-group
    class="po-md-6"
    name="theme"
    p-label="Theme Type"
    [(ngModel)]="theme"
    [p-options]="themeOptions"
    (p-change)="changeTheme($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-6"
    name="a11ylevel"
    p-label="Acessibility Level"
    [(ngModel)]="a11yLevel"
    [p-options]="a11yLevelOptions"
    (p-change)="changeA11yLevel($event)"
  >
  </po-radio-group>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  a11yLevel: PoThemeA11yEnum;
  a11yLevelStorage = 'po-a11y-AAA';
  reactiveForm: UntypedFormGroup;
  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';

  private a11yChangeListenerAAA: any;
  private a11yChangeListenerAA: any;
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AA', value: 'AA' },
    { label: 'AAA', value: 'AAA' }
  ];

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private poTheme: PoThemeService
  ) {
    this.poTheme.setA11yDefaultSizeSmall(true);

    const _poTheme = this.poTheme.applyTheme();
    this.a11yLevel = this.poTheme.getA11yLevel();

    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme, this.a11yLevel);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
    this.createReactiveForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    if (localStorage.getItem('po-ui-a11y')) {
      this.a11yLevelStorage = localStorage.getItem('po-ui-a11y');
    }

    this.a11yLevel = this.a11yLevelStorage === 'po-a11y-AAA' ? PoThemeA11yEnum.AAA : PoThemeA11yEnum.AA;
    this.changeA11yLevel(this.a11yLevel, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    this.a11yChangeListenerAAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AAA, false);
      this.a11yLevel = PoThemeA11yEnum.AAA;
    };

    this.a11yChangeListenerAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AA, false);
      this.a11yLevel = PoThemeA11yEnum.AA;
    };

    window.addEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.addEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);

    window.removeEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.removeEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
  }

  changeA11yLevel(value: PoThemeA11yEnum, dispatchEvent = true) {
    this.poTheme.setCurrentThemeA11y(value);
    value === 'AA'
      ? localStorage.setItem('po-ui-a11y', 'po-a11y-AA')
      : localStorage.setItem('po-ui-a11y', 'po-a11y-AAA');

    if (value === PoThemeA11yEnum.AA) {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }

    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-a11y'));
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value, this.a11yLevel);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-theme-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return m})();var fe=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoThemeModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do servi\xE7o PoThemeService."),ng()(),wl(7,"h3",3),Ux(8,"Services"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoThemeService"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O servi\xE7o "),wl(15,"code"),Ux(16,"PoThemeService"),ng(),Ux(17," permite customizar as cores do tema padr\xE3o do "),wl(18,"code"),Ux(19,"PO-UI"),ng(),Ux(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),ng(),wl(21,"p"),Ux(22,"O n\xEDvel "),wl(23,"strong"),Ux(24,"AAA"),ng(),Ux(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),wl(26,"strong"),Ux(27,"AA"),ng(),Ux(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),ng(),wl(29,"p"),Ux(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),wl(31,"strong"),Ux(32,"densidade de espa\xE7amentos"),ng(),Ux(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),ng(),wl(34,"blockquote")(35,"p"),Ux(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),wl(37,"code"),Ux(38,"feedback"),ng(),Ux(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),ng()(),wl(40,"blockquote")(41,"p"),Ux(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),wl(43,"a",6),Ux(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),ng(),Ux(45," na aba "),wl(46,"code"),Ux(47,"Guias"),ng(),Ux(48,"."),ng()()(),wl(49,"h3",7),Ux(50,"M\xE9todos"),ng(),wl(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),Ux(57," setTheme "),ng()()()()(),wl(58,"tr",13)(59,"td",13)(60,"p"),Ux(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),ng(),wl(62,"p"),Ux(63,"Este m\xE9todo configura o tema do componente com base no objeto "),wl(64,"code"),Ux(65,"themeConfig"),ng(),Ux(66," fornecido, no "),wl(67,"code"),Ux(68,"themeType"),ng(),Ux(69," e no "),wl(70,"code"),Ux(71,"a11yLevel"),ng(),Ux(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),ng()()()(),wl(73,"h5")(74,"b"),Ux(75,"Par\xE2metros"),ng()(),wl(76,"table",14)(77,"tr",15)(78,"th",16),Ux(79,"Nome"),ng(),wl(80,"th",16),Ux(81,"Tipo"),ng(),wl(82,"th",16),Ux(83,"Descri\xE7\xE3o"),ng()(),wl(84,"tr",9)(85,"td",17),Ux(86," themeConfig"),ng(),wl(87,"td",18)(88,"code",19),Ux(89," PoTheme "),ng()(),wl(90,"td",13)(91,"p"),Ux(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),ng()()(),wl(93,"tr",9)(94,"td",17),Ux(95," themeType"),ng(),wl(96,"td",18)(97,"code",19),Ux(98," PoThemeTypeEnum "),ng()(),wl(99,"td",13)(100,"p"),Ux(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),ng()()(),wl(102,"tr",9)(103,"td",17),Ux(104," a11yLevel"),ng(),wl(105,"td",18)(106,"code",19),Ux(107," PoThemeA11yEnum "),ng()(),wl(108,"td",13)(109,"p"),Ux(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),ng()()(),wl(111,"tr",9)(112,"td",17),Ux(113," persistPreference"),ng(),wl(114,"td",18)(115,"code",19),Ux(116," boolean "),ng()(),wl(117,"td",13)(118,"p"),Ux(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),wl(120,"code"),Ux(121,"true"),ng(),Ux(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),ng()()()(),Ul(123,"br"),wl(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),Ux(130," getA11yLevel "),ng()()()()(),wl(131,"tr",13)(132,"td",13)(133,"p"),Ux(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),wl(135,"code"),Ux(136,"AAA"),ng(),Ux(137," como padr\xE3o."),ng()()()(),wl(138,"h5")(139,"b"),Ux(140,"Retorno"),ng()(),wl(141,"table",14)(142,"tr",15)(143,"th",16),Ux(144,"Tipo"),ng(),wl(145,"th",16),Ux(146,"Descri\xE7\xE3o"),ng()(),wl(147,"tr",9)(148,"td",18)(149,"code",19),Ux(150,"PoThemeA11yEnum"),ng()(),wl(151,"td",13)(152,"p"),Ux(153,"O n\xEDvel de acessibilidade, que pode ser "),wl(154,"code"),Ux(155,"AA"),ng(),Ux(156," ou "),wl(157,"code"),Ux(158,"AAA"),ng(),Ux(159,"."),ng()()()(),Ul(160,"br"),wl(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),Ux(167," setA11yDefaultSizeSmall "),ng()()()()(),wl(168,"tr",13)(169,"td",13)(170,"p"),Ux(171,"Define o tamanho "),wl(172,"code"),Ux(173,"small"),ng(),Ux(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),wl(175,"code"),Ux(176,"AA"),ng(),Ux(177,`. O valor definido \xE9 salvo no
`),wl(178,"code"),Ux(179,"localStorage"),ng(),Ux(180," sob a chave "),wl(181,"code"),Ux(182,"po-default-size"),ng(),Ux(183," e o atributo "),wl(184,"code"),Ux(185,"data-default-size"),ng(),Ux(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),ng(),wl(187,"p"),Ux(188,"Exemplo de uso:"),ng(),wl(189,"pre")(190,"code",20),Ux(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),ng()(),wl(192,"blockquote")(193,"p"),Ux(194,"Para garantir que o tamanho "),wl(195,"code"),Ux(196,"small"),ng(),Ux(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),wl(198,"strong"),Ux(199,"junto com o n\xEDvel de acessibilidade "),wl(200,"code"),Ux(201,"AA"),ng(),Ux(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),ng(),Ux(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),wl(204,"code"),Ux(205,"setDensityMode"),ng(),Ux(206," conforme necess\xE1rio."),ng()()()()(),wl(207,"h5")(208,"b"),Ux(209,"Par\xE2metros"),ng()(),wl(210,"table",14)(211,"tr",15)(212,"th",16),Ux(213,"Nome"),ng(),wl(214,"th",16),Ux(215,"Tipo"),ng(),wl(216,"th",16),Ux(217,"Descri\xE7\xE3o"),ng()(),wl(218,"tr",9)(219,"td",17),Ux(220," enable"),ng(),wl(221,"td",18)(222,"code",19),Ux(223," boolean "),ng()(),wl(224,"td",13)(225,"p"),Ux(226,"Habilita ou desabilita o tamanho "),wl(227,"code"),Ux(228,"small"),ng(),Ux(229," globalmente."),ng()()()(),Ul(230,"br"),wl(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),Ux(237," getDensityMode "),ng()()()()(),wl(238,"tr",13)(239,"td",13)(240,"p"),Ux(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),wl(242,"code"),Ux(243,"medium"),ng(),Ux(244," como padr\xE3o."),ng()()()(),wl(245,"h5")(246,"b"),Ux(247,"Retorno"),ng()(),wl(248,"table",14)(249,"tr",15)(250,"th",16),Ux(251,"Tipo"),ng(),wl(252,"th",16),Ux(253,"Descri\xE7\xE3o"),ng()(),wl(254,"tr",9)(255,"td",18)(256,"code",19),Ux(257,"PoDensityMode"),ng()(),wl(258,"td",13)(259,"p"),Ux(260,"O modo de adensamento, que pode ser "),wl(261,"code"),Ux(262,"small"),ng(),Ux(263," ou "),wl(264,"code"),Ux(265,"medium"),ng(),Ux(266,"."),ng()()()(),Ul(267,"br"),wl(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),Ux(274," setDensityMode "),ng()()()()(),wl(275,"tr",13)(276,"td",13)(277,"p"),Ux(278,"Aplica o modo de adensamento compacto ("),wl(279,"code"),Ux(280,"small"),ng(),Ux(281,") ou espa\xE7oso ("),wl(282,"code"),Ux(283,"medium"),ng(),Ux(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),wl(285,"code"),Ux(286,"localStorage"),ng(),Ux(287,` sob a chave
`),wl(288,"code"),Ux(289,"po-density-mode"),ng(),Ux(290,"."),ng()()()(),wl(291,"h5")(292,"b"),Ux(293,"Par\xE2metros"),ng()(),wl(294,"table",14)(295,"tr",15)(296,"th",16),Ux(297,"Nome"),ng(),wl(298,"th",16),Ux(299,"Tipo"),ng(),wl(300,"th",16),Ux(301,"Descri\xE7\xE3o"),ng()(),wl(302,"tr",9)(303,"td",17),Ux(304," mode"),ng(),wl(305,"td",18)(306,"code",21),Ux(307," 'small' "),ng(),wl(308,"code",22),Ux(309," 'medium' "),ng()(),wl(310,"td",13)(311,"p"),Ux(312,"Define o modo de densidade: "),wl(313,"code"),Ux(314,"small"),ng(),Ux(315," para compacto, "),wl(316,"code"),Ux(317,"medium"),ng(),Ux(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),wl(319,"code"),Ux(320,"medium"),ng(),Ux(321,"."),ng()()()(),Ul(322,"br"),wl(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),Ux(329," persistThemeActive "),ng()()()()(),wl(330,"tr",13)(331,"td",13)(332,"p"),Ux(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),wl(334,"code"),Ux(335,"localStorage"),ng(),Ux(336," para uso em recarregamentos futuros."),ng()()()(),wl(337,"h5")(338,"b"),Ux(339,"Retorno"),ng()(),wl(340,"table",14)(341,"tr",15)(342,"th",16),Ux(343,"Tipo"),ng(),wl(344,"th",16),Ux(345,"Descri\xE7\xE3o"),ng()(),wl(346,"tr",9)(347,"td",18)(348,"code",19),Ux(349,"PoTheme"),ng()(),wl(350,"td",13)(351,"p"),Ux(352,"O tema atualmente aplicado."),ng()()()(),Ul(353,"br"),wl(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),Ux(360," changeCurrentThemeType "),ng()()()()(),wl(361,"tr",13)(362,"td",13)(363,"p"),Ux(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),ng(),wl(365,"p"),Ux(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),ng()()()(),wl(367,"h5")(368,"b"),Ux(369,"Par\xE2metros"),ng()(),wl(370,"table",14)(371,"tr",15)(372,"th",16),Ux(373,"Nome"),ng(),wl(374,"th",16),Ux(375,"Tipo"),ng(),wl(376,"th",16),Ux(377,"Descri\xE7\xE3o"),ng()(),wl(378,"tr",9)(379,"td",17),Ux(380," themeType"),ng(),wl(381,"td",18)(382,"code",19),Ux(383," PoThemeTypeEnum "),ng()(),wl(384,"td",13)(385,"p"),Ux(386,"O tipo de tema a ser aplicado, light ou dark."),ng()()()(),Ul(387,"br"),wl(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),Ux(394," cleanThemeActive "),ng()()()()(),wl(395,"tr",13)(396,"td",13)(397,"p"),Ux(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),ng()()()(),wl(399,"h5")(400,"b"),Ux(401,"Par\xE2metros"),ng()(),wl(402,"table",14)(403,"tr",15)(404,"th",16),Ux(405,"Nome"),ng(),wl(406,"th",16),Ux(407,"Tipo"),ng(),wl(408,"th",16),Ux(409,"Descri\xE7\xE3o"),ng()(),wl(410,"tr",9)(411,"td",17),Ux(412," persistPreference"),ng(),wl(413,"td",18)(414,"code",19),Ux(415," boolean "),ng()(),wl(416,"td",13)(417,"p"),Ux(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),wl(419,"code"),Ux(420,"true"),ng(),Ux(421," para remover, "),wl(422,"code"),Ux(423,"false"),ng(),Ux(424," para manter."),ng()()()(),Ul(425,"br"),wl(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),Ux(432," getThemeActive "),ng()()()()(),wl(433,"tr",13)(434,"td",13)(435,"p"),Ux(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),wl(437,"code"),Ux(438,"localStorage"),ng(),Ux(439,"."),ng()()()(),wl(440,"h5")(441,"b"),Ux(442,"Retorno"),ng()(),wl(443,"table",14)(444,"tr",15)(445,"th",16),Ux(446,"Tipo"),ng(),wl(447,"th",16),Ux(448,"Descri\xE7\xE3o"),ng()(),wl(449,"tr",9)(450,"td",18)(451,"code",19),Ux(452,"PoTheme"),ng()(),wl(453,"td",13)(454,"p"),Ux(455,"Tema ativo."),ng()()()(),Ul(456,"br"),wl(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),Ux(463," setDefaultTheme "),ng()()()()(),wl(464,"tr",13)(465,"td",13)(466,"p"),Ux(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),ng()()()(),wl(468,"h5")(469,"b"),Ux(470,"Par\xE2metros"),ng()(),wl(471,"table",14)(472,"tr",15)(473,"th",16),Ux(474,"Nome"),ng(),wl(475,"th",16),Ux(476,"Tipo"),ng(),wl(477,"th",16),Ux(478,"Descri\xE7\xE3o"),ng()(),wl(479,"tr",9)(480,"td",17),Ux(481," type"),ng(),wl(482,"td",18)(483,"code",19),Ux(484," PoThemeTypeEnum "),ng()(),wl(485,"td",13)(486,"p"),Ux(487,"O tipo de Tema a ser aplicado, light / dark."),ng()()()(),Ul(488,"br"),wl(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),Ux(495," setThemeType "),ng()()()()(),wl(496,"tr",13)(497,"td",13)(498,"p"),Ux(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),ng()()()(),wl(500,"h5")(501,"b"),Ux(502,"Par\xE2metros"),ng()(),wl(503,"table",14)(504,"tr",15)(505,"th",16),Ux(506,"Nome"),ng(),wl(507,"th",16),Ux(508,"Tipo"),ng(),wl(509,"th",16),Ux(510,"Descri\xE7\xE3o"),ng()(),wl(511,"tr",9)(512,"td",17),Ux(513," theme"),ng(),wl(514,"td",18)(515,"code",19),Ux(516," PoTheme "),ng()(),wl(517,"td",13)(518,"p"),Ux(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),ng()()(),wl(520,"tr",9)(521,"td",17),Ux(522," themeType"),ng(),wl(523,"td",18)(524,"code",19),Ux(525," PoThemeTypeEnum "),ng()(),wl(526,"td",13)(527,"p"),Ux(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),ng()()()(),Ul(529,"br"),wl(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),Ux(536," setCurrentThemeType "),ng()()()()(),wl(537,"tr",13)(538,"td",13)(539,"p"),Ux(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),ng()()()(),wl(541,"h5")(542,"b"),Ux(543,"Par\xE2metros"),ng()(),wl(544,"table",14)(545,"tr",15)(546,"th",16),Ux(547,"Nome"),ng(),wl(548,"th",16),Ux(549,"Tipo"),ng(),wl(550,"th",16),Ux(551,"Descri\xE7\xE3o"),ng()(),wl(552,"tr",9)(553,"td",17),Ux(554," themeType"),ng(),wl(555,"td",18)(556,"code",19),Ux(557," PoThemeTypeEnum "),ng()(),wl(558,"td",13)(559,"p"),Ux(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),ng()()()(),Ul(561,"br"),wl(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),Ux(568," setThemeA11y "),ng()()()()(),wl(569,"tr",13)(570,"td",13)(571,"p"),Ux(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),ng()()()(),wl(573,"h5")(574,"b"),Ux(575,"Par\xE2metros"),ng()(),wl(576,"table",14)(577,"tr",15)(578,"th",16),Ux(579,"Nome"),ng(),wl(580,"th",16),Ux(581,"Tipo"),ng(),wl(582,"th",16),Ux(583,"Descri\xE7\xE3o"),ng()(),wl(584,"tr",9)(585,"td",17),Ux(586," theme"),ng(),wl(587,"td",18)(588,"code",19),Ux(589," PoTheme "),ng()(),wl(590,"td",13)(591,"p"),Ux(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),ng()()(),wl(593,"tr",9)(594,"td",17),Ux(595," a11y"),ng(),wl(596,"td",18)(597,"code",19),Ux(598," PoThemeA11yEnum "),ng()(),wl(599,"td",13)(600,"p"),Ux(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),ng()()()(),Ul(602,"br"),wl(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),Ux(609," setCurrentThemeA11y "),ng()()()()(),wl(610,"tr",13)(611,"td",13)(612,"p"),Ux(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),ng()()()(),wl(614,"h5")(615,"b"),Ux(616,"Par\xE2metros"),ng()(),wl(617,"table",14)(618,"tr",15)(619,"th",16),Ux(620,"Nome"),ng(),wl(621,"th",16),Ux(622,"Tipo"),ng(),wl(623,"th",16),Ux(624,"Descri\xE7\xE3o"),ng()(),wl(625,"tr",9)(626,"td",17),Ux(627," a11y"),ng(),wl(628,"td",18)(629,"code",19),Ux(630," PoThemeA11yEnum "),ng()(),wl(631,"td",13)(632,"p"),Ux(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),ng()()()(),Ul(634,"br"),wl(635,"h3"),Ux(636,"Interfaces"),ng(),wl(637,"h4",23)(638,"code",5),Ux(639,"PoThemeColor"),ng()(),wl(640,"div",2)(641,"p"),Ux(642,"Interface para representar as cores do tema."),ng()(),wl(643,"h4",7),Ux(644,"Propriedades"),ng(),wl(645,"table",14)(646,"tr",15)(647,"th",16),Ux(648,"Nome"),ng(),wl(649,"th",16),Ux(650,"Tipo"),ng(),wl(651,"th",16),Ux(652,"Descri\xE7\xE3o"),ng()(),wl(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),Ux(657," action"),Ul(658,"br"),ng()()(),wl(659,"td",18)(660,"code",24),Ux(661,"PoThemeColorAction"),ng()(),wl(662,"td",13)(663,"em")(664,"strong"),Ux(665,"(opcional)"),ng()(),wl(666,"p"),Ux(667,"Cores da Action a serem aplicadas."),ng(),wl(668,"p"),Ux(669,"Exemplo de uso:"),ng(),wl(670,"pre")(671,"code",25),Ux(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),ng()()()(),wl(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),Ux(677," brand"),Ul(678,"br"),ng()()(),wl(679,"td",18)(680,"code",26),Ux(681,"poThemeColorBrand"),ng()(),wl(682,"td",13)(683,"em")(684,"strong"),Ux(685,"(opcional)"),ng()(),wl(686,"p"),Ux(687,"Cores da Brand a serem aplicadas."),ng(),wl(688,"p"),Ux(689,"Exemplo de uso:"),ng(),wl(690,"pre")(691,"code",20),Ux(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),ng()()()(),wl(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),Ux(697," categorical"),Ul(698,"br"),ng()()(),wl(699,"td",18)(700,"code",27),Ux(701,"PoThemeColorCategorical"),ng()(),wl(702,"td",13)(703,"em")(704,"strong"),Ux(705,"(opcional)"),ng()(),wl(706,"p"),Ux(707,"Cores da Categorical a serem aplicadas."),ng(),wl(708,"p"),Ux(709,"Exemplo de uso:"),ng(),wl(710,"pre")(711,"code",20),Ux(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),ng()()()(),wl(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),Ux(717," categorical-overlay"),Ul(718,"br"),ng()()(),wl(719,"td",18)(720,"code",27),Ux(721,"PoThemeColorCategorical"),ng()(),wl(722,"td",13)(723,"em")(724,"strong"),Ux(725,"(opcional)"),ng()(),wl(726,"p"),Ux(727,"Cores da Categorical a serem aplicadas."),ng(),wl(728,"p"),Ux(729,"Exemplo de uso:"),ng(),wl(730,"pre")(731,"code",20),Ux(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),ng()()()(),wl(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),Ux(737," neutral"),Ul(738,"br"),ng()()(),wl(739,"td",18)(740,"code",28),Ux(741,"PoThemeColorNeutral"),ng()(),wl(742,"td",13)(743,"em")(744,"strong"),Ux(745,"(opcional)"),ng()(),wl(746,"p"),Ux(747,"Cores Neutrals a serem aplicadas."),ng(),wl(748,"p"),Ux(749,"Exemplo de uso:"),ng(),wl(750,"pre")(751,"code",20),Ux(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),ng()()()()(),wl(753,"h4",23)(754,"code",5),Ux(755,"PoThemeColorAction"),ng()(),wl(756,"div",2)(757,"p"),Ux(758,"Interface para as cores de a\xE7\xE3o do tema."),ng()(),wl(759,"h4",7),Ux(760,"Propriedades"),ng(),wl(761,"table",14)(762,"tr",15)(763,"th",16),Ux(764,"Nome"),ng(),wl(765,"th",16),Ux(766,"Tipo"),ng(),wl(767,"th",16),Ux(768,"Descri\xE7\xE3o"),ng()(),wl(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),Ux(773," default"),Ul(774,"br"),ng()()(),wl(775,"td",18)(776,"code",29),Ux(777,"string"),ng()(),wl(778,"td",13)(779,"em")(780,"strong"),Ux(781,"(opcional)"),ng()(),wl(782,"p"),Ux(783,"Cores da Action 'Default'."),ng(),wl(784,"p"),Ux(785,"Exemplo de uso:"),ng(),wl(786,"pre")(787,"code",20),Ux(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),ng()()()(),wl(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),Ux(793," disabled"),Ul(794,"br"),ng()()(),wl(795,"td",18)(796,"code",29),Ux(797,"string"),ng()(),wl(798,"td",13)(799,"em")(800,"strong"),Ux(801,"(opcional)"),ng()(),wl(802,"p"),Ux(803,"Cores da Action de 'disabled'."),ng(),wl(804,"p"),Ux(805,"Exemplo de uso:"),ng(),wl(806,"pre")(807,"code",20),Ux(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),ng()()()(),wl(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),Ux(813," focus"),Ul(814,"br"),ng()()(),wl(815,"td",18)(816,"code",29),Ux(817,"string"),ng()(),wl(818,"td",13)(819,"em")(820,"strong"),Ux(821,"(opcional)"),ng()(),wl(822,"p"),Ux(823,"Cores da Action para 'focus'."),ng(),wl(824,"p"),Ux(825,"Exemplo de uso:"),ng(),wl(826,"pre")(827,"code",20),Ux(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),ng()()()(),wl(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),Ux(833," hover"),Ul(834,"br"),ng()()(),wl(835,"td",18)(836,"code",29),Ux(837,"string"),ng()(),wl(838,"td",13)(839,"em")(840,"strong"),Ux(841,"(opcional)"),ng()(),wl(842,"p"),Ux(843,"Cores da Action para 'hover'."),ng(),wl(844,"p"),Ux(845,"Exemplo de uso:"),ng(),wl(846,"pre")(847,"code",20),Ux(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),ng()()()(),wl(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),Ux(853," pressed"),Ul(854,"br"),ng()()(),wl(855,"td",18)(856,"code",29),Ux(857,"string"),ng()(),wl(858,"td",13)(859,"em")(860,"strong"),Ux(861,"(opcional)"),ng()(),wl(862,"p"),Ux(863,"Cores da Action para 'pressed'."),ng(),wl(864,"p"),Ux(865,"Exemplo de uso:"),ng(),wl(866,"pre")(867,"code",20),Ux(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),ng()()()()(),wl(869,"h4",23)(870,"code",5),Ux(871,"PoThemeColorNeutral"),ng()(),wl(872,"div",2)(873,"p"),Ux(874,"Interface para as cores neutras do tema."),ng()(),wl(875,"h4",7),Ux(876,"Propriedades"),ng(),wl(877,"table",14)(878,"tr",15)(879,"th",16),Ux(880,"Nome"),ng(),wl(881,"th",16),Ux(882,"Tipo"),ng(),wl(883,"th",16),Ux(884,"Descri\xE7\xE3o"),ng()(),wl(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),Ux(889," dark"),Ul(890,"br"),ng()()(),wl(891,"td",18)(892,"code",30),Ux(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),ng()(),wl(894,"td",13)(895,"em")(896,"strong"),Ux(897,"(opcional)"),ng()(),wl(898,"p"),Ux(899,"Cores Neutrals do tipo 'dark'."),ng(),wl(900,"p"),Ux(901,"Exemplo de uso:"),ng(),wl(902,"pre")(903,"code",20),Ux(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),ng()()()(),wl(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),Ux(909," light"),Ul(910,"br"),ng()()(),wl(911,"td",18)(912,"code",31),Ux(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),ng()(),wl(914,"td",13)(915,"em")(916,"strong"),Ux(917,"(opcional)"),ng()(),wl(918,"p"),Ux(919,"Cores Neutrals do tipo 'light'."),ng(),wl(920,"p"),Ux(921,"Exemplo de uso:"),ng(),wl(922,"pre")(923,"code",20),Ux(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),ng()()()(),wl(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),Ux(929," mid"),Ul(930,"br"),ng()()(),wl(931,"td",18)(932,"code",32),Ux(933,`{ '40'?: string; '60'?: string;
}`),ng()(),wl(934,"td",13)(935,"em")(936,"strong"),Ux(937,"(opcional)"),ng()(),wl(938,"p"),Ux(939,"Cores Neutrals do tipo 'mid'."),ng(),wl(940,"p"),Ux(941,"Exemplo de uso:"),ng(),wl(942,"pre")(943,"code",20),Ux(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),ng()()()()(),wl(945,"h4",23)(946,"code",5),Ux(947,"PoThemeTokens"),ng()(),wl(948,"div",2)(949,"p"),Ux(950,"Interface para o tema da aplica\xE7\xE3o."),ng()(),wl(951,"h4",23)(952,"code",5),Ux(953,"PoThemeToken"),ng()(),wl(954,"div",2)(955,"p"),Ux(956,"Interface para os tokens do Tema."),ng()(),wl(957,"h4",7),Ux(958,"Propriedades"),ng(),wl(959,"table",14)(960,"tr",15)(961,"th",16),Ux(962,"Nome"),ng(),wl(963,"th",16),Ux(964,"Tipo"),ng(),wl(965,"th",16),Ux(966,"Descri\xE7\xE3o"),ng()(),wl(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),Ux(971," color"),Ul(972,"br"),ng()()(),wl(973,"td",18)(974,"code",33),Ux(975,"PoThemeColor"),ng()(),wl(976,"td",13)(977,"em")(978,"strong"),Ux(979,"(opcional)"),ng()(),wl(980,"p"),Ux(981,"Tokens do tipo 'color'"),ng()()(),wl(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),Ux(986," onRoot"),Ul(987,"br"),ng()()(),wl(988,"td",18)(989,"code",34),Ux(990,"DynamicProperties"),ng()(),wl(991,"td",13)(992,"em")(993,"strong"),Ux(994,"(opcional)"),ng()(),wl(995,"p"),Ux(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),wl(997,"code"),Ux(998,":root"),ng()(),wl(999,"p"),Ux(1e3,"Exemplo de uso:"),ng(),wl(1001,"pre")(1002,"code",20),Ux(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),ng()()()(),wl(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),Ux(1008," perComponent"),Ul(1009,"br"),ng()()(),wl(1010,"td",18)(1011,"code",34),Ux(1012,"DynamicProperties"),ng()(),wl(1013,"td",13)(1014,"em")(1015,"strong"),Ux(1016,"(opcional)"),ng()(),wl(1017,"p"),Ux(1018,"Tokens do tipo 'perComponent'"),ng(),wl(1019,"p"),Ux(1020,"Exemplo de uso:"),ng(),wl(1021,"pre")(1022,"code",20),Ux(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),ng()()()()(),wl(1024,"h4",23)(1025,"code",5),Ux(1026,"PoTheme"),ng()(),wl(1027,"div",2)(1028,"p"),Ux(1029,"Interface para o m\xE9todo "),wl(1030,"code"),Ux(1031,"setTheme()"),ng(),Ux(1032,"."),ng()(),wl(1033,"h4",7),Ux(1034,"Propriedades"),ng(),wl(1035,"table",14)(1036,"tr",15)(1037,"th",16),Ux(1038,"Nome"),ng(),wl(1039,"th",16),Ux(1040,"Tipo"),ng(),wl(1041,"th",16),Ux(1042,"Descri\xE7\xE3o"),ng()(),wl(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),Ux(1047," active"),Ul(1048,"br"),ng()()(),wl(1049,"td",18)(1050,"code",35),Ux(1051,"PoThemeTypeEnum "),ng(),wl(1052,"code",36),Ux(1053," PoThemeActive"),ng()(),wl(1054,"td",13)(1055,"em")(1056,"strong"),Ux(1057,"(opcional)"),ng()(),wl(1058,"p"),Ux(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),ng()()(),wl(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),Ux(1064," name"),Ul(1065,"br"),ng()()(),wl(1066,"td",18)(1067,"code",29),Ux(1068,"string"),ng()(),wl(1069,"td",13)(1070,"p"),Ux(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),ng()()(),wl(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),Ux(1076," type"),Ul(1077,"br"),ng()()(),wl(1078,"td",18)(1079,"code",37),Ux(1080,"PoThemeType "),ng(),wl(1081,"code",38),Ux(1082," Array<PoThemeType>"),ng()(),wl(1083,"td",13)(1084,"p"),Ux(1085,"Tipo de tema:"),ng(),wl(1086,"ul")(1087,"li"),Ux(1088,"light"),ng(),wl(1089,"li"),Ux(1090,"dark"),ng()()()()(),wl(1091,"h3"),Ux(1092,"Enums"),ng(),wl(1093,"h4",4)(1094,"code",5),Ux(1095,"PoThemeA11yEnum"),ng()(),wl(1096,"div",2)(1097,"p"),Ux(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),ng(),wl(1099,"pre")(1100,"code"),Ux(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),ng()()(),wl(1102,"h4",7),Ux(1103,"Propriedades"),ng(),wl(1104,"table",14)(1105,"tr",15)(1106,"th",16),Ux(1107,"Nome"),ng(),wl(1108,"th",16),Ux(1109,"Descri\xE7\xE3o"),ng()(),wl(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),Ux(1114," AA"),Ul(1115,"br"),ng()()(),wl(1116,"td",13)(1117,"p"),Ux(1118,"N\xEDvel de acessibilidade AA."),ng(),wl(1119,"ul")(1120,"li"),Ux(1121,"Define a espessura do "),wl(1122,"code"),Ux(1123,"outline"),ng(),Ux(1124," para "),wl(1125,"strong"),Ux(1126,"2px"),ng(),Ux(1127,"."),ng(),wl(1128,"li"),Ux(1129,"Disponibiliza o tamanho "),wl(1130,"code"),Ux(1131,"small"),ng(),Ux(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),ng()()()(),wl(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),Ux(1137," AAA"),Ul(1138,"br"),ng()()(),wl(1139,"td",13)(1140,"p"),Ux(1141,"N\xEDvel de acessibilidade AAA."),ng(),wl(1142,"ul")(1143,"li"),Ux(1144,"Define a espessura do "),wl(1145,"code"),Ux(1146,"outline"),ng(),Ux(1147," para "),wl(1148,"strong"),Ux(1149,"4px"),ng(),Ux(1150,"."),ng(),wl(1151,"li"),Ux(1152,"N\xE3o disponibiliza o tamanho "),wl(1153,"code"),Ux(1154,"small"),ng(),Ux(1155," para componentes de formul\xE1rio."),ng()()()()(),wl(1156,"h4",4)(1157,"code",5),Ux(1158,"PoThemeTypeEnum"),ng()(),wl(1159,"div",2)(1160,"p"),Ux(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),ng(),wl(1162,"pre")(1163,"code"),Ux(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),ng()()(),wl(1165,"h4",7),Ux(1166,"Propriedades"),ng(),wl(1167,"table",14)(1168,"tr",15)(1169,"th",16),Ux(1170,"Nome"),ng(),wl(1171,"th",16),Ux(1172,"Descri\xE7\xE3o"),ng()(),wl(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),Ux(1177," light"),Ul(1178,"br"),ng()()(),wl(1179,"td",13)(1180,"p"),Ux(1181,"Define o tema como claro."),ng()()(),wl(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),Ux(1186," dark"),Ul(1187,"br"),ng()()(),wl(1188,"td",13)(1189,"p"),Ux(1190,"Define o tema como escuro."),ng()()()()());},encapsulation:2})}return m})();var Te=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(C(Xn),C(Cn))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-theme-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-theme-labs-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,be,fe],encapsulation:2})}return m})();var Fe=[{path:"",component:Te}],Ae=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[vL.forChild(Fe),vL]})}return m})();var pt=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[u5,Ae]})}return m})();export{pt as DocPoThemeModule};