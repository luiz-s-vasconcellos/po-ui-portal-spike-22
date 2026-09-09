import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Et as Y0e,F as Gy,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce$1,Ki as lo,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,U as L0e,Ui as l0,V as K0e,Vn as Ak,Wn as Be,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ca as um,dn as pi,ei as Yl,en as i_e,fi as ag,fn as q4,gi as bL,ha as ww,jn as ybe,l as ar,la as uo,lr as Gl,mn as qy,nt as O8e,on as mCe,ot as Q0e,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,tr as EY,ui as a0,ut as S8e,va as yY,vn as tU,wn as vr,xr as Lk,y as Bo,yi as cN,yn as ube,zi as jk,zt as e_e}from"./main-3EWTGE7T.js";var Ce=[`reactiveFormData`];var be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage=`po-a11y-AAA`;reactiveForm;theme=0;themeStorage=`po-theme-default`;a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:`AA`,value:`AA`},{label:`AAA`,value:`AAA`}];themeOptions=[{label:`Light`,value:0},{label:`Dark`,value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};poThemeSample={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},Y0e),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},K0e),{info:s(r({},K0e.info),{base:`#0079b8`})}),neutral:r({},Q0e)},onRoot:s(r({},qy.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},qy.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},e_e),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},i_e),{info:s(r({},i_e.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},Gy.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},Gy.perComponent)}},active:Bo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(!0);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm()}ngOnInit(){localStorage.getItem(`po-ui-theme`)&&(this.themeStorage=localStorage.getItem(`po-ui-theme`)),this.theme=this.themeStorage===`po-theme-default`?0:1,this.changeTheme(this.theme,!1),localStorage.getItem(`po-ui-a11y`)&&(this.a11yLevelStorage=localStorage.getItem(`po-ui-a11y`)),this.a11yLevel=this.a11yLevelStorage===`po-a11y-AAA`?pi.AAA:pi.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(pi.AAA,!1),this.a11yLevel=pi.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(pi.AA,!1),this.a11yLevel=pi.AA},window.addEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.addEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA),window.addEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.addEventListener(`po-theme-dark`,this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.removeEventListener(`po-theme-dark`,this.themeChangeListenerDark),window.removeEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.removeEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA)}changeA11yLevel(r,a=!0){this.poTheme.setCurrentThemeA11y(r),r===`AA`?localStorage.setItem(`po-ui-a11y`,`po-a11y-AA`):localStorage.setItem(`po-ui-a11y`,`po-a11y-AAA`),r===pi.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),a&&window.dispatchEvent(new Event(`po-sample-change-a11y`))}changeTheme(r,a=!0){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem(`po-ui-theme`,`po-theme-dark`):localStorage.setItem(`po-ui-theme`,`po-theme-default`),a&&window.dispatchEvent(new Event(`po-sample-change-theme`)),this.a11yLevel===`AA`&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,um.compose([um.required,um.minLength(5),um.maxLength(30)])],address:[``,um.compose([um.required,um.minLength(5),um.maxLength(50)])],number:[``,um.compose([um.required,um.min(1),um.max(99999)])],email:[``,um.required],website:[``,um.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(a){return new(a||m)(w(Be),w(EY),w(q4))};static ɵcmp=Un({type:m,selectors:[[`sample-po-theme-labs`]],viewQuery:function(a,o){if(a&1&&Yl(Ce,7),a&2){let c;lo(c=uo())&&(o.reactiveFormModal=c.first)}},standalone:!1,features:[Ce$1([q4])],decls:22,vars:12,consts:[[`reactiveFormData`,``],[`p-title`,`Example`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`],[1,`po-row`,`po-mt-3`],[`name`,`theme`,`p-label`,`Theme Type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11ylevel`,`p-label`,`Acessibility Level`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`]],template:function(a,o){if(a&1){let c=Ax();Tl(0,`po-widget`,1)(1,`form`,2),Gl(2,`po-input`,3),a0(),Gl(3,`po-email`,4),a0(),Gl(4,`po-input`,5),a0(),Gl(5,`po-number`,6),a0(),Gl(6,`po-url`,7),a0(),Tl(7,`div`,8)(8,`po-button`,9),ht(`p-click`,function(){return o.saveForm()}),ag()()(),Tl(9,`po-modal`,10,0)(11,`div`,8),Gl(12,`po-info`,11),ag(),Tl(13,`div`,8),Gl(14,`po-info`,12)(15,`po-info`,13),ag(),Tl(16,`div`,8),Gl(17,`po-info`,14)(18,`po-info`,15),ag()()(),Tl(19,`div`,16)(20,`po-radio-group`,17),ww(`ngModelChange`,function(h){return Ky(c),uN(o.theme,h)||(o.theme=h),Xy(h)}),ht(`p-change`,function(h){return o.changeTheme(h)}),ag(),a0(),Tl(21,`po-radio-group`,18),ww(`ngModelChange`,function(h){return Ky(c),uN(o.a11yLevel,h)||(o.a11yLevel=h),Xy(h)}),ht(`p-change`,function(h){return o.changeA11yLevel(h)}),ag(),a0(),ag()}a&2&&(jp(),nw(`formGroup`,o.reactiveForm),jp(),l0(),jp(),l0(),jp(),l0(),jp(),l0(),jp(),l0(),jp(2),nw(`p-disabled`,!o.reactiveForm.valid),jp(),nw(`p-primary-action`,o.modalPrimaryAction),jp(3),nw(`p-value`,o.reactiveForm.controls.name.value),jp(2),nw(`p-value`,o.reactiveForm.controls.address.value),jp(),nw(`p-value`,o.reactiveForm.controls.number.value),jp(2),nw(`p-value`,o.reactiveForm.controls.email.value),jp(),nw(`p-value`,o.reactiveForm.controls.website.value),jp(2),Ew(`ngModel`,o.theme),nw(`p-options`,o.themeOptions),l0(),jp(),Ew(`ngModel`,o.a11yLevel),nw(`p-options`,o.a11yLevelOptions),l0())},dependencies:[yY,gY,mY,Ak,jk,Lk,Zt,qH,iU,ube,L0e,tU,ybe,vr,O8e],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m});var fe=(()=>{class m{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||m)};static ɵcmp=Un({type:m,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Theme Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-widget p-title="Example">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-theme-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return m})();var Te=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵcmp=Un({type:m,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1191,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoThemeModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do serviço PoThemeService.`),ag()(),Tl(7,`h3`,3),cN(8,`Services`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoThemeService`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O serviço `),Tl(15,`code`),cN(16,`PoThemeService`),ag(),cN(17,` permite customizar as cores do tema padrão do `),Tl(18,`code`),cN(19,`PO-UI`),ag(),cN(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),ag(),Tl(21,`p`),cN(22,`O nível `),Tl(23,`strong`),cN(24,`AAA`),ag(),cN(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Tl(26,`strong`),cN(27,`AA`),ag(),cN(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),ag(),Tl(29,`p`),cN(30,`O serviço também possibilita configurar a `),Tl(31,`strong`),cN(32,`densidade de espaçamentos`),ag(),cN(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),ag(),Tl(34,`blockquote`)(35,`p`),cN(36,`Observação: a customização das cores de `),Tl(37,`code`),cN(38,`feedback`),ag(),cN(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),ag()(),Tl(40,`blockquote`)(41,`p`),cN(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Tl(43,`a`,6),cN(44,`Customização de Temas usando o serviço PO-UI`),ag(),cN(45,` na aba `),Tl(46,`code`),cN(47,`Guias`),ag(),cN(48,`.`),ag()()(),Tl(49,`h3`,7),cN(50,`Métodos`),ag(),Tl(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),cN(57,` setTheme `),ag()()()()(),Tl(58,`tr`,13)(59,`td`,13)(60,`p`),cN(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),ag(),Tl(62,`p`),cN(63,`Este método configura o tema do componente com base no objeto `),Tl(64,`code`),cN(65,`themeConfig`),ag(),cN(66,` fornecido, no `),Tl(67,`code`),cN(68,`themeType`),ag(),cN(69,` e no `),Tl(70,`code`),cN(71,`a11yLevel`),ag(),cN(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),ag()()()(),Tl(73,`h5`)(74,`b`),cN(75,`Parâmetros`),ag()(),Tl(76,`table`,14)(77,`tr`,15)(78,`th`,16),cN(79,`Nome`),ag(),Tl(80,`th`,16),cN(81,`Tipo`),ag(),Tl(82,`th`,16),cN(83,`Descrição`),ag()(),Tl(84,`tr`,9)(85,`td`,17),cN(86,` themeConfig`),ag(),Tl(87,`td`,18)(88,`code`,19),cN(89,` PoTheme `),ag()(),Tl(90,`td`,13)(91,`p`),cN(92,`Configuração de tema a ser aplicada ao componente.`),ag()()(),Tl(93,`tr`,9)(94,`td`,17),cN(95,` themeType`),ag(),Tl(96,`td`,18)(97,`code`,19),cN(98,` PoThemeTypeEnum `),ag()(),Tl(99,`td`,13)(100,`p`),cN(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),ag()()(),Tl(102,`tr`,9)(103,`td`,17),cN(104,` a11yLevel`),ag(),Tl(105,`td`,18)(106,`code`,19),cN(107,` PoThemeA11yEnum `),ag()(),Tl(108,`td`,13)(109,`p`),cN(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),ag()()(),Tl(111,`tr`,9)(112,`td`,17),cN(113,` persistPreference`),ag(),Tl(114,`td`,18)(115,`code`,19),cN(116,` boolean `),ag()(),Tl(117,`td`,13)(118,`p`),cN(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Tl(120,`code`),cN(121,`true`),ag(),cN(122,`, ou seja, a preferência será salva automaticamente.`),ag()()()(),Gl(123,`br`),Tl(124,`table`,8)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),cN(130,` getA11yLevel `),ag()()()()(),Tl(131,`tr`,13)(132,`td`,13)(133,`p`),cN(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Tl(135,`code`),cN(136,`AAA`),ag(),cN(137,` como padrão.`),ag()()()(),Tl(138,`h5`)(139,`b`),cN(140,`Retorno`),ag()(),Tl(141,`table`,14)(142,`tr`,15)(143,`th`,16),cN(144,`Tipo`),ag(),Tl(145,`th`,16),cN(146,`Descrição`),ag()(),Tl(147,`tr`,9)(148,`td`,18)(149,`code`,19),cN(150,`PoThemeA11yEnum`),ag()(),Tl(151,`td`,13)(152,`p`),cN(153,`O nível de acessibilidade, que pode ser `),Tl(154,`code`),cN(155,`AA`),ag(),cN(156,` ou `),Tl(157,`code`),cN(158,`AAA`),ag(),cN(159,`.`),ag()()()(),Gl(160,`br`),Tl(161,`table`,8)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),cN(167,` setA11yDefaultSizeSmall `),ag()()()()(),Tl(168,`tr`,13)(169,`td`,13)(170,`p`),cN(171,`Define o tamanho `),Tl(172,`code`),cN(173,`small`),ag(),cN(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Tl(175,`code`),cN(176,`AA`),ag(),cN(177,`. O valor definido \xE9 salvo no
`),Tl(178,`code`),cN(179,`localStorage`),ag(),cN(180,` sob a chave `),Tl(181,`code`),cN(182,`po-default-size`),ag(),cN(183,` e o atributo `),Tl(184,`code`),cN(185,`data-default-size`),ag(),cN(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),ag(),Tl(187,`p`),cN(188,`Exemplo de uso:`),ag(),Tl(189,`pre`)(190,`code`,20),cN(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),ag()(),Tl(192,`blockquote`)(193,`p`),cN(194,`Para garantir que o tamanho `),Tl(195,`code`),cN(196,`small`),ag(),cN(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Tl(198,`strong`),cN(199,`junto com o nível de acessibilidade `),Tl(200,`code`),cN(201,`AA`),ag(),cN(202,` na inicialização da aplicação`),ag(),cN(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Tl(204,`code`),cN(205,`setDensityMode`),ag(),cN(206,` conforme necessário.`),ag()()()()(),Tl(207,`h5`)(208,`b`),cN(209,`Parâmetros`),ag()(),Tl(210,`table`,14)(211,`tr`,15)(212,`th`,16),cN(213,`Nome`),ag(),Tl(214,`th`,16),cN(215,`Tipo`),ag(),Tl(216,`th`,16),cN(217,`Descrição`),ag()(),Tl(218,`tr`,9)(219,`td`,17),cN(220,` enable`),ag(),Tl(221,`td`,18)(222,`code`,19),cN(223,` boolean `),ag()(),Tl(224,`td`,13)(225,`p`),cN(226,`Habilita ou desabilita o tamanho `),Tl(227,`code`),cN(228,`small`),ag(),cN(229,` globalmente.`),ag()()()(),Gl(230,`br`),Tl(231,`table`,8)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),cN(237,` getDensityMode `),ag()()()()(),Tl(238,`tr`,13)(239,`td`,13)(240,`p`),cN(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Tl(242,`code`),cN(243,`medium`),ag(),cN(244,` como padrão.`),ag()()()(),Tl(245,`h5`)(246,`b`),cN(247,`Retorno`),ag()(),Tl(248,`table`,14)(249,`tr`,15)(250,`th`,16),cN(251,`Tipo`),ag(),Tl(252,`th`,16),cN(253,`Descrição`),ag()(),Tl(254,`tr`,9)(255,`td`,18)(256,`code`,19),cN(257,`PoDensityMode`),ag()(),Tl(258,`td`,13)(259,`p`),cN(260,`O modo de adensamento, que pode ser `),Tl(261,`code`),cN(262,`small`),ag(),cN(263,` ou `),Tl(264,`code`),cN(265,`medium`),ag(),cN(266,`.`),ag()()()(),Gl(267,`br`),Tl(268,`table`,8)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),cN(274,` setDensityMode `),ag()()()()(),Tl(275,`tr`,13)(276,`td`,13)(277,`p`),cN(278,`Aplica o modo de adensamento compacto (`),Tl(279,`code`),cN(280,`small`),ag(),cN(281,`) ou espaçoso (`),Tl(282,`code`),cN(283,`medium`),ag(),cN(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Tl(285,`code`),cN(286,`localStorage`),ag(),cN(287,` sob a chave
`),Tl(288,`code`),cN(289,`po-density-mode`),ag(),cN(290,`.`),ag()()()(),Tl(291,`h5`)(292,`b`),cN(293,`Parâmetros`),ag()(),Tl(294,`table`,14)(295,`tr`,15)(296,`th`,16),cN(297,`Nome`),ag(),Tl(298,`th`,16),cN(299,`Tipo`),ag(),Tl(300,`th`,16),cN(301,`Descrição`),ag()(),Tl(302,`tr`,9)(303,`td`,17),cN(304,` mode`),ag(),Tl(305,`td`,18)(306,`code`,21),cN(307,` 'small' `),ag(),Tl(308,`code`,22),cN(309,` 'medium' `),ag()(),Tl(310,`td`,13)(311,`p`),cN(312,`Define o modo de densidade: `),Tl(313,`code`),cN(314,`small`),ag(),cN(315,` para compacto, `),Tl(316,`code`),cN(317,`medium`),ag(),cN(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Tl(319,`code`),cN(320,`medium`),ag(),cN(321,`.`),ag()()()(),Gl(322,`br`),Tl(323,`table`,8)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),cN(329,` persistThemeActive `),ag()()()()(),Tl(330,`tr`,13)(331,`td`,13)(332,`p`),cN(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Tl(334,`code`),cN(335,`localStorage`),ag(),cN(336,` para uso em recarregamentos futuros.`),ag()()()(),Tl(337,`h5`)(338,`b`),cN(339,`Retorno`),ag()(),Tl(340,`table`,14)(341,`tr`,15)(342,`th`,16),cN(343,`Tipo`),ag(),Tl(344,`th`,16),cN(345,`Descrição`),ag()(),Tl(346,`tr`,9)(347,`td`,18)(348,`code`,19),cN(349,`PoTheme`),ag()(),Tl(350,`td`,13)(351,`p`),cN(352,`O tema atualmente aplicado.`),ag()()()(),Gl(353,`br`),Tl(354,`table`,8)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),cN(360,` changeCurrentThemeType `),ag()()()()(),Tl(361,`tr`,13)(362,`td`,13)(363,`p`),cN(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),ag(),Tl(365,`p`),cN(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),ag()()()(),Tl(367,`h5`)(368,`b`),cN(369,`Parâmetros`),ag()(),Tl(370,`table`,14)(371,`tr`,15)(372,`th`,16),cN(373,`Nome`),ag(),Tl(374,`th`,16),cN(375,`Tipo`),ag(),Tl(376,`th`,16),cN(377,`Descrição`),ag()(),Tl(378,`tr`,9)(379,`td`,17),cN(380,` themeType`),ag(),Tl(381,`td`,18)(382,`code`,19),cN(383,` PoThemeTypeEnum `),ag()(),Tl(384,`td`,13)(385,`p`),cN(386,`O tipo de tema a ser aplicado, light ou dark.`),ag()()()(),Gl(387,`br`),Tl(388,`table`,8)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),cN(394,` cleanThemeActive `),ag()()()()(),Tl(395,`tr`,13)(396,`td`,13)(397,`p`),cN(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),ag()()()(),Tl(399,`h5`)(400,`b`),cN(401,`Parâmetros`),ag()(),Tl(402,`table`,14)(403,`tr`,15)(404,`th`,16),cN(405,`Nome`),ag(),Tl(406,`th`,16),cN(407,`Tipo`),ag(),Tl(408,`th`,16),cN(409,`Descrição`),ag()(),Tl(410,`tr`,9)(411,`td`,17),cN(412,` persistPreference`),ag(),Tl(413,`td`,18)(414,`code`,19),cN(415,` boolean `),ag()(),Tl(416,`td`,13)(417,`p`),cN(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Tl(419,`code`),cN(420,`true`),ag(),cN(421,` para remover, `),Tl(422,`code`),cN(423,`false`),ag(),cN(424,` para manter.`),ag()()()(),Gl(425,`br`),Tl(426,`table`,8)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),cN(432,` getThemeActive `),ag()()()()(),Tl(433,`tr`,13)(434,`td`,13)(435,`p`),cN(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Tl(437,`code`),cN(438,`localStorage`),ag(),cN(439,`.`),ag()()()(),Tl(440,`h5`)(441,`b`),cN(442,`Retorno`),ag()(),Tl(443,`table`,14)(444,`tr`,15)(445,`th`,16),cN(446,`Tipo`),ag(),Tl(447,`th`,16),cN(448,`Descrição`),ag()(),Tl(449,`tr`,9)(450,`td`,18)(451,`code`,19),cN(452,`PoTheme`),ag()(),Tl(453,`td`,13)(454,`p`),cN(455,`Tema ativo.`),ag()()()(),Gl(456,`br`),Tl(457,`table`,8)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),cN(463,` setDefaultTheme `),ag()()()()(),Tl(464,`tr`,13)(465,`td`,13)(466,`p`),cN(467,`Define o tema atual como o tema "PoUI Padrão".`),ag()()()(),Tl(468,`h5`)(469,`b`),cN(470,`Parâmetros`),ag()(),Tl(471,`table`,14)(472,`tr`,15)(473,`th`,16),cN(474,`Nome`),ag(),Tl(475,`th`,16),cN(476,`Tipo`),ag(),Tl(477,`th`,16),cN(478,`Descrição`),ag()(),Tl(479,`tr`,9)(480,`td`,17),cN(481,` type`),ag(),Tl(482,`td`,18)(483,`code`,19),cN(484,` PoThemeTypeEnum `),ag()(),Tl(485,`td`,13)(486,`p`),cN(487,`O tipo de Tema a ser aplicado, light / dark.`),ag()()()(),Gl(488,`br`),Tl(489,`table`,8)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),cN(495,` setThemeType `),ag()()()()(),Tl(496,`tr`,13)(497,`td`,13)(498,`p`),cN(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),ag()()()(),Tl(500,`h5`)(501,`b`),cN(502,`Parâmetros`),ag()(),Tl(503,`table`,14)(504,`tr`,15)(505,`th`,16),cN(506,`Nome`),ag(),Tl(507,`th`,16),cN(508,`Tipo`),ag(),Tl(509,`th`,16),cN(510,`Descrição`),ag()(),Tl(511,`tr`,9)(512,`td`,17),cN(513,` theme`),ag(),Tl(514,`td`,18)(515,`code`,19),cN(516,` PoTheme `),ag()(),Tl(517,`td`,13)(518,`p`),cN(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),ag()()(),Tl(520,`tr`,9)(521,`td`,17),cN(522,` themeType`),ag(),Tl(523,`td`,18)(524,`code`,19),cN(525,` PoThemeTypeEnum `),ag()(),Tl(526,`td`,13)(527,`p`),cN(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),ag()()()(),Gl(529,`br`),Tl(530,`table`,8)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),cN(536,` setCurrentThemeType `),ag()()()()(),Tl(537,`tr`,13)(538,`td`,13)(539,`p`),cN(540,`Define o tipo (light/dark) para um tema já ativo.`),ag()()()(),Tl(541,`h5`)(542,`b`),cN(543,`Parâmetros`),ag()(),Tl(544,`table`,14)(545,`tr`,15)(546,`th`,16),cN(547,`Nome`),ag(),Tl(548,`th`,16),cN(549,`Tipo`),ag(),Tl(550,`th`,16),cN(551,`Descrição`),ag()(),Tl(552,`tr`,9)(553,`td`,17),cN(554,` themeType`),ag(),Tl(555,`td`,18)(556,`code`,19),cN(557,` PoThemeTypeEnum `),ag()(),Tl(558,`td`,13)(559,`p`),cN(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),ag()()()(),Gl(561,`br`),Tl(562,`table`,8)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),cN(568,` setThemeA11y `),ag()()()()(),Tl(569,`tr`,13)(570,`td`,13)(571,`p`),cN(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),ag()()()(),Tl(573,`h5`)(574,`b`),cN(575,`Parâmetros`),ag()(),Tl(576,`table`,14)(577,`tr`,15)(578,`th`,16),cN(579,`Nome`),ag(),Tl(580,`th`,16),cN(581,`Tipo`),ag(),Tl(582,`th`,16),cN(583,`Descrição`),ag()(),Tl(584,`tr`,9)(585,`td`,17),cN(586,` theme`),ag(),Tl(587,`td`,18)(588,`code`,19),cN(589,` PoTheme `),ag()(),Tl(590,`td`,13)(591,`p`),cN(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),ag()()(),Tl(593,`tr`,9)(594,`td`,17),cN(595,` a11y`),ag(),Tl(596,`td`,18)(597,`code`,19),cN(598,` PoThemeA11yEnum `),ag()(),Tl(599,`td`,13)(600,`p`),cN(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),ag()()()(),Gl(602,`br`),Tl(603,`table`,8)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),cN(609,` setCurrentThemeA11y `),ag()()()()(),Tl(610,`tr`,13)(611,`td`,13)(612,`p`),cN(613,`Define o nível de acessibilidade para um tema já ativo.`),ag()()()(),Tl(614,`h5`)(615,`b`),cN(616,`Parâmetros`),ag()(),Tl(617,`table`,14)(618,`tr`,15)(619,`th`,16),cN(620,`Nome`),ag(),Tl(621,`th`,16),cN(622,`Tipo`),ag(),Tl(623,`th`,16),cN(624,`Descrição`),ag()(),Tl(625,`tr`,9)(626,`td`,17),cN(627,` a11y`),ag(),Tl(628,`td`,18)(629,`code`,19),cN(630,` PoThemeA11yEnum `),ag()(),Tl(631,`td`,13)(632,`p`),cN(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),ag()()()(),Gl(634,`br`),Tl(635,`h3`),cN(636,`Interfaces`),ag(),Tl(637,`h4`,23)(638,`code`,5),cN(639,`PoThemeColor`),ag()(),Tl(640,`div`,2)(641,`p`),cN(642,`Interface para representar as cores do tema.`),ag()(),Tl(643,`h4`,7),cN(644,`Propriedades`),ag(),Tl(645,`table`,14)(646,`tr`,15)(647,`th`,16),cN(648,`Nome`),ag(),Tl(649,`th`,16),cN(650,`Tipo`),ag(),Tl(651,`th`,16),cN(652,`Descrição`),ag()(),Tl(653,`tr`,9)(654,`td`,17)(655,`div`,11)(656,`span`,12),cN(657,` action`),Gl(658,`br`),ag()()(),Tl(659,`td`,18)(660,`code`,24),cN(661,`PoThemeColorAction`),ag()(),Tl(662,`td`,13)(663,`em`)(664,`strong`),cN(665,`(opcional)`),ag()(),Tl(666,`p`),cN(667,`Cores da Action a serem aplicadas.`),ag(),Tl(668,`p`),cN(669,`Exemplo de uso:`),ag(),Tl(670,`pre`)(671,`code`,25),cN(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),ag()()()(),Tl(673,`tr`,9)(674,`td`,17)(675,`div`,11)(676,`span`,12),cN(677,` brand`),Gl(678,`br`),ag()()(),Tl(679,`td`,18)(680,`code`,26),cN(681,`poThemeColorBrand`),ag()(),Tl(682,`td`,13)(683,`em`)(684,`strong`),cN(685,`(opcional)`),ag()(),Tl(686,`p`),cN(687,`Cores da Brand a serem aplicadas.`),ag(),Tl(688,`p`),cN(689,`Exemplo de uso:`),ag(),Tl(690,`pre`)(691,`code`,20),cN(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),ag()()()(),Tl(693,`tr`,9)(694,`td`,17)(695,`div`,11)(696,`span`,12),cN(697,` categorical`),Gl(698,`br`),ag()()(),Tl(699,`td`,18)(700,`code`,27),cN(701,`PoThemeColorCategorical`),ag()(),Tl(702,`td`,13)(703,`em`)(704,`strong`),cN(705,`(opcional)`),ag()(),Tl(706,`p`),cN(707,`Cores da Categorical a serem aplicadas.`),ag(),Tl(708,`p`),cN(709,`Exemplo de uso:`),ag(),Tl(710,`pre`)(711,`code`,20),cN(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),ag()()()(),Tl(713,`tr`,9)(714,`td`,17)(715,`div`,11)(716,`span`,12),cN(717,` categorical-overlay`),Gl(718,`br`),ag()()(),Tl(719,`td`,18)(720,`code`,27),cN(721,`PoThemeColorCategorical`),ag()(),Tl(722,`td`,13)(723,`em`)(724,`strong`),cN(725,`(opcional)`),ag()(),Tl(726,`p`),cN(727,`Cores da Categorical a serem aplicadas.`),ag(),Tl(728,`p`),cN(729,`Exemplo de uso:`),ag(),Tl(730,`pre`)(731,`code`,20),cN(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),ag()()()(),Tl(733,`tr`,9)(734,`td`,17)(735,`div`,11)(736,`span`,12),cN(737,` neutral`),Gl(738,`br`),ag()()(),Tl(739,`td`,18)(740,`code`,28),cN(741,`PoThemeColorNeutral`),ag()(),Tl(742,`td`,13)(743,`em`)(744,`strong`),cN(745,`(opcional)`),ag()(),Tl(746,`p`),cN(747,`Cores Neutrals a serem aplicadas.`),ag(),Tl(748,`p`),cN(749,`Exemplo de uso:`),ag(),Tl(750,`pre`)(751,`code`,20),cN(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),ag()()()()(),Tl(753,`h4`,23)(754,`code`,5),cN(755,`PoThemeColorAction`),ag()(),Tl(756,`div`,2)(757,`p`),cN(758,`Interface para as cores de ação do tema.`),ag()(),Tl(759,`h4`,7),cN(760,`Propriedades`),ag(),Tl(761,`table`,14)(762,`tr`,15)(763,`th`,16),cN(764,`Nome`),ag(),Tl(765,`th`,16),cN(766,`Tipo`),ag(),Tl(767,`th`,16),cN(768,`Descrição`),ag()(),Tl(769,`tr`,9)(770,`td`,17)(771,`div`,11)(772,`span`,12),cN(773,` default`),Gl(774,`br`),ag()()(),Tl(775,`td`,18)(776,`code`,29),cN(777,`string`),ag()(),Tl(778,`td`,13)(779,`em`)(780,`strong`),cN(781,`(opcional)`),ag()(),Tl(782,`p`),cN(783,`Cores da Action 'Default'.`),ag(),Tl(784,`p`),cN(785,`Exemplo de uso:`),ag(),Tl(786,`pre`)(787,`code`,20),cN(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),ag()()()(),Tl(789,`tr`,9)(790,`td`,17)(791,`div`,11)(792,`span`,12),cN(793,` disabled`),Gl(794,`br`),ag()()(),Tl(795,`td`,18)(796,`code`,29),cN(797,`string`),ag()(),Tl(798,`td`,13)(799,`em`)(800,`strong`),cN(801,`(opcional)`),ag()(),Tl(802,`p`),cN(803,`Cores da Action de 'disabled'.`),ag(),Tl(804,`p`),cN(805,`Exemplo de uso:`),ag(),Tl(806,`pre`)(807,`code`,20),cN(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),ag()()()(),Tl(809,`tr`,9)(810,`td`,17)(811,`div`,11)(812,`span`,12),cN(813,` focus`),Gl(814,`br`),ag()()(),Tl(815,`td`,18)(816,`code`,29),cN(817,`string`),ag()(),Tl(818,`td`,13)(819,`em`)(820,`strong`),cN(821,`(opcional)`),ag()(),Tl(822,`p`),cN(823,`Cores da Action para 'focus'.`),ag(),Tl(824,`p`),cN(825,`Exemplo de uso:`),ag(),Tl(826,`pre`)(827,`code`,20),cN(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),ag()()()(),Tl(829,`tr`,9)(830,`td`,17)(831,`div`,11)(832,`span`,12),cN(833,` hover`),Gl(834,`br`),ag()()(),Tl(835,`td`,18)(836,`code`,29),cN(837,`string`),ag()(),Tl(838,`td`,13)(839,`em`)(840,`strong`),cN(841,`(opcional)`),ag()(),Tl(842,`p`),cN(843,`Cores da Action para 'hover'.`),ag(),Tl(844,`p`),cN(845,`Exemplo de uso:`),ag(),Tl(846,`pre`)(847,`code`,20),cN(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),ag()()()(),Tl(849,`tr`,9)(850,`td`,17)(851,`div`,11)(852,`span`,12),cN(853,` pressed`),Gl(854,`br`),ag()()(),Tl(855,`td`,18)(856,`code`,29),cN(857,`string`),ag()(),Tl(858,`td`,13)(859,`em`)(860,`strong`),cN(861,`(opcional)`),ag()(),Tl(862,`p`),cN(863,`Cores da Action para 'pressed'.`),ag(),Tl(864,`p`),cN(865,`Exemplo de uso:`),ag(),Tl(866,`pre`)(867,`code`,20),cN(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),ag()()()()(),Tl(869,`h4`,23)(870,`code`,5),cN(871,`PoThemeColorNeutral`),ag()(),Tl(872,`div`,2)(873,`p`),cN(874,`Interface para as cores neutras do tema.`),ag()(),Tl(875,`h4`,7),cN(876,`Propriedades`),ag(),Tl(877,`table`,14)(878,`tr`,15)(879,`th`,16),cN(880,`Nome`),ag(),Tl(881,`th`,16),cN(882,`Tipo`),ag(),Tl(883,`th`,16),cN(884,`Descrição`),ag()(),Tl(885,`tr`,9)(886,`td`,17)(887,`div`,11)(888,`span`,12),cN(889,` dark`),Gl(890,`br`),ag()()(),Tl(891,`td`,18)(892,`code`,30),cN(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),ag()(),Tl(894,`td`,13)(895,`em`)(896,`strong`),cN(897,`(opcional)`),ag()(),Tl(898,`p`),cN(899,`Cores Neutrals do tipo 'dark'.`),ag(),Tl(900,`p`),cN(901,`Exemplo de uso:`),ag(),Tl(902,`pre`)(903,`code`,20),cN(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),ag()()()(),Tl(905,`tr`,9)(906,`td`,17)(907,`div`,11)(908,`span`,12),cN(909,` light`),Gl(910,`br`),ag()()(),Tl(911,`td`,18)(912,`code`,31),cN(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),ag()(),Tl(914,`td`,13)(915,`em`)(916,`strong`),cN(917,`(opcional)`),ag()(),Tl(918,`p`),cN(919,`Cores Neutrals do tipo 'light'.`),ag(),Tl(920,`p`),cN(921,`Exemplo de uso:`),ag(),Tl(922,`pre`)(923,`code`,20),cN(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),ag()()()(),Tl(925,`tr`,9)(926,`td`,17)(927,`div`,11)(928,`span`,12),cN(929,` mid`),Gl(930,`br`),ag()()(),Tl(931,`td`,18)(932,`code`,32),cN(933,`{ '40'?: string; '60'?: string;
}`),ag()(),Tl(934,`td`,13)(935,`em`)(936,`strong`),cN(937,`(opcional)`),ag()(),Tl(938,`p`),cN(939,`Cores Neutrals do tipo 'mid'.`),ag(),Tl(940,`p`),cN(941,`Exemplo de uso:`),ag(),Tl(942,`pre`)(943,`code`,20),cN(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),ag()()()()(),Tl(945,`h4`,23)(946,`code`,5),cN(947,`PoThemeTokens`),ag()(),Tl(948,`div`,2)(949,`p`),cN(950,`Interface para o tema da aplicação.`),ag()(),Tl(951,`h4`,23)(952,`code`,5),cN(953,`PoThemeToken`),ag()(),Tl(954,`div`,2)(955,`p`),cN(956,`Interface para os tokens do Tema.`),ag()(),Tl(957,`h4`,7),cN(958,`Propriedades`),ag(),Tl(959,`table`,14)(960,`tr`,15)(961,`th`,16),cN(962,`Nome`),ag(),Tl(963,`th`,16),cN(964,`Tipo`),ag(),Tl(965,`th`,16),cN(966,`Descrição`),ag()(),Tl(967,`tr`,9)(968,`td`,17)(969,`div`,11)(970,`span`,12),cN(971,` color`),Gl(972,`br`),ag()()(),Tl(973,`td`,18)(974,`code`,33),cN(975,`PoThemeColor`),ag()(),Tl(976,`td`,13)(977,`em`)(978,`strong`),cN(979,`(opcional)`),ag()(),Tl(980,`p`),cN(981,`Tokens do tipo 'color'`),ag()()(),Tl(982,`tr`,9)(983,`td`,17)(984,`div`,11)(985,`span`,12),cN(986,` onRoot`),Gl(987,`br`),ag()()(),Tl(988,`td`,18)(989,`code`,34),cN(990,`DynamicProperties`),ag()(),Tl(991,`td`,13)(992,`em`)(993,`strong`),cN(994,`(opcional)`),ag()(),Tl(995,`p`),cN(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Tl(997,`code`),cN(998,`:root`),ag()(),Tl(999,`p`),cN(1e3,`Exemplo de uso:`),ag(),Tl(1001,`pre`)(1002,`code`,20),cN(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),ag()()()(),Tl(1004,`tr`,9)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),cN(1008,` perComponent`),Gl(1009,`br`),ag()()(),Tl(1010,`td`,18)(1011,`code`,34),cN(1012,`DynamicProperties`),ag()(),Tl(1013,`td`,13)(1014,`em`)(1015,`strong`),cN(1016,`(opcional)`),ag()(),Tl(1017,`p`),cN(1018,`Tokens do tipo 'perComponent'`),ag(),Tl(1019,`p`),cN(1020,`Exemplo de uso:`),ag(),Tl(1021,`pre`)(1022,`code`,20),cN(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),ag()()()()(),Tl(1024,`h4`,23)(1025,`code`,5),cN(1026,`PoTheme`),ag()(),Tl(1027,`div`,2)(1028,`p`),cN(1029,`Interface para o método `),Tl(1030,`code`),cN(1031,`setTheme()`),ag(),cN(1032,`.`),ag()(),Tl(1033,`h4`,7),cN(1034,`Propriedades`),ag(),Tl(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),cN(1038,`Nome`),ag(),Tl(1039,`th`,16),cN(1040,`Tipo`),ag(),Tl(1041,`th`,16),cN(1042,`Descrição`),ag()(),Tl(1043,`tr`,9)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),cN(1047,` active`),Gl(1048,`br`),ag()()(),Tl(1049,`td`,18)(1050,`code`,35),cN(1051,`PoThemeTypeEnum `),ag(),Tl(1052,`code`,36),cN(1053,` PoThemeActive`),ag()(),Tl(1054,`td`,13)(1055,`em`)(1056,`strong`),cN(1057,`(opcional)`),ag()(),Tl(1058,`p`),cN(1059,`Tipo e nível de acessibilidade de tema ativo`),ag()()(),Tl(1060,`tr`,9)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),cN(1064,` name`),Gl(1065,`br`),ag()()(),Tl(1066,`td`,18)(1067,`code`,29),cN(1068,`string`),ag()(),Tl(1069,`td`,13)(1070,`p`),cN(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),ag()()(),Tl(1072,`tr`,9)(1073,`td`,17)(1074,`div`,11)(1075,`span`,12),cN(1076,` type`),Gl(1077,`br`),ag()()(),Tl(1078,`td`,18)(1079,`code`,37),cN(1080,`PoThemeType `),ag(),Tl(1081,`code`,38),cN(1082,` Array<PoThemeType>`),ag()(),Tl(1083,`td`,13)(1084,`p`),cN(1085,`Tipo de tema:`),ag(),Tl(1086,`ul`)(1087,`li`),cN(1088,`light`),ag(),Tl(1089,`li`),cN(1090,`dark`),ag()()()()(),Tl(1091,`h3`),cN(1092,`Enums`),ag(),Tl(1093,`h4`,4)(1094,`code`,5),cN(1095,`PoThemeA11yEnum`),ag()(),Tl(1096,`div`,2)(1097,`p`),cN(1098,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),ag(),Tl(1099,`pre`)(1100,`code`),cN(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),ag()()(),Tl(1102,`h4`,7),cN(1103,`Propriedades`),ag(),Tl(1104,`table`,14)(1105,`tr`,15)(1106,`th`,16),cN(1107,`Nome`),ag(),Tl(1108,`th`,16),cN(1109,`Descrição`),ag()(),Tl(1110,`tr`,9)(1111,`td`,17)(1112,`div`,11)(1113,`span`,12),cN(1114,` AA`),Gl(1115,`br`),ag()()(),Tl(1116,`td`,13)(1117,`p`),cN(1118,`Nível de acessibilidade AA.`),ag(),Tl(1119,`ul`)(1120,`li`),cN(1121,`Define a espessura do `),Tl(1122,`code`),cN(1123,`outline`),ag(),cN(1124,` para `),Tl(1125,`strong`),cN(1126,`2px`),ag(),cN(1127,`.`),ag(),Tl(1128,`li`),cN(1129,`Disponibiliza o tamanho `),Tl(1130,`code`),cN(1131,`small`),ag(),cN(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),ag()()()(),Tl(1133,`tr`,9)(1134,`td`,17)(1135,`div`,11)(1136,`span`,12),cN(1137,` AAA`),Gl(1138,`br`),ag()()(),Tl(1139,`td`,13)(1140,`p`),cN(1141,`Nível de acessibilidade AAA.`),ag(),Tl(1142,`ul`)(1143,`li`),cN(1144,`Define a espessura do `),Tl(1145,`code`),cN(1146,`outline`),ag(),cN(1147,` para `),Tl(1148,`strong`),cN(1149,`4px`),ag(),cN(1150,`.`),ag(),Tl(1151,`li`),cN(1152,`Não disponibiliza o tamanho `),Tl(1153,`code`),cN(1154,`small`),ag(),cN(1155,` para componentes de formulário.`),ag()()()()(),Tl(1156,`h4`,4)(1157,`code`,5),cN(1158,`PoThemeTypeEnum`),ag()(),Tl(1159,`div`,2)(1160,`p`),cN(1161,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),ag(),Tl(1162,`pre`)(1163,`code`),cN(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),ag()()(),Tl(1165,`h4`,7),cN(1166,`Propriedades`),ag(),Tl(1167,`table`,14)(1168,`tr`,15)(1169,`th`,16),cN(1170,`Nome`),ag(),Tl(1171,`th`,16),cN(1172,`Descrição`),ag()(),Tl(1173,`tr`,9)(1174,`td`,17)(1175,`div`,11)(1176,`span`,12),cN(1177,` light`),Gl(1178,`br`),ag()()(),Tl(1179,`td`,13)(1180,`p`),cN(1181,`Define o tema como claro.`),ag()()(),Tl(1182,`tr`,9)(1183,`td`,17)(1184,`div`,11)(1185,`span`,12),cN(1186,` dark`),Gl(1187,`br`),ag()()(),Tl(1188,`td`,13)(1189,`p`),cN(1190,`Define o tema como escuro.`),ag()()()()())},encapsulation:2,changeDetection:1})}return m})();var we=[{path:``,component:(()=>{class m{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||m)(w(Xn),w(Cn))};static ɵcmp=Un({type:m,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-theme-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-theme-labs-view`),ag()()()),a&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,fe,Te],encapsulation:2,changeDetection:1})}return m})()}];var ye=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵmod=he({type:m});static ɵinj=ue({imports:[bL.forChild(we),bL]})}return m})();var Ze=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵmod=he({type:m});static ɵinj=ue({imports:[ar,ye]})}return m})();export{Ze as DocPoThemeModule};