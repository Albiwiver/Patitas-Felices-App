export interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
