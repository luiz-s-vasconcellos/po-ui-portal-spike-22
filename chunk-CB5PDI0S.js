import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,d as ia,ea as p0,ga as w,ii as Xy,l as ar,lr as Ky,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&ql(0,`po-code-editor`)},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Code Editor Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-code-editor></po-code-editor>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-code-editor-basic`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:`java`,value:`java`},{label:`yaml`,value:`yaml`},{label:`typescript`,value:`typescript`}];propertiesOptions=[{value:`readonly`,label:`Read Only`}];themeOptions=[{label:`vs`,value:`vs`},{label:`vs-dark`,value:`vs-dark`},{label:`hc-black`,value:`hc-black`}];ngOnInit(){this.restore()}restore(){this.language=``,this.theme=``,this.properties=[],this.codeEditor=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-labs`]],standalone:!1,decls:12,vars:10,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-height`,`300`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-language`,`p-readonly`,`p-theme`],[`name`,`language`,`p-label`,`Language`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let g=Vx();Ml(0,`div`,1)(1,`po-code-editor`,2),Mw(`ngModelChange`,function(m){return Qy(g),yN(a.codeEditor,m)||(a.codeEditor=m),Jy(m)}),lg(),f0(),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,1)(6,`po-select`,3),Mw(`ngModelChange`,function(m){return Qy(g),yN(a.language,m)||(a.language=m),Jy(m)}),lg(),f0(),Ml(7,`po-select`,4),Mw(`ngModelChange`,function(m){return Qy(g),yN(a.theme,m)||(a.theme=m),Jy(m)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-checkbox-group`,5),Mw(`ngModelChange`,function(m){return Qy(g),yN(a.properties,m)||(a.properties=m),Jy(m)}),lg(),f0(),lg(),Ml(10,`div`,1)(11,`po-button`,6),ht(`p-click`,function(){return a.restore()}),lg()()()}i&2&&(Up(),Tw(`ngModel`,a.codeEditor),cw(`p-language`,a.language)(`p-readonly`,a.properties.includes(`readonly`))(`p-theme`,a.theme),p0(),Up(5),Tw(`ngModel`,a.language),cw(`p-options`,a.languageOptions),p0(),Up(),Tw(`ngModel`,a.theme),cw(`p-options`,a.themeOptions),p0(),Up(2),Tw(`ngModel`,a.properties),cw(`p-options`,a.propertiesOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,Tbe,ia],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Code Editor Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-code-editor
    class="po-md-12"
    [(ngModel)]="codeEditor"
    p-height="300"
    [p-language]="language"
    [p-readonly]="properties.includes('readonly')"
    [p-theme]="theme"
  >
  </po-code-editor>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="language" [(ngModel)]="language" p-label="Language" [p-options]="languageOptions">
    </po-select>

    <po-select class="po-md-6" name="theme" [(ngModel)]="theme" p-label="Theme" [p-options]="themeOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-code-editor-labs',
  templateUrl: './sample-po-code-editor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorLabsComponent implements OnInit {
  codeEditor: string;
  language: string;
  properties: Array<string>;
  theme: string;

  public readonly languageOptions: Array<PoSelectOption> = [
    { label: 'java', value: 'java' },
    { label: 'yaml', value: 'yaml' },
    { label: 'typescript', value: 'typescript' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'readonly', label: 'Read Only' }];

  public readonly themeOptions: Array<PoSelectOption> = [
    { label: 'vs', value: 'vs' },
    { label: 'vs-dark', value: 'vs-dark' },
    { label: 'hc-black', value: 'hc-black' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.language = '';
    this.theme = '';
    this.properties = [];
    this.codeEditor = '';
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-code-editor-labs`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{code=[`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}`,`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
`];static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-diff`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`typescript`,`p-show-diff`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`]],template:function(i,a){i&1&&(Ml(0,`div`,0)(1,`po-code-editor`,1),Mw(`ngModelChange`,function(y){return yN(a.code,y)||(a.code=y),y}),lg(),f0(),lg()),i&2&&(Up(),Tw(`ngModel`,a.code),p0())},dependencies:[wY,Vk,ia],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-diff-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Code Editor - Diff`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-diff',
  templateUrl: './sample-po-code-editor-diff.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorDiffComponent {
  code = [
    \`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}\`,
    \`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
\`
  ];
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-code-editor-diff`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,xe,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ae],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-terraform`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`terraform`,1,`po-md-12`]],template:function(i,a){i&1&&(Ml(0,`div`,0),ql(1,`po-code-editor`,1),lg())},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-terraform-view`]],standalone:!1,decls:32,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Code Editor - Terraform`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
import { PoCodeEditorRegisterable } from '@po-ui/ng-code-editor';

declare const monaco: any;

/** Defini\xE7\xE3o da lista de sugest\xF5es para o autocomplete.
 *
 * > A fun\xE7\xE3o \`provideCompletionItems\` precisa ser exportada para ser compat\xEDvel com AOT.
 *
 * Documenta\xE7\xE3o: https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
 */
export function provideCompletionItems() {
  const suggestions: Array<PoCodeEditorRegisterableSuggestion> = [
    {
      label: 'terraform',
      insertText: '#terraform language'
    },
    {
      label: 'server',
      insertText: 'server \${1:ip}'
    }
  ];

  return { suggestions };
}

/** Definindo propriedades de uma nova sintaxe. */
export const customRegister: PoCodeEditorRegisterable = {
  language: 'terraform',
  options: {
    ignoreCase: false,
    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],
    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],
    symbols: new RegExp('[=><!~?:&|+\\\\-*\\\\/\\\\^%]+'),
    escapes: new RegExp(\`\\\\\\\\(?:[abfnrtv\\\\\\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})\`),
    tokenizer: {
      root: [
        [\`[a-z_$][\\\\w$]*\`, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
        { include: '@whitespace' },
        [\`\\\\d*\\\\.\\\\d+([eE][\\\\-+]?\\\\d+)?\`, 'number.float'],
        [\`0[x][0-9a-fA-F]+\`, 'number.hex'],
        [\`\\\\d+\`, 'number'],
        [\`[;,.]\`, 'delimiter'],
        [\`\\"([^\\"\\\\\\\\]|\\\\\\\\.)*$\`, 'string.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@open', next: '@string' }],
        [\`'[^\\\\\\\\']'\`, 'string'],
        [\`'\`, 'string.invalid']
      ],
      comment: [
        [\`[^\\\\/*]+\`, 'comment'],
        [\`[\\\\/*]\`, 'comment'],
        [\`[\\\\#.*]\`, 'comment']
      ],
      string: [
        [\`[^\\\\\\\\\\"\\\\$]+\`, 'string'],
        [\`\\\\$\`, 'string.interpolated', '@interpolated'],
        [\`\\\\\\\\.\`, 'string.escape.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@close', next: '@pop' }]
      ],
      whitespace: [
        [\`[ \\\\t\\\\r\\\\n]+\`, 'white'],
        [\`\\\\/\\\\/.*$\`, 'comment'],
        [\`\\\\#.*$\`, 'comment']
      ],
      interpolated: [
        [\`[{]\`, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
        ['', '', '@pop']
      ]
    }
  },
  suggestions: { provideCompletionItems: provideCompletionItems }
};
`),lg(),Ml(25,`label`,6),mN(26,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts`),lg(),Ml(27,`pre`,9),mN(28,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com forRegister.
 */

// import { NgModule } from '@angular/core';
// import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
//
//
// @NgModule({
//   imports: [
//     PoModule,
//     PoCodeEditorModule.forRegister(customRegister)
//   ],
//   declarations: [
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoCodeEditorRegisterModule { }
`),lg()()()()(),Ml(29,`div`,10),ql(30,`sample-po-code-editor-terraform`),lg(),ql(31,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{language=`html`;suggestions=[{label:`po`,insertText:`PO UI`},{label:`ng`,insertText:`Angular`},{label:`po-btn`,insertText:'<po-button p-label="${1:label}"></po-button>'},{label:`po-inp`,insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-suggestion`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-suggestions`,`p-language`]],template:function(i,a){i&1&&ql(0,`po-code-editor`,0),i&2&&cw(`p-suggestions`,a.suggestions)(`p-language`,a.language)},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-suggestion-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Code Editor Suggestion`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-suggestion',
  templateUrl: './sample-po-code-editor-suggestion.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorSuggestionComponent {
  language = 'html';
  suggestions = [
    { label: 'po', insertText: 'PO UI' },
    { label: 'ng', insertText: 'Angular' },
    { label: 'po-btn', insertText: '<po-button p-label="\${1:label}"></po-button>' },
    { label: 'po-inp', insertText: '<po-input name="\${1:name}" [(ngModel)]="\${2:model}"></po-input>' }
  ];
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-code-editor-suggestion`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Me,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-doc`]],standalone:!1,decls:297,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-shell`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://microsoft.github.io/monaco-editor/`],[`href`,`https://po-ui.io/documentation/po-code-editor-register?view=doc`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCodeEditorRegisterableSuggestion>`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(i,a){i&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoCodeEditorModule } from '@po-ui/ng-code-editor';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-code-editor.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoCodeEditorComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O `),Ml(15,`code`),mN(16,`po-code-editor`),lg(),mN(17,` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.`),lg(),Ml(18,`p`),mN(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),lg(),Ml(20,`p`),mN(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),lg(),Ml(22,`p`),mN(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),lg(),Ml(24,`h4`),mN(25,`Adicionando o pacote @po-ui/ng-code-editor`),lg(),Ml(26,`p`),mN(27,`Para instalar o pacote `),Ml(28,`code`),mN(29,`po-code-editor`),lg(),mN(30,` em sua aplicação execute:`),lg(),Ml(31,`pre`)(32,`code`,6),mN(33,"`ng add @po-ui/ng-code-editor`\n"),lg()(),Ml(34,`p`),mN(35,`O comando `),Ml(36,`code`),mN(37,`ng add`),lg(),mN(38,` do `),Ml(39,`code`),mN(40,`Angular CLI`),lg(),mN(41,`:`),lg(),Ml(42,`ul`)(43,`li`),mN(44,`inclui o `),Ml(45,`code`),mN(46,`po-code-editor`),lg(),mN(47,` no seu projeto;`),lg(),Ml(48,`li`),mN(49,`adiciona o módulo `),Ml(50,`code`),mN(51,`PoCodeEditorModule`),lg(),mN(52,`:;`),lg()(),Ml(53,`pre`)(54,`code`),mN(55,`// app.module.ts
...
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
...
@NgModule({
  imports: [
    ...
    PoModule,
    PoCodeEditorModule
  ],
  ...
})
export class AppModule { }
`),lg()(),Ml(56,`ul`)(57,`li`),mN(58,`adiciona o tema PO UI e também o `),Ml(59,`em`),mN(60,`asset`),lg(),mN(61,` do Monaco no arquivo `),Ml(62,`code`),mN(63,`angular.json`),lg(),mN(64,`, conforme abaixo:`),lg()(),Ml(65,`pre`),Xy(),mN(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Ky(),lg()(),Ml(67,`div`,7)(68,`h4`,8),mN(69,`Seletor`),lg(),Ml(70,`pre`,9),mN(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),lg()(),Ml(72,`h4`,10),mN(73,`Propriedades`),lg(),Ml(74,`table`,11)(75,`tr`,12)(76,`th`,13),mN(77,`Nome`),lg(),Ml(78,`th`,13),mN(79,`Tipo`),lg(),Ml(80,`th`,13),mN(81,`Padrão`),lg(),Ml(82,`th`,13),mN(83,`Descrição`),lg()(),Ml(84,`tr`,14)(85,`td`,15)(86,`div`,16)(87,`span`,17),mN(88,` p-height`),ql(89,`br`),lg()()(),Ml(90,`td`,18)(91,`code`,19),mN(92,`string`),lg()(),Ml(93,`td`,20),mN(94,`-`),lg(),Ml(95,`td`,21)(96,`em`)(97,`strong`),mN(98,`(opcional)`),lg()(),Ml(99,`p`),mN(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),lg()()(),Ml(101,`tr`,14)(102,`td`,15)(103,`div`,16)(104,`span`,17),mN(105,` p-language`),ql(106,`br`),lg()()(),Ml(107,`td`,18)(108,`code`,19),mN(109,`string`),lg()(),Ml(110,`td`,20)(111,`p`)(112,`code`),mN(113,`plainText`),lg()()(),Ml(114,`td`,21)(115,`em`)(116,`strong`),mN(117,`(opcional)`),lg()(),Ml(118,`p`),mN(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Ml(120,`a`,22)(121,`strong`),mN(122,`Monaco Editor`),lg()(),mN(123,`.`),lg(),Ml(124,`p`),mN(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Ml(126,`a`,23)(127,`strong`),mN(128,`po-code-editor-register`),lg()(),mN(129,`.`),lg()()(),Ml(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),mN(134,` p-readonly`),ql(135,`br`),lg()()(),Ml(136,`td`,18)(137,`code`,24),mN(138,`boolean`),lg()(),Ml(139,`td`,20)(140,`p`)(141,`code`),mN(142,`false`),lg()()(),Ml(143,`td`,21)(144,`em`)(145,`strong`),mN(146,`(opcional)`),lg()(),Ml(147,`p`),mN(148,`Indica se o editor será aberto em modo de leitura.`),lg(),Ml(149,`p`),mN(150,`Neste caso, não é possível editar o código inserido.`),lg(),Ml(151,`p`),mN(152,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),lg()()(),Ml(153,`tr`,14)(154,`td`,15)(155,`div`,16)(156,`span`,17),mN(157,` p-show-diff`),ql(158,`br`),lg()()(),Ml(159,`td`,18)(160,`code`,24),mN(161,`boolean`),lg()(),Ml(162,`td`,20)(163,`p`)(164,`code`),mN(165,`false`),lg()()(),Ml(166,`td`,21)(167,`em`)(168,`strong`),mN(169,`(opcional)`),lg()(),Ml(170,`p`),mN(171,`Indica se o editor será aberto em modo de comparação.`),lg(),Ml(172,`p`),mN(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),lg(),Ml(174,`p`),mN(175,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),lg()()(),Ml(176,`tr`,14)(177,`td`,15)(178,`div`,16)(179,`span`,17),mN(180,` p-suggestions`),ql(181,`br`),lg()()(),Ml(182,`td`,18)(183,`code`,25),mN(184,`Array<PoCodeEditorRegisterableSuggestion>`),lg()(),Ml(185,`td`,20),mN(186,`-`),lg(),Ml(187,`td`,21)(188,`em`)(189,`strong`),mN(190,`(opcional)`),lg()(),Ml(191,`p`),mN(192,`Lista de sugestões usadas pelo autocomplete dentro do editor.`),lg(),Ml(193,`p`),mN(194,`Para visualizar a lista de sugestões use o comando `),Ml(195,`code`),mN(196,`CTRL + SPACE`),lg(),mN(197,`.`),lg(),Ml(198,`p`),mN(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),lg(),Ml(200,`p`),mN(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),lg(),Ml(202,`pre`)(203,`code`),mN(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),lg()(),Ml(205,`p`),mN(206,`Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.`),lg()()(),Ml(207,`tr`,14)(208,`td`,15)(209,`div`,16)(210,`span`,17),mN(211,` p-theme`),ql(212,`br`),lg()()(),Ml(213,`td`,18)(214,`code`,19),mN(215,`string`),lg()(),Ml(216,`td`,20)(217,`p`)(218,`code`),mN(219,`vs`),lg()()(),Ml(220,`td`,21)(221,`em`)(222,`strong`),mN(223,`(opcional)`),lg()(),Ml(224,`p`),mN(225,`Define um tema para o editor.`),lg(),Ml(226,`p`),mN(227,`Temas válidos:`),lg(),Ml(228,`ul`)(229,`li`)(230,`code`),mN(231,`vs-dark`),lg()(),Ml(232,`li`)(233,`code`),mN(234,`vs`),lg()(),Ml(235,`li`)(236,`code`),mN(237,`hc-black`),lg()()(),Ml(238,`p`),mN(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),lg()()()(),Ml(240,`h3`),mN(241,`Interfaces`),lg(),Ml(242,`h4`,26)(243,`code`,5),mN(244,`PoCodeEditorRegisterableSuggestion`),lg()(),Ml(245,`div`,2)(246,`p`),mN(247,`Interface para configuração da lista de sugestão do autocomplete do code editor.`),lg()(),Ml(248,`h4`,10),mN(249,`Propriedades`),lg(),Ml(250,`table`,11)(251,`tr`,12)(252,`th`,13),mN(253,`Nome`),lg(),Ml(254,`th`,13),mN(255,`Tipo`),lg(),Ml(256,`th`,13),mN(257,`Descrição`),lg()(),Ml(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),mN(262,` documentation`),ql(263,`br`),lg()()(),Ml(264,`td`,18)(265,`code`,19),mN(266,`string`),lg()(),Ml(267,`td`,21)(268,`em`)(269,`strong`),mN(270,`(opcional)`),lg()(),Ml(271,`p`),mN(272,`Texto de ajuda que será exibido caso o usuário deseje ver mais informações sobre a sugestão.`),lg()()(),Ml(273,`tr`,14)(274,`td`,15)(275,`div`,16)(276,`span`,17),mN(277,` insertText`),ql(278,`br`),lg()()(),Ml(279,`td`,18)(280,`code`,19),mN(281,`string`),lg()(),Ml(282,`td`,21)(283,`p`),mN(284,`Texto que será inserido no editor ao selecionar a sugestão exibida pelo autocomplete.`),lg()()(),Ml(285,`tr`,14)(286,`td`,15)(287,`div`,16)(288,`span`,17),mN(289,` label`),ql(290,`br`),lg()()(),Ml(291,`td`,18)(292,`code`,19),mN(293,`string`),lg()(),Ml(294,`td`,21)(295,`p`),mN(296,`Texto que será exibido na lista de sugestões.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Code Editor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),ql(3,`sample-po-code-editor-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),ql(5,`sample-po-code-editor-basic-view`)(6,`sample-po-code-editor-labs-view`)(7,`sample-po-code-editor-diff-view`)(8,`sample-po-code-editor-terraform-view`)(9,`sample-po-code-editor-suggestion-view`),lg()()()),i&2&&(cw(`p-actions`,a.actions),Up(2),cw(`p-active`,a.activeTab===`doc`),Up(2),cw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[V8e,SCe,ECe,oe,ie,re,de,pe,me],encapsulation:2,changeDetection:1})}return n})()}];var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he({type:n});static ɵinj=ue$1({imports:[NL.forChild(Ve),NL]})}return n})();var st=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he({type:n});static ɵinj=ue$1({imports:[ar,ue]})}return n})();export{st as DocPoCodeEditorModule};