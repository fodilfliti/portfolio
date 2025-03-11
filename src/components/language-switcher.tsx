import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", icon: "flag:gb-4x3" },
    { code: "fr", name: "Français", icon: "flag:fr-4x3" },
    { code: "ar", name: "العربية", icon: "flag:sa-4x3" },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          startContent={
            <Icon
              icon={
                languages.find((l) => l.code === i18n.language)?.icon ||
                "flag:gb-4x3"
              }
            />
          }
        >
          {languages.find((l) => l.code === i18n.language)?.name || "English"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            startContent={<Icon icon={lang.icon} />}
            onPress={() => i18n.changeLanguage(lang.code)}
          >
            {lang.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
