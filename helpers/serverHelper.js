const dateDifferenceInMinutes = (dateInitial, dateFinal) =>
    (dateFinal - dateInitial) / 60000;

function serverError(res, {message, error, stackTrace} = {}) {
    const data = {
        error: error,
        message: message,
        stackTrace: stackTrace,
    };
    console.log(error);
    res.statusCode = 500;
    res.send(data);
    res.end();
}

function serverSuccess(res, data) {
    console.log(data);
    res.statusCode = 200;
    res.send(data);
    res.end();
}

function notFoundError(res, data){
    console.log(data);
    res.statusCode = 404;
    res.send(data);
    res.end();
}

module.exports = {
    dateDifferenceInMinutes,
    serverError,
    serverSuccess,
    notFoundError
}