import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {DashboardStats, LowStockProduct, InventoryTransaction} from '../models/transaction.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private apiUrl = 'http://localhost:5037/api/dashboard';
    constructor(private http: HttpClient) {}

    getDashboardStats(): Observable<DashboardStats> {
        return this.http.get<DashboardStats>(`${this.apiUrl}/stats`);
    }
    getLowStockProducts(): Observable<LowStockProduct[]> {
        return this.http.get<LowStockProduct[]>(`${this.apiUrl}/low-stock-products`);
    }
    getRecentTransactions(): Observable<InventoryTransaction[]> {
        return this.http.get<InventoryTransaction[]>(`${this.apiUrl}/recent-transactions`);
    }
}
