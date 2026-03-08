#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateTestData() {
  try {
    // Read the resume data file
    const resumeDataPath = join(__dirname, '../src/data/resume-data.tsx');
    const resumeDataContent = await readFile(resumeDataPath, 'utf8');

    // Extract the RESUME_DATA object by removing imports and exports
    const extractedData = resumeDataContent
      // Remove import statements
      .replace(/import.*from.*['"].*['"];?\n?/g, '')
      // Remove the export and replace with const
      .replace(/export const RESUME_DATA = \{/, 'const RESUME_DATA = {')
      // Remove the type assertion and export
      .replace(
        /\} as const;\n\nexport type ResumeData = typeof RESUME_DATA;/,
        '};',
      )
      // Remove any icon references (replace with null or remove the property)
      .replace(/icon: \w+Icon,?\n?/g, '')
      // Remove logo imports (replace with null)
      .replace(/logo: \w+Logo,?\n?/g, '');

    // Create the test data content
    const testDataContent = `// Auto-generated from resume-data.tsx
// Run 'pnpm run generate-test-data' to update this file

${extractedData}

export const TEST_RESUME_DATA = RESUME_DATA;
`;

    // Write the test data file
    const testDataPath = join(__dirname, '../tests/test-data.ts');
    await writeFile(testDataPath, testDataContent);

    console.log('✅ Test data generated successfully from resume-data.tsx');
  } catch (error) {
    console.error('❌ Error generating test data:', error.message);
    process.exit(1);
  }
}

generateTestData();
