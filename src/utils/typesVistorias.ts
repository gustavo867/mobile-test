export interface Vistorias {
  title: string;
  block: string;
  paviment: number;
  delivery_date: string;
  incidents: number;
  check: boolean;
  id: number;
  name: string;
}

export interface Residences {
  id: number;
  residence_name: string;
  construction_company: string;
  vistorias: Vistorias[];
}

export interface Vistoria {
  residences: Residences[];
}
