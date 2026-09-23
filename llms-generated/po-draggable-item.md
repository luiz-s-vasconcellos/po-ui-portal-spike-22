# PoDraggableItem

**Tipo:** Interface / Modelo
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-draggable-item

Define a estrutura de um item arrastável genérico utilizado pelas diretivas
`PoDropListDirective` e `PoDragDirective`.

A interface é intencionalmente leve — contém apenas os campos essenciais para
qualquer componente arrastável.

## Propriedades

| Propriedade | Tipo | Opcional | Descrição |
|---|---|---|---|
| `data` | `any` | sim | Dados arbitrários do consumidor. Útil para associar informações extras |
| `id` | `string` | não | Identificador único do item. |
