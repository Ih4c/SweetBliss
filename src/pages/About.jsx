import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      {/* Story Section */}
      <section className="story">
        <h1>Our Story</h1>
        <p>
          Sweet Bliss was born out of a passion for creating unforgettable moments through delicious pastries and artisanal ice creams. Founded in 2024 by two lifelong friends, our mission is to bring joy to every bite using fresh, locally sourced ingredients.
        </p>
        <p>
          From our humble beginnings in a small kitchen to becoming a beloved local destination, Sweet Bliss is dedicated to crafting treats that inspire happiness and celebration.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team-member-1.jpg" alt="Team Member 1" />
            <h3>Gyasi Emmanuel Otoo</h3>
            <p>Head Pastry Chef</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member-2.jpg" alt="Team Member 2" />
            <h3>Lily Esenam Attadze</h3>
            <p>Ice Cream Artisan</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;