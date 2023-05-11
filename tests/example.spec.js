// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://localhost:5173/'
const PREFIJO = 'https://cataas.com/'
test('app muestra hecho e imagen', async ({ page }) => {
  await page.goto(LOCALHOST)
  await page.waitForSelector('.mi-clase')
  const text = await page.$('.mi-clase')
  const image = await page.getByRole('img')

  const textContent = await text?.innerText()
  const imageSrc = await image.getAttribute('src')

  // await expect(textContent).not.toBeNull()
  console.log(textContent, imageSrc)
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIJO)).toBeTruthy()
})
