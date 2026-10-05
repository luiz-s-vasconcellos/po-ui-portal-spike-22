# PoListViewFieldProperties

**Tipo:** Interface / Modelo
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-list-view-field-properties

Mapeia as chaves do objeto dos itens (`p-items`) para as áreas visuais do componente.

## Propriedades

| Propriedade | Tipo | Opcional | Descrição |
|---|---|---|---|
| `avatar` | `string` | sim | Chave correspondente ao avatar do item. |
| `highlighted` | `string` | sim | Chave booleana que aplica destaque visual ao item. |
| `link` | `string` | sim | Chave com o *link* do título do item. |
| `subtitle` | `string` | sim | Chave com o subtítulo do item. |
| `tag` | `{
    value?: string;
    type?: string;
}` | sim | Objeto da `tag` do item. |
| `title` | `string` | sim | Chave com o título do item. |
