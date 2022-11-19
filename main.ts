import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Hardys Blog",
  author: "Hardys",
  avatar: "./avatar.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/hardyscc" },
    { title: "Twitter", url: "https://twitter.com/hardyscchk" },
  ],
});
