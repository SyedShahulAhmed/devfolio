import { useState } from "react";
import { GraduationCap, Code2, Briefcase, Award } from "lucide-react";

import HeroSection from "../components/Achievements/HeroSection";
import Toggle from "../components/Achievements/Toggle";
import LevelHeader from "../components/Achievements/LevelHeader";
import MilestoneCard from "../components/Achievements/MilestoneCard";
import TimelineItem from "../components/Achievements/TimelineItem";
import LevelFive from "../components/Achievements/LevelFive";
import FooterCTA from "../components/Achievements/FooterCTA";

import { milestones, skillTree } from "../constants/achievements/data.jsx";
import StatsSection from "../components/Achievements/StatsSection.jsx";
import SkillTree from "../components/Achievements/SkillTree.jsx";

const CARD_STYLE =
  "bg-[#0F1C26]/60 backdrop-blur-xl  border border-white/10 rounded-lg";

export default function Achievements() {
  const [view, setView] = useState("grid");

  const renderLevel = (level) => {
    const items = milestones.filter((m) => m.level === level);

    if (view === "timeline") {
      return (
        <div className="space-y-8">
          {items.map((m, i) => (
            <TimelineItem
              key={m.title}
              {...m}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((m) => (
          <MilestoneCard key={m.title} {...m} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen font-contact bg-[#06111d] text-[#E5E5E5]">
      <HeroSection />
      <StatsSection />
      <Toggle view={view} setView={setView} />

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-20">
        {/* Level 1 */}
        <LevelHeader
          level={1}
          title="Foundation"
          subtitle="Academic roots"
          icon={<GraduationCap size={22} />}
        />
        {renderLevel(1)}

        {/* Level 2 */}
        <LevelHeader
          level={2}
          title="Skill Development"
          subtitle="Technical growth"
          icon={<Code2 size={22} />}
        />
        {renderLevel(2)}

        {/* ===============================
    SKILL PROGRESSION – CINEMATIC
================================ */}

        <div className="relative rounded-xl p-10  bg-gradient-to-br from-[#0b141c] via-[#0F1C26] to-[#0b141c] border border-white/10">
          {/* Top Engraved Divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[#1e2a36]" />

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#3B82F6] font-medium">
              Skill Progression
            </h3>

            <div className="w-6 h-px bg-[#1e2a36]" />
          </div>

          {/* Skill Tree */}
          <SkillTree skills={skillTree} />
        </div>

        {/* Level 3 */}
        <LevelHeader
          level={3}
          title="Experience"
          subtitle="Real-world impact"
          icon={<Briefcase size={22} />}
        />
        {renderLevel(3)}

        {/* Level 4 */}
        <LevelHeader
          level={4}
          title="Certifications"
          subtitle="Validated expertise"
          icon={<Award size={22} />}
        />
        {renderLevel(4)}

        <LevelFive />
      </div>

      <FooterCTA />
    </div>
  );
}
