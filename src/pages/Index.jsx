
import { NavigationBar } from "@/components/NavigationBar";
import { EventCard } from "@/components/EventCard";
import { ResourceCard } from "@/components/ResourceCard";

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
    <div className="app">
      <NavigationBar />
      
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Your Campus Community Hub</h1>
          <p className="hero-description">
            Connect with peers, discover events, and access resources all in one place.
          </p>
          <div className="hero-buttons">
            <button className="button button-primary">Join Community</button>
            <button className="button button-outline">Explore Resources</button>
          </div>
        </div>
      </section>

      <section id="events" className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-description">Discover and join exciting campus activities</p>
          <div className="grid">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="section section-secondary">
        <div className="container">
          <h2 className="section-title">Learning Resources</h2>
          <p className="section-description">Access study materials and guides</p>
          <div className="grid">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-description">
            Join our community and unlock all the features CampusConnect has to offer.
          </p>
          <button className="button button-primary">Create Account</button>
        </div>
      </section>
    </div>
  );
};

export default Index;
