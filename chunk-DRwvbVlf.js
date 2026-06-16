import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aI as nr,aJ as Zo,J as wl,z as Ux,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,ae as iY,af as ck,aK as Pe,aL as di,aM as lT,bx as ia,aO as Yo,bB as ga,al as lx,av as nx,aw as tx,am as pw,an as $0,aX as _x,ay as rx,ap as hw,aq as G0,a3 as D3,as as $l,at as uo,au as fo,az as Qy,aB as $x,aA as Jy,bQ as rR}from'./main-6SPFG3VI.js';var pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(wl(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),Ux(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),ng()(),wl(4,"po-accordion-item",2)(5,"p",1),Ux(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),ng()()());},dependencies:[nr,Zo],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Accordion Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-accordion-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,xe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return n})();function ve(n,W){if(n&1&&(wl(0,"po-accordion-item",2),Ux(1),ng()),n&2){let l=W.$implicit,a=W.$index;YE("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Pp(),cg(" Accordion Item Content ",a," ");}}var se=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=lx();wl(0,"po-accordion",1),nx(1,ve,2,5,"po-accordion-item",2,tx),ng(),Ul(3,"po-divider",3),wl(4,"div",4)(5,"po-input",5),pw("ngModelChange",function(p){return Qy(c),$x(i.literals,p)||(i.literals=p),Jy(p)}),ut("p-change",function(){return i.changeLiterals()}),ng(),$0(),wl(6,"po-checkbox-group",6),pw("ngModelChange",function(p){return Qy(c),$x(i.propertiesAccordion,p)||(i.propertiesAccordion=p),Jy(p)}),ng(),$0(),ng(),Ul(7,"po-divider",7)(8,"po-dynamic-form",8,0),wl(10,"div",9)(11,"po-radio-group",10),pw("ngModelChange",function(p){return Qy(c),$x(i.typeTag,p)||(i.typeTag=p),Jy(p)}),ng(),$0(),wl(12,"po-checkbox-group",11),pw("ngModelChange",function(p){return Qy(c),$x(i.disabledItem,p)||(i.disabledItem=p),Jy(p)}),ng(),$0(),ng(),wl(13,"div",12)(14,"po-radio-group",13),pw("ngModelChange",function(p){return Qy(c),$x(i.size,p)||(i.size=p),Jy(p)}),ng(),$0(),wl(15,"po-button",14),ut("p-click",function(){Qy(c);let p=_x(9);return i.addAccordionItem(p.form.value),Jy(p.form.reset())}),ng()(),wl(16,"div",15)(17,"po-button",16),ut("p-click",function(){return i.restore()}),ng()();}if(a&2){let c=_x(9);YE("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Pp(),rx(i.accordionItems),Pp(4),hw("ngModel",i.literals),G0(),Pp(),hw("ngModel",i.propertiesAccordion),YE("p-options",i.propertiesAccordionOptions),G0(),Pp(2),YE("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Pp(3),YE("p-options",i.typeTagOptions),hw("ngModel",i.typeTag),G0(),Pp(),YE("p-options",i.disabledOption),hw("ngModel",i.disabledItem),G0(),Pp(2),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0(),Pp(),YE("p-disabled",c.form.invalid);}},dependencies:[iY,ck,nr,Zo,Pe,di,lT,ia,Yo,ga],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Accordion Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-accordion
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-accordion-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return n})();var he=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&$l(rR,7),a&2){let c;uo(c=fo())&&(i.questionOne=c.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(wl(0,"po-page-default",1)(1,"p",2),Ux(2,"You don't have to be afraid of being a blood donor!"),ng(),wl(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),Ux(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),ng()(),wl(8,"po-accordion-item",6)(9,"p",5),Ux(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),ng()(),wl(11,"po-accordion-item",7)(12,"p",5),Ux(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),ng()(),wl(14,"po-accordion-item",8)(15,"p",5),Ux(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),ng()()(),wl(17,"p",9),Ux(18," For more information, see the "),wl(19,"a",10),Ux(20,"Hemosc FAQ"),ng(),Ux(21,". "),ng()()),a&2&&(Pp(3),YE("p-show-manager-accordion",true));},dependencies:[nr,Zo,D3],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),be=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Accordion - FAQs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Blood donation FAQs">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-accordion-faq"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Te,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return n})();var ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:551,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-accordion"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-accordion"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),ng()(),wl(19,"p"),Ux(20,"M\xF3dulo da aplica\xE7\xE3o:"),ng(),wl(21,"pre")(22,"code"),Ux(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),ng()(),wl(24,"p"),Ux(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),ng(),wl(26,"pre")(27,"code"),Ux(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoAccordionComponent"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),ng(),wl(37,"p"),Ux(38,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),wl(39,"a",6)(40,"code"),Ux(41,"po-accordion-item"),ng()(),Ux(42,`,
como no exemplo abaixo:`),ng(),wl(43,"pre")(44,"code"),Ux(45,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),ng()(),wl(46,"p"),Ux(47,"e no typescript pode-se utilizar o "),wl(48,"code"),Ux(49,"@ViewChild"),ng(),Ux(50,":"),ng(),wl(51,"pre")(52,"code"),Ux(53,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),ng()(),wl(54,"p"),Ux(55,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),ng(),wl(56,"p"),Ux(57,"Caso houver a necessidade de abrir algum dos "),wl(58,"code"),Ux(59,"po-accordion-item"),ng(),Ux(60,` via Typescript
acesse a `),wl(61,"a",6),Ux(62,"documenta\xE7\xE3o do PoAccordionItem"),ng(),Ux(63,"."),ng(),wl(64,"h4"),Ux(65,"Tokens customiz\xE1veis"),ng(),wl(66,"p"),Ux(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(68,"blockquote")(69,"p"),Ux(70,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(71,"a",7),Ux(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(73,"."),ng()(),wl(74,"table")(75,"thead")(76,"tr")(77,"th"),Ux(78,"Propriedade"),ng(),wl(79,"th"),Ux(80,"Descri\xE7\xE3o"),ng(),wl(81,"th"),Ux(82,"Valor Padr\xE3o"),ng()()(),wl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),Ux(87,"Default Values"),ng()(),Ul(88,"td")(89,"td"),ng(),wl(90,"tr")(91,"td")(92,"code"),Ux(93,"--font-family"),ng()(),wl(94,"td"),Ux(95,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(96,"td")(97,"code"),Ux(98,"var(--font-family-theme)"),ng()()(),wl(99,"tr")(100,"td")(101,"code"),Ux(102,"--font-size"),ng()(),wl(103,"td"),Ux(104,"Tamanho da fonte"),ng(),wl(105,"td")(106,"code"),Ux(107,"var(--font-size-default)"),ng()()(),wl(108,"tr")(109,"td")(110,"code"),Ux(111,"--color"),ng()(),wl(112,"td"),Ux(113,"Cor principal do accordion"),ng(),wl(114,"td")(115,"code"),Ux(116,"var(--color-action-default)"),ng()()(),wl(117,"tr")(118,"td")(119,"code"),Ux(120,"--background-color"),ng()(),wl(121,"td"),Ux(122,"Cor de background"),ng(),wl(123,"td")(124,"code"),Ux(125,"var(--color-neutral-light-00)"),ng()()(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--font-weight"),ng()(),wl(130,"td"),Ux(131,"Peso da fonte"),ng(),wl(132,"td")(133,"code"),Ux(134,"var(--font-weight-bold)"),ng()()(),wl(135,"tr")(136,"td")(137,"strong"),Ux(138,"Hover"),ng()(),Ul(139,"td")(140,"td"),ng(),wl(141,"tr")(142,"td")(143,"code"),Ux(144,"--color-hover"),ng()(),wl(145,"td"),Ux(146,"Cor principal no estado hover"),ng(),wl(147,"td")(148,"code"),Ux(149,"var(--color-action-hover)"),ng()()(),wl(150,"tr")(151,"td")(152,"code"),Ux(153,"--background-hover"),ng()(),wl(154,"td"),Ux(155,"Cor de background no estado hover"),ng(),wl(156,"td")(157,"code"),Ux(158,"var(--color-brand-01-lightest)"),ng()()(),wl(159,"tr")(160,"td")(161,"strong"),Ux(162,"Focused"),ng()(),Ul(163,"td")(164,"td"),ng(),wl(165,"tr")(166,"td")(167,"code"),Ux(168,"--color-focused"),ng()(),wl(169,"td"),Ux(170,"Cor principal no estado de focus"),ng(),wl(171,"td")(172,"code"),Ux(173,"var(--color-action-focus)"),ng()()(),wl(174,"tr")(175,"td")(176,"code"),Ux(177,"--outline-color-focused"),ng(),Ux(178," \xA0"),ng(),wl(179,"td"),Ux(180,"Cor do outline do estado de focus"),ng(),wl(181,"td")(182,"code"),Ux(183,"var(--color-action-focus)"),ng()()(),wl(184,"tr")(185,"td")(186,"strong"),Ux(187,"Disabled"),ng()(),Ul(188,"td")(189,"td"),ng(),wl(190,"tr")(191,"td")(192,"code"),Ux(193,"--color-disabled"),ng()(),wl(194,"td"),Ux(195,"Cor principal no estado disabled"),ng(),wl(196,"td")(197,"code"),Ux(198,"var(--color-neutral-mid-60)"),ng()()(),wl(199,"tr")(200,"td")(201,"code"),Ux(202,"--background-disabled"),ng(),Ux(203," \xA0"),ng(),wl(204,"td"),Ux(205,"Cor de background no estado disabled"),ng(),wl(206,"td")(207,"code"),Ux(208,"var(--color-neutral-light-10)"),ng()()(),wl(209,"tr")(210,"td")(211,"strong"),Ux(212,"po-accordion-manager"),ng()(),Ul(213,"td")(214,"td"),ng(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-color"),ng()(),wl(219,"td"),Ux(220,"Cor de background"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-neutral-mid-60)"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--color"),ng()(),wl(228,"td"),Ux(229,"Cor principal do accordion manager"),ng(),wl(230,"td")(231,"code"),Ux(232,"var(--color-neutral-light-10)"),ng()()(),wl(233,"tr")(234,"td")(235,"code"),Ux(236,"--font-family"),ng()(),wl(237,"td"),Ux(238,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(239,"td")(240,"code"),Ux(241,"var(--color-neutral-light-10)"),ng()()(),wl(242,"tr")(243,"td")(244,"code"),Ux(245,"--font-size"),ng()(),wl(246,"td"),Ux(247,"Tamanho da fonte"),ng(),wl(248,"td")(249,"code"),Ux(250,"var(--color-neutral-light-10)"),ng()()(),wl(251,"tr")(252,"td")(253,"code"),Ux(254,"--font-weight"),ng()(),wl(255,"td"),Ux(256,"Peso da fonte"),ng(),wl(257,"td")(258,"code"),Ux(259,"var(--color-neutral-light-10)"),ng()()(),wl(260,"tr")(261,"td")(262,"strong"),Ux(263,"Pressed"),ng()(),Ul(264,"td")(265,"td"),ng(),wl(266,"tr")(267,"td")(268,"code"),Ux(269,"--background-pressed"),ng(),Ux(270," \xA0"),ng(),wl(271,"td"),Ux(272,"Cor de background no estado de pressionado\xA0"),ng(),wl(273,"td")(274,"code"),Ux(275,"var(--color-brand-01-lighter)"),ng()()(),wl(276,"tr")(277,"td")(278,"code"),Ux(279,"--color-pressed"),ng()(),wl(280,"td"),Ux(281,"Cor principal no estado de pressionado"),ng(),wl(282,"td")(283,"code"),Ux(284,"var(--color-action-pressed)"),ng()()()()()(),wl(285,"div",8)(286,"h4",9),Ux(287,"Seletor"),ng(),wl(288,"pre",10),Ux(289,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),ng()(),wl(290,"h4",11),Ux(291,"Propriedades"),ng(),wl(292,"table",12)(293,"tr",13)(294,"th",14),Ux(295,"Nome"),ng(),wl(296,"th",14),Ux(297,"Tipo"),ng(),wl(298,"th",14),Ux(299,"Padr\xE3o"),ng(),wl(300,"th",14),Ux(301,"Descri\xE7\xE3o"),ng()(),wl(302,"tr",15)(303,"td",16)(304,"div",17)(305,"span",18),Ux(306," p-allow-expand-all-items"),Ul(307,"br"),ng()()(),wl(308,"td",19)(309,"code",20),Ux(310,"boolean"),ng()(),wl(311,"td",21)(312,"p")(313,"code"),Ux(314,"false"),ng()()(),wl(315,"td",22)(316,"em")(317,"strong"),Ux(318,"(opcional)"),ng()(),wl(319,"p"),Ux(320,"Permite expandir mais de um "),wl(321,"code"),Ux(322,"<po-accordion-item></po-accordion-item>"),ng(),Ux(323,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),wl(324,"code"),Ux(325,"p-show-manager-accordion"),ng(),Ux(326," esteja como "),wl(327,"code"),Ux(328,"true"),ng(),Ux(329,"."),ng()()(),wl(330,"tr",15)(331,"td",16)(332,"div",23)(333,"span",24),Ux(334," (p-collapse-all)"),Ul(335,"br"),ng()()(),wl(336,"td",19)(337,"code",25),Ux(338,"EventEmitter"),ng()(),wl(339,"td",21),Ux(340,"-"),ng(),wl(341,"td",22)(342,"em")(343,"strong"),Ux(344,"(opcional)"),ng()(),wl(345,"p"),Ux(346,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),ng()()(),wl(347,"tr",15)(348,"td",16)(349,"div",23)(350,"span",24),Ux(351," (p-expand-all)"),Ul(352,"br"),ng()()(),wl(353,"td",19)(354,"code",25),Ux(355,"EventEmitter"),ng()(),wl(356,"td",21),Ux(357,"-"),ng(),wl(358,"td",22)(359,"em")(360,"strong"),Ux(361,"(opcional)"),ng()(),wl(362,"p"),Ux(363,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),ng()()(),wl(364,"tr",15)(365,"td",16)(366,"div",17)(367,"span",18),Ux(368," p-literals"),Ul(369,"br"),ng()()(),wl(370,"td",19)(371,"code",26),Ux(372,"PoAccordionLiterals"),ng()(),wl(373,"td",21),Ux(374,"-"),ng(),wl(375,"td",22)(376,"em")(377,"strong"),Ux(378,"(opcional)"),ng()(),wl(379,"p"),Ux(380,"Objeto com as literais usadas no "),wl(381,"code"),Ux(382,"po-accordion"),ng(),Ux(383,"."),ng(),wl(384,"p"),Ux(385,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(386,"pre")(387,"code"),Ux(388,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),ng()(),wl(389,"p"),Ux(390,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(391,"pre")(392,"code"),Ux(393,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),ng()(),wl(394,"p"),Ux(395,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(396,"pre")(397,"code"),Ux(398,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),ng()(),wl(399,"blockquote")(400,"p"),Ux(401,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(402,"a",27)(403,"code"),Ux(404,"PoI18nService"),ng()(),Ux(405," ou do browser."),ng()()()(),wl(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),Ux(410," p-show-manager-accordion"),Ul(411,"br"),ng()()(),wl(412,"td",19)(413,"code",20),Ux(414,"boolean"),ng()(),wl(415,"td",21)(416,"p")(417,"code"),Ux(418,"false"),ng()()(),wl(419,"td",22)(420,"em")(421,"strong"),Ux(422,"(opcional)"),ng()(),wl(423,"p"),Ux(424,"Exibe o Gerenciador de Accordion."),ng()()(),wl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),Ux(429," p-size"),Ul(430,"br"),ng()()(),wl(431,"td",19)(432,"code",28),Ux(433,"string"),ng()(),wl(434,"td",21)(435,"p")(436,"code"),Ux(437,"medium"),ng()()(),wl(438,"td",22)(439,"em")(440,"strong"),Ux(441,"(opcional)"),ng()(),wl(442,"p"),Ux(443,"Define o tamanho do componente:"),ng(),wl(444,"ul")(445,"li")(446,"code"),Ux(447,"small"),ng(),Ux(448,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(449,"li")(450,"code"),Ux(451,"medium"),ng(),Ux(452,": altura de 44px."),ng()(),wl(453,"blockquote")(454,"p"),Ux(455,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(456,"code"),Ux(457,"medium"),ng(),Ux(458,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(459,"a",29),Ux(460,"po-theme"),ng(),Ux(461,"."),ng()()()()(),wl(462,"h3",11),Ux(463,"M\xE9todos"),ng(),wl(464,"table",30)(465,"tr",15)(466,"th",31)(467,"div",17)(468,"h4")(469,"span",18),Ux(470," collapseAllItems "),ng()()()()(),wl(471,"tr",22)(472,"td",22)(473,"p"),Ux(474,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),wl(475,"code"),Ux(476,"p-show-manager-accordion"),ng(),Ux(477," estiver como "),wl(478,"code"),Ux(479,"true"),ng(),Ux(480,"."),ng()()()(),Ul(481,"br"),wl(482,"table",30)(483,"tr",15)(484,"th",31)(485,"div",17)(486,"h4")(487,"span",18),Ux(488," expandAllItems "),ng()()()()(),wl(489,"tr",22)(490,"td",22)(491,"p"),Ux(492,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),wl(493,"code"),Ux(494,"p-show-manager-accordion"),ng(),Ux(495," estiver como "),wl(496,"code"),Ux(497,"true"),ng(),Ux(498,"."),ng()()()(),Ul(499,"br"),wl(500,"h3"),Ux(501,"Interfaces"),ng(),wl(502,"h4",32)(503,"code",5),Ux(504,"PoAccordionLiterals"),ng()(),wl(505,"div",2)(506,"p"),Ux(507,"Interface para defini\xE7\xE3o das literais usadas no "),wl(508,"code"),Ux(509,"po-accordion"),ng(),Ux(510,"."),ng()(),wl(511,"h4",11),Ux(512,"Propriedades"),ng(),wl(513,"table",12)(514,"tr",13)(515,"th",14),Ux(516,"Nome"),ng(),wl(517,"th",14),Ux(518,"Tipo"),ng(),wl(519,"th",14),Ux(520,"Descri\xE7\xE3o"),ng()(),wl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),Ux(525," closeAllItems"),Ul(526,"br"),ng()()(),wl(527,"td",19)(528,"code",28),Ux(529,"string"),ng()(),wl(530,"td",22)(531,"em")(532,"strong"),Ux(533,"(opcional)"),ng()(),wl(534,"p"),Ux(535,"Label do gerenciador de Accordion para colapsar todos os itens"),ng()()(),wl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),Ux(540," expandAllItems"),Ul(541,"br"),ng()()(),wl(542,"td",19)(543,"code",28),Ux(544,"string"),ng()(),wl(545,"td",22)(546,"em")(547,"strong"),Ux(548,"(opcional)"),ng()(),wl(549,"p"),Ux(550,"Label do gerenciador de Accordion para expandir todos os itens."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var fe=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-accordion-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),ng()()()),a&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ce,ue,be,ge],encapsulation:2})}return n})();var Me=[{path:"",component:fe}],Se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[vL.forChild(Me),vL]})}return n})();var pt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[u5,Se]})}return n})();export{pt as DocPoAccordionModule};