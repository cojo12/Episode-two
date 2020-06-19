module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define("Planet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    star: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false
    },
    moon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rotation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rebel: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    empire: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    blackSuns: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  Planet.associate = function(models) {
    Planet.hasMany(models.Location, {
      onDelete: "cascade"
    });
  };
  return Planet;
};
