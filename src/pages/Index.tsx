
import { NavigationBar } from "@/components/NavigationBar";
import { EventCard } from "@/components/EventCard";
import { ResourceCard } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const events = [
    {
      title: "Tech Innovation Workshop",
      date: "March 15, 2024",
      location: "Innovation Lab",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    },
    {
      title: "Study Group: Data Structures",
      date: "March 16, 2024",
      location: "Library Room 204",
      attendees: 12,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
    {
      title: "Career Development Seminar",
      date: "March 18, 2024",
      location: "Main Auditorium",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    },
  ];

  const resources = [
    {
      title: "Academic Writing Guide",
      type: "Guide",
      description: "Comprehensive guide for academic writing and research papers.",
      tags: ["Academic", "Writing", "Research"],
    },
    {
      title: "Programming Fundamentals",
      type: "Course",
      description: "Introduction to programming concepts and best practices.",
      tags: ["Programming", "CS", "Beginner"],
    },
    {
      title: "Study Group Formation",
      type: "Template",
      description: "Templates and guidelines for forming effective study groups.",
      tags: ["Study", "Collaboration", "Groups"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark animate-fade-up">
            Your Campus Community Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Connect with peers, discover events, and access resources all in one place.
          </p>
          <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary-light">
              Join Community
            </Button>
            <Button size="lg" variant="outline">
              Explore Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Discover and join exciting campus activities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
            <p className="text-gray-600">Access study materials and guides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and unlock all the features CampusConnect has to offer.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-light">
            Create Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
