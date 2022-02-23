const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
const path=require('path');
const multer=require('multer'); // subir fotos al servidor
const dir=require('./rutas/direcciones');
const app=express();
app.set('view engine', 'ejs');
app.use('/css',express.static(__dirname+'/webPages/cuerpo'));
app.use('/',express.static(path.join(__dirname,"/webPages")));
app.use(express.urlencoded({extended:true}));//recibe datos de un formulario - extended en true para recibir archivos
app.use(session({
    secret:"xml",
    resave:true,
    saveUninitialized:true
}));
// multer, fotos en el servidor
app.use(multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'webPages/images');
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname);
        }
    })
}).single('fotoProd'));
app.use( express.static( "public" ) );
app.use('/', dir);
mongoose.connect('mongodb+srv://wcorp:fernando2002@cluster0.c5uzj.mongodb.net/WolfCorp?retryWrites=true&w=majority')
.then(()=>{
    console.log('Conectado correctamente a MongoDB');
})  
.catch((err)=>{
    console.log('Error '+err)
})
//Levantamos el servidor para poder desarrollar la pagina
app.listen(80,()=>{console.log("Servidor listo en el puerto 80");});