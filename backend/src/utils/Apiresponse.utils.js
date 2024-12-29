// ya thikani responsse dakhvaycha asel tya tya thikani yacha wrapper karne

class ApiResponse{
    constructor(statusCode,data,msg="Success"){
        this.statusCode=statusCode
        this.data=data
        this.msg=msg
        this.success=statusCode < 400
    }
}

export {ApiResponse}

// ONLY FOR PRACTICE
