import React, { useState, useEffect } from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Link } from 'react-router-dom';
import { BatteryIcon, ZapIcon, SunIcon, BoxIcon, HomeIcon, BuildingIcon, CheckCircleIcon } from 'lucide-react';
export function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState<any | null>(null);
  const openDetails = (product: any) => {
    setDetailsProduct(product);
    setIsModalOpen(true);
  };
  const closeDetails = () => {
    setIsModalOpen(false);
    setDetailsProduct(null);
  };

  // Zamykaj modal klawiszem Escape
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDetails();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const productCategories = [
    {
      category: 'Energieopslag (Diensten)',
      icon: BatteryIcon,
      products: [
        {
          name: 'Sluxer Home 16 kWh',
          capacity: '16 kWh',
          power: '7.68 kW max',
          warranty: '10 jaar',
          price: '€0,00',
          popular: true,
          features: ['94% efficiëntie', '≥ 8000 cycli', 'CAN/RS485/Bluetooth'],
          image:
            'https://i.imgur.com/SLuA5sC.png',
          link:
            'https://www.sluxer.com/products/home-16-kwh?Monta%C5%BC=Brak+%2823%25+VAT%29',
          details: [
            'Capaciteit: 314Ah | 16 kWh',
            'Configuratie: 1P16S',
            'Efficiëntie: 94%',
            'Nominale spanning: 51.2 V',
            'Aanbevolen werkspanning: 48.0–54.4 V',
            'Werkbereik (max): 42.0–58.4 V',
            'Levensduur: ≥ 8000 cycli',
            'Max. laadstroom: 150 A',
            'Max. laadvermogen: 7.68 kW',
            'Max. ontlaadstroom: 150 A',
            'Max. ontlaadvermogen: 7.68 kW',
            'Communicatie: CAN / RS485 / Bluetooth',
            'Afmetingen (HxBxD): 817 × 412 × 267 mm',
            'Gewicht: 113 kg',
            'Producent: Sluxer Energy',
            'Leveringstermijn: 10 werkdagen',
            'Bedrijfstemperaturen: Laden 0–40°C, Ontladen −5–40°C',
          ],
        },
        {
          name: 'Sluxer Home 32 kWh',
          capacity: '32.154 kWh',
          power: '9.728 kW max',
          warranty: '10 jaar',
          price: '€0,00',
          popular: true,
          features: ['94% efficiëntie', '≥ 8000 cycli', 'CAN/RS485/Bluetooth'],
          image:
            'https://i.imgur.com/s6sx6aX.png',
          link:
            'https://www.sluxer.com/products/home-32-kwh?Monta%C5%BC=Brak+%2823%25+VAT%29',
          details: [
            'Capaciteit: 628Ah | 32.154 kWh',
            'Configuratie: 2P16S',
            'Efficiëntie: 94%',
            'Nominale spanning: 51.2 V',
            'Aanbevolen werkspanning: 48.0–54.4 V',
            'Werkbereik (max): 42.0–58.4 V',
            'Levensduur: ≥ 8000 cycli',
            'Max. laadstroom: 190 A',
            'Max. laadvermogen: 9.728 kW',
            'Max. ontlaadstroom: 190 A',
            'Max. ontlaadvermogen: 9.728 kW',
            'Communicatie: CAN / RS485 / Bluetooth',
            'Afmetingen (HxBxD): 829 × 800 × 280 mm',
            'Gewicht: 210 kg',
            'Producent: Sluxer Energy',
            'Leveringstermijn: 10 werkdagen',
            'Bedrijfstemperaturen: Laden 0–40°C, Ontladen −5–40°C',
          ],
        },
      ],
    },
    {
      category: 'Inverters (Diensten)',
      icon: ZapIcon,
      products: [
        {
          name: 'Hybride Omvormer 5 kW',
          capacity: '5 kW',
          power: 'Enkelfasig',
          warranty: '10 jaar',
          price: '€0,00',
          features: ['AC/DC koppeling', 'MPPT', 'Noodstroom'],
          image:
            'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        },
        {
          name: 'Hybride Omvormer 10 kW',
          capacity: '10 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: '€0,00',
          features: ['Parallel', 'Smart grid', 'Hoge efficiëntie'],
          image:
            'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        },
        {
          name: 'UPS/Omvormer 15 kW',
          capacity: '15 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: '€0,00',
          features: ['UPS functie', 'Snelle omschakeling', 'Zakelijke integratie'],
          image:
            'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'Accessoires & Installatie (Diensten)',
      icon: BoxIcon,
      products: [
        {
          name: 'Installatie & Oplevering',
          capacity: 'Binnen NL',
          power: '1–3 fase',
          warranty: 'Werkgarantie',
          price: '€0,00',
          features: ['Planning', 'Montage', 'Keuring'],
          image:
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
        },
        {
          name: 'BMS & Monitoring',
          capacity: 'Cloud/On-prem',
          power: 'Realtime',
          warranty: 'Supportcontract',
          price: '0.00 Euro',
          features: ['App dashboard', 'Alarmen', 'Rapportage'],
          image:
            'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
        },
        {
          name: 'Onderhoud & Inspectie',
          capacity: 'Periodiek',
          power: 'Op locatie',
          warranty: 'Service SLA',
          price: '0.00 Euro',
          features: ['Veiligheidscheck', 'Firmware updates', 'Prestatie-audit'],
          image:
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
        },
      ],
    },
  ];
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Onze Producten
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>MATTREX.nl</strong> is officieel en geautoriseerd distributeur van
              <strong>Sluxer</strong> in Nederland. Oplossingen voor <strong>energieopslag</strong>
              van <strong>16–512 kWh</strong>, <strong>inverters</strong> en accessoires — met
              volledige configuratie en technisch support.
            </p>
            <p className="mt-2 text-base text-gray-600">
              We installeren geen zonnepanelen; we focussen op batterijen,
              inverters en technisch toebehoren.
            </p>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, catIndex) => <section key={catIndex} className={catIndex % 2 === 0 ? 'py-12 md:py-20 bg-white' : 'py-12 md:py-20 bg-gray-50'}>
          <Container>
            <div className="flex items-center justify-center mb-12">
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <category.icon size={32} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-secondary">
                {category.category}
              </h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.category === 'Energieopslag (Diensten)' ? 'lg:grid-cols-2 justify-items-center lg:max-w-4xl mx-auto' : 'lg:grid-cols-3'} gap-6 md:gap-8`}>
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full ${product.popular ? 'object-contain' : 'object-cover'} bg-transparent`}
                    />
                    {!product.popular && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    )}

                    {/* Popular badge */}
                    {product.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold text-xs shadow-md">
                        Meest gekocht
                      </div>
                    )}

                    {/* Capacity pill */}
                    {!product.popular && (
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <div className="bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                          {product.capacity}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Vermogen: {product.power}</span>
                        <span>Garantie: {product.warranty}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary">
                        {product.price}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Inclusief BTW</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircleIcon
                            size={18}
                            className="text-primary mr-2 flex-shrink-0 mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button usunięty na rzecz przycisków Details/Koop Nu */}
                    {/* Extra Actions */}
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      <Button size="lg" variant="outline" className="px-8" onClick={() => openDetails(product)}>
                        Details
                      </Button>
                      <Link to="/contact">
                        <Button size="lg" className="px-8">
                          Koop Nu
                        </Button>
                      </Link>
                    </div>
                    <p className="text-center text-xs text-gray-500">Gratis offerte binnen 24 uur</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
      </section>)}

      {/* Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={closeDetails}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-0 overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
            {/* Always-visible close button */}
            <button
              aria-label="Sluiten"
              onClick={closeDetails}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow"
            >
              ×
            </button>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-2xl font-bold text-secondary">{detailsProduct?.name}</h3>
              <button aria-label="Sluiten" onClick={closeDetails} className="text-gray-500 hover:text-gray-700 text-xl leading-none">×</button>
            </div>

            {/* Image */}
            {detailsProduct?.image && (
              <div className="bg-gray-50 flex items-center justify-center px-6 pt-6">
                <img src={detailsProduct.image} alt={detailsProduct?.name} className="h-40 md:h-52 object-contain" />
              </div>
            )}

            {/* Badges */}
            <div className="px-6 pt-4 flex flex-wrap gap-2">
              {detailsProduct?.popular && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Meest gekocht</span>
              )}
              {detailsProduct?.capacity && (
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">Capaciteit: {detailsProduct.capacity}</span>
              )}
              {detailsProduct?.power && (
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">Vermogen: {detailsProduct.power}</span>
              )}
              {detailsProduct?.warranty && (
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">Garantie: {detailsProduct.warranty}</span>
              )}
            </div>

            {/* Price */}
            {detailsProduct?.price && (
              <div className="px-6 pt-4">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary">{detailsProduct.price}</div>
                  <p className="text-xs text-gray-600 mt-1">Incl. btw</p>
                </div>
              </div>
            )}

            {/* Details grid */}
            <div className="px-6 py-6">
              <h4 className="text-lg font-semibold text-secondary mb-3">Specificaties</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(detailsProduct?.details ?? detailsProduct?.features ?? []).map((d: string, idx: number) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="px-6 pb-6 flex justify-end gap-3">
              {detailsProduct?.link && (
                <a href={detailsProduct.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Bekijk bij Sluxer</Button>
                </a>
              )}
              <Button variant="outline" onClick={closeDetails}>Sluiten</Button>
              <Link to="/contact">
                <Button>Koop Nu</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Niet Zeker Welk Systeem Past Bij U?
            </h2>
            <p className="text-xl opacity-90">
              Onze experts helpen u graag bij het kiezen van de perfecte
              energieoplossing voor uw situatie. Neem vrijblijvend contact op
              voor persoonlijk advies.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
                Gratis Adviesgesprek
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>;
}