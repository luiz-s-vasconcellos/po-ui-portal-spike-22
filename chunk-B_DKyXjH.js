import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,bb as ia,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,aJ as Ghe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,a9 as Ky,aa as Zy,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var te=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Wl(0,"po-code-editor");},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Code Editor Basic"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-code-editor></po-code-editor>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-code-editor-basic"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,te],encapsulation:2})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:"java",value:"java"},{label:"yaml",value:"yaml"},{label:"typescript",value:"typescript"}];propertiesOptions=[{value:"readonly",label:"Read Only"}];themeOptions=[{label:"vs",value:"vs"},{label:"vs-dark",value:"vs-dark"},{label:"hc-black",value:"hc-black"}];ngOnInit(){this.restore();}restore(){this.language="",this.theme="",this.properties=[],this.codeEditor="";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs"]],standalone:false,decls:12,vars:10,consts:[["f","ngForm"],[1,"po-row"],["p-height","300",1,"po-md-12",3,"ngModelChange","ngModel","p-language","p-readonly","p-theme"],["name","language","p-label","Language",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","theme","p-label","Theme",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let g=Ex();Sl(0,"div",1)(1,"po-code-editor",2),Ew("ngModelChange",function(m){return Xy(g),tN(a.codeEditor,m)||(a.codeEditor=m),Qy(m)}),sg(),JA(),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-select",3),Ew("ngModelChange",function(m){return Xy(g),tN(a.language,m)||(a.language=m),Qy(m)}),sg(),JA(),Sl(7,"po-select",4),Ew("ngModelChange",function(m){return Xy(g),tN(a.theme,m)||(a.theme=m),Qy(m)}),sg(),JA(),sg(),Sl(8,"div",1)(9,"po-checkbox-group",5),Ew("ngModelChange",function(m){return Xy(g),tN(a.properties,m)||(a.properties=m),Qy(m)}),sg(),JA(),sg(),Sl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return a.restore()}),sg()()();}i&2&&(Vp(),Dw("ngModel",a.codeEditor),tw("p-language",a.language)("p-readonly",a.properties.includes("readonly"))("p-theme",a.theme),t0(),Vp(5),Dw("ngModel",a.language),tw("p-options",a.languageOptions),t0(),Vp(),Dw("ngModel",a.theme),tw("p-options",a.themeOptions),t0(),Vp(2),Dw("ngModel",a.properties),tw("p-options",a.propertiesOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,Ghe,ia],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Code Editor Labs"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-code-editor-labs"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,be,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ne],encapsulation:2})}return n})();var ae=(()=>{class n{code=[`class Calc {
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
`];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff"]],standalone:false,decls:2,vars:1,consts:[[1,"po-row"],["p-height","300","p-language","typescript","p-show-diff","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(Sl(0,"div",0)(1,"po-code-editor",1),Ew("ngModelChange",function(y){return tN(a.code,y)||(a.code=y),y}),sg(),JA(),sg()),i&2&&(Vp(),Dw("ngModel",a.code),t0());},dependencies:[K9,Dk,ia],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Code Editor - Diff"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-code-editor-diff"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,xe,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return n})();var le=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-height","300","p-language","terraform",1,"po-md-12"]],template:function(i,a){i&1&&(Sl(0,"div",0),Wl(1,"po-code-editor",1),sg());},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform-view"]],standalone:false,decls:32,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Code Editor - Terraform"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),sg(),Sl(25,"label",6),Jx(26,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"),sg(),Sl(27,"pre",9),Jx(28,`/**
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
`),sg()()()()(),Sl(29,"div",10),Wl(30,"sample-po-code-editor-terraform"),sg(),Wl(31,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return n})();var se=(()=>{class n{language="html";suggestions=[{label:"po",insertText:"PO UI"},{label:"ng",insertText:"Angular"},{label:"po-btn",insertText:'<po-button p-label="${1:label}"></po-button>'},{label:"po-inp",insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion"]],standalone:false,decls:1,vars:2,consts:[[3,"p-suggestions","p-language"]],template:function(i,a){i&1&&Wl(0,"po-code-editor",0),i&2&&tw("p-suggestions",a.suggestions)("p-language",a.language);},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Code Editor Suggestion"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-code-editor-suggestion"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-doc"]],standalone:false,decls:297,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-shell"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://microsoft.github.io/monaco-editor/"],["href","https://po-ui.io/documentation/po-code-editor-register?view=doc"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoCodeEditorRegisterableSuggestion>"],[1,"docs-api-h4","docs-api-class-name"]],template:function(i,a){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoCodeEditorModule } from '@po-ui/ng-code-editor';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-code-editor."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoCodeEditorComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O "),Sl(15,"code"),Jx(16,"po-code-editor"),sg(),Jx(17," \xE9 um componente para edi\xE7\xE3o de c\xF3digo fonte baseado no Monaco Editor da Microsoft."),sg(),Sl(18,"p"),Jx(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),sg(),Sl(20,"p"),Jx(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),sg(),Sl(22,"p"),Jx(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),sg(),Sl(24,"h4"),Jx(25,"Adicionando o pacote @po-ui/ng-code-editor"),sg(),Sl(26,"p"),Jx(27,"Para instalar o pacote "),Sl(28,"code"),Jx(29,"po-code-editor"),sg(),Jx(30," em sua aplica\xE7\xE3o execute:"),sg(),Sl(31,"pre")(32,"code",6),Jx(33,"`ng add @po-ui/ng-code-editor`\n"),sg()(),Sl(34,"p"),Jx(35,"O comando "),Sl(36,"code"),Jx(37,"ng add"),sg(),Jx(38," do "),Sl(39,"code"),Jx(40,"Angular CLI"),sg(),Jx(41,":"),sg(),Sl(42,"ul")(43,"li"),Jx(44,"inclui o "),Sl(45,"code"),Jx(46,"po-code-editor"),sg(),Jx(47," no seu projeto;"),sg(),Sl(48,"li"),Jx(49,"adiciona o m\xF3dulo "),Sl(50,"code"),Jx(51,"PoCodeEditorModule"),sg(),Jx(52,":;"),sg()(),Sl(53,"pre")(54,"code"),Jx(55,`// app.module.ts
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
`),sg()(),Sl(56,"ul")(57,"li"),Jx(58,"adiciona o tema PO UI e tamb\xE9m o "),Sl(59,"em"),Jx(60,"asset"),sg(),Jx(61," do Monaco no arquivo "),Sl(62,"code"),Jx(63,"angular.json"),sg(),Jx(64,", conforme abaixo:"),sg()(),Sl(65,"pre"),Ky(),Jx(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Zy(),sg()(),Sl(67,"div",7)(68,"h4",8),Jx(69,"Seletor"),sg(),Sl(70,"pre",9),Jx(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),sg()(),Sl(72,"h4",10),Jx(73,"Propriedades"),sg(),Sl(74,"table",11)(75,"tr",12)(76,"th",13),Jx(77,"Nome"),sg(),Sl(78,"th",13),Jx(79,"Tipo"),sg(),Sl(80,"th",13),Jx(81,"Padr\xE3o"),sg(),Sl(82,"th",13),Jx(83,"Descri\xE7\xE3o"),sg()(),Sl(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),Jx(88," p-height"),Wl(89,"br"),sg()()(),Sl(90,"td",18)(91,"code",19),Jx(92,"string"),sg()(),Sl(93,"td",20),Jx(94,"-"),sg(),Sl(95,"td",21)(96,"em")(97,"strong"),Jx(98,"(opcional)"),sg()(),Sl(99,"p"),Jx(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),sg()()(),Sl(101,"tr",14)(102,"td",15)(103,"div",16)(104,"span",17),Jx(105," p-language"),Wl(106,"br"),sg()()(),Sl(107,"td",18)(108,"code",19),Jx(109,"string"),sg()(),Sl(110,"td",20)(111,"p")(112,"code"),Jx(113,"plainText"),sg()()(),Sl(114,"td",21)(115,"em")(116,"strong"),Jx(117,"(opcional)"),sg()(),Sl(118,"p"),Jx(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Sl(120,"a",22)(121,"strong"),Jx(122,"Monaco Editor"),sg()(),Jx(123,"."),sg(),Sl(124,"p"),Jx(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Sl(126,"a",23)(127,"strong"),Jx(128,"po-code-editor-register"),sg()(),Jx(129,"."),sg()()(),Sl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Jx(134," p-readonly"),Wl(135,"br"),sg()()(),Sl(136,"td",18)(137,"code",24),Jx(138,"boolean"),sg()(),Sl(139,"td",20)(140,"p")(141,"code"),Jx(142,"false"),sg()()(),Sl(143,"td",21)(144,"em")(145,"strong"),Jx(146,"(opcional)"),sg()(),Sl(147,"p"),Jx(148,"Indica se o editor ser\xE1 aberto em modo de leitura."),sg(),Sl(149,"p"),Jx(150,"Neste caso, n\xE3o \xE9 poss\xEDvel editar o c\xF3digo inserido."),sg(),Sl(151,"p"),Jx(152,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),sg()()(),Sl(153,"tr",14)(154,"td",15)(155,"div",16)(156,"span",17),Jx(157," p-show-diff"),Wl(158,"br"),sg()()(),Sl(159,"td",18)(160,"code",24),Jx(161,"boolean"),sg()(),Sl(162,"td",20)(163,"p")(164,"code"),Jx(165,"false"),sg()()(),Sl(166,"td",21)(167,"em")(168,"strong"),Jx(169,"(opcional)"),sg()(),Sl(170,"p"),Jx(171,"Indica se o editor ser\xE1 aberto em modo de compara\xE7\xE3o."),sg(),Sl(172,"p"),Jx(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),sg(),Sl(174,"p"),Jx(175,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),sg()()(),Sl(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),Jx(180," p-suggestions"),Wl(181,"br"),sg()()(),Sl(182,"td",18)(183,"code",25),Jx(184,"Array<PoCodeEditorRegisterableSuggestion>"),sg()(),Sl(185,"td",20),Jx(186,"-"),sg(),Sl(187,"td",21)(188,"em")(189,"strong"),Jx(190,"(opcional)"),sg()(),Sl(191,"p"),Jx(192,"Lista de sugest\xF5es usadas pelo autocomplete dentro do editor."),sg(),Sl(193,"p"),Jx(194,"Para visualizar a lista de sugest\xF5es use o comando "),Sl(195,"code"),Jx(196,"CTRL + SPACE"),sg(),Jx(197,"."),sg(),Sl(198,"p"),Jx(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),sg(),Sl(200,"p"),Jx(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),sg(),Sl(202,"pre")(203,"code"),Jx(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),sg()(),Sl(205,"p"),Jx(206,"Ao fornecer uma lista de sugest\xF5es \xE9 poss\xEDvel acelerar a escrita de scripts pelos usu\xE1rios."),sg()()(),Sl(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),Jx(211," p-theme"),Wl(212,"br"),sg()()(),Sl(213,"td",18)(214,"code",19),Jx(215,"string"),sg()(),Sl(216,"td",20)(217,"p")(218,"code"),Jx(219,"vs"),sg()()(),Sl(220,"td",21)(221,"em")(222,"strong"),Jx(223,"(opcional)"),sg()(),Sl(224,"p"),Jx(225,"Define um tema para o editor."),sg(),Sl(226,"p"),Jx(227,"Temas v\xE1lidos:"),sg(),Sl(228,"ul")(229,"li")(230,"code"),Jx(231,"vs-dark"),sg()(),Sl(232,"li")(233,"code"),Jx(234,"vs"),sg()(),Sl(235,"li")(236,"code"),Jx(237,"hc-black"),sg()()(),Sl(238,"p"),Jx(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),sg()()()(),Sl(240,"h3"),Jx(241,"Interfaces"),sg(),Sl(242,"h4",26)(243,"code",5),Jx(244,"PoCodeEditorRegisterableSuggestion"),sg()(),Sl(245,"div",2)(246,"p"),Jx(247,"Interface para configura\xE7\xE3o da lista de sugest\xE3o do autocomplete do code editor."),sg()(),Sl(248,"h4",10),Jx(249,"Propriedades"),sg(),Sl(250,"table",11)(251,"tr",12)(252,"th",13),Jx(253,"Nome"),sg(),Sl(254,"th",13),Jx(255,"Tipo"),sg(),Sl(256,"th",13),Jx(257,"Descri\xE7\xE3o"),sg()(),Sl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),Jx(262," documentation"),Wl(263,"br"),sg()()(),Sl(264,"td",18)(265,"code",19),Jx(266,"string"),sg()(),Sl(267,"td",21)(268,"em")(269,"strong"),Jx(270,"(opcional)"),sg()(),Sl(271,"p"),Jx(272,"Texto de ajuda que ser\xE1 exibido caso o usu\xE1rio deseje ver mais informa\xE7\xF5es sobre a sugest\xE3o."),sg()()(),Sl(273,"tr",14)(274,"td",15)(275,"div",16)(276,"span",17),Jx(277," insertText"),Wl(278,"br"),sg()()(),Sl(279,"td",18)(280,"code",19),Jx(281,"string"),sg()(),Sl(282,"td",21)(283,"p"),Jx(284,"Texto que ser\xE1 inserido no editor ao selecionar a sugest\xE3o exibida pelo autocomplete."),sg()()(),Sl(285,"tr",14)(286,"td",15)(287,"div",16)(288,"span",17),Jx(289," label"),Wl(290,"br"),sg()()(),Sl(291,"td",18)(292,"code",19),Jx(293,"string"),sg()(),Sl(294,"td",21)(295,"p"),Jx(296,"Texto que ser\xE1 exibido na lista de sugest\xF5es."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Code Editor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Wl(3,"sample-po-code-editor-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Wl(5,"sample-po-code-editor-basic-view")(6,"sample-po-code-editor-labs-view")(7,"sample-po-code-editor-diff-view")(8,"sample-po-code-editor-terraform-view")(9,"sample-po-code-editor-suggestion-view"),sg()()()),i&2&&(tw("p-actions",a.actions),Vp(2),tw("p-active",a.activeTab==="doc"),Vp(2),tw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[pNe,Gme,Qme,oe,ie,re,de,pe,me],encapsulation:2})}return n})();var Ve=[{path:"",component:ce}],ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[pL.forChild(Ve),pL]})}return n})();var st=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,ue]})}return n})();export{st as DocPoCodeEditorModule};