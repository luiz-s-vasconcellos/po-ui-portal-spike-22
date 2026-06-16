import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aV as Nh,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,ai as ya,al as lx,am as pw,an as $0,ap as hw,aq as G0,a9 as Xy,aa as Ky,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var oe=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Ul(0,"po-code-editor");},dependencies:[Nh],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Code Editor Basic"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-code-editor></po-code-editor>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-code-editor-basic"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,oe],encapsulation:2})}return n})();var ie=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:"java",value:"java"},{label:"yaml",value:"yaml"},{label:"typescript",value:"typescript"}];propertiesOptions=[{value:"readonly",label:"Read Only"}];themeOptions=[{label:"vs",value:"vs"},{label:"vs-dark",value:"vs-dark"},{label:"hc-black",value:"hc-black"}];ngOnInit(){this.restore();}restore(){this.language="",this.theme="",this.properties=[],this.codeEditor="";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs"]],standalone:false,decls:12,vars:10,consts:[["f","ngForm"],[1,"po-row"],["p-height","300",1,"po-md-12",3,"ngModelChange","ngModel","p-language","p-readonly","p-theme"],["name","language","p-label","Language",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","theme","p-label","Theme",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let g=lx();wl(0,"div",1)(1,"po-code-editor",2),pw("ngModelChange",function(m){return Qy(g),$x(a.codeEditor,m)||(a.codeEditor=m),Jy(m)}),ng(),$0(),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",1)(6,"po-select",3),pw("ngModelChange",function(m){return Qy(g),$x(a.language,m)||(a.language=m),Jy(m)}),ng(),$0(),wl(7,"po-select",4),pw("ngModelChange",function(m){return Qy(g),$x(a.theme,m)||(a.theme=m),Jy(m)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-checkbox-group",5),pw("ngModelChange",function(m){return Qy(g),$x(a.properties,m)||(a.properties=m),Jy(m)}),ng(),$0(),ng(),wl(10,"div",1)(11,"po-button",6),ut("p-click",function(){return a.restore()}),ng()()();}i&2&&(Pp(),hw("ngModel",a.codeEditor),YE("p-language",a.language)("p-readonly",a.properties.includes("readonly"))("p-theme",a.theme),G0(),Pp(5),hw("ngModel",a.language),YE("p-options",a.languageOptions),G0(),Pp(),hw("ngModel",a.theme),YE("p-options",a.themeOptions),G0(),Pp(2),hw("ngModel",a.properties),YE("p-options",a.propertiesOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,ya,Nh],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Code Editor Labs"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-code-editor-labs"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Se,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return n})();var re=(()=>{class n{code=[`class Calc {
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
`];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff"]],standalone:false,decls:2,vars:1,consts:[[1,"po-row"],["p-height","300","p-language","typescript","p-show-diff","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(wl(0,"div",0)(1,"po-code-editor",1),pw("ngModelChange",function(y){return $x(a.code,y)||(a.code=y),y}),ng(),$0(),ng()),i&2&&(Pp(),hw("ngModel",a.code),G0());},dependencies:[iY,ck,Nh],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Code Editor - Diff"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-code-editor-diff"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return n})();var de=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-height","300","p-language","terraform",1,"po-md-12"]],template:function(i,a){i&1&&(wl(0,"div",0),Ul(1,"po-code-editor",1),ng());},dependencies:[Nh],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform-view"]],standalone:false,decls:32,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Code Editor - Terraform"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"),ng(),wl(23,"pre",9),Ux(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),ng(),wl(25,"label",6),Ux(26,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"),ng(),wl(27,"pre",9),Ux(28,`/**
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
`),ng()()()()(),wl(29,"div",10),Ul(30,"sample-po-code-editor-terraform"),ng(),Ul(31,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,de],encapsulation:2})}return n})();var pe=(()=>{class n{language="html";suggestions=[{label:"po",insertText:"PO UI"},{label:"ng",insertText:"Angular"},{label:"po-btn",insertText:'<po-button p-label="${1:label}"></po-button>'},{label:"po-inp",insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion"]],standalone:false,decls:1,vars:2,consts:[[3,"p-suggestions","p-language"]],template:function(i,a){i&1&&Ul(0,"po-code-editor",0),i&2&&YE("p-suggestions",a.suggestions)("p-language",a.language);},dependencies:[Nh],encapsulation:2,changeDetection:1})}return n})();var _e=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Code Editor Suggestion"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-code-editor-suggestion"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_e,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-doc"]],standalone:false,decls:297,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-shell"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://microsoft.github.io/monaco-editor/"],["href","https://po-ui.io/documentation/po-code-editor-register?view=doc"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoCodeEditorRegisterableSuggestion>"],[1,"docs-api-h4","docs-api-class-name"]],template:function(i,a){i&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoCodeEditorModule } from '@po-ui/ng-code-editor';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-code-editor."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoCodeEditorComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O "),wl(15,"code"),Ux(16,"po-code-editor"),ng(),Ux(17," \xE9 um componente para edi\xE7\xE3o de c\xF3digo fonte baseado no Monaco Editor da Microsoft."),ng(),wl(18,"p"),Ux(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),ng(),wl(20,"p"),Ux(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),ng(),wl(22,"p"),Ux(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),ng(),wl(24,"h4"),Ux(25,"Adicionando o pacote @po-ui/ng-code-editor"),ng(),wl(26,"p"),Ux(27,"Para instalar o pacote "),wl(28,"code"),Ux(29,"po-code-editor"),ng(),Ux(30," em sua aplica\xE7\xE3o execute:"),ng(),wl(31,"pre")(32,"code",6),Ux(33,"`ng add @po-ui/ng-code-editor`\n"),ng()(),wl(34,"p"),Ux(35,"O comando "),wl(36,"code"),Ux(37,"ng add"),ng(),Ux(38," do "),wl(39,"code"),Ux(40,"Angular CLI"),ng(),Ux(41,":"),ng(),wl(42,"ul")(43,"li"),Ux(44,"inclui o "),wl(45,"code"),Ux(46,"po-code-editor"),ng(),Ux(47," no seu projeto;"),ng(),wl(48,"li"),Ux(49,"adiciona o m\xF3dulo "),wl(50,"code"),Ux(51,"PoCodeEditorModule"),ng(),Ux(52,":;"),ng()(),wl(53,"pre")(54,"code"),Ux(55,`// app.module.ts
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
`),ng()(),wl(56,"ul")(57,"li"),Ux(58,"adiciona o tema PO UI e tamb\xE9m o "),wl(59,"em"),Ux(60,"asset"),ng(),Ux(61," do Monaco no arquivo "),wl(62,"code"),Ux(63,"angular.json"),ng(),Ux(64,", conforme abaixo:"),ng()(),wl(65,"pre"),Xy(),Ux(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Ky(),ng()(),wl(67,"div",7)(68,"h4",8),Ux(69,"Seletor"),ng(),wl(70,"pre",9),Ux(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),ng()(),wl(72,"h4",10),Ux(73,"Propriedades"),ng(),wl(74,"table",11)(75,"tr",12)(76,"th",13),Ux(77,"Nome"),ng(),wl(78,"th",13),Ux(79,"Tipo"),ng(),wl(80,"th",13),Ux(81,"Padr\xE3o"),ng(),wl(82,"th",13),Ux(83,"Descri\xE7\xE3o"),ng()(),wl(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),Ux(88," p-height"),Ul(89,"br"),ng()()(),wl(90,"td",18)(91,"code",19),Ux(92,"string"),ng()(),wl(93,"td",20),Ux(94,"-"),ng(),wl(95,"td",21)(96,"em")(97,"strong"),Ux(98,"(opcional)"),ng()(),wl(99,"p"),Ux(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),ng()()(),wl(101,"tr",14)(102,"td",15)(103,"div",16)(104,"span",17),Ux(105," p-language"),Ul(106,"br"),ng()()(),wl(107,"td",18)(108,"code",19),Ux(109,"string"),ng()(),wl(110,"td",20)(111,"p")(112,"code"),Ux(113,"plainText"),ng()()(),wl(114,"td",21)(115,"em")(116,"strong"),Ux(117,"(opcional)"),ng()(),wl(118,"p"),Ux(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),wl(120,"a",22)(121,"strong"),Ux(122,"Monaco Editor"),ng()(),Ux(123,"."),ng(),wl(124,"p"),Ux(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),wl(126,"a",23)(127,"strong"),Ux(128,"po-code-editor-register"),ng()(),Ux(129,"."),ng()()(),wl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Ux(134," p-readonly"),Ul(135,"br"),ng()()(),wl(136,"td",18)(137,"code",24),Ux(138,"boolean"),ng()(),wl(139,"td",20)(140,"p")(141,"code"),Ux(142,"false"),ng()()(),wl(143,"td",21)(144,"em")(145,"strong"),Ux(146,"(opcional)"),ng()(),wl(147,"p"),Ux(148,"Indica se o editor ser\xE1 aberto em modo de leitura."),ng(),wl(149,"p"),Ux(150,"Neste caso, n\xE3o \xE9 poss\xEDvel editar o c\xF3digo inserido."),ng(),wl(151,"p"),Ux(152,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),ng()()(),wl(153,"tr",14)(154,"td",15)(155,"div",16)(156,"span",17),Ux(157," p-show-diff"),Ul(158,"br"),ng()()(),wl(159,"td",18)(160,"code",24),Ux(161,"boolean"),ng()(),wl(162,"td",20)(163,"p")(164,"code"),Ux(165,"false"),ng()()(),wl(166,"td",21)(167,"em")(168,"strong"),Ux(169,"(opcional)"),ng()(),wl(170,"p"),Ux(171,"Indica se o editor ser\xE1 aberto em modo de compara\xE7\xE3o."),ng(),wl(172,"p"),Ux(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),ng(),wl(174,"p"),Ux(175,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),ng()()(),wl(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),Ux(180," p-suggestions"),Ul(181,"br"),ng()()(),wl(182,"td",18)(183,"code",25),Ux(184,"Array<PoCodeEditorRegisterableSuggestion>"),ng()(),wl(185,"td",20),Ux(186,"-"),ng(),wl(187,"td",21)(188,"em")(189,"strong"),Ux(190,"(opcional)"),ng()(),wl(191,"p"),Ux(192,"Lista de sugest\xF5es usadas pelo autocomplete dentro do editor."),ng(),wl(193,"p"),Ux(194,"Para visualizar a lista de sugest\xF5es use o comando "),wl(195,"code"),Ux(196,"CTRL + SPACE"),ng(),Ux(197,"."),ng(),wl(198,"p"),Ux(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),ng(),wl(200,"p"),Ux(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),ng(),wl(202,"pre")(203,"code"),Ux(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),ng()(),wl(205,"p"),Ux(206,"Ao fornecer uma lista de sugest\xF5es \xE9 poss\xEDvel acelerar a escrita de scripts pelos usu\xE1rios."),ng()()(),wl(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),Ux(211," p-theme"),Ul(212,"br"),ng()()(),wl(213,"td",18)(214,"code",19),Ux(215,"string"),ng()(),wl(216,"td",20)(217,"p")(218,"code"),Ux(219,"vs"),ng()()(),wl(220,"td",21)(221,"em")(222,"strong"),Ux(223,"(opcional)"),ng()(),wl(224,"p"),Ux(225,"Define um tema para o editor."),ng(),wl(226,"p"),Ux(227,"Temas v\xE1lidos:"),ng(),wl(228,"ul")(229,"li")(230,"code"),Ux(231,"vs-dark"),ng()(),wl(232,"li")(233,"code"),Ux(234,"vs"),ng()(),wl(235,"li")(236,"code"),Ux(237,"hc-black"),ng()()(),wl(238,"p"),Ux(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),ng()()()(),wl(240,"h3"),Ux(241,"Interfaces"),ng(),wl(242,"h4",26)(243,"code",5),Ux(244,"PoCodeEditorRegisterableSuggestion"),ng()(),wl(245,"div",2)(246,"p"),Ux(247,"Interface para configura\xE7\xE3o da lista de sugest\xE3o do autocomplete do code editor."),ng()(),wl(248,"h4",10),Ux(249,"Propriedades"),ng(),wl(250,"table",11)(251,"tr",12)(252,"th",13),Ux(253,"Nome"),ng(),wl(254,"th",13),Ux(255,"Tipo"),ng(),wl(256,"th",13),Ux(257,"Descri\xE7\xE3o"),ng()(),wl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),Ux(262," documentation"),Ul(263,"br"),ng()()(),wl(264,"td",18)(265,"code",19),Ux(266,"string"),ng()(),wl(267,"td",21)(268,"em")(269,"strong"),Ux(270,"(opcional)"),ng()(),wl(271,"p"),Ux(272,"Texto de ajuda que ser\xE1 exibido caso o usu\xE1rio deseje ver mais informa\xE7\xF5es sobre a sugest\xE3o."),ng()()(),wl(273,"tr",14)(274,"td",15)(275,"div",16)(276,"span",17),Ux(277," insertText"),Ul(278,"br"),ng()()(),wl(279,"td",18)(280,"code",19),Ux(281,"string"),ng()(),wl(282,"td",21)(283,"p"),Ux(284,"Texto que ser\xE1 inserido no editor ao selecionar a sugest\xE3o exibida pelo autocomplete."),ng()()(),wl(285,"tr",14)(286,"td",15)(287,"div",16)(288,"span",17),Ux(289," label"),Ul(290,"br"),ng()()(),wl(291,"td",18)(292,"code",19),Ux(293,"string"),ng()(),wl(294,"td",21)(295,"p"),Ux(296,"Texto que ser\xE1 exibido na lista de sugest\xF5es."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Code Editor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return a.changeTab("doc")}),Ul(3,"sample-po-code-editor-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return a.changeTab("web")}),Ul(5,"sample-po-code-editor-basic-view")(6,"sample-po-code-editor-labs-view")(7,"sample-po-code-editor-diff-view")(8,"sample-po-code-editor-terraform-view")(9,"sample-po-code-editor-suggestion-view"),ng()()()),i&2&&(YE("p-actions",a.actions),Pp(2),YE("p-active",a.activeTab==="doc"),Pp(2),YE("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[D3,Vd,Rd,ne,ae,le,se,me,ce],encapsulation:2})}return n})();var Fe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[vL.forChild(Fe),vL]})}return n})();var ft=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[u5,ge]})}return n})();export{ft as DocPoCodeEditorModule};