import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.interface';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent implements OnInit {
  supplier: Supplier | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.supplier = this.supplierService.getSupplierById(id);
  }

  saveChanges(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      alert('Changes saved successfully!');
      this.router.navigate(['/suppliers']);
  }
  }

  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}
