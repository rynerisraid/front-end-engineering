import fs from "fs";
import handlebars from "handlebars";
import chalk from "chalk";

export default async function refresh() {
  //读取文件列表
  const list = fs
    .readdirSync("./src/views")
    .filter((v) => v !== "HomeView.vue")
    .map((v) => ({
      name: v.replace(".vue", "").toLowerCase(),
      file: v,
    }));
  console.log("读取文件列表 list", list);
  //生成代码
  // 生成路由定义
  compile(
    {
      list,
    },
    "./src/router/index.js",
    "./template/router.js.hbs"
  );
  // 生成菜单
  compile(
    {
      list,
    },
    "./src/App.vue",
    "./template/App.vue.hbs"
  );
}

/**
 * 编译模板文件
 * @param {*} meta  数据定义
 * @param {*} filePath   目标文件
 * @param {*} templatePath  模板文件
 */
function compile(meta, filePath, templatePath) {
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath).toString();
    const result = handlebars.compile(content)(meta);
    fs.writeFileSync(filePath, result);
  }
  console.log(chalk.green(`🚀 ${filePath} 创建成功`));
}
