import { documentationData } from './documentationData';
import { documentationData2 } from './documentationData2';
import { documentationData3 } from './documentationData3';

// Merge all documentation data
export const allDocumentationData = [
  ...documentationData,
  ...documentationData2,
  ...documentationData3
];

// Export the merged data as the default documentationData
export { allDocumentationData as documentationData };
