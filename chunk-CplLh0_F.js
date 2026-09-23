import{$r as Vx,Cr as Nx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Nn as xve,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,dt as P4,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,ut as Obe,va as wY,vr as Mw,vt as SCe,xa as xx}from"./main-NT5YGKBQ.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(Ml(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),mN(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),lg()(),Ml(4,`po-accordion-item`,2)(5,`p`,1),mN(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),lg()()())},dependencies:[xve,P4],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Accordion Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-accordion-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ae],encapsulation:2,changeDetection:1})}return n})();function Se(n,H){if(n&1&&(Ml(0,`po-accordion-item`,2),mN(1),lg()),n&2){let l=H.$implicit,a=H.$index;cw(`p-label`,l.label)(`p-disabled`,l.disabledItem)(`p-label-tag`,l.labelTag)(`p-type-tag`,l.typeTag),Up(),gg(` Accordion Item Content `,a,` `)}}var de=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(l){l.disabledItem=this.disabledItem.includes(`disabled`),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Vx();Ml(0,`po-accordion`,1),xx(1,Se,2,5,`po-accordion-item`,2,Ax),lg(),ql(3,`po-divider`,3),Ml(4,`div`,4)(5,`po-input`,5),Mw(`ngModelChange`,function(c){return Qy(m),yN(i.literals,c)||(i.literals=c),Jy(c)}),ht(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),Ml(6,`po-checkbox-group`,6),Mw(`ngModelChange`,function(c){return Qy(m),yN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Jy(c)}),lg(),f0(),lg(),ql(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Ml(10,`div`,9)(11,`po-radio-group`,10),Mw(`ngModelChange`,function(c){return Qy(m),yN(i.typeTag,c)||(i.typeTag=c),Jy(c)}),lg(),f0(),Ml(12,`po-checkbox-group`,11),Mw(`ngModelChange`,function(c){return Qy(m),yN(i.disabledItem,c)||(i.disabledItem=c),Jy(c)}),lg(),f0(),lg(),Ml(13,`div`,12)(14,`po-radio-group`,13),Mw(`ngModelChange`,function(c){return Qy(m),yN(i.size,c)||(i.size=c),Jy(c)}),lg(),f0(),Ml(15,`po-button`,14),ht(`p-click`,function(){Qy(m);let c=Yx(9);return i.addAccordionItem(c.form.value),Jy(c.form.reset())}),lg()(),Ml(16,`div`,15)(17,`po-button`,16),ht(`p-click`,function(){return i.restore()}),lg()()}if(a&2){let m=Yx(9);cw(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),Up(),Nx(i.accordionItems),Up(4),Tw(`ngModel`,i.literals),p0(),Up(),Tw(`ngModel`,i.propertiesAccordion),cw(`p-options`,i.propertiesAccordionOptions),p0(),Up(2),cw(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),Up(3),cw(`p-options`,i.typeTagOptions),Tw(`ngModel`,i.typeTag),p0(),Up(),cw(`p-options`,i.disabledOption),Tw(`ngModel`,i.disabledItem),p0(),Up(2),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0(),Up(),cw(`p-disabled`,m.form.invalid)}},dependencies:[wY,Vk,xve,P4,Zt,nb,Obe,G4,lU,q0e],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Accordion Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-accordion
  [p-literals]="customLiterals"
  [p-show-manager-accordion]="propertiesAccordion.includes('showManager')"
  [p-allow-expand-all-items]="propertiesAccordion.includes('expandItems')"
  [p-size]="size"
>
  @for (accordionItem of accordionItems; track accordionItem; let i = $index) {
    <po-accordion-item
      [p-label]="accordionItem.label"
      [p-disabled]="accordionItem.disabledItem"
      [p-label-tag]="accordionItem.labelTag"
      [p-type-tag]="accordionItem.typeTag"
    >
      Accordion Item Content { { i }}
    </po-accordion-item>
  }
</po-accordion>

<po-divider p-label="ACCORDION"></po-divider>
<div class="po-row po-mt-1 po-mb-1">
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"closeAllItems": "Fechar itens"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>
  <po-checkbox-group
    class="po-md-6"
    name="propertiesAccordion"
    [(ngModel)]="propertiesAccordion"
    p-label="Properties Accordion"
    [p-options]="propertiesAccordionOptions"
  >
  </po-checkbox-group>
</div>

<po-divider p-label="ACCORDION ITEM"></po-divider>
<po-dynamic-form #accordionForm [p-fields]="accordionFieldsForm" [p-value]="accordionItems"> </po-dynamic-form>

<div class="po-row po-mt-2 po-mb-2">
  <po-radio-group class="po-md-6" p-label="Type Tag" [p-options]="typeTagOptions" [(ngModel)]="typeTag">
  </po-radio-group>
  <po-checkbox-group
    class="po-md-6"
    p-label="Properties Accordion Item"
    name="disabledItem"
    [p-options]="disabledOption"
    [(ngModel)]="disabledItem"
  >
  </po-checkbox-group>
</div>

<div class="po-row po-mt-1">
  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>
  <po-button
    class="po-md-6"
    p-label="Add Accordion"
    [p-disabled]="accordionForm.form.invalid"
    (p-click)="addAccordionItem(accordionForm.form.value); accordionForm.form.reset()"
  >
  </po-button>
</div>

<div class="po-row po-mt-2">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoAccordionItemComponent,
  PoAccordionLiterals,
  PoCheckboxGroupOption,
  PoDynamicFormField,
  PoRadioGroupOption,
  PoTagType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-labs',
  templateUrl: './sample-po-accordion-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionLabsComponent implements OnInit {
  accordionFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', required: true, gridColumns: 6 },
    { property: 'labelTag', label: 'Label Tag', gridColumns: 6 }
  ];

  propertiesAccordionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showManager', label: 'Show Accordion Manager' },
    { value: 'expandItems', label: 'Allow Expand All Items' }
  ];

  typeTagOptions: Array<PoRadioGroupOption> = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  disabledOption: Array<PoRadioGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  properties: Array<string> = [];
  propertiesAccordion: Array<string> = [];
  disabledItem: Array<string> = [];
  accordionItemIndex: number;
  customLiterals: PoAccordionLiterals;
  literals: string;
  typeTag: PoTagType;
  accordionItems: Array<PoAccordionItemComponent> = [];
  size: string;

  ngOnInit() {
    this.restore();
  }

  addAccordionItem(accordionItem: PoAccordionItemComponent) {
    accordionItem.disabledItem = this.disabledItem.includes('disabled');
    if (accordionItem.labelTag) {
      accordionItem.typeTag = this.typeTag;
    }
    const newAccordionItem = Object.assign({}, accordionItem, { value: this.accordionItems.length });

    this.accordionItems = [...this.accordionItems, newAccordionItem];
    this.disabledItem = [];
    this.typeTag = undefined;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.accordionItems = [];
    this.customLiterals = undefined;
    this.disabledItem = [];
    this.literals = '';
    this.properties = [];
    this.propertiesAccordion = [];
    this.typeTag = undefined;
    this.size = 'medium';
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-accordion-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,xe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&Zl(P4,7),a&2){let m;lo(m=uo())&&(i.questionOne=m.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,1)(1,`p`,2),mN(2,`You don't have to be afraid of being a blood donor!`),lg(),Ml(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),mN(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),lg()(),Ml(8,`po-accordion-item`,6)(9,`p`,5),mN(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),lg()(),Ml(11,`po-accordion-item`,7)(12,`p`,5),mN(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),lg()(),Ml(14,`po-accordion-item`,8)(15,`p`,5),mN(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),lg()()(),Ml(17,`p`,9),mN(18,` For more information, see the `),Ml(19,`a`,10),mN(20,`Hemosc FAQ`),lg(),mN(21,`. `),lg()()),a&2&&(Up(3),cw(`p-show-manager-accordion`,!0))},dependencies:[xve,P4,V8e],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Accordion - FAQs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Blood donation FAQs">
  <p class="po-pb-2 po-text-color-neutral-dark-40">You don't have to be afraid of being a blood donor!</p>

  <po-accordion [p-show-manager-accordion]="true">
    <po-accordion-item p-label="Who can donate?" #questionOne>
      <p class="po-text-color-neutral-dark-40">
        In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance
        with current legislation and a number of factors that take into account the risk that such a donation may pose
        to the health of the candidate himself and to the health of the individual receiving the donated blood.
      </p>
    </po-accordion-item>

    <po-accordion-item
      p-label="How long does it take for the blood to be processed?"
      p-label-tag="Important!"
      p-type-tag="danger"
    >
      <p class="po-text-color-neutral-dark-40">
        Blood is processed as soon as collected, preferably within 6 hours of donation.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="How long does the body take to replenish donated blood?">
      <p class="po-text-color-neutral-dark-40">
        Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of
        childbearing age.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="Is donating blood safe?">
      <p class="po-text-color-neutral-dark-40">
        Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there
        is a small risk that the donor may feel unwell during or shortly after the donation especially the first few
        times he or she donates, but the services are concerned about this, watching and making sure the donors feel
        nothing or feel feel so that they are well assisted until full recovery.
      </p>
    </po-accordion-item>
  </po-accordion>

  <p class="po-pt-2 po-text-color-neutral-dark-40">
    For more information, see the <a href="http://www.hemosc.org.br/perguntas-frequentes.html">Hemosc FAQ</a>.
  </p>
</po-page-default>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-faq',
  templateUrl: './sample-po-accordion-faq.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionFaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-accordion-faq`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:532,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-accordion`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoAccordionComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),lg(),Ml(18,`p`),mN(19,`Para utilizá-lo, é necessário envolver cada item no componente `),Ml(20,`a`,6)(21,`code`),mN(22,`po-accordion-item`),lg()(),mN(23,`,
como no exemplo abaixo:`),lg(),Ml(24,`pre`)(25,`code`),mN(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),lg()(),Ml(27,`p`),mN(28,`e no typescript pode-se utilizar o `),Ml(29,`code`),mN(30,`@ViewChild`),lg(),mN(31,`:`),lg(),Ml(32,`pre`)(33,`code`),mN(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),lg()(),Ml(35,`p`),mN(36,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),lg(),Ml(37,`p`),mN(38,`Caso houver a necessidade de abrir algum dos `),Ml(39,`code`),mN(40,`po-accordion-item`),lg(),mN(41,` via Typescript
acesse a `),Ml(42,`a`,6),mN(43,`documentação do PoAccordionItem`),lg(),mN(44,`.`),lg(),Ml(45,`h4`),mN(46,`Tokens customizáveis`),lg(),Ml(47,`p`),mN(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(49,`blockquote`)(50,`p`),mN(51,`Para maiores informações, acesse o guia `),Ml(52,`a`,7),mN(53,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(54,`.`),lg()(),Ml(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),mN(59,`Propriedade`),lg(),Ml(60,`th`),mN(61,`Descrição`),lg(),Ml(62,`th`),mN(63,`Valor Padrão`),lg()()(),Ml(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),mN(68,`Default Values`),lg()(),ql(69,`td`)(70,`td`),lg(),Ml(71,`tr`)(72,`td`)(73,`code`),mN(74,`--font-family`),lg()(),Ml(75,`td`),mN(76,`Família tipográfica usada`),lg(),Ml(77,`td`)(78,`code`),mN(79,`var(--font-family-theme)`),lg()()(),Ml(80,`tr`)(81,`td`)(82,`code`),mN(83,`--font-size`),lg()(),Ml(84,`td`),mN(85,`Tamanho da fonte`),lg(),Ml(86,`td`)(87,`code`),mN(88,`var(--font-size-default)`),lg()()(),Ml(89,`tr`)(90,`td`)(91,`code`),mN(92,`--color`),lg()(),Ml(93,`td`),mN(94,`Cor principal do accordion`),lg(),Ml(95,`td`)(96,`code`),mN(97,`var(--color-action-default)`),lg()()(),Ml(98,`tr`)(99,`td`)(100,`code`),mN(101,`--background-color`),lg()(),Ml(102,`td`),mN(103,`Cor de background`),lg(),Ml(104,`td`)(105,`code`),mN(106,`var(--color-neutral-light-00)`),lg()()(),Ml(107,`tr`)(108,`td`)(109,`code`),mN(110,`--font-weight`),lg()(),Ml(111,`td`),mN(112,`Peso da fonte`),lg(),Ml(113,`td`)(114,`code`),mN(115,`var(--font-weight-bold)`),lg()()(),Ml(116,`tr`)(117,`td`)(118,`strong`),mN(119,`Hover`),lg()(),ql(120,`td`)(121,`td`),lg(),Ml(122,`tr`)(123,`td`)(124,`code`),mN(125,`--color-hover`),lg()(),Ml(126,`td`),mN(127,`Cor principal no estado hover`),lg(),Ml(128,`td`)(129,`code`),mN(130,`var(--color-action-hover)`),lg()()(),Ml(131,`tr`)(132,`td`)(133,`code`),mN(134,`--background-hover`),lg()(),Ml(135,`td`),mN(136,`Cor de background no estado hover`),lg(),Ml(137,`td`)(138,`code`),mN(139,`var(--color-brand-01-lightest)`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`strong`),mN(143,`Focused`),lg()(),ql(144,`td`)(145,`td`),lg(),Ml(146,`tr`)(147,`td`)(148,`code`),mN(149,`--color-focused`),lg()(),Ml(150,`td`),mN(151,`Cor principal no estado de focus`),lg(),Ml(152,`td`)(153,`code`),mN(154,`var(--color-action-focus)`),lg()()(),Ml(155,`tr`)(156,`td`)(157,`code`),mN(158,`--outline-color-focused`),lg(),mN(159,` \xA0`),lg(),Ml(160,`td`),mN(161,`Cor do outline do estado de focus`),lg(),Ml(162,`td`)(163,`code`),mN(164,`var(--color-action-focus)`),lg()()(),Ml(165,`tr`)(166,`td`)(167,`strong`),mN(168,`Disabled`),lg()(),ql(169,`td`)(170,`td`),lg(),Ml(171,`tr`)(172,`td`)(173,`code`),mN(174,`--color-disabled`),lg()(),Ml(175,`td`),mN(176,`Cor principal no estado disabled`),lg(),Ml(177,`td`)(178,`code`),mN(179,`var(--color-neutral-mid-60)`),lg()()(),Ml(180,`tr`)(181,`td`)(182,`code`),mN(183,`--background-disabled`),lg(),mN(184,` \xA0`),lg(),Ml(185,`td`),mN(186,`Cor de background no estado disabled`),lg(),Ml(187,`td`)(188,`code`),mN(189,`var(--color-neutral-light-10)`),lg()()(),Ml(190,`tr`)(191,`td`)(192,`strong`),mN(193,`po-accordion-manager`),lg()(),ql(194,`td`)(195,`td`),lg(),Ml(196,`tr`)(197,`td`)(198,`code`),mN(199,`--background-color`),lg()(),Ml(200,`td`),mN(201,`Cor de background`),lg(),Ml(202,`td`)(203,`code`),mN(204,`var(--color-neutral-mid-60)`),lg()()(),Ml(205,`tr`)(206,`td`)(207,`code`),mN(208,`--color`),lg()(),Ml(209,`td`),mN(210,`Cor principal do accordion manager`),lg(),Ml(211,`td`)(212,`code`),mN(213,`var(--color-neutral-light-10)`),lg()()(),Ml(214,`tr`)(215,`td`)(216,`code`),mN(217,`--font-family`),lg()(),Ml(218,`td`),mN(219,`Família tipográfica usada`),lg(),Ml(220,`td`)(221,`code`),mN(222,`var(--color-neutral-light-10)`),lg()()(),Ml(223,`tr`)(224,`td`)(225,`code`),mN(226,`--font-size`),lg()(),Ml(227,`td`),mN(228,`Tamanho da fonte`),lg(),Ml(229,`td`)(230,`code`),mN(231,`var(--color-neutral-light-10)`),lg()()(),Ml(232,`tr`)(233,`td`)(234,`code`),mN(235,`--font-weight`),lg()(),Ml(236,`td`),mN(237,`Peso da fonte`),lg(),Ml(238,`td`)(239,`code`),mN(240,`var(--color-neutral-light-10)`),lg()()(),Ml(241,`tr`)(242,`td`)(243,`strong`),mN(244,`Pressed`),lg()(),ql(245,`td`)(246,`td`),lg(),Ml(247,`tr`)(248,`td`)(249,`code`),mN(250,`--background-pressed`),lg(),mN(251,` \xA0`),lg(),Ml(252,`td`),mN(253,`Cor de background no estado de pressionado\xA0`),lg(),Ml(254,`td`)(255,`code`),mN(256,`var(--color-brand-01-lighter)`),lg()()(),Ml(257,`tr`)(258,`td`)(259,`code`),mN(260,`--color-pressed`),lg()(),Ml(261,`td`),mN(262,`Cor principal no estado de pressionado`),lg(),Ml(263,`td`)(264,`code`),mN(265,`var(--color-action-pressed)`),lg()()()()()(),Ml(266,`div`,8)(267,`h4`,9),mN(268,`Seletor`),lg(),Ml(269,`pre`,10),mN(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),lg()(),Ml(271,`h4`,11),mN(272,`Propriedades`),lg(),Ml(273,`table`,12)(274,`tr`,13)(275,`th`,14),mN(276,`Nome`),lg(),Ml(277,`th`,14),mN(278,`Tipo`),lg(),Ml(279,`th`,14),mN(280,`Padrão`),lg(),Ml(281,`th`,14),mN(282,`Descrição`),lg()(),Ml(283,`tr`,15)(284,`td`,16)(285,`div`,17)(286,`span`,18),mN(287,` p-allow-expand-all-items`),ql(288,`br`),lg()()(),Ml(289,`td`,19)(290,`code`,20),mN(291,`boolean`),lg()(),Ml(292,`td`,21)(293,`p`)(294,`code`),mN(295,`false`),lg()()(),Ml(296,`td`,22)(297,`em`)(298,`strong`),mN(299,`(opcional)`),lg()(),Ml(300,`p`),mN(301,`Permite expandir mais de um `),Ml(302,`code`),mN(303,`<po-accordion-item></po-accordion-item>`),lg(),mN(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Ml(305,`code`),mN(306,`p-show-manager-accordion`),lg(),mN(307,` esteja como `),Ml(308,`code`),mN(309,`true`),lg(),mN(310,`.`),lg()()(),Ml(311,`tr`,15)(312,`td`,16)(313,`div`,23)(314,`span`,24),mN(315,` (p-collapse-all)`),ql(316,`br`),lg()()(),Ml(317,`td`,19)(318,`code`,25),mN(319,`EventEmitter`),lg()(),Ml(320,`td`,21),mN(321,`-`),lg(),Ml(322,`td`,22)(323,`em`)(324,`strong`),mN(325,`(opcional)`),lg()(),Ml(326,`p`),mN(327,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),lg()()(),Ml(328,`tr`,15)(329,`td`,16)(330,`div`,23)(331,`span`,24),mN(332,` (p-expand-all)`),ql(333,`br`),lg()()(),Ml(334,`td`,19)(335,`code`,25),mN(336,`EventEmitter`),lg()(),Ml(337,`td`,21),mN(338,`-`),lg(),Ml(339,`td`,22)(340,`em`)(341,`strong`),mN(342,`(opcional)`),lg()(),Ml(343,`p`),mN(344,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),lg()()(),Ml(345,`tr`,15)(346,`td`,16)(347,`div`,17)(348,`span`,18),mN(349,` p-literals`),ql(350,`br`),lg()()(),Ml(351,`td`,19)(352,`code`,26),mN(353,`PoAccordionLiterals`),lg()(),Ml(354,`td`,21),mN(355,`-`),lg(),Ml(356,`td`,22)(357,`em`)(358,`strong`),mN(359,`(opcional)`),lg()(),Ml(360,`p`),mN(361,`Objeto com as literais usadas no `),Ml(362,`code`),mN(363,`po-accordion`),lg(),mN(364,`.`),lg(),Ml(365,`p`),mN(366,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(367,`pre`)(368,`code`),mN(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),lg()(),Ml(370,`p`),mN(371,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(372,`pre`)(373,`code`),mN(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),lg()(),Ml(375,`p`),mN(376,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(377,`pre`)(378,`code`),mN(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),lg()(),Ml(380,`blockquote`)(381,`p`),mN(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(383,`a`,27)(384,`code`),mN(385,`PoI18nService`),lg()(),mN(386,` ou do browser.`),lg()()()(),Ml(387,`tr`,15)(388,`td`,16)(389,`div`,17)(390,`span`,18),mN(391,` p-show-manager-accordion`),ql(392,`br`),lg()()(),Ml(393,`td`,19)(394,`code`,20),mN(395,`boolean`),lg()(),Ml(396,`td`,21)(397,`p`)(398,`code`),mN(399,`false`),lg()()(),Ml(400,`td`,22)(401,`em`)(402,`strong`),mN(403,`(opcional)`),lg()(),Ml(404,`p`),mN(405,`Exibe o Gerenciador de Accordion.`),lg()()(),Ml(406,`tr`,15)(407,`td`,16)(408,`div`,17)(409,`span`,18),mN(410,` p-size`),ql(411,`br`),lg()()(),Ml(412,`td`,19)(413,`code`,28),mN(414,`string`),lg()(),Ml(415,`td`,21)(416,`p`)(417,`code`),mN(418,`medium`),lg()()(),Ml(419,`td`,22)(420,`em`)(421,`strong`),mN(422,`(opcional)`),lg()(),Ml(423,`p`),mN(424,`Define o tamanho do componente:`),lg(),Ml(425,`ul`)(426,`li`)(427,`code`),mN(428,`small`),lg(),mN(429,`: altura de 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(430,`li`)(431,`code`),mN(432,`medium`),lg(),mN(433,`: altura de 44px.`),lg()(),Ml(434,`blockquote`)(435,`p`),mN(436,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(437,`code`),mN(438,`medium`),lg(),mN(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(440,`a`,29),mN(441,`po-theme`),lg(),mN(442,`.`),lg()()()()(),Ml(443,`h3`,11),mN(444,`Métodos`),lg(),Ml(445,`table`,30)(446,`tr`,15)(447,`th`,31)(448,`div`,17)(449,`h4`)(450,`span`,18),mN(451,` collapseAllItems `),lg()()()()(),Ml(452,`tr`,22)(453,`td`,22)(454,`p`),mN(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Ml(456,`code`),mN(457,`p-show-manager-accordion`),lg(),mN(458,` estiver como `),Ml(459,`code`),mN(460,`true`),lg(),mN(461,`.`),lg()()()(),ql(462,`br`),Ml(463,`table`,30)(464,`tr`,15)(465,`th`,31)(466,`div`,17)(467,`h4`)(468,`span`,18),mN(469,` expandAllItems `),lg()()()()(),Ml(470,`tr`,22)(471,`td`,22)(472,`p`),mN(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Ml(474,`code`),mN(475,`p-show-manager-accordion`),lg(),mN(476,` estiver como `),Ml(477,`code`),mN(478,`true`),lg(),mN(479,`.`),lg()()()(),ql(480,`br`),Ml(481,`h3`),mN(482,`Interfaces`),lg(),Ml(483,`h4`,32)(484,`code`,5),mN(485,`PoAccordionLiterals`),lg()(),Ml(486,`div`,2)(487,`p`),mN(488,`Interface para definição das literais usadas no `),Ml(489,`code`),mN(490,`po-accordion`),lg(),mN(491,`.`),lg()(),Ml(492,`h4`,11),mN(493,`Propriedades`),lg(),Ml(494,`table`,12)(495,`tr`,13)(496,`th`,14),mN(497,`Nome`),lg(),Ml(498,`th`,14),mN(499,`Tipo`),lg(),Ml(500,`th`,14),mN(501,`Descrição`),lg()(),Ml(502,`tr`,15)(503,`td`,16)(504,`div`,17)(505,`span`,18),mN(506,` closeAllItems`),ql(507,`br`),lg()()(),Ml(508,`td`,19)(509,`code`,28),mN(510,`string`),lg()(),Ml(511,`td`,22)(512,`em`)(513,`strong`),mN(514,`(opcional)`),lg()(),Ml(515,`p`),mN(516,`Label do gerenciador de Accordion para colapsar todos os itens`),lg()()(),Ml(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),mN(521,` expandAllItems`),ql(522,`br`),lg()()(),Ml(523,`td`,19)(524,`code`,28),mN(525,`string`),lg()(),Ml(526,`td`,22)(527,`em`)(528,`strong`),mN(529,`(opcional)`),lg()(),Ml(530,`p`),mN(531,`Label do gerenciador de Accordion para expandir todos os itens.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Pe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-accordion-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-accordion-basic-view`)(6,`sample-po-accordion-labs-view`)(7,`sample-po-accordion-faq-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,le,ce,me,se],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[NL.forChild(Pe),NL]})}return n})();var Ze=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[ar,he]})}return n})();export{Ze as DocPoAccordionModule};