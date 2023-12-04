import { CursorOffset } from './caretPositionFromPoint';
import { NodeTypeChecker } from './content-handler-utils';
import { TextRange } from './extract-text-content';

interface HighlighterParam {
  matchLength: number;
  documentCtx: Document;
  textRange: TextRange[];
  cursorOffset: CursorOffset;
}

type PrevSelection =
  | null
  | {
      end: number;
      type: 'input';
      start: number;
      el: HTMLInputElement;
      dir: 'forward' | 'backward' | 'none';
    }
  | {
      end: number;
      type: 'node';
      start: number;
      endNode: Node;
      startNode: Node;
    };
class TextHighlighter {
  private selectedText: string;
  private prevSelection: PrevSelection;
  private prevFocusEl: Element | HTMLElement | null;
  private highlightedNode: Node | Element | HTMLElement | null;

  constructor() {
    this.selectedText = '';
    this.prevFocusEl = null;
    this.prevSelection = null;
    this.highlightedNode = null;
  }

  highlighText({
    textRange,
    matchLength,
    cursorOffset,
  }: {
    matchLength: number;
    textRange: TextRange[];
    cursorOffset: CursorOffset;
  }) {
    const documentCtx = cursorOffset.offsetNode.ownerDocument;
    if (!documentCtx || NodeTypeChecker.isImage(cursorOffset.offsetNode))
      return;

    this.storeCurrSelection();

    const highlighterPayload = {
      textRange,
      matchLength,
      documentCtx,
      cursorOffset,
    };

    if (NodeTypeChecker.isInput(cursorOffset.offsetNode)) {
      this.inputHighlighter(highlighterPayload);
    } else {
      this.nodeHighlighter(highlighterPayload);
    }

    this.highlightedNode = cursorOffset.offsetNode;
  }

  private inputHighlighter({
    textRange,
    matchLength,
    cursorOffset,
  }: HighlighterParam) {
    if (!this.prevFocusEl) this.prevFocusEl = document.activeElement;

    const [firstRange] = textRange;
    const el = cursorOffset.offsetNode as HTMLInputElement;

    const startOffset = firstRange.start;
    const endOffset = firstRange.start + matchLength;

    el.focus();
    el.setSelectionRange(startOffset, endOffset);

    this.selectedText = el.value.slice(startOffset, endOffset);
  }

  private nodeHighlighter({
    textRange,
    matchLength,
    documentCtx,
  }: HighlighterParam) {
    const [firstRange] = textRange;
    if (!firstRange) return;

    const startNode = firstRange.node;
    const startOffset = firstRange.start;
    let endNode = startNode;
    let endOffset = firstRange.start + matchLength;

    let currentLength = 0;
    for (const item of textRange) {
      if (currentLength >= matchLength) break;

      const length = Math.min(
        item.end - item.start,
        matchLength - currentLength,
      );

      currentLength += length;

      endNode = item.node;
      endOffset = item.start + length;
    }

    if (!this.prevFocusEl) this.prevFocusEl = documentCtx.activeElement;

    const range = documentCtx.createRange();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);

    const selection = documentCtx.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    this.selectedText = selection.toString();
  }

  private storeCurrSelection() {
    if (this.prevSelection) return;

    const isInputFocus = NodeTypeChecker.isInput(document.activeElement);
    if (isInputFocus) {
      const { selectionStart, selectionEnd, selectionDirection } =
        document.activeElement as HTMLInputElement;
      if (selectionStart === selectionEnd) return;

      this.prevSelection = {
        type: 'input',
        end: selectionEnd,
        start: selectionStart,
        dir: selectionDirection,
        el: document.activeElement as HTMLInputElement,
      };
      return;
    }

    const selection = window.getSelection();
    if (
      this.selectedText ||
      !selection ||
      selection.type !== 'Range' ||
      selection.toString() === this.selectedText
    )
      return;

    this.prevSelection = {
      type: 'node',
      end: selection.focusOffset,
      endNode: selection.focusNode,
      start: selection.anchorOffset,
      startNode: selection.anchorNode,
    };

    console.log(this.prevSelection, ' aasasas');
  }

  private restorePrevSelection() {
    if (this.highlightedNode) {
      if ('blur' in this.highlightedNode) this.highlightedNode.blur();
      else if ('blur' in this.highlightedNode.parentElement) {
        this.highlightedNode.parentElement.blur();
      }
    }
    if (this.prevFocusEl && 'focus' in this.prevFocusEl) {
      this.prevFocusEl.focus();
    }

    if (!this.prevSelection) {
      const selection = window.getSelection();
      if (selection.toString() === this.selectedText) {
        selection.removeAllRanges();
      }

      return;
    }

    if (this.prevSelection.type === 'input') {
      const currentInput = <HTMLInputElement>document.activeElement;
      if (NodeTypeChecker.isInput(currentInput)) {
        currentInput.setSelectionRange(0, 0);
      }

      const { dir, el, end, start } = this.prevSelection;

      el.focus();
      el.setSelectionRange(start, end, dir);
    } else if (this.prevSelection.type === 'node') {
      const { end, start, endNode, startNode } = this.prevSelection;

      const range = new Range();
      range.setStart(endNode, end);
      range.setStart(startNode, start);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      console.log('restore', this.prevSelection);
    }
  }

  clearHighlight() {
    this.restorePrevSelection();

    this.selectedText = '';
    this.prevFocusEl = null;
    this.prevSelection = null;
    this.highlightedNode = null;
  }
}

export default TextHighlighter;