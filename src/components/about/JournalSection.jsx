import ChapterCard from "./ChapterCard";
import FooterInfo from "./FooterInfo";
import { chapters } from "../../constants/about/data.js";

const JournalSection = () => (
  <div className="space-y-10">
    {chapters.map((c, i) => (
      <ChapterCard key={c.title} chapter={c} index={i} />
    ))}
    <FooterInfo />
  </div>
);

export default JournalSection;
