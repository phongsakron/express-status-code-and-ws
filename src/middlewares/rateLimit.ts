import rateLimit from "express-rate-limit";

export default rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
