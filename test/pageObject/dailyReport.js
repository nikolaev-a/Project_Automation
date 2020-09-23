import dailyReportData from '../data/dailyReportData';
import utils from '../helpers/utils';
import userProfilePage from './userProfilePage';

class DailyReport {
  get createDayReportText() {
    return $('//div[@class="ant-drawer-title"]');
  }

  get marksToYourDailyReportText() {
    return $('h6');
  }

  get allCheckbox() {
    return $$('.ant-checkbox-input');
  }

  get iNeedHelpCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"I need help")]');
  }

  get iUnderstoodEverythingCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"I understood everything")]',
    );
  }

  get helpedClassmatesCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Helped classmates")]');
  }

  get watchedLecturesCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Watched lectures")]');
  }

  get readDocumentationCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Read documentation")]');
  }

  get codePracticeCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Code practice")]');
  }
  get quizPracticeCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Quiz practice")]');
  }
  get interviewPreparationCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Interview preparation")]',
    );
  }

  get recruiterPhoneCallCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Recruiter phone call")]',
    );
  }

  get interviewTechnicalScreenCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Interview technical screen")]',
    );
  }

  get interviewOnsiteCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Interview onsite")]');
  }

  get gotAJobOfferCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Got a job offer")]');
  }

  get moraleList() {
    return $('#morale');
  }

  get itemContentMorale() {
    return $$('.ant-select-item.ant-select-item-option')[2];
  }
  get randomItemContentMorale() {
    return $$('.ant-select-item.ant-select-item-option');
  }

  get hoursList() {
    return $('#hours');
  }

  get randomItemContentHours() {
    let numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return $$(
      `//div[@class="ant-select-item-option-content"][contains(text(),"${utils.randomNumber(
        numSet,
      )}")]`,
    )[1];
  }

  get itemContentHours() {
    return $$('//div[@class="ant-select-item-option-content"][contains(text(),"3")]')[1];
  }

  get dayDescription() {
    return $('#description');
  }

  get dayDescriptionText() {
    return $('.ant-row.mb-4');
  }

  get submitBtn() {
    return $('[type="submit"]');
  }

  createDayReport() {
    const arr = this.allCheckbox;
    arr.forEach(el => el.click());
    this.moraleList.click();
    this.itemContentMorale.click();
    this.hoursList.click();
    this.itemContentHours.click();
    this.dayDescription.setValue(dailyReportData.charSet);
    utils.click(this.submitBtn);
  }

  createRandomDayReport() {
    this.allCheckbox[utils.randomNumber(this.allCheckbox)].click();
    browser.pause(4000);
    this.moraleList.click();
    this.randomItemContentMorale[utils.randomNumber(this.itemContentMorale)].click();
    this.hoursList.click();
    this.randomItemContentHours.click();
    this.dayDescription.setValue(utils.randomTextElement(dailyReportData.charSet));
    utils.click(this.submitBtn);
    utils.waitForDisplayed(userProfilePage.dailyReports);
  }
}

export default new DailyReport();
