module.exports = {
  minimizeButton: '[data-test-id="minimizeButton"]',
  maximizeButton: '[data-test-id="maximizeButton"]',
  closeButton: '[data-test-id="closeButton"]',
  urlInput: '[data-test-id="urlInput"]',
  activeWebview: '[data-test2-id="activeFrame"] webview',
  activeTab: '[data-test-active-tab]',
  activeTabTitle: '[data-test-active-tab] [data-test-id="tabTitle"]',
  activeTabFavicon: '[data-test-active-tab] [data-test-favicon]',
  pinnedTabs: '[data-test-id="pinnedTabs"]',
  pinnedTabsTabs: '[data-test-id="pinnedTabs"] [data-test-id="tab"]',
  tabs: '[data-test-id="tabs"]',
  tabsTabs: '[data-test-id="tabs"] [data-test-id="tab"]',
  newTabButton: '[data-test-id="tabs"] [data-test-id="newTabButton"]',
  tabPage: '[data-test-id="tabPage"]',
  tabPage1: '[data-test-tab-page="0"]',
  tabPage2: '[data-test-tab-page="1"]',
  closeTab: '[data-test-id="closeTabIcon"]',
  urlbarIcon: '[data-test-id="urlBarIcon"]',
  urlBarSuggestions: '[data-test-id="urlBarSuggestions"]',
  titleBar: '[data-test-id="titleBar"]',
  navigator: '[data-test-id="navigator"]',
  navigatorLoadTime: '[data-test-id="navigator"] [data-test-id="loadTime"]',
  navigatorBookmarked: '[data-test-id="navigator"] [data-test-id="removeBookmarkButton"]',
  navigatorNotBookmarked: '[data-test-id="navigator"] [data-test-id="addBookmarkButton"]',
  bookmarkHangerDoneButton: '[data-test-id="bookmarkHangerDoneButton"]',
  bookmarkHangerDoneButtonDisabled: '[data-test-id="bookmarkHangerDoneButtonDisabled"]',
  bookmarkHangerRemoveButton: '[data-test-id="bookmarkHangerRemoveButton"]',
  bookmarksToolbar: '[data-test-id="bookmarksToolbar"]',
  bookmarkNameInput: '[data-test-id="bookmarkNameInput"]',
  bookmarkLocationInput: '[data-test-id="bookmarkLocationInput"]',
  notificationBar: '[data-test-id="notificationBar"]',
  notificationItem: '[data-test-id="notificationItem"]',
  errorContent: '[data-test-id="errorContent"]',
  errorUrl: '[data-test-id="errorUrl"]',
  errorText: '[data-test-id="errorText"]',
  braveMenu: '[data-test-id="braveMenu"]',
  braveMenuDisabled: '[data-test-id="braveMenuDisabled"]',

  // findBar
  findBar: '[data-test-id="findBar"]',
  findBarInput: '[data-test-id="findBarInput"]',
  findBarMatches: '[data-test-id="foundResults"]',
  findBarMatchCase: '[data-test-id="caseSensitivityCheckbox"]',
  findBarNextButton: '[data-test-id="findBarNextButton"]',
  findBarPrevButton: '[data-test-id="findBarPrevButton"]',
  findBarClearButton: '[data-test-id="findBarClearButton"]',

  // braveryPanelTest.js
  braveryPanel: '[data-test-id="braveryPanel"]',
  braveryPanelCompact: '[data-test-id="braveryPanelCompact"]',
  adsBlockedStat: '[data-test-id="adsBlockedStat"]',
  httpsEverywhereStat: '[data-test-id="redirectedResourcesStat"]',
  noScriptStat: '[data-test-id="noScriptStat"]',
  fpStat: '[data-test-id="fpStat"]',
  adsBlockedControl: '[data-test-id="adsBlockedControl"]',
  showAdsOption: '[data-test-id="showAdsOption"]',
  blockAdsOption: '[data-test-id="blockAdsOption"]',
  noScriptSwitch: '[data-test-id="noScriptSwitch"] [data-test-id="switchMiddle"]',
  fpControl: '[data-test-id="fpControl"]',
  blockFpOption: '[data-test-id="blockAllFingerprinting"]',
  allowFpOption: '[data-test-id="allowAllFingerprinting"]',
  defaultFpOption: '[data-test-id="block3rdPartyFingerprinting"]',
  cookieControl: '[data-test-id="cookieControl"]',
  allowAllCookiesOption: '[data-test-id="allowAllCookies"]',
  blockAllCookiesOption: '[data-test-id="blockAllCookies"]',

  braveryPanelContainer: '[data-test-id="braveryPanelContainer"]',
  httpsEverywhereSwitch: '[data-test-id="httpsEverywhereSwitch"] [data-test-id="switchMiddle"]',
  safeBrowsingSwitch: '[data-test-id="safeBrowsingSwitch"] [data-test-id="switchMiddle"]',
  noScriptNavButton: '[data-test-id="noScriptButton"]',
  noScriptInfo: '[data-test-id="noScriptInfo"]',
  noScriptAllowTempButton: '[data-test-id="allowScriptsTemp"]',
  noScriptAllowOnceButton: '[data-test-id="allowScriptsOnce"]',

  backButtonEnabled: '[data-test-id="backButtonEnabled"]',
  backButtonDisabled: '[data-test-id="backButtonDisabled"]',
  forwardButtonEnabled: '[data-test-id="forwardButtonEnabled"]',
  forwardButtonDisabled: '[data-test-id="forwardButtonDisabled"]',

  reloadButton: '[data-test-id="reloadButton"]',
  homeButton: '[data-test-id="homeButton"]',
  clearBrowsingDataButton: '[data-test-id="clearBrowsingDataButton"]',
  clearBrowsingDataPanel: '[data-test-id="clearBrowsingDataPanel"]',
  clearDataButton: '[data-test-id="clearDataButton"]',
  securityTab: '[data-test-id="securityTabButton"]',
  paymentsTab: '[data-test-id="paymentsTabButton"]',
  syncTab: '[data-test-id="syncTabButton"]',
  tabsTab: '[data-test-id="tabsTabButton"]',
  nextButton: '[data-test-id="nextButton"]',
  previousButton: '[data-test-id="previousButton"]',
  doneButton: '[data-test-id="doneButton"]',
  homepageInput: '[data-test-id="homepageInput"]',
  compactBraveryPanelSwitch: '[data-test-id="compactBraveryPanelSwitch"] [data-test-id="switchBackground"]',
  syncSwitch: '[data-test-id="syncContainer"] [data-test-id="switchBackground"]',
  walletSwitch: '[data-test-id="enablePaymentsSwitch"] [data-test-id="switchBackground"]',
  addFundsButton: '[data-test2-id="addFunds"]',
  addFundsDialog: '[data-test-id="addFundsDialog"]',
  addFundsWizard: '[data-test-id="addFundsWizardMain"]',
  addFundsWelcome: '[data-test-id="batWelcomeScreen"]',
  fundsSelectBox: '[data-test-id="fundsSelectBox"]',
  paymentsStatus: '[data-test-id="walletStatus"]',
  siteSettingItem: '[data-test-id="siteSettingItem"]',
  ledgerTable: '[data-test-id="ledgerTable"]',
  bitcoinDashboard: '[data-test-id="bitcoinDashboard"]',
  advancedSettingsDialog: '[data-test-id="advancedSettings"]',
  advancedSettingsButton: '[data-test-id="advancedSettingsButton"]',
  backupWallet: '[data-test-id="backupLedgerButton"]',
  recoverWallet: '[data-test-id="recoverLedgerButton"]',
  recoverWalletFromFileButton: '[data-test-id="recoverFromFileButton"]',
  recoveryOverlayOkButton: '[data-test-id="recoveryOverlayOkButton"]',
  saveWalletFile: '[data-test-id="saveRecoveryFileButton"]',
  balanceRecovered: '[data-test-id="balanceRecoveredMessage"]',
  balanceNotRecovered: '[data-test-id="ledgerRecoveryFailedMessage"]',
  modalOverlay: '[data-test-id="modalOverlay"]',
  modalOverlayCloseButton: '[data-test-id="modalCloseButton"]',
  paymentHistoryButton: '[data-test-id="paymentHistoryButton"]',
  paymentsWelcomePage: '[data-test-id="paymentsMessage"]',
  autofillAddressPanel: '[data-test-id="autofillAddressPanel"]',
  autofillCreditCardPanel: '[data-test-id="autofillCreditCardPanel"]',
  allowRunInsecureContentButton: '[data-test-id="allowRunInsecureContentButton"]',
  dismissAllowRunInsecureContentButton: '[data-test-id="dismissAllowRunInsecureContentButton"]',
  denyRunInsecureContentButton: '[data-test-id="denyRunInsecureContentButton"]',
  dismissDenyRunInsecureContentButton: '[data-test-id="dismissDenyRunInsecureContentButton"]',
  tabsToolbar: '[data-test-id="tabsToolbar"]',
  hamburgerMenu: '[data-test-id="menuButton"]',
  customFiltersInput: '[data-test-id="customFiltersInput"]',
  showAllLedger: '[data-test-id="showAll"]',

  // Context menu
  contextMenu: '[data-test-id="contextMenu"]',
  contextMenuItem: '[data-test-id="contextMenuItem"]',
  contextMenuItemText: '[data-test-id="contextMenuItemText"]',

  // used by the MessageBox control
  msgBoxSuppress: '[data-test-id^="msgBoxTab_"] [data-test-id="switchMiddle"]',
  msgBoxSuppressTrue: '[data-test-id^="msgBoxTab_"] [data-test-id="switchMiddle"] [data-test2-id="switchedOn"]',
  msgBoxMessage: '[data-test-id="msgBoxMessage"]',
  msgBoxTitle: '[data-test-id="msgBoxTitle"]',

  // download
  downloadBar: '[data-test-id="downloadsBar"]',
  downloadItem: '[data-test-id="downloadItem"]',
  downloadPause: '[data-test-id="pauseButton"]',
  downloadResume: '[data-test-id="resumeButton"]',
  downloadCancel: '[data-test-id="cancelButton"]',
  downloadComplete: '[data-test-id="downloadItem"][data-test2-id="completed"]',
  downloadReDownload: '[data-test-id="redownloadButton"]',
  downloadDelete: '[data-test-id="deleteButton"]',
  downloadDeleteConfirm: '[data-test-id="confirmDeleteButton"]',
  downloadRemoveFromList: '[data-test-id="downloadRemoveFromList"]',

  siteInfoDialog: '[data-test-id="siteInfoDialog"]',
  viewCertificateButton: '[data-test-id="viewCertificate"]',

  // about:preferences#tabs
  tabsPerTabPageActiveOption: '[data-test-id="tabsPerTabPageOption"][data-test-active="true"]',
  tabCloseActionActiveOption: '[data-test-id="tabCloseActionActiveOption"][data-test-active="true"]',
  tabPreviewTimingActiveOption: '[data-test-id="tabPreviewTimingOption"][data-test-active="true"]'
}
