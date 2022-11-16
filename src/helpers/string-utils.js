export function formatUrlSlug(slug) {
  return slug.replace(/\s+/g, "-");
}

export function reverseFormatUrlSlug(slug) {
  return slug.replace(/-+/g, " ");
}
