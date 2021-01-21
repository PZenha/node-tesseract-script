const { createWorker } = require('tesseract.js');

const worker = createWorker();
console.log("adeus")
console.log()
(async () => {
  await worker.load();
  await worker.loadLanguage('por');
  await worker.initialize('por');
  const { data: { text } } = await worker.recognize('./pic.png');
  console.log(text);
  await worker.terminate();
})();
