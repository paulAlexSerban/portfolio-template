export const paths = {
  src: {
    styles: {
      scssDir: `../../living-style-guide/source/`,
      scssFiles: [`../../living-style-guide/source/**/*.scss`],
      scssPages: [`../../living-style-guide/source/**/pages/**/*.scss`],
      scssLayers: [
        `../../living-style-guide/source/modules/structure/templates/**/*.layer.template.scss`,
        `../../living-style-guide/source/modules/structure/grid/**/*.layer.grid.scss`
      ],
      scssAtomic: [
        `../../living-style-guide/source/**/components/**/*.atom.scss`,
        `../../living-style-guide/source/**/components/**/*.molecule.scss`,
        `../../living-style-guide/source/**/components/**/*.organism.scss`,
        `../../living-style-guide/source/**/templates/**/*.template.scss`,
        `../../living-style-guide/source/**/templates/**/*.page.scss`,
      ],
    },
  },
  dist: {
    dir: `./dist`,
  },
};
