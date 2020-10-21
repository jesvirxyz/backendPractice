const message = require("../../config/messages").msg;
exports.errorHandler = (e, status = 400) => {
  let errorMsg, msg, errMsg;
  if (typeof e != "object") {
    msg = e;
    errMsg = msg;
  } else {
    msg = e.message
    if (e.message.includes("`email` is required")) {
      errMsg = message.emailRequired
    } else if (e.message.includes("`password` is required")) {
      errMsg = message.passwordRequired
    } else if (e.message.includes("not a valid email")) {
      errMsg = message.invalidEmail
    } else if (e.message.includes("email_1 dup")) {
      errMsg = message.duplicateEmail
    } else if (e.message.includes("phone_1 dup")) {
      errMsg = message.duplicatePhone
    } else if (e.message.includes("phone1_1 dup")) {
      errMsg = message.duplicatePhone
    } else if (e.message.includes("emailAndOwner_1")) {
      errMsg = message.duplicateEmail
    } else if (e.message.includes("mobile_1 dup")) {
      errMsg = message.duplicatePhone
    } else if (e.message.includes("phoneAndOwner_1")) {
      errMsg = message.duplicatePhone
    } else if (e.message.includes("userName_1 dup")) {
      errMsg = message.duplicateUserName
    } else if (e.message.includes("deviceToken_1 dup")) {
      errMsg = message.duplicateDeviceToken
    } else if (e.message.includes("undefined") || e.message.includes("null")) {
      errMsg = message.serverError
    } else if (e.message.includes('validation failed')) {
      errMsg = message.invalidRequest
    }
  }
  errorMsg = {
    error: errMsg || message.serverError,
    body: msg || message.serverError,
    status: status
  };
  return errorMsg;
};