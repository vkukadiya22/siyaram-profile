import React from "react";

export default function Timeline() {
  const milestones = [
    {
      year: "2009",
      title: "Foundation in Bhavnagar",
      description: "Established a dedicated steel profile cutting workshop with initial flame-cutting gantry machinery."
    },
    {
      year: "2014",
      title: "CNC Automation Upgrade",
      description: "Integrated state-of-the-art CNC controllers and expanded processing capacity for high-precision components."
    },
    {
      year: "2018",
      title: "High-Power Fiber Laser Integration",
      description: "Acquired multi-kW Fiber Laser technology enabling micro-tolerance cuts on heavy structural plates."
    },
    {
      year: "2024+",
      title: "Industry Leader & Regional Delivery",
      description: "Delivered over 610+ precision projects across heavy engineering, infrastructure, and agricultural OEM sectors."
    }
  ];

  return (
    <div className="relative border-l-2 border-primary-container ml-2 md:ml-32 space-y-6 md:space-y-12 my-6 md:my-12">
      {milestones.map((item, idx) => (
        <div key={idx} className="relative pl-6 md:pl-12 group">
          <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-4 border-primary-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
            <div className="w-2 h-2 rounded-full bg-primary-container group-hover:bg-white"></div>
          </div>
          <div className="bg-surface-container-low p-4 md:p-6 rounded-lg border border-outline-variant/40 shadow-sm hover:border-primary-container transition-colors">
            <span className="font-label-caps text-xs text-primary-container font-bold tracking-widest block mb-1">
              {item.year}
            </span>
            <h3 className="font-headline-md text-xl font-bold text-deep-navy mb-2">
              {item.title}
            </h3>
            <p className="font-body-md text-sm text-deep-navy/80 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
