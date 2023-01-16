import express from "express";
import {
    getCodeAndDurationSchema,
    getCodeSchema,

} from "../validations/user.validation";
import UserControllers from "../controllers/users.controller";
import validate from "../middlewares/validate";

const UserRouter = express.Router();

UserRouter.get("/:code/:duration", validate(getCodeAndDurationSchema), UserControllers.respondCodeWithDuration);
UserRouter.post("/:code/:duration", validate(getCodeAndDurationSchema), UserControllers.respondCodeWithDuration);
UserRouter.put("/:code/:duration", validate(getCodeAndDurationSchema), UserControllers.respondCodeWithDuration);
UserRouter.patch("/:code/:duration", validate(getCodeAndDurationSchema), UserControllers.respondCodeWithDuration);
UserRouter.delete("/:code/:duration", validate(getCodeAndDurationSchema), UserControllers.respondCodeWithDuration);
UserRouter.get("/:code", validate(getCodeSchema), UserControllers.respondCode);
UserRouter.post("/:code", validate(getCodeSchema), UserControllers.respondCode);
UserRouter.put("/:code", validate(getCodeSchema), UserControllers.respondCode);
UserRouter.patch("/:code", validate(getCodeSchema), UserControllers.respondCode);
UserRouter.delete("/:code", validate(getCodeSchema), UserControllers.respondCode);

export default UserRouter;
