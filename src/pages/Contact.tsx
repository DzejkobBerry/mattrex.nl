import React, { useState, lazy } from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your request! We will contact you shortly.');
    // In production, this would send data to a backend
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-secondary mb-6">
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
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Contact Information
              </h2>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <PhoneIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <p className="text-gray-600">+31 (0) 20 123 4567</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MailIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-gray-600">info@mattrex.nl</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPinIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Energieweg 123
                      <br />
                      1000 AB Amsterdam
                      <br />
                      Netherlands
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ClockIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">
                      Business Hours
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
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Request a Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours with a customized quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+31 6 12345678" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Installation Address *
                      </label>
                      <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Street, City" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Building *
                      </label>
                      <select name="buildingType" required value={formData.buildingType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Select type</option>
                        <option value="house">House</option>
                        <option value="business">Business</option>
                        <option value="farm">Farm</option>
                        <option value="industrial">Industrial Facility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are you interested in? *
                      </label>
                      <select name="interest" required value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Select option</option>
                        <option value="battery">Battery Storage</option>
                        <option value="inverter">Inverter</option>
                        <option value="solar">Solar Panels</option>
                        <option value="full">Full System</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Do you already have solar panels? *
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input type="radio" name="hasSolar" value="yes" required checked={formData.hasSolar === 'yes'} onChange={handleChange} className="mr-2 text-primary focus:ring-primary" />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="hasSolar" value="no" required checked={formData.hasSolar === 'no'} onChange={handleChange} className="mr-2 text-primary focus:ring-primary" />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell us more about your project..."></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
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
    </main>;
}