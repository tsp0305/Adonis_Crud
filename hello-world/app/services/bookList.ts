import { HttpContext } from "@adonisjs/core/build/standalone";

export default class bookList {
    public static logRequest() {
        const ctx = HttpContext.get()
        //console.log('Request method:', ctx?.request.method())
        //console.log('Request body:', ctx?.request.body())
    }
}