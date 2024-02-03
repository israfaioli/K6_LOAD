// 1 imports
import { chromium } from 'k6/experimental/browser'
import { check } from 'k6'

// 2 configuracao
export const options = {
    vus: 3,
    duration: '5s',
    thresholds: {
      checks: ['rate > 0.99']
    },
    ext: {
        loadimpact: {
            projectID: '3680724',
            name: 'Exemplo de execução',
        }
    }
}

// 3 execução

export default  async function () {
  const browser = chromium.launch({ headless: false })
  const context = browser.newContext() 
  const page = browser.newPage();

  try {
    await page.goto('https://test.k6.io', {waitUntil: 'networkidle'})
    await Promise.all([
      page.waitForNavigation(),
      page.locator('a[href="/my_messages.php"]').click()
    ])
    page.locator('input[name="login"]').type('admin')
    page.locator('input[name="password"]').type('123')
    
    await Promise.all([
      page.waitForNavigation(),
      page.locator('input[type="submit"]').click()
    ])

    check(page, {
      'header': page.locator('h2').textContent() == 'Welcome, admin!'
  })

  page.screenshot('login.png')

  } finally {
    page.close()
    browser.close()
  }
}


// COMANDO PARA EXECUCAO
//k6 run --env K6_BROWSER_ENABLED=true script.js 