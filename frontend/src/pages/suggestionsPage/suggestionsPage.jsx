import { useState } from "react";
import ContentCard from "../../components/contentCard/contentCard";
import ContentFormatFilter from "../../components/contentFormatFilter/contentFormatFilter";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./suggestionsPage.module.css";
const mockData = [
  {
    id: "1",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@cylovesfrogs/video/7083620430933970222",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "haven\u2019t been able to check-in with y\u2019all in a hot minute \ud83e\udd7a hope you\u2019re all well \ud83d\udc95 #coffeewithcy #coffee #psl #pumpkinspice #cylovesfrogs #checkin",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@cylovesfrogs/video/7083620430933970222",
  },
  {
    id: "2",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@cc.campbell/video/7083220201453489414",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Reply to @ochaplant some Pourover coffee tips! #coffeetok #pourovercoffee #coffee",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript: "one-liner idea for the script",
    visualTips: "one-liner about visuals",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@cc.campbell/video/7083220201453489414",
  },
  {
    id: "3",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@annie_jordan/video/7084896024384392449",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Latte art from @flat_white_short_film #fyp #latteart #shortfilm #flatwhite",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript: "one-liner idea for the script",
    visualTips: "one-liner about visuals",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@annie_jordan/video/7084896024384392449",
  },
  {
    id: "4",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@alirosebair/video/7082866751234510122",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "\u2615\ufe0f\ud83d\udc99\ud83c\udfd4 #coffee #mountains #alaska #asmr #peaceful #foryou",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@alirosebair/video/7082866751234510122",
  },
  {
    id: "5",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@charlottesmythee/video/7080701370407505198",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Afternoon pick me up #coffeetiktok #coffeeasmr #coffeeaesthetic",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl:
      "https://www.tiktok.com/@charlottesmythee/video/7080701370407505198",
  },
  {
    id: "6",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@tannercolson/video/7084619271766019370",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "The Aerocano #coffee #specialtycoffee #coffeetok #coffeetiktok",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@tannercolson/video/7084619271766019370",
  },
  {
    id: "7",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@annieegaangg3/video/7085423009925811502",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription: "#coffee #fyp #asmr #newcup #trending",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@annieegaangg3/video/7085423009925811502",
  },
  {
    id: "8",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@tipsibar/video/7078597514928082181",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "POV: you just ordered 4 coffees for your coworkers \ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb #pov #coffeecarslovenia #barista #latteart",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "POV: you just ordered 4 coffees for your coworkers \ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb #pov #coffeecarslovenia #barista #latteart",
    visualTips:
      "Showcase the process of making 4 different types of coffee, focusing on the latte art",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@tipsibar/video/7078597514928082181",
  },
  {
    id: "9",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@alexis.frost/video/7085363378901912878",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Shaken espresso is my fave \u2764\ufe0f #mrsfrost #mrsbloom #starbucks #starbucksdrinks #coffee #espresso #foodie #foodtok",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@alexis.frost/video/7085363378901912878",
  },
  {
    id: "10",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@themacrobarista/video/7085518748462927147",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Starbucks Caramel Machiatto DIY - 45 Calories / 3 grams of sugar #starbucks #coffee #healthyrecipes #caramel #dairyfree #coffeetok",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl:
      "https://www.tiktok.com/@themacrobarista/video/7085518748462927147",
  },
  {
    id: "11",
    trend: "#coffee",
    type: "tiktok",
    image:
      "https://www.tiktok.com/@goldenhillsespressobar/video/7078492851331583278",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "what do you think? might mess around with this one.. theres potential.. \ud83d\udda4\u2615\ufe0f #toastedvanilla#oatmilk#coffee#coffeetiktok#coffeetok#coffeetime#clermont#fl#orlando#centralfl#centralflorida#smallbusiness#shopsmall#local#latte#shakenespresso#icedespresso#espresso#coffeelover#brownsugar#caramel#toastedmarshmallow#coffeerecipe#pistachio#barista#cafe#icedcoffee#icedlatte#fyp#foryou#viral#foryoupage#monin#coffeebar",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Might just mess around with this one, there's potential... Toasted Vanilla, Oat Milk, Coffee, anyone?",
    visualTips:
      "Showcase the process of making the coffee, focusing on the ingredients and the final delicious result.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl:
      "https://www.tiktok.com/@goldenhillsespressobar/video/7078492851331583278",
  },
  {
    id: "12",
    trend: "#coffee",
    type: "tiktok",
    image:
      "https://www.tiktok.com/@cookingwithjanica/video/7079798341550247210",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Reply to @jnetters07 This one is superior! #BridgertonScandal #coffee #coffeeaddict #coffeetiktok #coldbrew #cerealmilk #goldengrahams #yummy #breakfast",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl:
      "https://www.tiktok.com/@cookingwithjanica/video/7079798341550247210",
  },
  {
    id: "13",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@livlaskowski/video/7086904838117657902",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "get the pourover \ud83d\udccc spectrum coffees (Bushwick) #coffeenyc #bushwick #coffeeroaster",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript:
      "Start with a product problem, end with a visual solution.",
    visualTips: "Use close-ups, good lighting, and clean transitions.",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@livlaskowski/video/7086904838117657902",
  },
  {
    id: "14",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@deathwishcoffee/video/7079112191789567275",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "Coffee hacks are the best hacks #frenchpress #deathwishcoffee #tiptok",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript: "one-liner idea for the script",
    visualTips: "one-liner about visuals",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl:
      "https://www.tiktok.com/@deathwishcoffee/video/7079112191789567275",
  },
  {
    id: "15",
    trend: "#coffee",
    type: "tiktok",
    image: "https://www.tiktok.com/@thenitrobar/video/7085484972408130862",
    hashtags: ["#coffee"],
    engagement: "High",
    difficulty: "Medium",
    fullDescription:
      "can\u2019t imagine a Monday without caffeine \ud83e\udd72 #coffeeorder #coffeetok #espressoshots #caramelcoffee #icedlatte #oatmilklatte #caffeineaddict #coffeeshop #coffeetime #matchalatte #mondaycoffee #caffeine #matchamondays #coffeeshopaesthetic #coffeeobsessed #icedcoffee",
    whyItWorks:
      "People love practical or visually pleasing content, especially around popular topics.",
    suggestedScript: "one-liner idea for the script",
    visualTips: "one-liner about visuals",
    bestPractices: [
      "Use trending audio",
      "Keep video under 30s",
      "Include a CTA at the end",
    ],
    videoUrl: "https://www.tiktok.com/@thenitrobar/video/7085484972408130862",
  },
];

export default function SuggestionsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData =
    activeFilter === "all"
      ? mockData
      : mockData.filter((item) => item.type === activeFilter);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionCenter}>
            <h2 className={styles.title}>
              Create Engaging Content for Your Business
            </h2>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Content Suggestions</h3>
              <ContentFormatFilter
                active={activeFilter}
                setActive={setActiveFilter}
              />
            </div>

            <ContentCard suggestions={filteredData} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
