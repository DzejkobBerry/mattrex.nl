import React, { useState } from 'react';
import { Container } from '../components/shared/Container';
import { XIcon } from 'lucide-react';
export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const projects = [{
    id: 1,
    title: 'Residential Solar + Storage',
    category: 'residential',
    location: 'Amsterdam',
    capacity: '15 kWh',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    description: 'Complete home energy solution with 15 kWh battery storage and 8 kW solar inverter.'
  }, {
    id: 2,
    title: 'Commercial Office Building',
    category: 'commercial',
    location: 'Rotterdam',
    capacity: '50 kWh',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
    description: 'Large-scale commercial installation reducing energy costs by 70%.'
  }, {
    id: 3,
    title: 'Farm Energy Independence',
    category: 'industrial',
    location: 'Utrecht',
    capacity: '100 kWh',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
    description: 'Industrial-scale system providing complete energy independence for agricultural operations.'
  }, {
    id: 4,
    title: 'Modern Villa Installation',
    category: 'residential',
    location: 'The Hague',
    capacity: '20 kWh',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    description: 'Premium residential system with smart home integration and backup power.'
  }, {
    id: 5,
    title: 'Retail Store Chain',
    category: 'commercial',
    location: 'Eindhoven',
    capacity: '75 kWh',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: 'Multi-location commercial deployment with centralized monitoring.'
  }, {
    id: 6,
    title: 'Manufacturing Facility',
    category: 'industrial',
    location: 'Groningen',
    capacity: '200 kWh',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    description: 'Large industrial battery system supporting 24/7 manufacturing operations.'
  }];
  const categories = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'residential',
    label: 'Residential'
  }, {
    id: 'commercial',
    label: 'Commercial'
  }, {
    id: 'industrial',
    label: 'Industrial'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  return <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our portfolio of successful energy storage installations
              across the Netherlands.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <button key={category.id} onClick={() => setFilter(category.id)} className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === category.id ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category.label}
              </button>)}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <div key={project.id} onClick={() => setSelectedProject(project.id)} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-secondary">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{project.location}</span>
                    <span className="font-semibold text-primary">
                      {project.capacity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>)}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10" aria-label="Close">
                <XIcon size={24} className="text-gray-700" />
              </button>

              {projects.find(p => p.id === selectedProject) && <>
                  <img src={projects.find(p => p.id === selectedProject)!.image} alt={projects.find(p => p.id === selectedProject)!.title} className="w-full h-64 sm:h-80 md:h-96 object-cover" />

                  <div className="p-8 space-y-4">
                    <h2 className="text-3xl font-bold text-secondary">
                      {projects.find(p => p.id === selectedProject)!.title}
                    </h2>

                    <div className="flex items-center space-x-6 text-gray-600">
                      <span className="flex items-center">
                        <span className="font-semibold mr-2">Location:</span>
                        {projects.find(p => p.id === selectedProject)!.location}
                      </span>
                      <span className="flex items-center">
                        <span className="font-semibold mr-2">Capacity:</span>
                        {projects.find(p => p.id === selectedProject)!.capacity}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {projects.find(p => p.id === selectedProject)!.description}
                    </p>
                  </div>
                </>}
            </div>
          </div>
        </div>}
    </main>;
}