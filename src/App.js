import Heading from "./Heading";
import City from "./City";
import { useState } from "react";
const initialCities = [
  {
    id: 1,
    image:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    title: "Best Of Paris In 7 Days Tour",
    price: "$2599",
    description:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and   extravagant Palace of Versailles. You'll also enjoy guided    neighborhood walks through the city historic heart as well as    quieter moments to slow down and savor the city intimate cafés    colorful markets and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    image:
      "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",

    title: "Best Of Ireland In 14 Days Tour",
    price: "$3599",
    description:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: 3,
    image:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    title: "Best Of Salzburg & Vienna In 8 Days Tour",
    price: "$2599",
    description:
      "Let's go where classical music, towering castles, and the-hills-are-alive ,  scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age.   Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich,   Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna —  with cozy villages and alpine vistas all along the way. Join us for the Best of Munich,    Salzburg & Vienna in 8 Days!",
  },
  {
    id: 4,
    image:
      "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",

    title: "Best Of Rome In 7 Days Tour",
    price: "$2899",
    description:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
];

function App() {
  const [cities, setCities] = useState(initialCities);
  const handleRemove = (id) => {
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  };
  return (
    <>
      <Heading />
      {cities.map((city) => {
        return (
          <City
            key={city.id}
            id={city.id}
            image={city.image}
            title={city.title}
            price={city.price}
            description={city.description}
            remover={handleRemove}
          />
        );
      })}
    </>
  );
}

export default App;
