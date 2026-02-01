import heroImage from "@/assets/hero-forest.jpg";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowDown } from "lucide-react";
import homeContent from "@/content/home.json";

const HeroSection = () => {
  const { hero } = homeContent;
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Usa imagem do CMS se disponível, senão usa fallback
  const backgroundImage = hero.backgroundImage || heroImage;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Floresta exuberante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-forest/60 via-nature-forest/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Leaf className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              {hero.subtitle}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-200 leading-tight">
            {hero.title.split(" ").slice(0, -1).join(" ")}
            <span className="block text-nature-sand">{hero.title.split(" ").slice(-1)}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-400 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-600">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToAbout}
              className="group"
            >
              Explorar
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
