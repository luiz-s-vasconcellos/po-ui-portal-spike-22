import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,J as Kte,Ji as qx,Jn as C1,K as K3,Kn as Ag,Lr as SF,O as E5,Pi as mt,Qt as ea,Ri as nu,Rn as y5,Rt as _oe,Si as iu,Sr as Mm,Tn as sb,Vr as TF,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,et as Noe,fa as we$1,hn as nie,i as _a,ji as mO,jt as Zte,ki as kF,kn as tie,ln as lb,mn as ni,mr as He,mt as Ti,ni as _o,pa as wg,q as Ko,r as Ta,rt as Ote,sa as vo,st as Qte,ta as ue,ua as wK,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ce=[`reactiveFormData`];var be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage=`po-a11y-AAA`;reactiveForm;theme=0;themeStorage=`po-theme-default`;a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:`AA`,value:`AA`},{label:`AAA`,value:`AAA`}];themeOptions=[{label:`Light`,value:0},{label:`Dark`,value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};poThemeSample={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},Kte),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},Zte),{info:s(r({},Zte.info),{base:`#0079b8`})}),neutral:r({},Qte)},onRoot:s(r({},sb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},sb.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},tie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},nie),{info:s(r({},nie.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},lb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},lb.perComponent)}},active:Ko.light};constructor(r,o,a){this.cdr=r,this.fb=o,this.poTheme=a,this.poTheme.setA11yDefaultSizeSmall(!0);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm()}ngOnInit(){localStorage.getItem(`po-ui-theme`)&&(this.themeStorage=localStorage.getItem(`po-ui-theme`)),this.theme=this.themeStorage===`po-theme-default`?0:1,this.changeTheme(this.theme,!1),localStorage.getItem(`po-ui-a11y`)&&(this.a11yLevelStorage=localStorage.getItem(`po-ui-a11y`)),this.a11yLevel=this.a11yLevelStorage===`po-a11y-AAA`?Ti.AAA:Ti.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(Ti.AAA,!1),this.a11yLevel=Ti.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(Ti.AA,!1),this.a11yLevel=Ti.AA},window.addEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.addEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA),window.addEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.addEventListener(`po-theme-dark`,this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.removeEventListener(`po-theme-dark`,this.themeChangeListenerDark),window.removeEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.removeEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA)}changeA11yLevel(r,o=!0){this.poTheme.setCurrentThemeA11y(r),r===`AA`?localStorage.setItem(`po-ui-a11y`,`po-a11y-AA`):localStorage.setItem(`po-ui-a11y`,`po-a11y-AAA`),r===Ti.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event(`po-sample-change-a11y`))}changeTheme(r,o=!0){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem(`po-ui-theme`,`po-theme-dark`):localStorage.setItem(`po-ui-theme`,`po-theme-default`),o&&window.dispatchEvent(new Event(`po-sample-change-theme`)),this.a11yLevel===`AA`&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,Mm.compose([Mm.required,Mm.minLength(5),Mm.maxLength(30)])],address:[``,Mm.compose([Mm.required,Mm.minLength(5),Mm.maxLength(50)])],number:[``,Mm.compose([Mm.required,Mm.min(1),Mm.max(99999)])],email:[``,Mm.required],website:[``,Mm.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||m)(b(He),b(MK),b(y5))};static ɵcmp=Zn({type:m,selectors:[[`sample-po-theme-labs`]],viewQuery:function(o,a){if(o&1&&iu(Ce,7),o&2){let c;vo(c=_o())&&(a.reactiveFormModal=c.first)}},standalone:!1,features:[we$1([y5])],decls:22,vars:12,consts:[[`reactiveFormData`,``],[`p-title`,`Example`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`],[1,`po-row`,`po-mt-3`],[`name`,`theme`,`p-label`,`Theme Type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11ylevel`,`p-label`,`Acessibility Level`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`]],template:function(o,a){if(o&1){let c=Sx();jc(0,`po-widget`,1)(1,`form`,2)(2,`po-input`,3),JN(),wg(),jc(3,`po-email`,4),JN(),wg(),jc(4,`po-input`,5),JN(),wg(),jc(5,`po-number`,6),JN(),wg(),jc(6,`po-url`,7),JN(),wg(),jc(7,`div`,8)(8,`po-button`,9),mt(`p-click`,function(){return a.saveForm()}),wg()()(),jc(9,`po-modal`,10,0)(11,`div`,8),nu(12,`po-info`,11),wg(),jc(13,`div`,8),nu(14,`po-info`,12)(15,`po-info`,13),wg(),jc(16,`div`,8),nu(17,`po-info`,14)(18,`po-info`,15),wg()()(),jc(19,`div`,16)(20,`po-radio-group`,17),JN(),ob(`ngModelChange`,function(h){return y_(c),sO(a.theme,h)||(a.theme=h),v_(h)}),mt(`p-change`,function(h){return a.changeTheme(h)}),wg(),jc(21,`po-radio-group`,18),JN(),ob(`ngModelChange`,function(h){return y_(c),sO(a.a11yLevel,h)||(a.a11yLevel=h),v_(h)}),mt(`p-change`,function(h){return a.changeA11yLevel(h)}),wg()()}o&2&&(rg(),jE(`formGroup`,a.reactiveForm),rg(),t0(),rg(),t0(),rg(),t0(),rg(),t0(),rg(),t0(),rg(2),jE(`p-disabled`,!a.reactiveForm.valid),rg(),jE(`p-primary-action`,a.modalPrimaryAction),rg(3),jE(`p-value`,a.reactiveForm.controls.name.value),rg(2),jE(`p-value`,a.reactiveForm.controls.address.value),rg(),jE(`p-value`,a.reactiveForm.controls.number.value),rg(2),jE(`p-value`,a.reactiveForm.controls.email.value),rg(),jE(`p-value`,a.reactiveForm.controls.website.value),rg(2),ib(`ngModel`,a.theme),jE(`p-options`,a.themeOptions),t0(),rg(),ib(`ngModel`,a.a11yLevel),jE(`p-options`,a.a11yLevelOptions),t0())},dependencies:[wK,CK,EK,TF,SF,kF,ni,K3,A5,doe,Ote,E5,_oe,ea,Noe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m});var fe=(()=>{class m{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||m)};static ɵcmp=Zn({type:m,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Theme Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-widget p-title="Example">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-theme-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return m})();var Te=(()=>{class m{static ɵfac=function(o){return new(o||m)};static ɵcmp=Zn({type:m,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1191,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`]],template:function(o,a){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoThemeModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do serviço PoThemeService.`),wg()(),jc(7,`h3`,3),iO(8,`Services`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoThemeService`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O serviço `),jc(15,`code`),iO(16,`PoThemeService`),wg(),iO(17,` permite customizar as cores do tema padrão do `),jc(18,`code`),iO(19,`PO-UI`),wg(),iO(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),wg(),jc(21,`p`),iO(22,`O nível `),jc(23,`strong`),iO(24,`AAA`),wg(),iO(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),jc(26,`strong`),iO(27,`AA`),wg(),iO(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),wg(),jc(29,`p`),iO(30,`O serviço também possibilita configurar a `),jc(31,`strong`),iO(32,`densidade de espaçamentos`),wg(),iO(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),wg(),jc(34,`blockquote`)(35,`p`),iO(36,`Observação: a customização das cores de `),jc(37,`code`),iO(38,`feedback`),wg(),iO(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),wg()(),jc(40,`blockquote`)(41,`p`),iO(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),jc(43,`a`,6),iO(44,`Customização de Temas usando o serviço PO-UI`),wg(),iO(45,` na aba `),jc(46,`code`),iO(47,`Guias`),wg(),iO(48,`.`),wg()()(),jc(49,`h3`,7),iO(50,`Métodos`),wg(),jc(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),iO(57,` setTheme `),wg()()()()(),jc(58,`tr`,13)(59,`td`,13)(60,`p`),iO(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),wg(),jc(62,`p`),iO(63,`Este método configura o tema do componente com base no objeto `),jc(64,`code`),iO(65,`themeConfig`),wg(),iO(66,` fornecido, no `),jc(67,`code`),iO(68,`themeType`),wg(),iO(69,` e no `),jc(70,`code`),iO(71,`a11yLevel`),wg(),iO(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),wg()()()(),jc(73,`h5`)(74,`b`),iO(75,`Parâmetros`),wg()(),jc(76,`table`,14)(77,`tr`,15)(78,`th`,16),iO(79,`Nome`),wg(),jc(80,`th`,16),iO(81,`Tipo`),wg(),jc(82,`th`,16),iO(83,`Descrição`),wg()(),jc(84,`tr`,9)(85,`td`,17),iO(86,` themeConfig`),wg(),jc(87,`td`,18)(88,`code`,19),iO(89,` PoTheme `),wg()(),jc(90,`td`,13)(91,`p`),iO(92,`Configuração de tema a ser aplicada ao componente.`),wg()()(),jc(93,`tr`,9)(94,`td`,17),iO(95,` themeType`),wg(),jc(96,`td`,18)(97,`code`,19),iO(98,` PoThemeTypeEnum `),wg()(),jc(99,`td`,13)(100,`p`),iO(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),wg()()(),jc(102,`tr`,9)(103,`td`,17),iO(104,` a11yLevel`),wg(),jc(105,`td`,18)(106,`code`,19),iO(107,` PoThemeA11yEnum `),wg()(),jc(108,`td`,13)(109,`p`),iO(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),wg()()(),jc(111,`tr`,9)(112,`td`,17),iO(113,` persistPreference`),wg(),jc(114,`td`,18)(115,`code`,19),iO(116,` boolean `),wg()(),jc(117,`td`,13)(118,`p`),iO(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),jc(120,`code`),iO(121,`true`),wg(),iO(122,`, ou seja, a preferência será salva automaticamente.`),wg()()()(),nu(123,`br`),jc(124,`table`,8)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),iO(130,` getA11yLevel `),wg()()()()(),jc(131,`tr`,13)(132,`td`,13)(133,`p`),iO(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),jc(135,`code`),iO(136,`AAA`),wg(),iO(137,` como padrão.`),wg()()()(),jc(138,`h5`)(139,`b`),iO(140,`Retorno`),wg()(),jc(141,`table`,14)(142,`tr`,15)(143,`th`,16),iO(144,`Tipo`),wg(),jc(145,`th`,16),iO(146,`Descrição`),wg()(),jc(147,`tr`,9)(148,`td`,18)(149,`code`,19),iO(150,`PoThemeA11yEnum`),wg()(),jc(151,`td`,13)(152,`p`),iO(153,`O nível de acessibilidade, que pode ser `),jc(154,`code`),iO(155,`AA`),wg(),iO(156,` ou `),jc(157,`code`),iO(158,`AAA`),wg(),iO(159,`.`),wg()()()(),nu(160,`br`),jc(161,`table`,8)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),iO(167,` setA11yDefaultSizeSmall `),wg()()()()(),jc(168,`tr`,13)(169,`td`,13)(170,`p`),iO(171,`Define o tamanho `),jc(172,`code`),iO(173,`small`),wg(),iO(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),jc(175,`code`),iO(176,`AA`),wg(),iO(177,`. O valor definido \xE9 salvo no
`),jc(178,`code`),iO(179,`localStorage`),wg(),iO(180,` sob a chave `),jc(181,`code`),iO(182,`po-default-size`),wg(),iO(183,` e o atributo `),jc(184,`code`),iO(185,`data-default-size`),wg(),iO(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),wg(),jc(187,`p`),iO(188,`Exemplo de uso:`),wg(),jc(189,`pre`)(190,`code`,20),iO(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),wg()(),jc(192,`blockquote`)(193,`p`),iO(194,`Para garantir que o tamanho `),jc(195,`code`),iO(196,`small`),wg(),iO(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),jc(198,`strong`),iO(199,`junto com o nível de acessibilidade `),jc(200,`code`),iO(201,`AA`),wg(),iO(202,` na inicialização da aplicação`),wg(),iO(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),jc(204,`code`),iO(205,`setDensityMode`),wg(),iO(206,` conforme necessário.`),wg()()()()(),jc(207,`h5`)(208,`b`),iO(209,`Parâmetros`),wg()(),jc(210,`table`,14)(211,`tr`,15)(212,`th`,16),iO(213,`Nome`),wg(),jc(214,`th`,16),iO(215,`Tipo`),wg(),jc(216,`th`,16),iO(217,`Descrição`),wg()(),jc(218,`tr`,9)(219,`td`,17),iO(220,` enable`),wg(),jc(221,`td`,18)(222,`code`,19),iO(223,` boolean `),wg()(),jc(224,`td`,13)(225,`p`),iO(226,`Habilita ou desabilita o tamanho `),jc(227,`code`),iO(228,`small`),wg(),iO(229,` globalmente.`),wg()()()(),nu(230,`br`),jc(231,`table`,8)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),iO(237,` getDensityMode `),wg()()()()(),jc(238,`tr`,13)(239,`td`,13)(240,`p`),iO(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),jc(242,`code`),iO(243,`medium`),wg(),iO(244,` como padrão.`),wg()()()(),jc(245,`h5`)(246,`b`),iO(247,`Retorno`),wg()(),jc(248,`table`,14)(249,`tr`,15)(250,`th`,16),iO(251,`Tipo`),wg(),jc(252,`th`,16),iO(253,`Descrição`),wg()(),jc(254,`tr`,9)(255,`td`,18)(256,`code`,19),iO(257,`PoDensityMode`),wg()(),jc(258,`td`,13)(259,`p`),iO(260,`O modo de adensamento, que pode ser `),jc(261,`code`),iO(262,`small`),wg(),iO(263,` ou `),jc(264,`code`),iO(265,`medium`),wg(),iO(266,`.`),wg()()()(),nu(267,`br`),jc(268,`table`,8)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),iO(274,` setDensityMode `),wg()()()()(),jc(275,`tr`,13)(276,`td`,13)(277,`p`),iO(278,`Aplica o modo de adensamento compacto (`),jc(279,`code`),iO(280,`small`),wg(),iO(281,`) ou espaçoso (`),jc(282,`code`),iO(283,`medium`),wg(),iO(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),jc(285,`code`),iO(286,`localStorage`),wg(),iO(287,` sob a chave
`),jc(288,`code`),iO(289,`po-density-mode`),wg(),iO(290,`.`),wg()()()(),jc(291,`h5`)(292,`b`),iO(293,`Parâmetros`),wg()(),jc(294,`table`,14)(295,`tr`,15)(296,`th`,16),iO(297,`Nome`),wg(),jc(298,`th`,16),iO(299,`Tipo`),wg(),jc(300,`th`,16),iO(301,`Descrição`),wg()(),jc(302,`tr`,9)(303,`td`,17),iO(304,` mode`),wg(),jc(305,`td`,18)(306,`code`,21),iO(307,` 'small' `),wg(),jc(308,`code`,22),iO(309,` 'medium' `),wg()(),jc(310,`td`,13)(311,`p`),iO(312,`Define o modo de densidade: `),jc(313,`code`),iO(314,`small`),wg(),iO(315,` para compacto, `),jc(316,`code`),iO(317,`medium`),wg(),iO(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),jc(319,`code`),iO(320,`medium`),wg(),iO(321,`.`),wg()()()(),nu(322,`br`),jc(323,`table`,8)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),iO(329,` persistThemeActive `),wg()()()()(),jc(330,`tr`,13)(331,`td`,13)(332,`p`),iO(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),jc(334,`code`),iO(335,`localStorage`),wg(),iO(336,` para uso em recarregamentos futuros.`),wg()()()(),jc(337,`h5`)(338,`b`),iO(339,`Retorno`),wg()(),jc(340,`table`,14)(341,`tr`,15)(342,`th`,16),iO(343,`Tipo`),wg(),jc(344,`th`,16),iO(345,`Descrição`),wg()(),jc(346,`tr`,9)(347,`td`,18)(348,`code`,19),iO(349,`PoTheme`),wg()(),jc(350,`td`,13)(351,`p`),iO(352,`O tema atualmente aplicado.`),wg()()()(),nu(353,`br`),jc(354,`table`,8)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),iO(360,` changeCurrentThemeType `),wg()()()()(),jc(361,`tr`,13)(362,`td`,13)(363,`p`),iO(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),wg(),jc(365,`p`),iO(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),wg()()()(),jc(367,`h5`)(368,`b`),iO(369,`Parâmetros`),wg()(),jc(370,`table`,14)(371,`tr`,15)(372,`th`,16),iO(373,`Nome`),wg(),jc(374,`th`,16),iO(375,`Tipo`),wg(),jc(376,`th`,16),iO(377,`Descrição`),wg()(),jc(378,`tr`,9)(379,`td`,17),iO(380,` themeType`),wg(),jc(381,`td`,18)(382,`code`,19),iO(383,` PoThemeTypeEnum `),wg()(),jc(384,`td`,13)(385,`p`),iO(386,`O tipo de tema a ser aplicado, light ou dark.`),wg()()()(),nu(387,`br`),jc(388,`table`,8)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),iO(394,` cleanThemeActive `),wg()()()()(),jc(395,`tr`,13)(396,`td`,13)(397,`p`),iO(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),wg()()()(),jc(399,`h5`)(400,`b`),iO(401,`Parâmetros`),wg()(),jc(402,`table`,14)(403,`tr`,15)(404,`th`,16),iO(405,`Nome`),wg(),jc(406,`th`,16),iO(407,`Tipo`),wg(),jc(408,`th`,16),iO(409,`Descrição`),wg()(),jc(410,`tr`,9)(411,`td`,17),iO(412,` persistPreference`),wg(),jc(413,`td`,18)(414,`code`,19),iO(415,` boolean `),wg()(),jc(416,`td`,13)(417,`p`),iO(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),jc(419,`code`),iO(420,`true`),wg(),iO(421,` para remover, `),jc(422,`code`),iO(423,`false`),wg(),iO(424,` para manter.`),wg()()()(),nu(425,`br`),jc(426,`table`,8)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),iO(432,` getThemeActive `),wg()()()()(),jc(433,`tr`,13)(434,`td`,13)(435,`p`),iO(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),jc(437,`code`),iO(438,`localStorage`),wg(),iO(439,`.`),wg()()()(),jc(440,`h5`)(441,`b`),iO(442,`Retorno`),wg()(),jc(443,`table`,14)(444,`tr`,15)(445,`th`,16),iO(446,`Tipo`),wg(),jc(447,`th`,16),iO(448,`Descrição`),wg()(),jc(449,`tr`,9)(450,`td`,18)(451,`code`,19),iO(452,`PoTheme`),wg()(),jc(453,`td`,13)(454,`p`),iO(455,`Tema ativo.`),wg()()()(),nu(456,`br`),jc(457,`table`,8)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),iO(463,` setDefaultTheme `),wg()()()()(),jc(464,`tr`,13)(465,`td`,13)(466,`p`),iO(467,`Define o tema atual como o tema "PoUI Padrão".`),wg()()()(),jc(468,`h5`)(469,`b`),iO(470,`Parâmetros`),wg()(),jc(471,`table`,14)(472,`tr`,15)(473,`th`,16),iO(474,`Nome`),wg(),jc(475,`th`,16),iO(476,`Tipo`),wg(),jc(477,`th`,16),iO(478,`Descrição`),wg()(),jc(479,`tr`,9)(480,`td`,17),iO(481,` type`),wg(),jc(482,`td`,18)(483,`code`,19),iO(484,` PoThemeTypeEnum `),wg()(),jc(485,`td`,13)(486,`p`),iO(487,`O tipo de Tema a ser aplicado, light / dark.`),wg()()()(),nu(488,`br`),jc(489,`table`,8)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),iO(495,` setThemeType `),wg()()()()(),jc(496,`tr`,13)(497,`td`,13)(498,`p`),iO(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),wg()()()(),jc(500,`h5`)(501,`b`),iO(502,`Parâmetros`),wg()(),jc(503,`table`,14)(504,`tr`,15)(505,`th`,16),iO(506,`Nome`),wg(),jc(507,`th`,16),iO(508,`Tipo`),wg(),jc(509,`th`,16),iO(510,`Descrição`),wg()(),jc(511,`tr`,9)(512,`td`,17),iO(513,` theme`),wg(),jc(514,`td`,18)(515,`code`,19),iO(516,` PoTheme `),wg()(),jc(517,`td`,13)(518,`p`),iO(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),wg()()(),jc(520,`tr`,9)(521,`td`,17),iO(522,` themeType`),wg(),jc(523,`td`,18)(524,`code`,19),iO(525,` PoThemeTypeEnum `),wg()(),jc(526,`td`,13)(527,`p`),iO(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),wg()()()(),nu(529,`br`),jc(530,`table`,8)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),iO(536,` setCurrentThemeType `),wg()()()()(),jc(537,`tr`,13)(538,`td`,13)(539,`p`),iO(540,`Define o tipo (light/dark) para um tema já ativo.`),wg()()()(),jc(541,`h5`)(542,`b`),iO(543,`Parâmetros`),wg()(),jc(544,`table`,14)(545,`tr`,15)(546,`th`,16),iO(547,`Nome`),wg(),jc(548,`th`,16),iO(549,`Tipo`),wg(),jc(550,`th`,16),iO(551,`Descrição`),wg()(),jc(552,`tr`,9)(553,`td`,17),iO(554,` themeType`),wg(),jc(555,`td`,18)(556,`code`,19),iO(557,` PoThemeTypeEnum `),wg()(),jc(558,`td`,13)(559,`p`),iO(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),wg()()()(),nu(561,`br`),jc(562,`table`,8)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),iO(568,` setThemeA11y `),wg()()()()(),jc(569,`tr`,13)(570,`td`,13)(571,`p`),iO(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),wg()()()(),jc(573,`h5`)(574,`b`),iO(575,`Parâmetros`),wg()(),jc(576,`table`,14)(577,`tr`,15)(578,`th`,16),iO(579,`Nome`),wg(),jc(580,`th`,16),iO(581,`Tipo`),wg(),jc(582,`th`,16),iO(583,`Descrição`),wg()(),jc(584,`tr`,9)(585,`td`,17),iO(586,` theme`),wg(),jc(587,`td`,18)(588,`code`,19),iO(589,` PoTheme `),wg()(),jc(590,`td`,13)(591,`p`),iO(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),wg()()(),jc(593,`tr`,9)(594,`td`,17),iO(595,` a11y`),wg(),jc(596,`td`,18)(597,`code`,19),iO(598,` PoThemeA11yEnum `),wg()(),jc(599,`td`,13)(600,`p`),iO(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),wg()()()(),nu(602,`br`),jc(603,`table`,8)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),iO(609,` setCurrentThemeA11y `),wg()()()()(),jc(610,`tr`,13)(611,`td`,13)(612,`p`),iO(613,`Define o nível de acessibilidade para um tema já ativo.`),wg()()()(),jc(614,`h5`)(615,`b`),iO(616,`Parâmetros`),wg()(),jc(617,`table`,14)(618,`tr`,15)(619,`th`,16),iO(620,`Nome`),wg(),jc(621,`th`,16),iO(622,`Tipo`),wg(),jc(623,`th`,16),iO(624,`Descrição`),wg()(),jc(625,`tr`,9)(626,`td`,17),iO(627,` a11y`),wg(),jc(628,`td`,18)(629,`code`,19),iO(630,` PoThemeA11yEnum `),wg()(),jc(631,`td`,13)(632,`p`),iO(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),wg()()()(),nu(634,`br`),jc(635,`h3`),iO(636,`Interfaces`),wg(),jc(637,`h4`,23)(638,`code`,5),iO(639,`PoThemeColor`),wg()(),jc(640,`div`,2)(641,`p`),iO(642,`Interface para representar as cores do tema.`),wg()(),jc(643,`h4`,7),iO(644,`Propriedades`),wg(),jc(645,`table`,14)(646,`tr`,15)(647,`th`,16),iO(648,`Nome`),wg(),jc(649,`th`,16),iO(650,`Tipo`),wg(),jc(651,`th`,16),iO(652,`Descrição`),wg()(),jc(653,`tr`,9)(654,`td`,17)(655,`div`,11)(656,`span`,12),iO(657,` action`),nu(658,`br`),wg()()(),jc(659,`td`,18)(660,`code`,24),iO(661,`PoThemeColorAction`),wg()(),jc(662,`td`,13)(663,`em`)(664,`strong`),iO(665,`(opcional)`),wg()(),jc(666,`p`),iO(667,`Cores da Action a serem aplicadas.`),wg(),jc(668,`p`),iO(669,`Exemplo de uso:`),wg(),jc(670,`pre`)(671,`code`,25),iO(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),wg()()()(),jc(673,`tr`,9)(674,`td`,17)(675,`div`,11)(676,`span`,12),iO(677,` brand`),nu(678,`br`),wg()()(),jc(679,`td`,18)(680,`code`,26),iO(681,`poThemeColorBrand`),wg()(),jc(682,`td`,13)(683,`em`)(684,`strong`),iO(685,`(opcional)`),wg()(),jc(686,`p`),iO(687,`Cores da Brand a serem aplicadas.`),wg(),jc(688,`p`),iO(689,`Exemplo de uso:`),wg(),jc(690,`pre`)(691,`code`,20),iO(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),wg()()()(),jc(693,`tr`,9)(694,`td`,17)(695,`div`,11)(696,`span`,12),iO(697,` categorical`),nu(698,`br`),wg()()(),jc(699,`td`,18)(700,`code`,27),iO(701,`PoThemeColorCategorical`),wg()(),jc(702,`td`,13)(703,`em`)(704,`strong`),iO(705,`(opcional)`),wg()(),jc(706,`p`),iO(707,`Cores da Categorical a serem aplicadas.`),wg(),jc(708,`p`),iO(709,`Exemplo de uso:`),wg(),jc(710,`pre`)(711,`code`,20),iO(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),wg()()()(),jc(713,`tr`,9)(714,`td`,17)(715,`div`,11)(716,`span`,12),iO(717,` categorical-overlay`),nu(718,`br`),wg()()(),jc(719,`td`,18)(720,`code`,27),iO(721,`PoThemeColorCategorical`),wg()(),jc(722,`td`,13)(723,`em`)(724,`strong`),iO(725,`(opcional)`),wg()(),jc(726,`p`),iO(727,`Cores da Categorical a serem aplicadas.`),wg(),jc(728,`p`),iO(729,`Exemplo de uso:`),wg(),jc(730,`pre`)(731,`code`,20),iO(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),wg()()()(),jc(733,`tr`,9)(734,`td`,17)(735,`div`,11)(736,`span`,12),iO(737,` neutral`),nu(738,`br`),wg()()(),jc(739,`td`,18)(740,`code`,28),iO(741,`PoThemeColorNeutral`),wg()(),jc(742,`td`,13)(743,`em`)(744,`strong`),iO(745,`(opcional)`),wg()(),jc(746,`p`),iO(747,`Cores Neutrals a serem aplicadas.`),wg(),jc(748,`p`),iO(749,`Exemplo de uso:`),wg(),jc(750,`pre`)(751,`code`,20),iO(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),wg()()()()(),jc(753,`h4`,23)(754,`code`,5),iO(755,`PoThemeColorAction`),wg()(),jc(756,`div`,2)(757,`p`),iO(758,`Interface para as cores de ação do tema.`),wg()(),jc(759,`h4`,7),iO(760,`Propriedades`),wg(),jc(761,`table`,14)(762,`tr`,15)(763,`th`,16),iO(764,`Nome`),wg(),jc(765,`th`,16),iO(766,`Tipo`),wg(),jc(767,`th`,16),iO(768,`Descrição`),wg()(),jc(769,`tr`,9)(770,`td`,17)(771,`div`,11)(772,`span`,12),iO(773,` default`),nu(774,`br`),wg()()(),jc(775,`td`,18)(776,`code`,29),iO(777,`string`),wg()(),jc(778,`td`,13)(779,`em`)(780,`strong`),iO(781,`(opcional)`),wg()(),jc(782,`p`),iO(783,`Cores da Action 'Default'.`),wg(),jc(784,`p`),iO(785,`Exemplo de uso:`),wg(),jc(786,`pre`)(787,`code`,20),iO(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),wg()()()(),jc(789,`tr`,9)(790,`td`,17)(791,`div`,11)(792,`span`,12),iO(793,` disabled`),nu(794,`br`),wg()()(),jc(795,`td`,18)(796,`code`,29),iO(797,`string`),wg()(),jc(798,`td`,13)(799,`em`)(800,`strong`),iO(801,`(opcional)`),wg()(),jc(802,`p`),iO(803,`Cores da Action de 'disabled'.`),wg(),jc(804,`p`),iO(805,`Exemplo de uso:`),wg(),jc(806,`pre`)(807,`code`,20),iO(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),wg()()()(),jc(809,`tr`,9)(810,`td`,17)(811,`div`,11)(812,`span`,12),iO(813,` focus`),nu(814,`br`),wg()()(),jc(815,`td`,18)(816,`code`,29),iO(817,`string`),wg()(),jc(818,`td`,13)(819,`em`)(820,`strong`),iO(821,`(opcional)`),wg()(),jc(822,`p`),iO(823,`Cores da Action para 'focus'.`),wg(),jc(824,`p`),iO(825,`Exemplo de uso:`),wg(),jc(826,`pre`)(827,`code`,20),iO(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),wg()()()(),jc(829,`tr`,9)(830,`td`,17)(831,`div`,11)(832,`span`,12),iO(833,` hover`),nu(834,`br`),wg()()(),jc(835,`td`,18)(836,`code`,29),iO(837,`string`),wg()(),jc(838,`td`,13)(839,`em`)(840,`strong`),iO(841,`(opcional)`),wg()(),jc(842,`p`),iO(843,`Cores da Action para 'hover'.`),wg(),jc(844,`p`),iO(845,`Exemplo de uso:`),wg(),jc(846,`pre`)(847,`code`,20),iO(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),wg()()()(),jc(849,`tr`,9)(850,`td`,17)(851,`div`,11)(852,`span`,12),iO(853,` pressed`),nu(854,`br`),wg()()(),jc(855,`td`,18)(856,`code`,29),iO(857,`string`),wg()(),jc(858,`td`,13)(859,`em`)(860,`strong`),iO(861,`(opcional)`),wg()(),jc(862,`p`),iO(863,`Cores da Action para 'pressed'.`),wg(),jc(864,`p`),iO(865,`Exemplo de uso:`),wg(),jc(866,`pre`)(867,`code`,20),iO(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),wg()()()()(),jc(869,`h4`,23)(870,`code`,5),iO(871,`PoThemeColorNeutral`),wg()(),jc(872,`div`,2)(873,`p`),iO(874,`Interface para as cores neutras do tema.`),wg()(),jc(875,`h4`,7),iO(876,`Propriedades`),wg(),jc(877,`table`,14)(878,`tr`,15)(879,`th`,16),iO(880,`Nome`),wg(),jc(881,`th`,16),iO(882,`Tipo`),wg(),jc(883,`th`,16),iO(884,`Descrição`),wg()(),jc(885,`tr`,9)(886,`td`,17)(887,`div`,11)(888,`span`,12),iO(889,` dark`),nu(890,`br`),wg()()(),jc(891,`td`,18)(892,`code`,30),iO(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),wg()(),jc(894,`td`,13)(895,`em`)(896,`strong`),iO(897,`(opcional)`),wg()(),jc(898,`p`),iO(899,`Cores Neutrals do tipo 'dark'.`),wg(),jc(900,`p`),iO(901,`Exemplo de uso:`),wg(),jc(902,`pre`)(903,`code`,20),iO(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),wg()()()(),jc(905,`tr`,9)(906,`td`,17)(907,`div`,11)(908,`span`,12),iO(909,` light`),nu(910,`br`),wg()()(),jc(911,`td`,18)(912,`code`,31),iO(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),wg()(),jc(914,`td`,13)(915,`em`)(916,`strong`),iO(917,`(opcional)`),wg()(),jc(918,`p`),iO(919,`Cores Neutrals do tipo 'light'.`),wg(),jc(920,`p`),iO(921,`Exemplo de uso:`),wg(),jc(922,`pre`)(923,`code`,20),iO(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),wg()()()(),jc(925,`tr`,9)(926,`td`,17)(927,`div`,11)(928,`span`,12),iO(929,` mid`),nu(930,`br`),wg()()(),jc(931,`td`,18)(932,`code`,32),iO(933,`{ '40'?: string; '60'?: string;
}`),wg()(),jc(934,`td`,13)(935,`em`)(936,`strong`),iO(937,`(opcional)`),wg()(),jc(938,`p`),iO(939,`Cores Neutrals do tipo 'mid'.`),wg(),jc(940,`p`),iO(941,`Exemplo de uso:`),wg(),jc(942,`pre`)(943,`code`,20),iO(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),wg()()()()(),jc(945,`h4`,23)(946,`code`,5),iO(947,`PoThemeTokens`),wg()(),jc(948,`div`,2)(949,`p`),iO(950,`Interface para o tema da aplicação.`),wg()(),jc(951,`h4`,23)(952,`code`,5),iO(953,`PoThemeToken`),wg()(),jc(954,`div`,2)(955,`p`),iO(956,`Interface para os tokens do Tema.`),wg()(),jc(957,`h4`,7),iO(958,`Propriedades`),wg(),jc(959,`table`,14)(960,`tr`,15)(961,`th`,16),iO(962,`Nome`),wg(),jc(963,`th`,16),iO(964,`Tipo`),wg(),jc(965,`th`,16),iO(966,`Descrição`),wg()(),jc(967,`tr`,9)(968,`td`,17)(969,`div`,11)(970,`span`,12),iO(971,` color`),nu(972,`br`),wg()()(),jc(973,`td`,18)(974,`code`,33),iO(975,`PoThemeColor`),wg()(),jc(976,`td`,13)(977,`em`)(978,`strong`),iO(979,`(opcional)`),wg()(),jc(980,`p`),iO(981,`Tokens do tipo 'color'`),wg()()(),jc(982,`tr`,9)(983,`td`,17)(984,`div`,11)(985,`span`,12),iO(986,` onRoot`),nu(987,`br`),wg()()(),jc(988,`td`,18)(989,`code`,34),iO(990,`DynamicProperties`),wg()(),jc(991,`td`,13)(992,`em`)(993,`strong`),iO(994,`(opcional)`),wg()(),jc(995,`p`),iO(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),jc(997,`code`),iO(998,`:root`),wg()(),jc(999,`p`),iO(1e3,`Exemplo de uso:`),wg(),jc(1001,`pre`)(1002,`code`,20),iO(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),wg()()()(),jc(1004,`tr`,9)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),iO(1008,` perComponent`),nu(1009,`br`),wg()()(),jc(1010,`td`,18)(1011,`code`,34),iO(1012,`DynamicProperties`),wg()(),jc(1013,`td`,13)(1014,`em`)(1015,`strong`),iO(1016,`(opcional)`),wg()(),jc(1017,`p`),iO(1018,`Tokens do tipo 'perComponent'`),wg(),jc(1019,`p`),iO(1020,`Exemplo de uso:`),wg(),jc(1021,`pre`)(1022,`code`,20),iO(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),wg()()()()(),jc(1024,`h4`,23)(1025,`code`,5),iO(1026,`PoTheme`),wg()(),jc(1027,`div`,2)(1028,`p`),iO(1029,`Interface para o método `),jc(1030,`code`),iO(1031,`setTheme()`),wg(),iO(1032,`.`),wg()(),jc(1033,`h4`,7),iO(1034,`Propriedades`),wg(),jc(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),iO(1038,`Nome`),wg(),jc(1039,`th`,16),iO(1040,`Tipo`),wg(),jc(1041,`th`,16),iO(1042,`Descrição`),wg()(),jc(1043,`tr`,9)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),iO(1047,` active`),nu(1048,`br`),wg()()(),jc(1049,`td`,18)(1050,`code`,35),iO(1051,`PoThemeTypeEnum `),wg(),jc(1052,`code`,36),iO(1053,` PoThemeActive`),wg()(),jc(1054,`td`,13)(1055,`em`)(1056,`strong`),iO(1057,`(opcional)`),wg()(),jc(1058,`p`),iO(1059,`Tipo e nível de acessibilidade de tema ativo`),wg()()(),jc(1060,`tr`,9)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),iO(1064,` name`),nu(1065,`br`),wg()()(),jc(1066,`td`,18)(1067,`code`,29),iO(1068,`string`),wg()(),jc(1069,`td`,13)(1070,`p`),iO(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),wg()()(),jc(1072,`tr`,9)(1073,`td`,17)(1074,`div`,11)(1075,`span`,12),iO(1076,` type`),nu(1077,`br`),wg()()(),jc(1078,`td`,18)(1079,`code`,37),iO(1080,`PoThemeType `),wg(),jc(1081,`code`,38),iO(1082,` Array<PoThemeType>`),wg()(),jc(1083,`td`,13)(1084,`p`),iO(1085,`Tipo de tema:`),wg(),jc(1086,`ul`)(1087,`li`),iO(1088,`light`),wg(),jc(1089,`li`),iO(1090,`dark`),wg()()()()(),jc(1091,`h3`),iO(1092,`Enums`),wg(),jc(1093,`h4`,4)(1094,`code`,5),iO(1095,`PoThemeA11yEnum`),wg()(),jc(1096,`div`,2)(1097,`p`),iO(1098,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),wg(),jc(1099,`pre`)(1100,`code`),iO(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),wg()()(),jc(1102,`h4`,7),iO(1103,`Propriedades`),wg(),jc(1104,`table`,14)(1105,`tr`,15)(1106,`th`,16),iO(1107,`Nome`),wg(),jc(1108,`th`,16),iO(1109,`Descrição`),wg()(),jc(1110,`tr`,9)(1111,`td`,17)(1112,`div`,11)(1113,`span`,12),iO(1114,` AA`),nu(1115,`br`),wg()()(),jc(1116,`td`,13)(1117,`p`),iO(1118,`Nível de acessibilidade AA.`),wg(),jc(1119,`ul`)(1120,`li`),iO(1121,`Define a espessura do `),jc(1122,`code`),iO(1123,`outline`),wg(),iO(1124,` para `),jc(1125,`strong`),iO(1126,`2px`),wg(),iO(1127,`.`),wg(),jc(1128,`li`),iO(1129,`Disponibiliza o tamanho `),jc(1130,`code`),iO(1131,`small`),wg(),iO(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),wg()()()(),jc(1133,`tr`,9)(1134,`td`,17)(1135,`div`,11)(1136,`span`,12),iO(1137,` AAA`),nu(1138,`br`),wg()()(),jc(1139,`td`,13)(1140,`p`),iO(1141,`Nível de acessibilidade AAA.`),wg(),jc(1142,`ul`)(1143,`li`),iO(1144,`Define a espessura do `),jc(1145,`code`),iO(1146,`outline`),wg(),iO(1147,` para `),jc(1148,`strong`),iO(1149,`4px`),wg(),iO(1150,`.`),wg(),jc(1151,`li`),iO(1152,`Não disponibiliza o tamanho `),jc(1153,`code`),iO(1154,`small`),wg(),iO(1155,` para componentes de formulário.`),wg()()()()(),jc(1156,`h4`,4)(1157,`code`,5),iO(1158,`PoThemeTypeEnum`),wg()(),jc(1159,`div`,2)(1160,`p`),iO(1161,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),wg(),jc(1162,`pre`)(1163,`code`),iO(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),wg()()(),jc(1165,`h4`,7),iO(1166,`Propriedades`),wg(),jc(1167,`table`,14)(1168,`tr`,15)(1169,`th`,16),iO(1170,`Nome`),wg(),jc(1171,`th`,16),iO(1172,`Descrição`),wg()(),jc(1173,`tr`,9)(1174,`td`,17)(1175,`div`,11)(1176,`span`,12),iO(1177,` light`),nu(1178,`br`),wg()()(),jc(1179,`td`,13)(1180,`p`),iO(1181,`Define o tema como claro.`),wg()()(),jc(1182,`tr`,9)(1183,`td`,17)(1184,`div`,11)(1185,`span`,12),iO(1186,` dark`),nu(1187,`br`),wg()()(),jc(1188,`td`,13)(1189,`p`),iO(1190,`Define o tema como escuro.`),wg()()()()())},encapsulation:2,changeDetection:1})}return m})();var we=[{path:``,component:(()=>{class m{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||m)(b(ir),b(Sn))};static ɵcmp=Zn({type:m,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,a){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(3,`sample-po-theme-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`web`)}),nu(5,`sample-po-theme-labs-view`),wg()()()),o&2&&(jE(`p-actions`,a.actions),rg(2),jE(`p-active`,a.activeTab===`doc`),rg(2),jE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[Kze,bae,Sae,fe,Te],encapsulation:2,changeDetection:1})}return m})()}];var ye=(()=>{class m{static ɵfac=function(o){return new(o||m)};static ɵmod=pe({type:m});static ɵinj=ue({imports:[C1.forChild(we),C1]})}return m})();var Ze=(()=>{class m{static ɵfac=function(o){return new(o||m)};static ɵmod=pe({type:m});static ɵinj=ue({imports:[Ta,ye]})}return m})();export{Ze as DocPoThemeModule};