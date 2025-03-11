import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react";

interface TechStackProps {
  title: string;
}

export function TechStack({ title }: TechStackProps) {
  const technologies = [
    { name: "Flutter", icon: "simple-icons:flutter", color: "#02569B" },
    { name: "Dart", icon: "simple-icons:dart", color: "#0175C2" },
    { name: "Firebase", icon: "simple-icons:firebase", color: "#FFCA28" },
    { name: "REST API", icon: "material-symbols:api", color: "#24292F" }, // Updated icon
    { name: "SQLite", icon: "simple-icons:sqlite", color: "#003B57" },
    { name: "Git", icon: "simple-icons:git", color: "#F05032" },
    { name: "GetX", icon: "mdi:state-machine", color: "#00B4AB" },
    { name: "Provider", icon: "lucide:box", color: "#4CAF50" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#24292F]">
        {title}
      </h2>
      <Card>
        <CardBody>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50">
                  <Icon
                    icon={tech.icon}
                    className="text-2xl"
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
