# PoListViewComponent

**Seletor:** `po-list-view`
**Tipo:** Componente / Diretiva
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-list-view

O componente `po-list-view` é responsável por renderizar de forma dinâmica uma lista de dados baseada em um *array* de
objetos, adaptando-se às necessidades visuais de cada interface.

Cada item da lista é construído internamente utilizando a estrutura de um `po-widget`, assegurando consistência visual.
Para layouts complexos, o componente oferece flexibilidade através das diretivas
de templates **[p-list-view-content-template](/documentation/po-list-view-content-template)** e
*[p-list-view-detail-template](/documentation/po-list-view-detail-template)** para customização do conteúdo e exibição
de informações adicionais.

A interação com o componente pode ser realizada com o *mouse* ou pelo teclado. A navegação entre os elementos
interativos é feita utilizando a tecla `TAB`. Os elementos que recebem foco ao navegar incluem:
- O próprio item (quando a propriedade de clique estiver ativa);
- Título do item (quando configurado como *link*);
- Ações do item configuradas em `p-actions`;
- Botão de controle de detalhes (para expandir ou abrir modal);
- Colunas de seleção (única ou múltipla);
- Botão de carregar mais resultados (`p-show-more`).

A execução das ações focadas ou a marcação de itens nas colunas de seleção é realizada com as teclas `Enter` ou
`Espaço`.

#### Tokens customizáveis

É possível alterar o estilo do componente usando os seguintes tokens (CSS):

> Para maiores informações, acesse o guia [Personalizando o Tema Padrão com Tokens CSS](https://po-ui.io/guides/theme-customization).

| Propriedade | Descrição | Valor Padrão |
|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------|
| **Título** | | |
| `--title-color` | Cor do título do item | `var(--title-color)` |
| `--title-font-family` | Família tipográfica do título | `var(--font-family-theme)` |
| `--title-font-size` | Tamanho da fonte do título | `var(--font-size-default)` |
| `--title-line-height` | Altura da linha do título | `var(--line-height-md)` |
| `--title-color-hover` | Cor do título no estado hover | `var(--color-action-hover)` |
| `--title-color-selected` | Cor do título quando o item está selecionado | `var(--color-action-focus)` |
| **Subtítulo (Support Message)** | | |
| `--support-message-color` | Cor da mensagem de apoio | `var(--color-neutral-dark-80)` |
| `--support-message-font-family` | Família tipográfica da mensagem de apoio | `var(--font-family-theme)` |
| `--support-message-font-size` | Tamanho da fonte da mensagem de apoio | `var(--font-size-sm)` |
| `--support-message-line-height` | Altura da linha da mensagem de apoio | `var(--line-height-none)` |
| `--support-message-color-selected` | Cor da mensagem de apoio quando o item está selecionado| `var(--color-action-focus)` |
| **Item - Normal** | | |
| `--list-item-background` | Cor de fundo do item | `var(--list-item-background)` |
| `--list-item-border-color` | Cor da borda do item | `var(--list-item-border-color)` |
| `--list-item-border-width` | Largura da borda do item | `var(--border-width-sm)` |
| `--list-item-border-radius` | Raio de arredondamento dos cantos do item | `var(--border-radius-md)` |
| `--list-item-shadow` | Sombra base do item | `var(--shadow-md)` |
| **Item - Selecionado** | | |
| `--list-item-background-selected` | Cor de fundo do item selecionado | `var(--color-brand-01-lightest)` |
| `--list-item-border-color-selected` | Cor da borda do item selecionado | `var(--color-action-default)` |
| **Item - Hover** | | |
| `--list-item-border-color-hover` | Cor da borda do item no estado hover | `var(--color-action-hover)` |
| `--list-item-shadow-hover` | Sombra do item no estado hover | `var(--shadow-lg)` |
| **Item - Focus** | | |
| `--list-item-color-focused` | Cor da borda do item no estado focus | `var(--color-action-default)` |
| `--list-item-outline-color-focused` | Cor do outline do item no estado focus | `var(--color-action-focus)` |
| **Destaque (Highlighted)** | | |
| `--list-item-background-highlighted` | Cor de fundo do item destacado | `var(--color-brand-01-lightest)` |
| **Motion** | | |
| `--list-item-transition-duration` | Duração da transição do item | `var(--duration-normal)` |
| `--list-item-transition-property` | Propriedades CSS animadas | `all` |
| `--list-item-transition-timing` | Curva de aceleração da transição | `var(--timing-standard, var(--timing-standart, ease))` |

## Inputs

| Propriedade | Alias | Tipo | Opcional | Padrão | Descrição |
|---|---|---|---|---|---|
| `actions` | `'p-actions'` | `PoListViewAction[]` | sim | - | Lista de ações que serão exibidas no componente. |
| `avatarSize` | `p-avatar-size` | `string` | sim | `md` | Define o tamanho do avatar do tipo **imagem** (URL). |
| `componentsSize` | `'p-components-size'` | `string` | sim | `medium` | Define o dimensionamento geral dos elementos no template. |
| `detailDisplay` | `p-detail-display` | `PoListViewDetailDisplay` | sim | `inline` | Define como o detalhe do item (diretiva `p-list-view-detail-template`) será exibido: |
| `fieldProperties` | `p-field-properties` | `PoListViewFieldProperties` | sim | - | Consolida, em um único objeto tipado ([`PoListViewFieldProperties`](/documentation/po-list-view#fieldProperties)), |
| `height` | `'p-height'` | `number` | sim | - | Define a altura da lista em *px*, desconsiderando o espaço do botão `p-show-more`. |
| `hideSelectAll` | `'p-hide-select-all'` | `boolean` | sim | `false` | Habilita a seleção de itens na lista. |
| `items` | `'p-items'` | `any[]` | não | - | Lista de itens que serão exibidos no componente. |
| `literals` | `'p-literals'` | `PoListViewLiterals` | sim | - | Objeto com as literais usadas no po-list-view, permitindo personalizar os textos exibidos no componente. |
| `propertyLink` | `'p-property-link'` | `string` | sim | - | Chave do objeto (`p-items`) com o *link* do título do item. |
| `propertyTitle` | `'p-property-title'` | `string` | sim | - | Chave do objeto (`p-items`) com o título do item. |
| `select` | `'p-select'` | `boolean` | sim | `false` | Habilita um *checkbox* para cada item da lista. Todos os items possuem a propriedade dinâmica `$selected` para |
| `showMoreDisabled` | `'p-show-more-disabled'` | `boolean` | sim | - | Indica que o botão *Carregar Mais Resultados* (`p-show-more`) será desabilitado. |
| `singleSelect` | `'p-single-select'` | `boolean` | sim | `false` | Define que somente um item da lista pode ser selecionado quando a seleção estiver habilitada |
| `tagPosition` | `p-tag-position` | `string` | sim | `bottom` | Define o posicionamento da *tag* (`PoListViewFieldProperties.tag.value`) em relação ao título dentro do item: |

## Outputs

| Evento | Alias | Tipo | Descrição |
|---|---|---|---|
| `itemClick` | `'p-item-click'` | `EventEmitter` | Ação que será executada ao clicar no item da lista. Quando definida, torna o item clicável. |
| `showDetail` | `'p-show-detail'` | `EventEmitter` | Ação que será executada ao expandir os detalhes do item. |
| `showMore` | `'p-show-more'` | `EventEmitter` | Ação executada ao clicar no botão de carregar mais resultados. |
| `titleAction` | `'p-title-action'` | `EventEmitter` | Ação que será executada ao clicar no título. |
