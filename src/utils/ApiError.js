class ApiError extends Error{
    constructor(statusCode,message="Any Went Wrong",errors=[],stack=''){
        super(message)
        this.statusCode=statusCode
        this.errors=errors
        this.stack=stack
        this.data=null
        this.success=false
    }
}
export{ApiError}