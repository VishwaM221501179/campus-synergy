
import { BookIcon } from "lucide-react";

export const ResourceCard = ({ title, type, description, tags }) => {
  return (
    <div className="card resource-card">
      <div className="resource-header">
        <div className="resource-icon">
          <BookIcon className="h-5 w-5" />
        </div>
        <span className="resource-type">{type}</span>
      </div>
      <h3 className="resource-title">{title}</h3>
      <p className="resource-description">{description}</p>
      <div className="resource-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
