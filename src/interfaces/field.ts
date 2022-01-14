export interface Field {
  id: string;
  type?: string;
  label: string;
  component: 'text' | 'select' | 'radio';
  values?: string[];
}
