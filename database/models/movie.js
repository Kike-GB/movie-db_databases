module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true, 
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards:{
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE 
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tableName : 'movies',
        timestamps: false
    };
    let movies = sequelize.define('movies', cols, config);
    return movies;
} 