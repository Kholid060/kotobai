import { UiButton } from '@root/src/components/ui/button';
import ViewKanjiStrokes from '@root/src/components/view/ViewKanjiStrokes';
import ViewReadingKanji from '@root/src/components/view/ViewReadingKanji';
import ViewWordEntry from '@root/src/components/view/ViewWordEntry';
import {
  DictKanjiVGEntry,
  DictWordEntry,
} from '@root/src/interface/dict.interface';
import { DictionaryWordEntryResult } from '@root/src/pages/background/messageHandler/dictWordSearcher';
import { DICTIONARY_NAME } from '@root/src/shared/constant/constant';
import dictDB from '@root/src/shared/db/dict.db';
import { useSpeechSynthesis } from '@root/src/shared/hooks/useSpeechSynthesis';
import { Volume2Icon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
  Link,
} from 'react-router-dom';
import SharedBookmarkBtnMain from '@root/src/components/shared/SharedBookmarkBtn/Main';
import { isKanji } from 'wanakana';
import { useTitle } from '@root/src/shared/hooks/useTitle';

interface KanjiPath {
  paths: DictKanjiVGEntry;
  char: string;
  isKanji: boolean;
}

function WordStrokeOrderDiagrams({
  entry,
}: {
  entry: DictWordEntry | DictionaryWordEntryResult;
}) {
  const [kanjiPaths, setKanjiPaths] = useState<KanjiPath[]>([]);

  useEffect(() => {
    if (!entry?.kanji) return;

    let kanji = entry.kanji[0];
    if ('oriWord' in entry) {
      kanji =
        entry.kanji.find(
          (str) => str === entry.oriWord || str === entry.word,
        ) || kanji;
    }

    if (kanji) {
      const ids = kanji
        .split('')
        .map((char) => char.codePointAt(0)) as number[];
      dictDB.kanjivg.bulkGet(ids).then((items) => {
        const result = items.reduce<KanjiPath[]>((acc, paths) => {
          if (!paths) return acc;

          const char = String.fromCodePoint(paths.id);
          acc.push({
            char,
            paths,
            isKanji: isKanji(char),
          });

          return acc;
        }, []);

        setKanjiPaths(result);
      });
    }

    return () => {
      setKanjiPaths([]);
    };
  }, [entry]);

  if (!entry.kanji || kanjiPaths.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="font-semibold">Stroke Order Diagrams</p>
      <ul className="mt-2 space-y-2">
        {kanjiPaths?.map((kanjiEntry) => (
          <li key={kanjiEntry.paths.id} className="flex gap-2">
            {kanjiEntry.isKanji && (
              <Link
                to={`/kanji/${kanjiEntry.paths.id}`}
                className="flex flex-col items-center font-sans-jp text-5xl hover:bg-muted/50 transition-colors leading-none justify-center border rounded-lg px-5 flex-shrink-0"
              >
                {kanjiEntry.char}
              </Link>
            )}
            <ViewKanjiStrokes className="flex-grow" entry={kanjiEntry.paths} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function WordDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { entryId } = useParams();
  const [searchParams] = useSearchParams();
  const { isSpeechAvailable, speak } = useSpeechSynthesis();

  const { dictEntry } = location.state ?? {};

  const matchWord = useRef('');

  const [wordDetail, setWordDetail] = useState<
    DictWordEntry | DictionaryWordEntryResult | null
  >(null);

  useTitle(
    (matchWord.current || wordDetail?.kanji?.[0] || wordDetail?.reading[0]) ??
      '',
  );

  useEffect(() => {
    setWordDetail(dictEntry);
    if (dictEntry) {
      setWordDetail(dictEntry);
    } else if (entryId) {
      dictDB.words.get(+entryId).then((result) => {
        if (!result) {
          navigate('/');
          return;
        }

        setWordDetail(result);
      });
    }

    return () => {
      setWordDetail(null);
    };
  }, [dictEntry, entryId, navigate]);

  if (!wordDetail) return null;

  return (
    <>
      <div className="flex items-center">
        <ViewReadingKanji
          className="text-3xl flex-grow"
          onMatchWord={(match) => (matchWord.current = match)}
          entry={{ word: searchParams.get('word') ?? undefined, ...wordDetail }}
        />
        <SharedBookmarkBtnMain
          entry={{
            id: wordDetail.id,
            kanji: wordDetail.kanji,
            reading: wordDetail.reading,
            type: DICTIONARY_NAME.JMDICT,
            meaning: wordDetail.sense.map((sense) => sense.gloss.join('; ')),
          }}
        />
        {isSpeechAvailable && (
          <UiButton
            variant="secondary"
            size="icon-xs"
            onClick={() => speak(matchWord.current || wordDetail.reading[0])}
            className="ml-1 flex-shrink-0"
          >
            <Volume2Icon className="h-4 w-4" />
          </UiButton>
        )}
      </div>
      <ViewWordEntry.Meta entry={wordDetail} className="mt-2" />
      <ViewWordEntry.Sense
        showReference
        sense={wordDetail.sense}
        className="mt-6 mb-10 space-y-3"
        onSearchXRef={({ word }) => {
          window.dispatchEvent(new CustomEvent('search', { detail: word }));
        }}
      />
      <div>
        <ViewWordEntry.OtherForms entry={wordDetail}>
          <p className="font-semibold">Other Forms </p>
        </ViewWordEntry.OtherForms>
      </div>
      <WordStrokeOrderDiagrams entry={wordDetail} />
    </>
  );
}

export default WordDetailPage;
