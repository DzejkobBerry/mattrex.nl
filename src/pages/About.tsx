import React from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { TargetIcon, EyeIcon, AwardIcon } from 'lucide-react';
export function About() {
  const values = [{
    icon: TargetIcon,
    title: 'Technologie',
    description: 'We zetten geavanceerde innovaties in om de meest moderne energieoplossingen te leveren.'
  }, {
    icon: EyeIcon,
    title: 'Ecologie',
    description: 'Duurzaamheid staat centraal. Elke oplossing helpt de ecologische voetafdruk te verlagen.'
  }, {
    icon: AwardIcon,
    title: 'Vertrouwen',
    description: 'We bouwen langdurige relaties op basis van transparantie, kwaliteit en uitstekende service.'
  }];
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
              Over MATTREX.nl
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Officieel en geautoriseerd distributeur van <strong>Sluxer</strong> in Nederland.
              Gespecialiseerd in <strong>energieopslag</strong>, <strong>inverters</strong> en technisch toebehoren
              voor bedrijven en particulieren.
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
                Ons Verhaal
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>MATTREX.nl</strong> is officieel en geautoriseerd distributeur van
                  <strong>Sluxer</strong>. We richten ons op distributie, installatie en advies
                  voor systemen voor <strong>energieopslag</strong>, <strong>inverters</strong> en
                  technisch toebehoren voor zowel zakelijke klanten als particulieren.
                </p>
                <p>
                  We beschikken over <strong>meer dan 10 jaar ervaring</strong> in Europa en zijn
                  sinds <strong>januari 2025</strong> actief in Nederland. We leveren oplossingen
                  met een opslagcapaciteit van <strong>16 kWh tot 512 kWh</strong>, inclusief
                  volledige technische ondersteuning, configuratie en professioneel advies.
                </p>
                <p>
                  We installeren <strong>geen zonnepanelen</strong>; onze focus ligt uitsluitend op
                  batterijsystemen, <strong>inverters</strong> en accessoires. We bedienen klanten
                  in <strong>heel Nederland</strong> met betrouwbaar energiemanagement en
                  <strong>professioneel advies</strong>.
                </p>
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop" alt="MATTREX team" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Jaar Ervaring</div>
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
                Onze Missie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Particulieren en bedrijven versterken met duurzame
                <strong>energieopslag</strong> en intelligente <strong>inverter</strong>-oplossingen.
                Verlaag <strong>energiekosten</strong>, vergroot energie-onafhankelijkheid i.v.m.
                <strong>energiekostenbeheer</strong> (energimangement) i zapewnij stabilność.
                Zapewniamy <strong>professioneel advies</strong>, konfigurację i wsparcie techniczne.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-white">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Onze Visie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Een toekomst waarin elk huis en elke onderneming draait op
                slimme <strong>energieopslag</strong> i <strong>inverter</strong>-technologie. Met
                oplossingen <strong>Sluxer</strong> <strong>in Nederland</strong> budujemy odporne,
                duurzame społeczności z profesjonalnym <strong>energimangement</strong>.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Waarom Sluxer */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Waarom Sluxer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Officiële en geautoriseerde distributie van <strong>Sluxer</strong> —
              betrouwbare <strong>energieopslag</strong>, inteligent <strong>energimangement</strong> i
              kompatybilne <strong>inverters</strong> dla domu i biznesu w całym <strong>Nederland</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="bg-gradient-to-br from-primary/5 to-white">
              <h3 className="text-2xl font-semibold text-secondary mb-3">Schaalbaar 16–512 kWh</h3>
              <p className="text-gray-700">
                Modularne baterijen — od domu po przemysł. Rozszerzalna
                pojemność, wysokie bezpieczeństwo i zgodność z systemami.
              </p>
            </Card>
            <Card hover className="bg-gradient-to-br from-secondary/5 to-white">
              <h3 className="text-2xl font-semibold text-secondary mb-3">Veiligheid i BMS</h3>
              <p className="text-gray-700">
                Zaawansowany Battery Management System, monitoring w czasie
                rzeczywistym i ochrona przed przeciążeniem.
              </p>
            </Card>
            <Card hover className="bg-gradient-to-br from-primary/5 to-white">
              <h3 className="text-2xl font-semibold text-secondary mb-3">Professioneel advies</h3>
              <p className="text-gray-700">
                Pełna konfiguracja, dobór <strong>inverter</strong>, wsparcie techniczne i
                doradztwo — redukcja kosztów i stabilna praca systemu.
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
              Onze Waarden
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Drie principes sturen alles wat we doen.
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
              Technologie die Duurzaamheid Aanstuurt
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We werken samen met toonaangevende fabrikanten zoals
              <strong>Sluxer</strong> om geavanceerde <strong>energieopslag</strong> te leveren.
              Onze oplossingen bieden intelligent batterijbeheer, realtime
              monitoring en slimme optimalisatie voor maximale efficiëntie en
              levensduur.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-gray-600">Efficiëntie</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-gray-600">Jaar Garantie</div>
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