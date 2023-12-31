import UiSkeleton from '@root/src/components/ui/skeleton';
import { DictWordEntry } from '@root/src/interface/dict.interface';
import {
  DICTIONARY_NAME,
  LOCALSTORAGE_KEYS,
} from '@root/src/shared/constant/constant';
import dictDB from '@root/src/shared/db/dict.db';
import { useSpeechSynthesis } from '@root/src/shared/hooks/useSpeechSynthesis';
import { cn } from '@root/src/shared/lib/shadcn-utils';
import findRandomWords from '@root/src/utils/findRandomWords';
import { parseJSON } from '@root/src/utils/helper';
import dayjs from 'dayjs';
import { Volume2Icon } from 'lucide-react';
import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

interface TodayWordStorage {
  id: number;
  date: string;
}

function SharedTodayWord({
  onOpen,
  onClick,
  className,
  ...props
}: React.DetailsHTMLAttributes<HTMLDivElement> & {
  onOpen?: (entryId: number) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [todayWord, setTodayWord] = useState<DictWordEntry | null>(null);

  const { speak, isSpeechAvailable } = useSpeechSynthesis();

  useEffectOnce(() => {
    (async () => {
      try {
        setIsLoading(true);

        const hasWordDict = await dictDB.metadata.get(DICTIONARY_NAME.JMDICT);
        if (!hasWordDict) return;

        const currentWord = parseJSON<TodayWordStorage, null>(
          localStorage.getItem(LOCALSTORAGE_KEYS.TODAY_WORD) ?? '',
          null,
        );
        if (currentWord) {
          const date = dayjs(currentWord.date).get('date');
          if (date === dayjs().get('date')) {
            const word = await dictDB.words.get(currentWord.id);

            if (word) {
              setTodayWord(word);
              return;
            }
          }
        }

        const [word] = (await findRandomWords()) ?? [];
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
        'bg-primary text-primary-foreground relative p-4 cursor-pointer rounded-lg dark:highlight-white/10',
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        if (todayWord) onOpen?.(todayWord.id);
      }}
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
            <div className="flex items-start">
              {todayWord.kanji ? (
                <p className="leading-tight text-xl flex-grow">
                  <span className="font-semibold">{todayWord.kanji[0]}</span>{' '}
                  <span className="inline-block">{todayWord.reading[0]}</span>
                </p>
              ) : (
                <p className="font-semibold leading-tight text-xl tracking-tight flex-grow">
                  {todayWord.reading[0]}
                </p>
              )}
              {isSpeechAvailable && (
                <button
                  className="mt-px"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    speak(todayWord.reading[0]);
                  }}
                >
                  <Volume2Icon className="h-5 w-5" />
                </button>
              )}
            </div>
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

export default SharedTodayWord;
