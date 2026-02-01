import { Leaf, Droplets, Mountain, Sun, TreeDeciduous, Flower } from "lucide-react";
import homeContent from "@/content/home.json";

// Fallback images
import leavesImage from "@/assets/nature-leaves.jpg";
import waterfallImage from "@/assets/nature-waterfall.jpg";
import mountainsImage from "@/assets/nature-mountains.jpg";

const iconMap = {
  leaf: Leaf,
  droplets: Droplets,
  mountain: Mountain,
  sun: Sun,
  tree: TreeDeciduous,
  flower: Flower,
};

const fallbackImages: Record<string, string> = {
  leaf: leavesImage,
  droplets: waterfallImage,
  mountain: mountainsImage,
};

const AboutNatureSection = () => {
  const { about, features } = homeContent;

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Descubra
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {about.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Leaf;
            const imageSrc = feature.image || fallbackImages[feature.icon] || leavesImage;
            
            return (
              <div
                key={feature.title}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 -mt-12">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground shadow-medium mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 lg:mt-28 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "{about.quote}"
            </p>
            <footer className="mt-6">
              <cite className="font-body text-muted-foreground not-italic">
                — {about.quoteAuthor}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutNatureSection;
