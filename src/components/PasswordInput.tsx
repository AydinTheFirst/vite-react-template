import { Input } from "@nextui-org/react";
import { EyeOffIcon, EyeIcon, LockIcon } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
  label?: string;
}

export const PasswordInput = (props: PasswordInputProps) => {
  const { label } = props;

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const endContent = (
    <button type="button" onClick={toggleVisibility}>
      {isVisible ? <EyeOffIcon /> : <EyeIcon />}
    </button>
  );

  return (
    <Input
      label={label || "Password"}
      type={isVisible ? "text" : "password"}
      name="password"
      startContent={<LockIcon />}
      endContent={endContent}
      isRequired
    />
  );
};
