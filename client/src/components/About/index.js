import React from 'react';

function About() {
  return (
    <section className="my-5">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
</section>
  );
}

export default About;