export declare class ProductController {
    getAll(page: string, perPage: string, search: string, query: any): {
        message: string;
        data: any[];
        metadata: {
            page: string;
            perPage: string;
            search: string;
        };
    };
}
