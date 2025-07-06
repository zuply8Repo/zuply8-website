import Hero from "../components/Hero";
import Card from "../components/MarkeingBanners/Card";

import { SolutionBlock } from "../components/SolutionBlockProps";

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-h1 font-delivery font-bold text-center mb-10">
          Our Solutions
        </h1>

        <div className="grid gap-8 lg:grid-cols-2  md:grid-cols-1">
          <SolutionBlock
            title="Supply Chain Assessment & Strategy"
            description={
              <>
                We analyze your current operations to uncover gaps and growth
                opportunities, delivering actionable roadmaps to improve{" "}
                <span>service levels </span>, <span>reduce waste</span>, and
                optimize <span>working capital</span>.
              </>
            }
          />
          <SolutionBlock
            title="Demand & Supply Planning"
            description={
              <>
                Leverage best-in-class tools and methods to{" "}
                <span>forecast demand</span> ,<span> balance supply</span>, and
                avoid <span>stockouts</span> or <span>excess inventory</span>.
                Our <span>planning services</span> help you build a responsive,
                <span>data-driven</span> operation.
              </>
            }
          />

          <SolutionBlock
            title="Inventory Optimization"
            description={
              <>
                We implement <span>ABC analysis</span>, stock policies, and{" "}
                <span>safety stock</span> strategies that improve product
                availability while minimizing financial risk tied to{" "}
                <span>overstock</span>.
              </>
            }
          />
          <Card variant="blue" buttonLabel="Tell us about your business">
            Lost in the chaos of <strong>Amazon</strong>, <strong>DHL</strong>,
            and <strong>3PL</strong> inventory?
            <br />
            <br />
            Let’s fix that, fast.
          </Card>
        </div>

        <div className="grid gap-8 mt-12 lg:grid-cols-3 md:grid-cols-1">
          <SolutionBlock
            title="ERP & Systems Integration"
            description={
              <>
                We integrate your <span>ERP</span>, <span>WMS</span>, and{" "}
                <span>planning tools</span> to ensure your data flows
                seamlessly, empowering your team with real-time visibility and
                smarter decision-making.
              </>
            }
          />

          <SolutionBlock
            title="Sales & Operations Planning (S&OP)"
            description={
              <>
                We design and facilitate S&OP processes to align your
                commercial, operational, and financial teams, ensuring everyone
                works toward shared business goals.
              </>
            }
          />
          <SolutionBlock
            title="Execution & Continuous Improvement"
            description={
              <>
                We design and facilitate <span>S&OP processes</span> to align
                your commercial, operational, and financial teams, ensuring
                everyone works toward shared business goals.
              </>
            }
          />
        </div>

        <div className="grid gap-8 mt-12 lg:grid-cols-1 md:grid-cols-1 place-items-center">
          <Card variant="blue" buttonLabel="Contact Us">
            <h1 className="text-h2">Forget overpriced software</h1> <br />
            We create agile automations that fit your process, not the other way
            around.
          </Card>
        </div>
      </main>
    </>
  );
}
