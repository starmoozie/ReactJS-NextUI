export const menu = [
  {
    id: 1,
    parent_id: null,
    name: "Dashboard",
    path: "/",
    description: null
  },
  {
    id: 2,
    parent_id: null,
    name: "Features",
    path: null,
    description: null
  },
  {
    id: 3,
    parent_id: 2,
    name: "Example",
    path: "/example",
    description:
      "ACME scales apps to meet user demand, automagically, based on load.",
    permissions: [
      {
        name: "Create",
        position: "top",
        type: "button",
        api: {
          endpoint: "/example",
          method: "post"
        },
        path: "/example/create"
      },
      {
        name: "Import",
        position: "top",
        type: "button",
        api: {
          endpoint: "/example/import",
          method: "post"
        },
        path: null
      },
      {
        name: "Delete",
        position: "top",
        type: "checkbox",
        api: {
          endpoint: "/example/:ids",
          method: "delete"
        },
        path: null
      },
      {
        name: "Export",
        position: "top",
        type: "checkbox",
        api: {
          endpoint: "/example/:ids/export",
          method: "get"
        },
        path: null
      },
      {
        name: "Detail",
        position: "line",
        type: "button",
        api: {
          endpoint: "/example/:id",
          method: "get"
        },
        path: "/example/:id/detail"
      },
      {
        name: "Edit",
        position: "line",
        type: "button",
        api: {
          endpoint: "/example/:id",
          method: "put"
        },
        path: "/example/:id/edit"
      }
    ]
  }
];
