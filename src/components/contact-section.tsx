import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ContactSectionProps {
  title: string;
}

export function ContactSection({ title }: ContactSectionProps) {
  const contactMethods = [
    {
      name: "Fiverr",
      icon: "simple-icons:fiverr",
      link: "https://www.fiverr.com/fodilfliti150",
      color: "#1DBF73"
    },
    {
      name: "Email",
      icon: "lucide:mail",
      link: "mailto:fodilfliti150@gmail.com",
      color: "#EA4335"
    },
    {
      name: "LinkedIn",
      icon: "simple-icons:linkedin",
      link: "https://www.linkedin.com/in/fodilfliti/",
      color: "#0A66C2"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#24292F]">{title}</h2>
      <Card>
        <CardBody>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contactMethods.map((method) => (
              <Button
                key={method.name}
                as="a"
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                startContent={<Icon icon={method.icon} className="text-xl" />}
                className="w-full sm:w-auto"
                style={{ backgroundColor: method.color, color: "white" }}
              >
                {method.name}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
}