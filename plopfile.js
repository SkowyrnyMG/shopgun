const toCamelCase = require("lodash/camelCase");

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "adds React component",
    prompts: [
      {
        type: "list",
        name: "workspace",
        message: "Please choose a workspace",
        choices: ["shopgun-dashboard", "shopgun-store", "ui-kit"],
      },
      {
        type: "list",
        name: "directory",
        message: "Please specify a directory",
        choices: ["components", "templates", "pages", "create a new one"],
      },
      {
        type: "list",
        name: "componentType",
        message: "Please choose component type",
        choices: ["atoms", "molecules", "organisms"],
        when: (answers) => answers.directory === "components",
      },
      {
        type: "input",
        name: "newDirectory",
        message: "Please enter a directory name",
        when: (answers) => answers.directory === "create a new one",
      },
      {
        type: "list",
        name: "isStories",
        message: "Would you like to add stories?",
        choices: ["yes", "no"],
      },
      {
        type: "input",
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
        {
          type: "add",
          path: `${basePath}/__tests__/${specificPath}{{properCase name}}.test.tsx`,
          templateFile: "plop/component/test.hbs",
        },
      ];

      if (data.isStories === "yes") {
        actionsList.push({
          type: "add",
          path: `${basePath}/stories/${specificPath}{{properCase name}}.stories.tsx`,
          templateFile: "plop/component/stories.hbs",
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
    });
};
