import { useEffect, useState } from "react";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

const SearchInput = ({ placeholders, searchValue, setSearchValue }) => {
  const [isFoucsed, setIsFocused] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    if (!searchValue) {
      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [searchValue, placeholders.length]);

  return (
    <div className="relative w-full mb-4 border border-gray-600 rounded-lg">
      <input
        type="text"
        value={searchValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full py-2 focus:border-red-600 rounded-lg border border-transparent outline-none pr-3 pl-12"
      />
      {!searchValue && !isFoucsed && (
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPlaceholder}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 block"
            >
              {placeholders[currentPlaceholder]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
