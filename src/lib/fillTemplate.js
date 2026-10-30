/** Mengisi penanda {nama} pada teks: fillTemplate('Halo {name}', { name: 'Ansel' }) */
export const fillTemplate = (template, values) =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''))
