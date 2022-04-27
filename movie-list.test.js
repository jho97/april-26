const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy()
}

test('Movie List', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

// const deleteMovie = async (driver) => {
//     await driver.findElement(By.xpath('//li/button')).click()
 
//     const deleteMovie = async (driver) => {
//         await driver.findElement(By.xpath('//li/button')).click()
    
//         await driver.findElement(By.xpath('//li')).catch(error => {
//         console.log('This is the name', error.name)
//         expect(error.name).toBe("NoSuchElementError")
//         })
//     }
// }

// test('Delete Movie', async () => {
//     await deleteMovie(driver)
//     await driver.sleep(5000)
// })

const checkedMovie = async (driver) => {
    await driver.findElement(By.xpath('//li//span')).click()

    movieCheck = await driver.findElement(By.xpath('//li//span[@class="checked"]'))
    expect(movieCheck).toBeTruthy()
}

test('Checked Off', async () => {
    await checkedMovie(driver)
    await driver.sleep(3000)
})
