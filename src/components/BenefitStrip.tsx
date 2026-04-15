const benefits = [
  { icon: 'fa-download', label: 'Instant digital delivery' },
  { icon: 'fa-hand-holding-dollar', label: '100% Money Guarantee' },
  { icon: 'fa-money-check-dollar', label: 'Multiple payment options' },
  { icon: 'fa-pen-ruler', label: 'Customizable house plans' },
  { icon: 'fa-file-invoice-dollar', label: 'Construction cost estimates' },
];

export default function BenefitStrip() {
  return (
    <section className="py-5 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 text-center">
              <i className={`fas ${item.icon} text-primary text-xl`}></i>
              <p className="text-gray-800 font-medium text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
