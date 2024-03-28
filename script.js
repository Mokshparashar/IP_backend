import XLSX from "xlsx";

const url = "https://sheetjs.com/data/PortfolioSummary.xls";
const file = await (await fetch(url)).arrayBuffer();

const workbook = XLSX.read(file);
const opt = workbook.Props.Author;
console.log(opt);
