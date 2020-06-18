module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("Location", {
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    decription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Location.associate = function(models) {
    Location.belongsTo(models.Planet, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Location;
};
