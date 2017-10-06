/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const {StyleSheet, css} = require('aphrodite')
const privateTabIcon = require('../../app/extensions/brave/img/newtab/private_tab_pagearea_icon.svg')
const globalStyles = require('../../app/renderer/components/styles/global')
const { theme } = require('../../app/renderer/components/styles/theme')
const {SettingCheckbox} = require('../../app/renderer/components/common/settings')
const settings = require('../constants/settings')
const Stats = require('./newTabComponents/stats')
const Clock = require('./newTabComponents/clock')
const aboutActions = require('./aboutActions')

// TODO: remove it once we use Aphrodite on stats and clock components
require('../../less/about/newtab.less')

const useAlternativePrivateSearchEngineDataKeys = ['newTabDetail', 'useAlternativePrivateSearchEngine']

class NewPrivateTab extends React.Component {
  onChangePrivateSearch (e) {
    aboutActions.changeSetting(settings.USE_ALTERNATIVE_PRIVATE_SEARCH_ENGINE, e.target.value)
  }

  render () {
    if (!this.props.newTabData) {
      return null
    }
    return <div data-test-id='privateTabContent' className={css(styles.newPrivateTab)}>
      <div className='statsBar'>
        <Stats newTabData={this.props.newTabData} />
        <Clock />
      </div>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.lionImage)} />
        <div className={css(styles.textWrapper)}>
          <h1 className={css(styles.title)} data-l10n-id='privateTabTitle' />
          <p className={css(styles.text)} data-l10n-id='privateTabText1' />
          <p className={css(styles.text)} data-l10n-id='privateTabText2' />
          <p className={css(styles.text, styles.italic)} data-l10n-id='privateTabText3' />
          <h2 className={css(styles.sectionTitle)} data-l10n-id='privateTabSearchSectionTitle' />
          <p className={css(styles.text)} data-l10n-id='privateTabSearchText1' />
          {
            this.props.newTabData.hasIn(useAlternativePrivateSearchEngineDataKeys) &&
            <SettingCheckbox
              dataL10nId='useDuckDuckGoForPrivateSearch'
              checked={Boolean(this.props.newTabData.getIn(useAlternativePrivateSearchEngineDataKeys))}
              onChange={this.onChangePrivateSearch.bind(this)}
              rightLabelClassName={css(styles.newPrivateTab__switch__label)}
            />
          }
        </div>
      </div>
    </div>
  }
}

const atBreakpoint = `@media screen and (max-width: ${globalStyles.breakpoint.breakpointNewPrivateTab})`
const styles = StyleSheet.create({
  newPrivateTab: {
    background: `linear-gradient(
      ${theme.frame.privateTabBackground},
      ${theme.frame.privateTabBackground2}
    )`,
    backgroundAttachment: 'fixed',
    // fade in from the new tab background color
    animationName: {
      '0%': {
        opacity: '0'
      },
      '100%': {
        opacity: '1'
      }
    },
    animationDuration: `0.35s`,
    animationTiming: 'ease-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100%',
    height: 'initial',
    padding: '40px 60px' // same as newtab
  },

  wrapper: {
    display: 'flex',
    alignSelf: 'center',
    maxWidth: '780px',
    padding: `${globalStyles.spacing.privateTabPaddingHorizontal} 0`,

    [atBreakpoint]: {
      flexDirection: 'column'
    }
  },

  textWrapper: {
    padding: `14px ${globalStyles.spacing.privateTabPadding}`,

    [atBreakpoint]: {
      padding: '14px 0',
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column'
    }
  },

  lionImage: {
    backgroundImage: `url(${privateTabIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'contain',
    minWidth: '80px',
    minHeight: '100px',

    [atBreakpoint]: {
      alignSelf: 'center'
    }
  },

  title: {
    color: globalStyles.color.white100,
    fontSize: '30px',
    marginBottom: globalStyles.spacing.privateTabPaddingHorizontal
  },

  sectionTitle: {
    color: globalStyles.color.white100,
    fontSize: '24px',
    marginBottom: globalStyles.spacing.privateTabPaddingHorizontal
  },

  text: {
    paddingBottom: globalStyles.spacing.privateTabPaddingHorizontal,
    lineHeight: '1.5',
    fontSize: '17px',
    color: globalStyles.color.alphaWhite
  },

  italic: {
    fontStyle: 'italic'
  },

  newPrivateTab__switch__label: {
    color: globalStyles.color.alphaWhite
  }
})

module.exports = NewPrivateTab
