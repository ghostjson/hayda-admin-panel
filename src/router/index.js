import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/health-hub",
    name: "HealthHub",
    component: () => import("../views/HealthHub"),
  },
  {
    path: "/pages",
    name: "PageEditor",
    component: () => import("../views/PageEditor"),
  },
  {
    path: "/pages/new",
    name: "NewPage",
    component: () => import("../views/NewPage"),
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    component: () => import("../views/Subscriptions"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog"),
  },
  {
    path: "/content-editor",
    name: "ContentEditor",
    component: () => import("../views/ContentEditor"),
  },
  {
    path: "/content-editor/home",
    name: "ContentEditorHome",
    component: () => import("../views/ContentEditor/HomeContent"),
  },
  {
    path: "/content-editor/about",
    name: "ContentEditorAbout",
    component: () => import("../views/ContentEditor/AboutContent"),
  },
  {
    path: "/content-editor/footer",
    name: "ContentEditorFooter",
    component: () => import("../views/ContentEditor/FooterContent"),
  },
  {
    path: "/content-editor/terms",
    name: "ContentEditorTerm",
    component: () => import("../views/ContentEditor/TermsContent"),
  },
  {
    path: "/content-editor/social",
    name: "SocialEditor",
    component: () => import("../views/ContentEditor/SocialContent"),
  },
  {
    path: "/content-editor/discover-places",
    name: "ContentEditorDiscoverPlaces",
    component: () => import("../views/ContentEditor/DiscoverPlacesContent"),
  },
  {
    path: "/blog/new",
    name: "NewBlog",
    component: () => import("../views/NewBlog"),
  },
  {
    path: "/blog/edit/:id",
    name: "EditBlog",
    component: () => import("../views/EditBlog"),
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Games"),
  },
  {
    path: "/podcasts",
    name: "Podcasts",
    component: () => import("../views/Podcasts"),
  },
  {
    path: "/nutrition/new",
    name: "NewNutrition",
    component: () => import("../views/NewNutrition"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/email/:to",
    name: "Email",
    component: () => import("../views/Email"),
  },
  {
    path: "/chatbot",
    name: "Chatbot",
    component: () => import("../views/Chatbot"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
