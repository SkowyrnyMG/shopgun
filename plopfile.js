const toCamelCase = require("lodash/camelCase");
const CONSTANTS = {
  TYPE: {
    LIST: "list",
    INPUT: "input",
    CHECKBOX: "checkbox",
  },
  FILES: {
    STORIES: "stories",
    TESTS: "tests",
  },
  TYPE_OPTIONS: {
    INTERFACE: "interface",
    NAMESPACE: "namespace",
  },
  TEST_FEATURES: {
    ON_CLICK: "onClick",
  },
};

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "adds React component",
    prompts: [
      {
        type: CONSTANTS.TYPE.LIST,
        name: "workspace",
        message: "Please choose a workspace",
        choices: ["shopgun-dashboard", "shopgun-store", "ui-kit"],
      },
      {
        type: CONSTANTS.TYPE.LIST,
        name: "directory",
        message: "Please specify a directory",
        choices: ["components", "templates", "pages", "create a new one"],
      },
      {
        type: CONSTANTS.TYPE.LIST,
        name: "componentType",
        message: "Please choose component type",
        choices: ["atoms", "molecules", "organisms"],
        when: (answers) => answers.directory === "components",
      },
      {
        type: CONSTANTS.TYPE.INPUT,
        name: "newDirectory",
        message: "Please enter a directory name",
        when: (answers) => answers.directory === "create a new one",
      },
      {
        type: CONSTANTS.TYPE.CHECKBOX,
        name: "optionalFiles",
        message: "Which optional files would you like to add?",
        choices: [
          {
            name: "add Stories with base config",
            value: CONSTANTS.FILES.STORIES,
            checked: true,
          },
          {
            name: "add Tests with base config",
            value: CONSTANTS.FILES.TESTS,
            checked: true,
          },
        ],
      },
      {
        type: CONSTANTS.TYPE.CHECKBOX,
        name: "testFeatures",
        message: "Choose addtional test features you would like to add:",
        choices: [
          {
            name: "add on click function and base config",
            value: CONSTANTS.TEST_FEATURES.ON_CLICK,
          },
        ],
      },
      {
        type: CONSTANTS.TYPE.CHECKBOX,
        name: "typeOptions",
        message: "Choose additional component type options:",
        choices: [
          { value: CONSTANTS.TYPE_OPTIONS.INTERFACE, checked: true },
          CONSTANTS.TYPE_OPTIONS.NAMESPACE,
        ],
      },
      {
        type: CONSTANTS.TYPE.LIST,
        name: "namespaceOption",
        message: "Choose if you would like to export or declare namespace",
        choices: ["declare", "export"],
        when: (answers) =>
          answers.typeOptions.includes(CONSTANTS.TYPE_OPTIONS.NAMESPACE),
      },
      {
        type: CONSTANTS.TYPE.CHECKBOX,
        name: "componentImports",
        message:
          "Choose which additional dependencies would you like to import to component .tsx file:",
        choices: [
          {
            name: "classNames library to manage multiple classes",
            value: "classNames",
          },
        ],
      },
      {
        type: CONSTANTS.TYPE.INPUT,
        name: "name",
        message: "Please enter component name",
      },
    ],
    actions: (data) => {
      const directoryName = toCamelCase(
        data.newDirectory ? data.newDirectory : data.directory
      );
      const workspaceType = data.workspace.includes("shopgun")
        ? "apps"
        : "packages";
      const componentType =
        data.directory === "components" ? "{{dashCase componentType}}/" : "";
      const basePath = `${workspaceType}/{{dashCase workspace}}/src`;
      const specificPath = `${directoryName}/${componentType}{{properCase name}}/`;

      console.log(data.options);

      const actionsList = [
        {
          type: "add",
          path: `${basePath}/${specificPath}{{properCase name}}.tsx`,
          templateFile: "plop/component/Component.hbs",
        },
        {
          type: "add",
          path: `${basePath}/${specificPath}index.tsx`,
          templateFile: "plop/component/index.hbs",
        },
        {
          type: "add",
          path: `${basePath}/${specificPath}{{properCase name}}.module.scss`,
          templateFile: "plop/component/styles.hbs",
        },
        {
          type: "add",
          path: `${basePath}/${specificPath}models.d.ts`,
          templateFile: "plop/component/models.hbs",
        },
      ];

      if (
        data.optionalFiles &&
        data.optionalFiles.includes(CONSTANTS.FILES.STORIES)
      ) {
        actionsList.push({
          type: "add",
          path: `${basePath}/stories/${specificPath}{{properCase name}}.stories.tsx`,
          templateFile: "plop/component/stories.hbs",
        });
      }

      if (
        data.optionalFiles &&
        data.optionalFiles.includes(CONSTANTS.FILES.TESTS)
      ) {
        actionsList.push({
          type: "add",
          path: `${basePath}/__tests__/${specificPath}{{properCase name}}.test.tsx`,
          templateFile: "plop/component/test.hbs",
        });
      }

      return actionsList;
    },
  }),
    plop.setHelper("isContentType", function (directory, options) {
      if (directory === "components") {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    }),
    plop.setHelper(
      "insertOption",
      function (componentOptions, expectedOption, options) {
        if (componentOptions.includes(expectedOption)) {
          return options.fn(this);
        }
      }
    );
};
