import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,a_ as ape,a$ as n3,T as Tl,z as tN,L as sg,an as TO,aH as Ga,b8 as Hme,b9 as Gme,J as Gl,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aF as J9,aG as Ck,b0 as Qt,b1 as mv,b2 as Zhe,c4 as C3,b4 as O3,c8 as Sde,aB as Cx,aQ as mx,aR as gx,aM as Ew,aN as t0,bd as Ox,aS as vx,aO as Dw,aP as r0,a3 as aNe,av as Yl,aw as uo,ax as fo,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(Tl(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),tN(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),sg()(),Tl(4,"po-accordion-item",2)(5,"p",1),tN(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),sg()()());},dependencies:[ape,n3],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Accordion Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-accordion-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ae],encapsulation:2})}return n})();function Se(n,H){if(n&1&&(Tl(0,"po-accordion-item",2),tN(1),sg()),n&2){let l=H.$implicit,a=H.$index;tw("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Vp(),fg(" Accordion Item Content ",a," ");}}var de=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Cx();Tl(0,"po-accordion",1),mx(1,Se,2,5,"po-accordion-item",2,gx),sg(),Gl(3,"po-divider",3),Tl(4,"div",4)(5,"po-input",5),Ew("ngModelChange",function(c){return Ky(m),rN(i.literals,c)||(i.literals=c),Xy(c)}),ht("p-change",function(){return i.changeLiterals()}),sg(),t0(),Tl(6,"po-checkbox-group",6),Ew("ngModelChange",function(c){return Ky(m),rN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Xy(c)}),sg(),t0(),sg(),Gl(7,"po-divider",7)(8,"po-dynamic-form",8,0),Tl(10,"div",9)(11,"po-radio-group",10),Ew("ngModelChange",function(c){return Ky(m),rN(i.typeTag,c)||(i.typeTag=c),Xy(c)}),sg(),t0(),Tl(12,"po-checkbox-group",11),Ew("ngModelChange",function(c){return Ky(m),rN(i.disabledItem,c)||(i.disabledItem=c),Xy(c)}),sg(),t0(),sg(),Tl(13,"div",12)(14,"po-radio-group",13),Ew("ngModelChange",function(c){return Ky(m),rN(i.size,c)||(i.size=c),Xy(c)}),sg(),t0(),Tl(15,"po-button",14),ht("p-click",function(){Ky(m);let c=Ox(9);return i.addAccordionItem(c.form.value),Xy(c.form.reset())}),sg()(),Tl(16,"div",15)(17,"po-button",16),ht("p-click",function(){return i.restore()}),sg()();}if(a&2){let m=Ox(9);tw("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Vp(),vx(i.accordionItems),Vp(4),Dw("ngModel",i.literals),r0(),Vp(),Dw("ngModel",i.propertiesAccordion),tw("p-options",i.propertiesAccordionOptions),r0(),Vp(2),tw("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Vp(3),tw("p-options",i.typeTagOptions),Dw("ngModel",i.typeTag),r0(),Vp(),tw("p-options",i.disabledOption),Dw("ngModel",i.disabledItem),r0(),Vp(2),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0(),Vp(),tw("p-disabled",m.form.invalid);}},dependencies:[J9,Ck,ape,n3,Qt,mv,Zhe,C3,O3,Sde],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Accordion Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-accordion
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-accordion-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,xe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,de],encapsulation:2})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&Yl(n3,7),a&2){let m;uo(m=fo())&&(i.questionOne=m.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",1)(1,"p",2),tN(2,"You don't have to be afraid of being a blood donor!"),sg(),Tl(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),tN(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),sg()(),Tl(8,"po-accordion-item",6)(9,"p",5),tN(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),sg()(),Tl(11,"po-accordion-item",7)(12,"p",5),tN(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),sg()(),Tl(14,"po-accordion-item",8)(15,"p",5),tN(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),sg()()(),Tl(17,"p",9),tN(18," For more information, see the "),Tl(19,"a",10),tN(20,"Hemosc FAQ"),sg(),tN(21,". "),sg()()),a&2&&(Vp(3),tw("p-show-manager-accordion",true));},dependencies:[ape,n3,aNe],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Accordion - FAQs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Blood donation FAQs">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-accordion-faq"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,pe],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente "),Tl(7,"code"),tN(8,"po-accordion"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoAccordionComponent"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),sg(),Tl(18,"p"),tN(19,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),Tl(20,"a",6)(21,"code"),tN(22,"po-accordion-item"),sg()(),tN(23,`,
como no exemplo abaixo:`),sg(),Tl(24,"pre")(25,"code"),tN(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),sg()(),Tl(27,"p"),tN(28,"e no typescript pode-se utilizar o "),Tl(29,"code"),tN(30,"@ViewChild"),sg(),tN(31,":"),sg(),Tl(32,"pre")(33,"code"),tN(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),sg()(),Tl(35,"p"),tN(36,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),sg(),Tl(37,"p"),tN(38,"Caso houver a necessidade de abrir algum dos "),Tl(39,"code"),tN(40,"po-accordion-item"),sg(),tN(41,` via Typescript
acesse a `),Tl(42,"a",6),tN(43,"documenta\xE7\xE3o do PoAccordionItem"),sg(),tN(44,"."),sg(),Tl(45,"h4"),tN(46,"Tokens customiz\xE1veis"),sg(),Tl(47,"p"),tN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(49,"blockquote")(50,"p"),tN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(52,"a",7),tN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(54,"."),sg()(),Tl(55,"table")(56,"thead")(57,"tr")(58,"th"),tN(59,"Propriedade"),sg(),Tl(60,"th"),tN(61,"Descri\xE7\xE3o"),sg(),Tl(62,"th"),tN(63,"Valor Padr\xE3o"),sg()()(),Tl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),tN(68,"Default Values"),sg()(),Gl(69,"td")(70,"td"),sg(),Tl(71,"tr")(72,"td")(73,"code"),tN(74,"--font-family"),sg()(),Tl(75,"td"),tN(76,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(77,"td")(78,"code"),tN(79,"var(--font-family-theme)"),sg()()(),Tl(80,"tr")(81,"td")(82,"code"),tN(83,"--font-size"),sg()(),Tl(84,"td"),tN(85,"Tamanho da fonte"),sg(),Tl(86,"td")(87,"code"),tN(88,"var(--font-size-default)"),sg()()(),Tl(89,"tr")(90,"td")(91,"code"),tN(92,"--color"),sg()(),Tl(93,"td"),tN(94,"Cor principal do accordion"),sg(),Tl(95,"td")(96,"code"),tN(97,"var(--color-action-default)"),sg()()(),Tl(98,"tr")(99,"td")(100,"code"),tN(101,"--background-color"),sg()(),Tl(102,"td"),tN(103,"Cor de background"),sg(),Tl(104,"td")(105,"code"),tN(106,"var(--color-neutral-light-00)"),sg()()(),Tl(107,"tr")(108,"td")(109,"code"),tN(110,"--font-weight"),sg()(),Tl(111,"td"),tN(112,"Peso da fonte"),sg(),Tl(113,"td")(114,"code"),tN(115,"var(--font-weight-bold)"),sg()()(),Tl(116,"tr")(117,"td")(118,"strong"),tN(119,"Hover"),sg()(),Gl(120,"td")(121,"td"),sg(),Tl(122,"tr")(123,"td")(124,"code"),tN(125,"--color-hover"),sg()(),Tl(126,"td"),tN(127,"Cor principal no estado hover"),sg(),Tl(128,"td")(129,"code"),tN(130,"var(--color-action-hover)"),sg()()(),Tl(131,"tr")(132,"td")(133,"code"),tN(134,"--background-hover"),sg()(),Tl(135,"td"),tN(136,"Cor de background no estado hover"),sg(),Tl(137,"td")(138,"code"),tN(139,"var(--color-brand-01-lightest)"),sg()()(),Tl(140,"tr")(141,"td")(142,"strong"),tN(143,"Focused"),sg()(),Gl(144,"td")(145,"td"),sg(),Tl(146,"tr")(147,"td")(148,"code"),tN(149,"--color-focused"),sg()(),Tl(150,"td"),tN(151,"Cor principal no estado de focus"),sg(),Tl(152,"td")(153,"code"),tN(154,"var(--color-action-focus)"),sg()()(),Tl(155,"tr")(156,"td")(157,"code"),tN(158,"--outline-color-focused"),sg(),tN(159," \xA0"),sg(),Tl(160,"td"),tN(161,"Cor do outline do estado de focus"),sg(),Tl(162,"td")(163,"code"),tN(164,"var(--color-action-focus)"),sg()()(),Tl(165,"tr")(166,"td")(167,"strong"),tN(168,"Disabled"),sg()(),Gl(169,"td")(170,"td"),sg(),Tl(171,"tr")(172,"td")(173,"code"),tN(174,"--color-disabled"),sg()(),Tl(175,"td"),tN(176,"Cor principal no estado disabled"),sg(),Tl(177,"td")(178,"code"),tN(179,"var(--color-neutral-mid-60)"),sg()()(),Tl(180,"tr")(181,"td")(182,"code"),tN(183,"--background-disabled"),sg(),tN(184," \xA0"),sg(),Tl(185,"td"),tN(186,"Cor de background no estado disabled"),sg(),Tl(187,"td")(188,"code"),tN(189,"var(--color-neutral-light-10)"),sg()()(),Tl(190,"tr")(191,"td")(192,"strong"),tN(193,"po-accordion-manager"),sg()(),Gl(194,"td")(195,"td"),sg(),Tl(196,"tr")(197,"td")(198,"code"),tN(199,"--background-color"),sg()(),Tl(200,"td"),tN(201,"Cor de background"),sg(),Tl(202,"td")(203,"code"),tN(204,"var(--color-neutral-mid-60)"),sg()()(),Tl(205,"tr")(206,"td")(207,"code"),tN(208,"--color"),sg()(),Tl(209,"td"),tN(210,"Cor principal do accordion manager"),sg(),Tl(211,"td")(212,"code"),tN(213,"var(--color-neutral-light-10)"),sg()()(),Tl(214,"tr")(215,"td")(216,"code"),tN(217,"--font-family"),sg()(),Tl(218,"td"),tN(219,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(220,"td")(221,"code"),tN(222,"var(--color-neutral-light-10)"),sg()()(),Tl(223,"tr")(224,"td")(225,"code"),tN(226,"--font-size"),sg()(),Tl(227,"td"),tN(228,"Tamanho da fonte"),sg(),Tl(229,"td")(230,"code"),tN(231,"var(--color-neutral-light-10)"),sg()()(),Tl(232,"tr")(233,"td")(234,"code"),tN(235,"--font-weight"),sg()(),Tl(236,"td"),tN(237,"Peso da fonte"),sg(),Tl(238,"td")(239,"code"),tN(240,"var(--color-neutral-light-10)"),sg()()(),Tl(241,"tr")(242,"td")(243,"strong"),tN(244,"Pressed"),sg()(),Gl(245,"td")(246,"td"),sg(),Tl(247,"tr")(248,"td")(249,"code"),tN(250,"--background-pressed"),sg(),tN(251," \xA0"),sg(),Tl(252,"td"),tN(253,"Cor de background no estado de pressionado\xA0"),sg(),Tl(254,"td")(255,"code"),tN(256,"var(--color-brand-01-lighter)"),sg()()(),Tl(257,"tr")(258,"td")(259,"code"),tN(260,"--color-pressed"),sg()(),Tl(261,"td"),tN(262,"Cor principal no estado de pressionado"),sg(),Tl(263,"td")(264,"code"),tN(265,"var(--color-action-pressed)"),sg()()()()()(),Tl(266,"div",8)(267,"h4",9),tN(268,"Seletor"),sg(),Tl(269,"pre",10),tN(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),sg()(),Tl(271,"h4",11),tN(272,"Propriedades"),sg(),Tl(273,"table",12)(274,"tr",13)(275,"th",14),tN(276,"Nome"),sg(),Tl(277,"th",14),tN(278,"Tipo"),sg(),Tl(279,"th",14),tN(280,"Padr\xE3o"),sg(),Tl(281,"th",14),tN(282,"Descri\xE7\xE3o"),sg()(),Tl(283,"tr",15)(284,"td",16)(285,"div",17)(286,"span",18),tN(287," p-allow-expand-all-items"),Gl(288,"br"),sg()()(),Tl(289,"td",19)(290,"code",20),tN(291,"boolean"),sg()(),Tl(292,"td",21)(293,"p")(294,"code"),tN(295,"false"),sg()()(),Tl(296,"td",22)(297,"em")(298,"strong"),tN(299,"(opcional)"),sg()(),Tl(300,"p"),tN(301,"Permite expandir mais de um "),Tl(302,"code"),tN(303,"<po-accordion-item></po-accordion-item>"),sg(),tN(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Tl(305,"code"),tN(306,"p-show-manager-accordion"),sg(),tN(307," esteja como "),Tl(308,"code"),tN(309,"true"),sg(),tN(310,"."),sg()()(),Tl(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),tN(315," (p-collapse-all)"),Gl(316,"br"),sg()()(),Tl(317,"td",19)(318,"code",25),tN(319,"EventEmitter"),sg()(),Tl(320,"td",21),tN(321,"-"),sg(),Tl(322,"td",22)(323,"em")(324,"strong"),tN(325,"(opcional)"),sg()(),Tl(326,"p"),tN(327,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),sg()()(),Tl(328,"tr",15)(329,"td",16)(330,"div",23)(331,"span",24),tN(332," (p-expand-all)"),Gl(333,"br"),sg()()(),Tl(334,"td",19)(335,"code",25),tN(336,"EventEmitter"),sg()(),Tl(337,"td",21),tN(338,"-"),sg(),Tl(339,"td",22)(340,"em")(341,"strong"),tN(342,"(opcional)"),sg()(),Tl(343,"p"),tN(344,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),sg()()(),Tl(345,"tr",15)(346,"td",16)(347,"div",17)(348,"span",18),tN(349," p-literals"),Gl(350,"br"),sg()()(),Tl(351,"td",19)(352,"code",26),tN(353,"PoAccordionLiterals"),sg()(),Tl(354,"td",21),tN(355,"-"),sg(),Tl(356,"td",22)(357,"em")(358,"strong"),tN(359,"(opcional)"),sg()(),Tl(360,"p"),tN(361,"Objeto com as literais usadas no "),Tl(362,"code"),tN(363,"po-accordion"),sg(),tN(364,"."),sg(),Tl(365,"p"),tN(366,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(367,"pre")(368,"code"),tN(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),sg()(),Tl(370,"p"),tN(371,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(372,"pre")(373,"code"),tN(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),sg()(),Tl(375,"p"),tN(376,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(377,"pre")(378,"code"),tN(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),sg()(),Tl(380,"blockquote")(381,"p"),tN(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(383,"a",27)(384,"code"),tN(385,"PoI18nService"),sg()(),tN(386," ou do browser."),sg()()()(),Tl(387,"tr",15)(388,"td",16)(389,"div",17)(390,"span",18),tN(391," p-show-manager-accordion"),Gl(392,"br"),sg()()(),Tl(393,"td",19)(394,"code",20),tN(395,"boolean"),sg()(),Tl(396,"td",21)(397,"p")(398,"code"),tN(399,"false"),sg()()(),Tl(400,"td",22)(401,"em")(402,"strong"),tN(403,"(opcional)"),sg()(),Tl(404,"p"),tN(405,"Exibe o Gerenciador de Accordion."),sg()()(),Tl(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),tN(410," p-size"),Gl(411,"br"),sg()()(),Tl(412,"td",19)(413,"code",28),tN(414,"string"),sg()(),Tl(415,"td",21)(416,"p")(417,"code"),tN(418,"medium"),sg()()(),Tl(419,"td",22)(420,"em")(421,"strong"),tN(422,"(opcional)"),sg()(),Tl(423,"p"),tN(424,"Define o tamanho do componente:"),sg(),Tl(425,"ul")(426,"li")(427,"code"),tN(428,"small"),sg(),tN(429,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(430,"li")(431,"code"),tN(432,"medium"),sg(),tN(433,": altura de 44px."),sg()(),Tl(434,"blockquote")(435,"p"),tN(436,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(437,"code"),tN(438,"medium"),sg(),tN(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(440,"a",29),tN(441,"po-theme"),sg(),tN(442,"."),sg()()()()(),Tl(443,"h3",11),tN(444,"M\xE9todos"),sg(),Tl(445,"table",30)(446,"tr",15)(447,"th",31)(448,"div",17)(449,"h4")(450,"span",18),tN(451," collapseAllItems "),sg()()()()(),Tl(452,"tr",22)(453,"td",22)(454,"p"),tN(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Tl(456,"code"),tN(457,"p-show-manager-accordion"),sg(),tN(458," estiver como "),Tl(459,"code"),tN(460,"true"),sg(),tN(461,"."),sg()()()(),Gl(462,"br"),Tl(463,"table",30)(464,"tr",15)(465,"th",31)(466,"div",17)(467,"h4")(468,"span",18),tN(469," expandAllItems "),sg()()()()(),Tl(470,"tr",22)(471,"td",22)(472,"p"),tN(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Tl(474,"code"),tN(475,"p-show-manager-accordion"),sg(),tN(476," estiver como "),Tl(477,"code"),tN(478,"true"),sg(),tN(479,"."),sg()()()(),Gl(480,"br"),Tl(481,"h3"),tN(482,"Interfaces"),sg(),Tl(483,"h4",32)(484,"code",5),tN(485,"PoAccordionLiterals"),sg()(),Tl(486,"div",2)(487,"p"),tN(488,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(489,"code"),tN(490,"po-accordion"),sg(),tN(491,"."),sg()(),Tl(492,"h4",11),tN(493,"Propriedades"),sg(),Tl(494,"table",12)(495,"tr",13)(496,"th",14),tN(497,"Nome"),sg(),Tl(498,"th",14),tN(499,"Tipo"),sg(),Tl(500,"th",14),tN(501,"Descri\xE7\xE3o"),sg()(),Tl(502,"tr",15)(503,"td",16)(504,"div",17)(505,"span",18),tN(506," closeAllItems"),Gl(507,"br"),sg()()(),Tl(508,"td",19)(509,"code",28),tN(510,"string"),sg()(),Tl(511,"td",22)(512,"em")(513,"strong"),tN(514,"(opcional)"),sg()(),Tl(515,"p"),tN(516,"Label do gerenciador de Accordion para colapsar todos os itens"),sg()()(),Tl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),tN(521," expandAllItems"),Gl(522,"br"),sg()()(),Tl(523,"td",19)(524,"code",28),tN(525,"string"),sg()(),Tl(526,"td",22)(527,"em")(528,"strong"),tN(529,"(opcional)"),sg()(),Tl(530,"p"),tN(531,"Label do gerenciador de Accordion para expandir todos os itens."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-accordion-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,le,ce,me,se],encapsulation:2})}return n})();var Pe=[{path:"",component:ue}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[vL.forChild(Pe),vL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,he]})}return n})();export{Ze as DocPoAccordionModule};