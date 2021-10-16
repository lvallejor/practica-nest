import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "src/app.service";


@Controller("product")
export class ProductController {

    @Get()
    getAll(
        @Query("page") page: string,
        @Query("perPage") perPage: string,
        @Query("search") search: string,
        @Query() query: any){
        console.log(query)
        const metadata = {page, perPage, search}
        return { 
            message: "Array de productos",
            data: [],
            metadata: metadata
        }
    } 


}