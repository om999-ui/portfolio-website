import { Award, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Participation Certificate — Code-O-Fiesta 2023",
    organization: "ITSA, Dr. D.Y. Patil Institute",
    icon: Trophy,
  },
  {
    title: "Participation Certificate — GirlScript Summer of Code (GSSoC) 2025 ",
    organization: "GirlScript Foundation.",
    icon: Trophy,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate Certification",
    organization: "Oracle",
    icon: Trophy,
  },
   {
    title: "Phython Certification",
    organization: "HackerRank",
    icon: Trophy,
  },
  {
    title: "The Complete 2025 Web Development Bootcamp",
    organization: "Udemy — Dr. Angela Yu",
    icon: Award,
  },
  {
    title: "SQL Certification",
    organization: "HackerRank",
    icon: Award,
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Achievements & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl card-shadow hover-lift transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
