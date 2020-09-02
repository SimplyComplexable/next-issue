import Test from "../src/components/Test";
import Test2 from "../src/components/Test2";

const Home = () => {
  return (
    <div>
      Home
      {typeof window !== 'undefined' && <Test/>}
      <Test2/>
    </div>
  )
}

export default Home;
