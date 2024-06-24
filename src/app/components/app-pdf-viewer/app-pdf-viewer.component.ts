import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.mjs';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './app-pdf-viewer.component.html',
  styleUrls: ['./app-pdf-viewer.component.css'],
})
export class AppPdfViewerComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadPdf();
  }

  async loadPdf() {
    const url = 'https://840e8502.anmolshrestha.pages.dev/assets/resume.pdf'; // You can use any URL here

    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    // Fetch the first page
    const pageNumber = 1;
    const page = await pdf.getPage(pageNumber);

    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    // Prepare canvas using PDF page dimensions
    const canvas: HTMLCanvasElement = document.getElementById(
      'pdf-canvas'
    ) as HTMLCanvasElement;
    const context = canvas.getContext('2d')!;
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    const renderTask = page.render(renderContext);
    await renderTask.promise;
  }
}
