import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Wt as fve,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,dt as Sbe,ei as Yl,fi as ag,ga as wx,gi as bL,ha as ww,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,vi as bx,x as C4,yi as cN}from"./main-3EWTGE7T.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(Tl(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),cN(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),ag()(),Tl(4,`po-accordion-item`,2)(5,`p`,1),cN(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),ag()()())},dependencies:[fve,C4],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Accordion Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-accordion-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ae],encapsulation:2,changeDetection:1})}return n})();function Se(n,H){if(n&1&&(Tl(0,`po-accordion-item`,2),cN(1),ag()),n&2){let l=H.$implicit,a=H.$index;nw(`p-label`,l.label)(`p-disabled`,l.disabledItem)(`p-label-tag`,l.labelTag)(`p-type-tag`,l.typeTag),jp(),hg(` Accordion Item Content `,a,` `)}}var de=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(l){l.disabledItem=this.disabledItem.includes(`disabled`),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Ax();Tl(0,`po-accordion`,1),Cx(1,Se,2,5,`po-accordion-item`,2,wx),ag(),Gl(3,`po-divider`,3),Tl(4,`div`,4)(5,`po-input`,5),ww(`ngModelChange`,function(c){return Ky(m),uN(i.literals,c)||(i.literals=c),Xy(c)}),ht(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),Tl(6,`po-checkbox-group`,6),ww(`ngModelChange`,function(c){return Ky(m),uN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Xy(c)}),ag(),a0(),ag(),Gl(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Tl(10,`div`,9)(11,`po-radio-group`,10),ww(`ngModelChange`,function(c){return Ky(m),uN(i.typeTag,c)||(i.typeTag=c),Xy(c)}),ag(),a0(),Tl(12,`po-checkbox-group`,11),ww(`ngModelChange`,function(c){return Ky(m),uN(i.disabledItem,c)||(i.disabledItem=c),Xy(c)}),ag(),a0(),ag(),Tl(13,`div`,12)(14,`po-radio-group`,13),ww(`ngModelChange`,function(c){return Ky(m),uN(i.size,c)||(i.size=c),Xy(c)}),ag(),a0(),Tl(15,`po-button`,14),ht(`p-click`,function(){Ky(m);let c=Bx(9);return i.addAccordionItem(c.form.value),Xy(c.form.reset())}),ag()(),Tl(16,`div`,15)(17,`po-button`,16),ht(`p-click`,function(){return i.restore()}),ag()()}if(a&2){let m=Bx(9);nw(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),jp(),bx(i.accordionItems),jp(4),Ew(`ngModel`,i.literals),l0(),jp(),Ew(`ngModel`,i.propertiesAccordion),nw(`p-options`,i.propertiesAccordionOptions),l0(),jp(2),nw(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),jp(3),nw(`p-options`,i.typeTagOptions),Ew(`ngModel`,i.typeTag),l0(),jp(),nw(`p-options`,i.disabledOption),Ew(`ngModel`,i.disabledItem),l0(),jp(2),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0(),jp(),nw(`p-disabled`,m.form.invalid)}},dependencies:[gY,Ak,fve,C4,Zt,Xy$1,Sbe,N4,iU,L0e],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Accordion Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-accordion
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-accordion-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,xe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&Yl(C4,7),a&2){let m;lo(m=uo())&&(i.questionOne=m.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,1)(1,`p`,2),cN(2,`You don't have to be afraid of being a blood donor!`),ag(),Tl(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),cN(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),ag()(),Tl(8,`po-accordion-item`,6)(9,`p`,5),cN(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),ag()(),Tl(11,`po-accordion-item`,7)(12,`p`,5),cN(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),ag()(),Tl(14,`po-accordion-item`,8)(15,`p`,5),cN(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),ag()()(),Tl(17,`p`,9),cN(18,` For more information, see the `),Tl(19,`a`,10),cN(20,`Hemosc FAQ`),ag(),cN(21,`. `),ag()()),a&2&&(jp(3),nw(`p-show-manager-accordion`,!0))},dependencies:[fve,C4,S8e],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Accordion - FAQs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Blood donation FAQs">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-accordion-faq`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:532,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-accordion`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoAccordionComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),ag(),Tl(18,`p`),cN(19,`Para utilizá-lo, é necessário envolver cada item no componente `),Tl(20,`a`,6)(21,`code`),cN(22,`po-accordion-item`),ag()(),cN(23,`,
como no exemplo abaixo:`),ag(),Tl(24,`pre`)(25,`code`),cN(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),ag()(),Tl(27,`p`),cN(28,`e no typescript pode-se utilizar o `),Tl(29,`code`),cN(30,`@ViewChild`),ag(),cN(31,`:`),ag(),Tl(32,`pre`)(33,`code`),cN(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),ag()(),Tl(35,`p`),cN(36,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),ag(),Tl(37,`p`),cN(38,`Caso houver a necessidade de abrir algum dos `),Tl(39,`code`),cN(40,`po-accordion-item`),ag(),cN(41,` via Typescript
acesse a `),Tl(42,`a`,6),cN(43,`documentação do PoAccordionItem`),ag(),cN(44,`.`),ag(),Tl(45,`h4`),cN(46,`Tokens customizáveis`),ag(),Tl(47,`p`),cN(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(49,`blockquote`)(50,`p`),cN(51,`Para maiores informações, acesse o guia `),Tl(52,`a`,7),cN(53,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(54,`.`),ag()(),Tl(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),cN(59,`Propriedade`),ag(),Tl(60,`th`),cN(61,`Descrição`),ag(),Tl(62,`th`),cN(63,`Valor Padrão`),ag()()(),Tl(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),cN(68,`Default Values`),ag()(),Gl(69,`td`)(70,`td`),ag(),Tl(71,`tr`)(72,`td`)(73,`code`),cN(74,`--font-family`),ag()(),Tl(75,`td`),cN(76,`Família tipográfica usada`),ag(),Tl(77,`td`)(78,`code`),cN(79,`var(--font-family-theme)`),ag()()(),Tl(80,`tr`)(81,`td`)(82,`code`),cN(83,`--font-size`),ag()(),Tl(84,`td`),cN(85,`Tamanho da fonte`),ag(),Tl(86,`td`)(87,`code`),cN(88,`var(--font-size-default)`),ag()()(),Tl(89,`tr`)(90,`td`)(91,`code`),cN(92,`--color`),ag()(),Tl(93,`td`),cN(94,`Cor principal do accordion`),ag(),Tl(95,`td`)(96,`code`),cN(97,`var(--color-action-default)`),ag()()(),Tl(98,`tr`)(99,`td`)(100,`code`),cN(101,`--background-color`),ag()(),Tl(102,`td`),cN(103,`Cor de background`),ag(),Tl(104,`td`)(105,`code`),cN(106,`var(--color-neutral-light-00)`),ag()()(),Tl(107,`tr`)(108,`td`)(109,`code`),cN(110,`--font-weight`),ag()(),Tl(111,`td`),cN(112,`Peso da fonte`),ag(),Tl(113,`td`)(114,`code`),cN(115,`var(--font-weight-bold)`),ag()()(),Tl(116,`tr`)(117,`td`)(118,`strong`),cN(119,`Hover`),ag()(),Gl(120,`td`)(121,`td`),ag(),Tl(122,`tr`)(123,`td`)(124,`code`),cN(125,`--color-hover`),ag()(),Tl(126,`td`),cN(127,`Cor principal no estado hover`),ag(),Tl(128,`td`)(129,`code`),cN(130,`var(--color-action-hover)`),ag()()(),Tl(131,`tr`)(132,`td`)(133,`code`),cN(134,`--background-hover`),ag()(),Tl(135,`td`),cN(136,`Cor de background no estado hover`),ag(),Tl(137,`td`)(138,`code`),cN(139,`var(--color-brand-01-lightest)`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`strong`),cN(143,`Focused`),ag()(),Gl(144,`td`)(145,`td`),ag(),Tl(146,`tr`)(147,`td`)(148,`code`),cN(149,`--color-focused`),ag()(),Tl(150,`td`),cN(151,`Cor principal no estado de focus`),ag(),Tl(152,`td`)(153,`code`),cN(154,`var(--color-action-focus)`),ag()()(),Tl(155,`tr`)(156,`td`)(157,`code`),cN(158,`--outline-color-focused`),ag(),cN(159,` \xA0`),ag(),Tl(160,`td`),cN(161,`Cor do outline do estado de focus`),ag(),Tl(162,`td`)(163,`code`),cN(164,`var(--color-action-focus)`),ag()()(),Tl(165,`tr`)(166,`td`)(167,`strong`),cN(168,`Disabled`),ag()(),Gl(169,`td`)(170,`td`),ag(),Tl(171,`tr`)(172,`td`)(173,`code`),cN(174,`--color-disabled`),ag()(),Tl(175,`td`),cN(176,`Cor principal no estado disabled`),ag(),Tl(177,`td`)(178,`code`),cN(179,`var(--color-neutral-mid-60)`),ag()()(),Tl(180,`tr`)(181,`td`)(182,`code`),cN(183,`--background-disabled`),ag(),cN(184,` \xA0`),ag(),Tl(185,`td`),cN(186,`Cor de background no estado disabled`),ag(),Tl(187,`td`)(188,`code`),cN(189,`var(--color-neutral-light-10)`),ag()()(),Tl(190,`tr`)(191,`td`)(192,`strong`),cN(193,`po-accordion-manager`),ag()(),Gl(194,`td`)(195,`td`),ag(),Tl(196,`tr`)(197,`td`)(198,`code`),cN(199,`--background-color`),ag()(),Tl(200,`td`),cN(201,`Cor de background`),ag(),Tl(202,`td`)(203,`code`),cN(204,`var(--color-neutral-mid-60)`),ag()()(),Tl(205,`tr`)(206,`td`)(207,`code`),cN(208,`--color`),ag()(),Tl(209,`td`),cN(210,`Cor principal do accordion manager`),ag(),Tl(211,`td`)(212,`code`),cN(213,`var(--color-neutral-light-10)`),ag()()(),Tl(214,`tr`)(215,`td`)(216,`code`),cN(217,`--font-family`),ag()(),Tl(218,`td`),cN(219,`Família tipográfica usada`),ag(),Tl(220,`td`)(221,`code`),cN(222,`var(--color-neutral-light-10)`),ag()()(),Tl(223,`tr`)(224,`td`)(225,`code`),cN(226,`--font-size`),ag()(),Tl(227,`td`),cN(228,`Tamanho da fonte`),ag(),Tl(229,`td`)(230,`code`),cN(231,`var(--color-neutral-light-10)`),ag()()(),Tl(232,`tr`)(233,`td`)(234,`code`),cN(235,`--font-weight`),ag()(),Tl(236,`td`),cN(237,`Peso da fonte`),ag(),Tl(238,`td`)(239,`code`),cN(240,`var(--color-neutral-light-10)`),ag()()(),Tl(241,`tr`)(242,`td`)(243,`strong`),cN(244,`Pressed`),ag()(),Gl(245,`td`)(246,`td`),ag(),Tl(247,`tr`)(248,`td`)(249,`code`),cN(250,`--background-pressed`),ag(),cN(251,` \xA0`),ag(),Tl(252,`td`),cN(253,`Cor de background no estado de pressionado\xA0`),ag(),Tl(254,`td`)(255,`code`),cN(256,`var(--color-brand-01-lighter)`),ag()()(),Tl(257,`tr`)(258,`td`)(259,`code`),cN(260,`--color-pressed`),ag()(),Tl(261,`td`),cN(262,`Cor principal no estado de pressionado`),ag(),Tl(263,`td`)(264,`code`),cN(265,`var(--color-action-pressed)`),ag()()()()()(),Tl(266,`div`,8)(267,`h4`,9),cN(268,`Seletor`),ag(),Tl(269,`pre`,10),cN(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),ag()(),Tl(271,`h4`,11),cN(272,`Propriedades`),ag(),Tl(273,`table`,12)(274,`tr`,13)(275,`th`,14),cN(276,`Nome`),ag(),Tl(277,`th`,14),cN(278,`Tipo`),ag(),Tl(279,`th`,14),cN(280,`Padrão`),ag(),Tl(281,`th`,14),cN(282,`Descrição`),ag()(),Tl(283,`tr`,15)(284,`td`,16)(285,`div`,17)(286,`span`,18),cN(287,` p-allow-expand-all-items`),Gl(288,`br`),ag()()(),Tl(289,`td`,19)(290,`code`,20),cN(291,`boolean`),ag()(),Tl(292,`td`,21)(293,`p`)(294,`code`),cN(295,`false`),ag()()(),Tl(296,`td`,22)(297,`em`)(298,`strong`),cN(299,`(opcional)`),ag()(),Tl(300,`p`),cN(301,`Permite expandir mais de um `),Tl(302,`code`),cN(303,`<po-accordion-item></po-accordion-item>`),ag(),cN(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Tl(305,`code`),cN(306,`p-show-manager-accordion`),ag(),cN(307,` esteja como `),Tl(308,`code`),cN(309,`true`),ag(),cN(310,`.`),ag()()(),Tl(311,`tr`,15)(312,`td`,16)(313,`div`,23)(314,`span`,24),cN(315,` (p-collapse-all)`),Gl(316,`br`),ag()()(),Tl(317,`td`,19)(318,`code`,25),cN(319,`EventEmitter`),ag()(),Tl(320,`td`,21),cN(321,`-`),ag(),Tl(322,`td`,22)(323,`em`)(324,`strong`),cN(325,`(opcional)`),ag()(),Tl(326,`p`),cN(327,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),ag()()(),Tl(328,`tr`,15)(329,`td`,16)(330,`div`,23)(331,`span`,24),cN(332,` (p-expand-all)`),Gl(333,`br`),ag()()(),Tl(334,`td`,19)(335,`code`,25),cN(336,`EventEmitter`),ag()(),Tl(337,`td`,21),cN(338,`-`),ag(),Tl(339,`td`,22)(340,`em`)(341,`strong`),cN(342,`(opcional)`),ag()(),Tl(343,`p`),cN(344,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),ag()()(),Tl(345,`tr`,15)(346,`td`,16)(347,`div`,17)(348,`span`,18),cN(349,` p-literals`),Gl(350,`br`),ag()()(),Tl(351,`td`,19)(352,`code`,26),cN(353,`PoAccordionLiterals`),ag()(),Tl(354,`td`,21),cN(355,`-`),ag(),Tl(356,`td`,22)(357,`em`)(358,`strong`),cN(359,`(opcional)`),ag()(),Tl(360,`p`),cN(361,`Objeto com as literais usadas no `),Tl(362,`code`),cN(363,`po-accordion`),ag(),cN(364,`.`),ag(),Tl(365,`p`),cN(366,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(367,`pre`)(368,`code`),cN(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),ag()(),Tl(370,`p`),cN(371,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(372,`pre`)(373,`code`),cN(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),ag()(),Tl(375,`p`),cN(376,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(377,`pre`)(378,`code`),cN(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),ag()(),Tl(380,`blockquote`)(381,`p`),cN(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(383,`a`,27)(384,`code`),cN(385,`PoI18nService`),ag()(),cN(386,` ou do browser.`),ag()()()(),Tl(387,`tr`,15)(388,`td`,16)(389,`div`,17)(390,`span`,18),cN(391,` p-show-manager-accordion`),Gl(392,`br`),ag()()(),Tl(393,`td`,19)(394,`code`,20),cN(395,`boolean`),ag()(),Tl(396,`td`,21)(397,`p`)(398,`code`),cN(399,`false`),ag()()(),Tl(400,`td`,22)(401,`em`)(402,`strong`),cN(403,`(opcional)`),ag()(),Tl(404,`p`),cN(405,`Exibe o Gerenciador de Accordion.`),ag()()(),Tl(406,`tr`,15)(407,`td`,16)(408,`div`,17)(409,`span`,18),cN(410,` p-size`),Gl(411,`br`),ag()()(),Tl(412,`td`,19)(413,`code`,28),cN(414,`string`),ag()(),Tl(415,`td`,21)(416,`p`)(417,`code`),cN(418,`medium`),ag()()(),Tl(419,`td`,22)(420,`em`)(421,`strong`),cN(422,`(opcional)`),ag()(),Tl(423,`p`),cN(424,`Define o tamanho do componente:`),ag(),Tl(425,`ul`)(426,`li`)(427,`code`),cN(428,`small`),ag(),cN(429,`: altura de 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(430,`li`)(431,`code`),cN(432,`medium`),ag(),cN(433,`: altura de 44px.`),ag()(),Tl(434,`blockquote`)(435,`p`),cN(436,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(437,`code`),cN(438,`medium`),ag(),cN(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(440,`a`,29),cN(441,`po-theme`),ag(),cN(442,`.`),ag()()()()(),Tl(443,`h3`,11),cN(444,`Métodos`),ag(),Tl(445,`table`,30)(446,`tr`,15)(447,`th`,31)(448,`div`,17)(449,`h4`)(450,`span`,18),cN(451,` collapseAllItems `),ag()()()()(),Tl(452,`tr`,22)(453,`td`,22)(454,`p`),cN(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Tl(456,`code`),cN(457,`p-show-manager-accordion`),ag(),cN(458,` estiver como `),Tl(459,`code`),cN(460,`true`),ag(),cN(461,`.`),ag()()()(),Gl(462,`br`),Tl(463,`table`,30)(464,`tr`,15)(465,`th`,31)(466,`div`,17)(467,`h4`)(468,`span`,18),cN(469,` expandAllItems `),ag()()()()(),Tl(470,`tr`,22)(471,`td`,22)(472,`p`),cN(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Tl(474,`code`),cN(475,`p-show-manager-accordion`),ag(),cN(476,` estiver como `),Tl(477,`code`),cN(478,`true`),ag(),cN(479,`.`),ag()()()(),Gl(480,`br`),Tl(481,`h3`),cN(482,`Interfaces`),ag(),Tl(483,`h4`,32)(484,`code`,5),cN(485,`PoAccordionLiterals`),ag()(),Tl(486,`div`,2)(487,`p`),cN(488,`Interface para definição das literais usadas no `),Tl(489,`code`),cN(490,`po-accordion`),ag(),cN(491,`.`),ag()(),Tl(492,`h4`,11),cN(493,`Propriedades`),ag(),Tl(494,`table`,12)(495,`tr`,13)(496,`th`,14),cN(497,`Nome`),ag(),Tl(498,`th`,14),cN(499,`Tipo`),ag(),Tl(500,`th`,14),cN(501,`Descrição`),ag()(),Tl(502,`tr`,15)(503,`td`,16)(504,`div`,17)(505,`span`,18),cN(506,` closeAllItems`),Gl(507,`br`),ag()()(),Tl(508,`td`,19)(509,`code`,28),cN(510,`string`),ag()(),Tl(511,`td`,22)(512,`em`)(513,`strong`),cN(514,`(opcional)`),ag()(),Tl(515,`p`),cN(516,`Label do gerenciador de Accordion para colapsar todos os itens`),ag()()(),Tl(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),cN(521,` expandAllItems`),Gl(522,`br`),ag()()(),Tl(523,`td`,19)(524,`code`,28),cN(525,`string`),ag()(),Tl(526,`td`,22)(527,`em`)(528,`strong`),cN(529,`(opcional)`),ag()(),Tl(530,`p`),cN(531,`Label do gerenciador de Accordion para expandir todos os itens.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Pe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-accordion-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-accordion-basic-view`)(6,`sample-po-accordion-labs-view`)(7,`sample-po-accordion-faq-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,le,ce,me,se],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[bL.forChild(Pe),bL]})}return n})();var Ze=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[ar,he]})}return n})();export{Ze as DocPoAccordionModule};