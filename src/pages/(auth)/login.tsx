import { CenteredCard } from "@/components";
import { PasswordInput } from "@/components/PasswordInput";
import http from "@/http";
import { sleep } from "@/utils";
import { Button, CardFooter, Input, Link } from "@nextui-org/react";
import { UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      const { data: res } = await http.post("/auth/login", data);
      localStorage.setItem("token", res.token);
      toast.success("Logged in successfully!");
      await sleep(1000);
      location.replace("/");
    } catch (error) {
      http.handleError(error);
    }

    setIsLoading(false);
  };

  return (
    <CenteredCard title="Login">
      <form onSubmit={handleSubmit} className="grid gap-3">
        <Input
          label="Username"
          name="username"
          startContent={<UserIcon />}
          isRequired
        />
        <PasswordInput />
        <Button type="submit" color="primary" fullWidth isLoading={isLoading}>
          Login
        </Button>
      </form>
      <CardFooter className="justify-center flex-col">
        <p>Don't have an account?</p>
        <Link href="/register">Register</Link>
      </CardFooter>
    </CenteredCard>
  );
};

export default Login;
