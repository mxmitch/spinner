const symbols = ["|", "/", "-", "\\", "|"];
let timer = 100;

for (const element of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, timer);
  timer += 200;
}