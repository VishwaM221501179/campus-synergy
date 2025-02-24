
import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react";

export const EventCard = ({ title, date, location, attendees, image }) => {
  return (
    <div className="card event-card">
      <div className="event-image">
        <img src={image} alt={title} />
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <div className="event-details">
          <div className="event-detail">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="event-detail">
            <MapPinIcon className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="event-detail">
            <UserIcon className="h-4 w-4" />
            <span>{attendees} attending</span>
          </div>
        </div>
      </div>
    </div>
  );
};
