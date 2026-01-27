import { useState } from "react";
import SkillsLayout from "../components/skills/SkillsLayout";
import SkillsHero from "../components/skills/SkillsHero";
import LoadoutToggle from "../components/skills/LoadoutToggle";
import CategorySection from "../components/skills/CategorySection";
import SpotlightModal from "../components/skills/SpotlightModal";
import { CATEGORIES } from "../constants/skills/data.js";
import SkillsFooter from "../components/skills/SkillsFooter";

export default function Skills() {
  const [loadout, setLoadout] = useState(false);
  const [spotlight, setSpotlight] = useState(null);

  return (
    <SkillsLayout >
      <SkillsHero />

      <LoadoutToggle loadout={loadout} setLoadout={setLoadout} />

      <div className="space-y-20">
        {CATEGORIES.map((cat) => (
          <CategorySection
            key={cat.title}
            category={cat}
            loadout={loadout}
            setSpotlight={setSpotlight}
          />
        ))}
      </div>
        <SkillsFooter />
      <SpotlightModal spotlight={spotlight} setSpotlight={setSpotlight} />
    </SkillsLayout>
  );
}
