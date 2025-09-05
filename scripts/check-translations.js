import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio raíz del proyecto
const rootDir = path.join(__dirname, '..');
const appDir = path.join(rootDir, 'app');

// Función para buscar archivos recursivamente
function findFiles(dir, pattern, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, pattern, fileList);
    } else if (file.match(pattern)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Encontrar todos los archivos page.tsx
const pageFiles = findFiles(appDir, /page\.tsx$/);

// Verificar cada archivo
const pagesWithoutTranslations = [];

pageFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(rootDir, filePath);
  
  // Verificar si el archivo usa el hook useTranslation
  const usesTranslation = content.includes('useTranslation');
  
  // Verificar si usa la función t()
  const usesTFunction = content.match(/t\(['"].*?['"]/);
  
  if (!usesTranslation || !usesTFunction) {
    pagesWithoutTranslations.push({
      path: relativePath,
      missingTranslationHook: !usesTranslation,
      missingTFunction: !usesTFunction
    });
  }
});

// Mostrar resultados
console.log('\n=== Análisis de traducciones ===\n');

// Contadores para estadísticas
const totalPages = pageFiles.length;
const pagesWithTranslations = totalPages - pagesWithoutTranslations.length;

console.log(`📊 Estadísticas:`);
console.log(`- Total de páginas analizadas: ${totalPages}`);
console.log(`- Páginas con traducciones: ${pagesWithTranslations} (${Math.round((pagesWithTranslations / totalPages) * 100)}%)`);
console.log(`- Páginas que necesitan atención: ${pagesWithoutTranslations.length} (${Math.round((pagesWithoutTranslations.length / totalPages) * 100)}%)\n`);

if (pagesWithoutTranslations.length > 0) {
  console.log('🔍 Páginas que necesitan implementación de traducciones:\n');
  
  // Agrupar por tipo de problema
  const missingHook = pagesWithoutTranslations.filter(p => p.missingTranslationHook);
  const missingTFunction = pagesWithoutTranslations.filter(p => p.missingTFunction);
  
  if (missingHook.length > 0) {
    console.log('❌ Falta useTranslation en las siguientes páginas:');
    missingHook.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.path}`);
    });
    console.log('');
  }
  
  if (missingTFunction.length > 0) {
    console.log('❌ Falta usar la función t() en las siguientes páginas:');
    missingTFunction.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.path}`);
    });
    console.log('');
  }
  
  console.log('\n✅ Recomendación: Comienza por las páginas que faltan useTranslation, ya que son las que requieren más trabajo.');
} else {
  console.log('🎉 ¡Excelente! Todas las páginas tienen implementación de traducciones.');
}

console.log('\n=== Análisis completado ===');
