import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,bb as ia,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,aJ as qhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,a9 as Zy,aa as Yy,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var te=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Gl(0,"po-code-editor");},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Code Editor Basic"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-code-editor></po-code-editor>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-code-editor-basic"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:"java",value:"java"},{label:"yaml",value:"yaml"},{label:"typescript",value:"typescript"}];propertiesOptions=[{value:"readonly",label:"Read Only"}];themeOptions=[{label:"vs",value:"vs"},{label:"vs-dark",value:"vs-dark"},{label:"hc-black",value:"hc-black"}];ngOnInit(){this.restore();}restore(){this.language="",this.theme="",this.properties=[],this.codeEditor="";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs"]],standalone:false,decls:12,vars:10,consts:[["f","ngForm"],[1,"po-row"],["p-height","300",1,"po-md-12",3,"ngModelChange","ngModel","p-language","p-readonly","p-theme"],["name","language","p-label","Language",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","theme","p-label","Theme",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let g=Sx();Tl(0,"div",1)(1,"po-code-editor",2),ww("ngModelChange",function(m){return Ky(g),sN(a.codeEditor,m)||(a.codeEditor=m),Xy(m)}),sg(),r0(),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",1)(6,"po-select",3),ww("ngModelChange",function(m){return Ky(g),sN(a.language,m)||(a.language=m),Xy(m)}),sg(),r0(),Tl(7,"po-select",4),ww("ngModelChange",function(m){return Ky(g),sN(a.theme,m)||(a.theme=m),Xy(m)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-checkbox-group",5),ww("ngModelChange",function(m){return Ky(g),sN(a.properties,m)||(a.properties=m),Xy(m)}),sg(),r0(),sg(),Tl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return a.restore()}),sg()()();}i&2&&(Vp(),Ew("ngModel",a.codeEditor),nw("p-language",a.language)("p-readonly",a.properties.includes("readonly"))("p-theme",a.theme),o0(),Vp(5),Ew("ngModel",a.language),nw("p-options",a.languageOptions),o0(),Vp(),Ew("ngModel",a.theme),nw("p-options",a.themeOptions),o0(),Vp(2),Ew("ngModel",a.properties),nw("p-options",a.propertiesOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,qhe,ia],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Code Editor Labs"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-code-editor-labs"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,be,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{code=[`class Calc {
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
`];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff"]],standalone:false,decls:2,vars:1,consts:[[1,"po-row"],["p-height","300","p-language","typescript","p-show-diff","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(Tl(0,"div",0)(1,"po-code-editor",1),ww("ngModelChange",function(y){return sN(a.code,y)||(a.code=y),y}),sg(),r0(),sg()),i&2&&(Vp(),Ew("ngModel",a.code),o0());},dependencies:[nY,Sk,ia],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Code Editor - Diff"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-code-editor-diff"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,xe,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ae],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-height","300","p-language","terraform",1,"po-md-12"]],template:function(i,a){i&1&&(Tl(0,"div",0),Gl(1,"po-code-editor",1),sg());},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform-view"]],standalone:false,decls:32,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Code Editor - Terraform"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),sg(),Tl(21,"label",6),iN(22,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"),sg(),Tl(23,"pre",9),iN(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),sg(),Tl(25,"label",6),iN(26,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"),sg(),Tl(27,"pre",9),iN(28,`/**
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
`),sg()()()()(),Tl(29,"div",10),Gl(30,"sample-po-code-editor-terraform"),sg(),Gl(31,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,le],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{language="html";suggestions=[{label:"po",insertText:"PO UI"},{label:"ng",insertText:"Angular"},{label:"po-btn",insertText:'<po-button p-label="${1:label}"></po-button>'},{label:"po-inp",insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion"]],standalone:false,decls:1,vars:2,consts:[[3,"p-suggestions","p-language"]],template:function(i,a){i&1&&Gl(0,"po-code-editor",0),i&2&&nw("p-suggestions",a.suggestions)("p-language",a.language);},dependencies:[ia],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Code Editor Suggestion"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-code-editor-suggestion"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Me,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-doc"]],standalone:false,decls:297,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-shell"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://microsoft.github.io/monaco-editor/"],["href","https://po-ui.io/documentation/po-code-editor-register?view=doc"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoCodeEditorRegisterableSuggestion>"],[1,"docs-api-h4","docs-api-class-name"]],template:function(i,a){i&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoCodeEditorModule } from '@po-ui/ng-code-editor';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-code-editor."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoCodeEditorComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O "),Tl(15,"code"),iN(16,"po-code-editor"),sg(),iN(17," \xE9 um componente para edi\xE7\xE3o de c\xF3digo fonte baseado no Monaco Editor da Microsoft."),sg(),Tl(18,"p"),iN(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),sg(),Tl(20,"p"),iN(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),sg(),Tl(22,"p"),iN(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),sg(),Tl(24,"h4"),iN(25,"Adicionando o pacote @po-ui/ng-code-editor"),sg(),Tl(26,"p"),iN(27,"Para instalar o pacote "),Tl(28,"code"),iN(29,"po-code-editor"),sg(),iN(30," em sua aplica\xE7\xE3o execute:"),sg(),Tl(31,"pre")(32,"code",6),iN(33,"`ng add @po-ui/ng-code-editor`\n"),sg()(),Tl(34,"p"),iN(35,"O comando "),Tl(36,"code"),iN(37,"ng add"),sg(),iN(38," do "),Tl(39,"code"),iN(40,"Angular CLI"),sg(),iN(41,":"),sg(),Tl(42,"ul")(43,"li"),iN(44,"inclui o "),Tl(45,"code"),iN(46,"po-code-editor"),sg(),iN(47," no seu projeto;"),sg(),Tl(48,"li"),iN(49,"adiciona o m\xF3dulo "),Tl(50,"code"),iN(51,"PoCodeEditorModule"),sg(),iN(52,":;"),sg()(),Tl(53,"pre")(54,"code"),iN(55,`// app.module.ts
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
`),sg()(),Tl(56,"ul")(57,"li"),iN(58,"adiciona o tema PO UI e tamb\xE9m o "),Tl(59,"em"),iN(60,"asset"),sg(),iN(61," do Monaco no arquivo "),Tl(62,"code"),iN(63,"angular.json"),sg(),iN(64,", conforme abaixo:"),sg()(),Tl(65,"pre"),Zy(),iN(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Yy(),sg()(),Tl(67,"div",7)(68,"h4",8),iN(69,"Seletor"),sg(),Tl(70,"pre",9),iN(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),sg()(),Tl(72,"h4",10),iN(73,"Propriedades"),sg(),Tl(74,"table",11)(75,"tr",12)(76,"th",13),iN(77,"Nome"),sg(),Tl(78,"th",13),iN(79,"Tipo"),sg(),Tl(80,"th",13),iN(81,"Padr\xE3o"),sg(),Tl(82,"th",13),iN(83,"Descri\xE7\xE3o"),sg()(),Tl(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),iN(88," p-height"),Gl(89,"br"),sg()()(),Tl(90,"td",18)(91,"code",19),iN(92,"string"),sg()(),Tl(93,"td",20),iN(94,"-"),sg(),Tl(95,"td",21)(96,"em")(97,"strong"),iN(98,"(opcional)"),sg()(),Tl(99,"p"),iN(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),sg()()(),Tl(101,"tr",14)(102,"td",15)(103,"div",16)(104,"span",17),iN(105," p-language"),Gl(106,"br"),sg()()(),Tl(107,"td",18)(108,"code",19),iN(109,"string"),sg()(),Tl(110,"td",20)(111,"p")(112,"code"),iN(113,"plainText"),sg()()(),Tl(114,"td",21)(115,"em")(116,"strong"),iN(117,"(opcional)"),sg()(),Tl(118,"p"),iN(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Tl(120,"a",22)(121,"strong"),iN(122,"Monaco Editor"),sg()(),iN(123,"."),sg(),Tl(124,"p"),iN(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Tl(126,"a",23)(127,"strong"),iN(128,"po-code-editor-register"),sg()(),iN(129,"."),sg()()(),Tl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),iN(134," p-readonly"),Gl(135,"br"),sg()()(),Tl(136,"td",18)(137,"code",24),iN(138,"boolean"),sg()(),Tl(139,"td",20)(140,"p")(141,"code"),iN(142,"false"),sg()()(),Tl(143,"td",21)(144,"em")(145,"strong"),iN(146,"(opcional)"),sg()(),Tl(147,"p"),iN(148,"Indica se o editor ser\xE1 aberto em modo de leitura."),sg(),Tl(149,"p"),iN(150,"Neste caso, n\xE3o \xE9 poss\xEDvel editar o c\xF3digo inserido."),sg(),Tl(151,"p"),iN(152,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),sg()()(),Tl(153,"tr",14)(154,"td",15)(155,"div",16)(156,"span",17),iN(157," p-show-diff"),Gl(158,"br"),sg()()(),Tl(159,"td",18)(160,"code",24),iN(161,"boolean"),sg()(),Tl(162,"td",20)(163,"p")(164,"code"),iN(165,"false"),sg()()(),Tl(166,"td",21)(167,"em")(168,"strong"),iN(169,"(opcional)"),sg()(),Tl(170,"p"),iN(171,"Indica se o editor ser\xE1 aberto em modo de compara\xE7\xE3o."),sg(),Tl(172,"p"),iN(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),sg(),Tl(174,"p"),iN(175,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),sg()()(),Tl(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),iN(180," p-suggestions"),Gl(181,"br"),sg()()(),Tl(182,"td",18)(183,"code",25),iN(184,"Array<PoCodeEditorRegisterableSuggestion>"),sg()(),Tl(185,"td",20),iN(186,"-"),sg(),Tl(187,"td",21)(188,"em")(189,"strong"),iN(190,"(opcional)"),sg()(),Tl(191,"p"),iN(192,"Lista de sugest\xF5es usadas pelo autocomplete dentro do editor."),sg(),Tl(193,"p"),iN(194,"Para visualizar a lista de sugest\xF5es use o comando "),Tl(195,"code"),iN(196,"CTRL + SPACE"),sg(),iN(197,"."),sg(),Tl(198,"p"),iN(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),sg(),Tl(200,"p"),iN(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),sg(),Tl(202,"pre")(203,"code"),iN(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),sg()(),Tl(205,"p"),iN(206,"Ao fornecer uma lista de sugest\xF5es \xE9 poss\xEDvel acelerar a escrita de scripts pelos usu\xE1rios."),sg()()(),Tl(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),iN(211," p-theme"),Gl(212,"br"),sg()()(),Tl(213,"td",18)(214,"code",19),iN(215,"string"),sg()(),Tl(216,"td",20)(217,"p")(218,"code"),iN(219,"vs"),sg()()(),Tl(220,"td",21)(221,"em")(222,"strong"),iN(223,"(opcional)"),sg()(),Tl(224,"p"),iN(225,"Define um tema para o editor."),sg(),Tl(226,"p"),iN(227,"Temas v\xE1lidos:"),sg(),Tl(228,"ul")(229,"li")(230,"code"),iN(231,"vs-dark"),sg()(),Tl(232,"li")(233,"code"),iN(234,"vs"),sg()(),Tl(235,"li")(236,"code"),iN(237,"hc-black"),sg()()(),Tl(238,"p"),iN(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),sg()()()(),Tl(240,"h3"),iN(241,"Interfaces"),sg(),Tl(242,"h4",26)(243,"code",5),iN(244,"PoCodeEditorRegisterableSuggestion"),sg()(),Tl(245,"div",2)(246,"p"),iN(247,"Interface para configura\xE7\xE3o da lista de sugest\xE3o do autocomplete do code editor."),sg()(),Tl(248,"h4",10),iN(249,"Propriedades"),sg(),Tl(250,"table",11)(251,"tr",12)(252,"th",13),iN(253,"Nome"),sg(),Tl(254,"th",13),iN(255,"Tipo"),sg(),Tl(256,"th",13),iN(257,"Descri\xE7\xE3o"),sg()(),Tl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),iN(262," documentation"),Gl(263,"br"),sg()()(),Tl(264,"td",18)(265,"code",19),iN(266,"string"),sg()(),Tl(267,"td",21)(268,"em")(269,"strong"),iN(270,"(opcional)"),sg()(),Tl(271,"p"),iN(272,"Texto de ajuda que ser\xE1 exibido caso o usu\xE1rio deseje ver mais informa\xE7\xF5es sobre a sugest\xE3o."),sg()()(),Tl(273,"tr",14)(274,"td",15)(275,"div",16)(276,"span",17),iN(277," insertText"),Gl(278,"br"),sg()()(),Tl(279,"td",18)(280,"code",19),iN(281,"string"),sg()(),Tl(282,"td",21)(283,"p"),iN(284,"Texto que ser\xE1 inserido no editor ao selecionar a sugest\xE3o exibida pelo autocomplete."),sg()()(),Tl(285,"tr",14)(286,"td",15)(287,"div",16)(288,"span",17),iN(289," label"),Gl(290,"br"),sg()()(),Tl(291,"td",18)(292,"code",19),iN(293,"string"),sg()(),Tl(294,"td",21)(295,"p"),iN(296,"Texto que ser\xE1 exibido na lista de sugest\xF5es."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Code Editor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Gl(3,"sample-po-code-editor-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Gl(5,"sample-po-code-editor-basic-view")(6,"sample-po-code-editor-labs-view")(7,"sample-po-code-editor-diff-view")(8,"sample-po-code-editor-terraform-view")(9,"sample-po-code-editor-suggestion-view"),sg()()()),i&2&&(nw("p-actions",a.actions),Vp(2),nw("p-active",a.activeTab==="doc"),Vp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[lNe,Wme,jme,oe,ie,re,de,pe,me],encapsulation:2,changeDetection:1})}return n})();var Ve=[{path:"",component:ce}],ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[DL.forChild(Ve),DL]})}return n})();var st=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,ue]})}return n})();export{st as DocPoCodeEditorModule};