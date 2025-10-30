import React, { useState, lazy } from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, SendIcon, CheckCircleIcon, XIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    buildingType: '',
    interest: '',
    hasSolar: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    // In production, this would send data to a backend
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to start your energy transformation? Request a free
              consultation and quote today.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Contact Information
              </h2>

              <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <PhoneIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Telefoon</h3>
                    <p className="text-gray-600">+31 626976934</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MailIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">E-mailadres</h3>
                    <p className="text-gray-600">info@mattrex.nl</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPinIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">
                      Adres
                    </h3>
                    <p className="text-gray-600">
                      Energieweg 123
                      <br />
                      1000 AB Amsterdam
                      <br />
                      Nederland
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ClockIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">
                      Openingstijden
                    </h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 - 18:00
                      <br />
                      Sat: 9:00 - 14:00
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <Card className="relative p-8 rounded-2xl bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-sm border border-gray-200 shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary via-secondary to-primary/60" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MailIcon size={20} />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Vraag een Offerte Aan</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Vul het onderstaande formulier in. Ons team neemt binnen 24 uur
                  contact met u op met een gepersonaliseerde offerte.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Volledige naam *
                      </label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        E-mailadres *
                      </label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Telefoonnummer *
                      </label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+31 6 12345678" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Installatieadres *
                      </label>
                      <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Street, City" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Type gebouw *
                      </label>
                      <select name="buildingType" required value={formData.buildingType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Selecteer type</option>
                        <option value="house">Woning</option>
                        <option value="business">Zakelijk</option>
                        <option value="farm">Boerderij</option>
                        <option value="industrial">Industrieel</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Waar bent u in geïnteresseerd? *
                      </label>
                      <select name="interest" required value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Selecteer optie</option>
                        <option value="battery">Energieopslag (batterij)</option>
                        <option value="inverter">Inverter</option>
                        <option value="full">Volledig systeem</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Heeft u al zonnepanelen? *
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input type="radio" name="hasSolar" value="yes" required checked={formData.hasSolar === 'yes'} onChange={handleChange} className="mr-2 text-primary focus:ring-primary" />
                        <span className="text-gray-700">Ja</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="hasSolar" value="no" required checked={formData.hasSolar === 'no'} onChange={handleChange} className="mr-2 text-primary focus:ring-primary" />
                        <span className="text-gray-700">Nee</span>
                      </label>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Let op: wij installeren geen zonnepanelen. Wij leveren en configureren
                    <strong>energieopslag</strong>, <strong>inverters</strong> en technisch toebehoren.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Additional Details
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell us more about your project..."></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary text-secondary font-semibold rounded-xl px-6 py-3 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                    <SendIcon size={18} />
                    Send Request
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8537715!2d4.8951679!3d52.3675734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e6bb%3A0xb3a175ceffbd0a9f!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="450" style={{
            border: 0
          }} allowFullScreen loading="lazy" title="MATTREX Office Location"></iframe>
          </div>
        </Container>
      </section>
    </main>
    {/* Success Modal */}
    {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md mx-4 rounded-2xl bg-white shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircleIcon size={20} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Bericht verzonden</h3>
              </div>
              <p className="text-gray-700">
                Bedankt! Uw bericht is succesvol verzonden. Een van onze medewerkers
                neemt spoedig contact met u op.
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  Sluiten
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-primary text-secondary font-semibold hover:bg-primary-dark"
                  onClick={() => setIsModalOpen(false)}
                >
                  Oké, bedankt
                </button>
              </div>
              <button
                type="button"
                aria-label="Close"
                className="absolute top-3 right-3 text-gray-500 hover:text-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                <XIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}