import { createFileRoute } from "@tanstack/react-router";

import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brak Kłótni — ebooki o rozmowach, które zbliżają" },
      {
        name: "description",
        content:
          "5 poradników PDF o trudnych rozmowach: z partnerem, w pracy, z dzieckiem i o granicach. Pojedynczo 34,99 zł lub zestaw 5 w 1 za 119,99 zł.",
      },
      { property: "og:title", content: "Brak Kłótni — ebooki o rozmowach, które zbliżają" },
      {
        property: "og:description",
        content:
          "Naucz się rozmawiać tak, żeby Was to zbliżało, a nie dzieliło. 5 praktycznych ebooków w promocji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});
