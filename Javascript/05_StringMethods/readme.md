# String and String Methods in JavaScript

Strings are a fundamental data type in JavaScript, used to represent and manipulate text. This document covers essential string methods that help in various string operations.

## Table of Contents
- [Basic String Methods](#basic-string-methods)
- [Searching and Matching](#searching-and-matching)
- [Modifying Strings](#modifying-strings)
- [Case Conversion](#case-conversion)
- [Trimming and Padding](#trimming-and-padding)
- [Unicode and Encoding](#unicode-and-encoding)
- [Utility Methods](#utility-methods)

---

## Basic String Methods

1. **`at(index)`**  
   Returns the character at the specified index (supports negative indexing).

2. **`charAt(index)`**  
   Returns the character at the specified index (0-based).

3. **`charCodeAt(index)`**  
   Returns the Unicode value (UTF-16 code) of the character at the given index.

4. **`codePointAt(index)`**  
   Returns the Unicode code point (full UTF-32 value) of the character at the given index.

5. **`concat(str1, str2, ...)`**  
   Combines multiple strings and returns a new concatenated string.

6. **`endsWith(searchString, length?)`**  
   Checks if a string ends with the specified substring.

7. **`includes(searchString, position?)`**  
   Checks if a string contains another substring.

8. **`indexOf(searchValue, fromIndex?)`**  
   Returns the first index of a substring, or `-1` if not found.

9. **`lastIndexOf(searchValue, fromIndex?)`**  
   Returns the last index of a substring, or `-1` if not found.

---

## Searching and Matching

10. **`localeCompare(compareString)`**  
    Compares two strings in the current locale (returns `-1`, `0`, or `1`).

11. **`match(regexp)`**  
    Searches a string for a match against a regular expression.

12. **`matchAll(regexp)`**  
    Returns all matches of a regular expression in a string.

13. **`search(regexp)`**  
    Returns the index of the first regex match, or `-1` if not found.

---

## Modifying Strings

14. **`normalize(form?)`**  
    Returns the Unicode normalization form of a string (`NFC`, `NFD`, `NFKC`, `NFKD`).

15. **`padEnd(targetLength, padString)`**  
    Pads the end of a string to a specified length with another string.

16. **`padStart(targetLength, padString)`**  
    Pads the start of a string to a specified length with another string.

17. **`repeat(count)`**  
    Returns a new string repeated `count` times.

18. **`replace(searchValue, replaceValue)`**  
    Replaces the first occurrence of a substring/regex with another string.

19. **`replaceAll(searchValue, replaceValue)`**  
    Replaces all occurrences of a substring/regex with another string.

20. **`slice(startIndex, endIndex?)`**  
    Extracts a section of a string and returns it as a new string.

21. **`split(separator, limit?)`**  
    Splits a string into an array of substrings based on a separator.

22. **`substr(startIndex, length?)`** *(Deprecated)*  
    Extracts a substring from a start index for a given length.

23. **`substring(startIndex, endIndex?)`**  
    Extracts a substring between two indices.

---

## Case Conversion

24. **`toLocaleLowerCase(locale?)`**  
    Converts a string to lowercase, respecting locale-specific rules.

25. **`toLocaleUpperCase(locale?)`**  
    Converts a string to uppercase, respecting locale-specific rules.

26. **`toLowerCase()`**  
    Converts a string to lowercase.

27. **`toUpperCase()`**  
    Converts a string to uppercase.

---

## Trimming and Padding

28. **`trim()`**  
    Removes whitespace from both ends of a string.

29. **`trimEnd()` / `trimRight()`**  
    Removes whitespace from the end of a string.

30. **`trimStart()` / `trimLeft()`**  
    Removes whitespace from the start of a string.

---

## Unicode and Encoding

31. **`String.raw()`**  
    Returns a raw string from a template literal (escapes are ignored).

32. **`toWellFormed()`**  
    Returns a string with unpaired surrogates replaced by `U+FFFD`.

---

## Utility Methods

33. **`toString()`**  
    Returns the string representation of an object.

34. **`valueOf()`**  
    Returns the primitive value of a string object.

---

## Examples

```javascript
const str = "Hello, World!";

console.log(str.charAt(1));                  // "e"
console.log(str.includes("World"));         // true
console.log(str.replace("Hello", "Hi"));   // "Hi, World!"
console.log(str.split(", "));             // ["Hello", "World!"]
console.log(str.trim());                 // "Hello, World!" (if no extra spaces)

```
