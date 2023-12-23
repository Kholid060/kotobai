import RuntimeMessage from '@root/src/utils/RuntimeMessage';
import bookmarkDB from '@root/src/shared/db/bookmark.db';
import { IS_FIREFOX } from '@root/src/shared/constant/constant';
import disableExtBadge from '@root/src/utils/disableExtBadge';
import {
  dictKanjiSearcher,
  dictKanjiVgSearcher,
} from './messageHandler/dictKanjiSearcher';
import { dictNameSearcher } from './messageHandler/dictNameSearcher';
import dictWordSearcher from './messageHandler/dictWordSearcher';

RuntimeMessage.onMessage('background:search-name', dictNameSearcher());
RuntimeMessage.onMessage('background:search-word', dictWordSearcher());
RuntimeMessage.onMessage('background:search-kanji', dictKanjiSearcher);
RuntimeMessage.onMessage('background:search-kanjivg', dictKanjiVgSearcher);
RuntimeMessage.onMessage(
  'background:search-word-iframe',
  dictWordSearcher(true),
);
RuntimeMessage.onMessage('background:set-disabled-badge', ({ tab }) => {
  if (!tab?.id) return;

  const payload: { tabId: number; windowId?: number } = { tabId: tab.id };
  if (IS_FIREFOX) payload.windowId = tab.windowId;

  disableExtBadge.set(payload);
});

RuntimeMessage.onMessage(
  'background:bookmark-toggle',
  async (payload, value) => {
    if (value) await bookmarkDB.addBookmark(payload);
    else await bookmarkDB.removeBookmarks(payload);
  },
);
RuntimeMessage.onMessage('background:bookmark-get', async (id, boolean) => {
  const result = await bookmarkDB.getBookmarks(id);
  if (typeof boolean === 'boolean' && boolean) return Boolean(result[0]);

  return result;
});
