import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout Example (About)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, numquam
        dolorem dolore rem iusto fugiat maxime delectus, culpa nisi odit
        aspernatur quam nihil non itaque, sunt sit deserunt nesciunt cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        voluptate cupiditate cum nam perferendis nisi dolores ullam inventore,
        accusantium, ducimus iusto odio autem dolor placeat molestias, deleniti
        voluptatum repudiandae quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda
        alias dolore, iure ipsa obcaecati pariatur labore cumque ab beatae
        sapiente quo, quod optio sint, nam unde debitis possimus repellendus.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
