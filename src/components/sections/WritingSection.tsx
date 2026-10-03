import { useState } from "react";
import { ArrowRight, ArrowUpRight, X, Clock, Calendar, BookOpen } from "lucide-react";
import SectionNeuralWave from "@/components/3d/SectionNeuralWave";

interface Post {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

const posts: Post[] = [
  {
    id: "model-evaluation",
    title: "How I Approach Model Evaluation",
    date: "Mar 2024",
    readTime: "5 min read",
    image: "/assets/blog/model-eval.jpg",
    excerpt: "Why raw accuracy is deceptive in real-world computer vision, and how Precision-Recall curves, IoU, and F1 confidence calibration provide true production clarity.",
    tags: ["Evaluation Metrics", "Computer Vision", "mAP", "Calibration"],
    content: [
      "In deep learning and computer vision, standard accuracy is often the most deceptive metric you can track. In extreme class imbalance—like rare pathology detection or defect identification—a model predicting the background 99% of the time still yields 99% accuracy while being completely useless in practice.",
      "My evaluation pipeline focuses on task-aligned validation: mean Average Precision (mAP@0.5:0.95) for bounding box detectors, Intersection over Union (IoU) with Dice Loss calibration for pixel-level segmenters, and Expected Calibration Error (ECE) for clinical classification tasks.",
      "Furthermore, I always benchmark inference latency and memory footprints across hardware configurations (GPU vs CPU with OpenVINO/ONNX Runtime). A model with 0.5% higher mAP is worthless in production if its inference latency spikes from 18ms to 240ms.",
    ],
  },
  {
    id: "error-analysis",
    title: "Understanding Error Analysis in ML",
    date: "Feb 2024",
    readTime: "4 min read",
    image: "/assets/blog/error-analysis.jpg",
    excerpt: "Systematic failure categorization across hard samples, false positives, and covariate shifts to debug model bottlenecks without blindly adding more data.",
    tags: ["Error Analysis", "Data-Centric AI", "Debugging", "Edge Cases"],
    content: [
      "When a computer vision model underperforms, the default instinct is often to blindly scrape more training data or switch to a heavier backbone. In reality, methodical error slicing reveals that 80% of degradations stem from systematic data annotation issues or edge cases.",
      "During error analysis, I stratify test errors into distinct operational bins: low-contrast imagery, partial occlusions, domain-specific illumination variations, and ambiguous boundary labels.",
      "By isolating the specific failure modes, targeted data augmentations (such as CLAHE contrast enhancement, synthetic occlusion transforms, or CutMix) can resolve performance bottlenecks in days rather than months.",
    ],
  },
  {
    id: "yolo-system",
    title: "What I Learned Building a YOLO-Based System",
    date: "Jan 2024",
    readTime: "6 min read",
    image: "/assets/blog/yolo-system.jpg",
    excerpt: "Engineering low-latency object detection pipelines: multi-camera ingestion, TensorRT quantization, and resolving inference bottlenecks at 60 FPS.",
    tags: ["YOLO", "Real-Time Inference", "TensorRT", "Edge AI"],
    content: [
      "Deploying YOLO models into real-world production environments is fundamentally an engineering discipline of latency budgeting and data pipeline optimization.",
      "The neural forward pass is often only 30% of the wall-clock execution time; frame decoding, color space conversions, image letterboxing, Non-Maximum Suppression (NMS), and GPU-to-CPU memory transfers frequently dominate execution time if not asynchronously pipelined.",
      "By leveraging TensorRT FP16 quantization, batch processing, and threaded frame grabbers, we achieved steady 60+ FPS inference on edge hardware with zero frame dropping across multi-stream camera feeds.",
    ],
  },
];

export default function WritingSection() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <section id="writing" className="relative w-full overflow-hidden z-10">
      <SectionNeuralWave sectionIndex={5} sectionId="writing" />
      <div className="relative z-10 max-w-7xl mx-auto py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">
            06 / WRITING
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            Thoughts,<br />
            notes and<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              learnings.
            </span>
          </h2>

          <p className="text-base text-white/60 leading-relaxed max-w-md mb-7 font-sans">
            Things I've learned while working on AI, computer vision and real-world projects.
          </p>

          <button
            onClick={() => setSelectedPost(posts[0])}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] text-white px-5 py-2.5 text-xs font-mono hover:border-[#f97316] hover:text-[#f97316] transition-all"
          >
            <span>Read All Posts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Column (8 Cols) - 3 Blog Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="rounded-2xl border border-white/10 bg-[#060a18]/75 backdrop-blur-md overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a18] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug mb-4">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-white/50">
                  <span>
                    {post.date} · {post.readTime}
                  </span>

                  {/* Circular Action Arrow */}
                  <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#f97316] group-hover:bg-[#f97316]/10 group-hover:text-[#f97316] flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-[#f97316] transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#090d1e] p-6 sm:p-8 shadow-2xl text-left">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Close post"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Post Header */}
            <div className="flex items-center gap-3 text-xs font-mono text-sky-400 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {selectedPost.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-white/70 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Post Banner */}
            <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9] border border-white/10">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
