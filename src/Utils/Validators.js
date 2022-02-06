import {VALID_DESCRIPTION_LENGTH, VALID_NAME_LENGTH} from "../Constants/Constants";

export const validateName = (str) => {
    return str?.length <= VALID_NAME_LENGTH && str?.length > 0
}
export const validateDescription = (str) => {
    return str?.length <= VALID_DESCRIPTION_LENGTH && str?.length > 0
}
export const validateImageUrl = (str) => {
    return str?.length > 0
}
export const validatePrice = (price) => {
    return price > 0
}