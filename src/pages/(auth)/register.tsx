import { CenteredCard } from "@/components";
import { PasswordInput } from "@/components/PasswordInput";
import http from "@/http";
import { sleep } from "@/utils";
import { Button, CardFooter, Input, Link } from "@nextui-org/react";
import { IdCardIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      await http.post("/auth/register", data);
      toast.success("Account created successfully!");
      await sleep(1000);
      location.replace("/login");
    } catch (error) {
      http.handleError(error);
    }

    setIsLoading(false);
  };

  return (
    <CenteredCard title="Register">
      <form onSubmit={handleSubmit} className="grid gap-3">
        <Input
          label="Email"
          name="email"
          type="email"
          startContent={<UserIcon />}
          isRequired
        />

        <Input
          label="Display Name"
          name="displayName"
          startContent={<IdCardIcon />}
          isRequired
        />

        <PasswordInput />
        <Button type="submit" color="primary" fullWidth isLoading={isLoading}>
          Register
        </Button>
      </form>
      <CardFooter className="justify-center flex-col">
        <p>Already have an account?</p>
        <Link href="/login">Login</Link>
      </CardFooter>
    </CenteredCard>
  );
};

export default Register;
