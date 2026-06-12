import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aZ as bpe,a_ as g3,Q as Cl,z as qx,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aF as sY,aG as gk,a$ as Qt,b0 as _v,b1 as ume,c8 as L3,b3 as q3,cc as Nde,aB as gx,aQ as cx,aR as ax,aM as gw,aN as Z0,bc as Sx,aS as lx,aO as pw,aP as X0,a3 as SNe,av as zl,aw as uo,ax as fo,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(Cl(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),qx(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),og()(),Cl(4,"po-accordion-item",2)(5,"p",1),qx(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),og()()());},dependencies:[bpe,g3],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Accordion Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-accordion-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return n})();function Se(n,H){if(n&1&&(Cl(0,"po-accordion-item",2),qx(1),og()),n&2){let l=H.$implicit,a=H.$index;ZE("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Lp(),dg(" Accordion Item Content ",a," ");}}var de=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=gx();Cl(0,"po-accordion",1),cx(1,Se,2,5,"po-accordion-item",2,ax),og(),Hl(3,"po-divider",3),Cl(4,"div",4)(5,"po-input",5),gw("ngModelChange",function(p){return Jy(m),Zx(i.literals,p)||(i.literals=p),e_(p)}),dt("p-change",function(){return i.changeLiterals()}),og(),Z0(),Cl(6,"po-checkbox-group",6),gw("ngModelChange",function(p){return Jy(m),Zx(i.propertiesAccordion,p)||(i.propertiesAccordion=p),e_(p)}),og(),Z0(),og(),Hl(7,"po-divider",7)(8,"po-dynamic-form",8,0),Cl(10,"div",9)(11,"po-radio-group",10),gw("ngModelChange",function(p){return Jy(m),Zx(i.typeTag,p)||(i.typeTag=p),e_(p)}),og(),Z0(),Cl(12,"po-checkbox-group",11),gw("ngModelChange",function(p){return Jy(m),Zx(i.disabledItem,p)||(i.disabledItem=p),e_(p)}),og(),Z0(),og(),Cl(13,"div",12)(14,"po-radio-group",13),gw("ngModelChange",function(p){return Jy(m),Zx(i.size,p)||(i.size=p),e_(p)}),og(),Z0(),Cl(15,"po-button",14),dt("p-click",function(){Jy(m);let p=Sx(9);return i.addAccordionItem(p.form.value),e_(p.form.reset())}),og()(),Cl(16,"div",15)(17,"po-button",16),dt("p-click",function(){return i.restore()}),og()();}if(a&2){let m=Sx(9);ZE("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Lp(),lx(i.accordionItems),Lp(4),pw("ngModel",i.literals),X0(),Lp(),pw("ngModel",i.propertiesAccordion),ZE("p-options",i.propertiesAccordionOptions),X0(),Lp(2),ZE("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Lp(3),ZE("p-options",i.typeTagOptions),pw("ngModel",i.typeTag),X0(),Lp(),ZE("p-options",i.disabledOption),pw("ngModel",i.disabledItem),X0(),Lp(2),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0(),Lp(),ZE("p-disabled",m.form.invalid);}},dependencies:[sY,gk,bpe,g3,Qt,_v,ume,L3,q3,Nde],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Accordion Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-accordion
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-accordion-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,xe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return n})();var ce=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&zl(g3,7),a&2){let m;uo(m=fo())&&(i.questionOne=m.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",1)(1,"p",2),qx(2,"You don't have to be afraid of being a blood donor!"),og(),Cl(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),qx(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),og()(),Cl(8,"po-accordion-item",6)(9,"p",5),qx(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),og()(),Cl(11,"po-accordion-item",7)(12,"p",5),qx(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),og()(),Cl(14,"po-accordion-item",8)(15,"p",5),qx(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),og()()(),Cl(17,"p",9),qx(18," For more information, see the "),Cl(19,"a",10),qx(20,"Hemosc FAQ"),og(),qx(21,". "),og()()),a&2&&(Lp(3),ZE("p-show-manager-accordion",true));},dependencies:[bpe,g3,SNe],encapsulation:2,changeDetection:1})}return n})();var Ae=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Accordion - FAQs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Blood donation FAQs">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-accordion-faq"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:551,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-accordion"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-accordion"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),og()(),Cl(19,"p"),qx(20,"M\xF3dulo da aplica\xE7\xE3o:"),og(),Cl(21,"pre")(22,"code"),qx(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),og()(),Cl(24,"p"),qx(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),og(),Cl(26,"pre")(27,"code"),qx(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoAccordionComponent"),og()(),Cl(34,"div",2)(35,"p"),qx(36,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),og(),Cl(37,"p"),qx(38,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),Cl(39,"a",6)(40,"code"),qx(41,"po-accordion-item"),og()(),qx(42,`,
como no exemplo abaixo:`),og(),Cl(43,"pre")(44,"code"),qx(45,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),og()(),Cl(46,"p"),qx(47,"e no typescript pode-se utilizar o "),Cl(48,"code"),qx(49,"@ViewChild"),og(),qx(50,":"),og(),Cl(51,"pre")(52,"code"),qx(53,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),og()(),Cl(54,"p"),qx(55,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),og(),Cl(56,"p"),qx(57,"Caso houver a necessidade de abrir algum dos "),Cl(58,"code"),qx(59,"po-accordion-item"),og(),qx(60,` via Typescript
acesse a `),Cl(61,"a",6),qx(62,"documenta\xE7\xE3o do PoAccordionItem"),og(),qx(63,"."),og(),Cl(64,"h4"),qx(65,"Tokens customiz\xE1veis"),og(),Cl(66,"p"),qx(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(68,"blockquote")(69,"p"),qx(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(71,"a",7),qx(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(73,"."),og()(),Cl(74,"table")(75,"thead")(76,"tr")(77,"th"),qx(78,"Propriedade"),og(),Cl(79,"th"),qx(80,"Descri\xE7\xE3o"),og(),Cl(81,"th"),qx(82,"Valor Padr\xE3o"),og()()(),Cl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),qx(87,"Default Values"),og()(),Hl(88,"td")(89,"td"),og(),Cl(90,"tr")(91,"td")(92,"code"),qx(93,"--font-family"),og()(),Cl(94,"td"),qx(95,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(96,"td")(97,"code"),qx(98,"var(--font-family-theme)"),og()()(),Cl(99,"tr")(100,"td")(101,"code"),qx(102,"--font-size"),og()(),Cl(103,"td"),qx(104,"Tamanho da fonte"),og(),Cl(105,"td")(106,"code"),qx(107,"var(--font-size-default)"),og()()(),Cl(108,"tr")(109,"td")(110,"code"),qx(111,"--color"),og()(),Cl(112,"td"),qx(113,"Cor principal do accordion"),og(),Cl(114,"td")(115,"code"),qx(116,"var(--color-action-default)"),og()()(),Cl(117,"tr")(118,"td")(119,"code"),qx(120,"--background-color"),og()(),Cl(121,"td"),qx(122,"Cor de background"),og(),Cl(123,"td")(124,"code"),qx(125,"var(--color-neutral-light-00)"),og()()(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--font-weight"),og()(),Cl(130,"td"),qx(131,"Peso da fonte"),og(),Cl(132,"td")(133,"code"),qx(134,"var(--font-weight-bold)"),og()()(),Cl(135,"tr")(136,"td")(137,"strong"),qx(138,"Hover"),og()(),Hl(139,"td")(140,"td"),og(),Cl(141,"tr")(142,"td")(143,"code"),qx(144,"--color-hover"),og()(),Cl(145,"td"),qx(146,"Cor principal no estado hover"),og(),Cl(147,"td")(148,"code"),qx(149,"var(--color-action-hover)"),og()()(),Cl(150,"tr")(151,"td")(152,"code"),qx(153,"--background-hover"),og()(),Cl(154,"td"),qx(155,"Cor de background no estado hover"),og(),Cl(156,"td")(157,"code"),qx(158,"var(--color-brand-01-lightest)"),og()()(),Cl(159,"tr")(160,"td")(161,"strong"),qx(162,"Focused"),og()(),Hl(163,"td")(164,"td"),og(),Cl(165,"tr")(166,"td")(167,"code"),qx(168,"--color-focused"),og()(),Cl(169,"td"),qx(170,"Cor principal no estado de focus"),og(),Cl(171,"td")(172,"code"),qx(173,"var(--color-action-focus)"),og()()(),Cl(174,"tr")(175,"td")(176,"code"),qx(177,"--outline-color-focused"),og(),qx(178," \xA0"),og(),Cl(179,"td"),qx(180,"Cor do outline do estado de focus"),og(),Cl(181,"td")(182,"code"),qx(183,"var(--color-action-focus)"),og()()(),Cl(184,"tr")(185,"td")(186,"strong"),qx(187,"Disabled"),og()(),Hl(188,"td")(189,"td"),og(),Cl(190,"tr")(191,"td")(192,"code"),qx(193,"--color-disabled"),og()(),Cl(194,"td"),qx(195,"Cor principal no estado disabled"),og(),Cl(196,"td")(197,"code"),qx(198,"var(--color-neutral-mid-60)"),og()()(),Cl(199,"tr")(200,"td")(201,"code"),qx(202,"--background-disabled"),og(),qx(203," \xA0"),og(),Cl(204,"td"),qx(205,"Cor de background no estado disabled"),og(),Cl(206,"td")(207,"code"),qx(208,"var(--color-neutral-light-10)"),og()()(),Cl(209,"tr")(210,"td")(211,"strong"),qx(212,"po-accordion-manager"),og()(),Hl(213,"td")(214,"td"),og(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-color"),og()(),Cl(219,"td"),qx(220,"Cor de background"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-neutral-mid-60)"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--color"),og()(),Cl(228,"td"),qx(229,"Cor principal do accordion manager"),og(),Cl(230,"td")(231,"code"),qx(232,"var(--color-neutral-light-10)"),og()()(),Cl(233,"tr")(234,"td")(235,"code"),qx(236,"--font-family"),og()(),Cl(237,"td"),qx(238,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(239,"td")(240,"code"),qx(241,"var(--color-neutral-light-10)"),og()()(),Cl(242,"tr")(243,"td")(244,"code"),qx(245,"--font-size"),og()(),Cl(246,"td"),qx(247,"Tamanho da fonte"),og(),Cl(248,"td")(249,"code"),qx(250,"var(--color-neutral-light-10)"),og()()(),Cl(251,"tr")(252,"td")(253,"code"),qx(254,"--font-weight"),og()(),Cl(255,"td"),qx(256,"Peso da fonte"),og(),Cl(257,"td")(258,"code"),qx(259,"var(--color-neutral-light-10)"),og()()(),Cl(260,"tr")(261,"td")(262,"strong"),qx(263,"Pressed"),og()(),Hl(264,"td")(265,"td"),og(),Cl(266,"tr")(267,"td")(268,"code"),qx(269,"--background-pressed"),og(),qx(270," \xA0"),og(),Cl(271,"td"),qx(272,"Cor de background no estado de pressionado\xA0"),og(),Cl(273,"td")(274,"code"),qx(275,"var(--color-brand-01-lighter)"),og()()(),Cl(276,"tr")(277,"td")(278,"code"),qx(279,"--color-pressed"),og()(),Cl(280,"td"),qx(281,"Cor principal no estado de pressionado"),og(),Cl(282,"td")(283,"code"),qx(284,"var(--color-action-pressed)"),og()()()()()(),Cl(285,"div",8)(286,"h4",9),qx(287,"Seletor"),og(),Cl(288,"pre",10),qx(289,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),og()(),Cl(290,"h4",11),qx(291,"Propriedades"),og(),Cl(292,"table",12)(293,"tr",13)(294,"th",14),qx(295,"Nome"),og(),Cl(296,"th",14),qx(297,"Tipo"),og(),Cl(298,"th",14),qx(299,"Padr\xE3o"),og(),Cl(300,"th",14),qx(301,"Descri\xE7\xE3o"),og()(),Cl(302,"tr",15)(303,"td",16)(304,"div",17)(305,"span",18),qx(306," p-allow-expand-all-items"),Hl(307,"br"),og()()(),Cl(308,"td",19)(309,"code",20),qx(310,"boolean"),og()(),Cl(311,"td",21)(312,"p")(313,"code"),qx(314,"false"),og()()(),Cl(315,"td",22)(316,"em")(317,"strong"),qx(318,"(opcional)"),og()(),Cl(319,"p"),qx(320,"Permite expandir mais de um "),Cl(321,"code"),qx(322,"<po-accordion-item></po-accordion-item>"),og(),qx(323,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Cl(324,"code"),qx(325,"p-show-manager-accordion"),og(),qx(326," esteja como "),Cl(327,"code"),qx(328,"true"),og(),qx(329,"."),og()()(),Cl(330,"tr",15)(331,"td",16)(332,"div",23)(333,"span",24),qx(334," (p-collapse-all)"),Hl(335,"br"),og()()(),Cl(336,"td",19)(337,"code",25),qx(338,"EventEmitter"),og()(),Cl(339,"td",21),qx(340,"-"),og(),Cl(341,"td",22)(342,"em")(343,"strong"),qx(344,"(opcional)"),og()(),Cl(345,"p"),qx(346,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Cl(347,"tr",15)(348,"td",16)(349,"div",23)(350,"span",24),qx(351," (p-expand-all)"),Hl(352,"br"),og()()(),Cl(353,"td",19)(354,"code",25),qx(355,"EventEmitter"),og()(),Cl(356,"td",21),qx(357,"-"),og(),Cl(358,"td",22)(359,"em")(360,"strong"),qx(361,"(opcional)"),og()(),Cl(362,"p"),qx(363,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Cl(364,"tr",15)(365,"td",16)(366,"div",17)(367,"span",18),qx(368," p-literals"),Hl(369,"br"),og()()(),Cl(370,"td",19)(371,"code",26),qx(372,"PoAccordionLiterals"),og()(),Cl(373,"td",21),qx(374,"-"),og(),Cl(375,"td",22)(376,"em")(377,"strong"),qx(378,"(opcional)"),og()(),Cl(379,"p"),qx(380,"Objeto com as literais usadas no "),Cl(381,"code"),qx(382,"po-accordion"),og(),qx(383,"."),og(),Cl(384,"p"),qx(385,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(386,"pre")(387,"code"),qx(388,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Cl(389,"p"),qx(390,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(391,"pre")(392,"code"),qx(393,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Cl(394,"p"),qx(395,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(396,"pre")(397,"code"),qx(398,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),og()(),Cl(399,"blockquote")(400,"p"),qx(401,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(402,"a",27)(403,"code"),qx(404,"PoI18nService"),og()(),qx(405," ou do browser."),og()()()(),Cl(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),qx(410," p-show-manager-accordion"),Hl(411,"br"),og()()(),Cl(412,"td",19)(413,"code",20),qx(414,"boolean"),og()(),Cl(415,"td",21)(416,"p")(417,"code"),qx(418,"false"),og()()(),Cl(419,"td",22)(420,"em")(421,"strong"),qx(422,"(opcional)"),og()(),Cl(423,"p"),qx(424,"Exibe o Gerenciador de Accordion."),og()()(),Cl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),qx(429," p-size"),Hl(430,"br"),og()()(),Cl(431,"td",19)(432,"code",28),qx(433,"string"),og()(),Cl(434,"td",21)(435,"p")(436,"code"),qx(437,"medium"),og()()(),Cl(438,"td",22)(439,"em")(440,"strong"),qx(441,"(opcional)"),og()(),Cl(442,"p"),qx(443,"Define o tamanho do componente:"),og(),Cl(444,"ul")(445,"li")(446,"code"),qx(447,"small"),og(),qx(448,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(449,"li")(450,"code"),qx(451,"medium"),og(),qx(452,": altura de 44px."),og()(),Cl(453,"blockquote")(454,"p"),qx(455,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(456,"code"),qx(457,"medium"),og(),qx(458,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(459,"a",29),qx(460,"po-theme"),og(),qx(461,"."),og()()()()(),Cl(462,"h3",11),qx(463,"M\xE9todos"),og(),Cl(464,"table",30)(465,"tr",15)(466,"th",31)(467,"div",17)(468,"h4")(469,"span",18),qx(470," collapseAllItems "),og()()()()(),Cl(471,"tr",22)(472,"td",22)(473,"p"),qx(474,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Cl(475,"code"),qx(476,"p-show-manager-accordion"),og(),qx(477," estiver como "),Cl(478,"code"),qx(479,"true"),og(),qx(480,"."),og()()()(),Hl(481,"br"),Cl(482,"table",30)(483,"tr",15)(484,"th",31)(485,"div",17)(486,"h4")(487,"span",18),qx(488," expandAllItems "),og()()()()(),Cl(489,"tr",22)(490,"td",22)(491,"p"),qx(492,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Cl(493,"code"),qx(494,"p-show-manager-accordion"),og(),qx(495," estiver como "),Cl(496,"code"),qx(497,"true"),og(),qx(498,"."),og()()()(),Hl(499,"br"),Cl(500,"h3"),qx(501,"Interfaces"),og(),Cl(502,"h4",32)(503,"code",5),qx(504,"PoAccordionLiterals"),og()(),Cl(505,"div",2)(506,"p"),qx(507,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(508,"code"),qx(509,"po-accordion"),og(),qx(510,"."),og()(),Cl(511,"h4",11),qx(512,"Propriedades"),og(),Cl(513,"table",12)(514,"tr",13)(515,"th",14),qx(516,"Nome"),og(),Cl(517,"th",14),qx(518,"Tipo"),og(),Cl(519,"th",14),qx(520,"Descri\xE7\xE3o"),og()(),Cl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),qx(525," closeAllItems"),Hl(526,"br"),og()()(),Cl(527,"td",19)(528,"code",28),qx(529,"string"),og()(),Cl(530,"td",22)(531,"em")(532,"strong"),qx(533,"(opcional)"),og()(),Cl(534,"p"),qx(535,"Label do gerenciador de Accordion para colapsar todos os itens"),og()()(),Cl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),qx(540," expandAllItems"),Hl(541,"br"),og()()(),Cl(542,"td",19)(543,"code",28),qx(544,"string"),og()(),Cl(545,"td",22)(546,"em")(547,"strong"),qx(548,"(opcional)"),og()(),Cl(549,"p"),qx(550,"Label do gerenciador de Accordion para expandir todos os itens."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-accordion-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,le,pe,me,se],encapsulation:2})}return n})();var Pe=[{path:"",component:ue}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[bL.forChild(Pe),bL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ca,he]})}return n})();export{Ze as DocPoAccordionModule};