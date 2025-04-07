import { useState } from "react";
import data from "./data.json";
import Title from "./components/Title";
import Logo from "./components/Logo";
import Details from "./components/Details";
import Button from "./components/Button";

interface Extension {
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
}

interface ExtensionListProps {
  filter: 'all' | 'active' | 'inactive';
}

function ExtensionList({ filter }: ExtensionListProps) {
  const [extensions, setExtensions] = useState<Extension[]>(data);

  const handleRemove = (name: string) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === 'all') return true;
    if (filter === 'active') return extension.isActive;
    if (filter === 'inactive') return !extension.isActive;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {filteredExtensions.map((extension) => (
        <div
          key={extension.name}
          className="shadow-md rounded-2xl p-6 bg-gray-100 hover:bg-sky-50 dark:text-white dark:bg-gray-900"
        >
          <div className="flex">
            <Logo logo={extension.logo} />
            <div>
              <Title name={extension.name} />
              <Details desc={extension.description} />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              value={extension.isActive}
              onRemove={() => handleRemove(extension.name)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExtensionList;
