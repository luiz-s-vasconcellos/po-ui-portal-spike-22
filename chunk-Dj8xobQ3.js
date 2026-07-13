import {f as fe$1,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,dN as vo,r as r$1,dO as av,h as s,dP as Yde,dQ as $de,dR as rv,dS as Hde,dT as Ude,dU as Bde,dV as ni,cN as lm,ae as Be,cM as cY,dW as T3,aX as oY,aF as nY,aY as rY,aG as Sk,cQ as kk,cR as Ok,b0 as Qt,cz as Pz,b4 as L3,cp as Bhe,c8 as Tde,cX as I3,c9 as jhe,b6 as Yo,ba as vNe,aB as Sx,T as Tl,L as Gl,aN as r0,a1 as ht,M as sg,aM as ww,H as Vp,O as nw,aP as o0,aO as Ew,Q as we$1,av as Yl,aw as uo,ax as fo,an as AO,aH as Ka,b8 as Ume,b9 as $me,C as iN,ar as qx,au as fg,bs as mN,a3 as sNe,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var Ce=["reactiveFormData"],be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Bde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Ude),{info:s(r$1({},Ude.info),{base:"#0079b8"})}),neutral:r$1({},Hde)},onRoot:s(r$1({},rv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},rv.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},$de),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Yde),{info:s(r$1({},Yde.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},av.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},av.perComponent)}},active:vo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?ni.AAA:ni.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(ni.AAA,false),this.a11yLevel=ni.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(ni.AA,false),this.a11yLevel=ni.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===ni.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(w(Be),w(cY),w(T3))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&Yl(Ce,7),a&2){let c;uo(c=fo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we$1([T3])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=Sx();Tl(0,"po-widget",1)(1,"form",2),Gl(2,"po-input",3),r0(),Gl(3,"po-email",4),r0(),Gl(4,"po-input",5),r0(),Gl(5,"po-number",6),r0(),Gl(6,"po-url",7),r0(),Tl(7,"div",8)(8,"po-button",9),ht("p-click",function(){return o.saveForm()}),sg()()(),Tl(9,"po-modal",10,0)(11,"div",8),Gl(12,"po-info",11),sg(),Tl(13,"div",8),Gl(14,"po-info",12)(15,"po-info",13),sg(),Tl(16,"div",8),Gl(17,"po-info",14)(18,"po-info",15),sg()()(),Tl(19,"div",16)(20,"po-radio-group",17),ww("ngModelChange",function(h){return Ky(c),sN(o.theme,h)||(o.theme=h),Xy(h)}),ht("p-change",function(h){return o.changeTheme(h)}),sg(),r0(),Tl(21,"po-radio-group",18),ww("ngModelChange",function(h){return Ky(c),sN(o.a11yLevel,h)||(o.a11yLevel=h),Xy(h)}),ht("p-change",function(h){return o.changeA11yLevel(h)}),sg(),r0(),sg();}a&2&&(Vp(),nw("formGroup",o.reactiveForm),Vp(),o0(),Vp(),o0(),Vp(),o0(),Vp(),o0(),Vp(),o0(),Vp(2),nw("p-disabled",!o.reactiveForm.valid),Vp(),nw("p-primary-action",o.modalPrimaryAction),Vp(3),nw("p-value",o.reactiveForm.controls.name.value),Vp(2),nw("p-value",o.reactiveForm.controls.address.value),Vp(),nw("p-value",o.reactiveForm.controls.number.value),Vp(2),nw("p-value",o.reactiveForm.controls.email.value),Vp(),nw("p-value",o.reactiveForm.controls.website.value),Vp(2),Ew("ngModel",o.theme),nw("p-options",o.themeOptions),o0(),Vp(),Ew("ngModel",o.a11yLevel),nw("p-options",o.a11yLevelOptions),o0());},dependencies:[oY,nY,rY,Sk,kk,Ok,Qt,Pz,L3,Bhe,Tde,I3,jhe,Yo,vNe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m}),fe=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Theme Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-widget p-title="Example">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-theme-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return m})();var Te=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoThemeModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do servi\xE7o PoThemeService."),sg()(),Tl(7,"h3",3),iN(8,"Services"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoThemeService"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O servi\xE7o "),Tl(15,"code"),iN(16,"PoThemeService"),sg(),iN(17," permite customizar as cores do tema padr\xE3o do "),Tl(18,"code"),iN(19,"PO-UI"),sg(),iN(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),sg(),Tl(21,"p"),iN(22,"O n\xEDvel "),Tl(23,"strong"),iN(24,"AAA"),sg(),iN(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Tl(26,"strong"),iN(27,"AA"),sg(),iN(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),sg(),Tl(29,"p"),iN(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),Tl(31,"strong"),iN(32,"densidade de espa\xE7amentos"),sg(),iN(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),sg(),Tl(34,"blockquote")(35,"p"),iN(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),Tl(37,"code"),iN(38,"feedback"),sg(),iN(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),sg()(),Tl(40,"blockquote")(41,"p"),iN(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Tl(43,"a",6),iN(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),sg(),iN(45," na aba "),Tl(46,"code"),iN(47,"Guias"),sg(),iN(48,"."),sg()()(),Tl(49,"h3",7),iN(50,"M\xE9todos"),sg(),Tl(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),iN(57," setTheme "),sg()()()()(),Tl(58,"tr",13)(59,"td",13)(60,"p"),iN(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),sg(),Tl(62,"p"),iN(63,"Este m\xE9todo configura o tema do componente com base no objeto "),Tl(64,"code"),iN(65,"themeConfig"),sg(),iN(66," fornecido, no "),Tl(67,"code"),iN(68,"themeType"),sg(),iN(69," e no "),Tl(70,"code"),iN(71,"a11yLevel"),sg(),iN(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),sg()()()(),Tl(73,"h5")(74,"b"),iN(75,"Par\xE2metros"),sg()(),Tl(76,"table",14)(77,"tr",15)(78,"th",16),iN(79,"Nome"),sg(),Tl(80,"th",16),iN(81,"Tipo"),sg(),Tl(82,"th",16),iN(83,"Descri\xE7\xE3o"),sg()(),Tl(84,"tr",9)(85,"td",17),iN(86," themeConfig"),sg(),Tl(87,"td",18)(88,"code",19),iN(89," PoTheme "),sg()(),Tl(90,"td",13)(91,"p"),iN(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),sg()()(),Tl(93,"tr",9)(94,"td",17),iN(95," themeType"),sg(),Tl(96,"td",18)(97,"code",19),iN(98," PoThemeTypeEnum "),sg()(),Tl(99,"td",13)(100,"p"),iN(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),sg()()(),Tl(102,"tr",9)(103,"td",17),iN(104," a11yLevel"),sg(),Tl(105,"td",18)(106,"code",19),iN(107," PoThemeA11yEnum "),sg()(),Tl(108,"td",13)(109,"p"),iN(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),sg()()(),Tl(111,"tr",9)(112,"td",17),iN(113," persistPreference"),sg(),Tl(114,"td",18)(115,"code",19),iN(116," boolean "),sg()(),Tl(117,"td",13)(118,"p"),iN(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Tl(120,"code"),iN(121,"true"),sg(),iN(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),sg()()()(),Gl(123,"br"),Tl(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),iN(130," getA11yLevel "),sg()()()()(),Tl(131,"tr",13)(132,"td",13)(133,"p"),iN(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Tl(135,"code"),iN(136,"AAA"),sg(),iN(137," como padr\xE3o."),sg()()()(),Tl(138,"h5")(139,"b"),iN(140,"Retorno"),sg()(),Tl(141,"table",14)(142,"tr",15)(143,"th",16),iN(144,"Tipo"),sg(),Tl(145,"th",16),iN(146,"Descri\xE7\xE3o"),sg()(),Tl(147,"tr",9)(148,"td",18)(149,"code",19),iN(150,"PoThemeA11yEnum"),sg()(),Tl(151,"td",13)(152,"p"),iN(153,"O n\xEDvel de acessibilidade, que pode ser "),Tl(154,"code"),iN(155,"AA"),sg(),iN(156," ou "),Tl(157,"code"),iN(158,"AAA"),sg(),iN(159,"."),sg()()()(),Gl(160,"br"),Tl(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),iN(167," setA11yDefaultSizeSmall "),sg()()()()(),Tl(168,"tr",13)(169,"td",13)(170,"p"),iN(171,"Define o tamanho "),Tl(172,"code"),iN(173,"small"),sg(),iN(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Tl(175,"code"),iN(176,"AA"),sg(),iN(177,`. O valor definido \xE9 salvo no
`),Tl(178,"code"),iN(179,"localStorage"),sg(),iN(180," sob a chave "),Tl(181,"code"),iN(182,"po-default-size"),sg(),iN(183," e o atributo "),Tl(184,"code"),iN(185,"data-default-size"),sg(),iN(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),sg(),Tl(187,"p"),iN(188,"Exemplo de uso:"),sg(),Tl(189,"pre")(190,"code",20),iN(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),sg()(),Tl(192,"blockquote")(193,"p"),iN(194,"Para garantir que o tamanho "),Tl(195,"code"),iN(196,"small"),sg(),iN(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Tl(198,"strong"),iN(199,"junto com o n\xEDvel de acessibilidade "),Tl(200,"code"),iN(201,"AA"),sg(),iN(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),sg(),iN(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Tl(204,"code"),iN(205,"setDensityMode"),sg(),iN(206," conforme necess\xE1rio."),sg()()()()(),Tl(207,"h5")(208,"b"),iN(209,"Par\xE2metros"),sg()(),Tl(210,"table",14)(211,"tr",15)(212,"th",16),iN(213,"Nome"),sg(),Tl(214,"th",16),iN(215,"Tipo"),sg(),Tl(216,"th",16),iN(217,"Descri\xE7\xE3o"),sg()(),Tl(218,"tr",9)(219,"td",17),iN(220," enable"),sg(),Tl(221,"td",18)(222,"code",19),iN(223," boolean "),sg()(),Tl(224,"td",13)(225,"p"),iN(226,"Habilita ou desabilita o tamanho "),Tl(227,"code"),iN(228,"small"),sg(),iN(229," globalmente."),sg()()()(),Gl(230,"br"),Tl(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),iN(237," getDensityMode "),sg()()()()(),Tl(238,"tr",13)(239,"td",13)(240,"p"),iN(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Tl(242,"code"),iN(243,"medium"),sg(),iN(244," como padr\xE3o."),sg()()()(),Tl(245,"h5")(246,"b"),iN(247,"Retorno"),sg()(),Tl(248,"table",14)(249,"tr",15)(250,"th",16),iN(251,"Tipo"),sg(),Tl(252,"th",16),iN(253,"Descri\xE7\xE3o"),sg()(),Tl(254,"tr",9)(255,"td",18)(256,"code",19),iN(257,"PoDensityMode"),sg()(),Tl(258,"td",13)(259,"p"),iN(260,"O modo de adensamento, que pode ser "),Tl(261,"code"),iN(262,"small"),sg(),iN(263," ou "),Tl(264,"code"),iN(265,"medium"),sg(),iN(266,"."),sg()()()(),Gl(267,"br"),Tl(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),iN(274," setDensityMode "),sg()()()()(),Tl(275,"tr",13)(276,"td",13)(277,"p"),iN(278,"Aplica o modo de adensamento compacto ("),Tl(279,"code"),iN(280,"small"),sg(),iN(281,") ou espa\xE7oso ("),Tl(282,"code"),iN(283,"medium"),sg(),iN(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Tl(285,"code"),iN(286,"localStorage"),sg(),iN(287,` sob a chave
`),Tl(288,"code"),iN(289,"po-density-mode"),sg(),iN(290,"."),sg()()()(),Tl(291,"h5")(292,"b"),iN(293,"Par\xE2metros"),sg()(),Tl(294,"table",14)(295,"tr",15)(296,"th",16),iN(297,"Nome"),sg(),Tl(298,"th",16),iN(299,"Tipo"),sg(),Tl(300,"th",16),iN(301,"Descri\xE7\xE3o"),sg()(),Tl(302,"tr",9)(303,"td",17),iN(304," mode"),sg(),Tl(305,"td",18)(306,"code",21),iN(307," 'small' "),sg(),Tl(308,"code",22),iN(309," 'medium' "),sg()(),Tl(310,"td",13)(311,"p"),iN(312,"Define o modo de densidade: "),Tl(313,"code"),iN(314,"small"),sg(),iN(315," para compacto, "),Tl(316,"code"),iN(317,"medium"),sg(),iN(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Tl(319,"code"),iN(320,"medium"),sg(),iN(321,"."),sg()()()(),Gl(322,"br"),Tl(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),iN(329," persistThemeActive "),sg()()()()(),Tl(330,"tr",13)(331,"td",13)(332,"p"),iN(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Tl(334,"code"),iN(335,"localStorage"),sg(),iN(336," para uso em recarregamentos futuros."),sg()()()(),Tl(337,"h5")(338,"b"),iN(339,"Retorno"),sg()(),Tl(340,"table",14)(341,"tr",15)(342,"th",16),iN(343,"Tipo"),sg(),Tl(344,"th",16),iN(345,"Descri\xE7\xE3o"),sg()(),Tl(346,"tr",9)(347,"td",18)(348,"code",19),iN(349,"PoTheme"),sg()(),Tl(350,"td",13)(351,"p"),iN(352,"O tema atualmente aplicado."),sg()()()(),Gl(353,"br"),Tl(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),iN(360," changeCurrentThemeType "),sg()()()()(),Tl(361,"tr",13)(362,"td",13)(363,"p"),iN(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),sg(),Tl(365,"p"),iN(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),sg()()()(),Tl(367,"h5")(368,"b"),iN(369,"Par\xE2metros"),sg()(),Tl(370,"table",14)(371,"tr",15)(372,"th",16),iN(373,"Nome"),sg(),Tl(374,"th",16),iN(375,"Tipo"),sg(),Tl(376,"th",16),iN(377,"Descri\xE7\xE3o"),sg()(),Tl(378,"tr",9)(379,"td",17),iN(380," themeType"),sg(),Tl(381,"td",18)(382,"code",19),iN(383," PoThemeTypeEnum "),sg()(),Tl(384,"td",13)(385,"p"),iN(386,"O tipo de tema a ser aplicado, light ou dark."),sg()()()(),Gl(387,"br"),Tl(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),iN(394," cleanThemeActive "),sg()()()()(),Tl(395,"tr",13)(396,"td",13)(397,"p"),iN(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),sg()()()(),Tl(399,"h5")(400,"b"),iN(401,"Par\xE2metros"),sg()(),Tl(402,"table",14)(403,"tr",15)(404,"th",16),iN(405,"Nome"),sg(),Tl(406,"th",16),iN(407,"Tipo"),sg(),Tl(408,"th",16),iN(409,"Descri\xE7\xE3o"),sg()(),Tl(410,"tr",9)(411,"td",17),iN(412," persistPreference"),sg(),Tl(413,"td",18)(414,"code",19),iN(415," boolean "),sg()(),Tl(416,"td",13)(417,"p"),iN(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),Tl(419,"code"),iN(420,"true"),sg(),iN(421," para remover, "),Tl(422,"code"),iN(423,"false"),sg(),iN(424," para manter."),sg()()()(),Gl(425,"br"),Tl(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),iN(432," getThemeActive "),sg()()()()(),Tl(433,"tr",13)(434,"td",13)(435,"p"),iN(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),Tl(437,"code"),iN(438,"localStorage"),sg(),iN(439,"."),sg()()()(),Tl(440,"h5")(441,"b"),iN(442,"Retorno"),sg()(),Tl(443,"table",14)(444,"tr",15)(445,"th",16),iN(446,"Tipo"),sg(),Tl(447,"th",16),iN(448,"Descri\xE7\xE3o"),sg()(),Tl(449,"tr",9)(450,"td",18)(451,"code",19),iN(452,"PoTheme"),sg()(),Tl(453,"td",13)(454,"p"),iN(455,"Tema ativo."),sg()()()(),Gl(456,"br"),Tl(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),iN(463," setDefaultTheme "),sg()()()()(),Tl(464,"tr",13)(465,"td",13)(466,"p"),iN(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),sg()()()(),Tl(468,"h5")(469,"b"),iN(470,"Par\xE2metros"),sg()(),Tl(471,"table",14)(472,"tr",15)(473,"th",16),iN(474,"Nome"),sg(),Tl(475,"th",16),iN(476,"Tipo"),sg(),Tl(477,"th",16),iN(478,"Descri\xE7\xE3o"),sg()(),Tl(479,"tr",9)(480,"td",17),iN(481," type"),sg(),Tl(482,"td",18)(483,"code",19),iN(484," PoThemeTypeEnum "),sg()(),Tl(485,"td",13)(486,"p"),iN(487,"O tipo de Tema a ser aplicado, light / dark."),sg()()()(),Gl(488,"br"),Tl(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),iN(495," setThemeType "),sg()()()()(),Tl(496,"tr",13)(497,"td",13)(498,"p"),iN(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),sg()()()(),Tl(500,"h5")(501,"b"),iN(502,"Par\xE2metros"),sg()(),Tl(503,"table",14)(504,"tr",15)(505,"th",16),iN(506,"Nome"),sg(),Tl(507,"th",16),iN(508,"Tipo"),sg(),Tl(509,"th",16),iN(510,"Descri\xE7\xE3o"),sg()(),Tl(511,"tr",9)(512,"td",17),iN(513," theme"),sg(),Tl(514,"td",18)(515,"code",19),iN(516," PoTheme "),sg()(),Tl(517,"td",13)(518,"p"),iN(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),sg()()(),Tl(520,"tr",9)(521,"td",17),iN(522," themeType"),sg(),Tl(523,"td",18)(524,"code",19),iN(525," PoThemeTypeEnum "),sg()(),Tl(526,"td",13)(527,"p"),iN(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),sg()()()(),Gl(529,"br"),Tl(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),iN(536," setCurrentThemeType "),sg()()()()(),Tl(537,"tr",13)(538,"td",13)(539,"p"),iN(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),sg()()()(),Tl(541,"h5")(542,"b"),iN(543,"Par\xE2metros"),sg()(),Tl(544,"table",14)(545,"tr",15)(546,"th",16),iN(547,"Nome"),sg(),Tl(548,"th",16),iN(549,"Tipo"),sg(),Tl(550,"th",16),iN(551,"Descri\xE7\xE3o"),sg()(),Tl(552,"tr",9)(553,"td",17),iN(554," themeType"),sg(),Tl(555,"td",18)(556,"code",19),iN(557," PoThemeTypeEnum "),sg()(),Tl(558,"td",13)(559,"p"),iN(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),sg()()()(),Gl(561,"br"),Tl(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),iN(568," setThemeA11y "),sg()()()()(),Tl(569,"tr",13)(570,"td",13)(571,"p"),iN(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),sg()()()(),Tl(573,"h5")(574,"b"),iN(575,"Par\xE2metros"),sg()(),Tl(576,"table",14)(577,"tr",15)(578,"th",16),iN(579,"Nome"),sg(),Tl(580,"th",16),iN(581,"Tipo"),sg(),Tl(582,"th",16),iN(583,"Descri\xE7\xE3o"),sg()(),Tl(584,"tr",9)(585,"td",17),iN(586," theme"),sg(),Tl(587,"td",18)(588,"code",19),iN(589," PoTheme "),sg()(),Tl(590,"td",13)(591,"p"),iN(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),sg()()(),Tl(593,"tr",9)(594,"td",17),iN(595," a11y"),sg(),Tl(596,"td",18)(597,"code",19),iN(598," PoThemeA11yEnum "),sg()(),Tl(599,"td",13)(600,"p"),iN(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),sg()()()(),Gl(602,"br"),Tl(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),iN(609," setCurrentThemeA11y "),sg()()()()(),Tl(610,"tr",13)(611,"td",13)(612,"p"),iN(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),sg()()()(),Tl(614,"h5")(615,"b"),iN(616,"Par\xE2metros"),sg()(),Tl(617,"table",14)(618,"tr",15)(619,"th",16),iN(620,"Nome"),sg(),Tl(621,"th",16),iN(622,"Tipo"),sg(),Tl(623,"th",16),iN(624,"Descri\xE7\xE3o"),sg()(),Tl(625,"tr",9)(626,"td",17),iN(627," a11y"),sg(),Tl(628,"td",18)(629,"code",19),iN(630," PoThemeA11yEnum "),sg()(),Tl(631,"td",13)(632,"p"),iN(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),sg()()()(),Gl(634,"br"),Tl(635,"h3"),iN(636,"Interfaces"),sg(),Tl(637,"h4",23)(638,"code",5),iN(639,"PoThemeColor"),sg()(),Tl(640,"div",2)(641,"p"),iN(642,"Interface para representar as cores do tema."),sg()(),Tl(643,"h4",7),iN(644,"Propriedades"),sg(),Tl(645,"table",14)(646,"tr",15)(647,"th",16),iN(648,"Nome"),sg(),Tl(649,"th",16),iN(650,"Tipo"),sg(),Tl(651,"th",16),iN(652,"Descri\xE7\xE3o"),sg()(),Tl(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),iN(657," action"),Gl(658,"br"),sg()()(),Tl(659,"td",18)(660,"code",24),iN(661,"PoThemeColorAction"),sg()(),Tl(662,"td",13)(663,"em")(664,"strong"),iN(665,"(opcional)"),sg()(),Tl(666,"p"),iN(667,"Cores da Action a serem aplicadas."),sg(),Tl(668,"p"),iN(669,"Exemplo de uso:"),sg(),Tl(670,"pre")(671,"code",25),iN(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),sg()()()(),Tl(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),iN(677," brand"),Gl(678,"br"),sg()()(),Tl(679,"td",18)(680,"code",26),iN(681,"poThemeColorBrand"),sg()(),Tl(682,"td",13)(683,"em")(684,"strong"),iN(685,"(opcional)"),sg()(),Tl(686,"p"),iN(687,"Cores da Brand a serem aplicadas."),sg(),Tl(688,"p"),iN(689,"Exemplo de uso:"),sg(),Tl(690,"pre")(691,"code",20),iN(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),sg()()()(),Tl(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),iN(697," categorical"),Gl(698,"br"),sg()()(),Tl(699,"td",18)(700,"code",27),iN(701,"PoThemeColorCategorical"),sg()(),Tl(702,"td",13)(703,"em")(704,"strong"),iN(705,"(opcional)"),sg()(),Tl(706,"p"),iN(707,"Cores da Categorical a serem aplicadas."),sg(),Tl(708,"p"),iN(709,"Exemplo de uso:"),sg(),Tl(710,"pre")(711,"code",20),iN(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),sg()()()(),Tl(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),iN(717," categorical-overlay"),Gl(718,"br"),sg()()(),Tl(719,"td",18)(720,"code",27),iN(721,"PoThemeColorCategorical"),sg()(),Tl(722,"td",13)(723,"em")(724,"strong"),iN(725,"(opcional)"),sg()(),Tl(726,"p"),iN(727,"Cores da Categorical a serem aplicadas."),sg(),Tl(728,"p"),iN(729,"Exemplo de uso:"),sg(),Tl(730,"pre")(731,"code",20),iN(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),sg()()()(),Tl(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),iN(737," neutral"),Gl(738,"br"),sg()()(),Tl(739,"td",18)(740,"code",28),iN(741,"PoThemeColorNeutral"),sg()(),Tl(742,"td",13)(743,"em")(744,"strong"),iN(745,"(opcional)"),sg()(),Tl(746,"p"),iN(747,"Cores Neutrals a serem aplicadas."),sg(),Tl(748,"p"),iN(749,"Exemplo de uso:"),sg(),Tl(750,"pre")(751,"code",20),iN(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),sg()()()()(),Tl(753,"h4",23)(754,"code",5),iN(755,"PoThemeColorAction"),sg()(),Tl(756,"div",2)(757,"p"),iN(758,"Interface para as cores de a\xE7\xE3o do tema."),sg()(),Tl(759,"h4",7),iN(760,"Propriedades"),sg(),Tl(761,"table",14)(762,"tr",15)(763,"th",16),iN(764,"Nome"),sg(),Tl(765,"th",16),iN(766,"Tipo"),sg(),Tl(767,"th",16),iN(768,"Descri\xE7\xE3o"),sg()(),Tl(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),iN(773," default"),Gl(774,"br"),sg()()(),Tl(775,"td",18)(776,"code",29),iN(777,"string"),sg()(),Tl(778,"td",13)(779,"em")(780,"strong"),iN(781,"(opcional)"),sg()(),Tl(782,"p"),iN(783,"Cores da Action 'Default'."),sg(),Tl(784,"p"),iN(785,"Exemplo de uso:"),sg(),Tl(786,"pre")(787,"code",20),iN(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),sg()()()(),Tl(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),iN(793," disabled"),Gl(794,"br"),sg()()(),Tl(795,"td",18)(796,"code",29),iN(797,"string"),sg()(),Tl(798,"td",13)(799,"em")(800,"strong"),iN(801,"(opcional)"),sg()(),Tl(802,"p"),iN(803,"Cores da Action de 'disabled'."),sg(),Tl(804,"p"),iN(805,"Exemplo de uso:"),sg(),Tl(806,"pre")(807,"code",20),iN(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),sg()()()(),Tl(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),iN(813," focus"),Gl(814,"br"),sg()()(),Tl(815,"td",18)(816,"code",29),iN(817,"string"),sg()(),Tl(818,"td",13)(819,"em")(820,"strong"),iN(821,"(opcional)"),sg()(),Tl(822,"p"),iN(823,"Cores da Action para 'focus'."),sg(),Tl(824,"p"),iN(825,"Exemplo de uso:"),sg(),Tl(826,"pre")(827,"code",20),iN(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),sg()()()(),Tl(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),iN(833," hover"),Gl(834,"br"),sg()()(),Tl(835,"td",18)(836,"code",29),iN(837,"string"),sg()(),Tl(838,"td",13)(839,"em")(840,"strong"),iN(841,"(opcional)"),sg()(),Tl(842,"p"),iN(843,"Cores da Action para 'hover'."),sg(),Tl(844,"p"),iN(845,"Exemplo de uso:"),sg(),Tl(846,"pre")(847,"code",20),iN(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),sg()()()(),Tl(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),iN(853," pressed"),Gl(854,"br"),sg()()(),Tl(855,"td",18)(856,"code",29),iN(857,"string"),sg()(),Tl(858,"td",13)(859,"em")(860,"strong"),iN(861,"(opcional)"),sg()(),Tl(862,"p"),iN(863,"Cores da Action para 'pressed'."),sg(),Tl(864,"p"),iN(865,"Exemplo de uso:"),sg(),Tl(866,"pre")(867,"code",20),iN(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),sg()()()()(),Tl(869,"h4",23)(870,"code",5),iN(871,"PoThemeColorNeutral"),sg()(),Tl(872,"div",2)(873,"p"),iN(874,"Interface para as cores neutras do tema."),sg()(),Tl(875,"h4",7),iN(876,"Propriedades"),sg(),Tl(877,"table",14)(878,"tr",15)(879,"th",16),iN(880,"Nome"),sg(),Tl(881,"th",16),iN(882,"Tipo"),sg(),Tl(883,"th",16),iN(884,"Descri\xE7\xE3o"),sg()(),Tl(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),iN(889," dark"),Gl(890,"br"),sg()()(),Tl(891,"td",18)(892,"code",30),iN(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),sg()(),Tl(894,"td",13)(895,"em")(896,"strong"),iN(897,"(opcional)"),sg()(),Tl(898,"p"),iN(899,"Cores Neutrals do tipo 'dark'."),sg(),Tl(900,"p"),iN(901,"Exemplo de uso:"),sg(),Tl(902,"pre")(903,"code",20),iN(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),sg()()()(),Tl(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),iN(909," light"),Gl(910,"br"),sg()()(),Tl(911,"td",18)(912,"code",31),iN(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),sg()(),Tl(914,"td",13)(915,"em")(916,"strong"),iN(917,"(opcional)"),sg()(),Tl(918,"p"),iN(919,"Cores Neutrals do tipo 'light'."),sg(),Tl(920,"p"),iN(921,"Exemplo de uso:"),sg(),Tl(922,"pre")(923,"code",20),iN(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),sg()()()(),Tl(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),iN(929," mid"),Gl(930,"br"),sg()()(),Tl(931,"td",18)(932,"code",32),iN(933,`{ '40'?: string; '60'?: string;
}`),sg()(),Tl(934,"td",13)(935,"em")(936,"strong"),iN(937,"(opcional)"),sg()(),Tl(938,"p"),iN(939,"Cores Neutrals do tipo 'mid'."),sg(),Tl(940,"p"),iN(941,"Exemplo de uso:"),sg(),Tl(942,"pre")(943,"code",20),iN(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),sg()()()()(),Tl(945,"h4",23)(946,"code",5),iN(947,"PoThemeTokens"),sg()(),Tl(948,"div",2)(949,"p"),iN(950,"Interface para o tema da aplica\xE7\xE3o."),sg()(),Tl(951,"h4",23)(952,"code",5),iN(953,"PoThemeToken"),sg()(),Tl(954,"div",2)(955,"p"),iN(956,"Interface para os tokens do Tema."),sg()(),Tl(957,"h4",7),iN(958,"Propriedades"),sg(),Tl(959,"table",14)(960,"tr",15)(961,"th",16),iN(962,"Nome"),sg(),Tl(963,"th",16),iN(964,"Tipo"),sg(),Tl(965,"th",16),iN(966,"Descri\xE7\xE3o"),sg()(),Tl(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),iN(971," color"),Gl(972,"br"),sg()()(),Tl(973,"td",18)(974,"code",33),iN(975,"PoThemeColor"),sg()(),Tl(976,"td",13)(977,"em")(978,"strong"),iN(979,"(opcional)"),sg()(),Tl(980,"p"),iN(981,"Tokens do tipo 'color'"),sg()()(),Tl(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),iN(986," onRoot"),Gl(987,"br"),sg()()(),Tl(988,"td",18)(989,"code",34),iN(990,"DynamicProperties"),sg()(),Tl(991,"td",13)(992,"em")(993,"strong"),iN(994,"(opcional)"),sg()(),Tl(995,"p"),iN(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Tl(997,"code"),iN(998,":root"),sg()(),Tl(999,"p"),iN(1e3,"Exemplo de uso:"),sg(),Tl(1001,"pre")(1002,"code",20),iN(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),sg()()()(),Tl(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),iN(1008," perComponent"),Gl(1009,"br"),sg()()(),Tl(1010,"td",18)(1011,"code",34),iN(1012,"DynamicProperties"),sg()(),Tl(1013,"td",13)(1014,"em")(1015,"strong"),iN(1016,"(opcional)"),sg()(),Tl(1017,"p"),iN(1018,"Tokens do tipo 'perComponent'"),sg(),Tl(1019,"p"),iN(1020,"Exemplo de uso:"),sg(),Tl(1021,"pre")(1022,"code",20),iN(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),sg()()()()(),Tl(1024,"h4",23)(1025,"code",5),iN(1026,"PoTheme"),sg()(),Tl(1027,"div",2)(1028,"p"),iN(1029,"Interface para o m\xE9todo "),Tl(1030,"code"),iN(1031,"setTheme()"),sg(),iN(1032,"."),sg()(),Tl(1033,"h4",7),iN(1034,"Propriedades"),sg(),Tl(1035,"table",14)(1036,"tr",15)(1037,"th",16),iN(1038,"Nome"),sg(),Tl(1039,"th",16),iN(1040,"Tipo"),sg(),Tl(1041,"th",16),iN(1042,"Descri\xE7\xE3o"),sg()(),Tl(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),iN(1047," active"),Gl(1048,"br"),sg()()(),Tl(1049,"td",18)(1050,"code",35),iN(1051,"PoThemeTypeEnum "),sg(),Tl(1052,"code",36),iN(1053," PoThemeActive"),sg()(),Tl(1054,"td",13)(1055,"em")(1056,"strong"),iN(1057,"(opcional)"),sg()(),Tl(1058,"p"),iN(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),sg()()(),Tl(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),iN(1064," name"),Gl(1065,"br"),sg()()(),Tl(1066,"td",18)(1067,"code",29),iN(1068,"string"),sg()(),Tl(1069,"td",13)(1070,"p"),iN(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),sg()()(),Tl(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),iN(1076," type"),Gl(1077,"br"),sg()()(),Tl(1078,"td",18)(1079,"code",37),iN(1080,"PoThemeType "),sg(),Tl(1081,"code",38),iN(1082," Array<PoThemeType>"),sg()(),Tl(1083,"td",13)(1084,"p"),iN(1085,"Tipo de tema:"),sg(),Tl(1086,"ul")(1087,"li"),iN(1088,"light"),sg(),Tl(1089,"li"),iN(1090,"dark"),sg()()()()(),Tl(1091,"h3"),iN(1092,"Enums"),sg(),Tl(1093,"h4",4)(1094,"code",5),iN(1095,"PoThemeA11yEnum"),sg()(),Tl(1096,"div",2)(1097,"p"),iN(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),sg(),Tl(1099,"pre")(1100,"code"),iN(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),sg()()(),Tl(1102,"h4",7),iN(1103,"Propriedades"),sg(),Tl(1104,"table",14)(1105,"tr",15)(1106,"th",16),iN(1107,"Nome"),sg(),Tl(1108,"th",16),iN(1109,"Descri\xE7\xE3o"),sg()(),Tl(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),iN(1114," AA"),Gl(1115,"br"),sg()()(),Tl(1116,"td",13)(1117,"p"),iN(1118,"N\xEDvel de acessibilidade AA."),sg(),Tl(1119,"ul")(1120,"li"),iN(1121,"Define a espessura do "),Tl(1122,"code"),iN(1123,"outline"),sg(),iN(1124," para "),Tl(1125,"strong"),iN(1126,"2px"),sg(),iN(1127,"."),sg(),Tl(1128,"li"),iN(1129,"Disponibiliza o tamanho "),Tl(1130,"code"),iN(1131,"small"),sg(),iN(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),sg()()()(),Tl(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),iN(1137," AAA"),Gl(1138,"br"),sg()()(),Tl(1139,"td",13)(1140,"p"),iN(1141,"N\xEDvel de acessibilidade AAA."),sg(),Tl(1142,"ul")(1143,"li"),iN(1144,"Define a espessura do "),Tl(1145,"code"),iN(1146,"outline"),sg(),iN(1147," para "),Tl(1148,"strong"),iN(1149,"4px"),sg(),iN(1150,"."),sg(),Tl(1151,"li"),iN(1152,"N\xE3o disponibiliza o tamanho "),Tl(1153,"code"),iN(1154,"small"),sg(),iN(1155," para componentes de formul\xE1rio."),sg()()()()(),Tl(1156,"h4",4)(1157,"code",5),iN(1158,"PoThemeTypeEnum"),sg()(),Tl(1159,"div",2)(1160,"p"),iN(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),sg(),Tl(1162,"pre")(1163,"code"),iN(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),sg()()(),Tl(1165,"h4",7),iN(1166,"Propriedades"),sg(),Tl(1167,"table",14)(1168,"tr",15)(1169,"th",16),iN(1170,"Nome"),sg(),Tl(1171,"th",16),iN(1172,"Descri\xE7\xE3o"),sg()(),Tl(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),iN(1177," light"),Gl(1178,"br"),sg()()(),Tl(1179,"td",13)(1180,"p"),iN(1181,"Define o tema como claro."),sg()()(),Tl(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),iN(1186," dark"),Gl(1187,"br"),sg()()(),Tl(1188,"td",13)(1189,"p"),iN(1190,"Define o tema como escuro."),sg()()()()());},encapsulation:2,changeDetection:1})}return m})();var Ae=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(w(Xn),w(wn))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-theme-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-theme-labs-view"),sg()()()),a&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,fe,Te],encapsulation:2,changeDetection:1})}return m})();var we=[{path:"",component:Ae}],ye=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[DL.forChild(we),DL]})}return m})();var Ze=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[sr,ye]})}return m})();export{Ze as DocPoThemeModule};