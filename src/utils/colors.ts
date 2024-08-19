import { ThematicArea } from '@/lib/case-studies.service';

export const getThematicAreaColor = (thematicArea: ThematicArea) => {
  switch (thematicArea) {
    case ThematicArea.ZERO_POLLUTION:
      return 'bg-blue-100';
    case ThematicArea.BIODIVERSITY_PROTECTION:
      return 'bg-orange-100';
    case ThematicArea.DEFORESTATION_PREVENTION:
      return 'bg-lime-100';
    default:
      return 'bg-gray-100';
  }
};

export default getThematicAreaColor;
