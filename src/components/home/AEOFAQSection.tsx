import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  tags: string[];
}

const faqs: FAQItem[] = [
  {
    question: "What core AI/ML and Computer Vision architectures does Pranav Baghare specialize in?",
    answer: "Pranav specializes in deep learning computer vision architectures, primarily Modified U-Net and Siamese U-Net for pixel-wise semantic segmentation and temporal change detection, DenseNet121 with Grad-CAM for medical imaging diagnostics, and multi-class Convolutional Neural Networks (CNNs) for real-time autonomous vehicle perception.",
    tags: ["U-Net", "DenseNet121", "Siamese CNN", "OpenCV", "TensorFlow"],
  },
  {
    question: "What is Pranav Baghare's current engineering role at Mantra Softech?",
    answer: "Pranav works as a Software Developer (AI/ML) at Mantra Softech. His daily responsibilities include building and experimenting with machine learning models for real-world applications, performing data preprocessing and feature extraction, conducting rigorous model evaluation, and collaborating with cross-functional engineering teams to integrate AI models into enterprise products.",
    tags: ["Mantra Softech", "Production ML", "Feature Extraction", "Model Evaluation"],
  },
  {
    question: "What verified quantitative metrics have been achieved in Pranav's flagship projects?",
    answer: "Pranav has achieved 99.7% validation accuracy across 43 classes on the German Traffic Sign Recognition Benchmark (GTSRB) with a real-time inference latency of 4.8ms. In healthcare diagnostics, his DenseNet121 pipeline achieved 94.0% recall and 91.0% accuracy for clinical pneumonia screening. In remote sensing, his U-Net system achieved reliable forest segmentation using weak supervision with vegetation indices.",
    tags: ["99.7% Accuracy", "94% Recall", "4.8ms Latency", "GTSRB", "Weak Supervision"],
  },
  {
    question: "What educational background and credentials does Pranav Baghare hold?",
    answer: "Pranav completed his Post Graduate Diploma in Artificial Intelligence (PG-DAI) from the Centre for Development of Advanced Computing (CDAC), Noida. Prior to this, he earned his Bachelor of Technology (B.Tech) in Computer Science from Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore.",
    tags: ["CDAC PG-DAI", "B.Tech Computer Science", "AI Specialization"],
  },
];

export default function AEOFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto z-10">
      <div className="text-center mb-12">
        <div className="eyebrow flex items-center justify-center gap-2 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-signal" />
          <span>Knowledge Base · AI & Recruiter FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-foreground">
          Frequently Answered <span className="italic-emphasis">Engineering Questions</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Structured overview of production experience, computer vision research, verified metrics, and technical tooling.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className="rounded-xl border border-border/70 bg-card/60 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-signal/40"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                aria-expanded={isOpen}
              >
                <h3 className="text-base sm:text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-signal transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
                  <p className="mb-3">{faq.answer}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {faq.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-signal/10 border border-signal/20 px-2.5 py-0.5 text-[11px] font-mono text-signal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
