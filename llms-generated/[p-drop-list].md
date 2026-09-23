# PoDropListDirective

**Seletor:** `[p-drop-list]`
**Tipo:** Componente / Diretiva
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/[p-drop-list]

A diretiva `p-drop-list` define um container onde componentes `po-widget` podem ser
arrastados e reorganizados, encapsulando o `CdkDropList` do Angular CDK.

Permite:
- Reordenação de `po-widget` dentro de um único container.
- Transferência de `po-widget` entre containers conectados via `p-drop-list-connected-to`.
- Itens individuais desabilitados via `p-drag-disabled` na diretiva `p-drag`.

> Atualmente esta diretiva é suportada para uso com `po-widget`.
> O suporte a outros componentes será avaliado em versões futuras.

> A diretiva não impõe nenhum estilo de layout (flex, grid etc.). O layout
> é responsabilidade do consumidor.

## Inputs

| Propriedade | Alias | Tipo | Opcional | Padrão | Descrição |
|---|---|---|---|---|---|
| `dropListConnectedTo` | `p-drop-list-connected-to` | `Array<string>` | sim | - | Lista de containers conectados. Aceita um array de ids (`string`). Quando configurado, |
| `dropListDisabled` | `p-drop-list-disabled` | `boolean` | sim | false | Desabilita o drag para os elementos dentro do container. |
| `dropListId` | `p-drop-list-id` | `string` | sim | - | Identificador único do container. Utilizado para conectar múltiplos |
| `dropListOrientation` | `p-drop-list-orientation` | `'horizontal' | 'vertical' | 'mixed'` | sim | `'vertical'` | Orientação dos itens dentro do container. Afeta a lógica de sombra de |
| `dropSortingDisabled` | `p-drop-sorting-disabled` | `boolean` | sim | false | Desabilita a reordenação automática dos itens durante o arraste. |
| `items` | `p-drop-list` | `Array<PoDraggableItem>` | não | - | Lista de itens gerenciada pelo container. A diretiva muta este array |

## Outputs

| Evento | Alias | Tipo | Descrição |
|---|---|---|---|
| `dragEntered` | `p-drag-entered` | `EventEmitter` | Evento emitido quando um item externo entra neste container durante o arraste. |
| `dropped` | `p-dropped` | `EventEmitter` | Evento emitido quando um item é solto dentro deste container. |
