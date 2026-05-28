import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {InventoryTransaction, CreateTransactionRequest} from '../models/transaction.model';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'http://localhost:5037/api/transactions';
    constructor(private http: HttpClient) {}
    getAll(): Observable<InventoryTransaction[]> {
        return this.http.get<InventoryTransaction[]>(this.apiUrl);
    }
    getById(id: number): Observable<InventoryTransaction> {
        return this.http.get<InventoryTransaction>(`${this.apiUrl}/${id}`);
    }
    create(request: CreateTransactionRequest): Observable<InventoryTransaction> {
        return this.http.post<InventoryTransaction>(this.apiUrl, request);
    }
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}