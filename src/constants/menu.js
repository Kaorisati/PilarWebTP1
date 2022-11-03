export const drawerMenu = [
  {
    title: "inicio",
    path: "/",
  },
  {
    title: "pages",
    children: [
      {
        title: "Todo",
        path: "/todo",
        image: require("../assets/images/todo.png"),
        description:
          "Descripción de Todo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      },
      {
        title: "FetchList",
        path: "/fetch-list",
        image: require("../assets/images/pockeball.png"),
        description:
          "Descripción de fetchList. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      },
    ],
  },
];
