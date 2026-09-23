# PoDragDirective

**Seletor:** `[p-drag]`
**Tipo:** Componente / Diretiva
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/[p-drag]

A diretiva `p-drag` torna um elemento arrastável, encapsulando o `CdkDrag` do Angular CDK.

Ela pode ser usada em conjunto com a diretiva `p-drop-list`. O valor atribuído ao seletor (`p-drag`)
corresponde ao dado do item, que é emitido nos eventos de drag.

> Atualmente validada com o componente `po-widget`. O suporte a outros componentes
> PO UI será avaliado em versões futuras.

## Inputs

| Propriedade | Alias | Tipo | Opcional | Padrão | Descrição |
|---|---|---|---|---|---|
| `data` | `p-drag` | `PoDraggableItem` | não | - | Dado associado ao item arrastável. O valor é emitido nos eventos |
| `dragDisabled` | `p-drag-disabled` | `boolean` | sim | false | Desabilita o arraste do item. Quando `true`, o usuário não pode iniciar |

## Outputs

| Evento | Alias | Tipo | Descrição |
|---|---|---|---|
| `dragEnded` | `p-drag-ended` | `EventEmitter` | Evento emitido quando o arraste do item é encerrado. |
| `dragMoved` | `p-drag-moved` | `EventEmitter` | Evento emitido continuamente enquanto o item está sendo arrastado. |
| `dragStarted` | `p-drag-started` | `EventEmitter` | Evento emitido quando o arraste do item é iniciado. |
