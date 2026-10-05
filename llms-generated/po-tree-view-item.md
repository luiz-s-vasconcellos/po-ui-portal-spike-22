# PoTreeViewItem

**Tipo:** Interface / Modelo
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-tree-view-item

Interface para definição dos itens do componente `po-tree-view`.

## Propriedades

| Propriedade | Tipo | Opcional | Descrição |
|---|---|---|---|
| `disabled` | `boolean` | sim | Desabilita a interação com o item. |
| `expanded` | `boolean` | sim | Expande o item, exibindo seus `subItems`. |
| `isSelectable` | `boolean | null` | sim | Permite ativar ou desativar a seleção do item. |
| `label` | `string` | não | Texto de exibição do item. |
| `selected` | `boolean | null` | sim | Marca o item como selecionado. |
| `showIcon` | `boolean` | sim | Habilita a exibição de ícone no item. |
| `subItems` | `Array<PoTreeViewItem>` | sim | Lista de itens do próximo nível, permitindo a construção hierárquica da árvore. |
| `value` | `string | number` | não | Valor do item utilizado como referência para sua identificação. |
