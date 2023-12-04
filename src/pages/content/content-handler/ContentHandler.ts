import { debounce } from '@root/src/utils/helper';
import RuntimeMessage, {
  WordFrameSource,
} from '@root/src/utils/RuntimeMessage';
import EventEmitter from 'eventemitter3';
import { SearchDictWordResult } from '../../background/messageHandler/dictWordSearcher';
import TextHighlighter from './TextHighlighter';
import TextSearcher, { CursorPoint } from './TextSearcher';
import { isInMainFrame } from './content-handler-utils';
import { ClientRect } from '@root/src/interface/shared.interface';

const MAX_CONTENT_LENGTH = 16;

interface SearchWordResult {
  rect?: ClientRect;
  point: CursorPoint;
  entry: SearchDictWordResult;
}

interface Events {
  'search-word-result': (
    result: (SearchWordResult & { frameSource?: WordFrameSource }) | null,
  ) => void;
}

export const contentEventEmitter = new EventEmitter<Events>();

class ContentHandler {
  private isPointerDown = false;
  private isMainFrame = isInMainFrame();

  private textSearcher = new TextSearcher();
  private textHighlighter = new TextHighlighter();

  constructor() {
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = debounce(this.onPointerMove.bind(this), 100);

    this.attachListeners();
  }

  private attachListeners() {
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
  }

  private detachListeners() {
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
  }

  private onPointerDown() {
    this.isPointerDown = true;
  }

  private onPointerUp() {
    this.isPointerDown = false;
  }

  private onPointerMove(event: PointerEvent) {
    if (this.isPointerDown) return;

    const cursorPoint = { x: event.clientX, y: event.clientY };
    const result = this.textSearcher.getTextByPoint({
      point: cursorPoint,
      maxLength: MAX_CONTENT_LENGTH,
      element: <Element>event.target,
    });
    if (!result) {
      contentEventEmitter.emit('search-word-result', null);
      this.textHighlighter.clearHighlight();
      return;
    }

    let frameSource: WordFrameSource | undefined;
    if (!this.isMainFrame) {
      frameSource = {
        point: cursorPoint,
        frameURL: window.location.href,
        rect: window.frameElement?.getBoundingClientRect(),
      };

      if (result.rect) {
        frameSource.point.x = result.rect.right;
        frameSource.point.y = result.rect.bottom;
      }
    }

    const messageKey = this.isMainFrame
      ? 'background:search-word'
      : 'background:search-word-iframe';

    RuntimeMessage.sendMessage(messageKey, {
      frameSource,
      input: result.text,
    })
      .then((searchResult) => {
        if (searchResult) {
          this.textHighlighter.highlighText({
            textRange: result.textRange,
            cursorOffset: result.cursorOffset,
            matchLength: searchResult.maxLength,
          });
        } else {
          this.textHighlighter.clearHighlight();
        }

        if (!this.isMainFrame) return;

        contentEventEmitter.emit('search-word-result', {
          rect: result.rect,
          point: cursorPoint,
          entry: searchResult,
        });
      })
      .catch((error) => {
        console.error(error);
        contentEventEmitter.emit('search-word-result', null);
      });
  }

  destroy() {
    this.detachListeners();
    contentEventEmitter.removeAllListeners();
  }
}

export default ContentHandler;
