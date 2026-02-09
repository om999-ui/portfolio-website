import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-background p-6 md:p-8 rounded-xl card-shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    B.E., Electronics & Telecommunication Engineering
                  </h3>
                  <p className="text-muted-foreground font-medium mb-1">
                    Dr. D. Y. Patil Institute of Technology
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Expected 2026 · CGPA: 7.85 / 10
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-xl card-shadow">
                <h4 className="font-semibold text-primary mb-2">12th Grade</h4>
                <p className="text-sm text-foreground">Smt. Kasturbai Walchand College</p>
                <p className="text-sm text-muted-foreground">2022 · 64.17%</p>
              </div>
              <div className="bg-background p-6 rounded-xl card-shadow">
                <h4 className="font-semibold text-primary mb-2">10th Grade</h4>
                <p className="text-sm text-foreground">Damani High School</p>
                <p className="text-sm text-muted-foreground">2020 · 80.20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
