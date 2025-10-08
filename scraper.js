import puppeteer from "puppeteer";
import fs from "fs";

async function scrapeJijiFashion() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Go to the Fashion and Beauty category
  await page.goto("https://jiji.ng/fashion-and-beauty", { waitUntil: "networkidle2" });

  // Wait for the product items to load
  await page.waitForSelector(".b-list-advert__gallery__item");

  // Scrape the data
  const products = await page.$$eval(".b-list-advert__gallery__item", (items) =>
    items.map((item) => {
      const title = item.querySelector(".b-advert-title-inner")?.innerText.trim();
      const price = item.querySelector(".qa-advert-price")?.innerText.trim();
      const description = item.querySelector(".b-list-advert-base__description-text")?.innerText.trim();
      const image = item.querySelector("img")?.src;
      const location = item.querySelector(".b-list-advert__region__text")?.innerText.trim();
      const verified = !!item.querySelector(".b-list-advert-base__label--blue");
      const url = item.querySelector("a")?.href;

      return { title, price, description, image, location, verified, url };
    })
  );

  // Save to data.js as an array
  const dataJsContent = `export const products = ${JSON.stringify(products, null, 2)};`;
  fs.writeFileSync("data.js", dataJsContent, "utf-8");

  console.log("Data saved to data.js");
  await browser.close();
}

scrapeJijiFashion();
