# PoTreeViewComponent

**Seletor:** `po-tree-view`
**Tipo:** Componente / Diretiva
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-tree-view

O componente fornece um modelo de visualização em árvore, possibilitando a exibição de informações de maneira
hierárquica com suporte a múltiplos níveis (configurável via `p-max-level`).

O componente permite:
- Navegação completa por teclado seguindo o padrão WAI-ARIA TreeView;
- Expansão e recolhimento de itens agrupadores;
- Seleção múltipla (checkbox) ou única (radio) dos itens;
- Exibição de ícones automáticos para agrupadores e itens finais;
- Estado desabilitado global ou individual por item;
- Execução de itens finais via clique ou teclado.

#### Navegação por teclado

| Tecla | Descrição |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| **Tab** | Entra no componente posicionando o foco no primeiro nó ativo. Ao pressionar novamente, sai do componente. |
| **ArrowDown** | Move o foco para o próximo nó visível. |
| **ArrowUp** | Move o foco para o nó visível anterior. |
| **ArrowRight** | Se colapsado, expande o nó. Se expandido, move o foco para o nó filho. |
| **ArrowLeft** | Se expandido, recolhe o nó. Se filho, move o foco para o nó pai. |
| **Home** | Move o foco para o primeiro nó visível. |
| **End** | Move o foco para o último nó visível. |
| **Enter / Space** | Com `p-selectable`: alterna a seleção do item. Sem `p-selectable`: executa o item final. |
| **Caractere** | Move o foco para o próximo nó cujo label inicia com o caractere pressionado (busca cíclica). |

#### Tokens customizáveis

É possível alterar o estilo do componente usando os seguintes tokens (CSS):

> Para maiores informações, acesse o guia [Personalizando o Tema Padrão com Tokens CSS](https://po-ui.io/guides/theme-customization).

| Propriedade | Descrição | Valor Padrão |
|----------------------------------------|-------------------------------------------------------|-------------------------------------------------|
| **Default** | | |
| `--background-color` | Cor de background do item | `var(--color-neutral-light-00)` |
| `--divider-color` | Cor do divider dos agrupadores de nível 0 | `var(--color-neutral-mid-40)` |
| `--font-family` | Família tipográfica | `var(--font-family-theme)` |
| `--font-size` | Tamanho da fonte | `var(--font-size-default)` |
| `--line-height` | Altura da linha | `var(--line-height-md)` |
| `--color` | Cor padrão do item | `var(--color-action-default)` |
| **Hover** | | |
| `--color-hover` | Cor do item em hover | `var(--color-action-hover)` |
| **Pressed** | | |
| `--color-pressed` | Cor do item em pressed | `var(--color-action-pressed)` |
| **Disabled** | | |
| `--color-disabled` | Cor do item desabilitado | `var(--color-action-disabled)` |
| **Selected** | | |
| `--title-color` | Cor do label quando selecionado | `var(--color-action-focus)` |

## Inputs

| Propriedade | Alias | Tipo | Opcional | Padrão | Descrição |
|---|---|---|---|---|---|
| `componentsSizeInput` | `p-components-size` | `string` | sim | `medium` | Define o tamanho dos componentes de formulário: |
| `disabled` | `p-disabled` | `boolean` | sim | `false` | Desabilita o componente inteiro. |
| `inputedItems` | `p-items` | `Array<PoTreeViewItem>` | não | - | Lista de itens do tipo `PoTreeViewItem` que será renderizada pelo componente. |
| `maxLevel` | `p-max-level` | `number` | sim | 4 | Define o máximo de níveis para o tree-view. |
| `noBorder` | `p-no-border` | `boolean` | sim | false | Remove a borda do container do componente. |
| `selectable` | `p-selectable` | `boolean` | sim | false | Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista. |
| `singleSelect` | `p-single-select` | `boolean` | sim | false | Habilita a seleção para item único atráves de po-radio. |

## Outputs

| Evento | Alias | Tipo | Descrição |
|---|---|---|---|
| `activated` | `p-activated` | `EventEmitter` | Ação que será disparada ao executar um item final (sem `subItems`). |
| `collapsed` | `p-collapsed` | `EventEmitter` | Ação que será disparada ao colapsar um item. |
| `expanded` | `p-expanded` | `EventEmitter` | Ação que será disparada ao expandir um item. |
| `selected` | `p-selected` | `EventEmitter` | Ação que será disparada ao selecionar um item. |
| `unselected` | `p-unselected` | `EventEmitter` | Ação que será disparada ao desfazer a seleção de um item. |
