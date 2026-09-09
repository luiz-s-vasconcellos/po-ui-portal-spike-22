import{$r as Xy,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,d as ia,fi as ag,gi as bL,ha as ww,ii as Zy,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ti as Yy,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&Gl(0,`po-code-editor`)},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Code Editor Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-code-editor></po-code-editor>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-code-editor-basic`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:`java`,value:`java`},{label:`yaml`,value:`yaml`},{label:`typescript`,value:`typescript`}];propertiesOptions=[{value:`readonly`,label:`Read Only`}];themeOptions=[{label:`vs`,value:`vs`},{label:`vs-dark`,value:`vs-dark`},{label:`hc-black`,value:`hc-black`}];ngOnInit(){this.restore()}restore(){this.language=``,this.theme=``,this.properties=[],this.codeEditor=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-labs`]],standalone:!1,decls:12,vars:10,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-height`,`300`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-language`,`p-readonly`,`p-theme`],[`name`,`language`,`p-label`,`Language`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let g=Ax();Tl(0,`div`,1)(1,`po-code-editor`,2),ww(`ngModelChange`,function(m){return Ky(g),uN(a.codeEditor,m)||(a.codeEditor=m),Xy(m)}),ag(),a0(),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,1)(6,`po-select`,3),ww(`ngModelChange`,function(m){return Ky(g),uN(a.language,m)||(a.language=m),Xy(m)}),ag(),a0(),Tl(7,`po-select`,4),ww(`ngModelChange`,function(m){return Ky(g),uN(a.theme,m)||(a.theme=m),Xy(m)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-checkbox-group`,5),ww(`ngModelChange`,function(m){return Ky(g),uN(a.properties,m)||(a.properties=m),Xy(m)}),ag(),a0(),ag(),Tl(10,`div`,1)(11,`po-button`,6),ht(`p-click`,function(){return a.restore()}),ag()()()}i&2&&(jp(),Ew(`ngModel`,a.codeEditor),nw(`p-language`,a.language)(`p-readonly`,a.properties.includes(`readonly`))(`p-theme`,a.theme),l0(),jp(5),Ew(`ngModel`,a.language),nw(`p-options`,a.languageOptions),l0(),jp(),Ew(`ngModel`,a.theme),nw(`p-options`,a.themeOptions),l0(),jp(2),Ew(`ngModel`,a.properties),nw(`p-options`,a.propertiesOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,fbe,ia],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Code Editor Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-code-editor-labs`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{code=[`class Calc {
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
`];static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-diff`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`typescript`,`p-show-diff`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`]],template:function(i,a){i&1&&(Tl(0,`div`,0)(1,`po-code-editor`,1),ww(`ngModelChange`,function(y){return uN(a.code,y)||(a.code=y),y}),ag(),a0(),ag()),i&2&&(jp(),Ew(`ngModel`,a.code),l0())},dependencies:[gY,Ak,ia],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-diff-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Code Editor - Diff`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-code-editor-diff`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,xe,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ae],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-terraform`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`terraform`,1,`po-md-12`]],template:function(i,a){i&1&&(Tl(0,`div`,0),Gl(1,`po-code-editor`,1),ag())},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-terraform-view`]],standalone:!1,decls:32,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Code Editor - Terraform`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),ag(),Tl(25,`label`,6),cN(26,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts`),ag(),Tl(27,`pre`,9),cN(28,`/**
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
`),ag()()()()(),Tl(29,`div`,10),Gl(30,`sample-po-code-editor-terraform`),ag(),Gl(31,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{language=`html`;suggestions=[{label:`po`,insertText:`PO UI`},{label:`ng`,insertText:`Angular`},{label:`po-btn`,insertText:'<po-button p-label="${1:label}"></po-button>'},{label:`po-inp`,insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-suggestion`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-suggestions`,`p-language`]],template:function(i,a){i&1&&Gl(0,`po-code-editor`,0),i&2&&nw(`p-suggestions`,a.suggestions)(`p-language`,a.language)},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-suggestion-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Code Editor Suggestion`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-code-editor-suggestion`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Me,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-code-editor-doc`]],standalone:!1,decls:297,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-shell`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://microsoft.github.io/monaco-editor/`],[`href`,`https://po-ui.io/documentation/po-code-editor-register?view=doc`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCodeEditorRegisterableSuggestion>`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(i,a){i&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoCodeEditorModule } from '@po-ui/ng-code-editor';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-code-editor.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoCodeEditorComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O `),Tl(15,`code`),cN(16,`po-code-editor`),ag(),cN(17,` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.`),ag(),Tl(18,`p`),cN(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),ag(),Tl(20,`p`),cN(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),ag(),Tl(22,`p`),cN(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),ag(),Tl(24,`h4`),cN(25,`Adicionando o pacote @po-ui/ng-code-editor`),ag(),Tl(26,`p`),cN(27,`Para instalar o pacote `),Tl(28,`code`),cN(29,`po-code-editor`),ag(),cN(30,` em sua aplicação execute:`),ag(),Tl(31,`pre`)(32,`code`,6),cN(33,"`ng add @po-ui/ng-code-editor`\n"),ag()(),Tl(34,`p`),cN(35,`O comando `),Tl(36,`code`),cN(37,`ng add`),ag(),cN(38,` do `),Tl(39,`code`),cN(40,`Angular CLI`),ag(),cN(41,`:`),ag(),Tl(42,`ul`)(43,`li`),cN(44,`inclui o `),Tl(45,`code`),cN(46,`po-code-editor`),ag(),cN(47,` no seu projeto;`),ag(),Tl(48,`li`),cN(49,`adiciona o módulo `),Tl(50,`code`),cN(51,`PoCodeEditorModule`),ag(),cN(52,`:;`),ag()(),Tl(53,`pre`)(54,`code`),cN(55,`// app.module.ts
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
`),ag()(),Tl(56,`ul`)(57,`li`),cN(58,`adiciona o tema PO UI e também o `),Tl(59,`em`),cN(60,`asset`),ag(),cN(61,` do Monaco no arquivo `),Tl(62,`code`),cN(63,`angular.json`),ag(),cN(64,`, conforme abaixo:`),ag()(),Tl(65,`pre`),Zy(),cN(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Yy(),ag()(),Tl(67,`div`,7)(68,`h4`,8),cN(69,`Seletor`),ag(),Tl(70,`pre`,9),cN(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),ag()(),Tl(72,`h4`,10),cN(73,`Propriedades`),ag(),Tl(74,`table`,11)(75,`tr`,12)(76,`th`,13),cN(77,`Nome`),ag(),Tl(78,`th`,13),cN(79,`Tipo`),ag(),Tl(80,`th`,13),cN(81,`Padrão`),ag(),Tl(82,`th`,13),cN(83,`Descrição`),ag()(),Tl(84,`tr`,14)(85,`td`,15)(86,`div`,16)(87,`span`,17),cN(88,` p-height`),Gl(89,`br`),ag()()(),Tl(90,`td`,18)(91,`code`,19),cN(92,`string`),ag()(),Tl(93,`td`,20),cN(94,`-`),ag(),Tl(95,`td`,21)(96,`em`)(97,`strong`),cN(98,`(opcional)`),ag()(),Tl(99,`p`),cN(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),ag()()(),Tl(101,`tr`,14)(102,`td`,15)(103,`div`,16)(104,`span`,17),cN(105,` p-language`),Gl(106,`br`),ag()()(),Tl(107,`td`,18)(108,`code`,19),cN(109,`string`),ag()(),Tl(110,`td`,20)(111,`p`)(112,`code`),cN(113,`plainText`),ag()()(),Tl(114,`td`,21)(115,`em`)(116,`strong`),cN(117,`(opcional)`),ag()(),Tl(118,`p`),cN(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Tl(120,`a`,22)(121,`strong`),cN(122,`Monaco Editor`),ag()(),cN(123,`.`),ag(),Tl(124,`p`),cN(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Tl(126,`a`,23)(127,`strong`),cN(128,`po-code-editor-register`),ag()(),cN(129,`.`),ag()()(),Tl(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),cN(134,` p-readonly`),Gl(135,`br`),ag()()(),Tl(136,`td`,18)(137,`code`,24),cN(138,`boolean`),ag()(),Tl(139,`td`,20)(140,`p`)(141,`code`),cN(142,`false`),ag()()(),Tl(143,`td`,21)(144,`em`)(145,`strong`),cN(146,`(opcional)`),ag()(),Tl(147,`p`),cN(148,`Indica se o editor será aberto em modo de leitura.`),ag(),Tl(149,`p`),cN(150,`Neste caso, não é possível editar o código inserido.`),ag(),Tl(151,`p`),cN(152,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),ag()()(),Tl(153,`tr`,14)(154,`td`,15)(155,`div`,16)(156,`span`,17),cN(157,` p-show-diff`),Gl(158,`br`),ag()()(),Tl(159,`td`,18)(160,`code`,24),cN(161,`boolean`),ag()(),Tl(162,`td`,20)(163,`p`)(164,`code`),cN(165,`false`),ag()()(),Tl(166,`td`,21)(167,`em`)(168,`strong`),cN(169,`(opcional)`),ag()(),Tl(170,`p`),cN(171,`Indica se o editor será aberto em modo de comparação.`),ag(),Tl(172,`p`),cN(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),ag(),Tl(174,`p`),cN(175,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),ag()()(),Tl(176,`tr`,14)(177,`td`,15)(178,`div`,16)(179,`span`,17),cN(180,` p-suggestions`),Gl(181,`br`),ag()()(),Tl(182,`td`,18)(183,`code`,25),cN(184,`Array<PoCodeEditorRegisterableSuggestion>`),ag()(),Tl(185,`td`,20),cN(186,`-`),ag(),Tl(187,`td`,21)(188,`em`)(189,`strong`),cN(190,`(opcional)`),ag()(),Tl(191,`p`),cN(192,`Lista de sugestões usadas pelo autocomplete dentro do editor.`),ag(),Tl(193,`p`),cN(194,`Para visualizar a lista de sugestões use o comando `),Tl(195,`code`),cN(196,`CTRL + SPACE`),ag(),cN(197,`.`),ag(),Tl(198,`p`),cN(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),ag(),Tl(200,`p`),cN(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),ag(),Tl(202,`pre`)(203,`code`),cN(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),ag()(),Tl(205,`p`),cN(206,`Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.`),ag()()(),Tl(207,`tr`,14)(208,`td`,15)(209,`div`,16)(210,`span`,17),cN(211,` p-theme`),Gl(212,`br`),ag()()(),Tl(213,`td`,18)(214,`code`,19),cN(215,`string`),ag()(),Tl(216,`td`,20)(217,`p`)(218,`code`),cN(219,`vs`),ag()()(),Tl(220,`td`,21)(221,`em`)(222,`strong`),cN(223,`(opcional)`),ag()(),Tl(224,`p`),cN(225,`Define um tema para o editor.`),ag(),Tl(226,`p`),cN(227,`Temas válidos:`),ag(),Tl(228,`ul`)(229,`li`)(230,`code`),cN(231,`vs-dark`),ag()(),Tl(232,`li`)(233,`code`),cN(234,`vs`),ag()(),Tl(235,`li`)(236,`code`),cN(237,`hc-black`),ag()()(),Tl(238,`p`),cN(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),ag()()()(),Tl(240,`h3`),cN(241,`Interfaces`),ag(),Tl(242,`h4`,26)(243,`code`,5),cN(244,`PoCodeEditorRegisterableSuggestion`),ag()(),Tl(245,`div`,2)(246,`p`),cN(247,`Interface para configuração da lista de sugestão do autocomplete do code editor.`),ag()(),Tl(248,`h4`,10),cN(249,`Propriedades`),ag(),Tl(250,`table`,11)(251,`tr`,12)(252,`th`,13),cN(253,`Nome`),ag(),Tl(254,`th`,13),cN(255,`Tipo`),ag(),Tl(256,`th`,13),cN(257,`Descrição`),ag()(),Tl(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),cN(262,` documentation`),Gl(263,`br`),ag()()(),Tl(264,`td`,18)(265,`code`,19),cN(266,`string`),ag()(),Tl(267,`td`,21)(268,`em`)(269,`strong`),cN(270,`(opcional)`),ag()(),Tl(271,`p`),cN(272,`Texto de ajuda que será exibido caso o usuário deseje ver mais informações sobre a sugestão.`),ag()()(),Tl(273,`tr`,14)(274,`td`,15)(275,`div`,16)(276,`span`,17),cN(277,` insertText`),Gl(278,`br`),ag()()(),Tl(279,`td`,18)(280,`code`,19),cN(281,`string`),ag()(),Tl(282,`td`,21)(283,`p`),cN(284,`Texto que será inserido no editor ao selecionar a sugestão exibida pelo autocomplete.`),ag()()(),Tl(285,`tr`,14)(286,`td`,15)(287,`div`,16)(288,`span`,17),cN(289,` label`),Gl(290,`br`),ag()()(),Tl(291,`td`,18)(292,`code`,19),cN(293,`string`),ag()(),Tl(294,`td`,21)(295,`p`),cN(296,`Texto que será exibido na lista de sugestões.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Code Editor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),Gl(3,`sample-po-code-editor-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),Gl(5,`sample-po-code-editor-basic-view`)(6,`sample-po-code-editor-labs-view`)(7,`sample-po-code-editor-diff-view`)(8,`sample-po-code-editor-terraform-view`)(9,`sample-po-code-editor-suggestion-view`),ag()()()),i&2&&(nw(`p-actions`,a.actions),jp(2),nw(`p-active`,a.activeTab===`doc`),jp(2),nw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,oe,ie,re,de,pe,me],encapsulation:2,changeDetection:1})}return n})()}];var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he({type:n});static ɵinj=ue$1({imports:[bL.forChild(Ve),bL]})}return n})();var st=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he({type:n});static ɵinj=ue$1({imports:[ar,ue]})}return n})();export{st as DocPoCodeEditorModule};