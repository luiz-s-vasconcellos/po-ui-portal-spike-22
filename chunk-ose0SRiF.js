import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,dN as vo,e as r$1,dO as av,s,dP as jde,dQ as Gde,dR as rv,dS as Bde,dT as Hde,dU as Nde,dV as ni,cN as lm,ae as Be,cM as oY,dW as D3,aX as nY,aF as J9,aY as eY,aG as Ck,cQ as Nk,cR as Ak,b0 as Qt,cz as Mz,b4 as O3,cp as Nhe,c8 as Sde,cX as L3,c9 as $he,b6 as Yo,ba as gNe,aB as Cx,T as Tl,J as Gl,aN as t0,a1 as ht,L as sg,aM as Ew,F as Vp,M as tw,aP as r0,aO as Dw,O as we$1,av as Yl,aw as uo,ax as fo,an as TO,aH as Ga,b8 as Hme,b9 as Gme,z as tN,ar as zx,au as fg,bs as hN,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Ce=["reactiveFormData"],be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Nde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Hde),{info:s(r$1({},Hde.info),{base:"#0079b8"})}),neutral:r$1({},Bde)},onRoot:s(r$1({},rv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},rv.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Gde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},jde),{info:s(r$1({},jde.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},av.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},av.perComponent)}},active:vo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?ni.AAA:ni.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(ni.AAA,false),this.a11yLevel=ni.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(ni.AA,false),this.a11yLevel=ni.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===ni.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(w(Be),w(oY),w(D3))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&Yl(Ce,7),a&2){let c;uo(c=fo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we$1([D3])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=Cx();Tl(0,"po-widget",1)(1,"form",2),Gl(2,"po-input",3),t0(),Gl(3,"po-email",4),t0(),Gl(4,"po-input",5),t0(),Gl(5,"po-number",6),t0(),Gl(6,"po-url",7),t0(),Tl(7,"div",8)(8,"po-button",9),ht("p-click",function(){return o.saveForm()}),sg()()(),Tl(9,"po-modal",10,0)(11,"div",8),Gl(12,"po-info",11),sg(),Tl(13,"div",8),Gl(14,"po-info",12)(15,"po-info",13),sg(),Tl(16,"div",8),Gl(17,"po-info",14)(18,"po-info",15),sg()()(),Tl(19,"div",16)(20,"po-radio-group",17),Ew("ngModelChange",function(h){return Ky(c),rN(o.theme,h)||(o.theme=h),Xy(h)}),ht("p-change",function(h){return o.changeTheme(h)}),sg(),t0(),Tl(21,"po-radio-group",18),Ew("ngModelChange",function(h){return Ky(c),rN(o.a11yLevel,h)||(o.a11yLevel=h),Xy(h)}),ht("p-change",function(h){return o.changeA11yLevel(h)}),sg(),t0(),sg();}a&2&&(Vp(),tw("formGroup",o.reactiveForm),Vp(),r0(),Vp(),r0(),Vp(),r0(),Vp(),r0(),Vp(),r0(),Vp(2),tw("p-disabled",!o.reactiveForm.valid),Vp(),tw("p-primary-action",o.modalPrimaryAction),Vp(3),tw("p-value",o.reactiveForm.controls.name.value),Vp(2),tw("p-value",o.reactiveForm.controls.address.value),Vp(),tw("p-value",o.reactiveForm.controls.number.value),Vp(2),tw("p-value",o.reactiveForm.controls.email.value),Vp(),tw("p-value",o.reactiveForm.controls.website.value),Vp(2),Dw("ngModel",o.theme),tw("p-options",o.themeOptions),r0(),Vp(),Dw("ngModel",o.a11yLevel),tw("p-options",o.a11yLevelOptions),r0());},dependencies:[nY,J9,eY,Ck,Nk,Ak,Qt,Mz,O3,Nhe,Sde,L3,$he,Yo,gNe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m}),fe=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Theme Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-widget p-title="Example">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-theme-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,De,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,be],encapsulation:2})}return m})();var Te=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoThemeModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do servi\xE7o PoThemeService."),sg()(),Tl(7,"h3",3),tN(8,"Services"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoThemeService"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O servi\xE7o "),Tl(15,"code"),tN(16,"PoThemeService"),sg(),tN(17," permite customizar as cores do tema padr\xE3o do "),Tl(18,"code"),tN(19,"PO-UI"),sg(),tN(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),sg(),Tl(21,"p"),tN(22,"O n\xEDvel "),Tl(23,"strong"),tN(24,"AAA"),sg(),tN(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Tl(26,"strong"),tN(27,"AA"),sg(),tN(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),sg(),Tl(29,"p"),tN(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),Tl(31,"strong"),tN(32,"densidade de espa\xE7amentos"),sg(),tN(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),sg(),Tl(34,"blockquote")(35,"p"),tN(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),Tl(37,"code"),tN(38,"feedback"),sg(),tN(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),sg()(),Tl(40,"blockquote")(41,"p"),tN(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Tl(43,"a",6),tN(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),sg(),tN(45," na aba "),Tl(46,"code"),tN(47,"Guias"),sg(),tN(48,"."),sg()()(),Tl(49,"h3",7),tN(50,"M\xE9todos"),sg(),Tl(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),tN(57," setTheme "),sg()()()()(),Tl(58,"tr",13)(59,"td",13)(60,"p"),tN(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),sg(),Tl(62,"p"),tN(63,"Este m\xE9todo configura o tema do componente com base no objeto "),Tl(64,"code"),tN(65,"themeConfig"),sg(),tN(66," fornecido, no "),Tl(67,"code"),tN(68,"themeType"),sg(),tN(69," e no "),Tl(70,"code"),tN(71,"a11yLevel"),sg(),tN(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),sg()()()(),Tl(73,"h5")(74,"b"),tN(75,"Par\xE2metros"),sg()(),Tl(76,"table",14)(77,"tr",15)(78,"th",16),tN(79,"Nome"),sg(),Tl(80,"th",16),tN(81,"Tipo"),sg(),Tl(82,"th",16),tN(83,"Descri\xE7\xE3o"),sg()(),Tl(84,"tr",9)(85,"td",17),tN(86," themeConfig"),sg(),Tl(87,"td",18)(88,"code",19),tN(89," PoTheme "),sg()(),Tl(90,"td",13)(91,"p"),tN(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),sg()()(),Tl(93,"tr",9)(94,"td",17),tN(95," themeType"),sg(),Tl(96,"td",18)(97,"code",19),tN(98," PoThemeTypeEnum "),sg()(),Tl(99,"td",13)(100,"p"),tN(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),sg()()(),Tl(102,"tr",9)(103,"td",17),tN(104," a11yLevel"),sg(),Tl(105,"td",18)(106,"code",19),tN(107," PoThemeA11yEnum "),sg()(),Tl(108,"td",13)(109,"p"),tN(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),sg()()(),Tl(111,"tr",9)(112,"td",17),tN(113," persistPreference"),sg(),Tl(114,"td",18)(115,"code",19),tN(116," boolean "),sg()(),Tl(117,"td",13)(118,"p"),tN(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Tl(120,"code"),tN(121,"true"),sg(),tN(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),sg()()()(),Gl(123,"br"),Tl(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),tN(130," getA11yLevel "),sg()()()()(),Tl(131,"tr",13)(132,"td",13)(133,"p"),tN(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Tl(135,"code"),tN(136,"AAA"),sg(),tN(137," como padr\xE3o."),sg()()()(),Tl(138,"h5")(139,"b"),tN(140,"Retorno"),sg()(),Tl(141,"table",14)(142,"tr",15)(143,"th",16),tN(144,"Tipo"),sg(),Tl(145,"th",16),tN(146,"Descri\xE7\xE3o"),sg()(),Tl(147,"tr",9)(148,"td",18)(149,"code",19),tN(150,"PoThemeA11yEnum"),sg()(),Tl(151,"td",13)(152,"p"),tN(153,"O n\xEDvel de acessibilidade, que pode ser "),Tl(154,"code"),tN(155,"AA"),sg(),tN(156," ou "),Tl(157,"code"),tN(158,"AAA"),sg(),tN(159,"."),sg()()()(),Gl(160,"br"),Tl(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),tN(167," setA11yDefaultSizeSmall "),sg()()()()(),Tl(168,"tr",13)(169,"td",13)(170,"p"),tN(171,"Define o tamanho "),Tl(172,"code"),tN(173,"small"),sg(),tN(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Tl(175,"code"),tN(176,"AA"),sg(),tN(177,`. O valor definido \xE9 salvo no
`),Tl(178,"code"),tN(179,"localStorage"),sg(),tN(180," sob a chave "),Tl(181,"code"),tN(182,"po-default-size"),sg(),tN(183," e o atributo "),Tl(184,"code"),tN(185,"data-default-size"),sg(),tN(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),sg(),Tl(187,"p"),tN(188,"Exemplo de uso:"),sg(),Tl(189,"pre")(190,"code",20),tN(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),sg()(),Tl(192,"blockquote")(193,"p"),tN(194,"Para garantir que o tamanho "),Tl(195,"code"),tN(196,"small"),sg(),tN(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Tl(198,"strong"),tN(199,"junto com o n\xEDvel de acessibilidade "),Tl(200,"code"),tN(201,"AA"),sg(),tN(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),sg(),tN(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Tl(204,"code"),tN(205,"setDensityMode"),sg(),tN(206," conforme necess\xE1rio."),sg()()()()(),Tl(207,"h5")(208,"b"),tN(209,"Par\xE2metros"),sg()(),Tl(210,"table",14)(211,"tr",15)(212,"th",16),tN(213,"Nome"),sg(),Tl(214,"th",16),tN(215,"Tipo"),sg(),Tl(216,"th",16),tN(217,"Descri\xE7\xE3o"),sg()(),Tl(218,"tr",9)(219,"td",17),tN(220," enable"),sg(),Tl(221,"td",18)(222,"code",19),tN(223," boolean "),sg()(),Tl(224,"td",13)(225,"p"),tN(226,"Habilita ou desabilita o tamanho "),Tl(227,"code"),tN(228,"small"),sg(),tN(229," globalmente."),sg()()()(),Gl(230,"br"),Tl(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),tN(237," getDensityMode "),sg()()()()(),Tl(238,"tr",13)(239,"td",13)(240,"p"),tN(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Tl(242,"code"),tN(243,"medium"),sg(),tN(244," como padr\xE3o."),sg()()()(),Tl(245,"h5")(246,"b"),tN(247,"Retorno"),sg()(),Tl(248,"table",14)(249,"tr",15)(250,"th",16),tN(251,"Tipo"),sg(),Tl(252,"th",16),tN(253,"Descri\xE7\xE3o"),sg()(),Tl(254,"tr",9)(255,"td",18)(256,"code",19),tN(257,"PoDensityMode"),sg()(),Tl(258,"td",13)(259,"p"),tN(260,"O modo de adensamento, que pode ser "),Tl(261,"code"),tN(262,"small"),sg(),tN(263," ou "),Tl(264,"code"),tN(265,"medium"),sg(),tN(266,"."),sg()()()(),Gl(267,"br"),Tl(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),tN(274," setDensityMode "),sg()()()()(),Tl(275,"tr",13)(276,"td",13)(277,"p"),tN(278,"Aplica o modo de adensamento compacto ("),Tl(279,"code"),tN(280,"small"),sg(),tN(281,") ou espa\xE7oso ("),Tl(282,"code"),tN(283,"medium"),sg(),tN(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Tl(285,"code"),tN(286,"localStorage"),sg(),tN(287,` sob a chave
`),Tl(288,"code"),tN(289,"po-density-mode"),sg(),tN(290,"."),sg()()()(),Tl(291,"h5")(292,"b"),tN(293,"Par\xE2metros"),sg()(),Tl(294,"table",14)(295,"tr",15)(296,"th",16),tN(297,"Nome"),sg(),Tl(298,"th",16),tN(299,"Tipo"),sg(),Tl(300,"th",16),tN(301,"Descri\xE7\xE3o"),sg()(),Tl(302,"tr",9)(303,"td",17),tN(304," mode"),sg(),Tl(305,"td",18)(306,"code",21),tN(307," 'small' "),sg(),Tl(308,"code",22),tN(309," 'medium' "),sg()(),Tl(310,"td",13)(311,"p"),tN(312,"Define o modo de densidade: "),Tl(313,"code"),tN(314,"small"),sg(),tN(315," para compacto, "),Tl(316,"code"),tN(317,"medium"),sg(),tN(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Tl(319,"code"),tN(320,"medium"),sg(),tN(321,"."),sg()()()(),Gl(322,"br"),Tl(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),tN(329," persistThemeActive "),sg()()()()(),Tl(330,"tr",13)(331,"td",13)(332,"p"),tN(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Tl(334,"code"),tN(335,"localStorage"),sg(),tN(336," para uso em recarregamentos futuros."),sg()()()(),Tl(337,"h5")(338,"b"),tN(339,"Retorno"),sg()(),Tl(340,"table",14)(341,"tr",15)(342,"th",16),tN(343,"Tipo"),sg(),Tl(344,"th",16),tN(345,"Descri\xE7\xE3o"),sg()(),Tl(346,"tr",9)(347,"td",18)(348,"code",19),tN(349,"PoTheme"),sg()(),Tl(350,"td",13)(351,"p"),tN(352,"O tema atualmente aplicado."),sg()()()(),Gl(353,"br"),Tl(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),tN(360," changeCurrentThemeType "),sg()()()()(),Tl(361,"tr",13)(362,"td",13)(363,"p"),tN(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),sg(),Tl(365,"p"),tN(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),sg()()()(),Tl(367,"h5")(368,"b"),tN(369,"Par\xE2metros"),sg()(),Tl(370,"table",14)(371,"tr",15)(372,"th",16),tN(373,"Nome"),sg(),Tl(374,"th",16),tN(375,"Tipo"),sg(),Tl(376,"th",16),tN(377,"Descri\xE7\xE3o"),sg()(),Tl(378,"tr",9)(379,"td",17),tN(380," themeType"),sg(),Tl(381,"td",18)(382,"code",19),tN(383," PoThemeTypeEnum "),sg()(),Tl(384,"td",13)(385,"p"),tN(386,"O tipo de tema a ser aplicado, light ou dark."),sg()()()(),Gl(387,"br"),Tl(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),tN(394," cleanThemeActive "),sg()()()()(),Tl(395,"tr",13)(396,"td",13)(397,"p"),tN(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),sg()()()(),Tl(399,"h5")(400,"b"),tN(401,"Par\xE2metros"),sg()(),Tl(402,"table",14)(403,"tr",15)(404,"th",16),tN(405,"Nome"),sg(),Tl(406,"th",16),tN(407,"Tipo"),sg(),Tl(408,"th",16),tN(409,"Descri\xE7\xE3o"),sg()(),Tl(410,"tr",9)(411,"td",17),tN(412," persistPreference"),sg(),Tl(413,"td",18)(414,"code",19),tN(415," boolean "),sg()(),Tl(416,"td",13)(417,"p"),tN(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),Tl(419,"code"),tN(420,"true"),sg(),tN(421," para remover, "),Tl(422,"code"),tN(423,"false"),sg(),tN(424," para manter."),sg()()()(),Gl(425,"br"),Tl(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),tN(432," getThemeActive "),sg()()()()(),Tl(433,"tr",13)(434,"td",13)(435,"p"),tN(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),Tl(437,"code"),tN(438,"localStorage"),sg(),tN(439,"."),sg()()()(),Tl(440,"h5")(441,"b"),tN(442,"Retorno"),sg()(),Tl(443,"table",14)(444,"tr",15)(445,"th",16),tN(446,"Tipo"),sg(),Tl(447,"th",16),tN(448,"Descri\xE7\xE3o"),sg()(),Tl(449,"tr",9)(450,"td",18)(451,"code",19),tN(452,"PoTheme"),sg()(),Tl(453,"td",13)(454,"p"),tN(455,"Tema ativo."),sg()()()(),Gl(456,"br"),Tl(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),tN(463," setDefaultTheme "),sg()()()()(),Tl(464,"tr",13)(465,"td",13)(466,"p"),tN(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),sg()()()(),Tl(468,"h5")(469,"b"),tN(470,"Par\xE2metros"),sg()(),Tl(471,"table",14)(472,"tr",15)(473,"th",16),tN(474,"Nome"),sg(),Tl(475,"th",16),tN(476,"Tipo"),sg(),Tl(477,"th",16),tN(478,"Descri\xE7\xE3o"),sg()(),Tl(479,"tr",9)(480,"td",17),tN(481," type"),sg(),Tl(482,"td",18)(483,"code",19),tN(484," PoThemeTypeEnum "),sg()(),Tl(485,"td",13)(486,"p"),tN(487,"O tipo de Tema a ser aplicado, light / dark."),sg()()()(),Gl(488,"br"),Tl(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),tN(495," setThemeType "),sg()()()()(),Tl(496,"tr",13)(497,"td",13)(498,"p"),tN(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),sg()()()(),Tl(500,"h5")(501,"b"),tN(502,"Par\xE2metros"),sg()(),Tl(503,"table",14)(504,"tr",15)(505,"th",16),tN(506,"Nome"),sg(),Tl(507,"th",16),tN(508,"Tipo"),sg(),Tl(509,"th",16),tN(510,"Descri\xE7\xE3o"),sg()(),Tl(511,"tr",9)(512,"td",17),tN(513," theme"),sg(),Tl(514,"td",18)(515,"code",19),tN(516," PoTheme "),sg()(),Tl(517,"td",13)(518,"p"),tN(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),sg()()(),Tl(520,"tr",9)(521,"td",17),tN(522," themeType"),sg(),Tl(523,"td",18)(524,"code",19),tN(525," PoThemeTypeEnum "),sg()(),Tl(526,"td",13)(527,"p"),tN(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),sg()()()(),Gl(529,"br"),Tl(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),tN(536," setCurrentThemeType "),sg()()()()(),Tl(537,"tr",13)(538,"td",13)(539,"p"),tN(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),sg()()()(),Tl(541,"h5")(542,"b"),tN(543,"Par\xE2metros"),sg()(),Tl(544,"table",14)(545,"tr",15)(546,"th",16),tN(547,"Nome"),sg(),Tl(548,"th",16),tN(549,"Tipo"),sg(),Tl(550,"th",16),tN(551,"Descri\xE7\xE3o"),sg()(),Tl(552,"tr",9)(553,"td",17),tN(554," themeType"),sg(),Tl(555,"td",18)(556,"code",19),tN(557," PoThemeTypeEnum "),sg()(),Tl(558,"td",13)(559,"p"),tN(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),sg()()()(),Gl(561,"br"),Tl(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),tN(568," setThemeA11y "),sg()()()()(),Tl(569,"tr",13)(570,"td",13)(571,"p"),tN(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),sg()()()(),Tl(573,"h5")(574,"b"),tN(575,"Par\xE2metros"),sg()(),Tl(576,"table",14)(577,"tr",15)(578,"th",16),tN(579,"Nome"),sg(),Tl(580,"th",16),tN(581,"Tipo"),sg(),Tl(582,"th",16),tN(583,"Descri\xE7\xE3o"),sg()(),Tl(584,"tr",9)(585,"td",17),tN(586," theme"),sg(),Tl(587,"td",18)(588,"code",19),tN(589," PoTheme "),sg()(),Tl(590,"td",13)(591,"p"),tN(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),sg()()(),Tl(593,"tr",9)(594,"td",17),tN(595," a11y"),sg(),Tl(596,"td",18)(597,"code",19),tN(598," PoThemeA11yEnum "),sg()(),Tl(599,"td",13)(600,"p"),tN(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),sg()()()(),Gl(602,"br"),Tl(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),tN(609," setCurrentThemeA11y "),sg()()()()(),Tl(610,"tr",13)(611,"td",13)(612,"p"),tN(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),sg()()()(),Tl(614,"h5")(615,"b"),tN(616,"Par\xE2metros"),sg()(),Tl(617,"table",14)(618,"tr",15)(619,"th",16),tN(620,"Nome"),sg(),Tl(621,"th",16),tN(622,"Tipo"),sg(),Tl(623,"th",16),tN(624,"Descri\xE7\xE3o"),sg()(),Tl(625,"tr",9)(626,"td",17),tN(627," a11y"),sg(),Tl(628,"td",18)(629,"code",19),tN(630," PoThemeA11yEnum "),sg()(),Tl(631,"td",13)(632,"p"),tN(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),sg()()()(),Gl(634,"br"),Tl(635,"h3"),tN(636,"Interfaces"),sg(),Tl(637,"h4",23)(638,"code",5),tN(639,"PoThemeColor"),sg()(),Tl(640,"div",2)(641,"p"),tN(642,"Interface para representar as cores do tema."),sg()(),Tl(643,"h4",7),tN(644,"Propriedades"),sg(),Tl(645,"table",14)(646,"tr",15)(647,"th",16),tN(648,"Nome"),sg(),Tl(649,"th",16),tN(650,"Tipo"),sg(),Tl(651,"th",16),tN(652,"Descri\xE7\xE3o"),sg()(),Tl(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),tN(657," action"),Gl(658,"br"),sg()()(),Tl(659,"td",18)(660,"code",24),tN(661,"PoThemeColorAction"),sg()(),Tl(662,"td",13)(663,"em")(664,"strong"),tN(665,"(opcional)"),sg()(),Tl(666,"p"),tN(667,"Cores da Action a serem aplicadas."),sg(),Tl(668,"p"),tN(669,"Exemplo de uso:"),sg(),Tl(670,"pre")(671,"code",25),tN(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),sg()()()(),Tl(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),tN(677," brand"),Gl(678,"br"),sg()()(),Tl(679,"td",18)(680,"code",26),tN(681,"poThemeColorBrand"),sg()(),Tl(682,"td",13)(683,"em")(684,"strong"),tN(685,"(opcional)"),sg()(),Tl(686,"p"),tN(687,"Cores da Brand a serem aplicadas."),sg(),Tl(688,"p"),tN(689,"Exemplo de uso:"),sg(),Tl(690,"pre")(691,"code",20),tN(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),sg()()()(),Tl(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),tN(697," categorical"),Gl(698,"br"),sg()()(),Tl(699,"td",18)(700,"code",27),tN(701,"PoThemeColorCategorical"),sg()(),Tl(702,"td",13)(703,"em")(704,"strong"),tN(705,"(opcional)"),sg()(),Tl(706,"p"),tN(707,"Cores da Categorical a serem aplicadas."),sg(),Tl(708,"p"),tN(709,"Exemplo de uso:"),sg(),Tl(710,"pre")(711,"code",20),tN(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),sg()()()(),Tl(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),tN(717," categorical-overlay"),Gl(718,"br"),sg()()(),Tl(719,"td",18)(720,"code",27),tN(721,"PoThemeColorCategorical"),sg()(),Tl(722,"td",13)(723,"em")(724,"strong"),tN(725,"(opcional)"),sg()(),Tl(726,"p"),tN(727,"Cores da Categorical a serem aplicadas."),sg(),Tl(728,"p"),tN(729,"Exemplo de uso:"),sg(),Tl(730,"pre")(731,"code",20),tN(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),sg()()()(),Tl(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),tN(737," neutral"),Gl(738,"br"),sg()()(),Tl(739,"td",18)(740,"code",28),tN(741,"PoThemeColorNeutral"),sg()(),Tl(742,"td",13)(743,"em")(744,"strong"),tN(745,"(opcional)"),sg()(),Tl(746,"p"),tN(747,"Cores Neutrals a serem aplicadas."),sg(),Tl(748,"p"),tN(749,"Exemplo de uso:"),sg(),Tl(750,"pre")(751,"code",20),tN(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),sg()()()()(),Tl(753,"h4",23)(754,"code",5),tN(755,"PoThemeColorAction"),sg()(),Tl(756,"div",2)(757,"p"),tN(758,"Interface para as cores de a\xE7\xE3o do tema."),sg()(),Tl(759,"h4",7),tN(760,"Propriedades"),sg(),Tl(761,"table",14)(762,"tr",15)(763,"th",16),tN(764,"Nome"),sg(),Tl(765,"th",16),tN(766,"Tipo"),sg(),Tl(767,"th",16),tN(768,"Descri\xE7\xE3o"),sg()(),Tl(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),tN(773," default"),Gl(774,"br"),sg()()(),Tl(775,"td",18)(776,"code",29),tN(777,"string"),sg()(),Tl(778,"td",13)(779,"em")(780,"strong"),tN(781,"(opcional)"),sg()(),Tl(782,"p"),tN(783,"Cores da Action 'Default'."),sg(),Tl(784,"p"),tN(785,"Exemplo de uso:"),sg(),Tl(786,"pre")(787,"code",20),tN(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),sg()()()(),Tl(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),tN(793," disabled"),Gl(794,"br"),sg()()(),Tl(795,"td",18)(796,"code",29),tN(797,"string"),sg()(),Tl(798,"td",13)(799,"em")(800,"strong"),tN(801,"(opcional)"),sg()(),Tl(802,"p"),tN(803,"Cores da Action de 'disabled'."),sg(),Tl(804,"p"),tN(805,"Exemplo de uso:"),sg(),Tl(806,"pre")(807,"code",20),tN(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),sg()()()(),Tl(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),tN(813," focus"),Gl(814,"br"),sg()()(),Tl(815,"td",18)(816,"code",29),tN(817,"string"),sg()(),Tl(818,"td",13)(819,"em")(820,"strong"),tN(821,"(opcional)"),sg()(),Tl(822,"p"),tN(823,"Cores da Action para 'focus'."),sg(),Tl(824,"p"),tN(825,"Exemplo de uso:"),sg(),Tl(826,"pre")(827,"code",20),tN(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),sg()()()(),Tl(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),tN(833," hover"),Gl(834,"br"),sg()()(),Tl(835,"td",18)(836,"code",29),tN(837,"string"),sg()(),Tl(838,"td",13)(839,"em")(840,"strong"),tN(841,"(opcional)"),sg()(),Tl(842,"p"),tN(843,"Cores da Action para 'hover'."),sg(),Tl(844,"p"),tN(845,"Exemplo de uso:"),sg(),Tl(846,"pre")(847,"code",20),tN(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),sg()()()(),Tl(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),tN(853," pressed"),Gl(854,"br"),sg()()(),Tl(855,"td",18)(856,"code",29),tN(857,"string"),sg()(),Tl(858,"td",13)(859,"em")(860,"strong"),tN(861,"(opcional)"),sg()(),Tl(862,"p"),tN(863,"Cores da Action para 'pressed'."),sg(),Tl(864,"p"),tN(865,"Exemplo de uso:"),sg(),Tl(866,"pre")(867,"code",20),tN(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),sg()()()()(),Tl(869,"h4",23)(870,"code",5),tN(871,"PoThemeColorNeutral"),sg()(),Tl(872,"div",2)(873,"p"),tN(874,"Interface para as cores neutras do tema."),sg()(),Tl(875,"h4",7),tN(876,"Propriedades"),sg(),Tl(877,"table",14)(878,"tr",15)(879,"th",16),tN(880,"Nome"),sg(),Tl(881,"th",16),tN(882,"Tipo"),sg(),Tl(883,"th",16),tN(884,"Descri\xE7\xE3o"),sg()(),Tl(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),tN(889," dark"),Gl(890,"br"),sg()()(),Tl(891,"td",18)(892,"code",30),tN(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),sg()(),Tl(894,"td",13)(895,"em")(896,"strong"),tN(897,"(opcional)"),sg()(),Tl(898,"p"),tN(899,"Cores Neutrals do tipo 'dark'."),sg(),Tl(900,"p"),tN(901,"Exemplo de uso:"),sg(),Tl(902,"pre")(903,"code",20),tN(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),sg()()()(),Tl(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),tN(909," light"),Gl(910,"br"),sg()()(),Tl(911,"td",18)(912,"code",31),tN(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),sg()(),Tl(914,"td",13)(915,"em")(916,"strong"),tN(917,"(opcional)"),sg()(),Tl(918,"p"),tN(919,"Cores Neutrals do tipo 'light'."),sg(),Tl(920,"p"),tN(921,"Exemplo de uso:"),sg(),Tl(922,"pre")(923,"code",20),tN(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),sg()()()(),Tl(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),tN(929," mid"),Gl(930,"br"),sg()()(),Tl(931,"td",18)(932,"code",32),tN(933,`{ '40'?: string; '60'?: string;
}`),sg()(),Tl(934,"td",13)(935,"em")(936,"strong"),tN(937,"(opcional)"),sg()(),Tl(938,"p"),tN(939,"Cores Neutrals do tipo 'mid'."),sg(),Tl(940,"p"),tN(941,"Exemplo de uso:"),sg(),Tl(942,"pre")(943,"code",20),tN(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),sg()()()()(),Tl(945,"h4",23)(946,"code",5),tN(947,"PoThemeTokens"),sg()(),Tl(948,"div",2)(949,"p"),tN(950,"Interface para o tema da aplica\xE7\xE3o."),sg()(),Tl(951,"h4",23)(952,"code",5),tN(953,"PoThemeToken"),sg()(),Tl(954,"div",2)(955,"p"),tN(956,"Interface para os tokens do Tema."),sg()(),Tl(957,"h4",7),tN(958,"Propriedades"),sg(),Tl(959,"table",14)(960,"tr",15)(961,"th",16),tN(962,"Nome"),sg(),Tl(963,"th",16),tN(964,"Tipo"),sg(),Tl(965,"th",16),tN(966,"Descri\xE7\xE3o"),sg()(),Tl(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),tN(971," color"),Gl(972,"br"),sg()()(),Tl(973,"td",18)(974,"code",33),tN(975,"PoThemeColor"),sg()(),Tl(976,"td",13)(977,"em")(978,"strong"),tN(979,"(opcional)"),sg()(),Tl(980,"p"),tN(981,"Tokens do tipo 'color'"),sg()()(),Tl(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),tN(986," onRoot"),Gl(987,"br"),sg()()(),Tl(988,"td",18)(989,"code",34),tN(990,"DynamicProperties"),sg()(),Tl(991,"td",13)(992,"em")(993,"strong"),tN(994,"(opcional)"),sg()(),Tl(995,"p"),tN(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Tl(997,"code"),tN(998,":root"),sg()(),Tl(999,"p"),tN(1e3,"Exemplo de uso:"),sg(),Tl(1001,"pre")(1002,"code",20),tN(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),sg()()()(),Tl(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),tN(1008," perComponent"),Gl(1009,"br"),sg()()(),Tl(1010,"td",18)(1011,"code",34),tN(1012,"DynamicProperties"),sg()(),Tl(1013,"td",13)(1014,"em")(1015,"strong"),tN(1016,"(opcional)"),sg()(),Tl(1017,"p"),tN(1018,"Tokens do tipo 'perComponent'"),sg(),Tl(1019,"p"),tN(1020,"Exemplo de uso:"),sg(),Tl(1021,"pre")(1022,"code",20),tN(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),sg()()()()(),Tl(1024,"h4",23)(1025,"code",5),tN(1026,"PoTheme"),sg()(),Tl(1027,"div",2)(1028,"p"),tN(1029,"Interface para o m\xE9todo "),Tl(1030,"code"),tN(1031,"setTheme()"),sg(),tN(1032,"."),sg()(),Tl(1033,"h4",7),tN(1034,"Propriedades"),sg(),Tl(1035,"table",14)(1036,"tr",15)(1037,"th",16),tN(1038,"Nome"),sg(),Tl(1039,"th",16),tN(1040,"Tipo"),sg(),Tl(1041,"th",16),tN(1042,"Descri\xE7\xE3o"),sg()(),Tl(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),tN(1047," active"),Gl(1048,"br"),sg()()(),Tl(1049,"td",18)(1050,"code",35),tN(1051,"PoThemeTypeEnum "),sg(),Tl(1052,"code",36),tN(1053," PoThemeActive"),sg()(),Tl(1054,"td",13)(1055,"em")(1056,"strong"),tN(1057,"(opcional)"),sg()(),Tl(1058,"p"),tN(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),sg()()(),Tl(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),tN(1064," name"),Gl(1065,"br"),sg()()(),Tl(1066,"td",18)(1067,"code",29),tN(1068,"string"),sg()(),Tl(1069,"td",13)(1070,"p"),tN(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),sg()()(),Tl(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),tN(1076," type"),Gl(1077,"br"),sg()()(),Tl(1078,"td",18)(1079,"code",37),tN(1080,"PoThemeType "),sg(),Tl(1081,"code",38),tN(1082," Array<PoThemeType>"),sg()(),Tl(1083,"td",13)(1084,"p"),tN(1085,"Tipo de tema:"),sg(),Tl(1086,"ul")(1087,"li"),tN(1088,"light"),sg(),Tl(1089,"li"),tN(1090,"dark"),sg()()()()(),Tl(1091,"h3"),tN(1092,"Enums"),sg(),Tl(1093,"h4",4)(1094,"code",5),tN(1095,"PoThemeA11yEnum"),sg()(),Tl(1096,"div",2)(1097,"p"),tN(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),sg(),Tl(1099,"pre")(1100,"code"),tN(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),sg()()(),Tl(1102,"h4",7),tN(1103,"Propriedades"),sg(),Tl(1104,"table",14)(1105,"tr",15)(1106,"th",16),tN(1107,"Nome"),sg(),Tl(1108,"th",16),tN(1109,"Descri\xE7\xE3o"),sg()(),Tl(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),tN(1114," AA"),Gl(1115,"br"),sg()()(),Tl(1116,"td",13)(1117,"p"),tN(1118,"N\xEDvel de acessibilidade AA."),sg(),Tl(1119,"ul")(1120,"li"),tN(1121,"Define a espessura do "),Tl(1122,"code"),tN(1123,"outline"),sg(),tN(1124," para "),Tl(1125,"strong"),tN(1126,"2px"),sg(),tN(1127,"."),sg(),Tl(1128,"li"),tN(1129,"Disponibiliza o tamanho "),Tl(1130,"code"),tN(1131,"small"),sg(),tN(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),sg()()()(),Tl(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),tN(1137," AAA"),Gl(1138,"br"),sg()()(),Tl(1139,"td",13)(1140,"p"),tN(1141,"N\xEDvel de acessibilidade AAA."),sg(),Tl(1142,"ul")(1143,"li"),tN(1144,"Define a espessura do "),Tl(1145,"code"),tN(1146,"outline"),sg(),tN(1147," para "),Tl(1148,"strong"),tN(1149,"4px"),sg(),tN(1150,"."),sg(),Tl(1151,"li"),tN(1152,"N\xE3o disponibiliza o tamanho "),Tl(1153,"code"),tN(1154,"small"),sg(),tN(1155," para componentes de formul\xE1rio."),sg()()()()(),Tl(1156,"h4",4)(1157,"code",5),tN(1158,"PoThemeTypeEnum"),sg()(),Tl(1159,"div",2)(1160,"p"),tN(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),sg(),Tl(1162,"pre")(1163,"code"),tN(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),sg()()(),Tl(1165,"h4",7),tN(1166,"Propriedades"),sg(),Tl(1167,"table",14)(1168,"tr",15)(1169,"th",16),tN(1170,"Nome"),sg(),Tl(1171,"th",16),tN(1172,"Descri\xE7\xE3o"),sg()(),Tl(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),tN(1177," light"),Gl(1178,"br"),sg()()(),Tl(1179,"td",13)(1180,"p"),tN(1181,"Define o tema como claro."),sg()()(),Tl(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),tN(1186," dark"),Gl(1187,"br"),sg()()(),Tl(1188,"td",13)(1189,"p"),tN(1190,"Define o tema como escuro."),sg()()()()());},encapsulation:2})}return m})();var Ae=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(w(Xn),w(wn))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-theme-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-theme-labs-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,fe,Te],encapsulation:2})}return m})();var we=[{path:"",component:Ae}],ye=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[vL.forChild(we),vL]})}return m})();var Ze=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[ar,ye]})}return m})();export{Ze as DocPoThemeModule};