import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [
    { id: 1, supplierName: 'TechCorp', location: 'Manila', email: 'info@techcorp.com', contactPerson: 'Juan Dela Cruz', phone: '0917-123-4567', productsSupplied: ['Laptops', 'Monitors'] },
    { id: 2, supplierName: 'Global Solutions', location: 'Cebu', email: 'contact@globalsol.com', contactPerson: 'Maria Clara', phone: '0918-765-4321', productsSupplied: ['Software Licenses'] },
    { id: 3, supplierName: 'EcoBuild', location: 'Davao', email: 'sales@ecobuild.ph', contactPerson: 'Pedro Penduko', phone: '0919-000-1111', productsSupplied: ['Solar Panels'] },
    { id: 4, supplierName: 'OfficePro', location: 'Quezon City', email: 'orders@officepro.com', contactPerson: 'Ana Reyes', phone: '0915-222-3333', productsSupplied: ['Desks', 'Chairs'] },
    { id: 5, supplierName: 'NetWorks Inc', location: 'Makati', email: 'support@networks.ph', contactPerson: 'Lito Lapid', phone: '0916-444-5555', productsSupplied: ['Routers', 'Cables'] },
    { id: 6, supplierName: 'Skyline Media', location: 'Pasig', email: 'ads@skyline.com', contactPerson: 'Sarah G.', phone: '0917-888-9999', productsSupplied: ['Graphic Tablets'] },
    { id: 7, supplierName: 'PowerGen', location: 'Batangas', email: 'admin@powergen.com', contactPerson: 'Vic Sotto', phone: '0918-111-2222', productsSupplied: ['Batteries', 'UPS'] },
    { id: 8, supplierName: 'SafeGuard Systems', location: 'Cavite', email: 'sales@safeguard.ph', contactPerson: 'Darna Mars', phone: '0919-333-4444', productsSupplied: ['CCTV', 'Alarms'] },
    { id: 9, supplierName: 'CloudBase', location: 'Baguio', email: 'hello@cloudbase.com', contactPerson: 'Bambam', phone: '0915-555-6666', productsSupplied: ['Server Racks'] },
    { id: 10, supplierName: 'Prime Logistics', location: 'Laguna', email: 'ops@primelog.com', contactPerson: 'Dingdong D.', phone: '0916-777-8888', productsSupplied: ['Storage Units'] }
  ];

  constructor() { }

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = updatedSupplier;
    }
  }
}