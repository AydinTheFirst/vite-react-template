import { Button, CardFooter, Input, Link } from "@heroui/react";
import { IdCardIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { CenteredCard } from "@/components";
import { PasswordInput } from "@/components/PasswordInput";
import http from "@/http";
import { sleep } from "@/utils";

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
      <form className="grid gap-3" onSubmit={handleSubmit}>
        <Input
          isRequired
          label="Email"
          name="email"
          startContent={<UserIcon />}
          type="email"
        />

        <Input
          isRequired
          label="Display Name"
          name="displayName"
          startContent={<IdCardIcon />}
        />

        <PasswordInput />
        <Button color="primary" fullWidth isLoading={isLoading} type="submit">
          Register
        </Button>
      </form>
      <CardFooter className="flex-col justify-center">
        <p>Already have an account?</p>
        <Link href="/login">Login</Link>
      </CardFooter>
    </CenteredCard>
  );
};

export default Register;
