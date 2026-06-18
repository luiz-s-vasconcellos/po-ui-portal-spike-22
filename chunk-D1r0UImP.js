import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,a_ as lpe,a$ as r3,H as Sl,J as Jx,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,M as Wl,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aF as K9,aG as Dk,b0 as Qt,b1 as mv,b2 as eme,c4 as x3,b4 as F3,c8 as Pde,aB as Ex,aQ as px,aR as hx,aM as Ew,aN as JA,bd as xx,aS as gx,aO as Dw,aP as t0,a3 as pNe,av as ql,aw as lo,ax as uo,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(Sl(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),Jx(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),sg()(),Sl(4,"po-accordion-item",2)(5,"p",1),Jx(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),sg()()());},dependencies:[lpe,r3],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Accordion Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return n})();function Se(n,H){if(n&1&&(Sl(0,"po-accordion-item",2),Jx(1),sg()),n&2){let l=H.$implicit,a=H.$index;tw("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Vp(),fg(" Accordion Item Content ",a," ");}}var de=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Ex();Sl(0,"po-accordion",1),px(1,Se,2,5,"po-accordion-item",2,hx),sg(),Wl(3,"po-divider",3),Sl(4,"div",4)(5,"po-input",5),Ew("ngModelChange",function(c){return Xy(m),tN(i.literals,c)||(i.literals=c),Qy(c)}),ht("p-change",function(){return i.changeLiterals()}),sg(),JA(),Sl(6,"po-checkbox-group",6),Ew("ngModelChange",function(c){return Xy(m),tN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Qy(c)}),sg(),JA(),sg(),Wl(7,"po-divider",7)(8,"po-dynamic-form",8,0),Sl(10,"div",9)(11,"po-radio-group",10),Ew("ngModelChange",function(c){return Xy(m),tN(i.typeTag,c)||(i.typeTag=c),Qy(c)}),sg(),JA(),Sl(12,"po-checkbox-group",11),Ew("ngModelChange",function(c){return Xy(m),tN(i.disabledItem,c)||(i.disabledItem=c),Qy(c)}),sg(),JA(),sg(),Sl(13,"div",12)(14,"po-radio-group",13),Ew("ngModelChange",function(c){return Xy(m),tN(i.size,c)||(i.size=c),Qy(c)}),sg(),JA(),Sl(15,"po-button",14),ht("p-click",function(){Xy(m);let c=xx(9);return i.addAccordionItem(c.form.value),Qy(c.form.reset())}),sg()(),Sl(16,"div",15)(17,"po-button",16),ht("p-click",function(){return i.restore()}),sg()();}if(a&2){let m=xx(9);tw("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Vp(),gx(i.accordionItems),Vp(4),Dw("ngModel",i.literals),t0(),Vp(),Dw("ngModel",i.propertiesAccordion),tw("p-options",i.propertiesAccordionOptions),t0(),Vp(2),tw("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Vp(3),tw("p-options",i.typeTagOptions),Dw("ngModel",i.typeTag),t0(),Vp(),tw("p-options",i.disabledOption),Dw("ngModel",i.disabledItem),t0(),Vp(2),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0(),Vp(),tw("p-disabled",m.form.invalid);}},dependencies:[K9,Dk,lpe,r3,Qt,mv,eme,x3,F3,Pde],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Accordion Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-accordion
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,xe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&ql(r3,7),a&2){let m;lo(m=uo())&&(i.questionOne=m.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",1)(1,"p",2),Jx(2,"You don't have to be afraid of being a blood donor!"),sg(),Sl(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),Jx(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),sg()(),Sl(8,"po-accordion-item",6)(9,"p",5),Jx(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),sg()(),Sl(11,"po-accordion-item",7)(12,"p",5),Jx(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),sg()(),Sl(14,"po-accordion-item",8)(15,"p",5),Jx(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),sg()()(),Sl(17,"p",9),Jx(18," For more information, see the "),Sl(19,"a",10),Jx(20,"Hemosc FAQ"),sg(),Jx(21,". "),sg()()),a&2&&(Vp(3),tw("p-show-manager-accordion",true));},dependencies:[lpe,r3,pNe],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Accordion - FAQs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Blood donation FAQs">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-faq"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-accordion"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoAccordionComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),sg(),Sl(18,"p"),Jx(19,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),Sl(20,"a",6)(21,"code"),Jx(22,"po-accordion-item"),sg()(),Jx(23,`,
como no exemplo abaixo:`),sg(),Sl(24,"pre")(25,"code"),Jx(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),sg()(),Sl(27,"p"),Jx(28,"e no typescript pode-se utilizar o "),Sl(29,"code"),Jx(30,"@ViewChild"),sg(),Jx(31,":"),sg(),Sl(32,"pre")(33,"code"),Jx(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),sg()(),Sl(35,"p"),Jx(36,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),sg(),Sl(37,"p"),Jx(38,"Caso houver a necessidade de abrir algum dos "),Sl(39,"code"),Jx(40,"po-accordion-item"),sg(),Jx(41,` via Typescript
acesse a `),Sl(42,"a",6),Jx(43,"documenta\xE7\xE3o do PoAccordionItem"),sg(),Jx(44,"."),sg(),Sl(45,"h4"),Jx(46,"Tokens customiz\xE1veis"),sg(),Sl(47,"p"),Jx(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(49,"blockquote")(50,"p"),Jx(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(52,"a",7),Jx(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(54,"."),sg()(),Sl(55,"table")(56,"thead")(57,"tr")(58,"th"),Jx(59,"Propriedade"),sg(),Sl(60,"th"),Jx(61,"Descri\xE7\xE3o"),sg(),Sl(62,"th"),Jx(63,"Valor Padr\xE3o"),sg()()(),Sl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),Jx(68,"Default Values"),sg()(),Wl(69,"td")(70,"td"),sg(),Sl(71,"tr")(72,"td")(73,"code"),Jx(74,"--font-family"),sg()(),Sl(75,"td"),Jx(76,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(77,"td")(78,"code"),Jx(79,"var(--font-family-theme)"),sg()()(),Sl(80,"tr")(81,"td")(82,"code"),Jx(83,"--font-size"),sg()(),Sl(84,"td"),Jx(85,"Tamanho da fonte"),sg(),Sl(86,"td")(87,"code"),Jx(88,"var(--font-size-default)"),sg()()(),Sl(89,"tr")(90,"td")(91,"code"),Jx(92,"--color"),sg()(),Sl(93,"td"),Jx(94,"Cor principal do accordion"),sg(),Sl(95,"td")(96,"code"),Jx(97,"var(--color-action-default)"),sg()()(),Sl(98,"tr")(99,"td")(100,"code"),Jx(101,"--background-color"),sg()(),Sl(102,"td"),Jx(103,"Cor de background"),sg(),Sl(104,"td")(105,"code"),Jx(106,"var(--color-neutral-light-00)"),sg()()(),Sl(107,"tr")(108,"td")(109,"code"),Jx(110,"--font-weight"),sg()(),Sl(111,"td"),Jx(112,"Peso da fonte"),sg(),Sl(113,"td")(114,"code"),Jx(115,"var(--font-weight-bold)"),sg()()(),Sl(116,"tr")(117,"td")(118,"strong"),Jx(119,"Hover"),sg()(),Wl(120,"td")(121,"td"),sg(),Sl(122,"tr")(123,"td")(124,"code"),Jx(125,"--color-hover"),sg()(),Sl(126,"td"),Jx(127,"Cor principal no estado hover"),sg(),Sl(128,"td")(129,"code"),Jx(130,"var(--color-action-hover)"),sg()()(),Sl(131,"tr")(132,"td")(133,"code"),Jx(134,"--background-hover"),sg()(),Sl(135,"td"),Jx(136,"Cor de background no estado hover"),sg(),Sl(137,"td")(138,"code"),Jx(139,"var(--color-brand-01-lightest)"),sg()()(),Sl(140,"tr")(141,"td")(142,"strong"),Jx(143,"Focused"),sg()(),Wl(144,"td")(145,"td"),sg(),Sl(146,"tr")(147,"td")(148,"code"),Jx(149,"--color-focused"),sg()(),Sl(150,"td"),Jx(151,"Cor principal no estado de focus"),sg(),Sl(152,"td")(153,"code"),Jx(154,"var(--color-action-focus)"),sg()()(),Sl(155,"tr")(156,"td")(157,"code"),Jx(158,"--outline-color-focused"),sg(),Jx(159," \xA0"),sg(),Sl(160,"td"),Jx(161,"Cor do outline do estado de focus"),sg(),Sl(162,"td")(163,"code"),Jx(164,"var(--color-action-focus)"),sg()()(),Sl(165,"tr")(166,"td")(167,"strong"),Jx(168,"Disabled"),sg()(),Wl(169,"td")(170,"td"),sg(),Sl(171,"tr")(172,"td")(173,"code"),Jx(174,"--color-disabled"),sg()(),Sl(175,"td"),Jx(176,"Cor principal no estado disabled"),sg(),Sl(177,"td")(178,"code"),Jx(179,"var(--color-neutral-mid-60)"),sg()()(),Sl(180,"tr")(181,"td")(182,"code"),Jx(183,"--background-disabled"),sg(),Jx(184," \xA0"),sg(),Sl(185,"td"),Jx(186,"Cor de background no estado disabled"),sg(),Sl(187,"td")(188,"code"),Jx(189,"var(--color-neutral-light-10)"),sg()()(),Sl(190,"tr")(191,"td")(192,"strong"),Jx(193,"po-accordion-manager"),sg()(),Wl(194,"td")(195,"td"),sg(),Sl(196,"tr")(197,"td")(198,"code"),Jx(199,"--background-color"),sg()(),Sl(200,"td"),Jx(201,"Cor de background"),sg(),Sl(202,"td")(203,"code"),Jx(204,"var(--color-neutral-mid-60)"),sg()()(),Sl(205,"tr")(206,"td")(207,"code"),Jx(208,"--color"),sg()(),Sl(209,"td"),Jx(210,"Cor principal do accordion manager"),sg(),Sl(211,"td")(212,"code"),Jx(213,"var(--color-neutral-light-10)"),sg()()(),Sl(214,"tr")(215,"td")(216,"code"),Jx(217,"--font-family"),sg()(),Sl(218,"td"),Jx(219,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(220,"td")(221,"code"),Jx(222,"var(--color-neutral-light-10)"),sg()()(),Sl(223,"tr")(224,"td")(225,"code"),Jx(226,"--font-size"),sg()(),Sl(227,"td"),Jx(228,"Tamanho da fonte"),sg(),Sl(229,"td")(230,"code"),Jx(231,"var(--color-neutral-light-10)"),sg()()(),Sl(232,"tr")(233,"td")(234,"code"),Jx(235,"--font-weight"),sg()(),Sl(236,"td"),Jx(237,"Peso da fonte"),sg(),Sl(238,"td")(239,"code"),Jx(240,"var(--color-neutral-light-10)"),sg()()(),Sl(241,"tr")(242,"td")(243,"strong"),Jx(244,"Pressed"),sg()(),Wl(245,"td")(246,"td"),sg(),Sl(247,"tr")(248,"td")(249,"code"),Jx(250,"--background-pressed"),sg(),Jx(251," \xA0"),sg(),Sl(252,"td"),Jx(253,"Cor de background no estado de pressionado\xA0"),sg(),Sl(254,"td")(255,"code"),Jx(256,"var(--color-brand-01-lighter)"),sg()()(),Sl(257,"tr")(258,"td")(259,"code"),Jx(260,"--color-pressed"),sg()(),Sl(261,"td"),Jx(262,"Cor principal no estado de pressionado"),sg(),Sl(263,"td")(264,"code"),Jx(265,"var(--color-action-pressed)"),sg()()()()()(),Sl(266,"div",8)(267,"h4",9),Jx(268,"Seletor"),sg(),Sl(269,"pre",10),Jx(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),sg()(),Sl(271,"h4",11),Jx(272,"Propriedades"),sg(),Sl(273,"table",12)(274,"tr",13)(275,"th",14),Jx(276,"Nome"),sg(),Sl(277,"th",14),Jx(278,"Tipo"),sg(),Sl(279,"th",14),Jx(280,"Padr\xE3o"),sg(),Sl(281,"th",14),Jx(282,"Descri\xE7\xE3o"),sg()(),Sl(283,"tr",15)(284,"td",16)(285,"div",17)(286,"span",18),Jx(287," p-allow-expand-all-items"),Wl(288,"br"),sg()()(),Sl(289,"td",19)(290,"code",20),Jx(291,"boolean"),sg()(),Sl(292,"td",21)(293,"p")(294,"code"),Jx(295,"false"),sg()()(),Sl(296,"td",22)(297,"em")(298,"strong"),Jx(299,"(opcional)"),sg()(),Sl(300,"p"),Jx(301,"Permite expandir mais de um "),Sl(302,"code"),Jx(303,"<po-accordion-item></po-accordion-item>"),sg(),Jx(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Sl(305,"code"),Jx(306,"p-show-manager-accordion"),sg(),Jx(307," esteja como "),Sl(308,"code"),Jx(309,"true"),sg(),Jx(310,"."),sg()()(),Sl(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),Jx(315," (p-collapse-all)"),Wl(316,"br"),sg()()(),Sl(317,"td",19)(318,"code",25),Jx(319,"EventEmitter"),sg()(),Sl(320,"td",21),Jx(321,"-"),sg(),Sl(322,"td",22)(323,"em")(324,"strong"),Jx(325,"(opcional)"),sg()(),Sl(326,"p"),Jx(327,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),sg()()(),Sl(328,"tr",15)(329,"td",16)(330,"div",23)(331,"span",24),Jx(332," (p-expand-all)"),Wl(333,"br"),sg()()(),Sl(334,"td",19)(335,"code",25),Jx(336,"EventEmitter"),sg()(),Sl(337,"td",21),Jx(338,"-"),sg(),Sl(339,"td",22)(340,"em")(341,"strong"),Jx(342,"(opcional)"),sg()(),Sl(343,"p"),Jx(344,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),sg()()(),Sl(345,"tr",15)(346,"td",16)(347,"div",17)(348,"span",18),Jx(349," p-literals"),Wl(350,"br"),sg()()(),Sl(351,"td",19)(352,"code",26),Jx(353,"PoAccordionLiterals"),sg()(),Sl(354,"td",21),Jx(355,"-"),sg(),Sl(356,"td",22)(357,"em")(358,"strong"),Jx(359,"(opcional)"),sg()(),Sl(360,"p"),Jx(361,"Objeto com as literais usadas no "),Sl(362,"code"),Jx(363,"po-accordion"),sg(),Jx(364,"."),sg(),Sl(365,"p"),Jx(366,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(367,"pre")(368,"code"),Jx(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),sg()(),Sl(370,"p"),Jx(371,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(372,"pre")(373,"code"),Jx(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),sg()(),Sl(375,"p"),Jx(376,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(377,"pre")(378,"code"),Jx(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),sg()(),Sl(380,"blockquote")(381,"p"),Jx(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(383,"a",27)(384,"code"),Jx(385,"PoI18nService"),sg()(),Jx(386," ou do browser."),sg()()()(),Sl(387,"tr",15)(388,"td",16)(389,"div",17)(390,"span",18),Jx(391," p-show-manager-accordion"),Wl(392,"br"),sg()()(),Sl(393,"td",19)(394,"code",20),Jx(395,"boolean"),sg()(),Sl(396,"td",21)(397,"p")(398,"code"),Jx(399,"false"),sg()()(),Sl(400,"td",22)(401,"em")(402,"strong"),Jx(403,"(opcional)"),sg()(),Sl(404,"p"),Jx(405,"Exibe o Gerenciador de Accordion."),sg()()(),Sl(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),Jx(410," p-size"),Wl(411,"br"),sg()()(),Sl(412,"td",19)(413,"code",28),Jx(414,"string"),sg()(),Sl(415,"td",21)(416,"p")(417,"code"),Jx(418,"medium"),sg()()(),Sl(419,"td",22)(420,"em")(421,"strong"),Jx(422,"(opcional)"),sg()(),Sl(423,"p"),Jx(424,"Define o tamanho do componente:"),sg(),Sl(425,"ul")(426,"li")(427,"code"),Jx(428,"small"),sg(),Jx(429,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(430,"li")(431,"code"),Jx(432,"medium"),sg(),Jx(433,": altura de 44px."),sg()(),Sl(434,"blockquote")(435,"p"),Jx(436,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(437,"code"),Jx(438,"medium"),sg(),Jx(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(440,"a",29),Jx(441,"po-theme"),sg(),Jx(442,"."),sg()()()()(),Sl(443,"h3",11),Jx(444,"M\xE9todos"),sg(),Sl(445,"table",30)(446,"tr",15)(447,"th",31)(448,"div",17)(449,"h4")(450,"span",18),Jx(451," collapseAllItems "),sg()()()()(),Sl(452,"tr",22)(453,"td",22)(454,"p"),Jx(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Sl(456,"code"),Jx(457,"p-show-manager-accordion"),sg(),Jx(458," estiver como "),Sl(459,"code"),Jx(460,"true"),sg(),Jx(461,"."),sg()()()(),Wl(462,"br"),Sl(463,"table",30)(464,"tr",15)(465,"th",31)(466,"div",17)(467,"h4")(468,"span",18),Jx(469," expandAllItems "),sg()()()()(),Sl(470,"tr",22)(471,"td",22)(472,"p"),Jx(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Sl(474,"code"),Jx(475,"p-show-manager-accordion"),sg(),Jx(476," estiver como "),Sl(477,"code"),Jx(478,"true"),sg(),Jx(479,"."),sg()()()(),Wl(480,"br"),Sl(481,"h3"),Jx(482,"Interfaces"),sg(),Sl(483,"h4",32)(484,"code",5),Jx(485,"PoAccordionLiterals"),sg()(),Sl(486,"div",2)(487,"p"),Jx(488,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(489,"code"),Jx(490,"po-accordion"),sg(),Jx(491,"."),sg()(),Sl(492,"h4",11),Jx(493,"Propriedades"),sg(),Sl(494,"table",12)(495,"tr",13)(496,"th",14),Jx(497,"Nome"),sg(),Sl(498,"th",14),Jx(499,"Tipo"),sg(),Sl(500,"th",14),Jx(501,"Descri\xE7\xE3o"),sg()(),Sl(502,"tr",15)(503,"td",16)(504,"div",17)(505,"span",18),Jx(506," closeAllItems"),Wl(507,"br"),sg()()(),Sl(508,"td",19)(509,"code",28),Jx(510,"string"),sg()(),Sl(511,"td",22)(512,"em")(513,"strong"),Jx(514,"(opcional)"),sg()(),Sl(515,"p"),Jx(516,"Label do gerenciador de Accordion para colapsar todos os itens"),sg()()(),Sl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),Jx(521," expandAllItems"),Wl(522,"br"),sg()()(),Sl(523,"td",19)(524,"code",28),Jx(525,"string"),sg()(),Sl(526,"td",22)(527,"em")(528,"strong"),Jx(529,"(opcional)"),sg()(),Sl(530,"p"),Jx(531,"Label do gerenciador de Accordion para expandir todos os itens."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-accordion-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,le,ce,me,se],encapsulation:2})}return n})();var Pe=[{path:"",component:ue}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[pL.forChild(Pe),pL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,he]})}return n})();export{Ze as DocPoAccordionModule};