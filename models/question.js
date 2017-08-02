module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        question_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        question_func: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        valid_args: {
            type: DataTypes.STRING,
            get: function() {
                return this.getDataValue('valid_args').split(';')
            },
            set: function (val) {
                this.setDefaultValue('valid_args', val.join(';'));
            }
        }
    })

    return Question;
}