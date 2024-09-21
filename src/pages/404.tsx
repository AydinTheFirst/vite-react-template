import { CenteredCard } from "@/components";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <CenteredCard title="Not Found - 404">
      <div className="grid gap-3 place-items-center">
        <p className="text-center max-w-sm text-red-500 text-lg">
          The page you are looking for does not exist. Please check the URL or
          click the button below to go back to the homepage.
        </p>

        <Button as={Link} to={"/"} color="primary" fullWidth>
          <strong>Go back to the homepage</strong>
        </Button>
      </div>
    </CenteredCard>
  );
};

export default NotFound;
