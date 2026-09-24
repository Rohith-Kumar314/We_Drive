import { inject, Service } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Environments
import { environment } from "../../../../environments/environment";

// Interfaces
import { Ilogin } from "../schemas/auth.schemas";
import { APP_ROUTES } from "../../../configs/app.routes.config";

@Service()
export class AuthService{
    http = inject(HttpClient);
    baseUrl = environment.apiUrl;

    public RequestLogin(payload:Ilogin){
        return this.http.post(`${this.baseUrl}/${APP_ROUTES.LOGIN}`, payload);
    }

    public requestLogout(){
        return this.http.post(`${this.baseUrl}/${APP_ROUTES.LOGOUT}`,{});
    }
}