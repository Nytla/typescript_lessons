"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Statuses = 'success' | 'failed';
// type Statuses = {
//     s:'success',
//     f: 'failed'
// }
// const enum Statuses {
//     s = 'success',
//     f = 'failed',
// }
// const Statuses: object = {
//     s: 'success',
//     f: 'failed',
// }
const Statuses = ['success', 'failed'];
// Check status guard
function checkStasus(res, status) {
    if (res.status === status) {
        return status === Statuses[0];
    }
    return false;
}
// Check status
function checkStatusRequest(result, st) {
    if (checkStasus(result, st)) {
        console.log('This is databaseId: ' + result.data.databaseId);
    }
    else {
        throw new Error('This is error: ' + result.data.errorMessage);
    }
}
// Set data for responce
let dataSuccess = {
    status: 'success',
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
let StatusS = Statuses[0];
let StatusF = Statuses[1];
// Init function
// checkStatusRequest(dataFaled, StatusF);
checkStatusRequest(dataSuccess, StatusS);
//# sourceMappingURL=dz_4.1.js.map