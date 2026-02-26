import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Code2, Lock } from "lucide-react";
import { advancedSkillTree } from "../../constants/achievements/data.jsx";

function buildTree(nodes) {
  const childrenMap = {};
  const levels = {};
  const depthMap = {};

  nodes.forEach((node) => {
    if (!childrenMap[node.parent]) {
      childrenMap[node.parent] = [];
    }
    childrenMap[node.parent].push(node);
  });

  const root = nodes.find((n) => !n.parent);

  function assignDepth(node, depth = 0) {
    depthMap[node.id] = depth;
    if (!levels[depth]) levels[depth] = [];
    levels[depth].push(node);

    const children = childrenMap[node.id] || [];
    children.forEach((child) => assignDepth(child, depth + 1));
  }

  assignDepth(root);

  return { levels, childrenMap, depthMap };
}

export default function SkillTree() {
  const [expanded, setExpanded] = useState([]);

  const { levels, childrenMap, depthMap } = useMemo(
    () => buildTree(advancedSkillTree),
    []
  );

  const LEVEL_HEIGHT = 200;

  const isVisible = (node) => {
    if (!node.parent) return true;

    const parentNode = advancedSkillTree.find(
      (n) => n.id === node.parent
    );

    if (parentNode && !parentNode.parent) return true;

    return expanded.includes(node.parent);
  };

  const closeDescendants = (id) => {
    const stack = [id];
    const toRemove = [];

    while (stack.length) {
      const current = stack.pop();
      const children = childrenMap[current] || [];

      children.forEach((child) => {
        toRemove.push(child.id);
        stack.push(child.id);
      });
    }

    setExpanded((prev) =>
      prev.filter((x) => !toRemove.includes(x))
    );
  };

  const toggle = (id) => {
    if (expanded.includes(id)) {
      closeDescendants(id);
      setExpanded((prev) =>
        prev.filter((x) => x !== id)
      );
    } else {
      setExpanded((prev) => [...prev, id]);
    }
  };

  const visibleDepths = advancedSkillTree
    .filter(isVisible)
    .map((node) => depthMap[node.id]);

  const maxVisibleDepth =
    visibleDepths.length > 0
      ? Math.max(...visibleDepths)
      : 0;

  const containerHeight =
    (maxVisibleDepth + 1) * LEVEL_HEIGHT + 150;

  return (
    <motion.div
      animate={{ height: containerHeight }}
      transition={{ duration: 0.45 }}
      className="relative w-full  rounded-2xl px-6 sm:px-12 md:px-16 py-6 overflow-hidden"
    >
      {/* Instruction Badge */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-3 right-4 text-[10px] sm:text-xs text-blue-400/80 bg-blue-500/10 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/20"
      >
        Tap a node to expand
      </motion.div>

      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {advancedSkillTree.map((node, i) => {
          if (!node.parent) return null;
          if (!isVisible(node)) return null;

          const parentDepth = depthMap[node.parent];
          const childDepth = depthMap[node.id];

          const parentLevel =
            levels[parentDepth].filter(isVisible);
          const childLevel =
            levels[childDepth].filter(isVisible);

          const parentIndex = parentLevel.findIndex(
            (n) => n.id === node.parent
          );
          const childIndex = childLevel.findIndex(
            (n) => n.id === node.id
          );

          if (parentIndex === -1 || childIndex === -1)
            return null;

          const parentX =
            ((parentIndex + 1) /
              (parentLevel.length + 1)) *
            100;

          const childX =
            ((childIndex + 1) /
              (childLevel.length + 1)) *
            100;

          const parentY =
            parentDepth * LEVEL_HEIGHT + 80;
          const childY =
            childDepth * LEVEL_HEIGHT + 80;

          return (
            <motion.line
              key={i}
              x1={`${parentX}%`}
              y1={parentY}
              x2={`${childX}%`}
              y2={childY}
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
      </svg>

      {/* NODES WITH SMOOTH APPEAR */}
      <AnimatePresence>
        {Object.entries(levels).map(([depth, nodes]) => {
          const visibleNodes =
            nodes.filter(isVisible);

          return visibleNodes.map(
            (node, index) => {
              const total =
                visibleNodes.length;

              const x =
                ((index + 1) /
                  (total + 1)) *
                100;

              const y =
                depth * LEVEL_HEIGHT + 80;

              const hasChildren =
                (childrenMap[node.id] || [])
                  .length > 0;

              return (
                <motion.div
                  key={node.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.9
                  }}
                  transition={{
                    duration: 0.35,
                    delay: depth * 0.05
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}px`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      hasChildren &&
                      toggle(node.id)
                    }
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 cursor-pointer transition-all duration-300
                      ${
                        node.unlocked
                          ? "border-blue-500 bg-linear-to-br from-[#0F1C26] to-[#132735] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                          : "border-gray-700 bg-[#0F1C26]/40 opacity-70"
                      }`}
                  >
                    {node.unlocked ? (
                      node.icon || (
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      )
                    ) : (
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    )}

                    {hasChildren && (
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#0F1C26]" />
                    )}
                  </motion.div>

                  <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-white/90 text-center max-w-25 sm:max-w-32.5 md:max-w-40 leading-snug tracking-wide">
                    {node.label}
                  </span>
                </motion.div>
              );
            }
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}