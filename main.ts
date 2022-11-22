import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Terry's Blog",
  author: "Hardys' mentee",
  avatar: "./avatar.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/tktwong" },
    { title: "Twitter", url: "https://twitter.com/iamtktwong" },
  ],
});
