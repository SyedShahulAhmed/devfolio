const BootHeader = () => {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs text-[#7A9AA5]">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      SYSTEM://BOOT_SEQUENCE
    </div>
  );
};

export default BootHeader;
