const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const faqDir = path.join(__dirname, "faq");
const outputFilePath = path.join(__dirname, "assets/faq.json");

const faqData = fs.readdirSync(faqDir)
  .filter(file => file.endsWith(".md"))
  .map(file => {
    const filePath = path.join(faqDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      slug: data.slug,
      tags: data.tags || [],
      body: content // Remove line breaks
    };
  });

fs.writeFileSync(outputFilePath, JSON.stringify(faqData, null, 2), "utf-8");
console.log("✅ FAQ JSON generated!");

