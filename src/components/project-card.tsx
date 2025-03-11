import React from "react";
import { Card, CardBody, Chip, Link } from "@heroui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden" isHoverable>
      <CardBody className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            {link ? (
              <Link href={link} target="_blank" className="hover:text-blue-600">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chip key={tag} size="sm" variant="flat" color="primary">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}