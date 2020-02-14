import React from 'react';
import {
    _setIntlObject,
    addLocaleData,
    IntlProvider,
    intlShape,
    LangContext,
    _setLocaleContext
} from 'umi-plugin-locale/lib/locale';

const InjectedWrapper = (() => {
    let sfc = (props, context) => {
        _setIntlObject(context.intl);
        return props.children;
    };
    sfc.contextTypes = {
        intl: intlShape
    };
    return sfc;
})();

import 'moment/locale/vi';

const baseSeparator = '-';
const useLocalStorage = true;

import { LocaleProvider, version } from 'antd';
import 'moment/locale/vi';

let defaultAntd = require('antd/lib/locale-provider/en_US');
defaultAntd = defaultAntd.default || defaultAntd;

const localeInfo = {
    'en-US': {
        messages: {
            ...(locale => (locale.__esModule ? locale.default : locale))(
                require('./../../locales/en-US')
            ),
            ...(locale => (locale.__esModule ? locale.default : locale))(
                require('./../Login/locales/en-US')
            ),
        },
        locale: 'en-US',
        antd: require('antd/lib/locale-provider/en_US'),
        data: require('@formatjs/intl-pluralrules/dist/locale-data/en'),
        momentLocale: 'en-us'
    },
    'vi-VN': {
        messages: {
            ...(locale => (locale.__esModule ? locale.default : locale))(
                require('./../../locales/vi-VN')
            ),
            ...(locale => (locale.__esModule ? locale.default : locale))(
                require('./../Login/locales/vi-VN')
            ),
        },
        locale: 'en',
        antd: require('antd/lib/locale-provider/vi_VN'),
        data: require('@formatjs/intl-pluralrules/dist/locale-data/vi'),
        momentLocale: 'vi-vn'
    },
};

class LocaleWrapper extends React.Component {
    state = {
        locale: 'en'
    };
    getAppLocale() {
        let appLocale = {
            locale: 'en-US',
            messages: {},
            data: require('@formatjs/intl-pluralrules/dist/locale-data/en'),
            momentLocale: 'en-us'
        };
  
        if (
            useLocalStorage &&
            typeof localStorage !== 'undefined' &&
            localStorage.getItem('umi_locale') &&
            localeInfo[localStorage.getItem('umi_locale')]
        ) {
            appLocale = localeInfo[localStorage.getItem('umi_locale')];
        } else {
            appLocale = localeInfo['en-US'] || appLocale;
        }
        window.g_lang = appLocale.locale;
        window.g_langSeparator = baseSeparator || '-';
        appLocale.data && addLocaleData(appLocale.data);

        return appLocale;
    }
    reloadAppLocale = () => {
        const appLocale = this.getAppLocale();
        this.setState({
            locale: appLocale.locale
        });
    };

    render() {
        const appLocale = this.getAppLocale();
        // react-intl must use `-` separator
        const reactIntlLocale = appLocale.locale.split(baseSeparator).join('-');
        const LangContextValue = {
            locale: reactIntlLocale,
            reloadAppLocale: this.reloadAppLocale
        };
        let ret = this.props.children;
        ret = (
            <IntlProvider
                locale={reactIntlLocale}
                messages={appLocale.messages}
            >
                <InjectedWrapper>
                    <LangContext.Provider value={LangContextValue}>
                        <LangContext.Consumer>
                            {value => {
                                _setLocaleContext(value);
                                return this.props.children;
                            }}
                        </LangContext.Consumer>
                    </LangContext.Provider>
                </InjectedWrapper>
            </IntlProvider>
        );
        // avoid antd ConfigProvider not found
        let AntdProvider = LocaleProvider;
        const [major, minor] = `${version || ''}`.split('.');
        // antd 3.21.0 use ConfigProvider not LocaleProvider
        const isConfigProvider =
            Number(major) > 3 || (Number(major) >= 3 && Number(minor) >= 21);
        if (isConfigProvider) {
            try {
                AntdProvider = require('antd/lib/config-provider').default;
            } catch (e) {}
        }

        return (
            <AntdProvider
                locale={
                    appLocale.antd
                        ? appLocale.antd.default || appLocale.antd
                        : defaultAntd
                }
            >
                {ret}
            </AntdProvider>
        );
        return ret;
    }
}
export default LocaleWrapper;
