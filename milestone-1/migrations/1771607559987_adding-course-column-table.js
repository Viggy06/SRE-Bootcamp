export const up = (pgm) => {
  pgm.addColumn("students", {
    course: {
      type: "varchar(21)",
      notNull: false,
    },
  });
};

export const down = (pgm) => {
  pgm.dropColumn("students", "course");
};
