import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold">Home</h1>
      <Counter />
    </div>
  );
};

export default Home;
