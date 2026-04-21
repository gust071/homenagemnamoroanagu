# 💕 Nossa História de Amor

Um site bonito e personalizado em homenagem ao seu namoro, criado com HTML, CSS e JavaScript puro.

## Características

✨ **Design Romântico**: Interface moderna e elegante com cores rosa e gradientes
📸 **Galeria de Fotos**: Exibição responsiva de todas as suas fotos
📅 **Timeline**: Datas importantes do relacionamento
⏱️ **Contador de Dias**: Mostra quantos dias, horas e minutos estão juntos
📱 **Responsivo**: Funciona perfeitamente em celular, tablet e computador
🚀 **Rápido**: Sem dependências externas, apenas HTML, CSS e JavaScript

## Como Usar

### Opção 1: Hospedar no GitHub Pages (Gratuito)

1. **Crie uma conta no GitHub** (se não tiver): https://github.com

2. **Crie um novo repositório**:
   - Nome: `seu-usuario.github.io` (substitua `seu-usuario` pelo seu username do GitHub)
   - Deixe como público
   - Não inicialize com README

3. **Faça upload dos arquivos**:
   - Copie todos os arquivos desta pasta para o repositório
   - Certifique-se de manter a estrutura de pastas (a pasta `fotos/` com as imagens)

4. **Acesse seu site**:
   - Após alguns minutos, acesse: `https://seu-usuario.github.io`
   - Compartilhe o link com seu namorado/namorada! 💕

### Opção 2: Hospedar Localmente

1. Abra o arquivo `index.html` em um navegador
2. Pronto! O site funcionará localmente

## Personalizações

### Mudar as Datas
Abra o arquivo `script.js` e procure por:
```javascript
const dataInicio = new Date(2025, 2, 16, 10, 1, 0);
```

Altere os números:
- `2025` = ano
- `3` = mês (0 = janeiro, 1 = fevereiro, 2 = março, etc.)
- `28` = dia
- `19` = hora
- `0` = minuto

### Adicionar Mais Fotos
1. Coloque as novas fotos na pasta `fotos/`
2. Abra `script.js` e adicione os nomes das fotos no array `fotos`

### Mudar Cores
Abra `style.css` e procure por `:root`:
```css
:root {
    --primary-color: #ff6b9d;      /* Rosa principal */
    --secondary-color: #ffa8d8;    /* Rosa secundário */
    --accent-color: #fff0f5;       /* Cor de fundo */
}
```

## Estrutura de Arquivos

```
namoro-site/
├── index.html          # Página principal
├── style.css           # Estilos do site
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
└── fotos/              # Pasta com todas as fotos
    ├── IMG_5440.jpeg
    ├── IMG_5439.jpeg
    └── ... (mais fotos)
```

## Dicas

- 📸 Use fotos de boa qualidade para melhor resultado
- 💕 Personalize as mensagens no HTML conforme desejar
- 🎨 Teste as cores para encontrar o estilo perfeito
- 📱 Sempre teste em celular para garantir responsividade

## Suporte

Se tiver dúvidas sobre como hospedar no GitHub Pages:
- Documentação oficial: https://pages.github.com/
- Guia em português: https://docs.github.com/pt

---

**Feito com ❤️ para celebrar seu amor!**
