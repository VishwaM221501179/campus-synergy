
import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

export const EventCard = ({ title, date, location, attendees, image }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span>{attendees} attending</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
