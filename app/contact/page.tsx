'use client'

import React, { useState } from 'react';
import { Container } from '@/components/shared/Container';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, SendIcon, CheckCircleIcon, XIcon } from 'lucide-react';

export default function ContactPage() {
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
                <h2 className="text-3xl font-bold text-secondary mb-8">Contact Information</h2>

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
                      <h3 className="font-semibold text-secondary mb-1">Werkgebied</h3>
                      <p className="text-gray-600">
                        Wij werken in heel Nederland
                        <br />
                        <span className="text-primary font-medium">Landelijke service en installatie</span>
                        <br />
                        Van Amsterdam tot Maastricht
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
                      <h3 className="font-semibold text-secondary mb-1">Openingstijden</h3>
                      <p className="text-gray-600">
                        Maandag - Vrijdag: 10:00 - 14:00
                        <br />
                        Zaterdag - Zondag: Gesloten
                      </p>
                    </div>
                  </div>
                </Card>

                {/* WhatsApp Button */}
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <a
                    href="https://wa.me/31626976934?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20diensten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 w-full"
                  >
                    <div className="bg-white/20 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp Contact</h3>
                      <p className="text-white/90">
                        Chat direct met ons via WhatsApp
                        <br />
                        <span className="text-sm">+31 626976934</span>
                      </p>
                    </div>
                  </a>
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
                        <label className="block text-sm font-medium text-secondary mb-2">Volledige naam *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">E-mailadres *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Telefoonnummer *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+31 6 12345678"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Installatieadres *</label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Street, City"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Type gebouw *</label>
                        <select
                          name="buildingType"
                          required
                          value={formData.buildingType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Selecteer type</option>
                          <option value="house">Woning</option>
                          <option value="business">Zakelijk</option>
                          <option value="farm">Boerderij</option>
                          <option value="industrial">Industrieel</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Waar bent u in geïnteresseerd? *</label>
                        <select
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Selecteer optie</option>
                          <option value="battery">Energieopslag (batterij)</option>
                          <option value="inverter">Inverter</option>
                          <option value="full">Volledig systeem</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">Heeft u al zonnepanelen? *</label>
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="hasSolar"
                            value="yes"
                            required
                            checked={formData.hasSolar === 'yes'}
                            onChange={handleChange}
                            className="mr-2 text-primary focus:ring-primary"
                          />
                          <span className="text-gray-700">Ja</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="hasSolar"
                            value="no"
                            required
                            checked={formData.hasSolar === 'no'}
                            onChange={handleChange}
                            className="mr-2 text-primary focus:ring-primary"
                          />
                          <span className="text-gray-700">Nee</span>
                        </label>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Let op: wij installeren geen zonnepanelen. Wij leveren en configureren
                      <strong>energieopslag</strong>, <strong>inverters</strong> en technisch toebehoren.
                    </p>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">Additional Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white hover:border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us more about your project..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-secondary font-semibold rounded-xl px-6 py-3 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                    >
                      <SendIcon size={18} />
                      Send Request
                    </Button>
                  </form>
                </Card>
              </div>
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
            onClick={(e) => e.stopPropagation()}
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