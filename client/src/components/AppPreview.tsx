import previewWellness from "@assets/image_1755601859070.png";
import previewTrends from "@assets/image_1755601853112.png";
import previewRecovery from "@assets/image_1755601850599.png";

export default function AppPreview() {
  return (
    <section id="preview" className="py-24 bg-gradient-to-br from-navy via-purple-950 to-navy-light pt-[57px] pb-[57px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white" data-testid="preview-headline">
            See It In Action
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-[18px] mt-[-10px] mb-[-10px] pt-[0px] pb-[0px]" data-testid="preview-description">
            Experience the power of comprehensive performance tracking. From wellness monitoring to strength tracking, every feature is designed with athletes in mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Wellness Tracking Preview */}
          <div className="bg-navy-light/60 p-8 rounded-2xl border border-purple-700/30" data-testid="preview-wellness">
            <div className="text-center mb-6">
              <img 
                src={previewWellness} 
                alt="Wellness tracking interface" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" 
                data-testid="preview-wellness-image"
              />
              <h3 className="text-2xl font-bold mb-3 text-white" data-testid="preview-wellness-title">
                Wellness Tracking
              </h3>
              <p className="text-gray-300 mb-6" data-testid="preview-wellness-description">
                Monitor sleep quality, energy levels, stress, and body soreness with intuitive sliders and instant feedback.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-purple-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="wellness-metric-sleep">
                <span className="text-gray-300">Sleep Quality</span>
                <span className="text-vibrant-green font-semibold">9/10</span>
              </div>
              <div className="bg-purple-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="wellness-metric-energy">
                <span className="text-gray-300">Energy Level</span>
                <span className="font-semibold text-[#f9f21f]">7/10</span>
              </div>
              <div className="bg-purple-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="wellness-metric-stress">
                <span className="text-gray-300">Stress Level</span>
                <span className="font-semibold text-[#ff3300]">3/10</span>
              </div>
            </div>
          </div>

          {/* Performance Analytics Preview */}
          <div className="bg-navy-light/60 p-8 rounded-2xl border border-blue-700/30" data-testid="preview-analytics">
            <div className="text-center mb-6">
              <img 
                src={previewTrends} 
                alt="Performance analytics dashboard" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
                data-testid="preview-analytics-image"
              />
              <h3 className="text-2xl font-bold mb-3 text-white" data-testid="preview-analytics-title">
                Performance Analytics
              </h3>
              <p className="text-gray-300 mb-6" data-testid="preview-analytics-description">
                Visualize trends, identify patterns, and get actionable insights to optimize your training.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="analytics-metric-sleep">
                <span className="text-gray-300">Weekly Avg Sleep</span>
                <span className="text-vibrant-green font-semibold">8.2 hrs</span>
              </div>
              <div className="bg-blue-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="analytics-metric-recovery">
                <span className="text-gray-300">Recovery Score</span>
                <span className="text-vibrant-blue font-semibold">95</span>
              </div>
              <div className="bg-blue-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="analytics-metric-load">
                <span className="text-gray-300">Training Load</span>
                <span className="text-vibrant-orange font-semibold">Optimal</span>
              </div>
            </div>
          </div>

          {/* Recovery Assessment Preview */}
          <div className="bg-navy-light/60 p-8 rounded-2xl border border-green-700/30" data-testid="preview-recovery">
            <div className="text-center mb-6">
              <img 
                src={previewRecovery} 
                alt="Recovery assessment interface" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
                data-testid="preview-recovery-image"
              />
              <h3 className="text-2xl font-bold mb-3 text-white" data-testid="preview-recovery-title">
                Recovery Assessment
              </h3>
              <p className="text-gray-300 mb-6" data-testid="preview-recovery-description">
                Track your recovery activities, sleep patterns, and lifestyle factors that affect your training readiness.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-green-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="recovery-metric-score">
                <span className="text-gray-300">Recovery Score</span>
                <span className="text-vibrant-green font-semibold">92%</span>
              </div>
              <div className="bg-green-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="recovery-metric-readiness">
                <span className="text-gray-300">Training Readiness</span>
                <span className="text-vibrant-green font-semibold">High</span>
              </div>
              <div className="bg-green-900/50 p-3 rounded-lg flex justify-between items-center" data-testid="recovery-metric-activities">
                <span className="text-gray-300">Active Activities</span>
                <span className="text-vibrant-blue font-semibold">5/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
