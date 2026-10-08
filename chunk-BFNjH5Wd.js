import{$ as Nee,$i as pt$1,Bn as zze,Br as Qn,Gi as mg,Gn as Ac,Hi as kx,Ir as Ox,Jt as gae,Lt as bae,M as Ef,Sa as zO,Ur as RN,Wn as AN,Zr as U$1,_a as wn,ar as E,b as $ze,ca as ue,di as cE,dr as Hn,gr as IE,i as _a,j as Ec,ki as he$1,pa as vN,pr as Hp,r as Ta,si as aN,st as Ooe,ti as Wx,ua as ug,wr as Kc,zi as kL}from"./main-FUFQFMHQ.js";var U=(()=>{class o{widget={title:`Arraste-me`,body:`Este widget pode ser arrastado livremente.`};static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drag-basic`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Arraste-me`,1,`po-md-4`,3,`p-drag`],[1,`po-font-text`]],template:function(n,p){n&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),vN(3,`Este widget pode ser arrastado livremente. Segure o handle e mova-o.`),ug()()()),n&2&&(Hp(),cE(`p-drag`,p.widget))},dependencies:[Ooe,zze],encapsulation:2})}return o})();var ne=o=>({"docs-sample-code-tabs":o});var K=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Drag Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return p.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-drag-basic/sample-po-drag-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget class="po-md-4" [p-drag]="widget" p-title="Arraste-me">
    <div class="po-font-text">Este widget pode ser arrastado livremente. Segure o handle e mova-o.</div>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-drag-basic/sample-po-drag-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-drag-basic',
  templateUrl: './sample-po-drag-basic.component.html',
  standalone: false
})
export class SamplePoDragBasicComponent {
  widget = { title: 'Arraste-me', body: 'Este widget pode ser arrastado livremente.' };
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-drag-basic`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+p.sampleCodeButtonIcon),Hp(),mg(` `,p.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ne,p.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,U],encapsulation:2,changeDetection:1})}return o})();var pe=()=>[`list-doing`,`list-done`];var re=()=>[`list-todo`,`list-done`];var de=()=>[`list-todo`,`list-doing`];var q=(o,c)=>c.id;function se(o,c){if(o&1&&Kc(0,`po-widget`,4),o&2){let a=c.$implicit,n=Wx();cE(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function le(o,c){if(o&1&&Kc(0,`po-widget`,7),o&2){let a=c.$implicit,n=Wx();cE(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function me(o,c){if(o&1&&Kc(0,`po-widget`,10),o&2){let a=c.$implicit,n=Wx();cE(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}var X=(()=>{class o{todoList=U$1([{id:`t1`},{id:`t2`},{id:`t3`}]);doingList=U$1([{id:`d1`},{id:`d2`}]);doneList=U$1([{id:`f1`}]);tasksWidgets=U$1({t1:{title:`Criar wireframes`},t2:{title:`Definir contrato da API`},t3:{title:`Escrever testes unitários`},d1:{title:`Implementar tela de login`},d2:{title:`Configurar CI/CD`},f1:{title:`Kickoff do projeto`}});listMap={"list-todo":`todo`,"list-doing":`doing`,"list-done":`done`};onDropped(a,n){if(this.setList(n,a.items),a.previousContainer){let p=this.listMap[a.previousContainer];p&&this.setList(p,this.getList(p).filter(g=>g.id!==a.item.id))}}getList(a){switch(a){case`todo`:return this.todoList();case`doing`:return this.doingList();case`done`:return this.doneList()}}setList(a,n){switch(a){case`todo`:this.todoList.set(n);break;case`doing`:this.doingList.set(n);break;case`done`:this.doneList.set(n)}}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drop-list-vertical`]],standalone:!1,decls:16,vars:12,consts:[[1,`po-row`],[1,`po-md-4`,3,`p-height`],[`p-label`,`A Fazer`],[`p-drop-list-id`,`list-todo`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`A Fazer`,`p-tag-type`,`warning`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Em Andamento`],[`p-drop-list-id`,`list-doing`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Em Andamento`,`p-tag-type`,`info`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Concluído`],[`p-drop-list-id`,`list-done`,`p-drop-list-disabled`,``,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Concluído`,`p-tag-type`,`success`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Ac(0,`div`,0)(1,`po-container`,1),Kc(2,`po-divider`,2),Ac(3,`div`,3),pt$1(`p-dropped`,function(C){return p.onDropped(C,`todo`)}),Ox(4,se,1,2,`po-widget`,4,q),ug()(),Ac(6,`po-container`,1),Kc(7,`po-divider`,5),Ac(8,`div`,6),pt$1(`p-dropped`,function(C){return p.onDropped(C,`doing`)}),Ox(9,le,1,2,`po-widget`,7,q),ug()(),Ac(11,`po-container`,1),Kc(12,`po-divider`,8),Ac(13,`div`,9),pt$1(`p-dropped`,function(C){return p.onDropped(C,`done`)}),Ox(14,me,1,2,`po-widget`,10,q),ug()()()),n&2&&(Hp(),cE(`p-height`,500),Hp(2),cE(`p-drop-list`,p.todoList())(`p-drop-list-connected-to`,RN(9,pe)),Hp(),kx(p.todoList()),Hp(2),cE(`p-height`,500),Hp(2),cE(`p-drop-list`,p.doingList())(`p-drop-list-connected-to`,RN(10,re)),Hp(),kx(p.doingList()),Hp(2),cE(`p-height`,500),Hp(2),cE(`p-drop-list`,p.doneList())(`p-drop-list-connected-to`,RN(11,de)),Hp(),kx(p.doneList()))},dependencies:[Ec,Ef,Ooe,zze,Nee],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drop-list-vertical-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Drop List - Vertical (Kanban)`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return p.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, signal } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-drop-list-vertical`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+p.sampleCodeButtonIcon),Hp(),mg(` `,p.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,p.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,X],encapsulation:2,changeDetection:1})}return o})();var ve=(o,c)=>c.id;function he(o,c){if(o&1&&(Ac(0,`po-widget`,4)(1,`p`),vN(2),ug()()),o&2){let a=c.$implicit,n=Wx();cE(`p-drag`,a)(`p-title`,n.stepsWidgets()[a.id]?.title),Hp(2),IE(n.stepsWidgets()[a.id]?.title)}}var Q=(()=>{class o{steps=U$1([{id:`s1`},{id:`s2`},{id:`s3`},{id:`s4`}]);stepsWidgets=U$1({s1:{title:`Requisitos`},s2:{title:`Design`},s3:{title:`Desenvolvimento`},s4:{title:`Testes`}});onDropped(a){this.steps.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drop-list-horizontal`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Pipeline — Orientação Horizontal`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-horizontal`,`p-drop-list-orientation`,`horizontal`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`info`,1,`po-md-3`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Ac(0,`po-container`,0)(1,`p`,1),vN(2,` Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca é detectada pelo eixo X. `),ug(),Ac(3,`div`,2)(4,`div`,3),pt$1(`p-dropped`,function(C){return p.onDropped(C)}),Ox(5,he,3,3,`po-widget`,4,ve),ug()()()),n&2&&(Hp(4),cE(`p-drop-list`,p.steps()),Hp(),kx(p.steps()))},dependencies:[Ec,Ooe,zze,Nee],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drop-list-horizontal-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Drop List - Horizontal (Pipeline)`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return p.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container p-title="Pipeline \u2014 Orienta\xE7\xE3o Horizontal">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, signal } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-drop-list-horizontal`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+p.sampleCodeButtonIcon),Hp(),mg(` `,p.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,p.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Q],encapsulation:2,changeDetection:1})}return o})();var De=(o,c)=>c.id;function Se(o,c){if(o&1&&(Ac(0,`po-widget`,4)(1,`p`),vN(2),ug()()),o&2){let a=c.$implicit,n=Wx();cE(`p-drag`,a)(`p-title`,n.cardsWidgets()[a.id]?.title),Hp(2),IE(n.cardsWidgets()[a.id]?.title)}}var J=(()=>{class o{cards=U$1([{id:`c1`},{id:`c2`},{id:`c3`},{id:`c4`},{id:`c5`},{id:`c6`}]);cardsWidgets=U$1({c1:{title:`Faturamento`},c2:{title:`Estoque`},c3:{title:`Compras`},c4:{title:`RH`},c5:{title:`Fiscal`},c6:{title:`Financeiro`}});onDropped(a){this.cards.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drop-list-mixed`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Dashboard — Orientação Mixed`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-mixed`,`p-drop-list-orientation`,`mixed`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`neutral`,1,`po-md-4`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Ac(0,`po-container`,0)(1,`p`,1),vN(2,` Arraste os cards para reorganizar o layout do dashboard. A orientação mixed detecta trocas nos eixos X e Y, ideal para layouts em grid onde os itens quebram em múltiplas linhas. `),ug(),Ac(3,`div`,2)(4,`div`,3),pt$1(`p-dropped`,function(C){return p.onDropped(C)}),Ox(5,Se,3,3,`po-widget`,4,De),ug()()()),n&2&&(Hp(4),cE(`p-drop-list`,p.cards()),Hp(),kx(p.cards()))},dependencies:[Ec,Ooe,zze,Nee],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drop-list-mixed-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Drop List - Mixed (Dashboard)`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return p.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container p-title="Dashboard \u2014 Orienta\xE7\xE3o Mixed">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, signal } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-drop-list-mixed`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+p.sampleCodeButtonIcon),Hp(),mg(` `,p.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,xe,p.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,J],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-drag-doc`]],standalone:!1,decls:226,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoDraggableItem`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(n,p){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoDragDropModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo que exporta as diretivas de drag & drop do PO UI:`),ug(),Ac(7,`ul`)(8,`li`)(9,`code`),vN(10,`PoDropListDirective`),ug(),vN(11,` (`),Ac(12,`code`),vN(13,`p-drop-list`),ug(),vN(14,`) — define um container de drop.`),ug(),Ac(15,`li`)(16,`code`),vN(17,`PoDragDirective`),ug(),vN(18,` (`),Ac(19,`code`),vN(20,`p-drag`),ug(),vN(21,`) — torna um elemento arrastável.`),ug()()(),Ac(22,`h3`,3),vN(23,`Componente`),ug(),Ac(24,`h4`,4)(25,`code`,5),vN(26,`PoDragDirective`),ug()(),Ac(27,`div`,2)(28,`p`),vN(29,` A diretiva `),Ac(30,`code`),vN(31,`p-drag`),ug(),vN(32,` torna um elemento arrastável, encapsulando o `),Ac(33,`code`),vN(34,`CdkDrag`),ug(),vN(35,` do Angular CDK.`),ug(),Ac(36,`p`),vN(37,`Ela pode ser usada em conjunto com a diretiva `),Ac(38,`code`),vN(39,`p-drop-list`),ug(),vN(40,`. O valor atribuído ao seletor (`),Ac(41,`code`),vN(42,`p-drag`),ug(),vN(43,`)
corresponde ao dado do item, que \xE9 emitido nos eventos de drag.`),ug(),Ac(44,`blockquote`)(45,`p`),vN(46,`Atualmente validada com o componente `),Ac(47,`code`),vN(48,`po-widget`),ug(),vN(49,`. O suporte a outros componentes
PO UI ser\xE1 avaliado em vers\xF5es futuras.`),ug()()(),Ac(50,`div`,6)(51,`h4`,7),vN(52,`Seletor`),ug(),Ac(53,`pre`,8),vN(54,`<[p-drag]
    p-drag="PoDraggableItem"
    p-drag-disabled="boolean"
    (p-drag-ended)="EventEmitter"
    (p-drag-moved)="EventEmitter"
    (p-drag-started)="EventEmitter" >
</[p-drag]>
`),ug()(),Ac(55,`h4`,9),vN(56,`Propriedades`),ug(),Ac(57,`table`,10)(58,`tr`,11)(59,`th`,12),vN(60,`Nome`),ug(),Ac(61,`th`,12),vN(62,`Tipo`),ug(),Ac(63,`th`,12),vN(64,`Padrão`),ug(),Ac(65,`th`,12),vN(66,`Descrição`),ug()(),Ac(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),vN(71,` p-drag`),Kc(72,`br`),ug()()(),Ac(73,`td`,17)(74,`code`,18),vN(75,`PoDraggableItem`),ug()(),Ac(76,`td`,19),vN(77,`-`),ug(),Ac(78,`td`,20)(79,`p`),vN(80,`Dado associado ao item arrast\xE1vel. O valor \xE9 emitido nos eventos
`),Ac(81,`code`),vN(82,`p-drag-started`),ug(),vN(83,` e `),Ac(84,`code`),vN(85,`p-drag-ended`),ug(),vN(86,`.`),ug()()(),Ac(87,`tr`,13)(88,`td`,14)(89,`div`,15)(90,`span`,16),vN(91,` p-drag-disabled`),Kc(92,`br`),ug()()(),Ac(93,`td`,17)(94,`code`,21),vN(95,`boolean`),ug()(),Ac(96,`td`,19)(97,`p`),vN(98,`false`),ug()(),Ac(99,`td`,20)(100,`em`)(101,`strong`),vN(102,`(opcional)`),ug()(),Ac(103,`p`),vN(104,`Desabilita o arraste do item. Quando `),Ac(105,`code`),vN(106,`true`),ug(),vN(107,`, o usu\xE1rio n\xE3o pode iniciar
um gesto de arrastar neste elemento, mas o item continua participando do
c\xE1lculo de posi\xE7\xF5es dos vizinhos dentro do `),Ac(108,`code`),vN(109,`p-drop-list`),ug(),vN(110,`.`),ug()()(),Ac(111,`tr`,13)(112,`td`,14)(113,`div`,22)(114,`span`,23),vN(115,` (p-drag-ended)`),Kc(116,`br`),ug()()(),Ac(117,`td`,17)(118,`code`,24),vN(119,`EventEmitter`),ug()(),Ac(120,`td`,19),vN(121,`-`),ug(),Ac(122,`td`,20)(123,`em`)(124,`strong`),vN(125,`(opcional)`),ug()(),Ac(126,`p`),vN(127,`Evento emitido quando o arraste do item \xE9 encerrado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Ac(128,`code`),vN(129,`p-drag`),ug(),vN(130,`).`),ug()()(),Ac(131,`tr`,13)(132,`td`,14)(133,`div`,22)(134,`span`,23),vN(135,` (p-drag-moved)`),Kc(136,`br`),ug()()(),Ac(137,`td`,17)(138,`code`,24),vN(139,`EventEmitter`),ug()(),Ac(140,`td`,19),vN(141,`-`),ug(),Ac(142,`td`,20)(143,`em`)(144,`strong`),vN(145,`(opcional)`),ug()(),Ac(146,`p`),vN(147,`Evento emitido continuamente enquanto o item est\xE1 sendo arrastado.
Cont\xE9m a posi\xE7\xE3o do ponteiro, a dist\xE2ncia percorrida e a dire\xE7\xE3o do movimento.`),ug(),Ac(148,`blockquote`)(149,`p`)(150,`strong`),vN(151,`Atenção:`),ug(),vN(152,` Este evento \xE9 disparado em alta frequ\xEAncia (a cada frame de movimento).
Evite opera\xE7\xF5es custosas no handler ou aplique t\xE9cnicas de throttle/debounce.`),ug()()()(),Ac(153,`tr`,13)(154,`td`,14)(155,`div`,22)(156,`span`,23),vN(157,` (p-drag-started)`),Kc(158,`br`),ug()()(),Ac(159,`td`,17)(160,`code`,24),vN(161,`EventEmitter`),ug()(),Ac(162,`td`,19),vN(163,`-`),ug(),Ac(164,`td`,20)(165,`em`)(166,`strong`),vN(167,`(opcional)`),ug()(),Ac(168,`p`),vN(169,`Evento emitido quando o arraste do item \xE9 iniciado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Ac(170,`code`),vN(171,`p-drag`),ug(),vN(172,`).`),ug()()()(),Ac(173,`h3`),vN(174,`Interfaces`),ug(),Ac(175,`h4`,25)(176,`code`,5),vN(177,`PoDraggableItem`),ug()(),Ac(178,`div`,2)(179,`p`),vN(180,`Define a estrutura de um item arrast\xE1vel gen\xE9rico utilizado pelas diretivas
`),Ac(181,`code`),vN(182,`PoDropListDirective`),ug(),vN(183,` e `),Ac(184,`code`),vN(185,`PoDragDirective`),ug(),vN(186,`.`),ug(),Ac(187,`p`),vN(188,`A interface \xE9 intencionalmente leve \u2014 cont\xE9m apenas os campos essenciais para
qualquer componente arrast\xE1vel.`),ug()(),Ac(189,`h4`,9),vN(190,`Propriedades`),ug(),Ac(191,`table`,10)(192,`tr`,11)(193,`th`,12),vN(194,`Nome`),ug(),Ac(195,`th`,12),vN(196,`Tipo`),ug(),Ac(197,`th`,12),vN(198,`Descrição`),ug()(),Ac(199,`tr`,13)(200,`td`,14)(201,`div`,15)(202,`span`,16),vN(203,` data`),Kc(204,`br`),ug()()(),Ac(205,`td`,17)(206,`code`,26),vN(207,`any`),ug()(),Ac(208,`td`,20)(209,`em`)(210,`strong`),vN(211,`(opcional)`),ug()(),Ac(212,`p`),vN(213,`Dados arbitr\xE1rios do consumidor. \xDAtil para associar informa\xE7\xF5es extras
ao item sem estender a interface.`),ug()()(),Ac(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),vN(218,` id`),Kc(219,`br`),ug()()(),Ac(220,`td`,17)(221,`code`,27),vN(222,`string`),ug()(),Ac(223,`td`,20)(224,`p`),vN(225,`Identificador único do item.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Drag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return p.changeTab(`doc`)}),Kc(3,`sample-po-drag-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return p.changeTab(`web`)}),Kc(5,`sample-po-drag-basic-view`)(6,`sample-po-drop-list-vertical-view`)(7,`sample-po-drop-list-horizontal-view`)(8,`sample-po-drop-list-mixed-view`),ug()()()),n&2&&(cE(`p-actions`,p.actions),Hp(2),cE(`p-active`,p.activeTab===`doc`),Hp(2),cE(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[$ze,gae,bae,K,Y,G,Z,ee],encapsulation:2,changeDetection:1})}return o})()}];var ie=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[kL.forChild(we),kL]})}return o})();var pt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[Ta,ie]})}return o})();export{pt as DocPoDragModule};