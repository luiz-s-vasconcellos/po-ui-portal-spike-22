import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as pt,Ai as hm,Br as Qn,Ci as fo,Cr as KP,Dn as ta,Dt as Xte,Et as Wte,Ft as ab,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kr as S9,Lt as bae,Mn as wi,Qn as C9,Qr as Ue,Sa as zO,V as Gte,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,Zt as h4,_ as $3,_a as wn,_i as e_,ar as E,b as $ze,bn as roe,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,dt as Qte,en as hoe,fn as ni,i as _a,in as kte,ji as ho,k as D4,ki as he,mn as ob,na as qP,ni as Xc,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ua as ug,ui as be$1,ut as Qo,wr as Kc,y as $te,yt as T4,zi as kL}from"./main-BRRQVWD7.js";var Ce=[`reactiveFormData`];var be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage=`po-a11y-AAA`;reactiveForm;theme=0;themeStorage=`po-theme-default`;a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:`AA`,value:`AA`},{label:`AAA`,value:`AAA`}];themeOptions=[{label:`Light`,value:0},{label:`Dark`,value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};poThemeSample={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},Wte),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},Gte),{info:s(r({},Gte.info),{base:`#0079b8`})}),neutral:r({},$te)},onRoot:s(r({},ob.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},ob.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},Qte),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},Xte),{info:s(r({},Xte.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},ab.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},ab.perComponent)}},active:Qo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(!0);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm()}ngOnInit(){localStorage.getItem(`po-ui-theme`)&&(this.themeStorage=localStorage.getItem(`po-ui-theme`)),this.theme=this.themeStorage===`po-theme-default`?0:1,this.changeTheme(this.theme,!1),localStorage.getItem(`po-ui-a11y`)&&(this.a11yLevelStorage=localStorage.getItem(`po-ui-a11y`)),this.a11yLevel=this.a11yLevelStorage===`po-a11y-AAA`?wi.AAA:wi.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(wi.AAA,!1),this.a11yLevel=wi.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(wi.AA,!1),this.a11yLevel=wi.AA},window.addEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.addEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA),window.addEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.addEventListener(`po-theme-dark`,this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener(`po-theme-default`,this.themeChangeListenerDefault),window.removeEventListener(`po-theme-dark`,this.themeChangeListenerDark),window.removeEventListener(`po-a11y-AA`,this.a11yChangeListenerAA),window.removeEventListener(`po-a11y-AAA`,this.a11yChangeListenerAAA)}changeA11yLevel(r,a=!0){this.poTheme.setCurrentThemeA11y(r),r===`AA`?localStorage.setItem(`po-ui-a11y`,`po-a11y-AA`):localStorage.setItem(`po-ui-a11y`,`po-a11y-AAA`),r===wi.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),a&&window.dispatchEvent(new Event(`po-sample-change-a11y`))}changeTheme(r,a=!0){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem(`po-ui-theme`,`po-theme-dark`):localStorage.setItem(`po-ui-theme`,`po-theme-default`),a&&window.dispatchEvent(new Event(`po-sample-change-theme`)),this.a11yLevel===`AA`&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,hm.compose([hm.required,hm.minLength(5),hm.maxLength(30)])],address:[``,hm.compose([hm.required,hm.minLength(5),hm.maxLength(50)])],number:[``,hm.compose([hm.required,hm.min(1),hm.max(99999)])],email:[``,hm.required],website:[``,hm.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(a){return new(a||m)(E(Ue),E(S9),E(h4))};static ɵcmp=Hn({type:m,selectors:[[`sample-po-theme-labs`]],viewQuery:function(a,o){if(a&1&&Xc(Ce,7),a&2){let c;fo(c=ho())&&(o.reactiveFormModal=c.first)}},standalone:!1,features:[be$1([h4])],decls:22,vars:12,consts:[[`reactiveFormData`,``],[`p-title`,`Example`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`],[1,`po-row`,`po-mt-3`],[`name`,`theme`,`p-label`,`Theme Type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11ylevel`,`p-label`,`Acessibility Level`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`]],template:function(a,o){if(a&1){let c=Bx();Ac(0,`po-widget`,1)(1,`form`,2),Kc(2,`po-input`,3),p0(),Kc(3,`po-email`,4),p0(),Kc(4,`po-input`,5),p0(),Kc(5,`po-number`,6),p0(),Kc(6,`po-url`,7),p0(),Ac(7,`div`,8)(8,`po-button`,9),pt(`p-click`,function(){return o.saveForm()}),ug()()(),Ac(9,`po-modal`,10,0)(11,`div`,8),Kc(12,`po-info`,11),ug(),Ac(13,`div`,8),Kc(14,`po-info`,12)(15,`po-info`,13),ug(),Ac(16,`div`,8),Kc(17,`po-info`,14)(18,`po-info`,15),ug()()(),Ac(19,`div`,16)(20,`po-radio-group`,17),RE(`ngModelChange`,function(h){return Jv(c),DN(o.theme,h)||(o.theme=h),e_(h)}),pt(`p-change`,function(h){return o.changeTheme(h)}),ug(),p0(),Ac(21,`po-radio-group`,18),RE(`ngModelChange`,function(h){return Jv(c),DN(o.a11yLevel,h)||(o.a11yLevel=h),e_(h)}),pt(`p-change`,function(h){return o.changeA11yLevel(h)}),ug(),p0(),ug()}a&2&&(Hp(),cE(`formGroup`,o.reactiveForm),Hp(),m0(),Hp(),m0(),Hp(),m0(),Hp(),m0(),Hp(),m0(),Hp(2),cE(`p-disabled`,!o.reactiveForm.valid),Hp(),cE(`p-primary-action`,o.modalPrimaryAction),Hp(3),cE(`p-value`,o.reactiveForm.controls.name.value),Hp(2),cE(`p-value`,o.reactiveForm.controls.address.value),Hp(),cE(`p-value`,o.reactiveForm.controls.number.value),Hp(2),cE(`p-value`,o.reactiveForm.controls.email.value),Hp(),cE(`p-value`,o.reactiveForm.controls.website.value),Hp(2),TE(`ngModel`,o.theme),cE(`p-options`,o.themeOptions),m0(),Hp(),TE(`ngModel`,o.a11yLevel),cE(`p-options`,o.a11yLevelOptions),m0())},dependencies:[b9,D9,C9,BP,KP,qP,ni,$3,D4,roe,kte,T4,hoe,ta,Ooe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m});var fe=(()=>{class m{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||m)};static ɵcmp=Hn({type:m,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Theme Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-widget p-title="Example">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-theme-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,be],encapsulation:2,changeDetection:1})}return m})();var Te=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵcmp=Hn({type:m,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1191,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoThemeModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do serviço PoThemeService.`),ug()(),Ac(7,`h3`,3),vN(8,`Services`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoThemeService`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O serviço `),Ac(15,`code`),vN(16,`PoThemeService`),ug(),vN(17,` permite customizar as cores do tema padrão do `),Ac(18,`code`),vN(19,`PO-UI`),ug(),vN(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),ug(),Ac(21,`p`),vN(22,`O nível `),Ac(23,`strong`),vN(24,`AAA`),ug(),vN(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Ac(26,`strong`),vN(27,`AA`),ug(),vN(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),ug(),Ac(29,`p`),vN(30,`O serviço também possibilita configurar a `),Ac(31,`strong`),vN(32,`densidade de espaçamentos`),ug(),vN(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),ug(),Ac(34,`blockquote`)(35,`p`),vN(36,`Observação: a customização das cores de `),Ac(37,`code`),vN(38,`feedback`),ug(),vN(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),ug()(),Ac(40,`blockquote`)(41,`p`),vN(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Ac(43,`a`,6),vN(44,`Customização de Temas usando o serviço PO-UI`),ug(),vN(45,` na aba `),Ac(46,`code`),vN(47,`Guias`),ug(),vN(48,`.`),ug()()(),Ac(49,`h3`,7),vN(50,`Métodos`),ug(),Ac(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),vN(57,` setTheme `),ug()()()()(),Ac(58,`tr`,13)(59,`td`,13)(60,`p`),vN(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),ug(),Ac(62,`p`),vN(63,`Este método configura o tema do componente com base no objeto `),Ac(64,`code`),vN(65,`themeConfig`),ug(),vN(66,` fornecido, no `),Ac(67,`code`),vN(68,`themeType`),ug(),vN(69,` e no `),Ac(70,`code`),vN(71,`a11yLevel`),ug(),vN(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),ug()()()(),Ac(73,`h5`)(74,`b`),vN(75,`Parâmetros`),ug()(),Ac(76,`table`,14)(77,`tr`,15)(78,`th`,16),vN(79,`Nome`),ug(),Ac(80,`th`,16),vN(81,`Tipo`),ug(),Ac(82,`th`,16),vN(83,`Descrição`),ug()(),Ac(84,`tr`,9)(85,`td`,17),vN(86,` themeConfig`),ug(),Ac(87,`td`,18)(88,`code`,19),vN(89,` PoTheme `),ug()(),Ac(90,`td`,13)(91,`p`),vN(92,`Configuração de tema a ser aplicada ao componente.`),ug()()(),Ac(93,`tr`,9)(94,`td`,17),vN(95,` themeType`),ug(),Ac(96,`td`,18)(97,`code`,19),vN(98,` PoThemeTypeEnum `),ug()(),Ac(99,`td`,13)(100,`p`),vN(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),ug()()(),Ac(102,`tr`,9)(103,`td`,17),vN(104,` a11yLevel`),ug(),Ac(105,`td`,18)(106,`code`,19),vN(107,` PoThemeA11yEnum `),ug()(),Ac(108,`td`,13)(109,`p`),vN(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),ug()()(),Ac(111,`tr`,9)(112,`td`,17),vN(113,` persistPreference`),ug(),Ac(114,`td`,18)(115,`code`,19),vN(116,` boolean `),ug()(),Ac(117,`td`,13)(118,`p`),vN(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Ac(120,`code`),vN(121,`true`),ug(),vN(122,`, ou seja, a preferência será salva automaticamente.`),ug()()()(),Kc(123,`br`),Ac(124,`table`,8)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),vN(130,` getA11yLevel `),ug()()()()(),Ac(131,`tr`,13)(132,`td`,13)(133,`p`),vN(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Ac(135,`code`),vN(136,`AAA`),ug(),vN(137,` como padrão.`),ug()()()(),Ac(138,`h5`)(139,`b`),vN(140,`Retorno`),ug()(),Ac(141,`table`,14)(142,`tr`,15)(143,`th`,16),vN(144,`Tipo`),ug(),Ac(145,`th`,16),vN(146,`Descrição`),ug()(),Ac(147,`tr`,9)(148,`td`,18)(149,`code`,19),vN(150,`PoThemeA11yEnum`),ug()(),Ac(151,`td`,13)(152,`p`),vN(153,`O nível de acessibilidade, que pode ser `),Ac(154,`code`),vN(155,`AA`),ug(),vN(156,` ou `),Ac(157,`code`),vN(158,`AAA`),ug(),vN(159,`.`),ug()()()(),Kc(160,`br`),Ac(161,`table`,8)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),vN(167,` setA11yDefaultSizeSmall `),ug()()()()(),Ac(168,`tr`,13)(169,`td`,13)(170,`p`),vN(171,`Define o tamanho `),Ac(172,`code`),vN(173,`small`),ug(),vN(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Ac(175,`code`),vN(176,`AA`),ug(),vN(177,`. O valor definido \xE9 salvo no
`),Ac(178,`code`),vN(179,`localStorage`),ug(),vN(180,` sob a chave `),Ac(181,`code`),vN(182,`po-default-size`),ug(),vN(183,` e o atributo `),Ac(184,`code`),vN(185,`data-default-size`),ug(),vN(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),ug(),Ac(187,`p`),vN(188,`Exemplo de uso:`),ug(),Ac(189,`pre`)(190,`code`,20),vN(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),ug()(),Ac(192,`blockquote`)(193,`p`),vN(194,`Para garantir que o tamanho `),Ac(195,`code`),vN(196,`small`),ug(),vN(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Ac(198,`strong`),vN(199,`junto com o nível de acessibilidade `),Ac(200,`code`),vN(201,`AA`),ug(),vN(202,` na inicialização da aplicação`),ug(),vN(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Ac(204,`code`),vN(205,`setDensityMode`),ug(),vN(206,` conforme necessário.`),ug()()()()(),Ac(207,`h5`)(208,`b`),vN(209,`Parâmetros`),ug()(),Ac(210,`table`,14)(211,`tr`,15)(212,`th`,16),vN(213,`Nome`),ug(),Ac(214,`th`,16),vN(215,`Tipo`),ug(),Ac(216,`th`,16),vN(217,`Descrição`),ug()(),Ac(218,`tr`,9)(219,`td`,17),vN(220,` enable`),ug(),Ac(221,`td`,18)(222,`code`,19),vN(223,` boolean `),ug()(),Ac(224,`td`,13)(225,`p`),vN(226,`Habilita ou desabilita o tamanho `),Ac(227,`code`),vN(228,`small`),ug(),vN(229,` globalmente.`),ug()()()(),Kc(230,`br`),Ac(231,`table`,8)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),vN(237,` getDensityMode `),ug()()()()(),Ac(238,`tr`,13)(239,`td`,13)(240,`p`),vN(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Ac(242,`code`),vN(243,`medium`),ug(),vN(244,` como padrão.`),ug()()()(),Ac(245,`h5`)(246,`b`),vN(247,`Retorno`),ug()(),Ac(248,`table`,14)(249,`tr`,15)(250,`th`,16),vN(251,`Tipo`),ug(),Ac(252,`th`,16),vN(253,`Descrição`),ug()(),Ac(254,`tr`,9)(255,`td`,18)(256,`code`,19),vN(257,`PoDensityMode`),ug()(),Ac(258,`td`,13)(259,`p`),vN(260,`O modo de adensamento, que pode ser `),Ac(261,`code`),vN(262,`small`),ug(),vN(263,` ou `),Ac(264,`code`),vN(265,`medium`),ug(),vN(266,`.`),ug()()()(),Kc(267,`br`),Ac(268,`table`,8)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),vN(274,` setDensityMode `),ug()()()()(),Ac(275,`tr`,13)(276,`td`,13)(277,`p`),vN(278,`Aplica o modo de adensamento compacto (`),Ac(279,`code`),vN(280,`small`),ug(),vN(281,`) ou espaçoso (`),Ac(282,`code`),vN(283,`medium`),ug(),vN(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Ac(285,`code`),vN(286,`localStorage`),ug(),vN(287,` sob a chave
`),Ac(288,`code`),vN(289,`po-density-mode`),ug(),vN(290,`.`),ug()()()(),Ac(291,`h5`)(292,`b`),vN(293,`Parâmetros`),ug()(),Ac(294,`table`,14)(295,`tr`,15)(296,`th`,16),vN(297,`Nome`),ug(),Ac(298,`th`,16),vN(299,`Tipo`),ug(),Ac(300,`th`,16),vN(301,`Descrição`),ug()(),Ac(302,`tr`,9)(303,`td`,17),vN(304,` mode`),ug(),Ac(305,`td`,18)(306,`code`,21),vN(307,` 'small' `),ug(),Ac(308,`code`,22),vN(309,` 'medium' `),ug()(),Ac(310,`td`,13)(311,`p`),vN(312,`Define o modo de densidade: `),Ac(313,`code`),vN(314,`small`),ug(),vN(315,` para compacto, `),Ac(316,`code`),vN(317,`medium`),ug(),vN(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Ac(319,`code`),vN(320,`medium`),ug(),vN(321,`.`),ug()()()(),Kc(322,`br`),Ac(323,`table`,8)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),vN(329,` persistThemeActive `),ug()()()()(),Ac(330,`tr`,13)(331,`td`,13)(332,`p`),vN(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Ac(334,`code`),vN(335,`localStorage`),ug(),vN(336,` para uso em recarregamentos futuros.`),ug()()()(),Ac(337,`h5`)(338,`b`),vN(339,`Retorno`),ug()(),Ac(340,`table`,14)(341,`tr`,15)(342,`th`,16),vN(343,`Tipo`),ug(),Ac(344,`th`,16),vN(345,`Descrição`),ug()(),Ac(346,`tr`,9)(347,`td`,18)(348,`code`,19),vN(349,`PoTheme`),ug()(),Ac(350,`td`,13)(351,`p`),vN(352,`O tema atualmente aplicado.`),ug()()()(),Kc(353,`br`),Ac(354,`table`,8)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),vN(360,` changeCurrentThemeType `),ug()()()()(),Ac(361,`tr`,13)(362,`td`,13)(363,`p`),vN(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),ug(),Ac(365,`p`),vN(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),ug()()()(),Ac(367,`h5`)(368,`b`),vN(369,`Parâmetros`),ug()(),Ac(370,`table`,14)(371,`tr`,15)(372,`th`,16),vN(373,`Nome`),ug(),Ac(374,`th`,16),vN(375,`Tipo`),ug(),Ac(376,`th`,16),vN(377,`Descrição`),ug()(),Ac(378,`tr`,9)(379,`td`,17),vN(380,` themeType`),ug(),Ac(381,`td`,18)(382,`code`,19),vN(383,` PoThemeTypeEnum `),ug()(),Ac(384,`td`,13)(385,`p`),vN(386,`O tipo de tema a ser aplicado, light ou dark.`),ug()()()(),Kc(387,`br`),Ac(388,`table`,8)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),vN(394,` cleanThemeActive `),ug()()()()(),Ac(395,`tr`,13)(396,`td`,13)(397,`p`),vN(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),ug()()()(),Ac(399,`h5`)(400,`b`),vN(401,`Parâmetros`),ug()(),Ac(402,`table`,14)(403,`tr`,15)(404,`th`,16),vN(405,`Nome`),ug(),Ac(406,`th`,16),vN(407,`Tipo`),ug(),Ac(408,`th`,16),vN(409,`Descrição`),ug()(),Ac(410,`tr`,9)(411,`td`,17),vN(412,` persistPreference`),ug(),Ac(413,`td`,18)(414,`code`,19),vN(415,` boolean `),ug()(),Ac(416,`td`,13)(417,`p`),vN(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Ac(419,`code`),vN(420,`true`),ug(),vN(421,` para remover, `),Ac(422,`code`),vN(423,`false`),ug(),vN(424,` para manter.`),ug()()()(),Kc(425,`br`),Ac(426,`table`,8)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),vN(432,` getThemeActive `),ug()()()()(),Ac(433,`tr`,13)(434,`td`,13)(435,`p`),vN(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Ac(437,`code`),vN(438,`localStorage`),ug(),vN(439,`.`),ug()()()(),Ac(440,`h5`)(441,`b`),vN(442,`Retorno`),ug()(),Ac(443,`table`,14)(444,`tr`,15)(445,`th`,16),vN(446,`Tipo`),ug(),Ac(447,`th`,16),vN(448,`Descrição`),ug()(),Ac(449,`tr`,9)(450,`td`,18)(451,`code`,19),vN(452,`PoTheme`),ug()(),Ac(453,`td`,13)(454,`p`),vN(455,`Tema ativo.`),ug()()()(),Kc(456,`br`),Ac(457,`table`,8)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),vN(463,` setDefaultTheme `),ug()()()()(),Ac(464,`tr`,13)(465,`td`,13)(466,`p`),vN(467,`Define o tema atual como o tema "PoUI Padrão".`),ug()()()(),Ac(468,`h5`)(469,`b`),vN(470,`Parâmetros`),ug()(),Ac(471,`table`,14)(472,`tr`,15)(473,`th`,16),vN(474,`Nome`),ug(),Ac(475,`th`,16),vN(476,`Tipo`),ug(),Ac(477,`th`,16),vN(478,`Descrição`),ug()(),Ac(479,`tr`,9)(480,`td`,17),vN(481,` type`),ug(),Ac(482,`td`,18)(483,`code`,19),vN(484,` PoThemeTypeEnum `),ug()(),Ac(485,`td`,13)(486,`p`),vN(487,`O tipo de Tema a ser aplicado, light / dark.`),ug()()()(),Kc(488,`br`),Ac(489,`table`,8)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),vN(495,` setThemeType `),ug()()()()(),Ac(496,`tr`,13)(497,`td`,13)(498,`p`),vN(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),ug()()()(),Ac(500,`h5`)(501,`b`),vN(502,`Parâmetros`),ug()(),Ac(503,`table`,14)(504,`tr`,15)(505,`th`,16),vN(506,`Nome`),ug(),Ac(507,`th`,16),vN(508,`Tipo`),ug(),Ac(509,`th`,16),vN(510,`Descrição`),ug()(),Ac(511,`tr`,9)(512,`td`,17),vN(513,` theme`),ug(),Ac(514,`td`,18)(515,`code`,19),vN(516,` PoTheme `),ug()(),Ac(517,`td`,13)(518,`p`),vN(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),ug()()(),Ac(520,`tr`,9)(521,`td`,17),vN(522,` themeType`),ug(),Ac(523,`td`,18)(524,`code`,19),vN(525,` PoThemeTypeEnum `),ug()(),Ac(526,`td`,13)(527,`p`),vN(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),ug()()()(),Kc(529,`br`),Ac(530,`table`,8)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),vN(536,` setCurrentThemeType `),ug()()()()(),Ac(537,`tr`,13)(538,`td`,13)(539,`p`),vN(540,`Define o tipo (light/dark) para um tema já ativo.`),ug()()()(),Ac(541,`h5`)(542,`b`),vN(543,`Parâmetros`),ug()(),Ac(544,`table`,14)(545,`tr`,15)(546,`th`,16),vN(547,`Nome`),ug(),Ac(548,`th`,16),vN(549,`Tipo`),ug(),Ac(550,`th`,16),vN(551,`Descrição`),ug()(),Ac(552,`tr`,9)(553,`td`,17),vN(554,` themeType`),ug(),Ac(555,`td`,18)(556,`code`,19),vN(557,` PoThemeTypeEnum `),ug()(),Ac(558,`td`,13)(559,`p`),vN(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),ug()()()(),Kc(561,`br`),Ac(562,`table`,8)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),vN(568,` setThemeA11y `),ug()()()()(),Ac(569,`tr`,13)(570,`td`,13)(571,`p`),vN(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),ug()()()(),Ac(573,`h5`)(574,`b`),vN(575,`Parâmetros`),ug()(),Ac(576,`table`,14)(577,`tr`,15)(578,`th`,16),vN(579,`Nome`),ug(),Ac(580,`th`,16),vN(581,`Tipo`),ug(),Ac(582,`th`,16),vN(583,`Descrição`),ug()(),Ac(584,`tr`,9)(585,`td`,17),vN(586,` theme`),ug(),Ac(587,`td`,18)(588,`code`,19),vN(589,` PoTheme `),ug()(),Ac(590,`td`,13)(591,`p`),vN(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),ug()()(),Ac(593,`tr`,9)(594,`td`,17),vN(595,` a11y`),ug(),Ac(596,`td`,18)(597,`code`,19),vN(598,` PoThemeA11yEnum `),ug()(),Ac(599,`td`,13)(600,`p`),vN(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),ug()()()(),Kc(602,`br`),Ac(603,`table`,8)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),vN(609,` setCurrentThemeA11y `),ug()()()()(),Ac(610,`tr`,13)(611,`td`,13)(612,`p`),vN(613,`Define o nível de acessibilidade para um tema já ativo.`),ug()()()(),Ac(614,`h5`)(615,`b`),vN(616,`Parâmetros`),ug()(),Ac(617,`table`,14)(618,`tr`,15)(619,`th`,16),vN(620,`Nome`),ug(),Ac(621,`th`,16),vN(622,`Tipo`),ug(),Ac(623,`th`,16),vN(624,`Descrição`),ug()(),Ac(625,`tr`,9)(626,`td`,17),vN(627,` a11y`),ug(),Ac(628,`td`,18)(629,`code`,19),vN(630,` PoThemeA11yEnum `),ug()(),Ac(631,`td`,13)(632,`p`),vN(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),ug()()()(),Kc(634,`br`),Ac(635,`h3`),vN(636,`Interfaces`),ug(),Ac(637,`h4`,23)(638,`code`,5),vN(639,`PoThemeColor`),ug()(),Ac(640,`div`,2)(641,`p`),vN(642,`Interface para representar as cores do tema.`),ug()(),Ac(643,`h4`,7),vN(644,`Propriedades`),ug(),Ac(645,`table`,14)(646,`tr`,15)(647,`th`,16),vN(648,`Nome`),ug(),Ac(649,`th`,16),vN(650,`Tipo`),ug(),Ac(651,`th`,16),vN(652,`Descrição`),ug()(),Ac(653,`tr`,9)(654,`td`,17)(655,`div`,11)(656,`span`,12),vN(657,` action`),Kc(658,`br`),ug()()(),Ac(659,`td`,18)(660,`code`,24),vN(661,`PoThemeColorAction`),ug()(),Ac(662,`td`,13)(663,`em`)(664,`strong`),vN(665,`(opcional)`),ug()(),Ac(666,`p`),vN(667,`Cores da Action a serem aplicadas.`),ug(),Ac(668,`p`),vN(669,`Exemplo de uso:`),ug(),Ac(670,`pre`)(671,`code`,25),vN(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),ug()()()(),Ac(673,`tr`,9)(674,`td`,17)(675,`div`,11)(676,`span`,12),vN(677,` brand`),Kc(678,`br`),ug()()(),Ac(679,`td`,18)(680,`code`,26),vN(681,`poThemeColorBrand`),ug()(),Ac(682,`td`,13)(683,`em`)(684,`strong`),vN(685,`(opcional)`),ug()(),Ac(686,`p`),vN(687,`Cores da Brand a serem aplicadas.`),ug(),Ac(688,`p`),vN(689,`Exemplo de uso:`),ug(),Ac(690,`pre`)(691,`code`,20),vN(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),ug()()()(),Ac(693,`tr`,9)(694,`td`,17)(695,`div`,11)(696,`span`,12),vN(697,` categorical`),Kc(698,`br`),ug()()(),Ac(699,`td`,18)(700,`code`,27),vN(701,`PoThemeColorCategorical`),ug()(),Ac(702,`td`,13)(703,`em`)(704,`strong`),vN(705,`(opcional)`),ug()(),Ac(706,`p`),vN(707,`Cores da Categorical a serem aplicadas.`),ug(),Ac(708,`p`),vN(709,`Exemplo de uso:`),ug(),Ac(710,`pre`)(711,`code`,20),vN(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),ug()()()(),Ac(713,`tr`,9)(714,`td`,17)(715,`div`,11)(716,`span`,12),vN(717,` categorical-overlay`),Kc(718,`br`),ug()()(),Ac(719,`td`,18)(720,`code`,27),vN(721,`PoThemeColorCategorical`),ug()(),Ac(722,`td`,13)(723,`em`)(724,`strong`),vN(725,`(opcional)`),ug()(),Ac(726,`p`),vN(727,`Cores da Categorical a serem aplicadas.`),ug(),Ac(728,`p`),vN(729,`Exemplo de uso:`),ug(),Ac(730,`pre`)(731,`code`,20),vN(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),ug()()()(),Ac(733,`tr`,9)(734,`td`,17)(735,`div`,11)(736,`span`,12),vN(737,` neutral`),Kc(738,`br`),ug()()(),Ac(739,`td`,18)(740,`code`,28),vN(741,`PoThemeColorNeutral`),ug()(),Ac(742,`td`,13)(743,`em`)(744,`strong`),vN(745,`(opcional)`),ug()(),Ac(746,`p`),vN(747,`Cores Neutrals a serem aplicadas.`),ug(),Ac(748,`p`),vN(749,`Exemplo de uso:`),ug(),Ac(750,`pre`)(751,`code`,20),vN(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),ug()()()()(),Ac(753,`h4`,23)(754,`code`,5),vN(755,`PoThemeColorAction`),ug()(),Ac(756,`div`,2)(757,`p`),vN(758,`Interface para as cores de ação do tema.`),ug()(),Ac(759,`h4`,7),vN(760,`Propriedades`),ug(),Ac(761,`table`,14)(762,`tr`,15)(763,`th`,16),vN(764,`Nome`),ug(),Ac(765,`th`,16),vN(766,`Tipo`),ug(),Ac(767,`th`,16),vN(768,`Descrição`),ug()(),Ac(769,`tr`,9)(770,`td`,17)(771,`div`,11)(772,`span`,12),vN(773,` default`),Kc(774,`br`),ug()()(),Ac(775,`td`,18)(776,`code`,29),vN(777,`string`),ug()(),Ac(778,`td`,13)(779,`em`)(780,`strong`),vN(781,`(opcional)`),ug()(),Ac(782,`p`),vN(783,`Cores da Action 'Default'.`),ug(),Ac(784,`p`),vN(785,`Exemplo de uso:`),ug(),Ac(786,`pre`)(787,`code`,20),vN(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),ug()()()(),Ac(789,`tr`,9)(790,`td`,17)(791,`div`,11)(792,`span`,12),vN(793,` disabled`),Kc(794,`br`),ug()()(),Ac(795,`td`,18)(796,`code`,29),vN(797,`string`),ug()(),Ac(798,`td`,13)(799,`em`)(800,`strong`),vN(801,`(opcional)`),ug()(),Ac(802,`p`),vN(803,`Cores da Action de 'disabled'.`),ug(),Ac(804,`p`),vN(805,`Exemplo de uso:`),ug(),Ac(806,`pre`)(807,`code`,20),vN(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),ug()()()(),Ac(809,`tr`,9)(810,`td`,17)(811,`div`,11)(812,`span`,12),vN(813,` focus`),Kc(814,`br`),ug()()(),Ac(815,`td`,18)(816,`code`,29),vN(817,`string`),ug()(),Ac(818,`td`,13)(819,`em`)(820,`strong`),vN(821,`(opcional)`),ug()(),Ac(822,`p`),vN(823,`Cores da Action para 'focus'.`),ug(),Ac(824,`p`),vN(825,`Exemplo de uso:`),ug(),Ac(826,`pre`)(827,`code`,20),vN(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),ug()()()(),Ac(829,`tr`,9)(830,`td`,17)(831,`div`,11)(832,`span`,12),vN(833,` hover`),Kc(834,`br`),ug()()(),Ac(835,`td`,18)(836,`code`,29),vN(837,`string`),ug()(),Ac(838,`td`,13)(839,`em`)(840,`strong`),vN(841,`(opcional)`),ug()(),Ac(842,`p`),vN(843,`Cores da Action para 'hover'.`),ug(),Ac(844,`p`),vN(845,`Exemplo de uso:`),ug(),Ac(846,`pre`)(847,`code`,20),vN(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),ug()()()(),Ac(849,`tr`,9)(850,`td`,17)(851,`div`,11)(852,`span`,12),vN(853,` pressed`),Kc(854,`br`),ug()()(),Ac(855,`td`,18)(856,`code`,29),vN(857,`string`),ug()(),Ac(858,`td`,13)(859,`em`)(860,`strong`),vN(861,`(opcional)`),ug()(),Ac(862,`p`),vN(863,`Cores da Action para 'pressed'.`),ug(),Ac(864,`p`),vN(865,`Exemplo de uso:`),ug(),Ac(866,`pre`)(867,`code`,20),vN(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),ug()()()()(),Ac(869,`h4`,23)(870,`code`,5),vN(871,`PoThemeColorNeutral`),ug()(),Ac(872,`div`,2)(873,`p`),vN(874,`Interface para as cores neutras do tema.`),ug()(),Ac(875,`h4`,7),vN(876,`Propriedades`),ug(),Ac(877,`table`,14)(878,`tr`,15)(879,`th`,16),vN(880,`Nome`),ug(),Ac(881,`th`,16),vN(882,`Tipo`),ug(),Ac(883,`th`,16),vN(884,`Descrição`),ug()(),Ac(885,`tr`,9)(886,`td`,17)(887,`div`,11)(888,`span`,12),vN(889,` dark`),Kc(890,`br`),ug()()(),Ac(891,`td`,18)(892,`code`,30),vN(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),ug()(),Ac(894,`td`,13)(895,`em`)(896,`strong`),vN(897,`(opcional)`),ug()(),Ac(898,`p`),vN(899,`Cores Neutrals do tipo 'dark'.`),ug(),Ac(900,`p`),vN(901,`Exemplo de uso:`),ug(),Ac(902,`pre`)(903,`code`,20),vN(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),ug()()()(),Ac(905,`tr`,9)(906,`td`,17)(907,`div`,11)(908,`span`,12),vN(909,` light`),Kc(910,`br`),ug()()(),Ac(911,`td`,18)(912,`code`,31),vN(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),ug()(),Ac(914,`td`,13)(915,`em`)(916,`strong`),vN(917,`(opcional)`),ug()(),Ac(918,`p`),vN(919,`Cores Neutrals do tipo 'light'.`),ug(),Ac(920,`p`),vN(921,`Exemplo de uso:`),ug(),Ac(922,`pre`)(923,`code`,20),vN(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),ug()()()(),Ac(925,`tr`,9)(926,`td`,17)(927,`div`,11)(928,`span`,12),vN(929,` mid`),Kc(930,`br`),ug()()(),Ac(931,`td`,18)(932,`code`,32),vN(933,`{ '40'?: string; '60'?: string;
}`),ug()(),Ac(934,`td`,13)(935,`em`)(936,`strong`),vN(937,`(opcional)`),ug()(),Ac(938,`p`),vN(939,`Cores Neutrals do tipo 'mid'.`),ug(),Ac(940,`p`),vN(941,`Exemplo de uso:`),ug(),Ac(942,`pre`)(943,`code`,20),vN(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),ug()()()()(),Ac(945,`h4`,23)(946,`code`,5),vN(947,`PoThemeTokens`),ug()(),Ac(948,`div`,2)(949,`p`),vN(950,`Interface para o tema da aplicação.`),ug()(),Ac(951,`h4`,23)(952,`code`,5),vN(953,`PoThemeToken`),ug()(),Ac(954,`div`,2)(955,`p`),vN(956,`Interface para os tokens do Tema.`),ug()(),Ac(957,`h4`,7),vN(958,`Propriedades`),ug(),Ac(959,`table`,14)(960,`tr`,15)(961,`th`,16),vN(962,`Nome`),ug(),Ac(963,`th`,16),vN(964,`Tipo`),ug(),Ac(965,`th`,16),vN(966,`Descrição`),ug()(),Ac(967,`tr`,9)(968,`td`,17)(969,`div`,11)(970,`span`,12),vN(971,` color`),Kc(972,`br`),ug()()(),Ac(973,`td`,18)(974,`code`,33),vN(975,`PoThemeColor`),ug()(),Ac(976,`td`,13)(977,`em`)(978,`strong`),vN(979,`(opcional)`),ug()(),Ac(980,`p`),vN(981,`Tokens do tipo 'color'`),ug()()(),Ac(982,`tr`,9)(983,`td`,17)(984,`div`,11)(985,`span`,12),vN(986,` onRoot`),Kc(987,`br`),ug()()(),Ac(988,`td`,18)(989,`code`,34),vN(990,`DynamicProperties`),ug()(),Ac(991,`td`,13)(992,`em`)(993,`strong`),vN(994,`(opcional)`),ug()(),Ac(995,`p`),vN(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Ac(997,`code`),vN(998,`:root`),ug()(),Ac(999,`p`),vN(1e3,`Exemplo de uso:`),ug(),Ac(1001,`pre`)(1002,`code`,20),vN(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),ug()()()(),Ac(1004,`tr`,9)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),vN(1008,` perComponent`),Kc(1009,`br`),ug()()(),Ac(1010,`td`,18)(1011,`code`,34),vN(1012,`DynamicProperties`),ug()(),Ac(1013,`td`,13)(1014,`em`)(1015,`strong`),vN(1016,`(opcional)`),ug()(),Ac(1017,`p`),vN(1018,`Tokens do tipo 'perComponent'`),ug(),Ac(1019,`p`),vN(1020,`Exemplo de uso:`),ug(),Ac(1021,`pre`)(1022,`code`,20),vN(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),ug()()()()(),Ac(1024,`h4`,23)(1025,`code`,5),vN(1026,`PoTheme`),ug()(),Ac(1027,`div`,2)(1028,`p`),vN(1029,`Interface para o método `),Ac(1030,`code`),vN(1031,`setTheme()`),ug(),vN(1032,`.`),ug()(),Ac(1033,`h4`,7),vN(1034,`Propriedades`),ug(),Ac(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),vN(1038,`Nome`),ug(),Ac(1039,`th`,16),vN(1040,`Tipo`),ug(),Ac(1041,`th`,16),vN(1042,`Descrição`),ug()(),Ac(1043,`tr`,9)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),vN(1047,` active`),Kc(1048,`br`),ug()()(),Ac(1049,`td`,18)(1050,`code`,35),vN(1051,`PoThemeTypeEnum `),ug(),Ac(1052,`code`,36),vN(1053,` PoThemeActive`),ug()(),Ac(1054,`td`,13)(1055,`em`)(1056,`strong`),vN(1057,`(opcional)`),ug()(),Ac(1058,`p`),vN(1059,`Tipo e nível de acessibilidade de tema ativo`),ug()()(),Ac(1060,`tr`,9)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),vN(1064,` name`),Kc(1065,`br`),ug()()(),Ac(1066,`td`,18)(1067,`code`,29),vN(1068,`string`),ug()(),Ac(1069,`td`,13)(1070,`p`),vN(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),ug()()(),Ac(1072,`tr`,9)(1073,`td`,17)(1074,`div`,11)(1075,`span`,12),vN(1076,` type`),Kc(1077,`br`),ug()()(),Ac(1078,`td`,18)(1079,`code`,37),vN(1080,`PoThemeType `),ug(),Ac(1081,`code`,38),vN(1082,` Array<PoThemeType>`),ug()(),Ac(1083,`td`,13)(1084,`p`),vN(1085,`Tipo de tema:`),ug(),Ac(1086,`ul`)(1087,`li`),vN(1088,`light`),ug(),Ac(1089,`li`),vN(1090,`dark`),ug()()()()(),Ac(1091,`h3`),vN(1092,`Enums`),ug(),Ac(1093,`h4`,4)(1094,`code`,5),vN(1095,`PoThemeA11yEnum`),ug()(),Ac(1096,`div`,2)(1097,`p`),vN(1098,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),ug(),Ac(1099,`pre`)(1100,`code`),vN(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),ug()()(),Ac(1102,`h4`,7),vN(1103,`Propriedades`),ug(),Ac(1104,`table`,14)(1105,`tr`,15)(1106,`th`,16),vN(1107,`Nome`),ug(),Ac(1108,`th`,16),vN(1109,`Descrição`),ug()(),Ac(1110,`tr`,9)(1111,`td`,17)(1112,`div`,11)(1113,`span`,12),vN(1114,` AA`),Kc(1115,`br`),ug()()(),Ac(1116,`td`,13)(1117,`p`),vN(1118,`Nível de acessibilidade AA.`),ug(),Ac(1119,`ul`)(1120,`li`),vN(1121,`Define a espessura do `),Ac(1122,`code`),vN(1123,`outline`),ug(),vN(1124,` para `),Ac(1125,`strong`),vN(1126,`2px`),ug(),vN(1127,`.`),ug(),Ac(1128,`li`),vN(1129,`Disponibiliza o tamanho `),Ac(1130,`code`),vN(1131,`small`),ug(),vN(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),ug()()()(),Ac(1133,`tr`,9)(1134,`td`,17)(1135,`div`,11)(1136,`span`,12),vN(1137,` AAA`),Kc(1138,`br`),ug()()(),Ac(1139,`td`,13)(1140,`p`),vN(1141,`Nível de acessibilidade AAA.`),ug(),Ac(1142,`ul`)(1143,`li`),vN(1144,`Define a espessura do `),Ac(1145,`code`),vN(1146,`outline`),ug(),vN(1147,` para `),Ac(1148,`strong`),vN(1149,`4px`),ug(),vN(1150,`.`),ug(),Ac(1151,`li`),vN(1152,`Não disponibiliza o tamanho `),Ac(1153,`code`),vN(1154,`small`),ug(),vN(1155,` para componentes de formulário.`),ug()()()()(),Ac(1156,`h4`,4)(1157,`code`,5),vN(1158,`PoThemeTypeEnum`),ug()(),Ac(1159,`div`,2)(1160,`p`),vN(1161,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),ug(),Ac(1162,`pre`)(1163,`code`),vN(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),ug()()(),Ac(1165,`h4`,7),vN(1166,`Propriedades`),ug(),Ac(1167,`table`,14)(1168,`tr`,15)(1169,`th`,16),vN(1170,`Nome`),ug(),Ac(1171,`th`,16),vN(1172,`Descrição`),ug()(),Ac(1173,`tr`,9)(1174,`td`,17)(1175,`div`,11)(1176,`span`,12),vN(1177,` light`),Kc(1178,`br`),ug()()(),Ac(1179,`td`,13)(1180,`p`),vN(1181,`Define o tema como claro.`),ug()()(),Ac(1182,`tr`,9)(1183,`td`,17)(1184,`div`,11)(1185,`span`,12),vN(1186,` dark`),Kc(1187,`br`),ug()()(),Ac(1188,`td`,13)(1189,`p`),vN(1190,`Define o tema como escuro.`),ug()()()()())},encapsulation:2,changeDetection:1})}return m})();var we=[{path:``,component:(()=>{class m{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||m)(E(Qn),E(wn))};static ɵcmp=Hn({type:m,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-theme-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-theme-labs-view`),ug()()()),a&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,fe,Te],encapsulation:2,changeDetection:1})}return m})()}];var ye=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵmod=he({type:m});static ɵinj=ue({imports:[kL.forChild(we),kL]})}return m})();var Ze=(()=>{class m{static ɵfac=function(a){return new(a||m)};static ɵmod=he({type:m});static ɵinj=ue({imports:[Ta,ye]})}return m})();export{Ze as DocPoThemeModule};