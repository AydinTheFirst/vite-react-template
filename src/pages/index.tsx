import useSWR from "swr";

const Index = () => {
  const { data } = useSWR("/todos");
  console.log(data);
  return (
    <div className="">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Index;

export const Server = async () => {
  return <div>sadklas</div>;
};
