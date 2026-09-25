import { inject, Service } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Environments
import { environment } from "../../../../environments/environment";

// Interfaces
import { Ilogin, IRegister } from "../schemas/auth.schemas";

// API Endpoints
import { API_ENDPOINTS } from "../../../configs/app.config";

@Service()
export class AuthService{
    http = inject(HttpClient);
    baseUrl = environment.apiUrl;

    public RequestLogin(payload:Ilogin){
        return this.http.post(`${this.baseUrl}/${API_ENDPOINTS.LOGIN}`, payload);
    }

    public requestLogout(){
        return this.http.post(`${this.baseUrl}/${API_ENDPOINTS.LOGOUT}`,{});
    }

    public registerUser(paylod:IRegister){
        return this.http.post(`${this.baseUrl}/${API_ENDPOINTS.REGISTER}`,{paylod});
    }
}