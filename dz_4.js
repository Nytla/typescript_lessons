"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Set type guard for out payment
function checkStatusRequest(res) {
    if (res.status === "success") {
        console.log('This is databaseId: ' + res.data.databaseId);
    }
    else if (res.status === "failed") {
        throw new Error('This is error: ' + res.data.errorMessage);
    }
}
// Set data for responce
let dataSuccess = {
    status: "success",
    data: {
        databaseId: 37,
        sum: 10000,
        from: 2,
        to: 4
    }
};
let dataFaled = {
    status: 'failed',
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
};
// Init function
checkStatusRequest(dataFaled);
//# sourceMappingURL=dz_4.js.map