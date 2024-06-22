import { useState } from 'react';

type SpecModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpecialization: (spec: string) => void;
};

const specializations = [
  'Anxiety',
  'Depression',
  'Stress Management',
  'Relationship Issues',
  'Self-Esteem & Confidence',
  'Trauma & PTSD',
  'Grief & Loss',
  'Anger Management',
  'Career & Work Stress',
  'Addiction & Substance Abuse',
  'Mindfulness & Meditation',
  'Body Image & Eating Disorders',
  'Parenting & Family Issues',
  'LGBTQ+ Issues',
  'Chronic Illness & Pain',
  'Sleep Issues',
];

const SpecModal = ({ isOpen, onClose, onSelectSpecialization }: SpecModalProps) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);

  const handleSelect = (specialization: string) => {
    setSelectedSpecialization(specialization);
  };

  const handleSubmit = () => {
    if (selectedSpecialization) {
      onSelectSpecialization(selectedSpecialization);
    }
    onClose();
  };

  const handleSkip = () => {
    setSelectedSpecialization(null)
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-8 bg-black bg-opacity-50">
      <div className="flex relative flex-col justify-center bg-white p-8 m-8 max-w-lg max-h-[500px] w-full">
        <h2 className="text-lg text-gray-600 mb-2 self-start">Select specialization</h2>
        <div className="flex flex-wrap gap-2 overflow-y-auto no-scrollbar">
          {specializations.map((specialization) => (
            <button
              key={specialization}
              className={`mt-2 border-2 ${selectedSpecialization === specialization ? 'bg-gradient-to-br from-fav-blue1 to-fav-blue2 border-fav-blue1' : 'border-gray-400 text-gray-600'} w-max py-1 px-4 rounded-full text-sm`}
              onClick={() => handleSelect(specialization)}
            >
              {specialization}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="text-gray-400 font-medium py-1 px-4 rounded-full mr-2"
            onClick={handleSkip}
          >
            Skip
          </button>
          <button
            className="bg-gradient-to-br from-fav-blue1 to-fav-blue2 w-max text-white py-1 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecModal;
