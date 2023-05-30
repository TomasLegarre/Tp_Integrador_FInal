module.exports = function (sequelize, dataTypes) {
    /*                      2 parametros q son Obj Lit. el 1ero me tre un metodo q me permite insertar un modelo. el 2do me permite utilizar ESE objeto p/ traerme propiedades para yo crear mi MAPEO en las columnas. */
   

        /*apodo para requerirlo en el controlador  */
    let alias  = "Producto" ; 

        /*mapeo exacto d/ cada una de mis columnas */
    let cols   = { 
            id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            nombre:{
                type: dataTypes.STRING,
            },
            descripcion:{
                type: dataTypes.STRING,
            },
            usuario_id:{
                type: dataTypes.INTEGER,
            },
    
        }; 
    
   
        /*Obj literal para configurar la tabla */
    let config = {
            tableName: 'productos',
            timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
            underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
        };
    
    const Producto = sequelize.define(alias,cols,config); 

    /* Crear relaciones */
    Producto.associate = function(models) {
        /*        pertenece a    */
        Producto.belongsTo(models.Usuario , {
            as: "usuario",
            foreingKey : "usuario_id"
        })
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreingKey: "producto_id"
        })

    };
    

    return Producto;

    };