import { create } from "zustand";
import { getPostCover } from "../utils/postMedia";

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
}

export interface Posts {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
  cover?: string;
}

interface PostsStore {
  posts: Posts[];
  authors: Record<number, Author>;
  loading: boolean;
  hasFetched: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  addPost: (input: {
    title: string;
    body: string;
    tags: string[];
    cover?: string;
  }) => void;
  likePost: (id: number) => void;
}

function formatDateFromId(id: number): Date {
  const start = new Date("2025-11-01").getTime();
  return new Date(start + id * 86_400_000);
}

export function getPostDate(id: number): string {
  return formatDateFromId(id).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const usePostsStore = create<PostsStore>((set, get) => {
  return {
    posts: [],
    authors: {},
    loading: true,
    hasFetched: false,
    error: null,

    fetchPosts: async () => {
      if (get().hasFetched) return;

      set({ loading: true, hasFetched: true, error: null });

      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch("https://dummyjson.com/posts?limit=30"),
          fetch(
            "https://dummyjson.com/users?limit=208&select=firstName,lastName,username,image",
          ),
        ]);

        if (!postsRes.ok || !usersRes.ok) {
          throw new Error("Request failed");
        }

        const postsData = await postsRes.json();
        const usersData = await usersRes.json();

        const authors: Record<number, Author> = {};
        for (const user of usersData.users as Author[]) {
          authors[user.id] = user;
        }

        const posts: Posts[] = (postsData.posts as Posts[]).map((post) => ({
          ...post,
          cover: getPostCover(post.id, post.tags),
        }));

        set({
          posts: [...get().posts, ...posts],
          authors,
          loading: false,
          hasFetched: true,
          error: null,
        });
      } catch (error) {
        console.log(error);
        set({ loading: false, hasFetched: false, error: "Failed to fetch posts" });
      }
    },

    addPost: ({ title, body, tags, cover }) => {
      const id = Date.now();
      const post: Posts = {
        id,
        title,
        body,
        tags,
        reactions: { likes: 0, dislikes: 0 },
        views: 1,
        userId: 1,
        cover: cover || getPostCover(id, tags),
      };

      set({ posts: [post, ...get().posts] });
    },

    likePost: (id) => {
      set({
        posts: get().posts.map((post) =>
          post.id === id
            ? {
                ...post,
                reactions: {
                  ...post.reactions,
                  likes: post.reactions.likes + 1,
                },
              }
            : post,
        ),
      });
    },
  };
});
