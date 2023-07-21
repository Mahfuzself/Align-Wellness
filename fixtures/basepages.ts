import LoginPage from '@pages/Login.page';
import { test as baseTest } from '@playwright/test';
import usemanagementPage from '@pages/usermanagement.page'
import EventsPage from '@pages/Events.page';
import companyPage from '@pages/company.page';
const test = baseTest.extend<{
    loginPage: LoginPage;
    usermanagementPage : usemanagementPage;
    eventsPage : EventsPage;
    clientsPage : companyPage;
    employeeuserPage : companyPage;
}>(
    {
        loginPage: async ({page }, use) => {
                    await use(new LoginPage(page));
                },
                usermanagementPage : async({page},use) =>{
                    await use (new usemanagementPage(page))
                },
                eventsPage : async({page},use) =>{
                    await use (new EventsPage(page))
                },
                clientsPage : async({page},use) =>{
                    await use (new companyPage(page))
                },
                employeeuserPage : async({page},use) =>{
                    await use (new companyPage(page))
                },
            },
)
// const test = baseTest.extend<{
//     loginPage: LoginPage;


// }>({
//     // functions: async ({ page }, use) => {
//     //     await use(new functions(page));
//     // }
//     // testData: async ({ page }, use) => {
//     //     await use(new testData(page));
//     // },
//     loginPage: async ({page }, use) => {
//         await use(new LoginPage(page));
//     }

//     // MainMenu: async ({ page }, use) => {
//     //     await use(new MobileDesign(page));
//     // },

//     // languagePage: async ({ page }, use) => {
//     //     await use(new languagePage(page));
//     // },

//     // menuPage: async ({ page }, use) => {
//     //     await use(new menuPage(page));
//     // },

//     // singupPage: async ({ page }, use) => {
//     //     await use(new singupPage(page));
//     // },

//     // globalPrizingPage: async ({ page }, use) => {
//     //     await use(new globalPrizingPage(page));
//     // },
//     // tugOfWarPage: async ({ page }, use) => {
//     //     await use(new tugOfWarPage(page));
//     // },
//     // prizeDropPage: async ({ page }, use) => {
//     //     await use(new prizeDropPage(page));
//     // },

//     // liveWallPage: async ({ page }, use) => {
//     //     await use(new liveWallPage(page));
//     // },
//     // arcadePage: async ({ page }, use) => {
//     //     await use(new arcadePage(page))
//     // },
//     // addnewexperiencePage: async ({ page }, use) => {
//     //     await use(new addnewexperiencePage(page));
//     // },

//     // triviaPage: async ({ page }, use) => {
//     //     await use(new triviaPage(page));
//     // },
//     // guesstheScorePage: async ({ page }, use) => {
//     //     await use(new guesstheScorePage(page));
//     // },
//     // fanSeeWallPage: async ({ page }, use) => {
//     //     await use(new fanSeeWallPage(page));
//     // },

//     // BaseFunctions: async ({ page }, use) => {
//     //     await use(new BaseFunctions(page));
//     // },
//     // fanaticsFilterPage: async ({ page }, use) => {
//     //     await use(new fanaticsFilterPage((page)))
//     // },

//     // fanSeeWallMobilePage: async ({ page }, use) => {
//     //     await use(new fanSeeWallMobilePage((page)))
//     // },
//     // mobilePreviewPage: async ({ page }, use) => {
//     //     await use(new mobilePreviewPage((page)))
//     // },
//     // userManagementPage: async ({ page }, use) => {
//     //     await use(new userManagementPage((page)))
//     // }


// })
export default test;
export const expect = test.expect;