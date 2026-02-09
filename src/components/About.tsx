export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="bg-background p-8 md:p-12 rounded-2xl card-shadow-lg">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              I'm Om Shrimant Masal, an aspiring Full-Stack developer specializing in the MERN stack 
              (MongoDB, Express, React, Node). I've completed hands-on internships in web development 
              and telecommunications support where I built responsive frontends, RESTful backends and 
              learned disciplined testing and troubleshooting. I'm excited to contribute to practical 
              projects, learn from experienced teams, and grow as an engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
