import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";

// Manually set the worker URL
const workerUrl = `/node_modules/pdfjs-dist/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <h1>View PDF</h1>
      <Worker workerUrl={workerUrl}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default PDFViewer;