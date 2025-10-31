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
          badgeEnabled: true,
          badgeText: 'Gratis installatie',
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
          badgeEnabled: true,
          extraBadge: 'Gratis installatie',
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
          name: 'Hoymiles HIT-10L-G3 Hybride Omvormer 10 kW',
          capacity: '10 kW',
          power: 'Driefasig (laagspanningsbatterij)',
          warranty: '12 jaar',
          price: '€0,00',
          popular: true,
          features: ['Hybride', '4 MPPT (20 A)', 'EMS-modus', 'S-Miles Cloud monitoring'],
          image:
            'https://i.imgur.com/L28G8BI.png',
          link:
            'https://allegro.pl/oferta/inwerter-hoymiles-hit-10l-g3-trojfazowy-niskonapieciowy-falownik-10kw-17773467389?srsltid=AfmBOooyyu9fzjfCoXEKCatlTmdgVe0-6hRZZH6wJMheCUO3xM1FEQRb',
          details: [
            '3-fase hybride omvormer',
            '4 MPPT met 20 A ingang',
            'EMS: eigen verbruik, economisch, nood, peak shaving, tijdstarief',
            'Parallel plaatsing tot 10 units',
            'Ongebalanceerde fasebelasting mogelijk tot 50% per fase',
            'S-Miles Cloud beheer en monitoring',
            'Ondersteuning voor laagspanningsbatterijsystemen',
          ],
        },
        {
          name: 'Hoymiles HIT-20L-G3 Hybride Omvormer 20 kW',
          capacity: '20 kW',
          power: 'Driefasig (laagspanningsbatterij)',
          warranty: '12 jaar',
          price: '€0,00',
          popular: true,
          features: ['Hybride', '4 MPPT (20 A)', 'EMS-modus', 'Parallel tot 10'],
          image:
            'https://i.imgur.com/HBRbYQS.png',
          link:
            'https://panele-sloneczne.com/product/hoymiles-falownik-hybrydowy-hit-20l-g3-3-fazowy-niskonapieciowy/',
          details: [
            '3-fase hybride omvormer',
            '4 MPPT met 20 A ingang',
            'EMS: peak shaving en tijdstarief',
            'Parallel tot 10 omvormers',
            'Ultralichte constructie voor eenvoudige installatie',
            'Ingebouwde meter met bypass tot 50 A',
          ],
        },
        {
          name: 'DEYE SUN-8K-SG05LP3-EU Hybride Omvormer 8 kW',
          capacity: '8 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: '€0,00',
          popular: true,
          features: ['Hybride AC/DC', 'UPS functie', 'Smart load'],
          image:
            'https://i.imgur.com/bRFgxVj.png',
          link:
            'https://allegro.pl/oferta/falownik-hybrydowy-deye-sun-8k-sg05lp3-eu-sm2-3f-8kw-3f-nowa-wersja-17857775610?srsltid=AfmBOooB_8m2QRPQuSutZpieF2c2yQZqO08_-iNIpuImT8CDzo8TcaU-',
          details: [
            'Model: SUN-8K-SG05LP3-EU',
            '3-fase hybride omvormer',
            'Ondersteuning voor noodstroom (UPS)',
            'Hoge efficiëntie en stille werking',
          ],
        },
        {
          name: 'DEYE SUN-10K-SG05LP3-EU Hybride Omvormer 10 kW',
          capacity: '10 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: '€0,00',
          popular: true,
          features: ['Hybride', 'UPS', 'Parallel mogelijk'],
          image:
            'https://i.imgur.com/bRFgxVj.png',
          link:
            'https://allegro.pl/oferta/falownik-hybrydowy-deye-10-kw-sun-10k-sg05lp3-eu-3fazowy-niskonapieciowy-15136856317?srsltid=AfmBOoq53mFWi3xfn2v7kp5owTI9FING0TSGumx0Og0kg01ALOYo0zxT',
          details: [
            'Model: SUN-10K-SG05LP3-EU',
            '3-fase hybride omvormer',
            'Noodstroomondersteuning (UPS)',
            'Hoge efficiëntie en brede compatibiliteit',
          ],
        },
        {
          name: 'DEYE SUN-15K-SG05LP3-EU Hybride Omvormer 15 kW',
          capacity: '15 kW',
          power: 'Driefasig',
          warranty: '12 jaar',
          price: '€0,00',
          popular: true,
          features: ['Hybride', 'UPS', 'Smart load'],
          image:
            'https://i.imgur.com/8K16zWv.png',
          link:
            'https://allegro.pl/oferta/falownik-hybrydowy-inwerter-deye-sun-15k-sg05lp3-eu-sm2-15-kw-17265161801',
          details: [
            'Model: SUN-15K-SG05LP3-EU',
            '3-fase hybride omvormer',
            'Ondersteuning voor noodstroom (UPS)',
            'Hoge prestaties en betrouwbaarheid',
          ],
        },
      ],
    },
    {
      category: 'Accessoires & Installatie (Diensten)',
      icon: BoxIcon,
      products: [
        {
          name: 'Kabelset 50 mm² (accu-verbinding M8) — 70 cm',
          capacity: '50 mm²',
          power: '—',
          warranty: 'Werkgarantie',
          price: '€0,00',
          popular: true,
          features: ['Doorsnede 50 mm²', 'M8 eindhuls', 'Flexibele kabel'],
          image:
            'https://i.imgur.com/fqygAJE.png',
          link:
            'https://allegro.pl/oferta/przewod-kabel-linka-50mm2-zestaw-do-laczenia-akumulatorow-m8-2x150cm-2x1-5m-17828507695?context=29e15a33b4475cc1652b795687aa50cdc503e6506b895d61c799a44fee47bee1467aa922c1967382385023aa18283a03f80fbf11ba7348592310a563130eee0e8f38c044e092ce6e69f03bddd05d488e29cd5b376e028a793d9926ac79e48f9ce5333eb96db596152ca3eaad29f23fdc20240bc2b78d361f091015e19ac23f4e63be85e0b15aa699bc9146b07f38165e&sellerHasChanged=false&fromVariant=17828501871',
          details: [
            'Lengte: 70 cm',
            'Toepassing: verbinden van accu’s',
            'Eindhuls: M8',
            'Materiaal: koper, flexibele kabel',
          ],
        },
        {
          name: 'Kabelset 50 mm² (accu-verbinding M8) — 150 cm',
          capacity: '50 mm²',
          power: '—',
          warranty: 'Werkgarantie',
          price: '€0,00',
          popular: true,
          features: ['Doorsnede 50 mm²', 'M8 eindhuls', 'Flexibele kabel'],
          image:
            'https://i.imgur.com/fqygAJE.png',
          details: [
            'Lengte: 150 cm',
            'Toepassing: verbinden van accu’s',
            'Eindhuls: M8',
            'Materiaal: koper, flexibele kabel',
          ],
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

            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.category === 'Energieopslag (Diensten)'
              ? 'lg:grid-cols-2 justify-items-center lg:max-w-4xl mx-auto'
              : category.category === 'Inverters (Diensten)'
              ? 'lg:grid-cols-3 justify-items-center lg:max-w-6xl mx-auto [&>div:nth-child(4)]:lg:col-start-1 [&>div:nth-child(5)]:lg:col-start-3'
              : category.category === 'Accessoires & Installatie (Diensten)'
              ? 'lg:grid-cols-2 justify-items-center lg:max-w-4xl mx-auto'
              : 'lg:grid-cols-3'} gap-6 md:gap-8`}>
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
                      className={`w-full h-full ${(product.popular || category.category === 'Inverters (Diensten)') ? 'object-contain' : 'object-cover'} bg-transparent`}
                    />
                    {!(product.popular || category.category === 'Inverters (Diensten)') && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    )}

                    {/* Popular badge */}
                    {product.popular && category.category === 'Energieopslag (Diensten)' && (
                      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
                        <div className="bg-primary text-white px-3 py-1 rounded-full font-semibold text-xs shadow-md">
                          {product.badgeText ?? 'Meest gekocht'}
                        </div>
                        {product.extraBadge && (
                          <div className="bg-primary text-white px-3 py-1 rounded-full font-semibold text-xs shadow-md">
                            {product.extraBadge}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Capacity pill */}
                    {!(product.popular || category.category === 'Inverters (Diensten)') && (
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
                    <p className="text-center text-xs text-gray-500">Levering + installatie-informatie binnen 7–14 werkdagen</p>
                  </div>
                </div>
              ))}
              {category.category === 'Inverters (Diensten)' && (
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-primary/30 p-8 lg:col-start-2 lg:row-start-2">
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Binnenkort</span>
                  {/* Soft background */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-secondary/5 to-primary/5"></div>
                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <ZapIcon size={28} className="text-primary animate-pulse" />
                    </div>
                    <h3 className="text-secondary font-bold text-xl">Binnenkort nieuw product</h3>
                    <p className="text-gray-600 text-sm">Blijf op de hoogte — we werken aan ons aanbod.</p>
                    <div className="pt-2">
                      <Link to="/contact">
                        <Button variant="outline" size="sm">Houd mij op de hoogte</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
      </section>)}

      {/* Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={closeDetails}>
          <div role="dialog" aria-modal="true" className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] p-0 overflow-hidden relative flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Always-visible close button */}
            <button
              aria-label="Sluiten"
              onClick={closeDetails}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow z-10"
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
                <img src={detailsProduct.image} alt={detailsProduct?.name} className="h-32 md:h-40 object-contain" />
              </div>
            )}

            {/* Badges */}
            <div className="px-6 pt-4 flex flex-wrap gap-2">
              {detailsProduct?.popular && detailsProduct?.badgeEnabled && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{detailsProduct?.badgeText ?? 'Meest gekocht'}</span>
              )}
              {detailsProduct?.popular && detailsProduct?.badgeEnabled && detailsProduct?.extraBadge && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{detailsProduct.extraBadge}</span>
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
            <div className="flex-1 px-6 py-4 overflow-y-auto pr-2">
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
            <div className="px-6 pb-6 flex justify-end">
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