import { Button } from '../Button';
import { MoreVert } from '@mui/icons-material';
import styles from './Card.module.css';
import Image from 'next/image'

interface Props {
    type: 'video' | 'text'
}

export function Card({ type }: Props) {
    return (
        <div className={styles.root}>
            <div className={styles.contentImage}>
                <Image
                    src="/images/img.png"
                    alt="XGROW"
                    width={134}
                    height={134}
                />
            </div>
            <div className={styles.contentInfo}>
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="font-normal">
                            Título
                        </p>
                    </div>
                    <div className="bg-black-100 rounded p-1">
                        <MoreVert />
                    </div>
                </div>
                <div className="flex flex-row items-center md:divide-x md:divide-gray-600 text-gray-secondary-70">
                    <div className="pr-3 text-gray-secondary-70">
                        <p className="text-xs ">
                            Tipo: Learning area
                        </p>
                    </div>
                    <div className="pl-3">
                        <p className="text-xs font-thin bg-black-60 py-1 px-2 rounded-md">
                            Produtividade
                        </p>
                    </div>
                </div>
                <div>
                    <Button icon={type == 'video' ? 'PlayCircle' : 'OpenInNew'} className="w-full">
                        Acessar conteúdo
                    </Button>
                </div>
            </div>
        </div>
      );
    };