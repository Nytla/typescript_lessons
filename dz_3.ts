// Set interface for REQUEST from server
interface httpRequest {
    sum: number;
    from: number;
    to: number;
}

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

// Set data for request
let requestData = {
	"sum": 1_000_000,
	"from": 333,
	"to": 777
};

// Set data for responce
function httpWork(request: httpRequest): httpResponce {
    console.log(request);
    // return {
    //     "status": "success",
    //     "data": {
    //         "databaseId": 37,
    //         "sum": 10000,
    //         "from": 2,
    //         "to": 4
    //     }
    // };
    return {
        "status": "failed",
        "data": {
            "errorMessage": "Недостаточно средств",
            "errorCode": 4
        }
    };
}

// Init function
console.log( httpWork(requestData) );

// 