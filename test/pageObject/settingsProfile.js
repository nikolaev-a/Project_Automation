import baseSettingsPage from './baseSettingsPage';
import Utils from '../helpers/utils';
import { randomUser } from '../data/userData';
import dailyReportData from '../data/dailyReportData';
import utils from '../helpers/utils';

class SettingsProfile extends baseSettingsPage {
  get settingsProfileFirstName() {
    return $('[id="editProfile_firstName"]');
  }
  get settingsProfileLastName() {
    return $('[id="editProfile_lastName"]');
  }
  get settingsProfilePhone() {
    return $('[id="editProfile_phone"]');
  }
  get settingsProfileAbout() {
    return $('[id="editProfile_about"]');
  }
  get settingsProfileMyGoals() {
    return $('[id="editProfile_goals"]');
  }
  get settingsProfileCountry() {
    return $('[data-qa="countries"]');
  }
  get settingsProfileCountryRandom() {
    return $$('.ant-select-item-option-content');
  }

  get settingsProfileEnglishLevel() {
    return $('[data-qa="englishLevel"]');
  }
  get settingsProfileEnglashLevelAdvance() {
    return $('//div[@class="ant-select-item-option-content"][contains(text(),"Advanced")]');
  }
  get settingsProfileEnglistLevelC() {
    return $('(//span[@class="ant-select-selection-item"])[2]').getAttribute('title');
  }

  get settingsProfileTshirtSize() {
    return $('[data-qa="tShirtSize"]');
  }

  get settingsProfileMenUnisexM() {
    return $('//div[@class="ant-select-item-option-content"][contains(text(),"Men/Unisex - M")]');
  }

  get settingsProfileSaveBtn() {
    return $('[type="submit"]');
  }

  userSettingsProfileInput() {
    Utils.fieldEmptyfier(this.settingsProfilePhone);
    Utils.setValue(this.settingsProfilePhone, randomUser.phoneNumber);
    Utils.setValue(this.settingsProfileAbout, Utils.randomTextElement(dailyReportData.charSet));
    Utils.setValue(this.settingsProfileMyGoals, Utils.randomTextElement(dailyReportData.charSet));
    Utils.click(this.settingsProfileCountry);
    Utils.click(this.settingsProfileCountryRandom[utils.randomNumber(this.settingsProfileCountryRandom)]);
    Utils.click(this.settingsProfileEnglishLevel);
    Utils.click(this.settingsProfileEnglashLevelAdvance);
    Utils.click(this.settingsProfileTshirtSize);
    Utils.click(this.settingsProfileMenUnisexM);
    Utils.click(this.settingsProfileSaveBtn);
  }
}

export default new SettingsProfile();