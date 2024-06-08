import { Especies } from "./especies"
import { Projetoconservacao } from "./projetoconservacao"

export type Ocendata = {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: Especies[];
  projetosConservacao: Projetoconservacao[];
}
