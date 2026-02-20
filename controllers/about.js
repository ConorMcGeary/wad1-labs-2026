'use strict';

import logger from '../utils/logger.js';
import appStore from '../models/app-store.js';
import employeeStore from '../models/employee.js';

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    const appInfo = appStore.getAppInfo();
    const employee = employeeStore.getAppInfo();
    response.render('about', { title: 'About', appInfo: appInfo, employee: employee });
  },
};

export default about;