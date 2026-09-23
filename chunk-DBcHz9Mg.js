import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Bt as a_e,Cn as s_e,Et as V8e,Gr as Ue,H as Ho,Hr as Tw,Ii as ht,Ir as Qy$1,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Q as Ky,Qi as oN,Sa as yN,Sn as sU,Ti as f0,Ui as lg,Wt as d_e,X as KH,Xn as Cn,Y as K4,Yi as mN,Yn as Ce$1,Zr as Vk,_ as $8e,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,cn as lU,da as uo,ea as p0,ga as w,hr as MY,ht as Qy,ki as fm,kn as vr,l as ar,mn as q0e,mr as MN,nn as h_e,nr as HO,oa as ql,on as kbe,pn as pi,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,va as wY,vr as Mw,vt as SCe,yn as r_e}from"./main-NT5YGKBQ.js";var Ce=[`reactiveFormData`];var be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage=`po-a11y-AAA`;reactiveForm;theme=0;themeStorage=`po-theme-default`;a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:`AA`,value:`AA`},{label:`AAA`,value:`AAA`}];themeOptions=[{label:`Light`,value:0},{label:`Dark`,value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};poThemeSample={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},r_e),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},s_e),{info:s(r({},s_e.info),{base:`#0079b8`})}),neutral:r({},a_e)},onRoot:s(r({},Qy.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},Qy.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},d_e),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},h_e),{info:s(r({},h_e.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},Ky.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},Ky.perComponent)}},active:Ho.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(!0);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm()}ngOnInit(){localStorage.getItem(`po-ui-theme`)&&(this.themeStorage=localStorage.getItem(`po-ui-theme`)),this.theme=this.themeStorage===`po-theme-default`?0:1,this.changeTheme(this.theme,!1),localStorage.getItem(`po-ui-a11y`)&&(this.a11yLevelStorage=localStorage.getItem(`po-ui-a11y`)),this.a11yLevel=this.a11yLevelStorage===`po-a11y-AAA`?pi.AAA:pi.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(pi.AAA,!1),this.a11yLevel=pi.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(pi.AA,!1),this.a11yLevel=pi.AA},window.addEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.addEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA),window.addEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.addEventListener(`po-theme-dark`,this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.removeEventListener(`po-theme-dark`,this.themeChangeListenerDark),window.removeEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.removeEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA)}changeA11yLevel(r,a=!0){this.poTheme.setCurrentThemeA11y(r),r===`AA`?localStorage.setItem(`po-ui-a11y`,`po-a11y-AA`):localStorage.setItem(`po-ui-a11y`,`po-a11y-AAA`),r===pi.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),a&&window.dispatchEvent(new Event(`po-sample-change-a11y`))}changeTheme(r,a=!0){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem(`po-ui-theme`,`po-theme-dark`):localStorage.setItem(`po-ui-theme`,`po-theme-default`),a&&window.dispatchEvent(new Event(`po-sample-change-theme`)),this.a11yLevel===`AA`&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,fm.compose([fm.required,fm.minLength(5),fm.maxLength(30)])],address:[``,fm.compose([fm.required,fm.minLength(5),fm.maxLength(50)])],number:[``,fm.compose([fm.required,fm.min(1),fm.max(99999)])],email:[``,fm.required],website:[``,fm.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(a){return new(a||m)(w(Ue),w(MY),w(K4))};static ɵcmp=Un({type:m,selectors:[[`sample-po-theme-labs`]],viewQuery:function(a,o){if(a&1&&Zl(Ce,7),a&2){let c;lo(c=uo())&&(o.reactiveFormModal=c.first)}},standalone:!1,features:[Ce$1([K4])],decls:22,vars:12,consts:[[`reactiveFormData`,``],[`p-title`,`Example`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`],[1,`po-row`,`po-mt-3`],[`name`,`theme`,`p-label`,`Theme Type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11ylevel`,`p-label`,`Acessibility Level`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`]],template:function(a,o){if(a&1){let c=Vx();Ml(0,`po-widget`,1)(1,`form`,2),ql(2,`po-input`,3),f0(),ql(3,`po-email`,4),f0(),ql(4,`po-input`,5),f0(),ql(5,`po-number`,6),f0(),ql(6,`po-url`,7),f0(),Ml(7,`div`,8)(8,`po-button`,9),ht(`p-click`,function(){return o.saveForm()}),lg()()(),Ml(9,`po-modal`,10,0)(11,`div`,8),ql(12,`po-info`,11),lg(),Ml(13,`div`,8),ql(14,`po-info`,12)(15,`po-info`,13),lg(),Ml(16,`div`,8),ql(17,`po-info`,14)(18,`po-info`,15),lg()()(),Ml(19,`div`,16)(20,`po-radio-group`,17),Mw(`ngModelChange`,function(h){return Qy$1(c),yN(o.theme,h)||(o.theme=h),Jy(h)}),ht(`p-change`,function(h){return o.changeTheme(h)}),lg(),f0(),Ml(21,`po-radio-group`,18),Mw(`ngModelChange`,function(h){return Qy$1(c),yN(o.a11yLevel,h)||(o.a11yLevel=h),Jy(h)}),ht(`p-change`,function(h){return o.changeA11yLevel(h)}),lg(),f0(),lg()}a&2&&(Up(),cw(`formGroup`,o.reactiveForm),Up(),p0(),Up(),p0(),Up(),p0(),Up(),p0(),Up(),p0(),Up(2),cw(`p-disabled`,!o.reactiveForm.valid),Up(),cw(`p-primary-action`,o.modalPrimaryAction),Up(3),cw(`p-value`,o.reactiveForm.controls.name.value),Up(2),cw(`p-value`,o.reactiveForm.controls.address.value),Up(),cw(`p-value`,o.reactiveForm.controls.number.value),Up(2),cw(`p-value`,o.reactiveForm.controls.email.value),Up(),cw(`p-value`,o.reactiveForm.controls.website.value),Up(2),Tw(`ngModel`,o.theme),cw(`p-options`,o.themeOptions),p0(),Up(),Tw(`ngModel`,o.a11yLevel),cw(`p-options`,o.a11yLevelOptions),p0())},dependencies:[IY,wY,CY,Vk,qk,Wk,Zt,KH,lU,xbe,q0e,sU,kbe,vr,$8e],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m});var fe=(()=>{class m{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||m)};static ɵcmp=Un({type:m,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Theme Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-widget p-title="Example">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-theme-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return m})();var Te=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵcmp=Un({type:m,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1191,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoThemeModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do serviço PoThemeService.`),lg()(),Ml(7,`h3`,3),mN(8,`Services`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoThemeService`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O serviço `),Ml(15,`code`),mN(16,`PoThemeService`),lg(),mN(17,` permite customizar as cores do tema padrão do `),Ml(18,`code`),mN(19,`PO-UI`),lg(),mN(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),lg(),Ml(21,`p`),mN(22,`O nível `),Ml(23,`strong`),mN(24,`AAA`),lg(),mN(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Ml(26,`strong`),mN(27,`AA`),lg(),mN(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),lg(),Ml(29,`p`),mN(30,`O serviço também possibilita configurar a `),Ml(31,`strong`),mN(32,`densidade de espaçamentos`),lg(),mN(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),lg(),Ml(34,`blockquote`)(35,`p`),mN(36,`Observação: a customização das cores de `),Ml(37,`code`),mN(38,`feedback`),lg(),mN(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),lg()(),Ml(40,`blockquote`)(41,`p`),mN(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Ml(43,`a`,6),mN(44,`Customização de Temas usando o serviço PO-UI`),lg(),mN(45,` na aba `),Ml(46,`code`),mN(47,`Guias`),lg(),mN(48,`.`),lg()()(),Ml(49,`h3`,7),mN(50,`Métodos`),lg(),Ml(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),mN(57,` setTheme `),lg()()()()(),Ml(58,`tr`,13)(59,`td`,13)(60,`p`),mN(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),lg(),Ml(62,`p`),mN(63,`Este método configura o tema do componente com base no objeto `),Ml(64,`code`),mN(65,`themeConfig`),lg(),mN(66,` fornecido, no `),Ml(67,`code`),mN(68,`themeType`),lg(),mN(69,` e no `),Ml(70,`code`),mN(71,`a11yLevel`),lg(),mN(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),lg()()()(),Ml(73,`h5`)(74,`b`),mN(75,`Parâmetros`),lg()(),Ml(76,`table`,14)(77,`tr`,15)(78,`th`,16),mN(79,`Nome`),lg(),Ml(80,`th`,16),mN(81,`Tipo`),lg(),Ml(82,`th`,16),mN(83,`Descrição`),lg()(),Ml(84,`tr`,9)(85,`td`,17),mN(86,` themeConfig`),lg(),Ml(87,`td`,18)(88,`code`,19),mN(89,` PoTheme `),lg()(),Ml(90,`td`,13)(91,`p`),mN(92,`Configuração de tema a ser aplicada ao componente.`),lg()()(),Ml(93,`tr`,9)(94,`td`,17),mN(95,` themeType`),lg(),Ml(96,`td`,18)(97,`code`,19),mN(98,` PoThemeTypeEnum `),lg()(),Ml(99,`td`,13)(100,`p`),mN(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),lg()()(),Ml(102,`tr`,9)(103,`td`,17),mN(104,` a11yLevel`),lg(),Ml(105,`td`,18)(106,`code`,19),mN(107,` PoThemeA11yEnum `),lg()(),Ml(108,`td`,13)(109,`p`),mN(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),lg()()(),Ml(111,`tr`,9)(112,`td`,17),mN(113,` persistPreference`),lg(),Ml(114,`td`,18)(115,`code`,19),mN(116,` boolean `),lg()(),Ml(117,`td`,13)(118,`p`),mN(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Ml(120,`code`),mN(121,`true`),lg(),mN(122,`, ou seja, a preferência será salva automaticamente.`),lg()()()(),ql(123,`br`),Ml(124,`table`,8)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),mN(130,` getA11yLevel `),lg()()()()(),Ml(131,`tr`,13)(132,`td`,13)(133,`p`),mN(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Ml(135,`code`),mN(136,`AAA`),lg(),mN(137,` como padrão.`),lg()()()(),Ml(138,`h5`)(139,`b`),mN(140,`Retorno`),lg()(),Ml(141,`table`,14)(142,`tr`,15)(143,`th`,16),mN(144,`Tipo`),lg(),Ml(145,`th`,16),mN(146,`Descrição`),lg()(),Ml(147,`tr`,9)(148,`td`,18)(149,`code`,19),mN(150,`PoThemeA11yEnum`),lg()(),Ml(151,`td`,13)(152,`p`),mN(153,`O nível de acessibilidade, que pode ser `),Ml(154,`code`),mN(155,`AA`),lg(),mN(156,` ou `),Ml(157,`code`),mN(158,`AAA`),lg(),mN(159,`.`),lg()()()(),ql(160,`br`),Ml(161,`table`,8)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),mN(167,` setA11yDefaultSizeSmall `),lg()()()()(),Ml(168,`tr`,13)(169,`td`,13)(170,`p`),mN(171,`Define o tamanho `),Ml(172,`code`),mN(173,`small`),lg(),mN(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Ml(175,`code`),mN(176,`AA`),lg(),mN(177,`. O valor definido \xE9 salvo no
`),Ml(178,`code`),mN(179,`localStorage`),lg(),mN(180,` sob a chave `),Ml(181,`code`),mN(182,`po-default-size`),lg(),mN(183,` e o atributo `),Ml(184,`code`),mN(185,`data-default-size`),lg(),mN(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),lg(),Ml(187,`p`),mN(188,`Exemplo de uso:`),lg(),Ml(189,`pre`)(190,`code`,20),mN(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),lg()(),Ml(192,`blockquote`)(193,`p`),mN(194,`Para garantir que o tamanho `),Ml(195,`code`),mN(196,`small`),lg(),mN(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Ml(198,`strong`),mN(199,`junto com o nível de acessibilidade `),Ml(200,`code`),mN(201,`AA`),lg(),mN(202,` na inicialização da aplicação`),lg(),mN(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Ml(204,`code`),mN(205,`setDensityMode`),lg(),mN(206,` conforme necessário.`),lg()()()()(),Ml(207,`h5`)(208,`b`),mN(209,`Parâmetros`),lg()(),Ml(210,`table`,14)(211,`tr`,15)(212,`th`,16),mN(213,`Nome`),lg(),Ml(214,`th`,16),mN(215,`Tipo`),lg(),Ml(216,`th`,16),mN(217,`Descrição`),lg()(),Ml(218,`tr`,9)(219,`td`,17),mN(220,` enable`),lg(),Ml(221,`td`,18)(222,`code`,19),mN(223,` boolean `),lg()(),Ml(224,`td`,13)(225,`p`),mN(226,`Habilita ou desabilita o tamanho `),Ml(227,`code`),mN(228,`small`),lg(),mN(229,` globalmente.`),lg()()()(),ql(230,`br`),Ml(231,`table`,8)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),mN(237,` getDensityMode `),lg()()()()(),Ml(238,`tr`,13)(239,`td`,13)(240,`p`),mN(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Ml(242,`code`),mN(243,`medium`),lg(),mN(244,` como padrão.`),lg()()()(),Ml(245,`h5`)(246,`b`),mN(247,`Retorno`),lg()(),Ml(248,`table`,14)(249,`tr`,15)(250,`th`,16),mN(251,`Tipo`),lg(),Ml(252,`th`,16),mN(253,`Descrição`),lg()(),Ml(254,`tr`,9)(255,`td`,18)(256,`code`,19),mN(257,`PoDensityMode`),lg()(),Ml(258,`td`,13)(259,`p`),mN(260,`O modo de adensamento, que pode ser `),Ml(261,`code`),mN(262,`small`),lg(),mN(263,` ou `),Ml(264,`code`),mN(265,`medium`),lg(),mN(266,`.`),lg()()()(),ql(267,`br`),Ml(268,`table`,8)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),mN(274,` setDensityMode `),lg()()()()(),Ml(275,`tr`,13)(276,`td`,13)(277,`p`),mN(278,`Aplica o modo de adensamento compacto (`),Ml(279,`code`),mN(280,`small`),lg(),mN(281,`) ou espaçoso (`),Ml(282,`code`),mN(283,`medium`),lg(),mN(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Ml(285,`code`),mN(286,`localStorage`),lg(),mN(287,` sob a chave
`),Ml(288,`code`),mN(289,`po-density-mode`),lg(),mN(290,`.`),lg()()()(),Ml(291,`h5`)(292,`b`),mN(293,`Parâmetros`),lg()(),Ml(294,`table`,14)(295,`tr`,15)(296,`th`,16),mN(297,`Nome`),lg(),Ml(298,`th`,16),mN(299,`Tipo`),lg(),Ml(300,`th`,16),mN(301,`Descrição`),lg()(),Ml(302,`tr`,9)(303,`td`,17),mN(304,` mode`),lg(),Ml(305,`td`,18)(306,`code`,21),mN(307,` 'small' `),lg(),Ml(308,`code`,22),mN(309,` 'medium' `),lg()(),Ml(310,`td`,13)(311,`p`),mN(312,`Define o modo de densidade: `),Ml(313,`code`),mN(314,`small`),lg(),mN(315,` para compacto, `),Ml(316,`code`),mN(317,`medium`),lg(),mN(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Ml(319,`code`),mN(320,`medium`),lg(),mN(321,`.`),lg()()()(),ql(322,`br`),Ml(323,`table`,8)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),mN(329,` persistThemeActive `),lg()()()()(),Ml(330,`tr`,13)(331,`td`,13)(332,`p`),mN(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Ml(334,`code`),mN(335,`localStorage`),lg(),mN(336,` para uso em recarregamentos futuros.`),lg()()()(),Ml(337,`h5`)(338,`b`),mN(339,`Retorno`),lg()(),Ml(340,`table`,14)(341,`tr`,15)(342,`th`,16),mN(343,`Tipo`),lg(),Ml(344,`th`,16),mN(345,`Descrição`),lg()(),Ml(346,`tr`,9)(347,`td`,18)(348,`code`,19),mN(349,`PoTheme`),lg()(),Ml(350,`td`,13)(351,`p`),mN(352,`O tema atualmente aplicado.`),lg()()()(),ql(353,`br`),Ml(354,`table`,8)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),mN(360,` changeCurrentThemeType `),lg()()()()(),Ml(361,`tr`,13)(362,`td`,13)(363,`p`),mN(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),lg(),Ml(365,`p`),mN(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),lg()()()(),Ml(367,`h5`)(368,`b`),mN(369,`Parâmetros`),lg()(),Ml(370,`table`,14)(371,`tr`,15)(372,`th`,16),mN(373,`Nome`),lg(),Ml(374,`th`,16),mN(375,`Tipo`),lg(),Ml(376,`th`,16),mN(377,`Descrição`),lg()(),Ml(378,`tr`,9)(379,`td`,17),mN(380,` themeType`),lg(),Ml(381,`td`,18)(382,`code`,19),mN(383,` PoThemeTypeEnum `),lg()(),Ml(384,`td`,13)(385,`p`),mN(386,`O tipo de tema a ser aplicado, light ou dark.`),lg()()()(),ql(387,`br`),Ml(388,`table`,8)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),mN(394,` cleanThemeActive `),lg()()()()(),Ml(395,`tr`,13)(396,`td`,13)(397,`p`),mN(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),lg()()()(),Ml(399,`h5`)(400,`b`),mN(401,`Parâmetros`),lg()(),Ml(402,`table`,14)(403,`tr`,15)(404,`th`,16),mN(405,`Nome`),lg(),Ml(406,`th`,16),mN(407,`Tipo`),lg(),Ml(408,`th`,16),mN(409,`Descrição`),lg()(),Ml(410,`tr`,9)(411,`td`,17),mN(412,` persistPreference`),lg(),Ml(413,`td`,18)(414,`code`,19),mN(415,` boolean `),lg()(),Ml(416,`td`,13)(417,`p`),mN(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Ml(419,`code`),mN(420,`true`),lg(),mN(421,` para remover, `),Ml(422,`code`),mN(423,`false`),lg(),mN(424,` para manter.`),lg()()()(),ql(425,`br`),Ml(426,`table`,8)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),mN(432,` getThemeActive `),lg()()()()(),Ml(433,`tr`,13)(434,`td`,13)(435,`p`),mN(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Ml(437,`code`),mN(438,`localStorage`),lg(),mN(439,`.`),lg()()()(),Ml(440,`h5`)(441,`b`),mN(442,`Retorno`),lg()(),Ml(443,`table`,14)(444,`tr`,15)(445,`th`,16),mN(446,`Tipo`),lg(),Ml(447,`th`,16),mN(448,`Descrição`),lg()(),Ml(449,`tr`,9)(450,`td`,18)(451,`code`,19),mN(452,`PoTheme`),lg()(),Ml(453,`td`,13)(454,`p`),mN(455,`Tema ativo.`),lg()()()(),ql(456,`br`),Ml(457,`table`,8)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),mN(463,` setDefaultTheme `),lg()()()()(),Ml(464,`tr`,13)(465,`td`,13)(466,`p`),mN(467,`Define o tema atual como o tema "PoUI Padrão".`),lg()()()(),Ml(468,`h5`)(469,`b`),mN(470,`Parâmetros`),lg()(),Ml(471,`table`,14)(472,`tr`,15)(473,`th`,16),mN(474,`Nome`),lg(),Ml(475,`th`,16),mN(476,`Tipo`),lg(),Ml(477,`th`,16),mN(478,`Descrição`),lg()(),Ml(479,`tr`,9)(480,`td`,17),mN(481,` type`),lg(),Ml(482,`td`,18)(483,`code`,19),mN(484,` PoThemeTypeEnum `),lg()(),Ml(485,`td`,13)(486,`p`),mN(487,`O tipo de Tema a ser aplicado, light / dark.`),lg()()()(),ql(488,`br`),Ml(489,`table`,8)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),mN(495,` setThemeType `),lg()()()()(),Ml(496,`tr`,13)(497,`td`,13)(498,`p`),mN(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),lg()()()(),Ml(500,`h5`)(501,`b`),mN(502,`Parâmetros`),lg()(),Ml(503,`table`,14)(504,`tr`,15)(505,`th`,16),mN(506,`Nome`),lg(),Ml(507,`th`,16),mN(508,`Tipo`),lg(),Ml(509,`th`,16),mN(510,`Descrição`),lg()(),Ml(511,`tr`,9)(512,`td`,17),mN(513,` theme`),lg(),Ml(514,`td`,18)(515,`code`,19),mN(516,` PoTheme `),lg()(),Ml(517,`td`,13)(518,`p`),mN(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),lg()()(),Ml(520,`tr`,9)(521,`td`,17),mN(522,` themeType`),lg(),Ml(523,`td`,18)(524,`code`,19),mN(525,` PoThemeTypeEnum `),lg()(),Ml(526,`td`,13)(527,`p`),mN(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),lg()()()(),ql(529,`br`),Ml(530,`table`,8)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),mN(536,` setCurrentThemeType `),lg()()()()(),Ml(537,`tr`,13)(538,`td`,13)(539,`p`),mN(540,`Define o tipo (light/dark) para um tema já ativo.`),lg()()()(),Ml(541,`h5`)(542,`b`),mN(543,`Parâmetros`),lg()(),Ml(544,`table`,14)(545,`tr`,15)(546,`th`,16),mN(547,`Nome`),lg(),Ml(548,`th`,16),mN(549,`Tipo`),lg(),Ml(550,`th`,16),mN(551,`Descrição`),lg()(),Ml(552,`tr`,9)(553,`td`,17),mN(554,` themeType`),lg(),Ml(555,`td`,18)(556,`code`,19),mN(557,` PoThemeTypeEnum `),lg()(),Ml(558,`td`,13)(559,`p`),mN(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),lg()()()(),ql(561,`br`),Ml(562,`table`,8)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),mN(568,` setThemeA11y `),lg()()()()(),Ml(569,`tr`,13)(570,`td`,13)(571,`p`),mN(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),lg()()()(),Ml(573,`h5`)(574,`b`),mN(575,`Parâmetros`),lg()(),Ml(576,`table`,14)(577,`tr`,15)(578,`th`,16),mN(579,`Nome`),lg(),Ml(580,`th`,16),mN(581,`Tipo`),lg(),Ml(582,`th`,16),mN(583,`Descrição`),lg()(),Ml(584,`tr`,9)(585,`td`,17),mN(586,` theme`),lg(),Ml(587,`td`,18)(588,`code`,19),mN(589,` PoTheme `),lg()(),Ml(590,`td`,13)(591,`p`),mN(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),lg()()(),Ml(593,`tr`,9)(594,`td`,17),mN(595,` a11y`),lg(),Ml(596,`td`,18)(597,`code`,19),mN(598,` PoThemeA11yEnum `),lg()(),Ml(599,`td`,13)(600,`p`),mN(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),lg()()()(),ql(602,`br`),Ml(603,`table`,8)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),mN(609,` setCurrentThemeA11y `),lg()()()()(),Ml(610,`tr`,13)(611,`td`,13)(612,`p`),mN(613,`Define o nível de acessibilidade para um tema já ativo.`),lg()()()(),Ml(614,`h5`)(615,`b`),mN(616,`Parâmetros`),lg()(),Ml(617,`table`,14)(618,`tr`,15)(619,`th`,16),mN(620,`Nome`),lg(),Ml(621,`th`,16),mN(622,`Tipo`),lg(),Ml(623,`th`,16),mN(624,`Descrição`),lg()(),Ml(625,`tr`,9)(626,`td`,17),mN(627,` a11y`),lg(),Ml(628,`td`,18)(629,`code`,19),mN(630,` PoThemeA11yEnum `),lg()(),Ml(631,`td`,13)(632,`p`),mN(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),lg()()()(),ql(634,`br`),Ml(635,`h3`),mN(636,`Interfaces`),lg(),Ml(637,`h4`,23)(638,`code`,5),mN(639,`PoThemeColor`),lg()(),Ml(640,`div`,2)(641,`p`),mN(642,`Interface para representar as cores do tema.`),lg()(),Ml(643,`h4`,7),mN(644,`Propriedades`),lg(),Ml(645,`table`,14)(646,`tr`,15)(647,`th`,16),mN(648,`Nome`),lg(),Ml(649,`th`,16),mN(650,`Tipo`),lg(),Ml(651,`th`,16),mN(652,`Descrição`),lg()(),Ml(653,`tr`,9)(654,`td`,17)(655,`div`,11)(656,`span`,12),mN(657,` action`),ql(658,`br`),lg()()(),Ml(659,`td`,18)(660,`code`,24),mN(661,`PoThemeColorAction`),lg()(),Ml(662,`td`,13)(663,`em`)(664,`strong`),mN(665,`(opcional)`),lg()(),Ml(666,`p`),mN(667,`Cores da Action a serem aplicadas.`),lg(),Ml(668,`p`),mN(669,`Exemplo de uso:`),lg(),Ml(670,`pre`)(671,`code`,25),mN(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),lg()()()(),Ml(673,`tr`,9)(674,`td`,17)(675,`div`,11)(676,`span`,12),mN(677,` brand`),ql(678,`br`),lg()()(),Ml(679,`td`,18)(680,`code`,26),mN(681,`poThemeColorBrand`),lg()(),Ml(682,`td`,13)(683,`em`)(684,`strong`),mN(685,`(opcional)`),lg()(),Ml(686,`p`),mN(687,`Cores da Brand a serem aplicadas.`),lg(),Ml(688,`p`),mN(689,`Exemplo de uso:`),lg(),Ml(690,`pre`)(691,`code`,20),mN(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),lg()()()(),Ml(693,`tr`,9)(694,`td`,17)(695,`div`,11)(696,`span`,12),mN(697,` categorical`),ql(698,`br`),lg()()(),Ml(699,`td`,18)(700,`code`,27),mN(701,`PoThemeColorCategorical`),lg()(),Ml(702,`td`,13)(703,`em`)(704,`strong`),mN(705,`(opcional)`),lg()(),Ml(706,`p`),mN(707,`Cores da Categorical a serem aplicadas.`),lg(),Ml(708,`p`),mN(709,`Exemplo de uso:`),lg(),Ml(710,`pre`)(711,`code`,20),mN(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),lg()()()(),Ml(713,`tr`,9)(714,`td`,17)(715,`div`,11)(716,`span`,12),mN(717,` categorical-overlay`),ql(718,`br`),lg()()(),Ml(719,`td`,18)(720,`code`,27),mN(721,`PoThemeColorCategorical`),lg()(),Ml(722,`td`,13)(723,`em`)(724,`strong`),mN(725,`(opcional)`),lg()(),Ml(726,`p`),mN(727,`Cores da Categorical a serem aplicadas.`),lg(),Ml(728,`p`),mN(729,`Exemplo de uso:`),lg(),Ml(730,`pre`)(731,`code`,20),mN(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),lg()()()(),Ml(733,`tr`,9)(734,`td`,17)(735,`div`,11)(736,`span`,12),mN(737,` neutral`),ql(738,`br`),lg()()(),Ml(739,`td`,18)(740,`code`,28),mN(741,`PoThemeColorNeutral`),lg()(),Ml(742,`td`,13)(743,`em`)(744,`strong`),mN(745,`(opcional)`),lg()(),Ml(746,`p`),mN(747,`Cores Neutrals a serem aplicadas.`),lg(),Ml(748,`p`),mN(749,`Exemplo de uso:`),lg(),Ml(750,`pre`)(751,`code`,20),mN(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),lg()()()()(),Ml(753,`h4`,23)(754,`code`,5),mN(755,`PoThemeColorAction`),lg()(),Ml(756,`div`,2)(757,`p`),mN(758,`Interface para as cores de ação do tema.`),lg()(),Ml(759,`h4`,7),mN(760,`Propriedades`),lg(),Ml(761,`table`,14)(762,`tr`,15)(763,`th`,16),mN(764,`Nome`),lg(),Ml(765,`th`,16),mN(766,`Tipo`),lg(),Ml(767,`th`,16),mN(768,`Descrição`),lg()(),Ml(769,`tr`,9)(770,`td`,17)(771,`div`,11)(772,`span`,12),mN(773,` default`),ql(774,`br`),lg()()(),Ml(775,`td`,18)(776,`code`,29),mN(777,`string`),lg()(),Ml(778,`td`,13)(779,`em`)(780,`strong`),mN(781,`(opcional)`),lg()(),Ml(782,`p`),mN(783,`Cores da Action 'Default'.`),lg(),Ml(784,`p`),mN(785,`Exemplo de uso:`),lg(),Ml(786,`pre`)(787,`code`,20),mN(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),lg()()()(),Ml(789,`tr`,9)(790,`td`,17)(791,`div`,11)(792,`span`,12),mN(793,` disabled`),ql(794,`br`),lg()()(),Ml(795,`td`,18)(796,`code`,29),mN(797,`string`),lg()(),Ml(798,`td`,13)(799,`em`)(800,`strong`),mN(801,`(opcional)`),lg()(),Ml(802,`p`),mN(803,`Cores da Action de 'disabled'.`),lg(),Ml(804,`p`),mN(805,`Exemplo de uso:`),lg(),Ml(806,`pre`)(807,`code`,20),mN(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),lg()()()(),Ml(809,`tr`,9)(810,`td`,17)(811,`div`,11)(812,`span`,12),mN(813,` focus`),ql(814,`br`),lg()()(),Ml(815,`td`,18)(816,`code`,29),mN(817,`string`),lg()(),Ml(818,`td`,13)(819,`em`)(820,`strong`),mN(821,`(opcional)`),lg()(),Ml(822,`p`),mN(823,`Cores da Action para 'focus'.`),lg(),Ml(824,`p`),mN(825,`Exemplo de uso:`),lg(),Ml(826,`pre`)(827,`code`,20),mN(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),lg()()()(),Ml(829,`tr`,9)(830,`td`,17)(831,`div`,11)(832,`span`,12),mN(833,` hover`),ql(834,`br`),lg()()(),Ml(835,`td`,18)(836,`code`,29),mN(837,`string`),lg()(),Ml(838,`td`,13)(839,`em`)(840,`strong`),mN(841,`(opcional)`),lg()(),Ml(842,`p`),mN(843,`Cores da Action para 'hover'.`),lg(),Ml(844,`p`),mN(845,`Exemplo de uso:`),lg(),Ml(846,`pre`)(847,`code`,20),mN(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),lg()()()(),Ml(849,`tr`,9)(850,`td`,17)(851,`div`,11)(852,`span`,12),mN(853,` pressed`),ql(854,`br`),lg()()(),Ml(855,`td`,18)(856,`code`,29),mN(857,`string`),lg()(),Ml(858,`td`,13)(859,`em`)(860,`strong`),mN(861,`(opcional)`),lg()(),Ml(862,`p`),mN(863,`Cores da Action para 'pressed'.`),lg(),Ml(864,`p`),mN(865,`Exemplo de uso:`),lg(),Ml(866,`pre`)(867,`code`,20),mN(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),lg()()()()(),Ml(869,`h4`,23)(870,`code`,5),mN(871,`PoThemeColorNeutral`),lg()(),Ml(872,`div`,2)(873,`p`),mN(874,`Interface para as cores neutras do tema.`),lg()(),Ml(875,`h4`,7),mN(876,`Propriedades`),lg(),Ml(877,`table`,14)(878,`tr`,15)(879,`th`,16),mN(880,`Nome`),lg(),Ml(881,`th`,16),mN(882,`Tipo`),lg(),Ml(883,`th`,16),mN(884,`Descrição`),lg()(),Ml(885,`tr`,9)(886,`td`,17)(887,`div`,11)(888,`span`,12),mN(889,` dark`),ql(890,`br`),lg()()(),Ml(891,`td`,18)(892,`code`,30),mN(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),lg()(),Ml(894,`td`,13)(895,`em`)(896,`strong`),mN(897,`(opcional)`),lg()(),Ml(898,`p`),mN(899,`Cores Neutrals do tipo 'dark'.`),lg(),Ml(900,`p`),mN(901,`Exemplo de uso:`),lg(),Ml(902,`pre`)(903,`code`,20),mN(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),lg()()()(),Ml(905,`tr`,9)(906,`td`,17)(907,`div`,11)(908,`span`,12),mN(909,` light`),ql(910,`br`),lg()()(),Ml(911,`td`,18)(912,`code`,31),mN(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),lg()(),Ml(914,`td`,13)(915,`em`)(916,`strong`),mN(917,`(opcional)`),lg()(),Ml(918,`p`),mN(919,`Cores Neutrals do tipo 'light'.`),lg(),Ml(920,`p`),mN(921,`Exemplo de uso:`),lg(),Ml(922,`pre`)(923,`code`,20),mN(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),lg()()()(),Ml(925,`tr`,9)(926,`td`,17)(927,`div`,11)(928,`span`,12),mN(929,` mid`),ql(930,`br`),lg()()(),Ml(931,`td`,18)(932,`code`,32),mN(933,`{ '40'?: string; '60'?: string;
}`),lg()(),Ml(934,`td`,13)(935,`em`)(936,`strong`),mN(937,`(opcional)`),lg()(),Ml(938,`p`),mN(939,`Cores Neutrals do tipo 'mid'.`),lg(),Ml(940,`p`),mN(941,`Exemplo de uso:`),lg(),Ml(942,`pre`)(943,`code`,20),mN(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),lg()()()()(),Ml(945,`h4`,23)(946,`code`,5),mN(947,`PoThemeTokens`),lg()(),Ml(948,`div`,2)(949,`p`),mN(950,`Interface para o tema da aplicação.`),lg()(),Ml(951,`h4`,23)(952,`code`,5),mN(953,`PoThemeToken`),lg()(),Ml(954,`div`,2)(955,`p`),mN(956,`Interface para os tokens do Tema.`),lg()(),Ml(957,`h4`,7),mN(958,`Propriedades`),lg(),Ml(959,`table`,14)(960,`tr`,15)(961,`th`,16),mN(962,`Nome`),lg(),Ml(963,`th`,16),mN(964,`Tipo`),lg(),Ml(965,`th`,16),mN(966,`Descrição`),lg()(),Ml(967,`tr`,9)(968,`td`,17)(969,`div`,11)(970,`span`,12),mN(971,` color`),ql(972,`br`),lg()()(),Ml(973,`td`,18)(974,`code`,33),mN(975,`PoThemeColor`),lg()(),Ml(976,`td`,13)(977,`em`)(978,`strong`),mN(979,`(opcional)`),lg()(),Ml(980,`p`),mN(981,`Tokens do tipo 'color'`),lg()()(),Ml(982,`tr`,9)(983,`td`,17)(984,`div`,11)(985,`span`,12),mN(986,` onRoot`),ql(987,`br`),lg()()(),Ml(988,`td`,18)(989,`code`,34),mN(990,`DynamicProperties`),lg()(),Ml(991,`td`,13)(992,`em`)(993,`strong`),mN(994,`(opcional)`),lg()(),Ml(995,`p`),mN(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Ml(997,`code`),mN(998,`:root`),lg()(),Ml(999,`p`),mN(1e3,`Exemplo de uso:`),lg(),Ml(1001,`pre`)(1002,`code`,20),mN(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),lg()()()(),Ml(1004,`tr`,9)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),mN(1008,` perComponent`),ql(1009,`br`),lg()()(),Ml(1010,`td`,18)(1011,`code`,34),mN(1012,`DynamicProperties`),lg()(),Ml(1013,`td`,13)(1014,`em`)(1015,`strong`),mN(1016,`(opcional)`),lg()(),Ml(1017,`p`),mN(1018,`Tokens do tipo 'perComponent'`),lg(),Ml(1019,`p`),mN(1020,`Exemplo de uso:`),lg(),Ml(1021,`pre`)(1022,`code`,20),mN(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),lg()()()()(),Ml(1024,`h4`,23)(1025,`code`,5),mN(1026,`PoTheme`),lg()(),Ml(1027,`div`,2)(1028,`p`),mN(1029,`Interface para o método `),Ml(1030,`code`),mN(1031,`setTheme()`),lg(),mN(1032,`.`),lg()(),Ml(1033,`h4`,7),mN(1034,`Propriedades`),lg(),Ml(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),mN(1038,`Nome`),lg(),Ml(1039,`th`,16),mN(1040,`Tipo`),lg(),Ml(1041,`th`,16),mN(1042,`Descrição`),lg()(),Ml(1043,`tr`,9)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),mN(1047,` active`),ql(1048,`br`),lg()()(),Ml(1049,`td`,18)(1050,`code`,35),mN(1051,`PoThemeTypeEnum `),lg(),Ml(1052,`code`,36),mN(1053,` PoThemeActive`),lg()(),Ml(1054,`td`,13)(1055,`em`)(1056,`strong`),mN(1057,`(opcional)`),lg()(),Ml(1058,`p`),mN(1059,`Tipo e nível de acessibilidade de tema ativo`),lg()()(),Ml(1060,`tr`,9)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),mN(1064,` name`),ql(1065,`br`),lg()()(),Ml(1066,`td`,18)(1067,`code`,29),mN(1068,`string`),lg()(),Ml(1069,`td`,13)(1070,`p`),mN(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),lg()()(),Ml(1072,`tr`,9)(1073,`td`,17)(1074,`div`,11)(1075,`span`,12),mN(1076,` type`),ql(1077,`br`),lg()()(),Ml(1078,`td`,18)(1079,`code`,37),mN(1080,`PoThemeType `),lg(),Ml(1081,`code`,38),mN(1082,` Array<PoThemeType>`),lg()(),Ml(1083,`td`,13)(1084,`p`),mN(1085,`Tipo de tema:`),lg(),Ml(1086,`ul`)(1087,`li`),mN(1088,`light`),lg(),Ml(1089,`li`),mN(1090,`dark`),lg()()()()(),Ml(1091,`h3`),mN(1092,`Enums`),lg(),Ml(1093,`h4`,4)(1094,`code`,5),mN(1095,`PoThemeA11yEnum`),lg()(),Ml(1096,`div`,2)(1097,`p`),mN(1098,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),lg(),Ml(1099,`pre`)(1100,`code`),mN(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),lg()()(),Ml(1102,`h4`,7),mN(1103,`Propriedades`),lg(),Ml(1104,`table`,14)(1105,`tr`,15)(1106,`th`,16),mN(1107,`Nome`),lg(),Ml(1108,`th`,16),mN(1109,`Descrição`),lg()(),Ml(1110,`tr`,9)(1111,`td`,17)(1112,`div`,11)(1113,`span`,12),mN(1114,` AA`),ql(1115,`br`),lg()()(),Ml(1116,`td`,13)(1117,`p`),mN(1118,`Nível de acessibilidade AA.`),lg(),Ml(1119,`ul`)(1120,`li`),mN(1121,`Define a espessura do `),Ml(1122,`code`),mN(1123,`outline`),lg(),mN(1124,` para `),Ml(1125,`strong`),mN(1126,`2px`),lg(),mN(1127,`.`),lg(),Ml(1128,`li`),mN(1129,`Disponibiliza o tamanho `),Ml(1130,`code`),mN(1131,`small`),lg(),mN(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),lg()()()(),Ml(1133,`tr`,9)(1134,`td`,17)(1135,`div`,11)(1136,`span`,12),mN(1137,` AAA`),ql(1138,`br`),lg()()(),Ml(1139,`td`,13)(1140,`p`),mN(1141,`Nível de acessibilidade AAA.`),lg(),Ml(1142,`ul`)(1143,`li`),mN(1144,`Define a espessura do `),Ml(1145,`code`),mN(1146,`outline`),lg(),mN(1147,` para `),Ml(1148,`strong`),mN(1149,`4px`),lg(),mN(1150,`.`),lg(),Ml(1151,`li`),mN(1152,`Não disponibiliza o tamanho `),Ml(1153,`code`),mN(1154,`small`),lg(),mN(1155,` para componentes de formulário.`),lg()()()()(),Ml(1156,`h4`,4)(1157,`code`,5),mN(1158,`PoThemeTypeEnum`),lg()(),Ml(1159,`div`,2)(1160,`p`),mN(1161,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),lg(),Ml(1162,`pre`)(1163,`code`),mN(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),lg()()(),Ml(1165,`h4`,7),mN(1166,`Propriedades`),lg(),Ml(1167,`table`,14)(1168,`tr`,15)(1169,`th`,16),mN(1170,`Nome`),lg(),Ml(1171,`th`,16),mN(1172,`Descrição`),lg()(),Ml(1173,`tr`,9)(1174,`td`,17)(1175,`div`,11)(1176,`span`,12),mN(1177,` light`),ql(1178,`br`),lg()()(),Ml(1179,`td`,13)(1180,`p`),mN(1181,`Define o tema como claro.`),lg()()(),Ml(1182,`tr`,9)(1183,`td`,17)(1184,`div`,11)(1185,`span`,12),mN(1186,` dark`),ql(1187,`br`),lg()()(),Ml(1188,`td`,13)(1189,`p`),mN(1190,`Define o tema como escuro.`),lg()()()()())},encapsulation:2,changeDetection:1})}return m})();var we=[{path:``,component:(()=>{class m{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||m)(w(Xn),w(Cn))};static ɵcmp=Un({type:m,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-theme-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-theme-labs-view`),lg()()()),a&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,fe,Te],encapsulation:2,changeDetection:1})}return m})()}];var ye=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵmod=he({type:m});static ɵinj=ue({imports:[NL.forChild(we),NL]})}return m})();var Ze=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵmod=he({type:m});static ɵinj=ue({imports:[ar,ye]})}return m})();export{Ze as DocPoThemeModule};