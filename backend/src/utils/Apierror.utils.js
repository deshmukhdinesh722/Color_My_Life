// ya thikani error dakhvaycha asel tya tya thikani yacha wrapper karne

class ApiError extends Error{
    constructor(
        statusCode, 
        msg="Something went Wrong",
        errors=[],
        stack=""
    ){
        super(msg)
        this.statusCode=statusCode
        this.data=null
        this.success=false
        this.errors=errors
    }
}

export {ApiError}

// ONLY FOR PRACTICE