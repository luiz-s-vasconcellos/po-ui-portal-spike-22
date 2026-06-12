import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dT as yo,r as r$1,dU as pv,s,dV as lue,dW as aue,dX as cv,dY as tue,dZ as iue,d_ as eue,d$ as ni,cS as am,ae as He,cR as fY,e0 as R3,aW as lY,aF as sY,aX as aY,aG as gk,cV as bk,cW as wk,a$ as Qt,cE as Uz,b3 as q3,ct as Hhe,cc as Nde,d0 as $3,cd as sme,b5 as Ko,b9 as ONe,aB as gx,Q as Cl,R as Hl,aN as Z0,a1 as dt,T as og,aM as gw,H as Lp,Z as ZE,aP as X0,aO as pw,W as we$1,av as zl,aw as uo,ax as fo,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,ar as Fx,au as dg,bw as oN,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Ce=["reactiveFormData"],be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},eue),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},iue),{info:s(r$1({},iue.info),{base:"#0079b8"})}),neutral:r$1({},tue)},onRoot:s(r$1({},cv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},cv.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},aue),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},lue),{info:s(r$1({},lue.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},pv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},pv.perComponent)}},active:yo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?ni.AAA:ni.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(ni.AAA,false),this.a11yLevel=ni.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(ni.AA,false),this.a11yLevel=ni.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===ni.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",am.compose([am.required,am.minLength(5),am.maxLength(30)])],address:["",am.compose([am.required,am.minLength(5),am.maxLength(50)])],number:["",am.compose([am.required,am.min(1),am.max(99999)])],email:["",am.required],website:["",am.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(w(He),w(fY),w(R3))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&zl(Ce,7),a&2){let c;uo(c=fo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we$1([R3])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=gx();Cl(0,"po-widget",1)(1,"form",2),Hl(2,"po-input",3),Z0(),Hl(3,"po-email",4),Z0(),Hl(4,"po-input",5),Z0(),Hl(5,"po-number",6),Z0(),Hl(6,"po-url",7),Z0(),Cl(7,"div",8)(8,"po-button",9),dt("p-click",function(){return o.saveForm()}),og()()(),Cl(9,"po-modal",10,0)(11,"div",8),Hl(12,"po-info",11),og(),Cl(13,"div",8),Hl(14,"po-info",12)(15,"po-info",13),og(),Cl(16,"div",8),Hl(17,"po-info",14)(18,"po-info",15),og()()(),Cl(19,"div",16)(20,"po-radio-group",17),gw("ngModelChange",function(h){return Jy(c),Zx(o.theme,h)||(o.theme=h),e_(h)}),dt("p-change",function(h){return o.changeTheme(h)}),og(),Z0(),Cl(21,"po-radio-group",18),gw("ngModelChange",function(h){return Jy(c),Zx(o.a11yLevel,h)||(o.a11yLevel=h),e_(h)}),dt("p-change",function(h){return o.changeA11yLevel(h)}),og(),Z0(),og();}a&2&&(Lp(),ZE("formGroup",o.reactiveForm),Lp(),X0(),Lp(),X0(),Lp(),X0(),Lp(),X0(),Lp(),X0(),Lp(2),ZE("p-disabled",!o.reactiveForm.valid),Lp(),ZE("p-primary-action",o.modalPrimaryAction),Lp(3),ZE("p-value",o.reactiveForm.controls.name.value),Lp(2),ZE("p-value",o.reactiveForm.controls.address.value),Lp(),ZE("p-value",o.reactiveForm.controls.number.value),Lp(2),ZE("p-value",o.reactiveForm.controls.email.value),Lp(),ZE("p-value",o.reactiveForm.controls.website.value),Lp(2),pw("ngModel",o.theme),ZE("p-options",o.themeOptions),X0(),Lp(),pw("ngModel",o.a11yLevel),ZE("p-options",o.a11yLevelOptions),X0());},dependencies:[lY,sY,aY,gk,bk,wk,Qt,Uz,q3,Hhe,Nde,$3,sme,Ko,ONe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m}),fe=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Theme Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-widget p-title="Example">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-theme-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return m})();var Te=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoThemeModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do servi\xE7o PoThemeService."),og()(),Cl(7,"h3",3),qx(8,"Services"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoThemeService"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O servi\xE7o "),Cl(15,"code"),qx(16,"PoThemeService"),og(),qx(17," permite customizar as cores do tema padr\xE3o do "),Cl(18,"code"),qx(19,"PO-UI"),og(),qx(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),og(),Cl(21,"p"),qx(22,"O n\xEDvel "),Cl(23,"strong"),qx(24,"AAA"),og(),qx(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Cl(26,"strong"),qx(27,"AA"),og(),qx(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),og(),Cl(29,"p"),qx(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),Cl(31,"strong"),qx(32,"densidade de espa\xE7amentos"),og(),qx(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),og(),Cl(34,"blockquote")(35,"p"),qx(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),Cl(37,"code"),qx(38,"feedback"),og(),qx(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),og()(),Cl(40,"blockquote")(41,"p"),qx(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Cl(43,"a",6),qx(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),og(),qx(45," na aba "),Cl(46,"code"),qx(47,"Guias"),og(),qx(48,"."),og()()(),Cl(49,"h3",7),qx(50,"M\xE9todos"),og(),Cl(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),qx(57," setTheme "),og()()()()(),Cl(58,"tr",13)(59,"td",13)(60,"p"),qx(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),og(),Cl(62,"p"),qx(63,"Este m\xE9todo configura o tema do componente com base no objeto "),Cl(64,"code"),qx(65,"themeConfig"),og(),qx(66," fornecido, no "),Cl(67,"code"),qx(68,"themeType"),og(),qx(69," e no "),Cl(70,"code"),qx(71,"a11yLevel"),og(),qx(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),og()()()(),Cl(73,"h5")(74,"b"),qx(75,"Par\xE2metros"),og()(),Cl(76,"table",14)(77,"tr",15)(78,"th",16),qx(79,"Nome"),og(),Cl(80,"th",16),qx(81,"Tipo"),og(),Cl(82,"th",16),qx(83,"Descri\xE7\xE3o"),og()(),Cl(84,"tr",9)(85,"td",17),qx(86," themeConfig"),og(),Cl(87,"td",18)(88,"code",19),qx(89," PoTheme "),og()(),Cl(90,"td",13)(91,"p"),qx(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),og()()(),Cl(93,"tr",9)(94,"td",17),qx(95," themeType"),og(),Cl(96,"td",18)(97,"code",19),qx(98," PoThemeTypeEnum "),og()(),Cl(99,"td",13)(100,"p"),qx(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),og()()(),Cl(102,"tr",9)(103,"td",17),qx(104," a11yLevel"),og(),Cl(105,"td",18)(106,"code",19),qx(107," PoThemeA11yEnum "),og()(),Cl(108,"td",13)(109,"p"),qx(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),og()()(),Cl(111,"tr",9)(112,"td",17),qx(113," persistPreference"),og(),Cl(114,"td",18)(115,"code",19),qx(116," boolean "),og()(),Cl(117,"td",13)(118,"p"),qx(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Cl(120,"code"),qx(121,"true"),og(),qx(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),og()()()(),Hl(123,"br"),Cl(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),qx(130," getA11yLevel "),og()()()()(),Cl(131,"tr",13)(132,"td",13)(133,"p"),qx(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Cl(135,"code"),qx(136,"AAA"),og(),qx(137," como padr\xE3o."),og()()()(),Cl(138,"h5")(139,"b"),qx(140,"Retorno"),og()(),Cl(141,"table",14)(142,"tr",15)(143,"th",16),qx(144,"Tipo"),og(),Cl(145,"th",16),qx(146,"Descri\xE7\xE3o"),og()(),Cl(147,"tr",9)(148,"td",18)(149,"code",19),qx(150,"PoThemeA11yEnum"),og()(),Cl(151,"td",13)(152,"p"),qx(153,"O n\xEDvel de acessibilidade, que pode ser "),Cl(154,"code"),qx(155,"AA"),og(),qx(156," ou "),Cl(157,"code"),qx(158,"AAA"),og(),qx(159,"."),og()()()(),Hl(160,"br"),Cl(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),qx(167," setA11yDefaultSizeSmall "),og()()()()(),Cl(168,"tr",13)(169,"td",13)(170,"p"),qx(171,"Define o tamanho "),Cl(172,"code"),qx(173,"small"),og(),qx(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Cl(175,"code"),qx(176,"AA"),og(),qx(177,`. O valor definido \xE9 salvo no
`),Cl(178,"code"),qx(179,"localStorage"),og(),qx(180," sob a chave "),Cl(181,"code"),qx(182,"po-default-size"),og(),qx(183," e o atributo "),Cl(184,"code"),qx(185,"data-default-size"),og(),qx(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),og(),Cl(187,"p"),qx(188,"Exemplo de uso:"),og(),Cl(189,"pre")(190,"code",20),qx(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),og()(),Cl(192,"blockquote")(193,"p"),qx(194,"Para garantir que o tamanho "),Cl(195,"code"),qx(196,"small"),og(),qx(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Cl(198,"strong"),qx(199,"junto com o n\xEDvel de acessibilidade "),Cl(200,"code"),qx(201,"AA"),og(),qx(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),og(),qx(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Cl(204,"code"),qx(205,"setDensityMode"),og(),qx(206," conforme necess\xE1rio."),og()()()()(),Cl(207,"h5")(208,"b"),qx(209,"Par\xE2metros"),og()(),Cl(210,"table",14)(211,"tr",15)(212,"th",16),qx(213,"Nome"),og(),Cl(214,"th",16),qx(215,"Tipo"),og(),Cl(216,"th",16),qx(217,"Descri\xE7\xE3o"),og()(),Cl(218,"tr",9)(219,"td",17),qx(220," enable"),og(),Cl(221,"td",18)(222,"code",19),qx(223," boolean "),og()(),Cl(224,"td",13)(225,"p"),qx(226,"Habilita ou desabilita o tamanho "),Cl(227,"code"),qx(228,"small"),og(),qx(229," globalmente."),og()()()(),Hl(230,"br"),Cl(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),qx(237," getDensityMode "),og()()()()(),Cl(238,"tr",13)(239,"td",13)(240,"p"),qx(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Cl(242,"code"),qx(243,"medium"),og(),qx(244," como padr\xE3o."),og()()()(),Cl(245,"h5")(246,"b"),qx(247,"Retorno"),og()(),Cl(248,"table",14)(249,"tr",15)(250,"th",16),qx(251,"Tipo"),og(),Cl(252,"th",16),qx(253,"Descri\xE7\xE3o"),og()(),Cl(254,"tr",9)(255,"td",18)(256,"code",19),qx(257,"PoDensityMode"),og()(),Cl(258,"td",13)(259,"p"),qx(260,"O modo de adensamento, que pode ser "),Cl(261,"code"),qx(262,"small"),og(),qx(263," ou "),Cl(264,"code"),qx(265,"medium"),og(),qx(266,"."),og()()()(),Hl(267,"br"),Cl(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),qx(274," setDensityMode "),og()()()()(),Cl(275,"tr",13)(276,"td",13)(277,"p"),qx(278,"Aplica o modo de adensamento compacto ("),Cl(279,"code"),qx(280,"small"),og(),qx(281,") ou espa\xE7oso ("),Cl(282,"code"),qx(283,"medium"),og(),qx(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Cl(285,"code"),qx(286,"localStorage"),og(),qx(287,` sob a chave
`),Cl(288,"code"),qx(289,"po-density-mode"),og(),qx(290,"."),og()()()(),Cl(291,"h5")(292,"b"),qx(293,"Par\xE2metros"),og()(),Cl(294,"table",14)(295,"tr",15)(296,"th",16),qx(297,"Nome"),og(),Cl(298,"th",16),qx(299,"Tipo"),og(),Cl(300,"th",16),qx(301,"Descri\xE7\xE3o"),og()(),Cl(302,"tr",9)(303,"td",17),qx(304," mode"),og(),Cl(305,"td",18)(306,"code",21),qx(307," 'small' "),og(),Cl(308,"code",22),qx(309," 'medium' "),og()(),Cl(310,"td",13)(311,"p"),qx(312,"Define o modo de densidade: "),Cl(313,"code"),qx(314,"small"),og(),qx(315," para compacto, "),Cl(316,"code"),qx(317,"medium"),og(),qx(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Cl(319,"code"),qx(320,"medium"),og(),qx(321,"."),og()()()(),Hl(322,"br"),Cl(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),qx(329," persistThemeActive "),og()()()()(),Cl(330,"tr",13)(331,"td",13)(332,"p"),qx(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Cl(334,"code"),qx(335,"localStorage"),og(),qx(336," para uso em recarregamentos futuros."),og()()()(),Cl(337,"h5")(338,"b"),qx(339,"Retorno"),og()(),Cl(340,"table",14)(341,"tr",15)(342,"th",16),qx(343,"Tipo"),og(),Cl(344,"th",16),qx(345,"Descri\xE7\xE3o"),og()(),Cl(346,"tr",9)(347,"td",18)(348,"code",19),qx(349,"PoTheme"),og()(),Cl(350,"td",13)(351,"p"),qx(352,"O tema atualmente aplicado."),og()()()(),Hl(353,"br"),Cl(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),qx(360," changeCurrentThemeType "),og()()()()(),Cl(361,"tr",13)(362,"td",13)(363,"p"),qx(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),og(),Cl(365,"p"),qx(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),og()()()(),Cl(367,"h5")(368,"b"),qx(369,"Par\xE2metros"),og()(),Cl(370,"table",14)(371,"tr",15)(372,"th",16),qx(373,"Nome"),og(),Cl(374,"th",16),qx(375,"Tipo"),og(),Cl(376,"th",16),qx(377,"Descri\xE7\xE3o"),og()(),Cl(378,"tr",9)(379,"td",17),qx(380," themeType"),og(),Cl(381,"td",18)(382,"code",19),qx(383," PoThemeTypeEnum "),og()(),Cl(384,"td",13)(385,"p"),qx(386,"O tipo de tema a ser aplicado, light ou dark."),og()()()(),Hl(387,"br"),Cl(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),qx(394," cleanThemeActive "),og()()()()(),Cl(395,"tr",13)(396,"td",13)(397,"p"),qx(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),og()()()(),Cl(399,"h5")(400,"b"),qx(401,"Par\xE2metros"),og()(),Cl(402,"table",14)(403,"tr",15)(404,"th",16),qx(405,"Nome"),og(),Cl(406,"th",16),qx(407,"Tipo"),og(),Cl(408,"th",16),qx(409,"Descri\xE7\xE3o"),og()(),Cl(410,"tr",9)(411,"td",17),qx(412," persistPreference"),og(),Cl(413,"td",18)(414,"code",19),qx(415," boolean "),og()(),Cl(416,"td",13)(417,"p"),qx(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),Cl(419,"code"),qx(420,"true"),og(),qx(421," para remover, "),Cl(422,"code"),qx(423,"false"),og(),qx(424," para manter."),og()()()(),Hl(425,"br"),Cl(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),qx(432," getThemeActive "),og()()()()(),Cl(433,"tr",13)(434,"td",13)(435,"p"),qx(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),Cl(437,"code"),qx(438,"localStorage"),og(),qx(439,"."),og()()()(),Cl(440,"h5")(441,"b"),qx(442,"Retorno"),og()(),Cl(443,"table",14)(444,"tr",15)(445,"th",16),qx(446,"Tipo"),og(),Cl(447,"th",16),qx(448,"Descri\xE7\xE3o"),og()(),Cl(449,"tr",9)(450,"td",18)(451,"code",19),qx(452,"PoTheme"),og()(),Cl(453,"td",13)(454,"p"),qx(455,"Tema ativo."),og()()()(),Hl(456,"br"),Cl(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),qx(463," setDefaultTheme "),og()()()()(),Cl(464,"tr",13)(465,"td",13)(466,"p"),qx(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),og()()()(),Cl(468,"h5")(469,"b"),qx(470,"Par\xE2metros"),og()(),Cl(471,"table",14)(472,"tr",15)(473,"th",16),qx(474,"Nome"),og(),Cl(475,"th",16),qx(476,"Tipo"),og(),Cl(477,"th",16),qx(478,"Descri\xE7\xE3o"),og()(),Cl(479,"tr",9)(480,"td",17),qx(481," type"),og(),Cl(482,"td",18)(483,"code",19),qx(484," PoThemeTypeEnum "),og()(),Cl(485,"td",13)(486,"p"),qx(487,"O tipo de Tema a ser aplicado, light / dark."),og()()()(),Hl(488,"br"),Cl(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),qx(495," setThemeType "),og()()()()(),Cl(496,"tr",13)(497,"td",13)(498,"p"),qx(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),og()()()(),Cl(500,"h5")(501,"b"),qx(502,"Par\xE2metros"),og()(),Cl(503,"table",14)(504,"tr",15)(505,"th",16),qx(506,"Nome"),og(),Cl(507,"th",16),qx(508,"Tipo"),og(),Cl(509,"th",16),qx(510,"Descri\xE7\xE3o"),og()(),Cl(511,"tr",9)(512,"td",17),qx(513," theme"),og(),Cl(514,"td",18)(515,"code",19),qx(516," PoTheme "),og()(),Cl(517,"td",13)(518,"p"),qx(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),og()()(),Cl(520,"tr",9)(521,"td",17),qx(522," themeType"),og(),Cl(523,"td",18)(524,"code",19),qx(525," PoThemeTypeEnum "),og()(),Cl(526,"td",13)(527,"p"),qx(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),og()()()(),Hl(529,"br"),Cl(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),qx(536," setCurrentThemeType "),og()()()()(),Cl(537,"tr",13)(538,"td",13)(539,"p"),qx(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),og()()()(),Cl(541,"h5")(542,"b"),qx(543,"Par\xE2metros"),og()(),Cl(544,"table",14)(545,"tr",15)(546,"th",16),qx(547,"Nome"),og(),Cl(548,"th",16),qx(549,"Tipo"),og(),Cl(550,"th",16),qx(551,"Descri\xE7\xE3o"),og()(),Cl(552,"tr",9)(553,"td",17),qx(554," themeType"),og(),Cl(555,"td",18)(556,"code",19),qx(557," PoThemeTypeEnum "),og()(),Cl(558,"td",13)(559,"p"),qx(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),og()()()(),Hl(561,"br"),Cl(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),qx(568," setThemeA11y "),og()()()()(),Cl(569,"tr",13)(570,"td",13)(571,"p"),qx(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),og()()()(),Cl(573,"h5")(574,"b"),qx(575,"Par\xE2metros"),og()(),Cl(576,"table",14)(577,"tr",15)(578,"th",16),qx(579,"Nome"),og(),Cl(580,"th",16),qx(581,"Tipo"),og(),Cl(582,"th",16),qx(583,"Descri\xE7\xE3o"),og()(),Cl(584,"tr",9)(585,"td",17),qx(586," theme"),og(),Cl(587,"td",18)(588,"code",19),qx(589," PoTheme "),og()(),Cl(590,"td",13)(591,"p"),qx(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),og()()(),Cl(593,"tr",9)(594,"td",17),qx(595," a11y"),og(),Cl(596,"td",18)(597,"code",19),qx(598," PoThemeA11yEnum "),og()(),Cl(599,"td",13)(600,"p"),qx(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),og()()()(),Hl(602,"br"),Cl(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),qx(609," setCurrentThemeA11y "),og()()()()(),Cl(610,"tr",13)(611,"td",13)(612,"p"),qx(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),og()()()(),Cl(614,"h5")(615,"b"),qx(616,"Par\xE2metros"),og()(),Cl(617,"table",14)(618,"tr",15)(619,"th",16),qx(620,"Nome"),og(),Cl(621,"th",16),qx(622,"Tipo"),og(),Cl(623,"th",16),qx(624,"Descri\xE7\xE3o"),og()(),Cl(625,"tr",9)(626,"td",17),qx(627," a11y"),og(),Cl(628,"td",18)(629,"code",19),qx(630," PoThemeA11yEnum "),og()(),Cl(631,"td",13)(632,"p"),qx(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),og()()()(),Hl(634,"br"),Cl(635,"h3"),qx(636,"Interfaces"),og(),Cl(637,"h4",23)(638,"code",5),qx(639,"PoThemeColor"),og()(),Cl(640,"div",2)(641,"p"),qx(642,"Interface para representar as cores do tema."),og()(),Cl(643,"h4",7),qx(644,"Propriedades"),og(),Cl(645,"table",14)(646,"tr",15)(647,"th",16),qx(648,"Nome"),og(),Cl(649,"th",16),qx(650,"Tipo"),og(),Cl(651,"th",16),qx(652,"Descri\xE7\xE3o"),og()(),Cl(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),qx(657," action"),Hl(658,"br"),og()()(),Cl(659,"td",18)(660,"code",24),qx(661,"PoThemeColorAction"),og()(),Cl(662,"td",13)(663,"em")(664,"strong"),qx(665,"(opcional)"),og()(),Cl(666,"p"),qx(667,"Cores da Action a serem aplicadas."),og(),Cl(668,"p"),qx(669,"Exemplo de uso:"),og(),Cl(670,"pre")(671,"code",25),qx(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),og()()()(),Cl(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),qx(677," brand"),Hl(678,"br"),og()()(),Cl(679,"td",18)(680,"code",26),qx(681,"poThemeColorBrand"),og()(),Cl(682,"td",13)(683,"em")(684,"strong"),qx(685,"(opcional)"),og()(),Cl(686,"p"),qx(687,"Cores da Brand a serem aplicadas."),og(),Cl(688,"p"),qx(689,"Exemplo de uso:"),og(),Cl(690,"pre")(691,"code",20),qx(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),og()()()(),Cl(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),qx(697," categorical"),Hl(698,"br"),og()()(),Cl(699,"td",18)(700,"code",27),qx(701,"PoThemeColorCategorical"),og()(),Cl(702,"td",13)(703,"em")(704,"strong"),qx(705,"(opcional)"),og()(),Cl(706,"p"),qx(707,"Cores da Categorical a serem aplicadas."),og(),Cl(708,"p"),qx(709,"Exemplo de uso:"),og(),Cl(710,"pre")(711,"code",20),qx(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),og()()()(),Cl(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),qx(717," categorical-overlay"),Hl(718,"br"),og()()(),Cl(719,"td",18)(720,"code",27),qx(721,"PoThemeColorCategorical"),og()(),Cl(722,"td",13)(723,"em")(724,"strong"),qx(725,"(opcional)"),og()(),Cl(726,"p"),qx(727,"Cores da Categorical a serem aplicadas."),og(),Cl(728,"p"),qx(729,"Exemplo de uso:"),og(),Cl(730,"pre")(731,"code",20),qx(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),og()()()(),Cl(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),qx(737," neutral"),Hl(738,"br"),og()()(),Cl(739,"td",18)(740,"code",28),qx(741,"PoThemeColorNeutral"),og()(),Cl(742,"td",13)(743,"em")(744,"strong"),qx(745,"(opcional)"),og()(),Cl(746,"p"),qx(747,"Cores Neutrals a serem aplicadas."),og(),Cl(748,"p"),qx(749,"Exemplo de uso:"),og(),Cl(750,"pre")(751,"code",20),qx(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),og()()()()(),Cl(753,"h4",23)(754,"code",5),qx(755,"PoThemeColorAction"),og()(),Cl(756,"div",2)(757,"p"),qx(758,"Interface para as cores de a\xE7\xE3o do tema."),og()(),Cl(759,"h4",7),qx(760,"Propriedades"),og(),Cl(761,"table",14)(762,"tr",15)(763,"th",16),qx(764,"Nome"),og(),Cl(765,"th",16),qx(766,"Tipo"),og(),Cl(767,"th",16),qx(768,"Descri\xE7\xE3o"),og()(),Cl(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),qx(773," default"),Hl(774,"br"),og()()(),Cl(775,"td",18)(776,"code",29),qx(777,"string"),og()(),Cl(778,"td",13)(779,"em")(780,"strong"),qx(781,"(opcional)"),og()(),Cl(782,"p"),qx(783,"Cores da Action 'Default'."),og(),Cl(784,"p"),qx(785,"Exemplo de uso:"),og(),Cl(786,"pre")(787,"code",20),qx(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),og()()()(),Cl(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),qx(793," disabled"),Hl(794,"br"),og()()(),Cl(795,"td",18)(796,"code",29),qx(797,"string"),og()(),Cl(798,"td",13)(799,"em")(800,"strong"),qx(801,"(opcional)"),og()(),Cl(802,"p"),qx(803,"Cores da Action de 'disabled'."),og(),Cl(804,"p"),qx(805,"Exemplo de uso:"),og(),Cl(806,"pre")(807,"code",20),qx(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),og()()()(),Cl(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),qx(813," focus"),Hl(814,"br"),og()()(),Cl(815,"td",18)(816,"code",29),qx(817,"string"),og()(),Cl(818,"td",13)(819,"em")(820,"strong"),qx(821,"(opcional)"),og()(),Cl(822,"p"),qx(823,"Cores da Action para 'focus'."),og(),Cl(824,"p"),qx(825,"Exemplo de uso:"),og(),Cl(826,"pre")(827,"code",20),qx(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),og()()()(),Cl(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),qx(833," hover"),Hl(834,"br"),og()()(),Cl(835,"td",18)(836,"code",29),qx(837,"string"),og()(),Cl(838,"td",13)(839,"em")(840,"strong"),qx(841,"(opcional)"),og()(),Cl(842,"p"),qx(843,"Cores da Action para 'hover'."),og(),Cl(844,"p"),qx(845,"Exemplo de uso:"),og(),Cl(846,"pre")(847,"code",20),qx(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),og()()()(),Cl(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),qx(853," pressed"),Hl(854,"br"),og()()(),Cl(855,"td",18)(856,"code",29),qx(857,"string"),og()(),Cl(858,"td",13)(859,"em")(860,"strong"),qx(861,"(opcional)"),og()(),Cl(862,"p"),qx(863,"Cores da Action para 'pressed'."),og(),Cl(864,"p"),qx(865,"Exemplo de uso:"),og(),Cl(866,"pre")(867,"code",20),qx(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),og()()()()(),Cl(869,"h4",23)(870,"code",5),qx(871,"PoThemeColorNeutral"),og()(),Cl(872,"div",2)(873,"p"),qx(874,"Interface para as cores neutras do tema."),og()(),Cl(875,"h4",7),qx(876,"Propriedades"),og(),Cl(877,"table",14)(878,"tr",15)(879,"th",16),qx(880,"Nome"),og(),Cl(881,"th",16),qx(882,"Tipo"),og(),Cl(883,"th",16),qx(884,"Descri\xE7\xE3o"),og()(),Cl(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),qx(889," dark"),Hl(890,"br"),og()()(),Cl(891,"td",18)(892,"code",30),qx(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),og()(),Cl(894,"td",13)(895,"em")(896,"strong"),qx(897,"(opcional)"),og()(),Cl(898,"p"),qx(899,"Cores Neutrals do tipo 'dark'."),og(),Cl(900,"p"),qx(901,"Exemplo de uso:"),og(),Cl(902,"pre")(903,"code",20),qx(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),og()()()(),Cl(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),qx(909," light"),Hl(910,"br"),og()()(),Cl(911,"td",18)(912,"code",31),qx(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),og()(),Cl(914,"td",13)(915,"em")(916,"strong"),qx(917,"(opcional)"),og()(),Cl(918,"p"),qx(919,"Cores Neutrals do tipo 'light'."),og(),Cl(920,"p"),qx(921,"Exemplo de uso:"),og(),Cl(922,"pre")(923,"code",20),qx(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),og()()()(),Cl(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),qx(929," mid"),Hl(930,"br"),og()()(),Cl(931,"td",18)(932,"code",32),qx(933,`{ '40'?: string; '60'?: string;
}`),og()(),Cl(934,"td",13)(935,"em")(936,"strong"),qx(937,"(opcional)"),og()(),Cl(938,"p"),qx(939,"Cores Neutrals do tipo 'mid'."),og(),Cl(940,"p"),qx(941,"Exemplo de uso:"),og(),Cl(942,"pre")(943,"code",20),qx(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),og()()()()(),Cl(945,"h4",23)(946,"code",5),qx(947,"PoThemeTokens"),og()(),Cl(948,"div",2)(949,"p"),qx(950,"Interface para o tema da aplica\xE7\xE3o."),og()(),Cl(951,"h4",23)(952,"code",5),qx(953,"PoThemeToken"),og()(),Cl(954,"div",2)(955,"p"),qx(956,"Interface para os tokens do Tema."),og()(),Cl(957,"h4",7),qx(958,"Propriedades"),og(),Cl(959,"table",14)(960,"tr",15)(961,"th",16),qx(962,"Nome"),og(),Cl(963,"th",16),qx(964,"Tipo"),og(),Cl(965,"th",16),qx(966,"Descri\xE7\xE3o"),og()(),Cl(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),qx(971," color"),Hl(972,"br"),og()()(),Cl(973,"td",18)(974,"code",33),qx(975,"PoThemeColor"),og()(),Cl(976,"td",13)(977,"em")(978,"strong"),qx(979,"(opcional)"),og()(),Cl(980,"p"),qx(981,"Tokens do tipo 'color'"),og()()(),Cl(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),qx(986," onRoot"),Hl(987,"br"),og()()(),Cl(988,"td",18)(989,"code",34),qx(990,"DynamicProperties"),og()(),Cl(991,"td",13)(992,"em")(993,"strong"),qx(994,"(opcional)"),og()(),Cl(995,"p"),qx(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Cl(997,"code"),qx(998,":root"),og()(),Cl(999,"p"),qx(1e3,"Exemplo de uso:"),og(),Cl(1001,"pre")(1002,"code",20),qx(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),og()()()(),Cl(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),qx(1008," perComponent"),Hl(1009,"br"),og()()(),Cl(1010,"td",18)(1011,"code",34),qx(1012,"DynamicProperties"),og()(),Cl(1013,"td",13)(1014,"em")(1015,"strong"),qx(1016,"(opcional)"),og()(),Cl(1017,"p"),qx(1018,"Tokens do tipo 'perComponent'"),og(),Cl(1019,"p"),qx(1020,"Exemplo de uso:"),og(),Cl(1021,"pre")(1022,"code",20),qx(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),og()()()()(),Cl(1024,"h4",23)(1025,"code",5),qx(1026,"PoTheme"),og()(),Cl(1027,"div",2)(1028,"p"),qx(1029,"Interface para o m\xE9todo "),Cl(1030,"code"),qx(1031,"setTheme()"),og(),qx(1032,"."),og()(),Cl(1033,"h4",7),qx(1034,"Propriedades"),og(),Cl(1035,"table",14)(1036,"tr",15)(1037,"th",16),qx(1038,"Nome"),og(),Cl(1039,"th",16),qx(1040,"Tipo"),og(),Cl(1041,"th",16),qx(1042,"Descri\xE7\xE3o"),og()(),Cl(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),qx(1047," active"),Hl(1048,"br"),og()()(),Cl(1049,"td",18)(1050,"code",35),qx(1051,"PoThemeTypeEnum "),og(),Cl(1052,"code",36),qx(1053," PoThemeActive"),og()(),Cl(1054,"td",13)(1055,"em")(1056,"strong"),qx(1057,"(opcional)"),og()(),Cl(1058,"p"),qx(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),og()()(),Cl(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),qx(1064," name"),Hl(1065,"br"),og()()(),Cl(1066,"td",18)(1067,"code",29),qx(1068,"string"),og()(),Cl(1069,"td",13)(1070,"p"),qx(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),og()()(),Cl(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),qx(1076," type"),Hl(1077,"br"),og()()(),Cl(1078,"td",18)(1079,"code",37),qx(1080,"PoThemeType "),og(),Cl(1081,"code",38),qx(1082," Array<PoThemeType>"),og()(),Cl(1083,"td",13)(1084,"p"),qx(1085,"Tipo de tema:"),og(),Cl(1086,"ul")(1087,"li"),qx(1088,"light"),og(),Cl(1089,"li"),qx(1090,"dark"),og()()()()(),Cl(1091,"h3"),qx(1092,"Enums"),og(),Cl(1093,"h4",4)(1094,"code",5),qx(1095,"PoThemeA11yEnum"),og()(),Cl(1096,"div",2)(1097,"p"),qx(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),og(),Cl(1099,"pre")(1100,"code"),qx(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),og()()(),Cl(1102,"h4",7),qx(1103,"Propriedades"),og(),Cl(1104,"table",14)(1105,"tr",15)(1106,"th",16),qx(1107,"Nome"),og(),Cl(1108,"th",16),qx(1109,"Descri\xE7\xE3o"),og()(),Cl(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),qx(1114," AA"),Hl(1115,"br"),og()()(),Cl(1116,"td",13)(1117,"p"),qx(1118,"N\xEDvel de acessibilidade AA."),og(),Cl(1119,"ul")(1120,"li"),qx(1121,"Define a espessura do "),Cl(1122,"code"),qx(1123,"outline"),og(),qx(1124," para "),Cl(1125,"strong"),qx(1126,"2px"),og(),qx(1127,"."),og(),Cl(1128,"li"),qx(1129,"Disponibiliza o tamanho "),Cl(1130,"code"),qx(1131,"small"),og(),qx(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),og()()()(),Cl(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),qx(1137," AAA"),Hl(1138,"br"),og()()(),Cl(1139,"td",13)(1140,"p"),qx(1141,"N\xEDvel de acessibilidade AAA."),og(),Cl(1142,"ul")(1143,"li"),qx(1144,"Define a espessura do "),Cl(1145,"code"),qx(1146,"outline"),og(),qx(1147," para "),Cl(1148,"strong"),qx(1149,"4px"),og(),qx(1150,"."),og(),Cl(1151,"li"),qx(1152,"N\xE3o disponibiliza o tamanho "),Cl(1153,"code"),qx(1154,"small"),og(),qx(1155," para componentes de formul\xE1rio."),og()()()()(),Cl(1156,"h4",4)(1157,"code",5),qx(1158,"PoThemeTypeEnum"),og()(),Cl(1159,"div",2)(1160,"p"),qx(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),og(),Cl(1162,"pre")(1163,"code"),qx(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),og()()(),Cl(1165,"h4",7),qx(1166,"Propriedades"),og(),Cl(1167,"table",14)(1168,"tr",15)(1169,"th",16),qx(1170,"Nome"),og(),Cl(1171,"th",16),qx(1172,"Descri\xE7\xE3o"),og()(),Cl(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),qx(1177," light"),Hl(1178,"br"),og()()(),Cl(1179,"td",13)(1180,"p"),qx(1181,"Define o tema como claro."),og()()(),Cl(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),qx(1186," dark"),Hl(1187,"br"),og()()(),Cl(1188,"td",13)(1189,"p"),qx(1190,"Define o tema como escuro."),og()()()()());},encapsulation:2})}return m})();var Ae=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(w(Xn),w(Cn))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-theme-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-theme-labs-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,fe,Te],encapsulation:2})}return m})();var we=[{path:"",component:Ae}],ye=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[bL.forChild(we),bL]})}return m})();var Ze=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[ca,ye]})}return m})();export{Ze as DocPoThemeModule};