import { OceanDataService } from './../../services/ocean-data.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Ocendata } from '../../interfaces/ocendata';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ocean-conditions',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FormsModule,
    NgxPaginationModule],
  templateUrl: './ocean-conditions.component.html',
  styleUrl: './ocean-conditions.component.css'
})
export class OceanConditionsComponent implements OnInit {
  oceanData: Ocendata[] = [];
  page: number = 1;
  totalItems: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  pages: number[] = [];
  filters: any = {
    regiao: '',
    especie: '',
    statusConservacao: '',
    temperaturaAgua: '',
    ph: '',
    nivelPoluicao: ''
  };
  config = {
    id: 'custom',
    maxSize: 5,
    directionLinks: true,
    autoHide: false,
    previousLabel: 'Previous',
    nextLabel: 'Next'
  };

  constructor(private oceanDataService: OceanDataService) { }

  ngOnInit(): void {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    if (page < 1 || (this.totalPages > 0 && page > this.totalPages)) {
      return;
    }

    this.oceanDataService.list(page, this.pageSize, this.filters).subscribe({
      next: (data) => {
        this.oceanData = data;
        this.totalItems = data.length;
        this.page = page;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.updatePages();
      },
      error: (error) => console.error('Houve um erro ao carregar os dados:', error)
    });
  }

  updatePages() {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  applyFilters() {
    console.log('Filtros aplicados:', this.filters);
    this.page = 1; // Reset page to 1 when applying filters
    this.loadPage(this.page);
  }
}
