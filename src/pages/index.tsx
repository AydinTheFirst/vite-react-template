import useSWR from "swr";

const Index = () => {
  const { data } = useSWR("/api");
  console.log(data);
  return <div>Index</div>;
};

export default Index;
