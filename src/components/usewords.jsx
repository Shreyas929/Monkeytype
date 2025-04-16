import { faker } from "@faker-js/faker";
import { useCallback, useState, useEffect } from "react";

const generateWords = (count) => {
  return faker.word.words(count).toLowerCase(); // Faker v8+
};

const useWords = (count) => {
  const [words, setWords] = useState("");

  useEffect(() => {
    setWords(generateWords(count)); // Generate words when mounted
  }, [count]);

  const updateWords = useCallback(() => {
    console.log("Generating new words...");
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};

export default useWords;
