import { Button } from "@heroui/react";
import useSWR from "swr";

const Index = () => {
  const { data } = useSWR("/todos");
  console.log(data);
  return (
    <div className="">
      <Button>Hello World!</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Index;

export const Server = async () => {
  return <div>sadklas</div>;
};
