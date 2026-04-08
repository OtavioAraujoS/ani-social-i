/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require("child_process");

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  console.error("Erro: NEXT_PUBLIC_API_URL não foi encontrada!");
  console.error("Certifique-se de usar 'node --env-file=.env'");
  process.exit(1);
}

const command = `npx swagger-typescript-api generate -p ${apiUrl}/docs/json -o ./src/services -n api.ts`;

console.log(`Rodando: ${command}`);

try {
  execSync(command, { stdio: "inherit" });
  console.log("✅ API gerada com sucesso!");
} catch {
  console.error("❌ Falha ao tentar gerar a API.");
  console.error(
    "Verifique a URL do Swagger e se o servidor backend está online.",
  );
  process.exit(1);
}
