import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,ba as sr,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,aJ as nme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,a9 as Qy,aa as Xy,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var te=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Hl(0,"po-code-editor");},dependencies:[sr],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Code Editor Basic"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-code-editor></po-code-editor>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-code-editor-basic"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,te],encapsulation:2})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:"java",value:"java"},{label:"yaml",value:"yaml"},{label:"typescript",value:"typescript"}];propertiesOptions=[{value:"readonly",label:"Read Only"}];themeOptions=[{label:"vs",value:"vs"},{label:"vs-dark",value:"vs-dark"},{label:"hc-black",value:"hc-black"}];ngOnInit(){this.restore();}restore(){this.language="",this.theme="",this.properties=[],this.codeEditor="";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs"]],standalone:false,decls:12,vars:10,consts:[["f","ngForm"],[1,"po-row"],["p-height","300",1,"po-md-12",3,"ngModelChange","ngModel","p-language","p-readonly","p-theme"],["name","language","p-label","Language",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","theme","p-label","Theme",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let g=gx();Cl(0,"div",1)(1,"po-code-editor",2),gw("ngModelChange",function(m){return Jy(g),Zx(a.codeEditor,m)||(a.codeEditor=m),e_(m)}),og(),Z0(),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",1)(6,"po-select",3),gw("ngModelChange",function(m){return Jy(g),Zx(a.language,m)||(a.language=m),e_(m)}),og(),Z0(),Cl(7,"po-select",4),gw("ngModelChange",function(m){return Jy(g),Zx(a.theme,m)||(a.theme=m),e_(m)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-checkbox-group",5),gw("ngModelChange",function(m){return Jy(g),Zx(a.properties,m)||(a.properties=m),e_(m)}),og(),Z0(),og(),Cl(10,"div",1)(11,"po-button",6),dt("p-click",function(){return a.restore()}),og()()();}i&2&&(Lp(),pw("ngModel",a.codeEditor),ZE("p-language",a.language)("p-readonly",a.properties.includes("readonly"))("p-theme",a.theme),X0(),Lp(5),pw("ngModel",a.language),ZE("p-options",a.languageOptions),X0(),Lp(),pw("ngModel",a.theme),ZE("p-options",a.themeOptions),X0(),Lp(2),pw("ngModel",a.properties),ZE("p-options",a.propertiesOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,nme,sr],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Code Editor Labs"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-code-editor-labs"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,be,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ne],encapsulation:2})}return n})();var ae=(()=>{class n{code=[`class Calc {
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
`];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff"]],standalone:false,decls:2,vars:1,consts:[[1,"po-row"],["p-height","300","p-language","typescript","p-show-diff","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(Cl(0,"div",0)(1,"po-code-editor",1),gw("ngModelChange",function(y){return Zx(a.code,y)||(a.code=y),y}),og(),Z0(),og()),i&2&&(Lp(),pw("ngModel",a.code),X0());},dependencies:[sY,gk,sr],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Code Editor - Diff"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-code-editor-diff"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,xe,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return n})();var le=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-height","300","p-language","terraform",1,"po-md-12"]],template:function(i,a){i&1&&(Cl(0,"div",0),Hl(1,"po-code-editor",1),og());},dependencies:[sr],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform-view"]],standalone:false,decls:32,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Code Editor - Terraform"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),og(),Cl(21,"label",6),qx(22,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"),og(),Cl(23,"pre",9),qx(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),og(),Cl(25,"label",6),qx(26,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"),og(),Cl(27,"pre",9),qx(28,`/**
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
`),og()()()()(),Cl(29,"div",10),Hl(30,"sample-po-code-editor-terraform"),og(),Hl(31,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return n})();var se=(()=>{class n{language="html";suggestions=[{label:"po",insertText:"PO UI"},{label:"ng",insertText:"Angular"},{label:"po-btn",insertText:'<po-button p-label="${1:label}"></po-button>'},{label:"po-inp",insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion"]],standalone:false,decls:1,vars:2,consts:[[3,"p-suggestions","p-language"]],template:function(i,a){i&1&&Hl(0,"po-code-editor",0),i&2&&ZE("p-suggestions",a.suggestions)("p-language",a.language);},dependencies:[sr],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Code Editor Suggestion"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-code-editor-suggestion"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-doc"]],standalone:false,decls:297,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-shell"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://microsoft.github.io/monaco-editor/"],["href","https://po-ui.io/documentation/po-code-editor-register?view=doc"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoCodeEditorRegisterableSuggestion>"],[1,"docs-api-h4","docs-api-class-name"]],template:function(i,a){i&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoCodeEditorModule } from '@po-ui/ng-code-editor';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-code-editor."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoCodeEditorComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O "),Cl(15,"code"),qx(16,"po-code-editor"),og(),qx(17," \xE9 um componente para edi\xE7\xE3o de c\xF3digo fonte baseado no Monaco Editor da Microsoft."),og(),Cl(18,"p"),qx(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),og(),Cl(20,"p"),qx(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),og(),Cl(22,"p"),qx(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),og(),Cl(24,"h4"),qx(25,"Adicionando o pacote @po-ui/ng-code-editor"),og(),Cl(26,"p"),qx(27,"Para instalar o pacote "),Cl(28,"code"),qx(29,"po-code-editor"),og(),qx(30," em sua aplica\xE7\xE3o execute:"),og(),Cl(31,"pre")(32,"code",6),qx(33,"`ng add @po-ui/ng-code-editor`\n"),og()(),Cl(34,"p"),qx(35,"O comando "),Cl(36,"code"),qx(37,"ng add"),og(),qx(38," do "),Cl(39,"code"),qx(40,"Angular CLI"),og(),qx(41,":"),og(),Cl(42,"ul")(43,"li"),qx(44,"inclui o "),Cl(45,"code"),qx(46,"po-code-editor"),og(),qx(47," no seu projeto;"),og(),Cl(48,"li"),qx(49,"adiciona o m\xF3dulo "),Cl(50,"code"),qx(51,"PoCodeEditorModule"),og(),qx(52,":;"),og()(),Cl(53,"pre")(54,"code"),qx(55,`// app.module.ts
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
`),og()(),Cl(56,"ul")(57,"li"),qx(58,"adiciona o tema PO UI e tamb\xE9m o "),Cl(59,"em"),qx(60,"asset"),og(),qx(61," do Monaco no arquivo "),Cl(62,"code"),qx(63,"angular.json"),og(),qx(64,", conforme abaixo:"),og()(),Cl(65,"pre"),Qy(),qx(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Xy(),og()(),Cl(67,"div",7)(68,"h4",8),qx(69,"Seletor"),og(),Cl(70,"pre",9),qx(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),og()(),Cl(72,"h4",10),qx(73,"Propriedades"),og(),Cl(74,"table",11)(75,"tr",12)(76,"th",13),qx(77,"Nome"),og(),Cl(78,"th",13),qx(79,"Tipo"),og(),Cl(80,"th",13),qx(81,"Padr\xE3o"),og(),Cl(82,"th",13),qx(83,"Descri\xE7\xE3o"),og()(),Cl(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),qx(88," p-height"),Hl(89,"br"),og()()(),Cl(90,"td",18)(91,"code",19),qx(92,"string"),og()(),Cl(93,"td",20),qx(94,"-"),og(),Cl(95,"td",21)(96,"em")(97,"strong"),qx(98,"(opcional)"),og()(),Cl(99,"p"),qx(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),og()()(),Cl(101,"tr",14)(102,"td",15)(103,"div",16)(104,"span",17),qx(105," p-language"),Hl(106,"br"),og()()(),Cl(107,"td",18)(108,"code",19),qx(109,"string"),og()(),Cl(110,"td",20)(111,"p")(112,"code"),qx(113,"plainText"),og()()(),Cl(114,"td",21)(115,"em")(116,"strong"),qx(117,"(opcional)"),og()(),Cl(118,"p"),qx(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Cl(120,"a",22)(121,"strong"),qx(122,"Monaco Editor"),og()(),qx(123,"."),og(),Cl(124,"p"),qx(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Cl(126,"a",23)(127,"strong"),qx(128,"po-code-editor-register"),og()(),qx(129,"."),og()()(),Cl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),qx(134," p-readonly"),Hl(135,"br"),og()()(),Cl(136,"td",18)(137,"code",24),qx(138,"boolean"),og()(),Cl(139,"td",20)(140,"p")(141,"code"),qx(142,"false"),og()()(),Cl(143,"td",21)(144,"em")(145,"strong"),qx(146,"(opcional)"),og()(),Cl(147,"p"),qx(148,"Indica se o editor ser\xE1 aberto em modo de leitura."),og(),Cl(149,"p"),qx(150,"Neste caso, n\xE3o \xE9 poss\xEDvel editar o c\xF3digo inserido."),og(),Cl(151,"p"),qx(152,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),og()()(),Cl(153,"tr",14)(154,"td",15)(155,"div",16)(156,"span",17),qx(157," p-show-diff"),Hl(158,"br"),og()()(),Cl(159,"td",18)(160,"code",24),qx(161,"boolean"),og()(),Cl(162,"td",20)(163,"p")(164,"code"),qx(165,"false"),og()()(),Cl(166,"td",21)(167,"em")(168,"strong"),qx(169,"(opcional)"),og()(),Cl(170,"p"),qx(171,"Indica se o editor ser\xE1 aberto em modo de compara\xE7\xE3o."),og(),Cl(172,"p"),qx(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),og(),Cl(174,"p"),qx(175,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),og()()(),Cl(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),qx(180," p-suggestions"),Hl(181,"br"),og()()(),Cl(182,"td",18)(183,"code",25),qx(184,"Array<PoCodeEditorRegisterableSuggestion>"),og()(),Cl(185,"td",20),qx(186,"-"),og(),Cl(187,"td",21)(188,"em")(189,"strong"),qx(190,"(opcional)"),og()(),Cl(191,"p"),qx(192,"Lista de sugest\xF5es usadas pelo autocomplete dentro do editor."),og(),Cl(193,"p"),qx(194,"Para visualizar a lista de sugest\xF5es use o comando "),Cl(195,"code"),qx(196,"CTRL + SPACE"),og(),qx(197,"."),og(),Cl(198,"p"),qx(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),og(),Cl(200,"p"),qx(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),og(),Cl(202,"pre")(203,"code"),qx(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),og()(),Cl(205,"p"),qx(206,"Ao fornecer uma lista de sugest\xF5es \xE9 poss\xEDvel acelerar a escrita de scripts pelos usu\xE1rios."),og()()(),Cl(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),qx(211," p-theme"),Hl(212,"br"),og()()(),Cl(213,"td",18)(214,"code",19),qx(215,"string"),og()(),Cl(216,"td",20)(217,"p")(218,"code"),qx(219,"vs"),og()()(),Cl(220,"td",21)(221,"em")(222,"strong"),qx(223,"(opcional)"),og()(),Cl(224,"p"),qx(225,"Define um tema para o editor."),og(),Cl(226,"p"),qx(227,"Temas v\xE1lidos:"),og(),Cl(228,"ul")(229,"li")(230,"code"),qx(231,"vs-dark"),og()(),Cl(232,"li")(233,"code"),qx(234,"vs"),og()(),Cl(235,"li")(236,"code"),qx(237,"hc-black"),og()()(),Cl(238,"p"),qx(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),og()()()(),Cl(240,"h3"),qx(241,"Interfaces"),og(),Cl(242,"h4",26)(243,"code",5),qx(244,"PoCodeEditorRegisterableSuggestion"),og()(),Cl(245,"div",2)(246,"p"),qx(247,"Interface para configura\xE7\xE3o da lista de sugest\xE3o do autocomplete do code editor."),og()(),Cl(248,"h4",10),qx(249,"Propriedades"),og(),Cl(250,"table",11)(251,"tr",12)(252,"th",13),qx(253,"Nome"),og(),Cl(254,"th",13),qx(255,"Tipo"),og(),Cl(256,"th",13),qx(257,"Descri\xE7\xE3o"),og()(),Cl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),qx(262," documentation"),Hl(263,"br"),og()()(),Cl(264,"td",18)(265,"code",19),qx(266,"string"),og()(),Cl(267,"td",21)(268,"em")(269,"strong"),qx(270,"(opcional)"),og()(),Cl(271,"p"),qx(272,"Texto de ajuda que ser\xE1 exibido caso o usu\xE1rio deseje ver mais informa\xE7\xF5es sobre a sugest\xE3o."),og()()(),Cl(273,"tr",14)(274,"td",15)(275,"div",16)(276,"span",17),qx(277," insertText"),Hl(278,"br"),og()()(),Cl(279,"td",18)(280,"code",19),qx(281,"string"),og()(),Cl(282,"td",21)(283,"p"),qx(284,"Texto que ser\xE1 inserido no editor ao selecionar a sugest\xE3o exibida pelo autocomplete."),og()()(),Cl(285,"tr",14)(286,"td",15)(287,"div",16)(288,"span",17),qx(289," label"),Hl(290,"br"),og()()(),Cl(291,"td",18)(292,"code",19),qx(293,"string"),og()(),Cl(294,"td",21)(295,"p"),qx(296,"Texto que ser\xE1 exibido na lista de sugest\xF5es."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Code Editor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return a.changeTab("doc")}),Hl(3,"sample-po-code-editor-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return a.changeTab("web")}),Hl(5,"sample-po-code-editor-basic-view")(6,"sample-po-code-editor-labs-view")(7,"sample-po-code-editor-diff-view")(8,"sample-po-code-editor-terraform-view")(9,"sample-po-code-editor-suggestion-view"),og()()()),i&2&&(ZE("p-actions",a.actions),Lp(2),ZE("p-active",a.activeTab==="doc"),Lp(2),ZE("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[SNe,ofe,lfe,oe,ie,re,de,pe,me],encapsulation:2})}return n})();var Ve=[{path:"",component:ce}],ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[bL.forChild(Ve),bL]})}return n})();var st=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ca,ue]})}return n})();export{st as DocPoCodeEditorModule};