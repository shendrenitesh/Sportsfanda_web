const MegaMenu = ({ sections }) => {
  return (
    <div
      className="
      absolute
      left-0
      top-full
      w-full
      bg-white
      shadow-lg
      border-t
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-10
        grid
        grid-cols-5
        gap-10
        "
      >
        {sections.map((section) => (
          <div key={section.title}>
            <h3
              className="
              text-xl
              font-semibold
              mb-4
              "
            >
              {section.title}
            </h3>

            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="
                  text-gray-600
                  hover:text-blue-600
                  cursor-pointer
                  "
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
