module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: env("CLOUDINARY_NAME"),
        },
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // removePlugins: ['Markdown'],
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        toolbar: {
          // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
            ],
          },
          items: [
            "heading",
            "bold",
            "italic",
            "underline",
            "alignment",
            "removeFormat",
            "|",
            // "StrapiMediaLib",
            "mediaEmbed",
            "link",
            "blockQuote",
            "|",
            "bulletedList",
            "numberedList",
            "outdent",
            "indent",
            "|",
            "insertTable",
            "horizontalLine",
            "highlight",
            "codeBlock",
            "|",
            "subscript",
            "superscript",
            "strikethrough",
            "specialCharacters",
            "|",
            "code",
            "htmlEmbed",
            "sourceEditing",
            "|",
            "undo",
            "redo",
          ],
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        // default language: 'en',
        // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
        image: {
          resizeUnit: "%",
          resizeOptions: [
            {
              name: "resizeImage:original",
              value: null,
              icon: "original",
            },
            {
              name: "resizeImage:25",
              value: "25",
              icon: "small",
            },
            {
              name: "resizeImage:50",
              value: "50",
              icon: "medium",
            },
            {
              name: "resizeImage:75",
              value: "75",
              icon: "large",
            },
          ],
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "linkImage",
            "resizeImage:25",
            "resizeImage:50",
            "resizeImage:75",
            "resizeImage:original",
          ],
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
            "toggleTableCaption",
          ],
        },
      },
    },
  },
});
