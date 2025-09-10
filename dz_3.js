"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Set data for request
let requestData = {
    "sum": 1_000_000,
    "from": 333,
    "to": 777
};
// Set data for responce
function httpWork(request) {
    console.log(request);
    return {
        "status": "success",
        "data": {
            "databaseId": 37,
            "sum": 10000,
            "from": 2,
            "to": 4
        }
    };
    // return {
    //     "status": "failed",
    //     "data": {
    //         "errorMessage": "Недостаточно средств",
    //         "errorCode": 4
    //     }
    // };
}
// Init function
console.log(httpWork(requestData));
//# sourceMappingURL=dz_3.js.map