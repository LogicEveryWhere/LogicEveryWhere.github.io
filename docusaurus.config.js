module.exports={
  "title": "ЖК Great Інвестори",
  "tagline": "Інформаційний портал комплексу",
  "url": "https://great.pp.ua",
  "baseUrl": "/great-pp/",
  "organizationName": "logiceverywhere",
  "projectName": "great-pp",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/home.png",
  "customFields": {
    "description": "База знань ЖК Great, телеграм ЖК Great, форум ЖК Great",
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "docs",
          "sidebarPath": require.resolve("./sidebars.json")
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss":require.resolve( "./src/css/customTheme.css")
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "ЖК Great Інвестори",
      "logo": {
        "src": "/img/home.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "База знаннь",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [
        {
          title: 'Посилання',
          items: [
            {
              "to": "docs/",
              "label": "База знаннь",
            },
            {
              "to": "blog/",
              "label": "Новини",
            },
          ],
        }
      ],
      "copyright": "Copyright © 2019-2021 - Інвестори",
      "logo": {
        "src": "img/home.png"
      }
    }
  }
};
