
import { BookIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  title: string;
  type: string;
  description: string;
  tags: string[];
}

export const ResourceCard = ({ title, type, description, tags }: ResourceCardProps) => {
  return (
    <Card className="p-4 h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BookIcon className="h-5 w-5 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {type}
          </Badge>
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
