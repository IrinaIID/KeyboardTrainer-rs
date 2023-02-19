import { Dispatch, useState } from 'react';
import LangSwitch, { langsData } from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import { LANG_VALUES, THEME_VALUES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { RiSettings2Fill } from 'react-icons/ri';
import styles from './Settings.module.scss';
import { AnyAction } from '@reduxjs/toolkit';

export interface SettingsProps {
  dispatch: Dispatch<AnyAction>,
  lang: string,
  theme: string,
}

export function Settings() {
  const [show, setShow] = useState(false);
  const { dispatch, isRu, isLight } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const theme = isLight ? THEME_VALUES.light : THEME_VALUES.dark;
  const active = show ? styles.active : '';

  return (
    <div className={styles.Settings}>
      <div className={styles.buttonWrap}>
        <button type="button" className={`${styles.btn} ${active}`} onClick={() => setShow(!show)}>
          <RiSettings2Fill className={styles.buttonIcon} />
          {`${langsData[lang].menuSettings.settingsBtn}`}
        </button>
      </div>
      <div className={`${styles.menu} ${active}`}>
        <LangSwitch {...{ dispatch, theme, lang }} />
        <ThemeSwitch {...{ dispatch, theme, lang }} />
      </div>
    </div>
  );
}
