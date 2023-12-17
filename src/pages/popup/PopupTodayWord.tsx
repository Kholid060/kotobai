import UiSkeleton from '@root/src/components/ui/skeleton';
import { DictWordEntry } from '@root/src/interface/dict.interface';
import { LOCALSTORAGE_KEYS } from '@root/src/shared/constant/constant';
import dictDB from '@root/src/shared/db/dict.db';
import { cn } from '@root/src/shared/lib/shadcn-utils';
import { getRandomArbitrary, parseJSON } from '@root/src/utils/helper';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

interface TodayWordStorage {
  id: number;
  date: string;
}

const WORD_MIN_ID = 1000000;
const WORD_MAX_ID = 2859479;
const getRandWordId = (max: number, remainder?: number) =>
  Math.ceil(getRandomArbitrary(WORD_MIN_ID, max, remainder));

async function findRandomWord(retryCount = 0) {
  const length = await dictDB.words.count();
  if (length <= 0 || retryCount > 3) return null;

  const ids = Array.from({ length: 5 }, (_, idx) => {
    const withoutRemainder = idx > 2;

    return getRandWordId(
      withoutRemainder ? WORD_MAX_ID : 2000000,
      withoutRemainder ? undefined : 10,
    );
  });
  const words = await dictDB.words.bulkGet(ids);
  const word = words.find(Boolean);

  if (word) return word;

  return await findRandomWord(retryCount + 1);
}

function PopupTodayWord({
  className,
  ...props
}: React.DetailsHTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = useState(false);
  const [todayWord, setTodayWord] = useState<DictWordEntry>(null);

  useEffectOnce(() => {
    (async () => {
      try {
        setIsLoading(true);

        const currentWord = parseJSON<TodayWordStorage, null>(
          localStorage.getItem(LOCALSTORAGE_KEYS.TODAY_WORD),
          null,
        );
        if (currentWord) {
          const date = dayjs(currentWord.date).get('date');
          if (date === dayjs().get('date')) {
            const word = await dictDB.words.get(currentWord.id);
            setTodayWord(word);
            return;
          }
        }

        const word = await findRandomWord();
        if (!word) return;

        setTodayWord(word);
        localStorage.setItem(
          LOCALSTORAGE_KEYS.TODAY_WORD,
          JSON.stringify({
            id: word.id,
            date: new Date().toString(),
          }),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  });

  if (!todayWord) return null;

  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground relative p-4 cursor-pointer rounded-lg shadow-xl',
        className,
      )}
      {...props}
    >
      {isLoading || !todayWord ? (
        <>
          <UiSkeleton className="h-10 w-full bg-muted/20" />
          <UiSkeleton className="h-8 mt-2 w-full bg-muted/20" />
        </>
      ) : (
        <>
          <p className="text-sm text-primary-foreground/80 leading-tight">
            Today&apos;s word
          </p>
          <div className="font-sans-jp mt-1">
            {todayWord.kanji ? (
              <p className="leading-tight text-xl">
                <span className="font-semibold">{todayWord.kanji[0]}</span>{' '}
                <span className="inline-block">{todayWord.reading[0]}</span>
              </p>
            ) : (
              <p className="font-semibold leading-tight text-xl">
                {todayWord.reading[0]}
              </p>
            )}
            <ul className="font-sans list-decimal text-sm mt-2 line-clamp-4 hover:line-clamp-none">
              {todayWord.sense.map((sense, idx) => (
                <li key={idx} className="first-letter:capitalize leading-tight">
                  {sense.gloss.join('; ')}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default PopupTodayWord;