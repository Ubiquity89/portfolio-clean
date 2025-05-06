// pages/resume.js
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  return (
    <div className="h-full bg-primary/30 py-20 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <h2 className="h2 mb-12">My Resume</h2>
        <div className="max-w-4xl mx-auto">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/es5/build/pdf.worker.min.js">
            <Viewer fileUrl="/public/Resume-Ubiquity-Sinha-Ray (1) (1) (1).pdf.pdf" />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default Resume;
