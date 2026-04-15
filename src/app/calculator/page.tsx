'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type ProjectType = 'Residential' | 'Commercial' | 'Institutional' | 'Hospitality';
type FinishLevel = 'Basic' | 'Standard' | 'Premium';
type SiteCondition = 'Easy Access' | 'Average Access' | 'Difficult Access';

type CostInputs = {
  projectType: ProjectType;
  areaSqm: number;
  floors: number;
  finishLevel: FinishLevel;
  complexity: number;
  siteCondition: SiteCondition;
  includeMEP: boolean;
  includeLandscaping: boolean;
  contingencyPercent: number;
  professionalFeesPercent: number;
};

const baseRateByType: Record<ProjectType, number> = {
  Residential: 1200000,
  Commercial: 1450000,
  Institutional: 1600000,
  Hospitality: 1850000,
};

const finishMultiplier: Record<FinishLevel, number> = {
  Basic: 0.88,
  Standard: 1,
  Premium: 1.24,
};

const siteMultiplier: Record<SiteCondition, number> = {
  'Easy Access': 0.97,
  'Average Access': 1,
  'Difficult Access': 1.1,
};

const complexityMultiplier = (score: number) => 0.9 + score * 0.05;
const floorsMultiplier = (floors: number) => 1 + Math.max(0, floors - 1) * 0.04;

const formatUGX = (value: number) =>
  `USh ${new Intl.NumberFormat('en-UG', {
    maximumFractionDigits: 0,
  }).format(Math.max(0, value))}`;

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<CostInputs>({
    projectType: 'Residential',
    areaSqm: 220,
    floors: 1,
    finishLevel: 'Standard',
    complexity: 3,
    siteCondition: 'Average Access',
    includeMEP: true,
    includeLandscaping: false,
    contingencyPercent: 10,
    professionalFeesPercent: 8,
  });

  const estimate = useMemo(() => {
    const safeArea = Math.max(40, inputs.areaSqm);
    const safeFloors = Math.max(1, inputs.floors);

    const baseRate = baseRateByType[inputs.projectType];
    const adjustedRate =
      baseRate *
      finishMultiplier[inputs.finishLevel] *
      siteMultiplier[inputs.siteCondition] *
      complexityMultiplier(inputs.complexity) *
      floorsMultiplier(safeFloors);

    const coreConstruction = adjustedRate * safeArea;
    const mepCost = inputs.includeMEP ? coreConstruction * 0.12 : 0;
    const landscapingCost = inputs.includeLandscaping ? coreConstruction * 0.05 : 0;

    const subtotal = coreConstruction + mepCost + landscapingCost;
    const contingency = subtotal * (inputs.contingencyPercent / 100);
    const professionalFees = subtotal * (inputs.professionalFeesPercent / 100);
    const total = subtotal + contingency + professionalFees;

    const lowRange = total * 0.92;
    const highRange = total * 1.14;

    return {
      baseRate,
      adjustedRate,
      coreConstruction,
      mepCost,
      landscapingCost,
      subtotal,
      contingency,
      professionalFees,
      total,
      lowRange,
      highRange,
      perSqm: total / safeArea,
    };
  }, [inputs]);

  return (
    <div className="min-h-screen bg-light">
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-primary font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Project Cost Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Generate a quick construction cost estimate for planning and decision-making.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h2 className="text-primary font-display text-2xl sm:text-3xl font-bold mb-6">Project Inputs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Project Type</span>
                <select
                  value={inputs.projectType}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, projectType: event.target.value as ProjectType }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Institutional</option>
                  <option>Hospitality</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Area (sqm)</span>
                <input
                  type="number"
                  min={40}
                  value={inputs.areaSqm}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, areaSqm: Number(event.target.value) || 40 }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Floors</span>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={inputs.floors}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, floors: Number(event.target.value) || 1 }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Finish Level</span>
                <select
                  value={inputs.finishLevel}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, finishLevel: event.target.value as FinishLevel }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                >
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Site Condition</span>
                <select
                  value={inputs.siteCondition}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, siteCondition: event.target.value as SiteCondition }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                >
                  <option>Easy Access</option>
                  <option>Average Access</option>
                  <option>Difficult Access</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Design Complexity (1-5)</span>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={inputs.complexity}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, complexity: Number(event.target.value) }))
                  }
                  className="accent-accent"
                />
                <span className="text-sm text-gray-600">Selected: {inputs.complexity}</span>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Contingency (%)</span>
                <input
                  type="number"
                  min={0}
                  max={30}
                  value={inputs.contingencyPercent}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, contingencyPercent: Number(event.target.value) || 0 }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-gray-700 font-semibold">Professional Fees (%)</span>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={inputs.professionalFeesPercent}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, professionalFeesPercent: Number(event.target.value) || 0 }))
                  }
                  className="px-4 py-3 rounded-lg border border-gray-300"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-5">
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={inputs.includeMEP}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, includeMEP: event.target.checked }))
                  }
                  className="accent-accent"
                />
                Include MEP Allowance
              </label>

              <label className="inline-flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={inputs.includeLandscaping}
                  onChange={(event) =>
                    setInputs((prev) => ({ ...prev, includeLandscaping: event.target.checked }))
                  }
                  className="accent-accent"
                />
                Include Landscaping
              </label>
            </div>
          </div>

          <aside className="lg:col-span-7 bg-white rounded-2xl shadow-lg p-6 md:p-8 h-fit lg:sticky lg:top-24 border border-gray-100">
            <h2 className="text-primary font-display text-2xl sm:text-3xl font-bold mb-4">Estimate</h2>
            <p className="text-gray-600 mb-6">Indicative cost range for early planning.</p>

            <div className="rounded-2xl bg-light p-5 md:p-6 mb-7 border border-gray-200">
              <p className="text-gray-500 text-sm uppercase tracking-wide">Projected Total</p>
              <p className="text-primary font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight wrap-break-word">
                {formatUGX(estimate.total)}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Range: {formatUGX(estimate.lowRange)} - {formatUGX(estimate.highRange)}
              </p>
              <p className="text-gray-600 text-sm">Per sqm: {formatUGX(estimate.perSqm)}</p>
            </div>

            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                <span>Core construction</span>
                <strong>{formatUGX(estimate.coreConstruction)}</strong>
              </li>
              <li className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                <span>MEP allowance</span>
                <strong>{formatUGX(estimate.mepCost)}</strong>
              </li>
              <li className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                <span>Landscaping</span>
                <strong>{formatUGX(estimate.landscapingCost)}</strong>
              </li>
              <li className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                <span>Contingency</span>
                <strong>{formatUGX(estimate.contingency)}</strong>
              </li>
              <li className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                <span>Professional fees</span>
                <strong>{formatUGX(estimate.professionalFees)}</strong>
              </li>
            </ul>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              This calculator provides a planning estimate only. Final costs depend on detailed design,
              procurement strategy, site investigation, statutory approvals, and market movements.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/contact"
                className="text-center bg-accent text-white px-4 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-accent/90 transition-colors"
              >
                Request Full BOQ
              </Link>
              <Link
                href="/projects"
                className="text-center border border-primary text-primary px-4 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-colors"
              >
                See Similar Projects
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
