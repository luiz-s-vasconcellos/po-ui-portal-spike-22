# PoHeaderUser

**Tipo:** Interface / Modelo
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-header-user

Interface* que define a seção de Customer do header.

## Propriedades

| Propriedade | Tipo | Opcional | Descrição |
|---|---|---|---|
| `action` | `Function` | sim | Evento emitido ao clicar na seção |
| `avatar` | `string` | não | Logo representando o perfil |
| `customerBrand` | `string` | não | Imagem da marca |
| `items` | `Array<PoHeaderActionToolItem>` | sim | Itens de ações |
| `onClose` | `Function` | sim | Função executada quando o popup ou popover da seção de Customer é fechado. |
| `onOpen` | `Function` | sim | Função executada quando o popup ou popover da seção de Customer é aberto. |
| `popover` | `PoHeaderActionPopoverAction` | sim | Template que será utilizado na ação |
| `status` | `'positive' | 'negative' | 'warning' | 'disabled'` | sim | Indicação representando o estado do usuário |
