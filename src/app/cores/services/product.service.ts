import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Product, CreateProductRequest, UpdateProductRequest} from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost:5037/api/products';
    constructor(private http: HttpClient) {}
    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }
    getById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }
    getAvailableForOutbound(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/available-for-outbound`);
    }
    create(request: CreateProductRequest): Observable<Product> {
        return this.http.post<Product>(this.apiUrl, request);
    }
    update(id: number, request: UpdateProductRequest): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/${id}`, request);
    }
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}