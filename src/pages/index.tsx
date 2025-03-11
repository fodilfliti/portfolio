import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  Button,
} from "@heroui/react";
import React from "react";

import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/project-card";
import { TechStack } from "../components/tech-stack";
import { ContactSection } from "../components/contact-section";
import { LanguageSwitcher } from "../components/language-switcher";
import "../i18n";
export default function IndexPage() {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const projects = [
    {
      title: "Lightness - Your personal spiritual guide",
      description:
        "LightNess was born from a profound vision: to create a space where spirituality and technology meet harmoniously to accompany you on your personal journey.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/998701f8f9c504897220f8bec16114d8-1741655221841/Screenshot%202025-03-03%20100355.png",
      tags: ["Flutter", "Firebase", "UI/UX"],
      link: "https://www.fiverr.com/users/fodilfliti150/portfolio/NjdjZjhkOTZiZWRmZjIwMDAxZTk2Njk1",
    },
    {
      title: "Smart digital wallet",
      description: "smart digital wallet application in UK",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/4b9d8471e5c770dadcc65fcb471d10b2-1700922197802/04AFB3C5-ECAD-4B93-AAF6-D767E9E44BC3.png",
      tags: ["Flutter", "REST API", "SQLite"],
      link: "https://www.fiverr.com/users/fodilfliti150/portfolio/NjU2MjA0ZmJiNTQ2MmUwMDAxMmI2ZjFh",
    },
    {
      title: "Fiamane app managing shipments",
      description:
        "Fiamane, the number 1 application for managing your shipments between Europe and Africa.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/a927f33cc7193a533d53703f7e65152c-1700921421901/5401581.png",
      tags: ["Flutter", "REST API", "CROSS PLATFORM"],
      link: "https://www.fiverr.com/users/fodilfliti150/portfolio/NjU2MWY5NDlmZWRlYjUwMDAxOTVjOTg2",
    },
    {
      title: "Coordate - Task Management",
      description:
        "Introducing the ultimate project management and collaboration tool on the Play Store! Our app is designed to make your project management and teamwork a breeze. Whether you're a project manager, a team member, or a collaborator, we've got you covered with a wide range of powerful features.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/acfba94df4526109e8fa932f58c18cdf-1700922755458/5401581.png",
      tags: ["Flutter", "REST API", "Provider", "SQLITE"],
      link: "https://www.fiverr.com/users/fodilfliti150/portfolio/NjU2MjA2NTFiNTk1YWUwMDAxYzRhMzY1",
    },
    {
      title: "Distractmap",
      description:
        "A system for solving societal problems of citizens and assisting employees using the principle of geographic information systems - mobile application",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/4d509fdd5efeed5824b1724baef0063f-1700923378175/5401581.png",
      tags: ["Flutter", "WebSocket", "REST API", "Provider"],
      link: "https://www.fiverr.com/users/fodilfliti150/portfolio/NjU2MjA4ODJmZWRlYjUwMDAxOTVjZmFl",
    },
    {
      title: "ForInnov - Management of your educational activities",
      description:
        "ForInnov is the SaaS solution designed to transform the management of your educational activities. Whether you are an independent trainer or an institution, our platform allows you to efficiently manage your students, your groups, your profits, and your invoices, all with unparalleled simplicity.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/23a57ccf106328cd4d23bd036c16742f-1741658491246/Capture1.PNG",
      tags: ["Flutter", "REST API", "SQLITE", "Provider"],
      link: "https://www.fiverr.com/users/fodilfliti150/portfolio/NjdjZjk5ZTA4NDY4ZTkwMDAxODIzZjYz",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white to-blue-50 ${
        i18n.language === "ar" ? "font-arabic" : ""
      }`}
    >
      <Navbar className="bg-white/70 backdrop-blur-md">
        <NavbarBrand>
          <Icon icon="gravity-ui:apps" className="text-2xl text-[#0468D7]" />
          <p className="font-bold text-inherit">Fodil Fliti</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#about">{t("nav.about")}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#projects">{t("nav.projects")}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contact">{t("nav.contact")}</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-4">
          <NavbarItem>
            <LanguageSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button
              as="a"
              color="primary"
              href="https://www.fiverr.com/fodilfliti150"
              target="_blank"
              variant="flat"
            >
              {t("nav.hireMe")}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="container mx-auto px-6 py-16 max-w-7xl">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#24292F]">
              {t("hero.title")}
              <br />
              {t("hero.subtitle")}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {t("hero.description")}
            </p>
            <div className="flex gap-4">
              <Button
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
                as="a"
                href="#projects"
              >
                {t("hero.viewProjects")}
              </Button>
              <Button variant="bordered" size="lg" as="a" href="#contact">
                {t("hero.contactMe")}
              </Button>
            </div>
          </div>
          <div className="relative border-4 border-blue-500 rounded-full p-2">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/1f2f1cc5a1c2c7b0fd75f3792f424454-1661217693095/e7ecbaef-08e7-4841-b4d0-5c8380638807.jpg"
              alt="Fodil Fliti"
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
        </section>

        <TechStack title={t("sections.techStack")} />

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#24292F]">
            {t("sections.featuredProjects")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <ContactSection title={t("sections.contactMe")} />
      </main>

      <footer className="bg-[#24292F] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>{t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
}
