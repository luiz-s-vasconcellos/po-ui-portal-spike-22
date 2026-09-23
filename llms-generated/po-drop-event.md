# PoDropEvent

**Tipo:** Interface / Modelo
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-drop-event

Evento emitido quando um item é solto em um container (`p-drop-list`), contendo os índices,
o item movido e os identificadores dos containers envolvidos.

## Propriedades

| Propriedade | Tipo | Opcional | Descrição |
|---|---|---|---|
| `container` | `string` | não | Identificador do container de destino. |
| `currentIndex` | `number` | não | Índice final do item após o drop. |
| `item` | `PoDraggableItem` | não | O item que foi movido. |
| `items` | `Array<PoDraggableItem>` | não | Array resultante após o drop, já com a nova ordem aplicada. |
| `previousContainer` | `string` | sim | Identificador do container de origem. Preenchido apenas quando o item |
| `previousIndex` | `number` | não | Índice original do item antes do drop. |
