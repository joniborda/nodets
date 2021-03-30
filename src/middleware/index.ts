import createError from 'http-errors';

const error404Handler = (req: Express.Request, res: Express.Response, next: any) => {
    next(createError(404));
};

const errorHandler = (err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500);
    res.send({ message: err.message });
};

export default { error404Handler, errorHandler }