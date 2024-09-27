import fs from 'fs';
import { execSync } from 'child_process';
import { type BuildFormat } from './configs/vite.common';

const formats: BuildFormat[] = ['es', 'mjs', 'cjs', 'iife'];

async function executeBuild() {
  try {
    console.log('Building types...');
    execSync('vue-tsc --declaration --emitDeclarationOnly --outDir dist/types', {
      stdio: 'inherit',
    });
  } catch (error) {
    console.error('Error during type declaration build:', error);
  }

  for (const format of formats) {
    try {
      console.log(`Building with format: ${format}`);
      execSync(`vite build --config ./build/configs/vite.${format}.ts`, {
        stdio: 'inherit',
      });
    } catch (error) {
      console.error(`Error during Vite build for format ${format}:`, error);
    }
  }

  console.log('Copying CSS to root...');
  fs.copyFileSync('dist/es/style.css', 'dist/style.css');
}


executeBuild();
