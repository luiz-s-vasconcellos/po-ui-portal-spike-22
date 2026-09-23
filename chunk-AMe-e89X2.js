import{Br as TN,Cr as Nx,Et as V8e,Ii as ht,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Ui as lg,Wr as U$1,Xn as Cn,Yi as mN,_ as $8e,_r as Ml,bi as cw,br as NL,ga as w,gi as bw,jn as wp,k as D8e,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,qt as e0e,r as Ga,ri as Xn,ua as ue,un as nb,vt as SCe,wa as zx,xa as xx}from"./main-NT5YGKBQ.js";var U=(()=>{class o{widget={title:`Arraste-me`,body:`Este widget pode ser arrastado livremente.`};static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drag-basic`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Arraste-me`,1,`po-md-4`,3,`p-drag`],[1,`po-font-text`]],template:function(n,p){n&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),mN(3,`Este widget pode ser arrastado livremente. Segure o handle e mova-o.`),lg()()()),n&2&&(Up(),cw(`p-drag`,p.widget))},dependencies:[$8e,D8e],encapsulation:2})}return o})();var ne=o=>({"docs-sample-code-tabs":o});var K=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Drag Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return p.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-drag-basic/sample-po-drag-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-md-4" [p-drag]="widget" p-title="Arraste-me">
    <div class="po-font-text">Este widget pode ser arrastado livremente. Segure o handle e mova-o.</div>
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-drag-basic/sample-po-drag-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-drag-basic',
  templateUrl: './sample-po-drag-basic.component.html',
  standalone: false
})
export class SamplePoDragBasicComponent {
  widget = { title: 'Arraste-me', body: 'Este widget pode ser arrastado livremente.' };
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-drag-basic`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+p.sampleCodeButtonIcon),Up(),gg(` `,p.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ne,p.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,U],encapsulation:2,changeDetection:1})}return o})();var pe=()=>[`list-doing`,`list-done`];var re=()=>[`list-todo`,`list-done`];var de=()=>[`list-todo`,`list-doing`];var q=(o,c)=>c.id;function se(o,c){if(o&1&&ql(0,`po-widget`,4),o&2){let a=c.$implicit,n=zx();cw(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function le(o,c){if(o&1&&ql(0,`po-widget`,7),o&2){let a=c.$implicit,n=zx();cw(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function me(o,c){if(o&1&&ql(0,`po-widget`,10),o&2){let a=c.$implicit,n=zx();cw(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}var X=(()=>{class o{todoList=U$1([{id:`t1`},{id:`t2`},{id:`t3`}]);doingList=U$1([{id:`d1`},{id:`d2`}]);doneList=U$1([{id:`f1`}]);tasksWidgets=U$1({t1:{title:`Criar wireframes`},t2:{title:`Definir contrato da API`},t3:{title:`Escrever testes unitários`},d1:{title:`Implementar tela de login`},d2:{title:`Configurar CI/CD`},f1:{title:`Kickoff do projeto`}});listMap={"list-todo":`todo`,"list-doing":`doing`,"list-done":`done`};onDropped(a,n){if(this.setList(n,a.items),a.previousContainer){let p=this.listMap[a.previousContainer];p&&this.setList(p,this.getList(p).filter(g=>g.id!==a.item.id))}}getList(a){switch(a){case`todo`:return this.todoList();case`doing`:return this.doingList();case`done`:return this.doneList()}}setList(a,n){switch(a){case`todo`:this.todoList.set(n);break;case`doing`:this.doingList.set(n);break;case`done`:this.doneList.set(n);break}}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drop-list-vertical`]],standalone:!1,decls:16,vars:12,consts:[[1,`po-row`],[1,`po-md-4`,3,`p-height`],[`p-label`,`A Fazer`],[`p-drop-list-id`,`list-todo`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`A Fazer`,`p-tag-type`,`warning`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Em Andamento`],[`p-drop-list-id`,`list-doing`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Em Andamento`,`p-tag-type`,`info`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Concluído`],[`p-drop-list-id`,`list-done`,`p-drop-list-disabled`,``,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Concluído`,`p-tag-type`,`success`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Ml(0,`div`,0)(1,`po-container`,1),ql(2,`po-divider`,2),Ml(3,`div`,3),ht(`p-dropped`,function(C){return p.onDropped(C,`todo`)}),xx(4,se,1,2,`po-widget`,4,q),lg()(),Ml(6,`po-container`,1),ql(7,`po-divider`,5),Ml(8,`div`,6),ht(`p-dropped`,function(C){return p.onDropped(C,`doing`)}),xx(9,le,1,2,`po-widget`,7,q),lg()(),Ml(11,`po-container`,1),ql(12,`po-divider`,8),Ml(13,`div`,9),ht(`p-dropped`,function(C){return p.onDropped(C,`done`)}),xx(14,me,1,2,`po-widget`,10,q),lg()()()),n&2&&(Up(),cw(`p-height`,500),Up(2),cw(`p-drop-list`,p.todoList())(`p-drop-list-connected-to`,TN(9,pe)),Up(),Nx(p.todoList()),Up(2),cw(`p-height`,500),Up(2),cw(`p-drop-list`,p.doingList())(`p-drop-list-connected-to`,TN(10,re)),Up(),Nx(p.doingList()),Up(2),cw(`p-height`,500),Up(2),cw(`p-drop-list`,p.doneList())(`p-drop-list-connected-to`,TN(11,de)),Up(),Nx(p.doneList()))},dependencies:[wp,nb,$8e,D8e,e0e],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drop-list-vertical-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Drop List - Vertical (Kanban)`),lg(),Ml(4,`a`,2),ht(`click`,function(){return p.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-container class="po-md-4" [p-height]="500">
    <po-divider p-label="A Fazer"></po-divider>

    <div
      class="po-row"
      style="min-height: 100px"
      [p-drop-list]="todoList()"
      p-drop-list-id="list-todo"
      [p-drop-list-connected-to]="['list-doing', 'list-done']"
      (p-dropped)="onDropped($event, 'todo')"
    >
      @for (task of todoList(); track task.id) {
        <po-widget
          class="po-md-12 po-mb-2"
          [p-drag]="task"
          [p-title]="tasksWidgets()[task.id]?.title"
          p-tag="A Fazer"
          p-tag-type="warning"
        >
        </po-widget>
      }
    </div>
  </po-container>

  <po-container class="po-md-4" [p-height]="500">
    <po-divider p-label="Em Andamento"></po-divider>

    <div
      class="po-row"
      style="min-height: 100px"
      [p-drop-list]="doingList()"
      p-drop-list-id="list-doing"
      [p-drop-list-connected-to]="['list-todo', 'list-done']"
      (p-dropped)="onDropped($event, 'doing')"
    >
      @for (task of doingList(); track task.id) {
        <po-widget
          class="po-md-12 po-mb-2"
          [p-drag]="task"
          [p-title]="tasksWidgets()[task.id]?.title"
          p-tag="Em Andamento"
          p-tag-type="info"
        >
        </po-widget>
      }
    </div>
  </po-container>

  <po-container class="po-md-4" [p-height]="500">
    <po-divider p-label="Conclu\xEDdo"></po-divider>

    <div
      class="po-row"
      style="min-height: 100px"
      [p-drop-list]="doneList()"
      p-drop-list-id="list-done"
      [p-drop-list-connected-to]="['list-todo', 'list-doing']"
      (p-dropped)="onDropped($event, 'done')"
      p-drop-list-disabled
    >
      @for (task of doneList(); track task.id) {
        <po-widget
          class="po-md-12 po-mb-2"
          [p-drag]="task"
          [p-title]="tasksWidgets()[task.id]?.title"
          p-tag="Conclu\xEDdo"
          p-tag-type="success"
        >
        </po-widget>
      }
    </div>
  </po-container>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, signal } from '@angular/core';

import { PoDraggableItem, PoDropEvent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-drop-list-vertical',
  templateUrl: './sample-po-drop-list-vertical.component.html',
  standalone: false
})
export class SamplePoDropListVerticalComponent {
  todoList = signal<Array<PoDraggableItem>>([{ id: 't1' }, { id: 't2' }, { id: 't3' }]);

  doingList = signal<Array<PoDraggableItem>>([{ id: 'd1' }, { id: 'd2' }]);

  doneList = signal<Array<PoDraggableItem>>([{ id: 'f1' }]);

  tasksWidgets = signal<Record<string, { title: string }>>({
    t1: { title: 'Criar wireframes' },
    t2: { title: 'Definir contrato da API' },
    t3: { title: 'Escrever testes unit\xE1rios' },
    d1: { title: 'Implementar tela de login' },
    d2: { title: 'Configurar CI/CD' },
    f1: { title: 'Kickoff do projeto' }
  });

  private readonly listMap: Record<string, 'todo' | 'doing' | 'done'> = {
    'list-todo': 'todo',
    'list-doing': 'doing',
    'list-done': 'done'
  };

  onDropped(event: PoDropEvent, list: 'todo' | 'doing' | 'done'): void {
    this.setList(list, event.items);

    if (event.previousContainer) {
      const sourceList = this.listMap[event.previousContainer];
      if (sourceList) {
        this.setList(
          sourceList,
          this.getList(sourceList).filter(item => item.id !== event.item.id)
        );
      }
    }
  }

  private getList(list: 'todo' | 'doing' | 'done'): Array<PoDraggableItem> {
    switch (list) {
      case 'todo':
        return this.todoList();
      case 'doing':
        return this.doingList();
      case 'done':
        return this.doneList();
    }
  }

  private setList(list: 'todo' | 'doing' | 'done', items: Array<PoDraggableItem>): void {
    switch (list) {
      case 'todo':
        this.todoList.set(items);
        break;
      case 'doing':
        this.doingList.set(items);
        break;
      case 'done':
        this.doneList.set(items);
        break;
    }
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-drop-list-vertical`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+p.sampleCodeButtonIcon),Up(),gg(` `,p.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,p.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,X],encapsulation:2,changeDetection:1})}return o})();var ve=(o,c)=>c.id;function he(o,c){if(o&1&&(Ml(0,`po-widget`,4)(1,`p`),mN(2),lg()()),o&2){let a=c.$implicit,n=zx();cw(`p-drag`,a)(`p-title`,n.stepsWidgets()[a.id]?.title),Up(2),bw(n.stepsWidgets()[a.id]?.title)}}var Q=(()=>{class o{steps=U$1([{id:`s1`},{id:`s2`},{id:`s3`},{id:`s4`}]);stepsWidgets=U$1({s1:{title:`Requisitos`},s2:{title:`Design`},s3:{title:`Desenvolvimento`},s4:{title:`Testes`}});onDropped(a){this.steps.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drop-list-horizontal`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Pipeline — Orientação Horizontal`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-horizontal`,`p-drop-list-orientation`,`horizontal`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`info`,1,`po-md-3`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Ml(0,`po-container`,0)(1,`p`,1),mN(2,` Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca é detectada pelo eixo X. `),lg(),Ml(3,`div`,2)(4,`div`,3),ht(`p-dropped`,function(C){return p.onDropped(C)}),xx(5,he,3,3,`po-widget`,4,ve),lg()()()),n&2&&(Up(4),cw(`p-drop-list`,p.steps()),Up(),Nx(p.steps()))},dependencies:[wp,$8e,D8e,e0e],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drop-list-horizontal-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Drop List - Horizontal (Pipeline)`),lg(),Ml(4,`a`,2),ht(`click`,function(){return p.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container p-title="Pipeline \u2014 Orienta\xE7\xE3o Horizontal">
  <p class="po-font-text po-mb-3">
    Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca \xE9 detectada pelo eixo X.
  </p>

  <div class="po-row">
    <div
      class="po-md-12"
      [p-drop-list]="steps()"
      p-drop-list-id="list-horizontal"
      p-drop-list-orientation="horizontal"
      (p-dropped)="onDropped($event)"
    >
      @for (step of steps(); track step.id) {
        <po-widget class="po-md-3 po-mb-2" [p-drag]="step" [p-title]="stepsWidgets()[step.id]?.title" p-tag-type="info">
          <p>{ { stepsWidgets()[step.id]?.title }}</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, signal } from '@angular/core';
import { PoDraggableItem, PoDropEvent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-drop-list-horizontal',
  templateUrl: './sample-po-drop-list-horizontal.component.html',
  standalone: false
})
export class SamplePoDropListHorizontalComponent {
  steps = signal<Array<PoDraggableItem>>([{ id: 's1' }, { id: 's2' }, { id: 's3' }, { id: 's4' }]);

  stepsWidgets = signal<Record<string, { title: string }>>({
    s1: { title: 'Requisitos' },
    s2: { title: 'Design' },
    s3: { title: 'Desenvolvimento' },
    s4: { title: 'Testes' }
  });

  onDropped(event: PoDropEvent): void {
    this.steps.set(event.items);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-drop-list-horizontal`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+p.sampleCodeButtonIcon),Up(),gg(` `,p.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,p.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Q],encapsulation:2,changeDetection:1})}return o})();var De=(o,c)=>c.id;function Se(o,c){if(o&1&&(Ml(0,`po-widget`,4)(1,`p`),mN(2),lg()()),o&2){let a=c.$implicit,n=zx();cw(`p-drag`,a)(`p-title`,n.cardsWidgets()[a.id]?.title),Up(2),bw(n.cardsWidgets()[a.id]?.title)}}var J=(()=>{class o{cards=U$1([{id:`c1`},{id:`c2`},{id:`c3`},{id:`c4`},{id:`c5`},{id:`c6`}]);cardsWidgets=U$1({c1:{title:`Faturamento`},c2:{title:`Estoque`},c3:{title:`Compras`},c4:{title:`RH`},c5:{title:`Fiscal`},c6:{title:`Financeiro`}});onDropped(a){this.cards.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drop-list-mixed`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Dashboard — Orientação Mixed`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-mixed`,`p-drop-list-orientation`,`mixed`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`neutral`,1,`po-md-4`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Ml(0,`po-container`,0)(1,`p`,1),mN(2,` Arraste os cards para reorganizar o layout do dashboard. A orientação mixed detecta trocas nos eixos X e Y, ideal para layouts em grid onde os itens quebram em múltiplas linhas. `),lg(),Ml(3,`div`,2)(4,`div`,3),ht(`p-dropped`,function(C){return p.onDropped(C)}),xx(5,Se,3,3,`po-widget`,4,De),lg()()()),n&2&&(Up(4),cw(`p-drop-list`,p.cards()),Up(),Nx(p.cards()))},dependencies:[wp,$8e,D8e,e0e],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drop-list-mixed-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Drop List - Mixed (Dashboard)`),lg(),Ml(4,`a`,2),ht(`click`,function(){return p.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container p-title="Dashboard \u2014 Orienta\xE7\xE3o Mixed">
  <p class="po-font-text po-mb-3">
    Arraste os cards para reorganizar o layout do dashboard. A orienta\xE7\xE3o mixed detecta trocas nos eixos X e Y, ideal
    para layouts em grid onde os itens quebram em m\xFAltiplas linhas.
  </p>

  <div class="po-row">
    <div
      class="po-md-12"
      [p-drop-list]="cards()"
      p-drop-list-id="list-mixed"
      p-drop-list-orientation="mixed"
      (p-dropped)="onDropped($event)"
    >
      @for (card of cards(); track card.id) {
        <po-widget
          class="po-md-4 po-mb-2"
          [p-drag]="card"
          [p-title]="cardsWidgets()[card.id]?.title"
          p-tag-type="neutral"
        >
          <p>{ { cardsWidgets()[card.id]?.title }}</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, signal } from '@angular/core';
import { PoDraggableItem, PoDropEvent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-drop-list-mixed',
  templateUrl: './sample-po-drop-list-mixed.component.html',
  standalone: false
})
export class SamplePoDropListMixedComponent {
  cards = signal<Array<PoDraggableItem>>([
    { id: 'c1' },
    { id: 'c2' },
    { id: 'c3' },
    { id: 'c4' },
    { id: 'c5' },
    { id: 'c6' }
  ]);

  cardsWidgets = signal<Record<string, { title: string }>>({
    c1: { title: 'Faturamento' },
    c2: { title: 'Estoque' },
    c3: { title: 'Compras' },
    c4: { title: 'RH' },
    c5: { title: 'Fiscal' },
    c6: { title: 'Financeiro' }
  });

  onDropped(event: PoDropEvent): void {
    this.cards.set(event.items);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-drop-list-mixed`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+p.sampleCodeButtonIcon),Up(),gg(` `,p.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,xe,p.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,J],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-drag-doc`]],standalone:!1,decls:226,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoDraggableItem`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(n,p){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoDragDropModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo que exporta as diretivas de drag & drop do PO UI:`),lg(),Ml(7,`ul`)(8,`li`)(9,`code`),mN(10,`PoDropListDirective`),lg(),mN(11,` (`),Ml(12,`code`),mN(13,`p-drop-list`),lg(),mN(14,`) — define um container de drop.`),lg(),Ml(15,`li`)(16,`code`),mN(17,`PoDragDirective`),lg(),mN(18,` (`),Ml(19,`code`),mN(20,`p-drag`),lg(),mN(21,`) — torna um elemento arrastável.`),lg()()(),Ml(22,`h3`,3),mN(23,`Componente`),lg(),Ml(24,`h4`,4)(25,`code`,5),mN(26,`PoDragDirective`),lg()(),Ml(27,`div`,2)(28,`p`),mN(29,` A diretiva `),Ml(30,`code`),mN(31,`p-drag`),lg(),mN(32,` torna um elemento arrastável, encapsulando o `),Ml(33,`code`),mN(34,`CdkDrag`),lg(),mN(35,` do Angular CDK.`),lg(),Ml(36,`p`),mN(37,`Ela pode ser usada em conjunto com a diretiva `),Ml(38,`code`),mN(39,`p-drop-list`),lg(),mN(40,`. O valor atribuído ao seletor (`),Ml(41,`code`),mN(42,`p-drag`),lg(),mN(43,`)
corresponde ao dado do item, que \xE9 emitido nos eventos de drag.`),lg(),Ml(44,`blockquote`)(45,`p`),mN(46,`Atualmente validada com o componente `),Ml(47,`code`),mN(48,`po-widget`),lg(),mN(49,`. O suporte a outros componentes
PO UI ser\xE1 avaliado em vers\xF5es futuras.`),lg()()(),Ml(50,`div`,6)(51,`h4`,7),mN(52,`Seletor`),lg(),Ml(53,`pre`,8),mN(54,`<[p-drag]
    p-drag="PoDraggableItem"
    p-drag-disabled="boolean"
    (p-drag-ended)="EventEmitter"
    (p-drag-moved)="EventEmitter"
    (p-drag-started)="EventEmitter" >
</[p-drag]>
`),lg()(),Ml(55,`h4`,9),mN(56,`Propriedades`),lg(),Ml(57,`table`,10)(58,`tr`,11)(59,`th`,12),mN(60,`Nome`),lg(),Ml(61,`th`,12),mN(62,`Tipo`),lg(),Ml(63,`th`,12),mN(64,`Padrão`),lg(),Ml(65,`th`,12),mN(66,`Descrição`),lg()(),Ml(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),mN(71,` p-drag`),ql(72,`br`),lg()()(),Ml(73,`td`,17)(74,`code`,18),mN(75,`PoDraggableItem`),lg()(),Ml(76,`td`,19),mN(77,`-`),lg(),Ml(78,`td`,20)(79,`p`),mN(80,`Dado associado ao item arrast\xE1vel. O valor \xE9 emitido nos eventos
`),Ml(81,`code`),mN(82,`p-drag-started`),lg(),mN(83,` e `),Ml(84,`code`),mN(85,`p-drag-ended`),lg(),mN(86,`.`),lg()()(),Ml(87,`tr`,13)(88,`td`,14)(89,`div`,15)(90,`span`,16),mN(91,` p-drag-disabled`),ql(92,`br`),lg()()(),Ml(93,`td`,17)(94,`code`,21),mN(95,`boolean`),lg()(),Ml(96,`td`,19)(97,`p`),mN(98,`false`),lg()(),Ml(99,`td`,20)(100,`em`)(101,`strong`),mN(102,`(opcional)`),lg()(),Ml(103,`p`),mN(104,`Desabilita o arraste do item. Quando `),Ml(105,`code`),mN(106,`true`),lg(),mN(107,`, o usu\xE1rio n\xE3o pode iniciar
um gesto de arrastar neste elemento, mas o item continua participando do
c\xE1lculo de posi\xE7\xF5es dos vizinhos dentro do `),Ml(108,`code`),mN(109,`p-drop-list`),lg(),mN(110,`.`),lg()()(),Ml(111,`tr`,13)(112,`td`,14)(113,`div`,22)(114,`span`,23),mN(115,` (p-drag-ended)`),ql(116,`br`),lg()()(),Ml(117,`td`,17)(118,`code`,24),mN(119,`EventEmitter`),lg()(),Ml(120,`td`,19),mN(121,`-`),lg(),Ml(122,`td`,20)(123,`em`)(124,`strong`),mN(125,`(opcional)`),lg()(),Ml(126,`p`),mN(127,`Evento emitido quando o arraste do item \xE9 encerrado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Ml(128,`code`),mN(129,`p-drag`),lg(),mN(130,`).`),lg()()(),Ml(131,`tr`,13)(132,`td`,14)(133,`div`,22)(134,`span`,23),mN(135,` (p-drag-moved)`),ql(136,`br`),lg()()(),Ml(137,`td`,17)(138,`code`,24),mN(139,`EventEmitter`),lg()(),Ml(140,`td`,19),mN(141,`-`),lg(),Ml(142,`td`,20)(143,`em`)(144,`strong`),mN(145,`(opcional)`),lg()(),Ml(146,`p`),mN(147,`Evento emitido continuamente enquanto o item est\xE1 sendo arrastado.
Cont\xE9m a posi\xE7\xE3o do ponteiro, a dist\xE2ncia percorrida e a dire\xE7\xE3o do movimento.`),lg(),Ml(148,`blockquote`)(149,`p`)(150,`strong`),mN(151,`Atenção:`),lg(),mN(152,` Este evento \xE9 disparado em alta frequ\xEAncia (a cada frame de movimento).
Evite opera\xE7\xF5es custosas no handler ou aplique t\xE9cnicas de throttle/debounce.`),lg()()()(),Ml(153,`tr`,13)(154,`td`,14)(155,`div`,22)(156,`span`,23),mN(157,` (p-drag-started)`),ql(158,`br`),lg()()(),Ml(159,`td`,17)(160,`code`,24),mN(161,`EventEmitter`),lg()(),Ml(162,`td`,19),mN(163,`-`),lg(),Ml(164,`td`,20)(165,`em`)(166,`strong`),mN(167,`(opcional)`),lg()(),Ml(168,`p`),mN(169,`Evento emitido quando o arraste do item \xE9 iniciado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Ml(170,`code`),mN(171,`p-drag`),lg(),mN(172,`).`),lg()()()(),Ml(173,`h3`),mN(174,`Interfaces`),lg(),Ml(175,`h4`,25)(176,`code`,5),mN(177,`PoDraggableItem`),lg()(),Ml(178,`div`,2)(179,`p`),mN(180,`Define a estrutura de um item arrast\xE1vel gen\xE9rico utilizado pelas diretivas
`),Ml(181,`code`),mN(182,`PoDropListDirective`),lg(),mN(183,` e `),Ml(184,`code`),mN(185,`PoDragDirective`),lg(),mN(186,`.`),lg(),Ml(187,`p`),mN(188,`A interface \xE9 intencionalmente leve \u2014 cont\xE9m apenas os campos essenciais para
qualquer componente arrast\xE1vel.`),lg()(),Ml(189,`h4`,9),mN(190,`Propriedades`),lg(),Ml(191,`table`,10)(192,`tr`,11)(193,`th`,12),mN(194,`Nome`),lg(),Ml(195,`th`,12),mN(196,`Tipo`),lg(),Ml(197,`th`,12),mN(198,`Descrição`),lg()(),Ml(199,`tr`,13)(200,`td`,14)(201,`div`,15)(202,`span`,16),mN(203,` data`),ql(204,`br`),lg()()(),Ml(205,`td`,17)(206,`code`,26),mN(207,`any`),lg()(),Ml(208,`td`,20)(209,`em`)(210,`strong`),mN(211,`(opcional)`),lg()(),Ml(212,`p`),mN(213,`Dados arbitr\xE1rios do consumidor. \xDAtil para associar informa\xE7\xF5es extras
ao item sem estender a interface.`),lg()()(),Ml(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),mN(218,` id`),ql(219,`br`),lg()()(),Ml(220,`td`,17)(221,`code`,27),mN(222,`string`),lg()(),Ml(223,`td`,20)(224,`p`),mN(225,`Identificador único do item.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Drag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return p.changeTab(`doc`)}),ql(3,`sample-po-drag-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return p.changeTab(`web`)}),ql(5,`sample-po-drag-basic-view`)(6,`sample-po-drop-list-vertical-view`)(7,`sample-po-drop-list-horizontal-view`)(8,`sample-po-drop-list-mixed-view`),lg()()()),n&2&&(cw(`p-actions`,p.actions),Up(2),cw(`p-active`,p.activeTab===`doc`),Up(2),cw(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[V8e,SCe,ECe,K,Y,G,Z,ee],encapsulation:2,changeDetection:1})}return o})()}];var ie=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[NL.forChild(we),NL]})}return o})();var pt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,ie]})}return o})();export{pt as DocPoDragModule};