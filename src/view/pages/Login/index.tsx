import { Link } from "react-router";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors } = useLoginController();
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?{" "}
          </span>
          <Link
            to={"/register"}
            className="tracking-[-0.5px] text-teal-900 font-medium"
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <form
        onSubmit={handleSubmit}
        action=""
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}
