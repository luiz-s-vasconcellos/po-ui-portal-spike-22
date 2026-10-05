import{$i as pt,Br as Qv,Ca as zO,Cr as Kc,Er as LP,Gi as mg,Ji as p0,Jr as TE,Oi as he,Ri as kL,Rt as cae,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Zn as C9,_a as wn,ca as ue$1,cn as noe,fr as Hp,gi as e_,i as _a,in as mae,ir as E,l as kn,mn as rb,ni as Xv,nr as DN,oi as aN,on as n4,pa as vN,qn as BP,r as Ta,si as b9,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,yr as Jv,zr as Qn}from"./main-DRZDQSOK.js";var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&Kc(0,`po-code-editor`)},dependencies:[kn],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Code Editor Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-code-editor></po-code-editor>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-code-editor-basic`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,a.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:`java`,value:`java`},{label:`yaml`,value:`yaml`},{label:`typescript`,value:`typescript`}];propertiesOptions=[{value:`readonly`,label:`Read Only`}];themeOptions=[{label:`vs`,value:`vs`},{label:`vs-dark`,value:`vs-dark`},{label:`hc-black`,value:`hc-black`}];ngOnInit(){this.restore()}restore(){this.language=``,this.theme=``,this.properties=[],this.codeEditor=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-labs`]],standalone:!1,decls:12,vars:10,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-height`,`300`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-language`,`p-readonly`,`p-theme`],[`name`,`language`,`p-label`,`Language`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let g=Bx();Ac(0,`div`,1)(1,`po-code-editor`,2),RE(`ngModelChange`,function(m){return Jv(g),DN(a.codeEditor,m)||(a.codeEditor=m),e_(m)}),ug(),p0(),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,1)(6,`po-select`,3),RE(`ngModelChange`,function(m){return Jv(g),DN(a.language,m)||(a.language=m),e_(m)}),ug(),p0(),Ac(7,`po-select`,4),RE(`ngModelChange`,function(m){return Jv(g),DN(a.theme,m)||(a.theme=m),e_(m)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-checkbox-group`,5),RE(`ngModelChange`,function(m){return Jv(g),DN(a.properties,m)||(a.properties=m),e_(m)}),ug(),p0(),ug(),Ac(10,`div`,1)(11,`po-button`,6),pt(`p-click`,function(){return a.restore()}),ug()()()}i&2&&(Hp(),TE(`ngModel`,a.codeEditor),cE(`p-language`,a.language)(`p-readonly`,a.properties.includes(`readonly`))(`p-theme`,a.theme),m0(),Hp(5),TE(`ngModel`,a.language),cE(`p-options`,a.languageOptions),m0(),Hp(),TE(`ngModel`,a.theme),cE(`p-options`,a.themeOptions),m0(),Hp(2),TE(`ngModel`,a.properties),cE(`p-options`,a.propertiesOptions),m0())},dependencies:[b9,D9,C9,BP,LP,oi,rb,n4,noe,kn],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Code Editor Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-code-editor-labs`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,a.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{code=[`class Calc {
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
`];static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-diff`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`typescript`,`p-show-diff`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`]],template:function(i,a){i&1&&(Ac(0,`div`,0)(1,`po-code-editor`,1),RE(`ngModelChange`,function(y){return DN(a.code,y)||(a.code=y),y}),ug(),p0(),ug()),i&2&&(Hp(),TE(`ngModel`,a.code),m0())},dependencies:[D9,BP,kn],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-diff-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Code Editor - Diff`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-code-editor-diff`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,xe,a.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ae],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-terraform`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`terraform`,1,`po-md-12`]],template:function(i,a){i&1&&(Ac(0,`div`,0),Kc(1,`po-code-editor`,1),ug())},dependencies:[kn],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-terraform-view`]],standalone:!1,decls:32,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Code Editor - Terraform`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),ug(),Ac(25,`label`,6),vN(26,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts`),ug(),Ac(27,`pre`,9),vN(28,`/**
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
`),ug()()()()(),Ac(29,`div`,10),Kc(30,`sample-po-code-editor-terraform`),ug(),Kc(31,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,a.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,le],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{language=`html`;suggestions=[{label:`po`,insertText:`PO UI`},{label:`ng`,insertText:`Angular`},{label:`po-btn`,insertText:'<po-button p-label="${1:label}"></po-button>'},{label:`po-inp`,insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-suggestion`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-suggestions`,`p-language`]],template:function(i,a){i&1&&Kc(0,`po-code-editor`,0),i&2&&cE(`p-suggestions`,a.suggestions)(`p-language`,a.language)},dependencies:[kn],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-suggestion-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Code Editor Suggestion`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-code-editor-suggestion`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Me,a.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,se],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-code-editor-doc`]],standalone:!1,decls:297,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-shell`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://microsoft.github.io/monaco-editor/`],[`href`,`https://po-ui.io/documentation/po-code-editor-register?view=doc`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCodeEditorRegisterableSuggestion>`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(i,a){i&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoCodeEditorModule } from '@po-ui/ng-code-editor';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-code-editor.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoCodeEditorComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O `),Ac(15,`code`),vN(16,`po-code-editor`),ug(),vN(17,` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.`),ug(),Ac(18,`p`),vN(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),ug(),Ac(20,`p`),vN(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),ug(),Ac(22,`p`),vN(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),ug(),Ac(24,`h4`),vN(25,`Adicionando o pacote @po-ui/ng-code-editor`),ug(),Ac(26,`p`),vN(27,`Para instalar o pacote `),Ac(28,`code`),vN(29,`po-code-editor`),ug(),vN(30,` em sua aplicação execute:`),ug(),Ac(31,`pre`)(32,`code`,6),vN(33,"`ng add @po-ui/ng-code-editor`\n"),ug()(),Ac(34,`p`),vN(35,`O comando `),Ac(36,`code`),vN(37,`ng add`),ug(),vN(38,` do `),Ac(39,`code`),vN(40,`Angular CLI`),ug(),vN(41,`:`),ug(),Ac(42,`ul`)(43,`li`),vN(44,`inclui o `),Ac(45,`code`),vN(46,`po-code-editor`),ug(),vN(47,` no seu projeto;`),ug(),Ac(48,`li`),vN(49,`adiciona o módulo `),Ac(50,`code`),vN(51,`PoCodeEditorModule`),ug(),vN(52,`:;`),ug()(),Ac(53,`pre`)(54,`code`),vN(55,`// app.module.ts
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
`),ug()(),Ac(56,`ul`)(57,`li`),vN(58,`adiciona o tema PO UI e também o `),Ac(59,`em`),vN(60,`asset`),ug(),vN(61,` do Monaco no arquivo `),Ac(62,`code`),vN(63,`angular.json`),ug(),vN(64,`, conforme abaixo:`),ug()(),Ac(65,`pre`),Qv(),vN(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Xv(),ug()(),Ac(67,`div`,7)(68,`h4`,8),vN(69,`Seletor`),ug(),Ac(70,`pre`,9),vN(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),ug()(),Ac(72,`h4`,10),vN(73,`Propriedades`),ug(),Ac(74,`table`,11)(75,`tr`,12)(76,`th`,13),vN(77,`Nome`),ug(),Ac(78,`th`,13),vN(79,`Tipo`),ug(),Ac(80,`th`,13),vN(81,`Padrão`),ug(),Ac(82,`th`,13),vN(83,`Descrição`),ug()(),Ac(84,`tr`,14)(85,`td`,15)(86,`div`,16)(87,`span`,17),vN(88,` p-height`),Kc(89,`br`),ug()()(),Ac(90,`td`,18)(91,`code`,19),vN(92,`string`),ug()(),Ac(93,`td`,20),vN(94,`-`),ug(),Ac(95,`td`,21)(96,`em`)(97,`strong`),vN(98,`(opcional)`),ug()(),Ac(99,`p`),vN(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),ug()()(),Ac(101,`tr`,14)(102,`td`,15)(103,`div`,16)(104,`span`,17),vN(105,` p-language`),Kc(106,`br`),ug()()(),Ac(107,`td`,18)(108,`code`,19),vN(109,`string`),ug()(),Ac(110,`td`,20)(111,`p`)(112,`code`),vN(113,`plainText`),ug()()(),Ac(114,`td`,21)(115,`em`)(116,`strong`),vN(117,`(opcional)`),ug()(),Ac(118,`p`),vN(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Ac(120,`a`,22)(121,`strong`),vN(122,`Monaco Editor`),ug()(),vN(123,`.`),ug(),Ac(124,`p`),vN(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Ac(126,`a`,23)(127,`strong`),vN(128,`po-code-editor-register`),ug()(),vN(129,`.`),ug()()(),Ac(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),vN(134,` p-readonly`),Kc(135,`br`),ug()()(),Ac(136,`td`,18)(137,`code`,24),vN(138,`boolean`),ug()(),Ac(139,`td`,20)(140,`p`)(141,`code`),vN(142,`false`),ug()()(),Ac(143,`td`,21)(144,`em`)(145,`strong`),vN(146,`(opcional)`),ug()(),Ac(147,`p`),vN(148,`Indica se o editor será aberto em modo de leitura.`),ug(),Ac(149,`p`),vN(150,`Neste caso, não é possível editar o código inserido.`),ug(),Ac(151,`p`),vN(152,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),ug()()(),Ac(153,`tr`,14)(154,`td`,15)(155,`div`,16)(156,`span`,17),vN(157,` p-show-diff`),Kc(158,`br`),ug()()(),Ac(159,`td`,18)(160,`code`,24),vN(161,`boolean`),ug()(),Ac(162,`td`,20)(163,`p`)(164,`code`),vN(165,`false`),ug()()(),Ac(166,`td`,21)(167,`em`)(168,`strong`),vN(169,`(opcional)`),ug()(),Ac(170,`p`),vN(171,`Indica se o editor será aberto em modo de comparação.`),ug(),Ac(172,`p`),vN(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),ug(),Ac(174,`p`),vN(175,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),ug()()(),Ac(176,`tr`,14)(177,`td`,15)(178,`div`,16)(179,`span`,17),vN(180,` p-suggestions`),Kc(181,`br`),ug()()(),Ac(182,`td`,18)(183,`code`,25),vN(184,`Array<PoCodeEditorRegisterableSuggestion>`),ug()(),Ac(185,`td`,20),vN(186,`-`),ug(),Ac(187,`td`,21)(188,`em`)(189,`strong`),vN(190,`(opcional)`),ug()(),Ac(191,`p`),vN(192,`Lista de sugestões usadas pelo autocomplete dentro do editor.`),ug(),Ac(193,`p`),vN(194,`Para visualizar a lista de sugestões use o comando `),Ac(195,`code`),vN(196,`CTRL + SPACE`),ug(),vN(197,`.`),ug(),Ac(198,`p`),vN(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),ug(),Ac(200,`p`),vN(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),ug(),Ac(202,`pre`)(203,`code`),vN(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),ug()(),Ac(205,`p`),vN(206,`Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.`),ug()()(),Ac(207,`tr`,14)(208,`td`,15)(209,`div`,16)(210,`span`,17),vN(211,` p-theme`),Kc(212,`br`),ug()()(),Ac(213,`td`,18)(214,`code`,19),vN(215,`string`),ug()(),Ac(216,`td`,20)(217,`p`)(218,`code`),vN(219,`vs`),ug()()(),Ac(220,`td`,21)(221,`em`)(222,`strong`),vN(223,`(opcional)`),ug()(),Ac(224,`p`),vN(225,`Define um tema para o editor.`),ug(),Ac(226,`p`),vN(227,`Temas válidos:`),ug(),Ac(228,`ul`)(229,`li`)(230,`code`),vN(231,`vs-dark`),ug()(),Ac(232,`li`)(233,`code`),vN(234,`vs`),ug()(),Ac(235,`li`)(236,`code`),vN(237,`hc-black`),ug()()(),Ac(238,`p`),vN(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),ug()()()(),Ac(240,`h3`),vN(241,`Interfaces`),ug(),Ac(242,`h4`,26)(243,`code`,5),vN(244,`PoCodeEditorRegisterableSuggestion`),ug()(),Ac(245,`div`,2)(246,`p`),vN(247,`Interface para configuração da lista de sugestão do autocomplete do code editor.`),ug()(),Ac(248,`h4`,10),vN(249,`Propriedades`),ug(),Ac(250,`table`,11)(251,`tr`,12)(252,`th`,13),vN(253,`Nome`),ug(),Ac(254,`th`,13),vN(255,`Tipo`),ug(),Ac(256,`th`,13),vN(257,`Descrição`),ug()(),Ac(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),vN(262,` documentation`),Kc(263,`br`),ug()()(),Ac(264,`td`,18)(265,`code`,19),vN(266,`string`),ug()(),Ac(267,`td`,21)(268,`em`)(269,`strong`),vN(270,`(opcional)`),ug()(),Ac(271,`p`),vN(272,`Texto de ajuda que será exibido caso o usuário deseje ver mais informações sobre a sugestão.`),ug()()(),Ac(273,`tr`,14)(274,`td`,15)(275,`div`,16)(276,`span`,17),vN(277,` insertText`),Kc(278,`br`),ug()()(),Ac(279,`td`,18)(280,`code`,19),vN(281,`string`),ug()(),Ac(282,`td`,21)(283,`p`),vN(284,`Texto que será inserido no editor ao selecionar a sugestão exibida pelo autocomplete.`),ug()()(),Ac(285,`tr`,14)(286,`td`,15)(287,`div`,16)(288,`span`,17),vN(289,` label`),Kc(290,`br`),ug()()(),Ac(291,`td`,18)(292,`code`,19),vN(293,`string`),ug()(),Ac(294,`td`,21)(295,`p`),vN(296,`Texto que será exibido na lista de sugestões.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Code Editor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return a.changeTab(`doc`)}),Kc(3,`sample-po-code-editor-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return a.changeTab(`web`)}),Kc(5,`sample-po-code-editor-basic-view`)(6,`sample-po-code-editor-labs-view`)(7,`sample-po-code-editor-diff-view`)(8,`sample-po-code-editor-terraform-view`)(9,`sample-po-code-editor-suggestion-view`),ug()()()),i&2&&(cE(`p-actions`,a.actions),Hp(2),cE(`p-active`,a.activeTab===`doc`),Hp(2),cE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[Cze,cae,mae,oe,ie,re,de,pe,me],encapsulation:2,changeDetection:1})}return n})()}];var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he({type:n});static ɵinj=ue$1({imports:[kL.forChild(Ve),kL]})}return n})();var st=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he({type:n});static ɵinj=ue$1({imports:[Ta,ue]})}return n})();export{st as DocPoCodeEditorModule};