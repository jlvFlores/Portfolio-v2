import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Attributes from './Attributes';
import SocialMedia from './SocialMedia';

const Home = () => {
  const {
    projects, resume, attributes, texts,
  } = useSelector((store) => store.portfolio);
  return (
    <>
      <section id="headline">
        <h4>
          Hey there.
          <br />
          I&apos;m Jose Luis
        </h4>
        <h1>
          I&apos;m a front-end developer
          <br />
          and this is my Portfolio
        </h1>
        <p>{texts.headline}</p>
        <SocialMedia />
      </section>
      <section id="portfolio">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            techs={project.techs}
            image={project.image}
            imageAltText={project.imageAltText}
            description={project.description}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </section>
      <section id="about">
        <h4>About me</h4>
        <p>{texts.about}</p>
        <a href={resume.url} download={resume.title}>Check my Resume</a>
        <div id="attributes">
          {attributes.map((attribute) => (
            <Attributes
              key={attribute.category}
              category={attribute.category}
              items={attribute.items}
            />
          ))}
        </div>
      </section>
      <section id="contact">
        <p>{texts.contact}</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea cols="45" rows="10" placeholder="Let me know how I can help you." />
          <button type="submit">Get in touch</button>
        </form>
        <SocialMedia />
      </section>
    </>
  );
};

export default Home;
