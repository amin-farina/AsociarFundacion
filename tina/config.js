import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "Home",
        label: "Home",
        path: "content/pages",
        format: "json",
        fields: [
          {
            name: "header",
            label: "Header",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Título",
                type: "string",
              },
              {
                name: "description",
                label: "Descripción",
                type: "string",
              },
              {
                name: "img",
                label: "Imagen",
                type: "image",
              },
            ],
          },
          {
            name: "about",
            label: "Acerca de Nosotros",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Título",
                type: "string",
              },
              {
                name: "subtitle",
                label: "Subtítulo",
                type: "string",
              },
              {
                name: "description",
                label: "Descripción",
                type: "string",
              },
              {
                name: "carrousel",
                label: "Carrusel",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "imgPath",
                    label: "Ruta de la Imagen",
                    type: "image",
                  },
                  {
                    name: "imgAlt",
                    label: "Texto Alternativo de la Imagen",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "helpUs",
            label: "¿Cómo Puedes Ayudarnos?",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Título",
                type: "string",
              },
              {
                name: "description",
                label: "Descripción",
                type: "string",
              },
              {
                name: "options",
                label: "Opciones",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "title",
                    label: "Título de la Opción",
                    type: "string",
                  },
                  {
                    name: "description",
                    label: "Descripción de la Opción",
                    type: "string",
                  },
                  {
                    name: "textButton",
                    label: "Texto del Botón",
                    type: "string",
                  },
                  {
                    name: "link",
                    label: "Enlace",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "alianzas",
            label: "Alianzas Estratégicas",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Título",
                type: "string",
              },
              {
                name: "description",
                label: "Descripción",
                type: "string",
              },
              {
                name: "descriptionBold",
                label: "Descripción en Negrita",
                type: "string",
              },
              {
                name: "companies",
                label: "Empresas",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "imgPath",
                    label: "Ruta de la Imagen",
                    type: "string",
                  },
                  {
                    name: "imgAlt",
                    label: "Texto Alternativo de la Imagen",
                    type: "string",
                  },
                  {
                    name: "imgUrl",
                    label: "URL de la Imagen",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Donar",
        label: "Donar",
        path: "content/donar",
        format: "json",
        fields: [
          {
            name: "linkDonarr",
            label: "Link Donar",
            type: "string",
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "<Buscar>",
      stopwordLanguages: ["spa"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
