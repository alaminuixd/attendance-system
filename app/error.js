export const notFoundErrorHandler = (_req, _res, next) => {
    const error = new Error('Resourece not found!');
    error.status = 404;
    next(error);
};

export const globalErrorHandler = (error, _req, res, _next) => {
    if (error.status) {
        return res
            .status(error.status)
            .json({ message: error.message, status: error.status });
    }
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong!' });
};
