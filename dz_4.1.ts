// Set I for responce success
interface httpResponceDataSuccess {
    databaseId: number;
    sum: number;
    from: number;
    to: number;
}

// Set I for responce failed
interface httpResponceDataFailed {
    errorMessage: string;   
    errorCode: number
}

// Set Succes interface
interface httpResponceSuccess {
    status: 'success',
    data: httpResponceDataSuccess
}

// Set Failed interface
interface httpResponceFailed {
    status: 'failed',
    data: httpResponceDataFailed
}

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

const Statuses = ['success','failed'] as const;

type Statuses = typeof Statuses[number];


// Check status guard
function checkStasus(res: httpResponceSuccess | httpResponceFailed, status: Statuses): res is httpResponceSuccess {
    if (res.status === status) {
        return status === Statuses[0];
    }
    return false;
}

// Check status
function checkStatusRequest(result: httpResponceSuccess | httpResponceFailed, st: Statuses): void {
    if (checkStasus(result, st)) {
        console.log('This is databaseId: ' + result.data.databaseId);
    } else {
        throw new Error('This is error: ' + result.data.errorMessage);
    }
}

// Set data for responce
let dataSuccess: httpResponceSuccess = {
    status: 'success',
    data: {
        databaseId: 37,
        sum: 10000,
        from: 2,
        to: 4
    }
};
let dataFaled: httpResponceFailed = {
    status: 'failed',
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
};

let StatusS: Statuses = Statuses[0];
let StatusF: Statuses = Statuses[1];

// Init function
// checkStatusRequest(dataFaled, StatusF);
checkStatusRequest(dataSuccess, StatusS);
