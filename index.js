import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const projectName = process.argv[2] || "mern-app";
const projectPath = path.join(process.cwd(), projectName);

if (!fs.existsSync(projectPath)) {
  fs.mkdirSync(projectPath);
}

// Copy backend and frontend to the project directory
execSync(`cp -r backend frontend ${projectPath}`);

console.log(`✅ MERN template created successfully in ${projectName}`);
console.log(`👉 Next steps:`);
console.log(`cd ${projectName}`);
console.log(`npm install`);
console.log(`npm start`);
