import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("CHAMOU!!!")
        const token = localStorage.getItem("token_user")
        console.log(req)
        console.log(token + '-----------')
        if(token !== null){
            const authRequest = req.clone({
                headers: req.headers.set('Authorization', token),
            })

            console.log(authRequest)
            return next.handle(authRequest)
        }
        console.log('Deu erro   --------' + req)
        return next.handle(req)
    }
}