const VOWELS = ["a", "e", "i", "o", "u"];

const FORBIDDEN_STRINGS = ["ab", "cd", "pq", "xy"];

export const atLeastThreeVowels = (str: string): boolean => {
    let numberOfVowels = 0;
    [...str].forEach((char) => VOWELS.includes(char) && numberOfVowels++);

    return numberOfVowels >= 3;
};

export const doubleLetters = (str: string): boolean => {
    let hasDouble = false;
    [...str].forEach((char, index) => {
        if (index > 0 && char === str.charAt(index - 1)) {
            hasDouble = true;
        }
    });
    return hasDouble;
};

export const containsForbiddenStrings = (str: string): boolean => {
    return FORBIDDEN_STRINGS.some((forbiddenStr) => str.includes(forbiddenStr));
};

export const isNiceStr = (str: string): boolean => {
    return (
        atLeastThreeVowels(str) &&
    doubleLetters(str) &&
    !containsForbiddenStrings(str)
    );
};

export const isPairAppearTwice = (str: string): boolean => {
    for (let i = 0; i < str.length; i++) {
        if (str.length >= i + 1) {
            const pair = `${str[i]}${str[i + 1]}`;
            if (str.slice(i + 2).includes(pair)) {
                return true;
            }
        }
    }
    return false;
};


export const containsMirrorLetters = (str: string): boolean => {
    for (let i = 0; i < str.length; i++) {
        if (str.length >= i + 2) {
            const letter = str[i];
            const mirror = str[i + 2];
            if (letter === mirror) {
                return true;
            }
        }
    }
    return false;
};

export const isNiceStrV2 = (str: string): boolean => {
    return isPairAppearTwice(str) && containsMirrorLetters(str);
};