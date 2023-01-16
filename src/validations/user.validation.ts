import Joi from "joi";
import {ValidateSchema} from "../middlewares/validate";

const getCodeSchema: ValidateSchema = {
    params: Joi.object({
        code: Joi.number().required(),
    }),
};

const getCodeAndDurationSchema: ValidateSchema = {
    params: Joi.object({
        code: Joi.number().required(),
        duration: Joi.number().required(),
    }),
};

export {getCodeSchema, getCodeAndDurationSchema};
