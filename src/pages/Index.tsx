import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useScrollParallax } from '@/hooks/useScrollParallax';
import logoOffwhite from '@/assets/logo-offwhite.svg';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <article className="space-y-4">
    {icon}
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </article>
);

const FEATURES = [
  {
    title: 'Personalized Insights',
    description:
      'Get 3-5 regenerative highlights tailored to your product type and development stage, with specific recommendations for sustainable materials, circular design, and regenerative strategies.',
  },
  {
    title: '3-Step Action Plan',
    description:
      'Receive a clear 180-day roadmap with specific tasks for the next 30, 90, and 180 days. Actionable steps for materials research, prototyping, and scaling regenerative design.',
  },
  {
    title: 'Email Summary',
    description:
      'Get your comprehensive regenerative readiness results sent directly to your inbox for easy reference, sharing with stakeholders, and tracking progress over time.',
  },
] as const;

const Index = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollY = useScrollParallax();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      console.error('Video failed to load');
      setVideoError(true);
    };

    video.addEventListener('error', handleError);
    return () => video.removeEventListener('error', handleError);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sana Growth - Free Regenerative Product Design Assessment</title>
        <meta
          name="description"
          content="Discover viable regenerative design pathways for your product. Free assessment covering materials, packaging, circularity, and end-of-life. Get personalized insights and a 180-day action plan."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Video Hero Section */}
        <section
          className="relative h-screen w-full overflow-hidden"
          aria-label="Hero section with regenerative design audit introduction"
        >
          {/* Background Video with Parallax */}
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/leave-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover motion-reduce:transform-none"
              aria-hidden="true"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            >
              <source src="/videos/leave.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-900 to-green-700"
              aria-hidden="true"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          {/* Header */}
          <header className="absolute top-0 left-0 right-0 z-20">
            <nav className="container mx-auto px-6 py-8" aria-label="Main navigation">
              <div className="flex items-center justify-between">
                <img
                  src={logoOffwhite}
                  alt="Sana Growth - Regenerative Product Design"
                  className="h-10"
                />
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
                    Admin Login
                  </Button>
                </Link>
              </div>
            </nav>
          </header>

          {/* Hero Content */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container mx-auto px-6 pb-20 md:pb-32">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
                  Regenerative Design Audit
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                  Your starting point for regenerative design. Evaluate your product across
                  materials, packaging, and end-of-life.
                </p>
                <Link to="/assessment">
                  <Button size="lg" className="text-base bg-white text-foreground hover:bg-white/90">
                    Start Your Assessment
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="container mx-auto px-6 py-20 md:py-32"
          aria-label="Assessment features and benefits"
        >
          <h2 className="sr-only">What You'll Get From This Assessment</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={<CheckCircle2 className="w-12 h-12 text-foreground" aria-hidden="true" />}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
