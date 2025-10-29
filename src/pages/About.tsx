import React from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { TargetIcon, EyeIcon, AwardIcon } from 'lucide-react';
export function About() {
  const values = [{
    icon: TargetIcon,
    title: 'Technology',
    description: 'We leverage cutting-edge innovations to deliver the most advanced energy solutions.'
  }, {
    icon: EyeIcon,
    title: 'Ecology',
    description: 'Sustainability is at our core. Every solution we provide helps reduce environmental impact.'
  }, {
    icon: AwardIcon,
    title: 'Trust',
    description: 'We build lasting relationships through transparency, quality, and exceptional service.'
  }];
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
              About MATTREX
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Leading the energy revolution with innovative storage solutions
              and a commitment to a sustainable future.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, MATTREX began with a simple mission: make
                  renewable energy accessible and practical for everyone. What
                  started as a small team of passionate engineers has grown into
                  the Netherlands' leading provider of energy storage solutions.
                </p>
                <p>
                  Over 15 years, we've installed more than 500 systems across
                  homes, businesses, and industrial facilities. Our expertise
                  spans battery storage, solar inverters, and complete renewable
                  energy systems.
                </p>
                <p>
                  Today, we continue to innovate, partnering with leading
                  manufacturers to bring the latest technology to our clients
                  while maintaining our commitment to exceptional service and
                  sustainability.
                </p>
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop" alt="MATTREX team" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-white">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals and businesses with sustainable energy
                solutions that reduce costs, increase energy independence, and
                contribute to a cleaner planet. We make renewable energy simple,
                reliable, and accessible.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-white">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A future where every home and business is powered by clean,
                renewable energy. We envision a world where energy storage is as
                common as solar panels, creating resilient, sustainable
                communities across the Netherlands and beyond.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => <Card key={index} hover>
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>)}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Technology That Powers Sustainability
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We partner with world-leading manufacturers to deliver
              cutting-edge energy storage systems. Our solutions feature
              advanced battery management, real-time monitoring, and intelligent
              optimization algorithms that maximize efficiency and lifespan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-gray-600">Efficiency</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-gray-600">Year Warranty</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>;
}