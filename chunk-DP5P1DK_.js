import{$i as pt,Br as Qn,Ci as fo,Gi as mg,Gn as Ac,Hi as kx,Hr as RE,Ir as Ox,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Nt as _oe,Sa as zO,Tt as W5,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,br as Jv,ca as ue,di as cE,dr as Hn,fn as ni,i as _a,in as kte,ji as ho,jr as Nx,k as D4,ki as he$1,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wn as see,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(Ac(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),vN(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),ug()(),Ac(4,`po-accordion-item`,2)(5,`p`,1),vN(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),ug()()())},dependencies:[see,W5],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Accordion Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-accordion-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ae],encapsulation:2,changeDetection:1})}return n})();function Se(n,H){if(n&1&&(Ac(0,`po-accordion-item`,2),vN(1),ug()),n&2){let l=H.$implicit,a=H.$index;cE(`p-label`,l.label)(`p-disabled`,l.disabledItem)(`p-label-tag`,l.labelTag)(`p-type-tag`,l.typeTag),Hp(),mg(` Accordion Item Content `,a,` `)}}var de=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(l){l.disabledItem=this.disabledItem.includes(`disabled`),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Bx();Ac(0,`po-accordion`,1),Ox(1,Se,2,5,`po-accordion-item`,2,Nx),ug(),Kc(3,`po-divider`,3),Ac(4,`div`,4)(5,`po-input`,5),RE(`ngModelChange`,function(c){return Jv(m),DN(i.literals,c)||(i.literals=c),e_(c)}),pt(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),Ac(6,`po-checkbox-group`,6),RE(`ngModelChange`,function(c){return Jv(m),DN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),e_(c)}),ug(),p0(),ug(),Kc(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Ac(10,`div`,9)(11,`po-radio-group`,10),RE(`ngModelChange`,function(c){return Jv(m),DN(i.typeTag,c)||(i.typeTag=c),e_(c)}),ug(),p0(),Ac(12,`po-checkbox-group`,11),RE(`ngModelChange`,function(c){return Jv(m),DN(i.disabledItem,c)||(i.disabledItem=c),e_(c)}),ug(),p0(),ug(),Ac(13,`div`,12)(14,`po-radio-group`,13),RE(`ngModelChange`,function(c){return Jv(m),DN(i.size,c)||(i.size=c),e_(c)}),ug(),p0(),Ac(15,`po-button`,14),pt(`p-click`,function(){Jv(m);let c=Zx(9);return i.addAccordionItem(c.form.value),e_(c.form.reset())}),ug()(),Ac(16,`div`,15)(17,`po-button`,16),pt(`p-click`,function(){return i.restore()}),ug()()}if(a&2){let m=Zx(9);cE(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),Hp(),kx(i.accordionItems),Hp(4),TE(`ngModel`,i.literals),m0(),Hp(),TE(`ngModel`,i.propertiesAccordion),cE(`p-options`,i.propertiesAccordionOptions),m0(),Hp(2),cE(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),Hp(3),cE(`p-options`,i.typeTagOptions),TE(`ngModel`,i.typeTag),m0(),Hp(),cE(`p-options`,i.disabledOption),TE(`ngModel`,i.disabledItem),m0(),Hp(2),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0(),Hp(),cE(`p-disabled`,m.form.invalid)}},dependencies:[D9,BP,see,W5,ni,Ef,_oe,l4,D4,kte],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Accordion Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-accordion
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-accordion-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,xe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&Xc(W5,7),a&2){let m;fo(m=ho())&&(i.questionOne=m.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,1)(1,`p`,2),vN(2,`You don't have to be afraid of being a blood donor!`),ug(),Ac(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),vN(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),ug()(),Ac(8,`po-accordion-item`,6)(9,`p`,5),vN(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),ug()(),Ac(11,`po-accordion-item`,7)(12,`p`,5),vN(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),ug()(),Ac(14,`po-accordion-item`,8)(15,`p`,5),vN(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),ug()()(),Ac(17,`p`,9),vN(18,` For more information, see the `),Ac(19,`a`,10),vN(20,`Hemosc FAQ`),ug(),vN(21,`. `),ug()()),a&2&&(Hp(3),cE(`p-show-manager-accordion`,!0))},dependencies:[see,W5,$ze],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Accordion - FAQs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Blood donation FAQs">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-accordion-faq`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:532,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-accordion`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoAccordionComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),ug(),Ac(18,`p`),vN(19,`Para utilizá-lo, é necessário envolver cada item no componente `),Ac(20,`a`,6)(21,`code`),vN(22,`po-accordion-item`),ug()(),vN(23,`,
como no exemplo abaixo:`),ug(),Ac(24,`pre`)(25,`code`),vN(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),ug()(),Ac(27,`p`),vN(28,`e no typescript pode-se utilizar o `),Ac(29,`code`),vN(30,`@ViewChild`),ug(),vN(31,`:`),ug(),Ac(32,`pre`)(33,`code`),vN(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),ug()(),Ac(35,`p`),vN(36,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),ug(),Ac(37,`p`),vN(38,`Caso houver a necessidade de abrir algum dos `),Ac(39,`code`),vN(40,`po-accordion-item`),ug(),vN(41,` via Typescript
acesse a `),Ac(42,`a`,6),vN(43,`documentação do PoAccordionItem`),ug(),vN(44,`.`),ug(),Ac(45,`h4`),vN(46,`Tokens customizáveis`),ug(),Ac(47,`p`),vN(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(49,`blockquote`)(50,`p`),vN(51,`Para maiores informações, acesse o guia `),Ac(52,`a`,7),vN(53,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(54,`.`),ug()(),Ac(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),vN(59,`Propriedade`),ug(),Ac(60,`th`),vN(61,`Descrição`),ug(),Ac(62,`th`),vN(63,`Valor Padrão`),ug()()(),Ac(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),vN(68,`Default Values`),ug()(),Kc(69,`td`)(70,`td`),ug(),Ac(71,`tr`)(72,`td`)(73,`code`),vN(74,`--font-family`),ug()(),Ac(75,`td`),vN(76,`Família tipográfica usada`),ug(),Ac(77,`td`)(78,`code`),vN(79,`var(--font-family-theme)`),ug()()(),Ac(80,`tr`)(81,`td`)(82,`code`),vN(83,`--font-size`),ug()(),Ac(84,`td`),vN(85,`Tamanho da fonte`),ug(),Ac(86,`td`)(87,`code`),vN(88,`var(--font-size-default)`),ug()()(),Ac(89,`tr`)(90,`td`)(91,`code`),vN(92,`--color`),ug()(),Ac(93,`td`),vN(94,`Cor principal do accordion`),ug(),Ac(95,`td`)(96,`code`),vN(97,`var(--color-action-default)`),ug()()(),Ac(98,`tr`)(99,`td`)(100,`code`),vN(101,`--background-color`),ug()(),Ac(102,`td`),vN(103,`Cor de background`),ug(),Ac(104,`td`)(105,`code`),vN(106,`var(--color-neutral-light-00)`),ug()()(),Ac(107,`tr`)(108,`td`)(109,`code`),vN(110,`--font-weight`),ug()(),Ac(111,`td`),vN(112,`Peso da fonte`),ug(),Ac(113,`td`)(114,`code`),vN(115,`var(--font-weight-bold)`),ug()()(),Ac(116,`tr`)(117,`td`)(118,`strong`),vN(119,`Hover`),ug()(),Kc(120,`td`)(121,`td`),ug(),Ac(122,`tr`)(123,`td`)(124,`code`),vN(125,`--color-hover`),ug()(),Ac(126,`td`),vN(127,`Cor principal no estado hover`),ug(),Ac(128,`td`)(129,`code`),vN(130,`var(--color-action-hover)`),ug()()(),Ac(131,`tr`)(132,`td`)(133,`code`),vN(134,`--background-hover`),ug()(),Ac(135,`td`),vN(136,`Cor de background no estado hover`),ug(),Ac(137,`td`)(138,`code`),vN(139,`var(--color-brand-01-lightest)`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`strong`),vN(143,`Focused`),ug()(),Kc(144,`td`)(145,`td`),ug(),Ac(146,`tr`)(147,`td`)(148,`code`),vN(149,`--color-focused`),ug()(),Ac(150,`td`),vN(151,`Cor principal no estado de focus`),ug(),Ac(152,`td`)(153,`code`),vN(154,`var(--color-action-focus)`),ug()()(),Ac(155,`tr`)(156,`td`)(157,`code`),vN(158,`--outline-color-focused`),ug(),vN(159,` \xA0`),ug(),Ac(160,`td`),vN(161,`Cor do outline do estado de focus`),ug(),Ac(162,`td`)(163,`code`),vN(164,`var(--color-action-focus)`),ug()()(),Ac(165,`tr`)(166,`td`)(167,`strong`),vN(168,`Disabled`),ug()(),Kc(169,`td`)(170,`td`),ug(),Ac(171,`tr`)(172,`td`)(173,`code`),vN(174,`--color-disabled`),ug()(),Ac(175,`td`),vN(176,`Cor principal no estado disabled`),ug(),Ac(177,`td`)(178,`code`),vN(179,`var(--color-neutral-mid-60)`),ug()()(),Ac(180,`tr`)(181,`td`)(182,`code`),vN(183,`--background-disabled`),ug(),vN(184,` \xA0`),ug(),Ac(185,`td`),vN(186,`Cor de background no estado disabled`),ug(),Ac(187,`td`)(188,`code`),vN(189,`var(--color-neutral-light-10)`),ug()()(),Ac(190,`tr`)(191,`td`)(192,`strong`),vN(193,`po-accordion-manager`),ug()(),Kc(194,`td`)(195,`td`),ug(),Ac(196,`tr`)(197,`td`)(198,`code`),vN(199,`--background-color`),ug()(),Ac(200,`td`),vN(201,`Cor de background`),ug(),Ac(202,`td`)(203,`code`),vN(204,`var(--color-neutral-mid-60)`),ug()()(),Ac(205,`tr`)(206,`td`)(207,`code`),vN(208,`--color`),ug()(),Ac(209,`td`),vN(210,`Cor principal do accordion manager`),ug(),Ac(211,`td`)(212,`code`),vN(213,`var(--color-neutral-light-10)`),ug()()(),Ac(214,`tr`)(215,`td`)(216,`code`),vN(217,`--font-family`),ug()(),Ac(218,`td`),vN(219,`Família tipográfica usada`),ug(),Ac(220,`td`)(221,`code`),vN(222,`var(--color-neutral-light-10)`),ug()()(),Ac(223,`tr`)(224,`td`)(225,`code`),vN(226,`--font-size`),ug()(),Ac(227,`td`),vN(228,`Tamanho da fonte`),ug(),Ac(229,`td`)(230,`code`),vN(231,`var(--color-neutral-light-10)`),ug()()(),Ac(232,`tr`)(233,`td`)(234,`code`),vN(235,`--font-weight`),ug()(),Ac(236,`td`),vN(237,`Peso da fonte`),ug(),Ac(238,`td`)(239,`code`),vN(240,`var(--color-neutral-light-10)`),ug()()(),Ac(241,`tr`)(242,`td`)(243,`strong`),vN(244,`Pressed`),ug()(),Kc(245,`td`)(246,`td`),ug(),Ac(247,`tr`)(248,`td`)(249,`code`),vN(250,`--background-pressed`),ug(),vN(251,` \xA0`),ug(),Ac(252,`td`),vN(253,`Cor de background no estado de pressionado\xA0`),ug(),Ac(254,`td`)(255,`code`),vN(256,`var(--color-brand-01-lighter)`),ug()()(),Ac(257,`tr`)(258,`td`)(259,`code`),vN(260,`--color-pressed`),ug()(),Ac(261,`td`),vN(262,`Cor principal no estado de pressionado`),ug(),Ac(263,`td`)(264,`code`),vN(265,`var(--color-action-pressed)`),ug()()()()()(),Ac(266,`div`,8)(267,`h4`,9),vN(268,`Seletor`),ug(),Ac(269,`pre`,10),vN(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),ug()(),Ac(271,`h4`,11),vN(272,`Propriedades`),ug(),Ac(273,`table`,12)(274,`tr`,13)(275,`th`,14),vN(276,`Nome`),ug(),Ac(277,`th`,14),vN(278,`Tipo`),ug(),Ac(279,`th`,14),vN(280,`Padrão`),ug(),Ac(281,`th`,14),vN(282,`Descrição`),ug()(),Ac(283,`tr`,15)(284,`td`,16)(285,`div`,17)(286,`span`,18),vN(287,` p-allow-expand-all-items`),Kc(288,`br`),ug()()(),Ac(289,`td`,19)(290,`code`,20),vN(291,`boolean`),ug()(),Ac(292,`td`,21)(293,`p`)(294,`code`),vN(295,`false`),ug()()(),Ac(296,`td`,22)(297,`em`)(298,`strong`),vN(299,`(opcional)`),ug()(),Ac(300,`p`),vN(301,`Permite expandir mais de um `),Ac(302,`code`),vN(303,`<po-accordion-item></po-accordion-item>`),ug(),vN(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Ac(305,`code`),vN(306,`p-show-manager-accordion`),ug(),vN(307,` esteja como `),Ac(308,`code`),vN(309,`true`),ug(),vN(310,`.`),ug()()(),Ac(311,`tr`,15)(312,`td`,16)(313,`div`,23)(314,`span`,24),vN(315,` (p-collapse-all)`),Kc(316,`br`),ug()()(),Ac(317,`td`,19)(318,`code`,25),vN(319,`EventEmitter`),ug()(),Ac(320,`td`,21),vN(321,`-`),ug(),Ac(322,`td`,22)(323,`em`)(324,`strong`),vN(325,`(opcional)`),ug()(),Ac(326,`p`),vN(327,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),ug()()(),Ac(328,`tr`,15)(329,`td`,16)(330,`div`,23)(331,`span`,24),vN(332,` (p-expand-all)`),Kc(333,`br`),ug()()(),Ac(334,`td`,19)(335,`code`,25),vN(336,`EventEmitter`),ug()(),Ac(337,`td`,21),vN(338,`-`),ug(),Ac(339,`td`,22)(340,`em`)(341,`strong`),vN(342,`(opcional)`),ug()(),Ac(343,`p`),vN(344,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),ug()()(),Ac(345,`tr`,15)(346,`td`,16)(347,`div`,17)(348,`span`,18),vN(349,` p-literals`),Kc(350,`br`),ug()()(),Ac(351,`td`,19)(352,`code`,26),vN(353,`PoAccordionLiterals`),ug()(),Ac(354,`td`,21),vN(355,`-`),ug(),Ac(356,`td`,22)(357,`em`)(358,`strong`),vN(359,`(opcional)`),ug()(),Ac(360,`p`),vN(361,`Objeto com as literais usadas no `),Ac(362,`code`),vN(363,`po-accordion`),ug(),vN(364,`.`),ug(),Ac(365,`p`),vN(366,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(367,`pre`)(368,`code`),vN(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),ug()(),Ac(370,`p`),vN(371,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(372,`pre`)(373,`code`),vN(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),ug()(),Ac(375,`p`),vN(376,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(377,`pre`)(378,`code`),vN(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),ug()(),Ac(380,`blockquote`)(381,`p`),vN(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(383,`a`,27)(384,`code`),vN(385,`PoI18nService`),ug()(),vN(386,` ou do browser.`),ug()()()(),Ac(387,`tr`,15)(388,`td`,16)(389,`div`,17)(390,`span`,18),vN(391,` p-show-manager-accordion`),Kc(392,`br`),ug()()(),Ac(393,`td`,19)(394,`code`,20),vN(395,`boolean`),ug()(),Ac(396,`td`,21)(397,`p`)(398,`code`),vN(399,`false`),ug()()(),Ac(400,`td`,22)(401,`em`)(402,`strong`),vN(403,`(opcional)`),ug()(),Ac(404,`p`),vN(405,`Exibe o Gerenciador de Accordion.`),ug()()(),Ac(406,`tr`,15)(407,`td`,16)(408,`div`,17)(409,`span`,18),vN(410,` p-size`),Kc(411,`br`),ug()()(),Ac(412,`td`,19)(413,`code`,28),vN(414,`string`),ug()(),Ac(415,`td`,21)(416,`p`)(417,`code`),vN(418,`medium`),ug()()(),Ac(419,`td`,22)(420,`em`)(421,`strong`),vN(422,`(opcional)`),ug()(),Ac(423,`p`),vN(424,`Define o tamanho do componente:`),ug(),Ac(425,`ul`)(426,`li`)(427,`code`),vN(428,`small`),ug(),vN(429,`: altura de 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(430,`li`)(431,`code`),vN(432,`medium`),ug(),vN(433,`: altura de 44px.`),ug()(),Ac(434,`blockquote`)(435,`p`),vN(436,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(437,`code`),vN(438,`medium`),ug(),vN(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(440,`a`,29),vN(441,`po-theme`),ug(),vN(442,`.`),ug()()()()(),Ac(443,`h3`,11),vN(444,`Métodos`),ug(),Ac(445,`table`,30)(446,`tr`,15)(447,`th`,31)(448,`div`,17)(449,`h4`)(450,`span`,18),vN(451,` collapseAllItems `),ug()()()()(),Ac(452,`tr`,22)(453,`td`,22)(454,`p`),vN(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Ac(456,`code`),vN(457,`p-show-manager-accordion`),ug(),vN(458,` estiver como `),Ac(459,`code`),vN(460,`true`),ug(),vN(461,`.`),ug()()()(),Kc(462,`br`),Ac(463,`table`,30)(464,`tr`,15)(465,`th`,31)(466,`div`,17)(467,`h4`)(468,`span`,18),vN(469,` expandAllItems `),ug()()()()(),Ac(470,`tr`,22)(471,`td`,22)(472,`p`),vN(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Ac(474,`code`),vN(475,`p-show-manager-accordion`),ug(),vN(476,` estiver como `),Ac(477,`code`),vN(478,`true`),ug(),vN(479,`.`),ug()()()(),Kc(480,`br`),Ac(481,`h3`),vN(482,`Interfaces`),ug(),Ac(483,`h4`,32)(484,`code`,5),vN(485,`PoAccordionLiterals`),ug()(),Ac(486,`div`,2)(487,`p`),vN(488,`Interface para definição das literais usadas no `),Ac(489,`code`),vN(490,`po-accordion`),ug(),vN(491,`.`),ug()(),Ac(492,`h4`,11),vN(493,`Propriedades`),ug(),Ac(494,`table`,12)(495,`tr`,13)(496,`th`,14),vN(497,`Nome`),ug(),Ac(498,`th`,14),vN(499,`Tipo`),ug(),Ac(500,`th`,14),vN(501,`Descrição`),ug()(),Ac(502,`tr`,15)(503,`td`,16)(504,`div`,17)(505,`span`,18),vN(506,` closeAllItems`),Kc(507,`br`),ug()()(),Ac(508,`td`,19)(509,`code`,28),vN(510,`string`),ug()(),Ac(511,`td`,22)(512,`em`)(513,`strong`),vN(514,`(opcional)`),ug()(),Ac(515,`p`),vN(516,`Label do gerenciador de Accordion para colapsar todos os itens`),ug()()(),Ac(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),vN(521,` expandAllItems`),Kc(522,`br`),ug()()(),Ac(523,`td`,19)(524,`code`,28),vN(525,`string`),ug()(),Ac(526,`td`,22)(527,`em`)(528,`strong`),vN(529,`(opcional)`),ug()(),Ac(530,`p`),vN(531,`Label do gerenciador de Accordion para expandir todos os itens.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Pe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-accordion-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-accordion-basic-view`)(6,`sample-po-accordion-labs-view`)(7,`sample-po-accordion-faq-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,le,ce,me,se],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[kL.forChild(Pe),kL]})}return n})();var Ze=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[Ta,he]})}return n})();export{Ze as DocPoAccordionModule};