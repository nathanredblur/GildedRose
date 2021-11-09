import { Layout } from "src/components/Layout";

const About = () => (
  <Layout>
    <div className="flex flex-col items-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">About</h1>
      <p className="mt-3 text-2xl">
        This is a GildedRose kata refactor in Next js.
      </p>
    </div>
  </Layout>
);

export default About;