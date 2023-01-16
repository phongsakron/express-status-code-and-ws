import catchAsync from "../utils/catchAsync";

const respondCode = catchAsync(async (req, res) => {

            const {code} = req.params;
            let duration = 200;

            const random = Math.random();

            if (random > 0.85) {
                duration = 12000;
            } else if (random > 0.7) {
                duration = 2000;
            }

            setTimeout(() => {
                res.status(parseInt(code));
                res.send(`You sent a ${code} response! After ${duration} seconds!`);
            }, duration);
        }
    )
;

const respondCodeWithDuration = catchAsync(async (req, res) => {

    const {code, duration} = req.params;

    setTimeout(() => {
        res.status(parseInt(code));
        res.send(`You sent a ${code} response! After ${duration} seconds!`);
    }, parseInt(duration));
});

const UserControllers = {
    respondCode,
    respondCodeWithDuration,
};

export default UserControllers;
