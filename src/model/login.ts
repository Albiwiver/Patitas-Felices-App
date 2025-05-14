export interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  error: string | null;
  loading: boolean;
}
