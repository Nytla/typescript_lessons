// Set interface for RESPONCE from server
interface httpResponce {
    status: 'success' | 'failed';
    data: {
        databaseId?: number;
        sum?: number;
        from?: number;
        to?: number;
        errorMessage?: string;
        errorCode?: number
    }
}

// Set type guard for out payment
function checkStatusRequest(res: httpResponce) {
    if (res.status === "success") {
        console.log('This is databaseId: '+res.data.databaseId);
    } else if (res.status === "failed") {
        throw new Error('This is error: ' + res.data.errorMessage);
    }
}

// Set data for responce
const dataSuccess: httpResponce = {
    status: "success",
    data: {
        databaseId: 37,
        sum: 10000,
        from: 2,
        to: 4
    }
};
let dataFaled: httpResponce = {
    status: 'failed',
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
};

// Init function
checkStatusRequest(dataFaled);
