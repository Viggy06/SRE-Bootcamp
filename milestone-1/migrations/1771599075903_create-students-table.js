exports.up = (pgm) => {
  pgm.createTable('students', {
    id: {
      type: 'bigserial',
      primaryKey: true,
    },
    name: {
      type: 'varchar(100)',
      notNull: false,
    },
    age: {
      type: 'integer',
      notNull: false,
      check: 'age > 0',
    },
    created_at: {
      type: 'timestamp',
      default: pgm.func('now()'),
      notNull: true,
    },
  });

};

exports.down = (pgm) => {
  pgm.dropTable('students');
};
