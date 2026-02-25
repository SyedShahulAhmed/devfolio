import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LevelHeader from "./LevelHeader";
import { levelFiveSkills } from "../../constants/achievements/data.jsx";

import {
  Sword,
  Brain,
  ShieldCheck,
  Hammer,
  Trophy,
  Lock,
  CheckCircle2,
} from "lucide-react";

const CARD_STYLE =
  "bg-[#0F1C26]/80 backdrop-blur-xl border border-[#3B82F6]/20 rounded-xl";

const iconMap = {
  dsa: Sword,
  mern: Hammer,
  ai: Brain,
  interview: ShieldCheck,
};

/* ===============================
   PROGRESS HUD
================================= */
function MasteryHUD({ tasks }) {
  const unlocked = tasks.filter((t) => t.unlocked).length;
  const total = tasks.length;
  const progress = Math.round((unlocked / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-[#94A3B8] mb-2">
        <span>Progress</span>
        <span>{unlocked}/{total} • {progress}%</span>
      </div>

      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#3B82F6]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function LevelFive() {
  const [activeId, setActiveId] = useState(levelFiveSkills[0].id);

  const activeSkill = levelFiveSkills.find(
    (skill) => skill.id === activeId
  );

  const ActiveIcon = iconMap[activeSkill.icon];

  return (
    <>
      <LevelHeader
        level={5}
        title="Ongoing Mastery"
        subtitle="Skill Tree Interface"
        icon={<Trophy size={22} />}
      />

      <div className={`${CARD_STYLE} p-4 sm:p-6 md:p-8`}>

        {/* ===== RESPONSIVE LAYOUT ===== */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">

          {/* ================= LEFT PANEL ================= */}
          <div className="lg:col-span-1 space-y-4">
            {levelFiveSkills.map((skill) => {
              const Icon = iconMap[skill.icon];
              const isActive = skill.id === activeId;

              return (
                <motion.button
                  key={skill.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveId(skill.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-lg text-left transition-all ${
                    isActive
                      ? "bg-[#3B82F6]/15 border border-[#3B82F6]/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} className="text-[#3B82F6]" />

                  <div>
                    <p className="text-sm font-semibold">
                      {skill.name}
                    </p>
                    <p className="text-xs text-[#94A3B8] mt-1">
                      {skill.subtitle}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="lg:col-span-2 border border-[#3B82F6]/10 rounded-lg p-5 sm:p-6 overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <ActiveIcon size={22} className="text-[#3B82F6]" />
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {activeSkill.name}
                  </h3>
                </div>

                <MasteryHUD tasks={activeSkill.tasks} />

                {/* RESPONSIVE NODE GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                  {activeSkill.tasks.map((task, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.04,
                        duration: 0.25,
                      }}
                      whileHover={{ scale: 1.04 }}
                      className={`flex flex-col items-center justify-center p-5 rounded-lg border transition-all ${
                        task.unlocked
                          ? "bg-[#3B82F6]/10 border-[#3B82F6]/20"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      {task.unlocked ? (
                        <CheckCircle2
                          size={22}
                          className="text-[#3B82F6] mb-3"
                        />
                      ) : (
                        <Lock
                          size={22}
                          className="text-[#64748B] mb-3"
                        />
                      )}

                      <p className="text-xs text-center text-[#CBD5E1] leading-relaxed">
                        {task.name}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </>
  );
}





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LevelHeader from "./LevelHeader";
// import { levelFiveSkills } from "../../constants/achievements/data.jsx";

// import {
//   Sword,
//   Brain,
//   ShieldCheck,
//   Hammer,
//   Trophy,
//   Lock,
//   CheckCircle2,
// } from "lucide-react";

// const iconMap = {
//   dsa: Sword,
//   mern: Hammer,
//   ai: Brain,
//   interview: ShieldCheck,
// };

// /* ===============================
//    MASTER PROGRESS
// ================================= */
// function MasteryHUD({ tasks }) {
//   const unlocked = tasks.filter((t) => t.unlocked).length;
//   const total = tasks.length;
//   const progress = Math.round((unlocked / total) * 100);

//   return (
//     <div className="mt-6">
//       <div className="flex justify-between text-sm text-[#94A3B8] mb-2">
//         <span>Mastery Progress</span>
//         <span>{progress}%</span>
//       </div>

//       <div className="h-[6px] bg-white/5 rounded-full overflow-hidden">
//         <motion.div
//           className="h-full bg-[#3B82F6]"
//           initial={{ width: 0 }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.6 }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function LevelFive() {
//   const [activeId, setActiveId] = useState(levelFiveSkills[0].id);

//   const activeSkill = levelFiveSkills.find(
//     (skill) => skill.id === activeId
//   );

//   const ActiveIcon = iconMap[activeSkill.icon];

//   return (
//     <>
//       <LevelHeader
//         level={5}
//         title="Ongoing Mastery"
//         subtitle="Progression Path Interface"
//         icon={<Trophy size={22} />}
//       />

//       <div className="bg-[#0F1C26]/85 border border-[#3B82F6]/20 rounded-2xl p-6 md:p-8 space-y-8">

//         {/* Skill Selector */}
//         <div className="flex flex-wrap gap-3">
//           {levelFiveSkills.map((skill) => {
//             const Icon = iconMap[skill.icon];
//             const isActive = skill.id === activeId;

//             return (
//               <button
//                 key={skill.id}
//                 onClick={() => setActiveId(skill.id)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${
//                   isActive
//                     ? "bg-[#3B82F6]/15 border-[#3B82F6]/40"
//                     : "bg-white/5 border-white/10"
//                 }`}
//               >
//                 <Icon size={16} className="text-[#3B82F6]" />
//                 {skill.name}
//               </button>
//             );
//           })}
//         </div>

//         {/* Active Skill Panel */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeSkill.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.35 }}
//           >
//             {/* Title */}
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
//                 <ActiveIcon size={22} className="text-[#3B82F6]" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">
//                   {activeSkill.name}
//                 </h3>
//                 <p className="text-sm text-[#94A3B8] mt-1">
//                   {activeSkill.subtitle}
//                 </p>
//               </div>
//             </div>

//             <MasteryHUD tasks={activeSkill.tasks} />

//             {/* ===============================
//                 VERTICAL PROGRESSION PATH
//             ================================= */}
//             <div className="relative mt-10 space-y-8">

//               {activeSkill.tasks.map((task, index) => {
//                 const isLast = index === activeSkill.tasks.length - 1;

//                 return (
//                   <div key={index} className="relative flex items-start gap-6">

//                     {/* Vertical Line */}
//                     {!isLast && (
//                       <div className="absolute left-5 top-10 w-[2px] h-full bg-[#3B82F6]/20" />
//                     )}

//                     {/* Icon Circle */}
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center border ${
//                         task.unlocked
//                           ? "bg-[#3B82F6]/20 border-[#3B82F6]"
//                           : "bg-white/5 border-white/10"
//                       }`}
//                     >
//                       {task.unlocked ? (
//                         <CheckCircle2
//                           size={18}
//                           className="text-[#3B82F6]"
//                         />
//                       ) : (
//                         <Lock
//                           size={18}
//                           className="text-[#64748B]"
//                         />
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div>
//                       <p className="text-sm font-medium text-[#CBD5E1]">
//                         {task.name}
//                       </p>
//                       <p className="text-xs text-[#64748B] mt-1">
//                         {task.unlocked
//                           ? "Unlocked"
//                           : "Locked — Complete previous nodes"}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LevelHeader from "./LevelHeader";
// import { levelFiveSkills } from "../../constants/achievements/data.jsx";

// import {
//   Sword,
//   Brain,
//   ShieldCheck,
//   Hammer,
//   Trophy,
//   Lock,
//   CheckCircle2,
// } from "lucide-react";

// const iconMap = {
//   dsa: Sword,
//   mern: Hammer,
//   ai: Brain,
//   interview: ShieldCheck,
// };

// /* ===============================
//    MASTER PROGRESS HUD
// ================================= */
// function MasteryHUD({ tasks }) {
//   const unlocked = tasks.filter((t) => t.unlocked).length;
//   const total = tasks.length;
//   const progress = Math.round((unlocked / total) * 100);

//   return (
//     <div className="mt-6">
//       <div className="flex justify-between text-sm text-[#94A3B8] mb-2">
//         <span>Mastery Progress</span>
//         <span>{unlocked}/{total} • {progress}%</span>
//       </div>

//       <div className="h-[6px] bg-white/5 rounded-full overflow-hidden">
//         <motion.div
//           className="h-full bg-[#3B82F6]"
//           initial={{ width: 0 }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.6 }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function LevelFive() {
//   const [activeId, setActiveId] = useState(levelFiveSkills[0].id);

//   const activeSkill = levelFiveSkills.find(
//     (skill) => skill.id === activeId
//   );

//   const ActiveIcon = iconMap[activeSkill.icon];

//   return (
//     <>
//       <LevelHeader
//         level={5}
//         title="Ongoing Mastery"
//         subtitle="Advanced Skill Tree Interface"
//         icon={<Trophy size={22} />}
//       />

//       <div className="bg-[#0F1C26]/85 backdrop-blur-xl border border-[#3B82F6]/20 rounded-2xl p-6 md:p-8 space-y-8">

//         {/* ================= CATEGORY STRIP ================= */}
//         <div className="flex flex-wrap gap-3">
//           {levelFiveSkills.map((skill) => {
//             const Icon = iconMap[skill.icon];
//             const isActive = skill.id === activeId;

//             return (
//               <motion.button
//                 key={skill.id}
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 onClick={() => setActiveId(skill.id)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition ${
//                   isActive
//                     ? "bg-[#3B82F6]/15 border-[#3B82F6]/40"
//                     : "bg-white/5 border-white/10 hover:bg-white/10"
//                 }`}
//               >
//                 <Icon size={16} className="text-[#3B82F6]" />
//                 {skill.name}
//               </motion.button>
//             );
//           })}
//         </div>

//         {/* ================= ACTIVE SKILL PANEL ================= */}
//         <div className="border border-[#3B82F6]/10 rounded-xl p-6 md:p-8">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSkill.id}
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -25 }}
//               transition={{ duration: 0.35 }}
//             >
//               {/* Title Section */}
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
//                   <ActiveIcon size={22} className="text-[#3B82F6]" />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold">
//                     {activeSkill.name}
//                   </h3>
//                   <p className="text-sm text-[#94A3B8] mt-1">
//                     {activeSkill.subtitle}
//                   </p>
//                 </div>
//               </div>

//               <MasteryHUD tasks={activeSkill.tasks} />

//               {/* NODE GRID */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
//                 {activeSkill.tasks.map((task, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{
//                       delay: i * 0.05,
//                       duration: 0.25,
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                     className={`p-5 rounded-lg border transition-all ${
//                       task.unlocked
//                         ? "bg-[#3B82F6]/10 border-[#3B82F6]/20"
//                         : "bg-white/5 border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-center gap-3 mb-3">
//                       {task.unlocked ? (
//                         <CheckCircle2
//                           size={20}
//                           className="text-[#3B82F6]"
//                         />
//                       ) : (
//                         <Lock
//                           size={20}
//                           className="text-[#64748B]"
//                         />
//                       )}
//                       <span className="text-sm font-medium text-[#CBD5E1]">
//                         {task.name}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>

//         </div>
//       </div>
//     </>
//   );
// }