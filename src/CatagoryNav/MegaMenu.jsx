const MegaMenu = ({ sections }) => {
  return (
    <div className="z-50 border-t border-gray-200 bg-white/95 shadow-lg md:absolute md:left-0 md:top-full md:w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-3 py-5 sm:grid-cols-2 sm:px-4 sm:py-6 lg:grid-cols-5 lg:px-6 lg:py-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-sm text-gray-600 transition hover:text-blue-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
