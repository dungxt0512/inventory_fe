export interface Transaction {
  id: number;
  transactionId: string;
  transactionType: 'IN' | 'OUT';
  transactionDate: string;
  partnerName: string;
  note: string;
  createdAt: string;
  details: TransactionDetail[];
}

export interface TransactionDetail {
  id: number;
  productId: number;
  productName: string;
  unit: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateTransactionRequest {
  transactionType: 'IN' | 'OUT';
  transactionDate: string;
  partnerName: string;
  note: string;
  details: CreateTransactionDetailRequest[];
}

export interface CreateTransactionDetailRequest {
  productId: number;
  quantity: number;
  unitPrice: number;
}

export interface DashboardStats {
  totalStock : number;
  importThisMonth : number;
  exportThisMonth : number;
  lowStockCount : number;
}

export interface LowStockProduct {
  id : number;
  productId: number;
  productName: string;
  stockQuantity: number;
  unit: string;
}