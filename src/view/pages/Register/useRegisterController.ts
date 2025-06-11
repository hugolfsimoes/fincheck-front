import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";



const schema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  email: z.string().nonempty('E-mail obrigatório').email("Email inválido"),
  password: z.string().nonempty("Senha obrigatória").min(8, 'Senha muito curta'),

});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {

  const { handleSubmit: hookFormSubmit,
    register,
    formState: { errors } } = useForm<FormData>({
      resolver: zodResolver(schema),
    });

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  });

  return { handleSubmit, register, errors };
}



