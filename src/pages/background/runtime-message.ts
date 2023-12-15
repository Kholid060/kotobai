import RuntimeMessage from '@root/src/utils/RuntimeMessage';
import bookmarkDb from '@root/src/shared/db/bookmark.db';
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
  ({ id, type, value }) => {
    const bookmarkId = { id, type };

    if (value) {
      return bookmarkDb.addBookmark({ id: bookmarkId, type });
    }

    return bookmarkDb.deleteBookmark(bookmarkId);
  },
);
RuntimeMessage.onMessage('background:bookmark-get', (id) =>
  bookmarkDb.items.get(id),
);
