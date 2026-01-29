# 🧪 Guia de Testes - Realiza Alumínio

## ✅ Checklist de Testes Funcionais

### 1. **ColorSelector**
- [ ] Abrir LandingPage (/landing)
- [ ] Verificar abas de cores (Amadeirado, Sólidas)
- [ ] Clicar em cada cor
- [ ] Verificar preview atualizar em tempo real
- [ ] Testar em mobile (responsividade)
- [ ] Testar em tablet

### 2. **ExclusiveBonus**
- [ ] Verificar exibição do componente
- [ ] Clicar em "Baixar Guia"
- [ ] Verificar toast de sucesso
- [ ] Testar em diferentes resoluções

### 3. **Formulários**
- [ ] Preencher todos os campos
- [ ] Testar validação (campos vazios)
- [ ] Testar validação de email
- [ ] Testar validação de telefone
- [ ] Enviar formulário
- [ ] Verificar redirecionamento para /obrigado

### 4. **Rotas**
- [ ] Acessar /landing (LandingPage)
- [ ] Acessar /lp-4us (LandingPage4Us)
- [ ] Acessar /orcamento (BudgetPage)
- [ ] Acessar /obrigado (ThankYou)
- [ ] Acessar / (Home)
- [ ] Acessar /sobre (Sobre)
- [ ] Acessar /projetos (Projetos)
- [ ] Acessar /contato (Contato)
- [ ] Acessar /guia-esquadrias (Guide)
- [ ] Acessar /guia-perffeta (GuidePerffeta)
- [ ] Acessar rota inexistente (NotFound)

### 5. **Responsividade**
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Verificar layout em cada resolução
- [ ] Testar scroll e navegação

### 6. **Performance**
- [ ] Medir tempo de carregamento
- [ ] Verificar tamanho das imagens
- [ ] Testar em conexão lenta (3G)
- [ ] Verificar Core Web Vitals

### 7. **Acessibilidade**
- [ ] Testar navegação com teclado (Tab)
- [ ] Verificar contraste de cores
- [ ] Testar com screen reader
- [ ] Verificar labels de formulários

### 8. **Navegadores**
- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop)
- [ ] Chrome (Mobile)
- [ ] Safari (Mobile)

---

## 🚀 Como Executar os Testes

### Instalação e Setup
```bash
cd /home/ubuntu/realiza-aluminio
pnpm install
pnpm run dev
```

### Abrir no Navegador
```
http://localhost:5173
```

### Testar Landing Pages
```
http://localhost:5173/landing
http://localhost:5173/lp-4us
http://localhost:5173/orcamento
```

---

## 📋 Testes de Conversão

### ColorSelector
- [ ] Usuário consegue selecionar cor facilmente?
- [ ] Preview é claro e útil?
- [ ] Cores são realistas?
- [ ] Componente é intuitivo?

### ExclusiveBonus
- [ ] Bônus é atrativo?
- [ ] CTA é claro?
- [ ] Mensagem de sucesso aparece?
- [ ] Usuário quer fazer download?

### Formulários
- [ ] Campos são claros?
- [ ] Validação é amigável?
- [ ] Botão é destacado?
- [ ] Usuário sente confiança?

---

## 🐛 Bugs Conhecidos / Observações

### Potenciais Problemas
1. Imagens podem não carregar se paths estiverem incorretos
2. ColorSelector pode precisar de ajustes de cores
3. ExclusiveBonus pode precisar de conteúdo customizado
4. Formulários precisam de integração com backend

### Soluções
1. Verificar paths em `public/images/`
2. Ajustar cores em `src/lib/colors.ts`
3. Customizar textos em componentes
4. Integrar com API de envio de emails

---

## ✅ Testes Passaram?

Quando todos os testes passarem, o projeto está pronto para:
1. ✅ Deploy em staging
2. ✅ Testes de usuário
3. ✅ Deploy em produção
4. ✅ Monitoramento

---

**Boa sorte nos testes!** 🎉
