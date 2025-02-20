exports.render = function(req, res) {
    // res.send('Hola Mundo');

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    // Nombre plantilla (archivo sin la extensión: .ejs)
    res.render('index', {
        title: 'Hola Mundo',
        message: 'Express'
    });
};