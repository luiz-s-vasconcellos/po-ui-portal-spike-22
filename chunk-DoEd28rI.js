import{$r as Zn,Ci as j,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Qi as tb,Ri as nu,St as Wee,X as Lf,Y as Kze,Yi as rg,ai as b,dt as Sae,et as Noe,ga as xx,i as _a,ii as _x,ji as mO,k as Ec,mi as gO,pa as wg,r as Ta,rr as Dx,ta as ue,tt as Nze,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var U=(()=>{class o{widget={title:`Arraste-me`,body:`Este widget pode ser arrastado livremente.`};static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drag-basic`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Arraste-me`,1,`po-md-4`,3,`p-drag`],[1,`po-font-text`]],template:function(n,p){n&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),iO(3,`Este widget pode ser arrastado livremente. Segure o handle e mova-o.`),wg()()()),n&2&&(rg(),jE(`p-drag`,p.widget))},dependencies:[Noe,Nze],encapsulation:2})}return o})();var ne=o=>({"docs-sample-code-tabs":o});var K=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Drag Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return p.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-drag-basic/sample-po-drag-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-widget class="po-md-4" [p-drag]="widget" p-title="Arraste-me">
    <div class="po-font-text">Este widget pode ser arrastado livremente. Segure o handle e mova-o.</div>
  </po-widget>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-drag-basic/sample-po-drag-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-drag-basic',
  templateUrl: './sample-po-drag-basic.component.html',
  standalone: false
})
export class SamplePoDragBasicComponent {
  widget = { title: 'Arraste-me', body: 'Este widget pode ser arrastado livremente.' };
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-drag-basic`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+p.sampleCodeButtonIcon),rg(),Ag(` `,p.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ne,p.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,U],encapsulation:2,changeDetection:1})}return o})();var pe=()=>[`list-doing`,`list-done`];var re=()=>[`list-todo`,`list-done`];var de=()=>[`list-todo`,`list-doing`];var q=(o,c)=>c.id;function se(o,c){if(o&1&&nu(0,`po-widget`,4),o&2){let a=c.$implicit,n=xx();jE(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function le(o,c){if(o&1&&nu(0,`po-widget`,7),o&2){let a=c.$implicit,n=xx();jE(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function me(o,c){if(o&1&&nu(0,`po-widget`,10),o&2){let a=c.$implicit,n=xx();jE(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}var X=(()=>{class o{todoList=j([{id:`t1`},{id:`t2`},{id:`t3`}]);doingList=j([{id:`d1`},{id:`d2`}]);doneList=j([{id:`f1`}]);tasksWidgets=j({t1:{title:`Criar wireframes`},t2:{title:`Definir contrato da API`},t3:{title:`Escrever testes unitários`},d1:{title:`Implementar tela de login`},d2:{title:`Configurar CI/CD`},f1:{title:`Kickoff do projeto`}});listMap={"list-todo":`todo`,"list-doing":`doing`,"list-done":`done`};onDropped(a,n){if(this.setList(n,a.items),a.previousContainer){let p=this.listMap[a.previousContainer];p&&this.setList(p,this.getList(p).filter(g=>g.id!==a.item.id))}}getList(a){switch(a){case`todo`:return this.todoList();case`doing`:return this.doingList();case`done`:return this.doneList()}}setList(a,n){switch(a){case`todo`:this.todoList.set(n);break;case`doing`:this.doingList.set(n);break;case`done`:this.doneList.set(n)}}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drop-list-vertical`]],standalone:!1,decls:16,vars:12,consts:[[1,`po-row`],[1,`po-md-4`,3,`p-height`],[`p-label`,`A Fazer`],[`p-drop-list-id`,`list-todo`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`A Fazer`,`p-tag-type`,`warning`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Em Andamento`],[`p-drop-list-id`,`list-doing`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Em Andamento`,`p-tag-type`,`info`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Concluído`],[`p-drop-list-id`,`list-done`,`p-drop-list-disabled`,``,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Concluído`,`p-tag-type`,`success`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(jc(0,`div`,0)(1,`po-container`,1),nu(2,`po-divider`,2),jc(3,`div`,3),mt(`p-dropped`,function(C){return p.onDropped(C,`todo`)}),_x(4,se,1,2,`po-widget`,4,q),wg()(),jc(6,`po-container`,1),nu(7,`po-divider`,5),jc(8,`div`,6),mt(`p-dropped`,function(C){return p.onDropped(C,`doing`)}),_x(9,le,1,2,`po-widget`,7,q),wg()(),jc(11,`po-container`,1),nu(12,`po-divider`,8),jc(13,`div`,9),mt(`p-dropped`,function(C){return p.onDropped(C,`done`)}),_x(14,me,1,2,`po-widget`,10,q),wg()()()),n&2&&(rg(),jE(`p-height`,500),rg(2),jE(`p-drop-list`,p.todoList())(`p-drop-list-connected-to`,gO(9,pe)),rg(),Dx(p.todoList()),rg(2),jE(`p-height`,500),rg(2),jE(`p-drop-list`,p.doingList())(`p-drop-list-connected-to`,gO(10,re)),rg(),Dx(p.doingList()),rg(2),jE(`p-height`,500),rg(2),jE(`p-drop-list`,p.doneList())(`p-drop-list-connected-to`,gO(11,de)),rg(),Dx(p.doneList()))},dependencies:[Ec,Lf,Noe,Nze,Wee],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drop-list-vertical-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Drop List - Vertical (Kanban)`),wg(),jc(4,`a`,2),mt(`click`,function(){return p.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, signal } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-drop-list-vertical`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+p.sampleCodeButtonIcon),rg(),Ag(` `,p.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ge,p.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,X],encapsulation:2,changeDetection:1})}return o})();var ve=(o,c)=>c.id;function he(o,c){if(o&1&&(jc(0,`po-widget`,4)(1,`p`),iO(2),wg()()),o&2){let a=c.$implicit,n=xx();jE(`p-drag`,a)(`p-title`,n.stepsWidgets()[a.id]?.title),rg(2),tb(n.stepsWidgets()[a.id]?.title)}}var Q=(()=>{class o{steps=j([{id:`s1`},{id:`s2`},{id:`s3`},{id:`s4`}]);stepsWidgets=j({s1:{title:`Requisitos`},s2:{title:`Design`},s3:{title:`Desenvolvimento`},s4:{title:`Testes`}});onDropped(a){this.steps.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drop-list-horizontal`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Pipeline — Orientação Horizontal`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-horizontal`,`p-drop-list-orientation`,`horizontal`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`info`,1,`po-md-3`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(jc(0,`po-container`,0)(1,`p`,1),iO(2,` Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca é detectada pelo eixo X. `),wg(),jc(3,`div`,2)(4,`div`,3),mt(`p-dropped`,function(C){return p.onDropped(C)}),_x(5,he,3,3,`po-widget`,4,ve),wg()()()),n&2&&(rg(4),jE(`p-drop-list`,p.steps()),rg(),Dx(p.steps()))},dependencies:[Ec,Noe,Nze,Wee],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drop-list-horizontal-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Drop List - Horizontal (Pipeline)`),wg(),jc(4,`a`,2),mt(`click`,function(){return p.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container p-title="Pipeline \u2014 Orienta\xE7\xE3o Horizontal">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, signal } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-drop-list-horizontal`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+p.sampleCodeButtonIcon),rg(),Ag(` `,p.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,be,p.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Q],encapsulation:2,changeDetection:1})}return o})();var De=(o,c)=>c.id;function Se(o,c){if(o&1&&(jc(0,`po-widget`,4)(1,`p`),iO(2),wg()()),o&2){let a=c.$implicit,n=xx();jE(`p-drag`,a)(`p-title`,n.cardsWidgets()[a.id]?.title),rg(2),tb(n.cardsWidgets()[a.id]?.title)}}var J=(()=>{class o{cards=j([{id:`c1`},{id:`c2`},{id:`c3`},{id:`c4`},{id:`c5`},{id:`c6`}]);cardsWidgets=j({c1:{title:`Faturamento`},c2:{title:`Estoque`},c3:{title:`Compras`},c4:{title:`RH`},c5:{title:`Fiscal`},c6:{title:`Financeiro`}});onDropped(a){this.cards.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drop-list-mixed`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Dashboard — Orientação Mixed`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-mixed`,`p-drop-list-orientation`,`mixed`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`neutral`,1,`po-md-4`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(jc(0,`po-container`,0)(1,`p`,1),iO(2,` Arraste os cards para reorganizar o layout do dashboard. A orientação mixed detecta trocas nos eixos X e Y, ideal para layouts em grid onde os itens quebram em múltiplas linhas. `),wg(),jc(3,`div`,2)(4,`div`,3),mt(`p-dropped`,function(C){return p.onDropped(C)}),_x(5,Se,3,3,`po-widget`,4,De),wg()()()),n&2&&(rg(4),jE(`p-drop-list`,p.cards()),rg(),Dx(p.cards()))},dependencies:[Ec,Noe,Nze,Wee],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drop-list-mixed-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Drop List - Mixed (Dashboard)`),wg(),jc(4,`a`,2),mt(`click`,function(){return p.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container p-title="Dashboard \u2014 Orienta\xE7\xE3o Mixed">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, signal } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-drop-list-mixed`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+p.sampleCodeButtonIcon),rg(),Ag(` `,p.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,xe,p.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,J],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-drag-doc`]],standalone:!1,decls:226,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoDraggableItem`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(n,p){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoDragDropModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo que exporta as diretivas de drag & drop do PO UI:`),wg(),jc(7,`ul`)(8,`li`)(9,`code`),iO(10,`PoDropListDirective`),wg(),iO(11,` (`),jc(12,`code`),iO(13,`p-drop-list`),wg(),iO(14,`) — define um container de drop.`),wg(),jc(15,`li`)(16,`code`),iO(17,`PoDragDirective`),wg(),iO(18,` (`),jc(19,`code`),iO(20,`p-drag`),wg(),iO(21,`) — torna um elemento arrastável.`),wg()()(),jc(22,`h3`,3),iO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),iO(26,`PoDragDirective`),wg()(),jc(27,`div`,2)(28,`p`),iO(29,` A diretiva `),jc(30,`code`),iO(31,`p-drag`),wg(),iO(32,` torna um elemento arrastável, encapsulando o `),jc(33,`code`),iO(34,`CdkDrag`),wg(),iO(35,` do Angular CDK.`),wg(),jc(36,`p`),iO(37,`Ela pode ser usada em conjunto com a diretiva `),jc(38,`code`),iO(39,`p-drop-list`),wg(),iO(40,`. O valor atribuído ao seletor (`),jc(41,`code`),iO(42,`p-drag`),wg(),iO(43,`)
corresponde ao dado do item, que \xE9 emitido nos eventos de drag.`),wg(),jc(44,`blockquote`)(45,`p`),iO(46,`Atualmente validada com o componente `),jc(47,`code`),iO(48,`po-widget`),wg(),iO(49,`. O suporte a outros componentes
PO UI ser\xE1 avaliado em vers\xF5es futuras.`),wg()()(),jc(50,`div`,6)(51,`h4`,7),iO(52,`Seletor`),wg(),jc(53,`pre`,8),iO(54,`<[p-drag]
    p-drag="PoDraggableItem"
    p-drag-disabled="boolean"
    (p-drag-ended)="EventEmitter"
    (p-drag-moved)="EventEmitter"
    (p-drag-started)="EventEmitter" >
</[p-drag]>
`),wg()(),jc(55,`h4`,9),iO(56,`Propriedades`),wg(),jc(57,`table`,10)(58,`tr`,11)(59,`th`,12),iO(60,`Nome`),wg(),jc(61,`th`,12),iO(62,`Tipo`),wg(),jc(63,`th`,12),iO(64,`Padrão`),wg(),jc(65,`th`,12),iO(66,`Descrição`),wg()(),jc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),iO(71,` p-drag`),nu(72,`br`),wg()()(),jc(73,`td`,17)(74,`code`,18),iO(75,`PoDraggableItem`),wg()(),jc(76,`td`,19),iO(77,`-`),wg(),jc(78,`td`,20)(79,`p`),iO(80,`Dado associado ao item arrast\xE1vel. O valor \xE9 emitido nos eventos
`),jc(81,`code`),iO(82,`p-drag-started`),wg(),iO(83,` e `),jc(84,`code`),iO(85,`p-drag-ended`),wg(),iO(86,`.`),wg()()(),jc(87,`tr`,13)(88,`td`,14)(89,`div`,15)(90,`span`,16),iO(91,` p-drag-disabled`),nu(92,`br`),wg()()(),jc(93,`td`,17)(94,`code`,21),iO(95,`boolean`),wg()(),jc(96,`td`,19)(97,`p`),iO(98,`false`),wg()(),jc(99,`td`,20)(100,`em`)(101,`strong`),iO(102,`(opcional)`),wg()(),jc(103,`p`),iO(104,`Desabilita o arraste do item. Quando `),jc(105,`code`),iO(106,`true`),wg(),iO(107,`, o usu\xE1rio n\xE3o pode iniciar
um gesto de arrastar neste elemento, mas o item continua participando do
c\xE1lculo de posi\xE7\xF5es dos vizinhos dentro do `),jc(108,`code`),iO(109,`p-drop-list`),wg(),iO(110,`.`),wg()()(),jc(111,`tr`,13)(112,`td`,14)(113,`div`,22)(114,`span`,23),iO(115,` (p-drag-ended)`),nu(116,`br`),wg()()(),jc(117,`td`,17)(118,`code`,24),iO(119,`EventEmitter`),wg()(),jc(120,`td`,19),iO(121,`-`),wg(),jc(122,`td`,20)(123,`em`)(124,`strong`),iO(125,`(opcional)`),wg()(),jc(126,`p`),iO(127,`Evento emitido quando o arraste do item \xE9 encerrado.
O valor emitido \xE9 o dado associado ao item (propriedade `),jc(128,`code`),iO(129,`p-drag`),wg(),iO(130,`).`),wg()()(),jc(131,`tr`,13)(132,`td`,14)(133,`div`,22)(134,`span`,23),iO(135,` (p-drag-moved)`),nu(136,`br`),wg()()(),jc(137,`td`,17)(138,`code`,24),iO(139,`EventEmitter`),wg()(),jc(140,`td`,19),iO(141,`-`),wg(),jc(142,`td`,20)(143,`em`)(144,`strong`),iO(145,`(opcional)`),wg()(),jc(146,`p`),iO(147,`Evento emitido continuamente enquanto o item est\xE1 sendo arrastado.
Cont\xE9m a posi\xE7\xE3o do ponteiro, a dist\xE2ncia percorrida e a dire\xE7\xE3o do movimento.`),wg(),jc(148,`blockquote`)(149,`p`)(150,`strong`),iO(151,`Atenção:`),wg(),iO(152,` Este evento \xE9 disparado em alta frequ\xEAncia (a cada frame de movimento).
Evite opera\xE7\xF5es custosas no handler ou aplique t\xE9cnicas de throttle/debounce.`),wg()()()(),jc(153,`tr`,13)(154,`td`,14)(155,`div`,22)(156,`span`,23),iO(157,` (p-drag-started)`),nu(158,`br`),wg()()(),jc(159,`td`,17)(160,`code`,24),iO(161,`EventEmitter`),wg()(),jc(162,`td`,19),iO(163,`-`),wg(),jc(164,`td`,20)(165,`em`)(166,`strong`),iO(167,`(opcional)`),wg()(),jc(168,`p`),iO(169,`Evento emitido quando o arraste do item \xE9 iniciado.
O valor emitido \xE9 o dado associado ao item (propriedade `),jc(170,`code`),iO(171,`p-drag`),wg(),iO(172,`).`),wg()()()(),jc(173,`h3`),iO(174,`Interfaces`),wg(),jc(175,`h4`,25)(176,`code`,5),iO(177,`PoDraggableItem`),wg()(),jc(178,`div`,2)(179,`p`),iO(180,`Define a estrutura de um item arrast\xE1vel gen\xE9rico utilizado pelas diretivas
`),jc(181,`code`),iO(182,`PoDropListDirective`),wg(),iO(183,` e `),jc(184,`code`),iO(185,`PoDragDirective`),wg(),iO(186,`.`),wg(),jc(187,`p`),iO(188,`A interface \xE9 intencionalmente leve \u2014 cont\xE9m apenas os campos essenciais para
qualquer componente arrast\xE1vel.`),wg()(),jc(189,`h4`,9),iO(190,`Propriedades`),wg(),jc(191,`table`,10)(192,`tr`,11)(193,`th`,12),iO(194,`Nome`),wg(),jc(195,`th`,12),iO(196,`Tipo`),wg(),jc(197,`th`,12),iO(198,`Descrição`),wg()(),jc(199,`tr`,13)(200,`td`,14)(201,`div`,15)(202,`span`,16),iO(203,` data`),nu(204,`br`),wg()()(),jc(205,`td`,17)(206,`code`,26),iO(207,`any`),wg()(),jc(208,`td`,20)(209,`em`)(210,`strong`),iO(211,`(opcional)`),wg()(),jc(212,`p`),iO(213,`Dados arbitr\xE1rios do consumidor. \xDAtil para associar informa\xE7\xF5es extras
ao item sem estender a interface.`),wg()()(),jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),iO(218,` id`),nu(219,`br`),wg()()(),jc(220,`td`,17)(221,`code`,27),iO(222,`string`),wg()(),jc(223,`td`,20)(224,`p`),iO(225,`Identificador único do item.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Drag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return p.changeTab(`doc`)}),nu(3,`sample-po-drag-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return p.changeTab(`web`)}),nu(5,`sample-po-drag-basic-view`)(6,`sample-po-drop-list-vertical-view`)(7,`sample-po-drop-list-horizontal-view`)(8,`sample-po-drop-list-mixed-view`),wg()()()),n&2&&(jE(`p-actions`,p.actions),rg(2),jE(`p-active`,p.activeTab===`doc`),rg(2),jE(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[Kze,bae,Sae,K,Y,G,Z,ee],encapsulation:2,changeDetection:1})}return o})()}];var ie=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[C1.forChild(we),C1]})}return o})();var pt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[Ta,ie]})}return o})();export{pt as DocPoDragModule};