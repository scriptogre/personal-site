export function calculateReadingTime(text) {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.trim().split(/\s+/).length; // Count the number of words
  // Calculate reading time in minutes
  return Math.ceil(wordCount / wordsPerMinute);
}
