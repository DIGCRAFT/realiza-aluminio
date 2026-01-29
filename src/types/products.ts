/**
 * Tipos e interfaces para linhas de produtos
 */

export type ProductLine = "suprema" | "gold" | "perfetta" | "acm" | "aluminio";

export interface WoodColor {
  id: string;
  name: string;
  hexCode: string;
  imageUrl?: string;
  category: "wood" | "solid";
}

export interface ProductLineConfig {
  id: ProductLine;
  name: string;
  displayName: string;
  description: string;
  colors: WoodColor[];
  solidColors: WoodColor[];
  hasBonus?: boolean;
  bonusTitle?: string;
  bonusDescription?: string;
}

export interface ColorSelection {
  line: ProductLine;
  color: WoodColor;
  quantity?: number;
  notes?: string;
}

export interface BudgetRequest {
  name: string;
  email: string;
  phone: string;
  selections: ColorSelection[];
  message?: string;
}
