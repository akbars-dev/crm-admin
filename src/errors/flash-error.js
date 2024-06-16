module.exports = class FlashError extends Error {
    status;

    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static CondidationError(message) {
        return new FlashError('error', message)
    }
}