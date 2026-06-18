import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,dO as vo,c as r$1,dP as av,s,dQ as Kde,dR as Yde,dS as rv,dT as Wde,dU as qde,dV as Ude,dW as ni,cN as lm,ae as Be,cM as nY,dX as P3,aX as J9,aF as K9,aY as X9,aG as Dk,cQ as Rk,cR as Tk,b0 as Qt,cz as Ez,b4 as F3,cp as Uhe,c8 as Pde,cX as O3,c9 as Qhe,b6 as Yo,ba as bNe,aB as Ex,H as Sl,M as Wl,aN as JA,a1 as ht,O as sg,aM as Ew,z as Vp,T as tw,aP as t0,aO as Dw,X as we$1,av as ql,aw as lo,ax as uo,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,ar as Hx,au as fg,bs as dN,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var Ce=["reactiveFormData"],be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Ude),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},qde),{info:s(r$1({},qde.info),{base:"#0079b8"})}),neutral:r$1({},Wde)},onRoot:s(r$1({},rv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},rv.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Yde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Kde),{info:s(r$1({},Kde.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},av.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},av.perComponent)}},active:vo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?ni.AAA:ni.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(ni.AAA,false),this.a11yLevel=ni.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(ni.AA,false),this.a11yLevel=ni.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===ni.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(C(Be),C(nY),C(P3))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&ql(Ce,7),a&2){let c;lo(c=uo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we$1([P3])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=Ex();Sl(0,"po-widget",1)(1,"form",2),Wl(2,"po-input",3),JA(),Wl(3,"po-email",4),JA(),Wl(4,"po-input",5),JA(),Wl(5,"po-number",6),JA(),Wl(6,"po-url",7),JA(),Sl(7,"div",8)(8,"po-button",9),ht("p-click",function(){return o.saveForm()}),sg()()(),Sl(9,"po-modal",10,0)(11,"div",8),Wl(12,"po-info",11),sg(),Sl(13,"div",8),Wl(14,"po-info",12)(15,"po-info",13),sg(),Sl(16,"div",8),Wl(17,"po-info",14)(18,"po-info",15),sg()()(),Sl(19,"div",16)(20,"po-radio-group",17),Ew("ngModelChange",function(h){return Xy(c),tN(o.theme,h)||(o.theme=h),Qy(h)}),ht("p-change",function(h){return o.changeTheme(h)}),sg(),JA(),Sl(21,"po-radio-group",18),Ew("ngModelChange",function(h){return Xy(c),tN(o.a11yLevel,h)||(o.a11yLevel=h),Qy(h)}),ht("p-change",function(h){return o.changeA11yLevel(h)}),sg(),JA(),sg();}a&2&&(Vp(),tw("formGroup",o.reactiveForm),Vp(),t0(),Vp(),t0(),Vp(),t0(),Vp(),t0(),Vp(),t0(),Vp(2),tw("p-disabled",!o.reactiveForm.valid),Vp(),tw("p-primary-action",o.modalPrimaryAction),Vp(3),tw("p-value",o.reactiveForm.controls.name.value),Vp(2),tw("p-value",o.reactiveForm.controls.address.value),Vp(),tw("p-value",o.reactiveForm.controls.number.value),Vp(2),tw("p-value",o.reactiveForm.controls.email.value),Vp(),tw("p-value",o.reactiveForm.controls.website.value),Vp(2),Dw("ngModel",o.theme),tw("p-options",o.themeOptions),t0(),Vp(),Dw("ngModel",o.a11yLevel),tw("p-options",o.a11yLevelOptions),t0());},dependencies:[J9,K9,X9,Dk,Rk,Tk,Qt,Ez,F3,Uhe,Pde,O3,Qhe,Yo,bNe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m}),fe=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Theme Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-widget p-title="Example">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-theme-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return m})();var Te=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoThemeModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do servi\xE7o PoThemeService."),sg()(),Sl(7,"h3",3),Jx(8,"Services"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoThemeService"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O servi\xE7o "),Sl(15,"code"),Jx(16,"PoThemeService"),sg(),Jx(17," permite customizar as cores do tema padr\xE3o do "),Sl(18,"code"),Jx(19,"PO-UI"),sg(),Jx(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),sg(),Sl(21,"p"),Jx(22,"O n\xEDvel "),Sl(23,"strong"),Jx(24,"AAA"),sg(),Jx(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Sl(26,"strong"),Jx(27,"AA"),sg(),Jx(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),sg(),Sl(29,"p"),Jx(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),Sl(31,"strong"),Jx(32,"densidade de espa\xE7amentos"),sg(),Jx(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),sg(),Sl(34,"blockquote")(35,"p"),Jx(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),Sl(37,"code"),Jx(38,"feedback"),sg(),Jx(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),sg()(),Sl(40,"blockquote")(41,"p"),Jx(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Sl(43,"a",6),Jx(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),sg(),Jx(45," na aba "),Sl(46,"code"),Jx(47,"Guias"),sg(),Jx(48,"."),sg()()(),Sl(49,"h3",7),Jx(50,"M\xE9todos"),sg(),Sl(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),Jx(57," setTheme "),sg()()()()(),Sl(58,"tr",13)(59,"td",13)(60,"p"),Jx(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),sg(),Sl(62,"p"),Jx(63,"Este m\xE9todo configura o tema do componente com base no objeto "),Sl(64,"code"),Jx(65,"themeConfig"),sg(),Jx(66," fornecido, no "),Sl(67,"code"),Jx(68,"themeType"),sg(),Jx(69," e no "),Sl(70,"code"),Jx(71,"a11yLevel"),sg(),Jx(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),sg()()()(),Sl(73,"h5")(74,"b"),Jx(75,"Par\xE2metros"),sg()(),Sl(76,"table",14)(77,"tr",15)(78,"th",16),Jx(79,"Nome"),sg(),Sl(80,"th",16),Jx(81,"Tipo"),sg(),Sl(82,"th",16),Jx(83,"Descri\xE7\xE3o"),sg()(),Sl(84,"tr",9)(85,"td",17),Jx(86," themeConfig"),sg(),Sl(87,"td",18)(88,"code",19),Jx(89," PoTheme "),sg()(),Sl(90,"td",13)(91,"p"),Jx(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),sg()()(),Sl(93,"tr",9)(94,"td",17),Jx(95," themeType"),sg(),Sl(96,"td",18)(97,"code",19),Jx(98," PoThemeTypeEnum "),sg()(),Sl(99,"td",13)(100,"p"),Jx(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),sg()()(),Sl(102,"tr",9)(103,"td",17),Jx(104," a11yLevel"),sg(),Sl(105,"td",18)(106,"code",19),Jx(107," PoThemeA11yEnum "),sg()(),Sl(108,"td",13)(109,"p"),Jx(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),sg()()(),Sl(111,"tr",9)(112,"td",17),Jx(113," persistPreference"),sg(),Sl(114,"td",18)(115,"code",19),Jx(116," boolean "),sg()(),Sl(117,"td",13)(118,"p"),Jx(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Sl(120,"code"),Jx(121,"true"),sg(),Jx(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),sg()()()(),Wl(123,"br"),Sl(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),Jx(130," getA11yLevel "),sg()()()()(),Sl(131,"tr",13)(132,"td",13)(133,"p"),Jx(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Sl(135,"code"),Jx(136,"AAA"),sg(),Jx(137," como padr\xE3o."),sg()()()(),Sl(138,"h5")(139,"b"),Jx(140,"Retorno"),sg()(),Sl(141,"table",14)(142,"tr",15)(143,"th",16),Jx(144,"Tipo"),sg(),Sl(145,"th",16),Jx(146,"Descri\xE7\xE3o"),sg()(),Sl(147,"tr",9)(148,"td",18)(149,"code",19),Jx(150,"PoThemeA11yEnum"),sg()(),Sl(151,"td",13)(152,"p"),Jx(153,"O n\xEDvel de acessibilidade, que pode ser "),Sl(154,"code"),Jx(155,"AA"),sg(),Jx(156," ou "),Sl(157,"code"),Jx(158,"AAA"),sg(),Jx(159,"."),sg()()()(),Wl(160,"br"),Sl(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),Jx(167," setA11yDefaultSizeSmall "),sg()()()()(),Sl(168,"tr",13)(169,"td",13)(170,"p"),Jx(171,"Define o tamanho "),Sl(172,"code"),Jx(173,"small"),sg(),Jx(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Sl(175,"code"),Jx(176,"AA"),sg(),Jx(177,`. O valor definido \xE9 salvo no
`),Sl(178,"code"),Jx(179,"localStorage"),sg(),Jx(180," sob a chave "),Sl(181,"code"),Jx(182,"po-default-size"),sg(),Jx(183," e o atributo "),Sl(184,"code"),Jx(185,"data-default-size"),sg(),Jx(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),sg(),Sl(187,"p"),Jx(188,"Exemplo de uso:"),sg(),Sl(189,"pre")(190,"code",20),Jx(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),sg()(),Sl(192,"blockquote")(193,"p"),Jx(194,"Para garantir que o tamanho "),Sl(195,"code"),Jx(196,"small"),sg(),Jx(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Sl(198,"strong"),Jx(199,"junto com o n\xEDvel de acessibilidade "),Sl(200,"code"),Jx(201,"AA"),sg(),Jx(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),sg(),Jx(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Sl(204,"code"),Jx(205,"setDensityMode"),sg(),Jx(206," conforme necess\xE1rio."),sg()()()()(),Sl(207,"h5")(208,"b"),Jx(209,"Par\xE2metros"),sg()(),Sl(210,"table",14)(211,"tr",15)(212,"th",16),Jx(213,"Nome"),sg(),Sl(214,"th",16),Jx(215,"Tipo"),sg(),Sl(216,"th",16),Jx(217,"Descri\xE7\xE3o"),sg()(),Sl(218,"tr",9)(219,"td",17),Jx(220," enable"),sg(),Sl(221,"td",18)(222,"code",19),Jx(223," boolean "),sg()(),Sl(224,"td",13)(225,"p"),Jx(226,"Habilita ou desabilita o tamanho "),Sl(227,"code"),Jx(228,"small"),sg(),Jx(229," globalmente."),sg()()()(),Wl(230,"br"),Sl(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),Jx(237," getDensityMode "),sg()()()()(),Sl(238,"tr",13)(239,"td",13)(240,"p"),Jx(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Sl(242,"code"),Jx(243,"medium"),sg(),Jx(244," como padr\xE3o."),sg()()()(),Sl(245,"h5")(246,"b"),Jx(247,"Retorno"),sg()(),Sl(248,"table",14)(249,"tr",15)(250,"th",16),Jx(251,"Tipo"),sg(),Sl(252,"th",16),Jx(253,"Descri\xE7\xE3o"),sg()(),Sl(254,"tr",9)(255,"td",18)(256,"code",19),Jx(257,"PoDensityMode"),sg()(),Sl(258,"td",13)(259,"p"),Jx(260,"O modo de adensamento, que pode ser "),Sl(261,"code"),Jx(262,"small"),sg(),Jx(263," ou "),Sl(264,"code"),Jx(265,"medium"),sg(),Jx(266,"."),sg()()()(),Wl(267,"br"),Sl(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),Jx(274," setDensityMode "),sg()()()()(),Sl(275,"tr",13)(276,"td",13)(277,"p"),Jx(278,"Aplica o modo de adensamento compacto ("),Sl(279,"code"),Jx(280,"small"),sg(),Jx(281,") ou espa\xE7oso ("),Sl(282,"code"),Jx(283,"medium"),sg(),Jx(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Sl(285,"code"),Jx(286,"localStorage"),sg(),Jx(287,` sob a chave
`),Sl(288,"code"),Jx(289,"po-density-mode"),sg(),Jx(290,"."),sg()()()(),Sl(291,"h5")(292,"b"),Jx(293,"Par\xE2metros"),sg()(),Sl(294,"table",14)(295,"tr",15)(296,"th",16),Jx(297,"Nome"),sg(),Sl(298,"th",16),Jx(299,"Tipo"),sg(),Sl(300,"th",16),Jx(301,"Descri\xE7\xE3o"),sg()(),Sl(302,"tr",9)(303,"td",17),Jx(304," mode"),sg(),Sl(305,"td",18)(306,"code",21),Jx(307," 'small' "),sg(),Sl(308,"code",22),Jx(309," 'medium' "),sg()(),Sl(310,"td",13)(311,"p"),Jx(312,"Define o modo de densidade: "),Sl(313,"code"),Jx(314,"small"),sg(),Jx(315," para compacto, "),Sl(316,"code"),Jx(317,"medium"),sg(),Jx(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Sl(319,"code"),Jx(320,"medium"),sg(),Jx(321,"."),sg()()()(),Wl(322,"br"),Sl(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),Jx(329," persistThemeActive "),sg()()()()(),Sl(330,"tr",13)(331,"td",13)(332,"p"),Jx(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Sl(334,"code"),Jx(335,"localStorage"),sg(),Jx(336," para uso em recarregamentos futuros."),sg()()()(),Sl(337,"h5")(338,"b"),Jx(339,"Retorno"),sg()(),Sl(340,"table",14)(341,"tr",15)(342,"th",16),Jx(343,"Tipo"),sg(),Sl(344,"th",16),Jx(345,"Descri\xE7\xE3o"),sg()(),Sl(346,"tr",9)(347,"td",18)(348,"code",19),Jx(349,"PoTheme"),sg()(),Sl(350,"td",13)(351,"p"),Jx(352,"O tema atualmente aplicado."),sg()()()(),Wl(353,"br"),Sl(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),Jx(360," changeCurrentThemeType "),sg()()()()(),Sl(361,"tr",13)(362,"td",13)(363,"p"),Jx(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),sg(),Sl(365,"p"),Jx(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),sg()()()(),Sl(367,"h5")(368,"b"),Jx(369,"Par\xE2metros"),sg()(),Sl(370,"table",14)(371,"tr",15)(372,"th",16),Jx(373,"Nome"),sg(),Sl(374,"th",16),Jx(375,"Tipo"),sg(),Sl(376,"th",16),Jx(377,"Descri\xE7\xE3o"),sg()(),Sl(378,"tr",9)(379,"td",17),Jx(380," themeType"),sg(),Sl(381,"td",18)(382,"code",19),Jx(383," PoThemeTypeEnum "),sg()(),Sl(384,"td",13)(385,"p"),Jx(386,"O tipo de tema a ser aplicado, light ou dark."),sg()()()(),Wl(387,"br"),Sl(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),Jx(394," cleanThemeActive "),sg()()()()(),Sl(395,"tr",13)(396,"td",13)(397,"p"),Jx(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),sg()()()(),Sl(399,"h5")(400,"b"),Jx(401,"Par\xE2metros"),sg()(),Sl(402,"table",14)(403,"tr",15)(404,"th",16),Jx(405,"Nome"),sg(),Sl(406,"th",16),Jx(407,"Tipo"),sg(),Sl(408,"th",16),Jx(409,"Descri\xE7\xE3o"),sg()(),Sl(410,"tr",9)(411,"td",17),Jx(412," persistPreference"),sg(),Sl(413,"td",18)(414,"code",19),Jx(415," boolean "),sg()(),Sl(416,"td",13)(417,"p"),Jx(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),Sl(419,"code"),Jx(420,"true"),sg(),Jx(421," para remover, "),Sl(422,"code"),Jx(423,"false"),sg(),Jx(424," para manter."),sg()()()(),Wl(425,"br"),Sl(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),Jx(432," getThemeActive "),sg()()()()(),Sl(433,"tr",13)(434,"td",13)(435,"p"),Jx(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),Sl(437,"code"),Jx(438,"localStorage"),sg(),Jx(439,"."),sg()()()(),Sl(440,"h5")(441,"b"),Jx(442,"Retorno"),sg()(),Sl(443,"table",14)(444,"tr",15)(445,"th",16),Jx(446,"Tipo"),sg(),Sl(447,"th",16),Jx(448,"Descri\xE7\xE3o"),sg()(),Sl(449,"tr",9)(450,"td",18)(451,"code",19),Jx(452,"PoTheme"),sg()(),Sl(453,"td",13)(454,"p"),Jx(455,"Tema ativo."),sg()()()(),Wl(456,"br"),Sl(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),Jx(463," setDefaultTheme "),sg()()()()(),Sl(464,"tr",13)(465,"td",13)(466,"p"),Jx(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),sg()()()(),Sl(468,"h5")(469,"b"),Jx(470,"Par\xE2metros"),sg()(),Sl(471,"table",14)(472,"tr",15)(473,"th",16),Jx(474,"Nome"),sg(),Sl(475,"th",16),Jx(476,"Tipo"),sg(),Sl(477,"th",16),Jx(478,"Descri\xE7\xE3o"),sg()(),Sl(479,"tr",9)(480,"td",17),Jx(481," type"),sg(),Sl(482,"td",18)(483,"code",19),Jx(484," PoThemeTypeEnum "),sg()(),Sl(485,"td",13)(486,"p"),Jx(487,"O tipo de Tema a ser aplicado, light / dark."),sg()()()(),Wl(488,"br"),Sl(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),Jx(495," setThemeType "),sg()()()()(),Sl(496,"tr",13)(497,"td",13)(498,"p"),Jx(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),sg()()()(),Sl(500,"h5")(501,"b"),Jx(502,"Par\xE2metros"),sg()(),Sl(503,"table",14)(504,"tr",15)(505,"th",16),Jx(506,"Nome"),sg(),Sl(507,"th",16),Jx(508,"Tipo"),sg(),Sl(509,"th",16),Jx(510,"Descri\xE7\xE3o"),sg()(),Sl(511,"tr",9)(512,"td",17),Jx(513," theme"),sg(),Sl(514,"td",18)(515,"code",19),Jx(516," PoTheme "),sg()(),Sl(517,"td",13)(518,"p"),Jx(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),sg()()(),Sl(520,"tr",9)(521,"td",17),Jx(522," themeType"),sg(),Sl(523,"td",18)(524,"code",19),Jx(525," PoThemeTypeEnum "),sg()(),Sl(526,"td",13)(527,"p"),Jx(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),sg()()()(),Wl(529,"br"),Sl(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),Jx(536," setCurrentThemeType "),sg()()()()(),Sl(537,"tr",13)(538,"td",13)(539,"p"),Jx(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),sg()()()(),Sl(541,"h5")(542,"b"),Jx(543,"Par\xE2metros"),sg()(),Sl(544,"table",14)(545,"tr",15)(546,"th",16),Jx(547,"Nome"),sg(),Sl(548,"th",16),Jx(549,"Tipo"),sg(),Sl(550,"th",16),Jx(551,"Descri\xE7\xE3o"),sg()(),Sl(552,"tr",9)(553,"td",17),Jx(554," themeType"),sg(),Sl(555,"td",18)(556,"code",19),Jx(557," PoThemeTypeEnum "),sg()(),Sl(558,"td",13)(559,"p"),Jx(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),sg()()()(),Wl(561,"br"),Sl(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),Jx(568," setThemeA11y "),sg()()()()(),Sl(569,"tr",13)(570,"td",13)(571,"p"),Jx(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),sg()()()(),Sl(573,"h5")(574,"b"),Jx(575,"Par\xE2metros"),sg()(),Sl(576,"table",14)(577,"tr",15)(578,"th",16),Jx(579,"Nome"),sg(),Sl(580,"th",16),Jx(581,"Tipo"),sg(),Sl(582,"th",16),Jx(583,"Descri\xE7\xE3o"),sg()(),Sl(584,"tr",9)(585,"td",17),Jx(586," theme"),sg(),Sl(587,"td",18)(588,"code",19),Jx(589," PoTheme "),sg()(),Sl(590,"td",13)(591,"p"),Jx(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),sg()()(),Sl(593,"tr",9)(594,"td",17),Jx(595," a11y"),sg(),Sl(596,"td",18)(597,"code",19),Jx(598," PoThemeA11yEnum "),sg()(),Sl(599,"td",13)(600,"p"),Jx(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),sg()()()(),Wl(602,"br"),Sl(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),Jx(609," setCurrentThemeA11y "),sg()()()()(),Sl(610,"tr",13)(611,"td",13)(612,"p"),Jx(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),sg()()()(),Sl(614,"h5")(615,"b"),Jx(616,"Par\xE2metros"),sg()(),Sl(617,"table",14)(618,"tr",15)(619,"th",16),Jx(620,"Nome"),sg(),Sl(621,"th",16),Jx(622,"Tipo"),sg(),Sl(623,"th",16),Jx(624,"Descri\xE7\xE3o"),sg()(),Sl(625,"tr",9)(626,"td",17),Jx(627," a11y"),sg(),Sl(628,"td",18)(629,"code",19),Jx(630," PoThemeA11yEnum "),sg()(),Sl(631,"td",13)(632,"p"),Jx(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),sg()()()(),Wl(634,"br"),Sl(635,"h3"),Jx(636,"Interfaces"),sg(),Sl(637,"h4",23)(638,"code",5),Jx(639,"PoThemeColor"),sg()(),Sl(640,"div",2)(641,"p"),Jx(642,"Interface para representar as cores do tema."),sg()(),Sl(643,"h4",7),Jx(644,"Propriedades"),sg(),Sl(645,"table",14)(646,"tr",15)(647,"th",16),Jx(648,"Nome"),sg(),Sl(649,"th",16),Jx(650,"Tipo"),sg(),Sl(651,"th",16),Jx(652,"Descri\xE7\xE3o"),sg()(),Sl(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),Jx(657," action"),Wl(658,"br"),sg()()(),Sl(659,"td",18)(660,"code",24),Jx(661,"PoThemeColorAction"),sg()(),Sl(662,"td",13)(663,"em")(664,"strong"),Jx(665,"(opcional)"),sg()(),Sl(666,"p"),Jx(667,"Cores da Action a serem aplicadas."),sg(),Sl(668,"p"),Jx(669,"Exemplo de uso:"),sg(),Sl(670,"pre")(671,"code",25),Jx(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),sg()()()(),Sl(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),Jx(677," brand"),Wl(678,"br"),sg()()(),Sl(679,"td",18)(680,"code",26),Jx(681,"poThemeColorBrand"),sg()(),Sl(682,"td",13)(683,"em")(684,"strong"),Jx(685,"(opcional)"),sg()(),Sl(686,"p"),Jx(687,"Cores da Brand a serem aplicadas."),sg(),Sl(688,"p"),Jx(689,"Exemplo de uso:"),sg(),Sl(690,"pre")(691,"code",20),Jx(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),sg()()()(),Sl(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),Jx(697," categorical"),Wl(698,"br"),sg()()(),Sl(699,"td",18)(700,"code",27),Jx(701,"PoThemeColorCategorical"),sg()(),Sl(702,"td",13)(703,"em")(704,"strong"),Jx(705,"(opcional)"),sg()(),Sl(706,"p"),Jx(707,"Cores da Categorical a serem aplicadas."),sg(),Sl(708,"p"),Jx(709,"Exemplo de uso:"),sg(),Sl(710,"pre")(711,"code",20),Jx(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),sg()()()(),Sl(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),Jx(717," categorical-overlay"),Wl(718,"br"),sg()()(),Sl(719,"td",18)(720,"code",27),Jx(721,"PoThemeColorCategorical"),sg()(),Sl(722,"td",13)(723,"em")(724,"strong"),Jx(725,"(opcional)"),sg()(),Sl(726,"p"),Jx(727,"Cores da Categorical a serem aplicadas."),sg(),Sl(728,"p"),Jx(729,"Exemplo de uso:"),sg(),Sl(730,"pre")(731,"code",20),Jx(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),sg()()()(),Sl(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),Jx(737," neutral"),Wl(738,"br"),sg()()(),Sl(739,"td",18)(740,"code",28),Jx(741,"PoThemeColorNeutral"),sg()(),Sl(742,"td",13)(743,"em")(744,"strong"),Jx(745,"(opcional)"),sg()(),Sl(746,"p"),Jx(747,"Cores Neutrals a serem aplicadas."),sg(),Sl(748,"p"),Jx(749,"Exemplo de uso:"),sg(),Sl(750,"pre")(751,"code",20),Jx(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),sg()()()()(),Sl(753,"h4",23)(754,"code",5),Jx(755,"PoThemeColorAction"),sg()(),Sl(756,"div",2)(757,"p"),Jx(758,"Interface para as cores de a\xE7\xE3o do tema."),sg()(),Sl(759,"h4",7),Jx(760,"Propriedades"),sg(),Sl(761,"table",14)(762,"tr",15)(763,"th",16),Jx(764,"Nome"),sg(),Sl(765,"th",16),Jx(766,"Tipo"),sg(),Sl(767,"th",16),Jx(768,"Descri\xE7\xE3o"),sg()(),Sl(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),Jx(773," default"),Wl(774,"br"),sg()()(),Sl(775,"td",18)(776,"code",29),Jx(777,"string"),sg()(),Sl(778,"td",13)(779,"em")(780,"strong"),Jx(781,"(opcional)"),sg()(),Sl(782,"p"),Jx(783,"Cores da Action 'Default'."),sg(),Sl(784,"p"),Jx(785,"Exemplo de uso:"),sg(),Sl(786,"pre")(787,"code",20),Jx(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),sg()()()(),Sl(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),Jx(793," disabled"),Wl(794,"br"),sg()()(),Sl(795,"td",18)(796,"code",29),Jx(797,"string"),sg()(),Sl(798,"td",13)(799,"em")(800,"strong"),Jx(801,"(opcional)"),sg()(),Sl(802,"p"),Jx(803,"Cores da Action de 'disabled'."),sg(),Sl(804,"p"),Jx(805,"Exemplo de uso:"),sg(),Sl(806,"pre")(807,"code",20),Jx(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),sg()()()(),Sl(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),Jx(813," focus"),Wl(814,"br"),sg()()(),Sl(815,"td",18)(816,"code",29),Jx(817,"string"),sg()(),Sl(818,"td",13)(819,"em")(820,"strong"),Jx(821,"(opcional)"),sg()(),Sl(822,"p"),Jx(823,"Cores da Action para 'focus'."),sg(),Sl(824,"p"),Jx(825,"Exemplo de uso:"),sg(),Sl(826,"pre")(827,"code",20),Jx(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),sg()()()(),Sl(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),Jx(833," hover"),Wl(834,"br"),sg()()(),Sl(835,"td",18)(836,"code",29),Jx(837,"string"),sg()(),Sl(838,"td",13)(839,"em")(840,"strong"),Jx(841,"(opcional)"),sg()(),Sl(842,"p"),Jx(843,"Cores da Action para 'hover'."),sg(),Sl(844,"p"),Jx(845,"Exemplo de uso:"),sg(),Sl(846,"pre")(847,"code",20),Jx(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),sg()()()(),Sl(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),Jx(853," pressed"),Wl(854,"br"),sg()()(),Sl(855,"td",18)(856,"code",29),Jx(857,"string"),sg()(),Sl(858,"td",13)(859,"em")(860,"strong"),Jx(861,"(opcional)"),sg()(),Sl(862,"p"),Jx(863,"Cores da Action para 'pressed'."),sg(),Sl(864,"p"),Jx(865,"Exemplo de uso:"),sg(),Sl(866,"pre")(867,"code",20),Jx(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),sg()()()()(),Sl(869,"h4",23)(870,"code",5),Jx(871,"PoThemeColorNeutral"),sg()(),Sl(872,"div",2)(873,"p"),Jx(874,"Interface para as cores neutras do tema."),sg()(),Sl(875,"h4",7),Jx(876,"Propriedades"),sg(),Sl(877,"table",14)(878,"tr",15)(879,"th",16),Jx(880,"Nome"),sg(),Sl(881,"th",16),Jx(882,"Tipo"),sg(),Sl(883,"th",16),Jx(884,"Descri\xE7\xE3o"),sg()(),Sl(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),Jx(889," dark"),Wl(890,"br"),sg()()(),Sl(891,"td",18)(892,"code",30),Jx(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),sg()(),Sl(894,"td",13)(895,"em")(896,"strong"),Jx(897,"(opcional)"),sg()(),Sl(898,"p"),Jx(899,"Cores Neutrals do tipo 'dark'."),sg(),Sl(900,"p"),Jx(901,"Exemplo de uso:"),sg(),Sl(902,"pre")(903,"code",20),Jx(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),sg()()()(),Sl(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),Jx(909," light"),Wl(910,"br"),sg()()(),Sl(911,"td",18)(912,"code",31),Jx(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),sg()(),Sl(914,"td",13)(915,"em")(916,"strong"),Jx(917,"(opcional)"),sg()(),Sl(918,"p"),Jx(919,"Cores Neutrals do tipo 'light'."),sg(),Sl(920,"p"),Jx(921,"Exemplo de uso:"),sg(),Sl(922,"pre")(923,"code",20),Jx(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),sg()()()(),Sl(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),Jx(929," mid"),Wl(930,"br"),sg()()(),Sl(931,"td",18)(932,"code",32),Jx(933,`{ '40'?: string; '60'?: string;
}`),sg()(),Sl(934,"td",13)(935,"em")(936,"strong"),Jx(937,"(opcional)"),sg()(),Sl(938,"p"),Jx(939,"Cores Neutrals do tipo 'mid'."),sg(),Sl(940,"p"),Jx(941,"Exemplo de uso:"),sg(),Sl(942,"pre")(943,"code",20),Jx(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),sg()()()()(),Sl(945,"h4",23)(946,"code",5),Jx(947,"PoThemeTokens"),sg()(),Sl(948,"div",2)(949,"p"),Jx(950,"Interface para o tema da aplica\xE7\xE3o."),sg()(),Sl(951,"h4",23)(952,"code",5),Jx(953,"PoThemeToken"),sg()(),Sl(954,"div",2)(955,"p"),Jx(956,"Interface para os tokens do Tema."),sg()(),Sl(957,"h4",7),Jx(958,"Propriedades"),sg(),Sl(959,"table",14)(960,"tr",15)(961,"th",16),Jx(962,"Nome"),sg(),Sl(963,"th",16),Jx(964,"Tipo"),sg(),Sl(965,"th",16),Jx(966,"Descri\xE7\xE3o"),sg()(),Sl(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),Jx(971," color"),Wl(972,"br"),sg()()(),Sl(973,"td",18)(974,"code",33),Jx(975,"PoThemeColor"),sg()(),Sl(976,"td",13)(977,"em")(978,"strong"),Jx(979,"(opcional)"),sg()(),Sl(980,"p"),Jx(981,"Tokens do tipo 'color'"),sg()()(),Sl(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),Jx(986," onRoot"),Wl(987,"br"),sg()()(),Sl(988,"td",18)(989,"code",34),Jx(990,"DynamicProperties"),sg()(),Sl(991,"td",13)(992,"em")(993,"strong"),Jx(994,"(opcional)"),sg()(),Sl(995,"p"),Jx(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Sl(997,"code"),Jx(998,":root"),sg()(),Sl(999,"p"),Jx(1e3,"Exemplo de uso:"),sg(),Sl(1001,"pre")(1002,"code",20),Jx(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),sg()()()(),Sl(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),Jx(1008," perComponent"),Wl(1009,"br"),sg()()(),Sl(1010,"td",18)(1011,"code",34),Jx(1012,"DynamicProperties"),sg()(),Sl(1013,"td",13)(1014,"em")(1015,"strong"),Jx(1016,"(opcional)"),sg()(),Sl(1017,"p"),Jx(1018,"Tokens do tipo 'perComponent'"),sg(),Sl(1019,"p"),Jx(1020,"Exemplo de uso:"),sg(),Sl(1021,"pre")(1022,"code",20),Jx(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),sg()()()()(),Sl(1024,"h4",23)(1025,"code",5),Jx(1026,"PoTheme"),sg()(),Sl(1027,"div",2)(1028,"p"),Jx(1029,"Interface para o m\xE9todo "),Sl(1030,"code"),Jx(1031,"setTheme()"),sg(),Jx(1032,"."),sg()(),Sl(1033,"h4",7),Jx(1034,"Propriedades"),sg(),Sl(1035,"table",14)(1036,"tr",15)(1037,"th",16),Jx(1038,"Nome"),sg(),Sl(1039,"th",16),Jx(1040,"Tipo"),sg(),Sl(1041,"th",16),Jx(1042,"Descri\xE7\xE3o"),sg()(),Sl(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),Jx(1047," active"),Wl(1048,"br"),sg()()(),Sl(1049,"td",18)(1050,"code",35),Jx(1051,"PoThemeTypeEnum "),sg(),Sl(1052,"code",36),Jx(1053," PoThemeActive"),sg()(),Sl(1054,"td",13)(1055,"em")(1056,"strong"),Jx(1057,"(opcional)"),sg()(),Sl(1058,"p"),Jx(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),sg()()(),Sl(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),Jx(1064," name"),Wl(1065,"br"),sg()()(),Sl(1066,"td",18)(1067,"code",29),Jx(1068,"string"),sg()(),Sl(1069,"td",13)(1070,"p"),Jx(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),sg()()(),Sl(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),Jx(1076," type"),Wl(1077,"br"),sg()()(),Sl(1078,"td",18)(1079,"code",37),Jx(1080,"PoThemeType "),sg(),Sl(1081,"code",38),Jx(1082," Array<PoThemeType>"),sg()(),Sl(1083,"td",13)(1084,"p"),Jx(1085,"Tipo de tema:"),sg(),Sl(1086,"ul")(1087,"li"),Jx(1088,"light"),sg(),Sl(1089,"li"),Jx(1090,"dark"),sg()()()()(),Sl(1091,"h3"),Jx(1092,"Enums"),sg(),Sl(1093,"h4",4)(1094,"code",5),Jx(1095,"PoThemeA11yEnum"),sg()(),Sl(1096,"div",2)(1097,"p"),Jx(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),sg(),Sl(1099,"pre")(1100,"code"),Jx(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),sg()()(),Sl(1102,"h4",7),Jx(1103,"Propriedades"),sg(),Sl(1104,"table",14)(1105,"tr",15)(1106,"th",16),Jx(1107,"Nome"),sg(),Sl(1108,"th",16),Jx(1109,"Descri\xE7\xE3o"),sg()(),Sl(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),Jx(1114," AA"),Wl(1115,"br"),sg()()(),Sl(1116,"td",13)(1117,"p"),Jx(1118,"N\xEDvel de acessibilidade AA."),sg(),Sl(1119,"ul")(1120,"li"),Jx(1121,"Define a espessura do "),Sl(1122,"code"),Jx(1123,"outline"),sg(),Jx(1124," para "),Sl(1125,"strong"),Jx(1126,"2px"),sg(),Jx(1127,"."),sg(),Sl(1128,"li"),Jx(1129,"Disponibiliza o tamanho "),Sl(1130,"code"),Jx(1131,"small"),sg(),Jx(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),sg()()()(),Sl(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),Jx(1137," AAA"),Wl(1138,"br"),sg()()(),Sl(1139,"td",13)(1140,"p"),Jx(1141,"N\xEDvel de acessibilidade AAA."),sg(),Sl(1142,"ul")(1143,"li"),Jx(1144,"Define a espessura do "),Sl(1145,"code"),Jx(1146,"outline"),sg(),Jx(1147," para "),Sl(1148,"strong"),Jx(1149,"4px"),sg(),Jx(1150,"."),sg(),Sl(1151,"li"),Jx(1152,"N\xE3o disponibiliza o tamanho "),Sl(1153,"code"),Jx(1154,"small"),sg(),Jx(1155," para componentes de formul\xE1rio."),sg()()()()(),Sl(1156,"h4",4)(1157,"code",5),Jx(1158,"PoThemeTypeEnum"),sg()(),Sl(1159,"div",2)(1160,"p"),Jx(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),sg(),Sl(1162,"pre")(1163,"code"),Jx(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),sg()()(),Sl(1165,"h4",7),Jx(1166,"Propriedades"),sg(),Sl(1167,"table",14)(1168,"tr",15)(1169,"th",16),Jx(1170,"Nome"),sg(),Sl(1171,"th",16),Jx(1172,"Descri\xE7\xE3o"),sg()(),Sl(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),Jx(1177," light"),Wl(1178,"br"),sg()()(),Sl(1179,"td",13)(1180,"p"),Jx(1181,"Define o tema como claro."),sg()()(),Sl(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),Jx(1186," dark"),Wl(1187,"br"),sg()()(),Sl(1188,"td",13)(1189,"p"),Jx(1190,"Define o tema como escuro."),sg()()()()());},encapsulation:2})}return m})();var Ae=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(C(Xn),C(wn))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-theme-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-theme-labs-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,fe,Te],encapsulation:2})}return m})();var we=[{path:"",component:Ae}],ye=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[pL.forChild(we),pL]})}return m})();var Ze=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[ar,ye]})}return m})();export{Ze as DocPoThemeModule};