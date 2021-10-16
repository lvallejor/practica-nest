import { AppService } from './app.service';
import { Response } from "express";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    elementos: string[];
    getHello(): object;
    create(): string[];
    httpCode1(): void;
    httpCode2(): string;
    responseWithDecoratorHeader(): string;
    librarySpecific(res: Response): Response<any, Record<string, any>>;
}
