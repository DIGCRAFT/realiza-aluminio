# Como Usar o Projeto Realiza Alumínio

## 1. Estrutura de Componentes

### ColorSelector
Componente para seleção de cores interativa.

```tsx
import ColorSelector from "@/components/ColorSelector"
import { PRODUCT_LINES } from "@/lib/colors"

export default function MyPage() {
  const [selectedColor, setSelectedColor] = useState()
  
  return (
    <ColorSelector
      productLine={PRODUCT_LINES.perfetta}
      selectedColor={selectedColor}
      onColorSelect={setSelectedColor}
    />
  )
}
```

### ExclusiveBonus
Componente de bônus exclusivo para LP-Alumínio.

```tsx
import ExclusiveBonus from "@/components/ExclusiveBonus"

export default function LPAluminio() {
  return (
    <ExclusiveBonus
      title="Bônus Exclusivo: Erros que Economizam Milhares"
      onDownload={() => console.log("Download")}
    />
  )
}
```

### BudgetPage
Página completa de orçamento.

```tsx
import BudgetPage from "@/pages/BudgetPage"

// Use em suas rotas
```

## 2. Dados de Cores

### Acessar Cores
```tsx
import { PRODUCT_LINES, WOOD_COLORS, SOLID_COLORS } from "@/lib/colors"

// Acessar linha de produto
const suprema = PRODUCT_LINES.suprema
console.log(suprema.colors) // Cores amadeirado
console.log(suprema.solidColors) // Cores sólidas

// Acessar cores diretamente
console.log(WOOD_COLORS)
console.log(SOLID_COLORS)
```

## 3. Tipos TypeScript

```tsx
import { 
  ProductLine, 
  WoodColor, 
  ProductLineConfig,
  ColorSelection,
  BudgetRequest 
} from "@/types/products"

// Usar tipos
const selection: ColorSelection = {
  line: "perfetta",
  color: WOOD_COLORS[0],
  quantity: 10
}
```

## 4. Integração em Landing Pages

### Adicionar ColorSelector em uma LP
```tsx
import ColorSelector from "@/components/ColorSelector"
import { PRODUCT_LINES } from "@/lib/colors"
import { useState } from "react"

export default function LandingPagePerfetta() {
  const [selectedColor, setSelectedColor] = useState()
  
  return (
    <div>
      {/* Seu conteúdo */}
      <section>
        <h2>Escolha a Cor</h2>
        <ColorSelector
          productLine={PRODUCT_LINES.perfetta}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </section>
    </div>
  )
}
```

### Adicionar ExclusiveBonus na LP-Alumínio
```tsx
import ExclusiveBonus from "@/components/ExclusiveBonus"

export default function LandingPageAluminio() {
  return (
    <div>
      {/* Seu conteúdo */}
      <section>
        <ExclusiveBonus
          onDownload={() => {
            // Lógica de download
          }}
        />
      </section>
    </div>
  )
}
```

## 5. Rotas

Adicione no seu App.tsx:

```tsx
import BudgetPage from "@/pages/BudgetPage"

<Route path="/orcamento" component={BudgetPage} />
```

## 6. Customização

### Adicionar nova cor
```tsx
// Em src/lib/colors.ts
const WOOD_COLORS = [
  // ... cores existentes
  { 
    id: "nova-cor", 
    name: "Nova Cor", 
    hexCode: "#ffffff", 
    category: "wood" as const 
  }
]
```

### Adicionar nova linha de produto
```tsx
// Em src/lib/colors.ts
export const PRODUCT_LINES: Record<string, ProductLineConfig> = {
  // ... linhas existentes
  novaLinha: {
    id: "novaLinha",
    name: "NOVA LINHA",
    displayName: "Linha Nova",
    description: "Descrição da linha",
    colors: WOOD_COLORS,
    solidColors: SOLID_COLORS,
    hasBonus: false,
  }
}
```

## 7. Documentação Adicional

- **COMECE_AQUI.txt** - Guia rápido
- **CHECKLIST_ARQUIVOS.md** - Lista de arquivos
- **SETUP_INSTRUCTIONS.md** - Instruções de envio
- **EXEMPLO_ESTRUTURA.md** - Exemplos de código
- **PROJECT_STATUS.md** - Status do projeto

## 8. Suporte

Para dúvidas sobre:
- Estrutura: Consulte EXEMPLO_ESTRUTURA.md
- Arquivos: Consulte CHECKLIST_ARQUIVOS.md
- Status: Consulte PROJECT_STATUS.md
- Uso: Consulte este arquivo

---

**Pronto para usar!** 🚀
