exports.up = (pgm) => {
  pgm.addColumn("students", {
    course: {
      type: "varchar(21)",
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn("students", "course");
};
