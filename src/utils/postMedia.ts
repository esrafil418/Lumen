const COVER_PHOTOS = [
  "https://images.unsplash.com/photo-1461360370896-922624d12d6d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1453873531674-2151bcd01783?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1518199266791-53767ce17391?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d10735c5?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80",
];

export function getPostCover(id: number, tags: string[] = []): string {
  const salt = tags.join("").length;
  return COVER_PHOTOS[(id * 13 + salt) % COVER_PHOTOS.length];
}

export function getFallbackCover(id: number): string {
  return `https://picsum.photos/seed/blog-${id}/1400/900`;
}

export function readingTime(body: string): number {
  return Math.max(1, Math.ceil(body.split(/\s+/).length / 200));
}
