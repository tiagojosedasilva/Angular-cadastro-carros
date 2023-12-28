import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            console.log("Tum tchitchi chama")

        if(localStorage.getItem("token_user") == '' || null){
            return next.handle(req)
        }

        var token = localStorage.getItem("token_user") || "{token: ''}"

        const tokenString: {token: string} = JSON.parse(token)
        console.log(req)
        console.log(token)
        if(token !== null){
            const authRequest = req.clone({
                headers: req.headers.set('Authorization', ( JSON.stringify(token) ) ? 'Bearer ' + tokenString.token: ''),
            })

            console.log(authRequest.headers)
            return next.handle(authRequest)
        }
        console.log('Deu erro   --------' + req)
        return next.handle(req)
    }
}

@NgModule({
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoginInterceptor,
        multi: true
    }]
})

export class Interceptor {}