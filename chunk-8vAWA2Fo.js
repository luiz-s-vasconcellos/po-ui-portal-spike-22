import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mi as m_,Pi as mt,Ri as nu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,bi as ib,dn as moe,dt as Sae,hi as g_,i as _a,ir as EF,ji as mO,l as kn,mn as ni,pa as wg,r as Ta,ta as ue$1,ua as wK,un as m5,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&nu(0,`po-code-editor`)},dependencies:[kn],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Code Editor Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-code-editor></po-code-editor>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-code-editor-basic`),wg(),nu(23,`hr`)),i&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ce,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:`java`,value:`java`},{label:`yaml`,value:`yaml`},{label:`typescript`,value:`typescript`}];propertiesOptions=[{value:`readonly`,label:`Read Only`}];themeOptions=[{label:`vs`,value:`vs`},{label:`vs-dark`,value:`vs-dark`},{label:`hc-black`,value:`hc-black`}];ngOnInit(){this.restore()}restore(){this.language=``,this.theme=``,this.properties=[],this.codeEditor=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-labs`]],standalone:!1,decls:12,vars:10,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-height`,`300`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-language`,`p-readonly`,`p-theme`],[`name`,`language`,`p-label`,`Language`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let g=Sx();jc(0,`div`,1)(1,`po-code-editor`,2),JN(),ob(`ngModelChange`,function(m){return y_(g),sO(a.codeEditor,m)||(a.codeEditor=m),v_(m)}),wg()(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-select`,3),JN(),ob(`ngModelChange`,function(m){return y_(g),sO(a.language,m)||(a.language=m),v_(m)}),wg(),jc(7,`po-select`,4),JN(),ob(`ngModelChange`,function(m){return y_(g),sO(a.theme,m)||(a.theme=m),v_(m)}),wg()(),jc(8,`div`,1)(9,`po-checkbox-group`,5),JN(),ob(`ngModelChange`,function(m){return y_(g),sO(a.properties,m)||(a.properties=m),v_(m)}),wg()(),jc(10,`div`,1)(11,`po-button`,6),mt(`p-click`,function(){return a.restore()}),wg()()()}i&2&&(rg(),ib(`ngModel`,a.codeEditor),jE(`p-language`,a.language)(`p-readonly`,a.properties.includes(`readonly`))(`p-theme`,a.theme),t0(),rg(5),ib(`ngModel`,a.language),jE(`p-options`,a.languageOptions),t0(),rg(),ib(`ngModel`,a.theme),jE(`p-options`,a.themeOptions),t0(),rg(2),ib(`ngModel`,a.properties),jE(`p-options`,a.propertiesOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,moe,kn],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Code Editor Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-code-editor-labs`),wg(),nu(23,`hr`)),i&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,be,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{code=[`class Calc {
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
`];static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-diff`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`typescript`,`p-show-diff`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`]],template:function(i,a){i&1&&(jc(0,`div`,0)(1,`po-code-editor`,1),JN(),ob(`ngModelChange`,function(y){return sO(a.code,y)||(a.code=y),y}),wg()()),i&2&&(rg(),ib(`ngModel`,a.code),t0())},dependencies:[CK,TF,kn],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-diff-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Code Editor - Diff`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-code-editor-diff`),wg(),nu(23,`hr`)),i&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,xe,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ae],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-terraform`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`terraform`,1,`po-md-12`]],template:function(i,a){i&1&&(jc(0,`div`,0),nu(1,`po-code-editor`,1),wg())},dependencies:[kn],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-terraform-view`]],standalone:!1,decls:32,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Code Editor - Terraform`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),wg(),jc(21,`label`,6),iO(22,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts`),wg(),jc(23,`pre`,9),iO(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),wg(),jc(25,`label`,6),iO(26,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts`),wg(),jc(27,`pre`,9),iO(28,`/**
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
`),wg()()()()(),jc(29,`div`,10),nu(30,`sample-po-code-editor-terraform`),wg(),nu(31,`hr`)),i&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,le],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{language=`html`;suggestions=[{label:`po`,insertText:`PO UI`},{label:`ng`,insertText:`Angular`},{label:`po-btn`,insertText:'<po-button p-label="${1:label}"></po-button>'},{label:`po-inp`,insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-suggestion`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-suggestions`,`p-language`]],template:function(i,a){i&1&&nu(0,`po-code-editor`,0),i&2&&jE(`p-suggestions`,a.suggestions)(`p-language`,a.language)},dependencies:[kn],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-suggestion-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Code Editor Suggestion`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-code-editor-suggestion`),wg(),nu(23,`hr`)),i&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-code-editor-doc`]],standalone:!1,decls:297,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-shell`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://microsoft.github.io/monaco-editor/`],[`href`,`https://po-ui.io/documentation/po-code-editor-register?view=doc`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCodeEditorRegisterableSuggestion>`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(i,a){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoCodeEditorModule } from '@po-ui/ng-code-editor';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-code-editor.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoCodeEditorComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O `),jc(15,`code`),iO(16,`po-code-editor`),wg(),iO(17,` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.`),wg(),jc(18,`p`),iO(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),wg(),jc(20,`p`),iO(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),wg(),jc(22,`p`),iO(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),wg(),jc(24,`h4`),iO(25,`Adicionando o pacote @po-ui/ng-code-editor`),wg(),jc(26,`p`),iO(27,`Para instalar o pacote `),jc(28,`code`),iO(29,`po-code-editor`),wg(),iO(30,` em sua aplicação execute:`),wg(),jc(31,`pre`)(32,`code`,6),iO(33,"`ng add @po-ui/ng-code-editor`\n"),wg()(),jc(34,`p`),iO(35,`O comando `),jc(36,`code`),iO(37,`ng add`),wg(),iO(38,` do `),jc(39,`code`),iO(40,`Angular CLI`),wg(),iO(41,`:`),wg(),jc(42,`ul`)(43,`li`),iO(44,`inclui o `),jc(45,`code`),iO(46,`po-code-editor`),wg(),iO(47,` no seu projeto;`),wg(),jc(48,`li`),iO(49,`adiciona o módulo `),jc(50,`code`),iO(51,`PoCodeEditorModule`),wg(),iO(52,`:;`),wg()(),jc(53,`pre`)(54,`code`),iO(55,`// app.module.ts
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
`),wg()(),jc(56,`ul`)(57,`li`),iO(58,`adiciona o tema PO UI e também o `),jc(59,`em`),iO(60,`asset`),wg(),iO(61,` do Monaco no arquivo `),jc(62,`code`),iO(63,`angular.json`),wg(),iO(64,`, conforme abaixo:`),wg()(),jc(65,`pre`),m_(),iO(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),g_(),wg()(),jc(67,`div`,7)(68,`h4`,8),iO(69,`Seletor`),wg(),jc(70,`pre`,9),iO(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),wg()(),jc(72,`h4`,10),iO(73,`Propriedades`),wg(),jc(74,`table`,11)(75,`tr`,12)(76,`th`,13),iO(77,`Nome`),wg(),jc(78,`th`,13),iO(79,`Tipo`),wg(),jc(80,`th`,13),iO(81,`Padrão`),wg(),jc(82,`th`,13),iO(83,`Descrição`),wg()(),jc(84,`tr`,14)(85,`td`,15)(86,`div`,16)(87,`span`,17),iO(88,` p-height`),nu(89,`br`),wg()()(),jc(90,`td`,18)(91,`code`,19),iO(92,`string`),wg()(),jc(93,`td`,20),iO(94,`-`),wg(),jc(95,`td`,21)(96,`em`)(97,`strong`),iO(98,`(opcional)`),wg()(),jc(99,`p`),iO(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),wg()()(),jc(101,`tr`,14)(102,`td`,15)(103,`div`,16)(104,`span`,17),iO(105,` p-language`),nu(106,`br`),wg()()(),jc(107,`td`,18)(108,`code`,19),iO(109,`string`),wg()(),jc(110,`td`,20)(111,`p`)(112,`code`),iO(113,`plainText`),wg()()(),jc(114,`td`,21)(115,`em`)(116,`strong`),iO(117,`(opcional)`),wg()(),jc(118,`p`),iO(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),jc(120,`a`,22)(121,`strong`),iO(122,`Monaco Editor`),wg()(),iO(123,`.`),wg(),jc(124,`p`),iO(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),jc(126,`a`,23)(127,`strong`),iO(128,`po-code-editor-register`),wg()(),iO(129,`.`),wg()()(),jc(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),iO(134,` p-readonly`),nu(135,`br`),wg()()(),jc(136,`td`,18)(137,`code`,24),iO(138,`boolean`),wg()(),jc(139,`td`,20)(140,`p`)(141,`code`),iO(142,`false`),wg()()(),jc(143,`td`,21)(144,`em`)(145,`strong`),iO(146,`(opcional)`),wg()(),jc(147,`p`),iO(148,`Indica se o editor será aberto em modo de leitura.`),wg(),jc(149,`p`),iO(150,`Neste caso, não é possível editar o código inserido.`),wg(),jc(151,`p`),iO(152,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),wg()()(),jc(153,`tr`,14)(154,`td`,15)(155,`div`,16)(156,`span`,17),iO(157,` p-show-diff`),nu(158,`br`),wg()()(),jc(159,`td`,18)(160,`code`,24),iO(161,`boolean`),wg()(),jc(162,`td`,20)(163,`p`)(164,`code`),iO(165,`false`),wg()()(),jc(166,`td`,21)(167,`em`)(168,`strong`),iO(169,`(opcional)`),wg()(),jc(170,`p`),iO(171,`Indica se o editor será aberto em modo de comparação.`),wg(),jc(172,`p`),iO(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),wg(),jc(174,`p`),iO(175,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),wg()()(),jc(176,`tr`,14)(177,`td`,15)(178,`div`,16)(179,`span`,17),iO(180,` p-suggestions`),nu(181,`br`),wg()()(),jc(182,`td`,18)(183,`code`,25),iO(184,`Array<PoCodeEditorRegisterableSuggestion>`),wg()(),jc(185,`td`,20),iO(186,`-`),wg(),jc(187,`td`,21)(188,`em`)(189,`strong`),iO(190,`(opcional)`),wg()(),jc(191,`p`),iO(192,`Lista de sugestões usadas pelo autocomplete dentro do editor.`),wg(),jc(193,`p`),iO(194,`Para visualizar a lista de sugestões use o comando `),jc(195,`code`),iO(196,`CTRL + SPACE`),wg(),iO(197,`.`),wg(),jc(198,`p`),iO(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),wg(),jc(200,`p`),iO(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),wg(),jc(202,`pre`)(203,`code`),iO(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),wg()(),jc(205,`p`),iO(206,`Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.`),wg()()(),jc(207,`tr`,14)(208,`td`,15)(209,`div`,16)(210,`span`,17),iO(211,` p-theme`),nu(212,`br`),wg()()(),jc(213,`td`,18)(214,`code`,19),iO(215,`string`),wg()(),jc(216,`td`,20)(217,`p`)(218,`code`),iO(219,`vs`),wg()()(),jc(220,`td`,21)(221,`em`)(222,`strong`),iO(223,`(opcional)`),wg()(),jc(224,`p`),iO(225,`Define um tema para o editor.`),wg(),jc(226,`p`),iO(227,`Temas válidos:`),wg(),jc(228,`ul`)(229,`li`)(230,`code`),iO(231,`vs-dark`),wg()(),jc(232,`li`)(233,`code`),iO(234,`vs`),wg()(),jc(235,`li`)(236,`code`),iO(237,`hc-black`),wg()()(),jc(238,`p`),iO(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),wg()()()(),jc(240,`h3`),iO(241,`Interfaces`),wg(),jc(242,`h4`,26)(243,`code`,5),iO(244,`PoCodeEditorRegisterableSuggestion`),wg()(),jc(245,`div`,2)(246,`p`),iO(247,`Interface para configuração da lista de sugestão do autocomplete do code editor.`),wg()(),jc(248,`h4`,10),iO(249,`Propriedades`),wg(),jc(250,`table`,11)(251,`tr`,12)(252,`th`,13),iO(253,`Nome`),wg(),jc(254,`th`,13),iO(255,`Tipo`),wg(),jc(256,`th`,13),iO(257,`Descrição`),wg()(),jc(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),iO(262,` documentation`),nu(263,`br`),wg()()(),jc(264,`td`,18)(265,`code`,19),iO(266,`string`),wg()(),jc(267,`td`,21)(268,`em`)(269,`strong`),iO(270,`(opcional)`),wg()(),jc(271,`p`),iO(272,`Texto de ajuda que será exibido caso o usuário deseje ver mais informações sobre a sugestão.`),wg()()(),jc(273,`tr`,14)(274,`td`,15)(275,`div`,16)(276,`span`,17),iO(277,` insertText`),nu(278,`br`),wg()()(),jc(279,`td`,18)(280,`code`,19),iO(281,`string`),wg()(),jc(282,`td`,21)(283,`p`),iO(284,`Texto que será inserido no editor ao selecionar a sugestão exibida pelo autocomplete.`),wg()()(),jc(285,`tr`,14)(286,`td`,15)(287,`div`,16)(288,`span`,17),iO(289,` label`),nu(290,`br`),wg()()(),jc(291,`td`,18)(292,`code`,19),iO(293,`string`),wg()(),jc(294,`td`,21)(295,`p`),iO(296,`Texto que será exibido na lista de sugestões.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Code Editor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(3,`sample-po-code-editor-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`web`)}),nu(5,`sample-po-code-editor-basic-view`)(6,`sample-po-code-editor-labs-view`)(7,`sample-po-code-editor-diff-view`)(8,`sample-po-code-editor-terraform-view`)(9,`sample-po-code-editor-suggestion-view`),wg()()()),i&2&&(jE(`p-actions`,a.actions),rg(2),jE(`p-active`,a.activeTab===`doc`),rg(2),jE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[Kze,bae,Sae,oe,ie,re,de,pe,me],encapsulation:2,changeDetection:1})}return n})()}];var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe$1({type:n});static ɵinj=ue$1({imports:[C1.forChild(Ve),C1]})}return n})();var st=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe$1({type:n});static ɵinj=ue$1({imports:[Ta,ue]})}return n})();export{st as DocPoCodeEditorModule};