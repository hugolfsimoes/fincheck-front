import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from "zod";

type FormData = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().nonempty('E-mail obrigatório').email("Email inválido"),
  password: z.string().nonempty("Senha obrigatória").min(8, 'Senha muito curta'),
});

export function useLoginController() {

  const { handleSubmit: hookFormHandleSubmit, register, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {

  });

  return { handleSubmit, register, errors };
}
