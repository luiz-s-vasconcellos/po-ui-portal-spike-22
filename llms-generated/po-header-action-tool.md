# PoHeaderActionTool

**Tipo:** Interface / Modelo
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-header-action-tool

Interface* que define a seção de Actions do header.

Indicação de uso:
- Primeira ação destinada à app launcher.
- Segunda ação (terceiro ícone) destinada à notificações.
- Terceira ação (segundo ícone) destinada para agrupamento de ações.

> Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.

## Propriedades

| Propriedade | Tipo | Opcional | Descrição |
|---|---|---|---|
| `action` | `Function` | sim | Evento emitido ao clicar em uma ação |
| `badge` | `number` | sim | Valor númerico com a repsentação de notificações |
| `icon` | `string` | sim | Ícone do botão de ação |
| `items` | `Array<PoHeaderActionToolItem>` | sim | Itens de ações |
| `label` | `string` | sim | Título da ação |
| `link` | `string` | sim | link utilizado no redirecionamento das páginas. |
| `onClose` | `(label?: string) => void` | sim | Função executada quando o popup ou popover da ação é fechado. |
| `onOpen` | `(label?: string) => void` | sim | Função executada quando o popup ou popover da ação é aberto. |
| `popover` | `PoHeaderActionPopoverAction` | sim | Template que será utilizado na ação |
| `tooltip` | `string` | sim | Texto que será apresentado na tooltip |
